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

interface Arrow {
  type: string
  history: ArrowHistoryItem[]
  draw: (ctx: CanvasRenderingContext2D, action: any) => void
  ready?: boolean
}

interface ArrowHistoryItem {
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

const arrow = ref<Arrow | null>(null)
const isNew = ref(false)
const isEdit = ref(false)
const todo = ref<string | null>(null)
const inStroke = ref({ is: false, index: -1 })
const drag = ref({ isDown: false, point: null as { x: number; y: number } | null })
const resize = ref({ isDown: false, name: '' })

const EditPointersResize: Record<string, ResizeFunction> = {
  start: (x, y, _x1, _y1, x2, y2) => ({ x1: x, y1: y, x2, y2 }),
  end: (_x, _y, x1, y1, _x2, _y2) => ({ x1, y1, x2: _x, y2: _y })
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
  if (isEdit.value && arrow.value) {
    const currentRecord = arrow.value.history[0]
    if (!currentRecord) return

    const currentSize = type === 'size' ? currentRecord.size : undefined
    const currentColor = type === 'color' ? currentRecord.color : undefined

    if ((type === 'size' && currentSize === value) || (type === 'color' && currentColor === value)) {
      return
    }

    const record: ArrowHistoryItem = {
      ...currentRecord,
      path: new Path2D(),
      undoPriority: setUndoPriority(store)
    }

    if (type === 'size') {
      record.size = value as number
    } else {
      record.color = value as string
    }

    arrow.value.history.unshift(record)
    setEditPointers(record)
    // 触发栈更新以重绘画布
    mutations.setContext({ stack: [...store.stack] })
  }
}

function setEditPointers(record?: ArrowHistoryItem) {
  let editPointers: any[] = []
  if (record) {
    let { size, color, x1, x2, y1, y2 } = record
    size = size === 3 ? 6 : size
    editPointers = [
      {
        name: 'start',
        x: x1,
        y: y1,
        cursor: 'nesw-resize',
        size,
        color
      },
      {
        name: 'end',
        x: x2,
        y: y2,
        cursor: 'nesw-resize',
        size,
        color
      }
    ]
  }
  mutations.setContext({ editPointers })
}

function drawFunction(ctx: CanvasRenderingContext2D, action: any) {
  const { size, color, x1, x2, y1, y2 } = action
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.fillStyle = color
  ctx.strokeStyle = color
  const path = new Path2D()
  const dx = x2 - x1
  const dy = y2 - y1

  // 等边三角形边和高
  const hypotenuse = Math.sqrt(dx * dx + dy * dy)
  const side = hypotenuse > size * 10 ? size * 3 : hypotenuse / 3.5
  const height = side / 2 * Math.sqrt(3)
  const arcCenter = {
    x: x2 + Math.sqrt(height * height * dx * dx / (dx * dx + dy * dy)) * (x2 > x1 ? -1 : 1),
    y: y2 + Math.sqrt(height * height * dy * dy / (dx * dx + dy * dy)) * (y2 > y1 ? -1 : 1)
  }
  const arcRadius = side / 4
  const angle = Math.atan2(dy, dx)
  const PVAngle = angle + Math.PI / 2

  path.arc(x1, y1, size / 4, PVAngle, PVAngle + Math.PI)
  path.arc(arcCenter.x, arcCenter.y, arcRadius, PVAngle + Math.PI, PVAngle)
  ctx.fill(path)

  path.moveTo(x2, y2)
  path.lineTo(
    x2 - side * Math.cos(angle + Math.PI / 6),
    y2 - side * Math.sin(angle + Math.PI / 6)
  )
  path.lineTo(
    x2 - side * Math.cos(angle - Math.PI / 6),
    y2 - side * Math.sin(angle - Math.PI / 6)
  )
  path.closePath()
  ctx.lineWidth = 1
  ctx.stroke(path)
  ctx.fill(path)

  action.path = path
}

defineExpose({
  draw: drawFunction,

  mousedown(e: MouseEvent, args: { el: HTMLElement; ctx: CanvasRenderingContext2D; context: any; setContext: typeof mutations.setContext }) {
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
      const newArrow: Arrow = {
        type: 'arrow',
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
      arrow.value = newArrow
    } else {
      isEdit.value = true
      const stackItem = context.stack[inStroke.value.index] as Arrow
      arrow.value = stackItem
      if (!arrow.value) return

      const currentHistory = arrow.value.history[0]
      if (!currentHistory) return

      setEditPointers(currentHistory)
      onSizeChange(currentHistory.size)
      onColorChange(currentHistory.color)

      const record: ArrowHistoryItem = {
        ...currentHistory,
        path: new Path2D(),
        ready: true
      }
      arrow.value.history.unshift(record)

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

  mousemove(e: MouseEvent, args: { el: HTMLElement; ctx: CanvasRenderingContext2D; context: any; setContext: typeof mutations.setContext }, pointInStroke: any) {
    const { el, context } = args
    const { left, top, width, height } = el.getBoundingClientRect()
    let x = e.clientX - left
    let y = e.clientY - top

    if (isNew.value && arrow.value) {
      // 开始move以后再推进栈
      if (arrow.value.ready) {
        delete arrow.value.ready
        const recent = arrow.value.history[0]
        if (recent) {
          recent.undoPriority = setUndoPriority(context)
        }
        context.stack.push(arrow.value)
      }

      if (x < 0) x = 0
      if (y < 0) y = 0
      if (x > width) x = width
      if (y > height) y = height

      const recent = arrow.value.history[0]
      if (recent) {
        recent.x2 = x
        recent.y2 = y
      }

      args.setContext({ stack: [...context.stack] })
    } else {
      const { action, index } = pointInStroke

      if (drag.value.isDown && drag.value.point && arrow.value) { // 拖拽画图
        const last = arrow.value.history[1]
        const now = arrow.value.history[0]
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

      if (resize.value.isDown && arrow.value) { // resize画图
        const now = arrow.value.history[0]
        if (!now) return

        delete now.ready // 使用记录
        const resizeFn = EditPointersResize[resize.value.name]
        if (resizeFn) {
          const { x1, y1, x2, y2 } = resizeFn(x, y, now.x1, now.y1, now.x2, now.y2)
          now.x1 = x1
          now.y1 = y1
          now.x2 = x2
          now.y2 = y2
          setEditPointers(now)
        }
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

  mouseup(_e: MouseEvent, args: { el: HTMLElement; ctx: CanvasRenderingContext2D; context: any; setContext: typeof mutations.setContext }) {
    const { context } = args

    if (isNew.value) { // 初次绘制取消
      arrow.value = null
      isNew.value = false
    } else if (arrow.value) {
      // 路径操作的取消
      if (todo.value) {
        const recent = arrow.value.history[0]
        if (recent && recent.ready) {
          arrow.value.history.shift()
        }

        const currentRecent = arrow.value.history[0]
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
  name: 'ArrowAction',
  title: '箭头',
  type: 'arrow',
  icon: 'screenshots-icon-arrow'
}
</script>
