<template>
  <size-color
    :size="store.font"
    :color="store.color"
    :isFont="true"
    @onSizeChange="onSizeChange"
    @onColorChange="onColorChange"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, createApp, h, reactive, nextTick } from 'vue'
import SizeColor from '../SizeColor.vue'
import RenderTextarea from './RenderTextarea.vue'
import { store, mutations } from '../context'

interface TextHistoryItem {
  size: number
  color: string
  x: number
  y: number
  value: string
  undoPriority?: number
  ready?: boolean
  domClientRect?: { left: number; top: number; width: number; height: number }
}

interface TextRecord {
  type: string
  history: TextHistoryItem[]
  canDraw: boolean
  draw: (ctx: CanvasRenderingContext2D, action: TextHistoryItem, record: TextRecord) => void
}

const text = ref<TextRecord | null>(null)
const isNew = ref(false)
const isFocus = ref(false)
const canBlur = ref(false)
const mouseDownTimer = ref<number | null>(null)
const inStroke = ref({ is: false, index: -1 })
const drag = ref({
  isDown: false,
  done: false,
  point: null as { x: number; y: number } | null,
  textWrap: null as HTMLElement | null
})

let textareaContainer: HTMLElement | null = null
let textareaApp: any = null
let textareaProps: any = null

onMounted(() => {
  mutations.setContext({ cursor: 'default' })
})

onBeforeUnmount(() => {
  beforeUnMount()
})

function setUndoPriority(context: any): number {
  const priorities = context.stack.map((t: any) => t.history[0]?.undoPriority || 0)
  return Math.max(...priorities, 0) + 1
}

function onSizeChange(size: number) {
  mutations.setContext({ font: size })
  sizeColorEdit('size', size)
}

function onColorChange(color: string) {
  mutations.setContext({ color })
  sizeColorEdit('color', color)
}

function sizeColorEdit(type: 'size' | 'color', value: number | string) {
  if (textareaContainer && textareaApp && text.value) {
    const currentRecord = text.value.history[0]
    if (!currentRecord) return

    const currentValue = type === 'size' ? currentRecord.size : currentRecord.color
    if (currentValue === value) return

    const cursor = isFocus.value ? 'text' : 'grab'
    if (currentRecord.value) {
      const record: TextHistoryItem = {
        ...currentRecord,
        undoPriority: setUndoPriority(store)
      }
      record[type] = value as never
      text.value.history.unshift(record)
    } else {
      currentRecord[type] = value as never
    }

    // 直接更新响应式props
    if (textareaProps) {
      Object.assign(textareaProps, {
        cursor,
        ...text.value.history[0]
      })
    }
  }
}

function drawFunction(ctx: CanvasRenderingContext2D, action: TextHistoryItem, record: TextRecord) {
  if (record.canDraw === false) {
    return
  }

  const { size, color, x, y, value } = action
  const textArr = value.split('')
  let textRender = ''
  let _y = y - 2
  const textDraw = (ctx: CanvasRenderingContext2D, value: string, x: number, y: number) => {
    ctx.lineWidth = 5
    ctx.strokeStyle = '#ccc'
    ctx.strokeText(value, x, y)
    ctx.lineWidth = 4
    ctx.strokeStyle = '#fff'
    ctx.strokeText(value, x, y)
    ctx.fillText(value, x, y)
  }
  const areaWidth = 300 - 20

  ctx.fillStyle = color
  ctx.textBaseline = 'top'
  ctx.font = `${size}px Microsoft YaHei`

  textArr.forEach(t => {
    const cur = textRender + t
    const metricsWidth = ctx.measureText(cur).width
    if (metricsWidth >= areaWidth) {
      textDraw(ctx, textRender, x, _y)
      textRender = t
      _y += size
    } else {
      textRender = cur
    }
  })
  textDraw(ctx, textRender, x, _y)
}

function createTextareaContainer(viewer: HTMLElement): HTMLElement {
  const container = document.createElement('div')
  viewer.appendChild(container)
  return container
}

