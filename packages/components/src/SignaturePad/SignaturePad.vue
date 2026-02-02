<template>
  <div class="signature-pad-wrapper">
    <canvas
      ref="backgroundCanvas"
      class="background-canvas"
    ></canvas>
    <canvas
      ref="signaturePad"
      class="signature-pad"
      @mousedown="startDrawing"
      @mousemove="draw"
      @mouseup="stopDrawing"
      @mouseleave="stopDrawing"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    ></canvas>
    <div class="signature-actions">
      <button @click="clear">清除</button>
      <button @click="save">保存</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

/* --------- 组件选项 --------- */
defineOptions({
  name: 'SignaturePad'
})

/* --------- 类型定义 --------- */
export interface BackgroundConfig {
  type: 'line' | 'grid' | 'image'
  color?: string
  lineHeight?: number
  gridSize?: number
  imageSrc?: string
  opacity?: number
}

export interface SignaturePadProps {
  background?: BackgroundConfig
}

export interface SignaturePadEmits {
  save: [dataUrl: string]
}

/* --------- Props & Emits --------- */
const props = withDefaults(defineProps<SignaturePadProps>(), {
  background: () => ({
    type: 'line',
    color: '#e5e5e5',
    lineHeight: 40,
    gridSize: 40,
    imageSrc: '',
    opacity: 0.2
  })
})

const emit = defineEmits<SignaturePadEmits>()

/* --------- 响应式状态 --------- */
const isDrawing = ref(false)
const backgroundCanvas = ref<HTMLCanvasElement>()
const signaturePad = ref<HTMLCanvasElement>()
let ctx: CanvasRenderingContext2D | null = null
let bgCtx: CanvasRenderingContext2D | null = null
let lastX = 0
let lastY = 0
let lastTime = 0
let lastWidth = 0
const maxWidth = 4
const minWidth = 0.5
let velocity = 0
const points: [number, number][] = []
let animationFrameId: number | null = null
let clickStartTime = 0
const clickThreshold = 200
const pointSize = 3

/* --------- 方法 --------- */

// 计算笔画宽度
function calculateLineWidth(velocity: number): number {
  // 根据速度计算线条宽度
  const width = Math.max(maxWidth / (velocity + 1), minWidth)
  // 平滑过渡
  lastWidth = lastWidth ? (width + lastWidth) / 2 : width
  return lastWidth
}

// 计算速度
function calculateVelocity(x: number, y: number, time: number): number {
  if (lastTime) {
    const dx = x - lastX
    const dy = y - lastY
    const dt = time - lastTime
    return Math.sqrt(dx * dx + dy * dy) / dt
  }
  return 0
}

function startDrawing(event: MouseEvent) {
  event.preventDefault()
  isDrawing.value = true
  const { offsetX, offsetY } = event
  lastX = offsetX
  lastY = offsetY
  lastTime = Date.now()
  clickStartTime = Date.now()
  lastWidth = 0
  points.length = 0
  points.push([offsetX, offsetY])

  animateDrawing()
}

function draw(event: MouseEvent) {
  event.preventDefault()
  if (!isDrawing.value) return

  const { offsetX, offsetY } = event
  // 只存储点位置
  points.push([offsetX, offsetY])
}

// 新增动画方法
function animateDrawing() {
  if (!isDrawing.value) return

  if (points.length > 1) {
    const currentPoint = points[points.length - 1]
    const prevPoint = points[points.length - 2]

    const currentTime = Date.now()
    velocity = calculateVelocity(currentPoint[0], currentPoint[1], currentTime)
    const lineWidth = calculateLineWidth(velocity)

    if (ctx) {
      ctx.beginPath()
      ctx.lineWidth = lineWidth

      if (points.length === 2) {
        ctx.moveTo(prevPoint[0], prevPoint[1])
        ctx.lineTo(currentPoint[0], currentPoint[1])
      } else {
        const beforePrevPoint = points[points.length - 3]
        const ctrl = getControlPoint(beforePrevPoint, prevPoint, currentPoint)
        ctx.moveTo(beforePrevPoint[0], beforePrevPoint[1])
        ctx.quadraticCurveTo(ctrl.x, ctrl.y, currentPoint[0], currentPoint[1])
      }

      ctx.stroke()
    }

    // 只保留最后三个点
    if (points.length > 3) {
      points.splice(0, points.length - 3)
    }

    lastX = currentPoint[0]
    lastY = currentPoint[1]
    lastTime = currentTime
  }

  animationFrameId = requestAnimationFrame(animateDrawing)
}

// 获取控制点
function getControlPoint(_p0: [number, number], p1: [number, number], _p2: [number, number]) {
  const x = p1[0]
  const y = p1[1]
  return { x, y }
}

function handleTouchStart(event: TouchEvent) {
  event.preventDefault()
  if (!signaturePad.value) return

  const touch = event.touches[0]
  const rect = signaturePad.value.getBoundingClientRect()
  const x = touch.clientX - rect.left
  const y = touch.clientY - rect.top

  lastX = x
  lastY = y
  lastTime = Date.now()
  clickStartTime = Date.now()
  lastWidth = 0
  isDrawing.value = true
  points.length = 0
  points.push([x, y])

  animateDrawing()
}

