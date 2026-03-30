<template>
  <span
    class="skeleton-container"
    :class="containerClassName"
    :aria-busy="enableAnimation"
  >
    <template v-for="(item, index) in skeletons" :key="index">
      <span
        class="skeleton"
        :class="[className, skeletonClass]"
        :style="item.style"
      >&#8203;</span>
      <br v-if="!inline && index < skeletons.length - 1" />
    </template>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface SkeletonProps {
  count?: number
  baseColor?: string
  highlightColor?: string
  width?: string | number
  height?: string | number
  borderRadius?: string | number
  circle?: boolean
  inline?: boolean
  duration?: number
  direction?: 'ltr' | 'rtl'
  enableAnimation?: boolean
  customHighlightBackground?: string
  className?: string
  containerClassName?: string
}

const props = withDefaults(defineProps<SkeletonProps>(), {
  count: 1,
  baseColor: '#ebebeb',
  highlightColor: '#f5f5f5',
  width: '100%',
  height: undefined,
  borderRadius: '0.25rem',
  circle: false,
  inline: false,
  duration: 1.5,
  direction: 'ltr',
  enableAnimation: true,
  customHighlightBackground: undefined,
  className: '',
  containerClassName: ''
})

const skeletonClass = computed(() => ({
  'skeleton--disable-animation': !props.enableAnimation,
  'skeleton--rtl': props.direction === 'rtl'
}))

const baseStyle = computed(() => {
  const style: Record<string, string> = {}

  if (props.direction === 'rtl') {
    style['--animation-direction'] = 'reverse'
  }

  if (typeof props.duration === 'number') {
    style['--animation-duration'] = `${props.duration}s`
  }

  if (!props.enableAnimation) {
    style['--pseudo-element-display'] = 'none'
  }

  if (typeof props.width === 'string' || typeof props.width === 'number') {
    style.width = typeof props.width === 'number' ? `${props.width}px` : props.width
  }

  if (typeof props.height === 'string' || typeof props.height === 'number') {
    style.height = typeof props.height === 'number' ? `${props.height}px` : props.height
  }

  if (typeof props.borderRadius === 'string' || typeof props.borderRadius === 'number') {
    style.borderRadius =
      typeof props.borderRadius === 'number' ? `${props.borderRadius}px` : props.borderRadius
  }

  if (props.circle) {
    style.borderRadius = '50%'
  }

  if (props.baseColor) {
    style['--base-color'] = props.baseColor
  }

  if (props.highlightColor) {
    style['--highlight-color'] = props.highlightColor
  }

  if (props.customHighlightBackground) {
    style['--custom-highlight-background'] = props.customHighlightBackground
  }

  return style
})

const skeletons = computed(() => {
  const skeletonList: { style: Record<string, string> }[] = []
  const countCeil = Math.ceil(props.count)

  for (let i = 0; i < countCeil; i++) {
    let style = { ...baseStyle.value }

    if (countCeil > props.count && i === countCeil - 1) {
      // Handle fractional count by adjusting the width of the last skeleton
      const fractionalPart = props.count % 1
      const currentWidth = style.width ?? '100%'

      const fractionalWidth =
        typeof currentWidth === 'number'
          ? currentWidth * fractionalPart
          : `calc(${currentWidth} * ${fractionalPart})`

      style.width = String(fractionalWidth)
    }

    skeletonList.push({ style })
  }

  return skeletonList
})
</script>
