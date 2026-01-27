<template>
  <div
    class="angle-slider"
    :style="{
      width: size + 'px',
      height: size + 'px',
      '--bg-color': backgroundColor,
      '--progress-color': progressColor,
      '--end-mark-color': endMarkColor,
    }"
    ref="container"
    @mousedown="handleMouseDown"
    @touchstart="handleTouchStart"
  >
    <div class="angle-slider__circle">
      <!-- 进度圆环 -->
      <svg v-if="showProgress" class="angle-slider__progress" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          :stroke="progressColor"
          stroke-width="4"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="dashOffset"
          transform="rotate(-90 50 50)"
        />
      </svg>
      <!-- 步进刻度线 -->
      <div v-if="useStep && showUseStep" class="angle-slider__step-ticks">
        <div
          v-for="tick in stepTicks"
          :key="tick"
          class="angle-slider__step-tick"
          :style="{ transform: `rotate(${tick - 90}deg)` }"
          :class="{ 'angle-slider__step-tick--active': tick <= modelValue }"
        ></div>
      </div>
      <!-- 终点标记 -->
      <div
        v-if="showEndMark"
        class="angle-slider__end-mark"
        :style="{ transform: `rotate(${modelValue - 90}deg)` }"
      >
        <div class="angle-slider__end-mark-line"></div>
      </div>
      <!-- 刻度线 -->
      <div class="angle-slider__ticks">
        <div
          v-for="tick in ticks"
          :key="tick"
          class="angle-slider__tick"
          :style="{ transform: `rotate(${tick}deg)` }"
          :class="{ 'angle-slider__tick--active': tick <= modelValue }"
        ></div>
      </div>
    </div>
    <div class="value-display">{{ modelValue }}°</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeUnmount, watch } from 'vue'

/* --------- 组件选项 --------- */
defineOptions({
  name: 'AngleSlider'
})

/* --------- 类型定义 --------- */
export interface AngleSliderProps {
  modelValue?: number
  size?: number
  step?: number
  useStep?: boolean
  showUseStep?: boolean
  backgroundColor?: string
  progressColor?: string
  showProgress?: boolean
  endMarkColor?: string
  showEndMark?: boolean
}

/* --------- Props & Emits --------- */
const props = withDefaults(defineProps<AngleSliderProps>(), {
  modelValue: 0,
  size: 100,
  step: 5,
  useStep: false,
  showUseStep: true,
  backgroundColor: '#f1f3f5',
  progressColor: '#228be6',
  showProgress: true,
  endMarkColor: '#228be6',
  showEndMark: true,
})

const emit = defineEmits<{
  'update:modelValue': [val: number]
}>()

/* --------- 响应式状态 --------- */
const isDragging = ref(false)
const container = ref<HTMLDivElement>()

/* --------- 计算属性 --------- */
const ticks = computed(() => Array.from({ length: 72 }, (_, i) => i * 5))
const circumference = computed(() => 2 * Math.PI * 48)

const dashOffset = computed(() => circumference.value * (1 - props.modelValue / 360))

const stepTicks = computed(() => {
  const result = []
  for (let i = 0; i <= 360; i += props.step) {
    result.push(i)
  }
  return result
})

/* --------- 侦听器 --------- */
watch(
  () => props.useStep,
  (newVal) => {
    if (newVal && props.modelValue % props.step !== 0) {
      const snappedValue = Math.round(props.modelValue / props.step) * props.step
      emit('update:modelValue', snappedValue)
    }
  },
  { immediate: true }
)

/* --------- 事件处理 --------- */
function handleMouseDown(event: MouseEvent) {
  event.preventDefault()
  isDragging.value = true
  updateAngle(event.clientX, event.clientY)
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
}

function handleMouseMove(event: MouseEvent) {
  if (!isDragging.value) return
  updateAngle(event.clientX, event.clientY)
}

function handleMouseUp() {
  isDragging.value = false
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
}

function handleTouchStart(event: TouchEvent) {
  event.preventDefault()
  isDragging.value = true
  const touch = event.touches[0]
  updateAngle(touch.clientX, touch.clientY)
  document.addEventListener('touchmove', handleTouchMove)
  document.addEventListener('touchend', handleTouchEnd)
}

function handleTouchMove(event: TouchEvent) {
  if (!isDragging.value) return
  const touch = event.touches[0]
  updateAngle(touch.clientX, touch.clientY)
}

function handleTouchEnd() {
  isDragging.value = false
  document.removeEventListener('touchmove', handleTouchMove)
  document.removeEventListener('touchend', handleTouchEnd)
}

function updateAngle(clientX: number, clientY: number) {
  if (!container.value) return

  const rect = container.value.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2

  const x = clientX - centerX
  const y = clientY - centerY

  // 计算角度
  let angle = Math.atan2(y, x) * (180 / Math.PI)
  // 调整角度，使0度从正上方开始
  angle = (angle + 450) % 360

  // 如果启用步进，将角度吸附到最近的步进值
  if (props.useStep) {
    angle = Math.round(angle / props.step) * props.step
  }

  emit('update:modelValue', Math.round(angle))
}

/* --------- 生命周期 --------- */
onBeforeUnmount(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
  document.removeEventListener('touchmove', handleTouchMove)
  document.removeEventListener('touchend', handleTouchEnd)
})
</script>