function mountTextareaComponent(container: HTMLElement, props: any, callbacks: any) {
  // 创建响应式的props对象
  textareaProps = reactive(props)

  const app = createApp({
    setup() {
      return () => h(RenderTextarea, {
        ...textareaProps,
        onMousedown: callbacks.onMousedown,
        onFocus: callbacks.onFocus,
        onBlur: callbacks.onBlur
      })
    }
  })
  app.mount(container)
  return app
}

function unmountTextareaComponent() {
  if (textareaApp) {
    textareaApp.unmount()
    textareaApp = null
  }
}

function updateTextarea(props: any) {
  // 关键：只在textareaApp和drag.textWrap都存在时才更新
  if (textareaApp && drag.value.textWrap) {
    // 直接更新响应式数据，Vue会自动重新渲染
    if (textareaProps) {
      Object.assign(textareaProps, { ...props })
    }
  }
}

function getCallbacks() {
  return {
    onMousedown: (e: MouseEvent) => onTextMouseDown(e),
    onFocus: (e: FocusEvent) => onFocus(e),
    onBlur: (e: FocusEvent) => onBlur(e)
  }
}

function onFocus(_e: FocusEvent) {
  isFocus.value = true
}

function onBlur(e: FocusEvent) {
  const dom = e.target as HTMLElement

  if (!canBlur.value) {
    dom.focus()
    return
  }

  const { left, top, width, height } = dom.getBoundingClientRect()
  isFocus.value = false

  if (isNew.value) {
    if (dom.innerText) {
      const currentText = text.value
      if (!currentText) return

      const historyItem = currentText.history[0]
      if (!historyItem) return

      historyItem.value = dom.innerText
      historyItem.domClientRect = { left, top, width, height }
      historyItem.undoPriority = setUndoPriority(store)

      const { stack } = store
      stack.push(currentText)
      mutations.setContext({ stack: [...stack] })
    }
    isNew.value = false
  } else {
    const currentText = text.value
    if (!currentText) return

    if (dom.innerText) {
      currentText.canDraw = true
      const record = { ...currentText.history[0] }
      if (record.value !== dom.innerText) {
        currentText.history.unshift(record)
      }

      const historyItem = currentText.history[0]
      historyItem.value = dom.innerText
      historyItem.domClientRect = { left, top, width, height }
      historyItem.undoPriority = setUndoPriority(store)
    } else {
      store.stack.splice(inStroke.value.index, 1)
    }
    const { stack } = store
    mutations.setContext({ stack: [...stack] })
  }

  cleanupTextarea()
}

function onTextMouseDown(e: MouseEvent) {
  if (!isFocus.value) {
    const currentText = text.value
    if (!currentText) return

    if (!mouseDownTimer.value) {
      mouseDownTimer.value = window.setTimeout(() => {
        mouseDownTimer.value = null
      }, 300)

      const record = { ...currentText.history[0], ready: true }
      currentText.history.unshift(record)

      drag.value.isDown = true
      // 使用offsetX和offsetY，但需要加上当前文本的位置偏移
      const currentPos = currentText.history[1] || currentText.history[0]
      drag.value.point = {
        x: e.offsetX + currentPos.x,
        y: e.offsetY + currentPos.y
      }
      e.preventDefault()
    } else {
      mouseDownTimer.value = null
      e.preventDefault()

      // 直接更新现有组件而不是创建新的
      updateTextarea(currentText.history[0])

      const dom = e.target as HTMLElement
      const range = document.createRange()
      const selection = window.getSelection()

      if (dom.childNodes[0]) {
        range.setStart(dom.childNodes[0], dom.innerText.length)
        range.collapse(true)
        selection?.removeAllRanges()
        selection?.addRange(range)
        dom.focus()
      }
    }
  }
}

function cleanupTextarea() {
  if (textareaContainer) {
    if (textareaContainer.parentNode) {
      textareaContainer.parentNode.removeChild(textareaContainer)
    }
    unmountTextareaComponent()
    textareaContainer = null
  }
  textareaProps = null
  text.value = null
  canBlur.value = false
}

