<template>
  <size-color
    :size="store.border"
    :color="store.color"
    :isFont="false"
    @onSizeChange="onSizeChange"
    @onColorChange="onColorChange"
  />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import SizeColor from '../SizeColor.vue'
import { store, mutations } from '../context'

interface Rect {
  type: string
  history: RectHistoryItem[]
  draw: (ctx: CanvasRenderingContext2D, action: any) => void
  ready?: boolean
}

interface RectHistoryItem {
  size: number
  color: string
  x1: number
  y1: number
  x2: number
  y2: number
  path: Path2D
  undoPriority?: number
  ready?: boolean
}

interface ResizeFunction {
  (x: number, y: number, x1: number, y1: number, x2: number, y2: number): { x1: number; y1: number; x2: number; y2: number }
}

interface FlipFunction {
  (x: number, y: number, x1: number, y1: number, x2: number, y2: number): { name: string; cursor: string } | undefined
}

const rect = ref<Rect | null>(null)
const isNew = ref(false)
const isEdit = ref(false)
const todo = ref<string | null>(null)
const inStroke = ref({ is: false, index: -1 })
const drag = ref({ isDown: false, point: null as { x: number; y: number } | null })
const resize = ref({ isDown: false, name: '' })

const EditPointersResize: Record<string, ResizeFunction> = {
  'top-center': (_x, y, x1, _y1, x2, y2) => ({ x1, y1: y, x2, y2 }),
  'top-left': (x, y, _x1, _y1, x2, y2) => ({ x1: x, y1: y, x2, y2 }),
  'top-right': (_x, y, x1, _y1, _x2, y2) => ({ x1, y1: y, x2: _x, y2 }),
  'center-left': (x, _y, _x1, y1, _x2, y2) => ({ x1: x, y1, x2: _x2, y2 }),
  'center-right': (x, _y, x1, y1, _x2, y2) => ({ x1, y1, x2: x, y2 }),
  'bottom-left': (x, _y, _x1, _y2, x2, y1) => ({ x1: x, y1: _y2, x2, y2: y1 }),
  'bottom-center': (_x, y, x1, _y1, x2, _y2) => ({ x1, y1: _y1, x2, y2: y }),
  'bottom-right': (_x, _y, x1, y1, _x2, _y2) => ({ x1, y1, x2: _x, y2: _y })
}

const EditPointersFlip: Record<string, FlipFunction> = {
  'top-left': (x, y, _x1, _y1, x2, y2) => {
    if (x >= x2 && y >= y2) return { name: 'bottom-right', cursor: 'nwse-resize' }
    if (x >= x2) return { name: 'top-right', cursor: 'nesw-resize' }
    if (y >= y2) return { name: 'bottom-left', cursor: 'nesw-resize' }
  },
  'top-right': (x, y, x1, _y1, _x2, y2) => {
    if (x <= x1 && y >= y2) return { name: 'bottom-left', cursor: 'nesw-resize' }
    if (x <= x1) return { name: 'top-left', cursor: 'nwse-resize' }
    if (y >= y2) return { name: 'bottom-right', cursor: 'nwse-resize' }
  },
  'bottom-left': (x, y, _x1, y1, x2, _y2) => {
    if (x >= x2 && y <= y1) return { name: 'top-right', cursor: 'nesw-resize' }
    if (x >= x2) return { name: 'bottom-right', cursor: 'nwse-resize' }
    if (y <= y1) return { name: 'top-left', cursor: 'nwse-resize' }
  },
  'bottom-right': (x, y, x1, y1, _x2, _y2) => {
    if (x <= x1 && y <= y1) return { name: 'top-left', cursor: 'nwse-resize' }
    if (x <= x1) return { name: 'bottom-left', cursor: 'nesw-resize' }
    if (y <= y1) return { name: 'top-right', cursor: 'nwse-resize' }
  }
}

onMounted(() => {
  mutations.setContext({ cursor: 'crosshair' })
})

function setUndoPriority(context: any): number {
  const priorities = context.stack.map((t: any) => t.history[0]?.undoPriority || 0)
  return Math.max(...priorities, 0) + 1
}

function onSizeChange(size: number) {
  mutations.setContext({ border: size })
  sizeColorEdit('size', size)
}

function onColorChange(color: string) {
  mutations.setContext({ color })
  sizeColorEdit('color', color)
}

