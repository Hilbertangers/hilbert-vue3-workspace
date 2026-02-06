<template>
  <div
    class="screenshots-canvas"
    @mousedown="onMousedown"
  >
    <canvas
      ref="canvasRef"
      :width="store.width * devicePixelRatio"
      :height="store.height * devicePixelRatio"
      :style="{
        width: store.width + 'px',
        height: store.height + 'px'
      }"
    />
    <div class="screenshots-canvas-mask" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { store, mutations } from './context'

const canvasRef = ref<HTMLCanvasElement>()
const ctx = ref<CanvasRenderingContext2D | null>(null)
const is = ref(false)
const point = ref<{ x: number; y: number } | null>(null)
const devicePixelRatio = window.devicePixelRatio

const emit = defineEmits<{
  (e: 'change', data: { x1: number; y1: number; x2: number; y2: number }): void
  (e: 'magnify', data: { x: number; y: number }): void
}>()

function draw() {
  if (!store.image || !ctx.value) return

  nextTick(() => {
    if (!ctx.value || !store.image) return
    ctx.value.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
    ctx.value.clearRect(0, 0, store.width, store.height)
    ctx.value.drawImage(
      store.image.el,
      0,
      0,
      store.image.width,
      store.image.height,
      0,
      0,
      store.width,
      store.height
    )
  })
}

function onMousedown(e: MouseEvent) {
  // 初始viewer框
  if (store.viewer || e.button !== 0) return // e.button 鼠标左键

  mutations.setContext({
    viewer: null,
    action: null,
    actionRef: null,
    stack: [],
    state: {},
    cursor: null
  })

  is.value = true
  point.value = { x: e.clientX, y: e.clientY }

  mutations.setContext((state) => ({
    viewer: { ...state.viewer, resizing: true }
  }))

  update(e)
}

function onMousemove(e: MouseEvent) {
  if (!store.viewer || (store.viewer && store.viewer.resizing)) {
    emit('magnify', {
      x: e.clientX,
      y: e.clientY
    })
  }

  if (!is.value) return
  update(e)
}

function onMouseup(e: MouseEvent) {
  if (is.value) {
    update(e)
    is.value = false
    mutations.setContext((state) => ({
      viewer: { ...state.viewer!, resizing: false }
    }))
  }
}

function update(e: MouseEvent) {
  if (!point.value) return
  const { x, y } = point.value
  emit('change', {
    x1: x,
    y1: y,
    x2: e.clientX,
    y2: e.clientY
  })
}

// Watch store changes to redraw
watch(
  () => store,
  () => {
    draw()
  },
  { deep: true }
)

onMounted(() => {
  if (canvasRef.value) {
    ctx.value = canvasRef.value.getContext('2d')
    draw()
    window.addEventListener('mousemove', onMousemove)
    window.addEventListener('mouseup', onMouseup)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMousemove)
  window.removeEventListener('mouseup', onMouseup)
})
</script>
