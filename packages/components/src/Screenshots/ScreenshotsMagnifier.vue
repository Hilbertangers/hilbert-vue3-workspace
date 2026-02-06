<template>
  <div
    class="screenshots-magnifier"
    :style="{
      transform: `translate(${left}px, ${top}px)`
    }"
  >
    <div class="screenshots-magnifier-canvas">
      <canvas
        ref="magnifierRef"
        :width="width"
        :height="height"
      />
      <div class="screenshots-magnifier-canvas-crosshair" />
    </div>
    <div class="screenshots-magnifier-explain">
      <div class="screenshots-magnifier-explain-rgb">RGB：{{ rgb }}</div>
      <div class="screenshots-magnifier-explain-site">坐标：({{ store.magnifyPoint.x }},{{ store.magnifyPoint.y }})</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { store } from './context'

const magnifierRef = ref<HTMLCanvasElement>()
const ctx = ref<CanvasRenderingContext2D | null>(null)
const rgb = ref('')
const width = 120
const height = 90
const explain = {
  width: 120,
  height: 40
}
const magnifyRate = 3

const left = computed(() => {
  const { x, right } = store.magnifyPoint
  const bias = 5
  return x + width + bias >= (right || 0)
    ? x - width - bias
    : x + bias
})

const top = computed(() => {
  const { y, bottom } = store.magnifyPoint
  const bias = 5
  return y + height + explain.height + bias >= (bottom || 0)
    ? y - height - explain.height - bias
    : y + bias
})

function draw() {
  const { image, viewer, magnifyPoint, width: storeWidth, height: storeHeight } = store
  const { x, y } = magnifyPoint

  if (!image || x < 0 || y < 0 || (viewer && !viewer.resizing)) return

  const magnifyX = image.width * x / storeWidth
  const magnifyY = image.height * y / storeHeight
  const magnifyW = width
  const magnifyH = height

  if (!ctx.value) return

  // 获取颜色数据
  const colorData = ctx.value.getImageData(magnifyW / 2, magnifyH / 2, 1, 1).data
  rgb.value = `(${colorData[0]},${colorData[1]},${colorData[2]})`

  // 清除并重绘放大区域
  ctx.value.clearRect(0, 0, magnifyW, magnifyH)
  ctx.value.drawImage(
    image.el,
    magnifyX - magnifyW / magnifyRate / 2,
    magnifyY - magnifyH / magnifyRate / 2,
    magnifyW / magnifyRate,
    magnifyH / magnifyRate,
    0,
    0,
    magnifyW,
    magnifyH
  )
}

// Watch store changes to redraw
watch(
  () => ({ ...store }),
  () => {
    draw()
  },
  { deep: true }
)

onMounted(() => {
  if (magnifierRef.value) {
    ctx.value = magnifierRef.value.getContext('2d')
    draw()
  }
})
</script>