function sizeColorEdit(type: 'size' | 'color', value: number | string) {
  if (isEdit.value && rect.value) {
    const currentRecord = rect.value.history[0]
    if (!currentRecord) return

    const currentSize = type === 'size' ? currentRecord.size : undefined
    const currentColor = type === 'color' ? currentRecord.color : undefined

    if ((type === 'size' && currentSize === value) || (type === 'color' && currentColor === value)) {
      return
    }

    const record: RectHistoryItem = {
      ...currentRecord,
      path: new Path2D(),
      undoPriority: setUndoPriority(store)
    }

    if (type === 'size') {
      record.size = value as number
    } else {
      record.color = value as string
    }

    rect.value.history.unshift(record)
    setEditPointers(record)
    // 触发栈更新以重绘画布
    mutations.setContext({ stack: [...store.stack] })
  }
}

function setEditPointers(record?: RectHistoryItem) {
  let editPointers: any[] = []
  if (record) {
    let { size, color, x1, x2, y1, y2 } = record
    size = size === 3 ? 6 : size
    editPointers = [
      {
        name: 'top-center',
        x: (x1 + x2) / 2,
        y: y1,
        cursor: 'ns-resize',
        size,
        color
      },
      {
        name: 'top-left',
        x: x1,
        y: y1,
        cursor: 'nwse-resize',
        size,
        color
      },
      {
        name: 'top-right',
        x: x2,
        y: y1,
        cursor: 'nesw-resize',
        size,
        color
      },
      {
        name: 'center-left',
        x: x1,
        y: (y1 + y2) / 2,
        cursor: 'ew-resize',
        size,
        color
      },
      {
        name: 'center-right',
        x: x2,
        y: (y1 + y2) / 2,
        cursor: 'ew-resize',
        size,
        color
      },
      {
        name: 'bottom-left',
        x: x1,
        y: y2,
        cursor: 'nesw-resize',
        size,
        color
      },
      {
        name: 'bottom-center',
        x: (x1 + x2) / 2,
        y: y2,
        cursor: 'ns-resize',
        size,
        color
      },
      {
        name: 'bottom-right',
        x: x2,
        y: y2,
        cursor: 'nwse-resize',
        size,
        color
      }
    ]
  }
  mutations.setContext({ editPointers })
}

function drawFunction(ctx: CanvasRenderingContext2D, action: any) {
  const { size, color, x1, x2, y1, y2 } = action
  ctx.lineCap = 'butt'
  ctx.lineJoin = 'round'
  ctx.lineWidth = size
  ctx.strokeStyle = color
  const path = new Path2D()
  path.rect(Math.min(x1, x2), Math.min(y1, y2), Math.abs(x2 - x1), Math.abs(y2 - y1))
  ctx.stroke(path)
  action.path = path
}