function beforeUnMount() {
  if (textareaContainer && !isFocus.value) {
    cleanupTextarea()
  } else if (textareaContainer && isFocus.value) {
    canBlur.value = true
    const textarea = textareaContainer.querySelector('.screenshots-textarea') as HTMLElement
    if (textarea) {
      textarea.blur()
    }
  }
}

defineExpose({
  draw: drawFunction,

  mousedown(e: MouseEvent, args: { el: HTMLElement; ctx: CanvasRenderingContext2D; context: any; setContext: Function; viewer: HTMLElement }) {
    const { el, viewer, context, setContext } = args
    const { left, top, width, height } = el.getBoundingClientRect()
    const { font, color } = context
    const x = e.clientX - left
    const y = e.clientY - top

    if (!text.value) {
      if (!inStroke.value.is) {
        isNew.value = true
        text.value = {
          type: 'text',
          history: [
            {
              size: font,
              color,
              x,
              y,
              value: ''
            }
          ],
          canDraw: true,
          draw: drawFunction
        }

        textareaContainer = createTextareaContainer(viewer)
        textareaApp = mountTextareaComponent(textareaContainer, {
          cursor: 'text',
          ...text.value.history[0]
        }, getCallbacks())

        nextTick(() => {
          const textarea = textareaContainer?.querySelector('.screenshots-textarea') as HTMLElement
          textarea?.focus()
        })
      } else {
        const stackItem = context.stack[inStroke.value.index] as TextRecord
        if (!stackItem) return

        text.value = stackItem
        text.value.canDraw = false

        textareaContainer = createTextareaContainer(viewer)
        textareaApp = mountTextareaComponent(textareaContainer, {
          cursor: 'grabbing',
          ...text.value.history[0]
        }, getCallbacks())

        const record = { ...text.value.history[0], ready: true }
        text.value.history.unshift(record)

        drag.value.isDown = true
        drag.value.textWrap = textareaContainer
        drag.value.point = { x, y }

        setContext({ stack: [...context.stack] })
      }
    } else {
      if (isFocus.value === false) {
        canBlur.value = true
        const textarea = textareaContainer?.querySelector('.screenshots-textarea') as HTMLElement
        textarea?.focus()
      } else {
        if (x > 0 && x < width && y > 0 && y < height) {
          canBlur.value = true
        }
      }
    }
  },

  mousemove(e: MouseEvent, args: { el: HTMLElement; ctx: CanvasRenderingContext2D; context: any; setContext: Function }, pointInStroke: any) {
    const { el, setContext } = args
    const { left, top } = el.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top

    const { action, index } = pointInStroke

    if (drag.value.isDown && drag.value.point && text.value) {
      const last = text.value.history[1]
      const now = text.value.history[0]
      if (!last) return

      delete now.ready
      const translateX = x - drag.value.point.x
      const translateY = y - drag.value.point.y
      now.x = last.x + translateX
      now.y = last.y + translateY

      if (e.target instanceof HTMLElement) {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        now.domClientRect = { left, top, width, height }
      }

      // 更新现有组件，保持cursor为grabbing
      updateTextarea({
        cursor: 'grabbing',
        ...now
      })

      drag.value.done = true
      return
    }

    if (action) {
      inStroke.value.is = true
      inStroke.value.index = index
      setContext({ cursor: 'grab' })
    } else {
      inStroke.value.is = false
      setContext({ cursor: 'default' })
    }
  },

  mouseup(_e: MouseEvent, args: { el: HTMLElement; ctx: CanvasRenderingContext2D; context: any; setContext: Function }) {
    if (text.value) {
      if (text.value.history[0].ready) {
        text.value.history.shift()
      }

      if (drag.value.isDown) {
        drag.value.isDown = false
        if (drag.value.done) {
          drag.value.done = false
          text.value.history[0].undoPriority = setUndoPriority(args.context)
        }

        // 更新现有组件的属性，cursor改为grab
        updateTextarea({
          cursor: 'grab',
          ...text.value.history[0]
        })
      }
    }
  },

  beforeUnMount
})
</script>

<script lang="ts">
export default {
  name: 'TextAction',
  title: '文本',
  type: 'text',
  icon: 'screenshots-icon-text'
}
</script>
