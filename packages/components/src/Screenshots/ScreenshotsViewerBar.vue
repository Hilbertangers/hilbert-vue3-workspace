<template>
  <div
    class="screenshots-viewer-bar"
    ref="barRef"
    :style="{
      display: store.viewer && !store.viewer.resizing && !store.viewer.moving ? 'block' : 'none',
      left: x + 'px',
      top: y + 'px'
    }"
  >
    <div class="screenshots-viewer-bar-container">
      <div class="screenshots-viewer-bar-icons">
        <template v-for="(item, index) in store.actions">
          <!-- 分隔线 -->
          <div
            v-if="(item as any).type === 'divider'"
            :key="index"
            class="screenshots-viewer-bar-divider"
          />
          <!-- 按钮 -->
          <div
            v-else
            :class="[
              'screenshots-viewer-bar-button',
              (store.action && store.action.name === (item as any).key.name) && 'screenshots-viewer-bar-button-active',
              (item as any).key.title === '撤销' && !store.stack.length && 'screenshots-viewer-bar-button-disabled'
            ]"
            :title="(item as any).key.title"
            @click="onClick((item as any).key)"
          >
            <i :class="(item as any).key.icon" />
          </div>
        </template>
      </div>
    </div>
    <div class="screenshots-viewer-bar-container">
      <div
        v-if="option"
        class="screenshots-viewer-bar-options"
      >
        <component ref="actionRef" :is="option" :ctx="props.ctx" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUpdated } from 'vue'
import { store, mutations, triggerActionChange } from './context'

const props = defineProps<{
  ctx: CanvasRenderingContext2D | null
}>()

const emit = defineEmits<{
  (e: 'action', Action: any): void
}>()

const barRef = ref<HTMLDivElement>()
const actionRef = ref()
const x = ref(0)
const y = ref(0)

const option = computed(() => {
  if (!store.action) return null
  // 检查是否是Vue组件(有__vccOpts或setup)
  const action = store.action as any
  if (action.__vccOpts || action.setup || action.render) {
    return action
  }
  return null
})

function setPosition() {
  if (!store.viewer || !barRef.value) return
  const { x2, y2 } = store.viewer
  if (!x2 || !y2) return
  const { offsetWidth, offsetHeight } = barRef.value

  let x1 = x2 - offsetWidth
  let y1 = y2 + 10

  if (x1 < 0) {
    x1 = 0
  }

  if (y1 > store.height - offsetHeight) {
    y1 = y2 - offsetHeight - 10
  }

  if (x.value === x1 && y.value === y1) return

  x.value = x1
  y.value = y1
}

function setActionRef() {
  setTimeout(() => {
    mutations.setContext({
      actionRef: actionRef.value
    }, () => {
      triggerActionChange(actionRef.value)
    })
  }, 0)
}

function onClick(Action: any) {
  if (!Action) return
  emit('action', Action)
}

watch(
  () => store.viewer,
  setPosition,
  { deep: true }
)

watch(
  () => store.action,
  setActionRef,
  { deep: true }
)

onMounted(() => {
  setPosition()
})

onUpdated(() => {
  setPosition()
})
</script>
