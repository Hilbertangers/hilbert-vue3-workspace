<template>
  <div
    class="screenshots-viewer"
    :style="{ display: store.viewer ? 'block' : 'none' }"
  >
    <div
      ref="viewerRef"
      class="screenshots-viewer-body"
      :style="{
        left: size.x + 'px',
        top: size.y + 'px',
        width: size.width + 'px',
        height: size.height + 'px',
        overflow: store.action ? 'hidden' : 'inherit'
      }"
    >
      <canvas
        ref="canvasRef"
        :width="size.width * devicePixelRatio"
        :height="size.height * devicePixelRatio"
        :style="{
          width: size.width + 'px',
          height: size.height + 'px'
        }"
      />
      <div
        class="screenshots-viewer-border"
        :style="{ cursor: currentCursor }"
        @mousedown="e => onMousedown(e, 'move')"
      />
      <div
        v-for="pointer in pointers"
        :key="pointer"
        :class="`screenshots-viewer-pointer-${pointer}`"
        @mousedown="e => onMousedown(e, pointer)"
      />
      <screenshots-viewer-edit-point
        v-if="store.action"
        :pointers="store.editPointers"
      />
    </div>
    <screenshots-viewer-bar @action="onAction" :ctx="ctx" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { store, mutations, getActionChangeRef } from './context'
import ScreenshotsViewerBar from './ScreenshotsViewerBar.vue'
import ScreenshotsViewerEditPoint from './ScreenshotsViewerEditPoint.vue'

const canvasRef = ref<HTMLCanvasElement>()
const viewerRef = ref<HTMLDivElement>()
const ctx = ref<CanvasRenderingContext2D | null>(null)
const actionType = ref<string | null>(null)
const startPoint = ref<{ x: number; y: number } | null>(null)
const viewerData = ref<any>(null)
const devicePixelRatio = window.devicePixelRatio

const emit = defineEmits<{
  (e: 'change', data: { x1: number; y1: number; x2: number; y2: number }): void
  (e: 'emit', event: string, ...args: any[]): void
}>()

const size = computed(() => {
  if (!store.viewer) {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }
  }
  const { x1, y1, x2, y2 } = store.viewer
  return {
    x: x1,
    y: y1,
    width: x2 - x1,
    height: y2 - y1
  }
})

const currentCursor = computed(() => {
  if (store.cursor) {
    return store.cursor
  }
  if (store.action) {
    return 'default'
  }
  return 'grab'
})

const pointers = computed(() => {
  const pointerList = [
    'top',
    'top-right',
    'right',
    'right-bottom',
    'bottom',
    'bottom-left',
    'left',
    'left-top'
  ]
  return store.action ? [] : pointerList
})

const actionArgs = computed(() => {
  return {
    viewer: viewerRef.value,
    el: canvasRef.value,
    ctx: ctx.value,
    context: {
      image: store.image,
      viewer: store.viewer,
      width: store.width,
      height: store.height,
      stack: store.stack,
      action: store.action,
      actionRef: store.actionRef,
      actions: store.actions,
      border: store.border,
      font: store.font,
      color: store.color,
      cursor: store.cursor,
      editPointers: store.editPointers
    },
    setContext: mutations.setContext,
    emit: onEmit
  }
})

const drawRequested = ref(false)

function requestDraw() {
  if (drawRequested.value) return
  drawRequested.value = true
  requestAnimationFrame(() => {
    draw()
    drawRequested.value = false
  })
}

function draw() {
  const { image, width, height, stack } = store
  if (!image || !ctx.value) return
  const { x, y, width: w, height: h } = size.value
  const rx = image.width / width
  const ry = image.height / height

  ctx.value.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
  ctx.value.clearRect(0, 0, w, h)
  ctx.value.drawImage(image.el, x * rx, y * ry, w * rx, h * ry, 0, 0, w, h)
  stack.forEach(item => item.draw(ctx.value, item.history[0], item))
}

async function onMousedown(e: MouseEvent, type: string) {
  const { viewer, action, actionRef } = store
  if (!viewer) return
  if (!action) {
    if (!type || e.button !== 0) return
    actionType.value = type
    startPoint.value = { x: e.clientX, y: e.clientY }
    viewerData.value = { ...viewer }

    if (type === 'move') {
      mutations.setContext((state) => ({
        viewer: { ...state.viewer!, moving: true },
        cursor: 'grabbing'
      }))
    } else {
      mutations.setContext((state) => ({
        viewer: { ...state.viewer!, resizing: true }
      }))
    }
  } else {
    const current = handlePointInRecord(e)
    if (current.type && (current.type !== action.type)) {
      const Action = store.actions.find((t: any) => t.key.type === current.type)?.key

      if (Action) {
        const { actionRef: nextActionRef } = await onAction(Action)

        if (nextActionRef) {
          if (typeof nextActionRef.mousemove === 'function') {
            nextActionRef.mousemove(e, actionArgs.value, current)
          }
          if (typeof nextActionRef.mousedown === 'function') {
            nextActionRef.mousedown(e, actionArgs.value)
          }
        }
      }
    } else {
      if (typeof (actionRef as any)?.mousedown === 'function') {
        (actionRef as any)?.mousedown(e, actionArgs.value)
      }
    }
  }
}

function onMousemove(e: MouseEvent) {
  const { viewer, action, actionRef } = store
  if (!viewer) return
  if (!action) {
    if (actionType.value === 'move') {
      move(e)
    } else if (actionType.value) {
      resize(e)
    }
  } else {
    if (typeof (actionRef as any)?.mousemove === 'function') {
      const current = handlePointInRecord(e)
      ;(actionRef as any)?.mousemove(e, actionArgs.value, current)
    }
  }
}