function handleTouchMove(event: TouchEvent) {
  event.preventDefault()
  if (!isDrawing.value || !signaturePad.value) return

  const touch = event.touches[0]
  const rect = signaturePad.value.getBoundingClientRect()
  const x = touch.clientX - rect.left
  const y = touch.clientY - rect.top

  points.push([x, y])
}

function stopDrawing() {
  if (!isDrawing.value) return

  // 检查是否是快速点击
  const clickDuration = Date.now() - clickStartTime
  if (clickDuration < clickThreshold && points.length <= 1) {
    drawPoint(lastX, lastY)
  }

  isDrawing.value = false
  points.length = 0
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
    animationFrameId = null
  }
}

// 添加绘制圆点的方法
function drawPoint(x: number, y: number) {
  if (!ctx) return

  const radius = pointSize

  // 保存当前的绘图状态
  ctx.save()

  // 设置绘制属性
  ctx.fillStyle = ctx.strokeStyle // 使用与线条相同的颜色

  // 绘制实心圆
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2, true)
  ctx.fill()

  // 恢复绘图状态
  ctx.restore()
}

function drawBackground() {
  if (!backgroundCanvas.value || !bgCtx) return

  const { type, color = '#e5e5e5', lineHeight = 40, gridSize = 40, imageSrc = '', opacity = 0.2 } = props.background!
  const canvas = backgroundCanvas.value
  const ctx = bgCtx

  // 清除旧背景
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // 设置透明度
  ctx.globalAlpha = opacity

  switch(type) {
    case 'line':
      drawLineBackground(ctx, color, lineHeight)
      break
    case 'grid':
      drawGridBackground(ctx, color, gridSize)
      break
    case 'image':
      drawImageBackground(ctx, imageSrc)
      break
  }

  // 重置透明度
  ctx.globalAlpha = 1
}

function drawLineBackground(ctx: CanvasRenderingContext2D, color: string, lineHeight: number) {
  if (!backgroundCanvas.value) return

  ctx.strokeStyle = color
  ctx.lineWidth = 1

  ctx.beginPath()
  for (let y = lineHeight; y < backgroundCanvas.value.height; y += lineHeight) {
    ctx.moveTo(0, y)
    ctx.lineTo(backgroundCanvas.value.width, y)
  }
  ctx.stroke()
}

function drawGridBackground(ctx: CanvasRenderingContext2D, color: string, gridSize: number) {
  if (!backgroundCanvas.value) return

  ctx.strokeStyle = color
  ctx.lineWidth = 1

  // 绘制横线
  ctx.beginPath()
  for (let y = gridSize; y < backgroundCanvas.value.height; y += gridSize) {
    ctx.moveTo(0, y)
    ctx.lineTo(backgroundCanvas.value.width, y)
  }

  // 绘制竖线
  for (let x = gridSize; x < backgroundCanvas.value.width; x += gridSize) {
    ctx.moveTo(x, 0)
    ctx.lineTo(x, backgroundCanvas.value.height)
  }
  ctx.stroke()
}

async function drawImageBackground(ctx: CanvasRenderingContext2D, imageSrc: string) {
  if (!imageSrc) return

  try {
    const image = await loadImage(imageSrc)
    if (!backgroundCanvas.value) return

    ctx.drawImage(image, 0, 0, backgroundCanvas.value.width, backgroundCanvas.value.height)
  } catch (error) {
    console.error('Failed to load background image:', error)
  }
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

function clear() {
  if (!signaturePad.value || !ctx) return
  ctx.clearRect(0, 0, signaturePad.value.width, signaturePad.value.height)
}

function save() {
  if (!signaturePad.value) return
  const dataUrl = signaturePad.value.toDataURL('image/png')
  emit('save', dataUrl)
}

function handleTouchEnd(event: TouchEvent) {
  event.preventDefault()

  // 检查是否是快速点击
  const clickDuration = Date.now() - clickStartTime
  if (clickDuration < clickThreshold && points.length <= 1) {
    drawPoint(lastX, lastY)
  }

  stopDrawing()
}

/* --------- 生命周期 --------- */
onMounted(() => {
  // 初始化背景 canvas
  if (!backgroundCanvas.value || !signaturePad.value) return

  bgCtx = backgroundCanvas.value.getContext('2d')

  // 初始化签名 canvas
  ctx = signaturePad.value.getContext('2d', {
    desynchronized: true
  })

  // 设置画布大小
  const dpr = window.devicePixelRatio || 1
  const width = signaturePad.value.offsetWidth
  const height = signaturePad.value.offsetHeight

  // 设置背景 canvas 大小
  backgroundCanvas.value.width = width * dpr
  backgroundCanvas.value.height = height * dpr
  backgroundCanvas.value.style.width = width + 'px'
  backgroundCanvas.value.style.height = height + 'px'
  if (bgCtx) {
    bgCtx.scale(dpr, dpr)
  }

  // 设置签名 canvas 大小
  signaturePad.value.width = width * dpr
  signaturePad.value.height = height * dpr
  signaturePad.value.style.width = width + 'px'
  signaturePad.value.style.height = height + 'px'
  if (ctx) {
    ctx.scale(dpr, dpr)

    // 初始化签名 canvas
    ctx.strokeStyle = '#000'
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.miterLimit = 1
  }

  // 绘制背景
  drawBackground()
})

onBeforeUnmount(() => {
  // 清理动画
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
    animationFrameId = null
  }
})
</script>
