<template>
  <div
    :class="['screenshots', className]"
    ref="bodyRef"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <screenshots-canvas
      @change="onCanvasChange"
      @magnify="onMagnifyChange"
    />
    <screenshots-magnifier
      v-if="!store.viewer || (store.viewer && store.viewer.resizing)"
    />
    <screenshots-viewer
      @change="onViewerChange"
      @emit="onEmit"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { store, mutations } from './context'
import ScreenshotsCanvas from './ScreenshotsCanvas.vue'
import ScreenshotsMagnifier from './ScreenshotsMagnifier.vue'
import ScreenshotsViewer from './ScreenshotsViewer.vue'

interface Props {
  className?: string
  width?: number | string
  height?: number | string
  image?: string
}

const props = withDefaults(defineProps<Props>(), {
  className: '',
  width: 0,
  height: 0,
  image: ''
})

const emit = defineEmits<{
  (e: 'onOk', data: { viewer: any; dataURL: string }): void
  (e: 'onCancel'): void
}>()

const bodyRef = ref<HTMLDivElement>()

function onEmit(event: string, args: any[]) {
  if (event === 'onOk' && Array.isArray(args)) {
    emit('onOk', args[0])
  } else if (event === 'onCancel') {
    emit('onCancel')
  }
}

function getImage(): Promise<{ el: HTMLImageElement | null; width: number; height: number }> {
  return new Promise((resolve) => {
    if (!props.image) {
      return resolve({
        el: null,
        width: 0,
        height: 0
      })
    }
    const $image = new Image()
    $image.src = props.image
    $image.addEventListener('load', () => {
      resolve({
        el: $image,
        width: $image.width,
        height: $image.height
      })
    })
    $image.addEventListener('error', () => {
      resolve({
        el: null,
        width: 0,
        height: 0
      })
    })
  })
}

function onCanvasChange({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  if (!bodyRef.value) return
  const { left, top } = bodyRef.value.getBoundingClientRect()
  x1 = x1 - left
  y1 = y1 - top
  x2 = x2 - left
  y2 = y2 - top
  setViewer({ x1, y1, x2, y2 })
}

function onMagnifyChange({ x, y }: { x: number; y: number }) {
  if (!bodyRef.value) return
  const { left, top, width, height } = bodyRef.value.getBoundingClientRect()
  if (x >= left && x <= left + width && y >= top && y <= top + height) {
    mutations.setContext({
      magnifyPoint: {
        x: x - left,
        y: y - top,
        right: left + width,
        bottom: top + height
      }
    })
  }
}

function onViewerChange({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  setViewer({ x1, y1, x2, y2 })
}

function setViewer({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  const x = x1
  const y = y1

  // 交换值
  if (x1 > x2) {
    x1 = x2
    x2 = x
  }

  if (y1 > y2) {
    y1 = y2
    y2 = y
  }

  // 把图形限制在元素里面
  if (x1 < 0) {
    x1 = 0
    x2 = store.viewer!.x2
  }

  if (x2 > store.width) {
    x2 = store.width
    x1 = store.viewer!.x1
  }

  if (y1 < 0) {
    y1 = 0
    y2 = store.viewer!.y2
  }

  if (y2 > store.height) {
    y2 = store.height
    y1 = store.viewer!.y1
  }

  mutations.setContext((state) => ({
    viewer: { ...state.viewer!, x1, y1, x2, y2 }
  }))
}

onMounted(() => {
  getImage().then(image => {
    mutations.initContext({
      image: image as any,
      width: Number(props.width) || 0,
      height: Number(props.height) || 0
    })
  })
})

// 暴露store供外部访问
defineExpose({
  store
})
</script>