function onMouseup(e: MouseEvent) {
  const { viewer, action, actionRef } = store
  if (!viewer) return
  if (!action) {
    if (actionType.value) {
      if (actionType.value === 'move') {
        mutations.setContext({ cursor: null })
      }
      mutations.setContext((state) => ({
        viewer: { ...state.viewer!, resizing: false, moving: false }
      }))
      actionType.value = null
      startPoint.value = null
      viewerData.value = null
    }
  } else {
    if (typeof (actionRef as any)?.mouseup === 'function') {
      (actionRef as any)?.mouseup(e, actionArgs.value)
    }
  }
}

function move(e: MouseEvent) {
  if (!viewerData.value) return
  const x = e.clientX - (startPoint.value?.x || 0)
  const y = e.clientY - (startPoint.value?.y || 0)
  const { x1, y1, x2, y2 } = viewerData.value
  emit('change', {
    x1: x1 + x,
    y1: y1 + y,
    x2: x2 + x,
    y2: y2 + y
  })
}

function resize(e: MouseEvent) {
  if (!viewerData.value) return
  const x = e.clientX - (startPoint.value?.x || 0)
  const y = e.clientY - (startPoint.value?.y || 0)
  let { x1, y1, x2, y2 } = viewerData.value

  switch (actionType.value) {
    case 'top':
      y1 += y
      break
    case 'top-right':
      x2 += x
      y1 += y
      break
    case 'right':
      x2 += x
      break
    case 'right-bottom':
      x2 += x
      y2 += y
      break
    case 'bottom':
      y2 += y
      break
    case 'bottom-left':
      x1 += x
      y2 += y
      break
    case 'left':
      x1 += x
      break
    case 'left-top':
      x1 += x
      y1 += y
      break
    default:
      return
  }
  emit('change', { x1, y1, x2, y2 })
}

function handlePointInRecord(e: MouseEvent) {
  if (!canvasRef.value || !ctx.value) return { action: null, index: -1, type: '' }
  const { left, top } = canvasRef.value.getBoundingClientRect()
  const x = (e.clientX - left) * devicePixelRatio
  const y = (e.clientY - top) * devicePixelRatio

  let action = null
  let type = ''
  let index = -1

  store.stack.some((t, i) => {
    const recent = t.history[0]

    if (['rect', 'ellipse', 'brush'].includes(t.type)) {
      if (ctx.value!.isPointInStroke(recent.path, x, y)) {
        action = recent
        type = t.type
        index = i
        return true
      }
    }

    if (['arrow'].includes(t.type)) {
      if (ctx.value!.isPointInStroke(recent.path, x, y) ||
          ctx.value!.isPointInPath(recent.path, x, y)) {
        action = recent
        type = t.type
        index = i
        return true
      }
    }

    if (t.type === 'text') {
      const textRect = recent.domClientRect
      const textX = textRect.left - left
      const textY = textRect.top - top
      const assertX = x >= textX && x <= (textX + textRect.width)
      const assertY = y >= textY && y <= (textY + textRect.height)
      if (assertX && assertY) {
        action = recent
        type = t.type
        index = i
        return true
      }
    }
  })
  return { action, index, type }
}

async function onAction(Action: any) {
  console.log("🚀 ~ onAction ~ Action:", Action)
  const lastAction = store.action
  const lastActionRef = store.actionRef

  if (
    Action.type !== 'undo' &&
    lastAction &&
    (Action.type !== lastAction.type)
  ) {
    lastActionRef?.beforeUnMount && lastActionRef.beforeUnMount()
  }

  // 特殊组件不作为vueIns，直接构造
  if (
    Action.type === 'undo' ||
    Action.type === 'ok' ||
    Action.type === 'cancel'
  ) {
    if (Action.type === 'ok') {
      setTimeout(() => { // 处理文本action时需要宏任务一下，优先text的blur事件
        setTimeout(() => {
          // @ts-ignore
          let _nextAction = new Action(actionArgs.value)
          Action = Object.keys(_nextAction).length ? _nextAction : null
        }, 0)
      }, 16)
    } else {
      // @ts-ignore
      let _nextAction = new Action(actionArgs.value)
      Action = Object.keys(_nextAction).length ? _nextAction : null
    }
  }

  mutations.setContext({
    action: Action
  })

  let actionRef = null
  if (Action) {
    actionRef = await getActionChangeRef()
    console.log("🚀 ~ onAction ~ actionRef:", actionRef)
  }
  return {
    action: Action,
    actionRef,
  }
}

function onEmit(event: string, ...args: any[]) {
  emit('emit', event, ...args)
}

// Watch store changes to redraw
// 参考Vue2版本的watchStoreTop实现，使用浅层监听
watch(
  () => store.stack,
  () => {
    requestDraw()
  }
)
watch(
  () => store.stackVersion,
  () => {
    requestDraw()
  }
)
watch(
  () => store.viewer,
  () => {
    requestDraw()
  }
)
watch(
  () => store.image,
  () => {
    requestDraw()
  }
)

onMounted(() => {
  if (canvasRef.value) {
    ctx.value = canvasRef.value.getContext('2d')
    requestDraw()
    window.addEventListener('mousemove', onMousemove)
    window.addEventListener('mouseup', onMouseup)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMousemove)
  window.removeEventListener('mouseup', onMouseup)
})
</script>
