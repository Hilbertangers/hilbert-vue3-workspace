<script lang="ts">
import { defineComponent, ref, computed, onMounted, onBeforeUnmount, watch, nextTick, h } from 'vue'

/* ----------------- 类型定义 ----------------- */
export interface MarqueeProps {
  customStyle?: Record<string, any>
  className?: string
  autoFill?: boolean
  play?: boolean
  pauseOnHover?: boolean
  pauseOnClick?: boolean
  direction?: 'left' | 'right'
  speed?: number
  delay?: number
  loop?: number
  gradient?: boolean
  gradientColor?: string
  gradientWidth?: number | string
  onMount?: () => void
  onFinish?: (event: Event) => void
  onCycleComplete?: (event: Event) => void
}

export default defineComponent({
  name: 'Marquee',
  props: {
    customStyle: { type: Object, default: () => ({}) },
    className: { type: String, default: '' },
    autoFill: { type: Boolean, default: false },
    play: { type: Boolean, default: true },
    pauseOnHover: { type: Boolean, default: false },
    pauseOnClick: { type: Boolean, default: false },
    direction: {
      type: String as () => 'left' | 'right',
      default: 'left',
      validator: (v: string) => ['left', 'right'].includes(v),
    },
    speed: { type: Number, default: 50, validator: (v: number) => v > 0 },
    delay: { type: Number, default: 0, validator: (v: number) => v >= 0 },
    loop: { type: Number, default: 0, validator: (v: number) => v >= 0 },
    gradient: { type: Boolean, default: false },
    gradientColor: { type: String, default: 'white' },
    gradientWidth: { type: [Number, String] as any, default: 200 },
    onMount: { type: Function, default: null },
    onFinish: { type: Function, default: null },
    onCycleComplete: { type: Function, default: null },
  },

  setup(props, { expose }) {
    /* ----------------- 响应式状态 ----------------- */
    const containerRef = ref<HTMLElement | null>(null)
    const marqueeRef = ref<HTMLElement | null>(null)
    const containerWidth = ref(0)
    const marqueeWidth = ref(0)
    const multiplier = ref(1)
    const isMounted = ref(false)
    const styleKey = ref(0)
    const isPausedByClick = ref(false)
    const isHovering = ref(false)
    let resizeObserver: ResizeObserver | null = null

    /* ----------------- 计算属性 ----------------- */
    const duration = computed(() => {
      let totalWidth: number
      if (props.autoFill) {
        totalWidth = marqueeWidth.value * multiplier.value
      } else {
        totalWidth =
          marqueeWidth.value < containerWidth.value
            ? containerWidth.value
            : marqueeWidth.value
      }
      const durationValue = totalWidth / props.speed
      return Math.round(durationValue * 100) / 100
    })

    const containerStyle = computed(() => props.customStyle || {})

    const gradientStyle = computed(() => {
      const gradientWidthStr =
        typeof props.gradientWidth === 'number'
          ? `${props.gradientWidth}px`
          : props.gradientWidth
      return {
        '--gradient-color': props.gradientColor,
        '--gradient-width': gradientWidthStr,
      }
    })

    const marqueeStyle = computed(() => {
      const direction = props.direction === 'left' ? 'normal' : 'reverse'
      const minWidth = props.autoFill ? 'auto' : '100%'

      let animationPlayState = 'running'
      if (!props.play) {
        animationPlayState = 'paused'
      } else if (props.pauseOnClick && isPausedByClick.value) {
        animationPlayState = 'paused'
      } else if (props.pauseOnHover && isHovering.value) {
        animationPlayState = 'paused'
      }

      return {
        'animation-play-state': animationPlayState,
        '--direction': direction,
        '--duration': `${duration.value}s`,
        '--delay': `${props.delay}s`,
        '--iteration-count': !!props.loop ? `${props.loop}` : 'infinite',
        '--min-width': minWidth,
        key: styleKey.value,
      }
    })

    /* ----------------- 工具函数 ----------------- */
    function initResizeObserver() {
      if (typeof ResizeObserver !== 'undefined') {
        resizeObserver = new ResizeObserver(() => {
          calculateWidth()
        })

        if (containerRef.value) {
          resizeObserver.observe(containerRef.value)
        }
        if (marqueeRef.value) {
          resizeObserver.observe(marqueeRef.value)
        }
      }
    }

    function calculateWidth() {
      if (marqueeRef.value && containerRef.value) {
        const containerRect = containerRef.value.getBoundingClientRect()
        const marqueeRect = marqueeRef.value.getBoundingClientRect()

        let newContainerWidth = containerRect.width
        let newMarqueeWidth = marqueeRect.width

        if (props.autoFill && newContainerWidth && newMarqueeWidth) {
          const newMultiplier =
            newMarqueeWidth < newContainerWidth
              ? Math.ceil(newContainerWidth / newMarqueeWidth)
              : 1
          if (newMultiplier !== multiplier.value) {
            multiplier.value = newMultiplier
          }
        } else {
          multiplier.value = 1
        }

        containerWidth.value = newContainerWidth
        marqueeWidth.value = newMarqueeWidth
      }
    }

    function handleCycleComplete(event: Event) {
      if (typeof props.onCycleComplete === 'function') {
        props.onCycleComplete(event)
      }
    }

    function handleFinish(event: Event) {
      if (typeof props.onFinish === 'function') {
        props.onFinish(event)
      }
    }

    function handleClick() {
      if (props.pauseOnClick) {
        isPausedByClick.value = !isPausedByClick.value
      }
    }

    function handleMouseEnter() {
      isHovering.value = true
    }

    function handleMouseLeave() {
      isHovering.value = false
    }

    function cleanup() {
      if (resizeObserver) {
        resizeObserver.disconnect()
        resizeObserver = null
      }
    }

    /* ----------------- 生命周期 ----------------- */
    onMounted(() => {
      isMounted.value = true
      nextTick(() => {
        initResizeObserver()
        calculateWidth()
        styleKey.value++
        if (typeof props.onMount === 'function') {
          props.onMount()
        }
      })
    })

    onBeforeUnmount(() => {
      cleanup()
    })

    /* ----------------- 侦听器 ----------------- */
    watch(
      () => props.autoFill,
      () => {
        nextTick(() => {
          calculateWidth()
          styleKey.value++
        })
      }
    )

    watch(
      () => props.direction,
      () => {
        nextTick(() => {
          calculateWidth()
          styleKey.value++
        })
      }
    )

    watch(() => props.speed, () => {
      styleKey.value++
    })

    watch(marqueeWidth, () => {
      styleKey.value++
    })

    watch(multiplier, () => {
      styleKey.value++
    })

    /* ----------------- 暴露 ref ----------------- */
    expose({
      containerRef,
      marqueeRef
    })

    return {
      containerRef,
      marqueeRef,
      isMounted,
      containerStyle,
      gradientStyle,
      marqueeStyle,
      multiplier,
      handleClick,
      handleMouseEnter,
      handleMouseLeave,
      handleCycleComplete,
      handleFinish,
    }
  },

  render() {
    if (!this.isMounted) return null

    const children = this.$slots.default ? this.$slots.default() : []
    if (children.length === 0) return null

    const containerChildren: any[] = []

    // 渐变遮罩
    if (this.gradient) {
      containerChildren.push(
        h('div', {
          style: this.gradientStyle,
          class: 'h-marquee-overlay',
        })
      )
    }

    // 创建包装子元素的函数
    const wrapChild = (child: any, key: string) => {
      return h(
        'div',
        {
          key,
          class: 'h-marquee-child',
        },
        [child]
      )
    }

    // 第一个 marquee: 原始内容
    const firstMarqueeChildren: any[] = []

    // 初始容器
    const initialWrappedChildren = children.map((child, index) => {
      return wrapChild(child, `initial-${index}`)
    })
    firstMarqueeChildren.push(
      h('div', {
        ref: 'marqueeRef',
        class: 'h-marquee-initial-child-container',
      }, initialWrappedChildren)
    )

    // 复制的内容 (multiplier - 1)
    for (let i = 0; i < this.multiplier - 1; i++) {
      children.forEach((child, index) => {
        firstMarqueeChildren.push(wrapChild(child, `first-${i}-${index}`))
      })
    }

    const firstMarquee = h(
      'div',
      {
        style: this.marqueeStyle,
        class: 'h-marquee',
        onAnimationiteration: this.handleCycleComplete,
        onAnimationend: this.handleFinish,
      },
      firstMarqueeChildren
    )
    containerChildren.push(firstMarquee)

    // 第二个 marquee: multiplier 个复制
    const secondMarqueeChildren: any[] = []
    for (let i = 0; i < this.multiplier; i++) {
      children.forEach((child, index) => {
        secondMarqueeChildren.push(wrapChild(child, `second-${i}-${index}`))
      })
    }

    const secondMarquee = h(
      'div',
      {
        style: this.marqueeStyle,
        class: 'h-marquee',
      },
      secondMarqueeChildren
    )
    containerChildren.push(secondMarquee)

    return h(
      'div',
      {
        ref: 'containerRef',
        style: this.containerStyle,
        class: ['h-marquee-container', this.className],
        onClick: this.handleClick,
        onMouseenter: this.handleMouseEnter,
        onMouseleave: this.handleMouseLeave,
      },
      containerChildren
    )
  },
})
</script>
