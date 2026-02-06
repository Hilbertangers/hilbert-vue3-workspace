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

interface Brush {
  type: string
  history: BrushHistoryItem[]
  draw: (ctx: CanvasRenderingContext2D, action: any) => void
  ready?: boolean
}

interface BrushHistoryItem {
  size: number
  color: string
  point: { x: number; y: number }[]
  path: Path2D
  undoPriority?: number
  ready?: boolean
}

interface Point {
  x: number
  y: number
}

const brush = ref<Brush | null>(null)
const isNew = ref(false)
const isEdit = ref(false)
const todo = ref<string | null>(null)
const inStroke = ref({ is: false, index: -1 })
const drag = ref({ isDown: false, point: null as Point | null })
const resize = ref({ isDown: false, name: '' })

const EditPointersResize: Record<string, (x: number, y: number, point: Point[]) => Point[]> = {
  start: (x, y, point) => {
    point.unshift({ x, y })
    return point
  },
  end: (x, y, point) => {
    point.push({ x, y })
    return point
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
  if (isEdit.value && brush.value) {
    const currentRecord = brush.value.history[0]
    if (!currentRecord) return

    const currentSize = type === 'size' ? currentRecord.size : undefined
    const currentColor = type === 'color' ? currentRecord.color : undefined

    if ((type === 'size' && currentSize === value) || (type === 'color' && currentColor === value)) {
      return
    }

    const record: BrushHistoryItem = {
      ...currentRecord,
      point: [...currentRecord.point],
      path: new Path2D(),
      undoPriority: setUndoPriority(store)
    }

    if (type === 'size') {
      record.size = value as number
    } else {
      record.color = value as string
    }

    brush.value.history.unshift(record)
    setEditPointers(record)
    // 触发栈更新以重绘画布
    mutations.setContext({ stack: [...store.stack] })
  }
}

function setEditPointers(record?: BrushHistoryItem) {
  let editPointers: any[] = []
  if (record) {
    let { size, color, point } = record
    size = size === 3 ? 6 : size
    editPointers = [
      {
        name: 'start',
        x: point[0].x,
        y: point[0].y,
        cursor: 'nesw-resize',
        size,
        color
      },
      {
        name: 'end',
        x: point[point.length - 1].x,
        y: point[point.length - 1].y,
        cursor: 'nesw-resize',
        size,
        color
      }
    ]
  }
  mutations.setContext({ editPointers })
}

function drawFunction(ctx: CanvasRenderingContext2D, action: any) {
  const { size, color, point } = action
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.lineWidth = size
  ctx.strokeStyle = color
  const path = new Path2D()
  point.forEach((it: Point, index: number) => {
    if (index === 0) {
      path.moveTo(it.x, it.y)
    } else {
      path.lineTo(it.x, it.y)
    }
  })
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
      const newBrush: Brush = {
        type: 'brush',
        history: [
          {
            size: border,
            color,
            point: [{ x, y }],
            path: new Path2D()
          }
        ],
        draw: drawFunction,
        ready: true
      }
      brush.value = newBrush
    } else {
      isEdit.value = true
      const stackItem = context.stack[inStroke.value.index] as Brush
      brush.value = stackItem
      if (!brush.value) return

      const currentHistory = brush.value.history[0]
      if (!currentHistory) return

      setEditPointers(currentHistory)
      onSizeChange(currentHistory.size)
      onColorChange(currentHistory.color)

      const record: BrushHistoryItem = {
        ...currentHistory,
        point: [...currentHistory.point],
        path: new Path2D(),
        ready: true
      }
      brush.value.history.unshift(record)

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

    if (isNew.value && brush.value) {
      // 开始move以后再推进栈
      if (brush.value.ready) {
        delete brush.value.ready
        const recent = brush.value.history[0]
        if (recent) {
          recent.undoPriority = setUndoPriority(context)
        }
        context.stack.push(brush.value)
      }

      if (x < 0) x = 0
      if (y < 0) y = 0
      if (x > width) x = width
      if (y > height) y = height

      const recent = brush.value.history[0]
      if (recent) {
        recent.point.push({ x, y })
      }
      // 参考Vue2版本，使用展开运算符创建新数组
      args.setContext({ stack: [...context.stack] })
    } else {
      const { action, index } = pointInStroke

      if (drag.value.isDown && drag.value.point && brush.value) { // 拖拽画图
        const last = brush.value.history[1]
        const now = brush.value.history[0]
        if (!last || !now) return

        delete now.ready // 使用记录
        const translateX = x - drag.value.point.x
        const translateY = y - drag.value.point.y
        // 创建新数组，参考Vue2实现
        now.point = last.point.map((t: Point) => ({
          x: t.x + translateX,
          y: t.y + translateY
        }))
        // 拖拽时需要更新编辑点位置
        setEditPointers(now)
        args.setContext({ stack: [...context.stack] })
        return
      }

      if (resize.value.isDown && brush.value) { // resize画图
        const now = brush.value.history[0]
        if (!now) return

        delete now.ready // 使用记录
        const resizeFn = EditPointersResize[resize.value.name]
        if (resizeFn) {
          // 创建新数组，参考Vue2实现
          const point = resizeFn(x, y, now.point)
          now.point = point
        }
        // resize时需要更新编辑点位置
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
      brush.value = null
      isNew.value = false
    } else if (brush.value) {
      // 路径操作的取消
      if (todo.value) {
        const recent = brush.value.history[0]
        if (recent && recent.ready) {
          brush.value.history.shift()
        }

        const currentRecent = brush.value.history[0]
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
  name: 'BrushAction',
  title: '涂鸦',
  type: 'brush',
  icon: 'screenshots-icon-brush'
}
</script>
