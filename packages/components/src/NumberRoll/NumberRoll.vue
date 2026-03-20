<template>
  <div class="number-roll">
    <div
      class="number-roll-stage"
      v-for="(_digit, index) in digits"
      :key="index"
      :style="stageStyle"
    >
      <div
        class="number-roll-wrapper"
        :style="{
          transform: `rotateX(${rotationAngles[index]}deg)`,
          transition: `transform ${transitionDuration}ms cubic-bezier(0.4, 0.0, 0.2, 1)`
        }"
      >
        <div
          class="number-roll-item"
          v-for="num in 10"
          :key="num - 1"
          :style="getNumberItemStyle(num)"
        >
          {{ num - 1 }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

export interface NumberRollProps {
  modelValue: number
  width?: number | string
  height?: number | string
  fontSize?: number | string
  textColor?: string
  backgroundColor?: string
  borderColor?: string
  showBorder?: boolean
  transitionDuration?: number
  fontFamily?: string
  useGradient?: boolean
}

const props = withDefaults(defineProps<NumberRollProps>(), {
  modelValue: 0,
  width: 50,
  height: 60,
  fontSize: 32,
  textColor: '#ffffff',
  backgroundColor: '#1a1a2e',
  borderColor: '#4a4a6a',
  showBorder: true,
  transitionDuration: 600,
  fontFamily: 'Arial, sans-serif',
  useGradient: true
})

// Track rotation state for each digit position
const rotationState = ref<Array<{ current: number; lastRotate: number }>>([])

// Convert number to digits array
const digits = computed(() => {
  return Math.abs(props.modelValue).toString().split('')
})

const stageStyle = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  height: typeof props.height === 'number' ? `${props.height}px` : props.height,
  perspective: `calc(${typeof props.height === 'number' ? props.height : 60}px * 3)`,
  backgroundColor: props.backgroundColor,
  border: props.showBorder ? `2px solid ${props.borderColor}` : 'none',
  borderRadius: '8px'
}))

const heightInPixels = computed(() => {
  return typeof props.height === 'number' ? props.height : parseInt(props.height as string) || 60
})

const baseItemStyle = computed(() => ({
  fontSize: typeof props.fontSize === 'number' ? `${props.fontSize}px` : props.fontSize,
  fontFamily: props.fontFamily,
  color: props.textColor
}))

// Get individual number item style with correct 3D transform
function getNumberItemStyle(num: number) {
  const rotateX = (num - 1) * 36 // 0, 36, 72, ...
  const translateZ = heightInPixels.value
  return {
    ...baseItemStyle.value,
    transform: `rotateX(${rotateX}deg) translateZ(${translateZ}px)`
  }
}

// Computed rotation angles for each digit
const rotationAngles = computed(() => {
  const currentDigits = digits.value

  // Extend or shrink rotation state array to match current digit count
  while (rotationState.value.length < currentDigits.length) {
    rotationState.value.push({ current: 0, lastRotate: 0 })
  }
  rotationState.value = rotationState.value.slice(0, currentDigits.length)

  // Calculate rotation for each digit
  const angles: number[] = []
  currentDigits.forEach((digit, index) => {
    const targetDigit = parseInt(digit)
    let state = rotationState.value[index]

    if (!state) {
      state = { current: 0, lastRotate: 0 }
      rotationState.value[index] = state
    }

    const lastDigit = state.current
    const lastRotate = state.lastRotate
    let targetRotate: number

    if (targetDigit === lastDigit) {
      targetRotate = lastRotate
    } else {
      // Calculate the shortest rotation path
      const diff = targetDigit - lastDigit
      const rotateStep = 36 // 360 degrees / 10 digits

      if (Math.abs(diff) <= 5) {
        // Short path
        targetRotate = lastRotate - diff * rotateStep
      } else {
        // Long path (wrap around)
        if (diff > 0) {
          targetRotate = lastRotate - (diff - 10) * rotateStep
        } else {
          targetRotate = lastRotate - (diff + 10) * rotateStep
        }
      }
    }

    // Update state
    state.current = targetDigit
    state.lastRotate = targetRotate

    angles.push(targetRotate)
  })

  return angles
})
</script>