defineExpose({
  draw: drawFunction,

  mousedown(e: MouseEvent, args: { el: HTMLElement; ctx: CanvasRenderingContext2D; context: any; setContext: Function }) {
    const { el, context } = args
    const { left, top } = el.getBoundingClientRect()
    const { border, color } = context
    const x = e.clientX - left
    const y = e.clientY - top

    if (!inStroke.value.is) {
      if (isEdit.value) {
        isEdit.value = false
        setEditPointers()
      }
      // 新增一条待进栈的路径
      isNew.value = true
      const newRect: Rect = {
        type: 'rect',
        history: [
          {
            size: border,
            color,
            x1: x,
            y1: y,
            x2: x,
            y2: y,
            path: new Path2D()
          }
        ],
        draw: drawFunction,
        ready: true
      }
      rect.value = newRect
    } else {
      isEdit.value = true
      const stackItem = context.stack[inStroke.value.index] as Rect
      rect.value = stackItem
      if (!rect.value) return

      const currentHistory = rect.value.history[0]
      if (!currentHistory) return

      setEditPointers(currentHistory)
      onSizeChange(currentHistory.size)
      onColorChange(currentHistory.color)

      const record: RectHistoryItem = {
        ...currentHistory,
        path: new Path2D(),
        ready: true
      }
      rect.value.history.unshift(record)

      // resize准备
      if (todo.value === 'resize') {
        resize.value.isDown = true
      }

      // 拖拽准备
      if (todo.value === 'drag') {
        args.setContext({ cursor: 'grabbing' })
        drag.value.isDown = true
        drag.value.point = { x, y }
      }
    }
  },

  mousemove(e: MouseEvent, args: { el: HTMLElement; ctx: CanvasRenderingContext2D; context: any; setContext: Function }, pointInStroke: any) {
    const { el, context } = args
    const { left, top, width, height } = el.getBoundingClientRect()
    let x = e.clientX - left
    let y = e.clientY - top

    if (isNew.value && rect.value) {
      // 开始move以后再推进栈
      if (rect.value.ready) {
        delete rect.value.ready
        const recent = rect.value.history[0]
        if (recent) {
          recent.undoPriority = setUndoPriority(context)
        }
        context.stack.push(rect.value)
      }

      if (x < 0) x = 0
      if (y < 0) y = 0
      if (x > width) x = width
      if (y > height) y = height

      const recent = rect.value.history[0]
      if (recent) {
        recent.x2 = x
        recent.y2 = y
      }

      args.setContext({ stack: [...context.stack] })
    } else {
      const { action, index } = pointInStroke

      if (drag.value.isDown && drag.value.point && rect.value) { // 拖拽画图
        const last = rect.value.history[1]
        const now = rect.value.history[0]
        if (!last || !now) return

        delete now.ready // 使用记录
        const translateX = x - drag.value.point.x
        const translateY = y - drag.value.point.y
        now.x1 = last.x1 + translateX
        now.y1 = last.y1 + translateY
        now.x2 = last.x2 + translateX
        now.y2 = last.y2 + translateY
        setEditPointers(now)
        args.setContext({ stack: [...context.stack] })
        return
      }

      if (resize.value.isDown && rect.value) { // resize画图
        const now = rect.value.history[0]
        if (!now) return

        delete now.ready // 使用记录
        const flip = EditPointersFlip[resize.value.name]
        const resizeFn = EditPointersResize[resize.value.name]
        if (flip) {
          const newPoint = flip(x, y, now.x1, now.y1, now.x2, now.y2)
          if (newPoint) {
            const { name, cursor } = newPoint
              resize.value.name = name
              args.setContext({ cursor })
          }
        }
        const { x1, y1, x2, y2 } = resizeFn(x, y, now.x1, now.y1, now.x2, now.y2)
        now.x1 = x1
        now.y1 = y1
        now.x2 = x2
        now.y2 = y2
        setEditPointers(now)
        args.setContext({ stack: [...context.stack] })
        return
      }

      if (action) { // 鼠标触摸路径
        inStroke.value.is = true
        inStroke.value.index = index
        // 赋值todo
        if (isEdit.value) {
          // 找编辑点
          const hit = context.editPointers.find((t: any) => {
            const assertX = x >= (t.x - t.size) && x <= (t.x + t.size)
            const assertY = y >= (t.y - t.size) && y <= (t.y + t.size)
            return assertX && assertY
          })
          if (hit) {
            todo.value = 'resize'
            args.setContext({ cursor: hit.cursor })
            resize.value.name = hit.name
            return
          }
        }
        todo.value = 'drag'
        args.setContext({ cursor: 'grab' })
      } else {
        inStroke.value.is = false
        todo.value = null
        args.setContext({ cursor: 'crosshair' })
      }
    }
  },

  mouseup(_e: MouseEvent, args: { el: HTMLElement; ctx: CanvasRenderingContext2D; context: any; setContext: Function }) {
    const { context } = args

    if (isNew.value) { // 初次绘制取消
      rect.value = null
      isNew.value = false
    } else if (rect.value) {
      // 路径操作的取消
      if (todo.value) {
        const recent = rect.value.history[0]
        if (recent && recent.ready) {
          rect.value.history.shift()
        }

        const currentRecent = rect.value.history[0]
        if (currentRecent) {
          currentRecent.undoPriority = setUndoPriority(context)
        }

        if (resize.value.isDown) {
          resize.value.isDown = false
        }

        if (drag.value.isDown) {
          drag.value.isDown = false
          args.setContext({ cursor: 'grab' })
        }
      }
    }
  },

  beforeUnMount() {
    setEditPointers()
  }
})
</script>

<script lang="ts">
export default {
  name: 'RectAction',
  title: '矩形',
  type: 'rect',
  icon: 'screenshots-icon-rect'
}
</script>
