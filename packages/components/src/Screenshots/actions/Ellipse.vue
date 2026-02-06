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
import { reactive, computed, onMounted } from 'vue'
import SizeColor from '../SizeColor.vue'
import { store, mutations } from '../context'

onMounted(() => {
  mutations.setContext({ cursor: 'crosshair' })
})

const state = reactive({
  ellipse: null as any,
  isNew: false,
  isEdit: false,
  todo: null as any,
  inStroke: { is: false, index: -1 },
  drag: { isDown: false, point: null as any },
  resize: { isDown: false, name: '' }
})

const EditPointersResize = computed(() => ({
  top: (x: number, y: number, x1: number, y1: number, x2: number, y2: number) => ({ x1, y1: y, x2, y2 }),
  'top-left': (x: number, y: number, x1: number, y1: number, x2: number, y2: number, xp: number, yp: number) => ({ x1: x1 + x - xp, y1: y1 + y - yp, x2, y2 }),
  'top-right': (x: number, y: number, x1: number, y1: number, x2: number, y2: number, xp: number, yp: number) => ({ x1, y1: y1 + y - yp, x2: x2 + x - xp, y2 }),
  left: (x: number, y: number, x1: number, y1: number, x2: number, y2: number) => ({ x1: x, y1, x2, y2 }),
  right: (x: number, y: number, x1: number, y1: number, x2: number, y2: number) => ({ x1, y1, x2: x, y2 }),
  bottom: (x: number, y: number, x1: number, y1: number, x2: number, y2: number) => ({ x1, y1, x2, y2: y }),
  'bottom-left': (x: number, y: number, x1: number, y1: number, x2: number, y2: number, xp: number, yp: number) => ({ x1: x1 + x - xp, y1, x2, y2: y2 + y - yp }),
  'bottom-right': (x: number, y: number, x1: number, y1: number, x2: number, y2: number, xp: number, yp: number) => ({ x1, y1, x2: x2 + x - xp, y2: y2 + y - yp })
}))

const EditPointersFlip = computed(() => ({
  'top-left': (x: number, y: number, x1: number, y1: number, x2: number, y2: number) => {
    if (x >= x2 && y >= y2) return { name: 'bottom-right', cursor: 'nwse-resize' }
    if (x >= x2) return { name: 'top-right', cursor: 'nesw-resize' }
    if (y >= y2) return { name: 'bottom-left', cursor: 'nesw-resize' }
  },
  'top-right': (x: number, y: number, x1: number, y1: number, x2: number, y2: number) => {
    if (x <= x1 && y >= y2) return { name: 'bottom-left', cursor: 'nesw-resize' }
    if (x <= x1) return { name: 'top-left', cursor: 'nwse-resize' }
    if (y >= y2) return { name: 'bottom-right', cursor: 'nwse-resize' }
  },
  'bottom-left': (x: number, y: number, x1: number, y1: number, x2: number, y2: number) => {
    if (x >= x2 && y <= y1) return { name: 'top-right', cursor: 'nesw-resize' }
    if (x >= x2) return { name: 'bottom-right', cursor: 'nwse-resize' }
    if (y <= y1) return { name: 'top-left', cursor: 'nwse-resize' }
  },
  'bottom-right': (x: number, y: number, x1: number, y1: number, x2: number, y2: number) => {
    if (x <= x1 && y <= y1) return { name: 'top-left', cursor: 'nwse-resize' }
    if (x <= x1) return { name: 'bottom-left', cursor: 'nesw-resize' }
    if (y <= y1) return { name: 'top-right', cursor: 'nesw-resize' }
  }
}))

function draw(ctx: CanvasRenderingContext2D, action: any) {
  let { size, color, x1, x2, y1, y2 } = action
  ctx.lineCap = 'butt'
  ctx.lineJoin = 'round'
  ctx.lineWidth = size
  ctx.strokeStyle = color
  if (x1 > x2) {
    const x = x1
    x1 = x2
    x2 = x
  }
  if (y1 > y2) {
    const y = y1
    y1 = y2
    y2 = y
  }
  const x = (x1 + x2) / 2
  const y = (y1 + y2) / 2
  const a = (x2 - x1) / 2
  const b = (y2 - y1) / 2
  const path = new Path2D()
  path.ellipse(x, y, a, b, 0, 0, 2 * Math.PI)
  ctx.stroke(path)
  action.path = path
}

function setEditPointers(record: any) {
  // @ts-ignore
  let editPointers: any[] = []
  if (record) {
    let { size, color, x1, x2, y1, y2 } = record
    size = size === 3 ? 6 : size

    const center = {
      x: (x1 + x2) / 2,
      y: (y1 + y2) / 2
    }
    const radius = {
      x: (x2 - x1) / 2 ? (x2 - x1) / 2 : 0.1,
      y: (y2 - y1) / 2 ? (y2 - y1) / 2 : 0.1
    }
    const radiusRate = Math.abs(radius.x / radius.y)
    const obliqueY = Math.sqrt(
      Math.pow(radius.x * radius.y, 2) / (Math.pow(radius.x, 2) + Math.pow(radius.y * radiusRate, 2))
    )
    const oblique = {
      x: obliqueY * radiusRate,
      y: obliqueY
    }
    editPointers = [
      {
        name: 'top',
        x: center.x,
        y: y1,
        cursor: 'ns-resize',
        size,
        color
      },
      {
        name: 'left',
        x: x1,
        y: center.y,
        cursor: 'ew-resize',
        size,
        color
      },
      {
        name: 'right',
        x: x2,
        y: center.y,
        cursor: 'ew-resize',
        size,
        color
      },
      {
        name: 'bottom',
        x: center.x,
        y: y2,
        cursor: 'ns-resize',
        size,
        color
      },
      {
        name: 'top-left',
        x: center.x - oblique.x,
        y: center.y - oblique.y,
        cursor: 'nwse-resize',
        size,
        color
      },
      {
        name: 'top-right',
        x: center.x + oblique.x,
        y: center.y - oblique.y,
        cursor: 'nesw-resize',
        size,
        color
      },
      {
        name: 'bottom-left',
        x: center.x - oblique.x,
        y: center.y + oblique.y,
        cursor: 'nesw-resize',
        size,
        color
      },
      {
        name: 'bottom-right',
        x: center.x + oblique.x,
        y: center.y + oblique.y,
        cursor: 'nwse-resize',
        size,
        color
      }
    ]
  } else {
    editPointers = []
  }
  // @ts-ignore
  mutations.setContext({ editPointers })
}

function onSizeChange(size: number) {
  mutations.setContext({ border: size })
  sizeColorEdit('size', size)
}

function onColorChange(color: string) {
  mutations.setContext({ color })
  sizeColorEdit('color', color)
}

function sizeColorEdit(type: string, value: any) {
  if (state.isEdit && state.ellipse) {
    if (state.ellipse.history[0][type] === value) return
    const record = {
      ...state.ellipse.history[0],
      path: new Path2D()
    }
    record[type] = value
    state.ellipse.history.unshift(record)
    setEditPointers(record)
    // 触发栈更新以重绘画布
    mutations.setContext({ stack: [...store.stack] })
  }
}

defineExpose({
  draw,
  mousedown: (e: MouseEvent, args: any) => {
    const { el, context } = args
    const { left, top } = el.getBoundingClientRect()
    const { border, color } = context
    const x = e.clientX - left
    const y = e.clientY - top

    if (!state.inStroke.is) {
      if (state.isEdit) {
        state.isEdit = false
        setEditPointers(null)
      }
      state.isNew = true
      state.ellipse = {
        type: 'ellipse',
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
        draw: draw,
        ready: true
      }
    } else {
      state.isEdit = true
      state.ellipse = context.stack[state.inStroke.index]
      setEditPointers(state.ellipse.history[0])
      onSizeChange(state.ellipse.history[0].size)
      onColorChange(state.ellipse.history[0].color)

      const record = { ...state.ellipse.history[0], path: new Path2D(), ready: true }
      state.ellipse.history.unshift(record)

      if (state.todo === 'resize') {
        state.resize.isDown = true
      }

      if (state.todo === 'drag') {
        mutations.setContext({ cursor: 'grabbing' })
        state.drag.isDown = true
        state.drag.point = { x, y }
      }
    }
  },
  mousemove: (e: MouseEvent, args: any, pointInStroke: any) => {
    const { el, context } = args
    const { left, top, width, height } = el.getBoundingClientRect()
    let x = e.clientX - left
    let y = e.clientY - top

    if (state.isNew && state.ellipse) {
      if (state.ellipse.ready) {
        delete state.ellipse.ready
        context.stack.push(state.ellipse)
      }

      if (x < 0) x = 0
      if (y < 0) y = 0
      if (x > width) x = width
      if (y > height) y = height
      const recent = state.ellipse.history[0]
      recent.x2 = x
      recent.y2 = y

      args.setContext({ stack: [...context.stack] })
    } else {
      const { action, index } = pointInStroke

      if (state.drag.isDown && state.ellipse) {
        const last = state.ellipse.history[1]
        const now = state.ellipse.history[0]
        delete now.ready
        const translateX = x - state.drag.point.x
        const translateY = y - state.drag.point.y
        now.x1 = last.x1 + translateX
        now.y1 = last.y1 + translateY
        now.x2 = last.x2 + translateX
        now.y2 = last.y2 + translateY
        setEditPointers(now)
        args.setContext({ stack: [...context.stack] })
        return
      }

      if (state.resize.isDown && state.ellipse) {
        const now = state.ellipse.history[0]
        delete now.ready
        const flip = EditPointersFlip.value[state.resize.name as keyof typeof EditPointersFlip.value]
        const resize = EditPointersResize.value[state.resize.name as keyof typeof EditPointersResize.value]
        const pointer = context.editPointers.find((t: any) => t.name === state.resize.name)
        if (flip) {
          const newPoint = flip(x, y, now.x1, now.y1, now.x2, now.y2)
          if (newPoint) {
            const { name, cursor } = newPoint
            state.resize.name = name
            args.setContext({ cursor })
          }
        }
        const { x1, y1, x2, y2 } = resize(x, y, now.x1, now.y1, now.x2, now.y2, pointer.x, pointer.y)
        now.x1 = x1
        now.y1 = y1
        now.x2 = x2
        now.y2 = y2
        setEditPointers(now)
        args.setContext({ stack: [...context.stack] })
        return
      }

      if (action) {
        state.inStroke.is = true
        state.inStroke.index = index
        if (state.isEdit) {
          const hit = context.editPointers.find((t: any) => {
            const assertX = x >= (t.x - t.size) && x <= (t.x + t.size)
            const assertY = y >= (t.y - t.size) && y <= (t.y + t.size)
            return assertX && assertY
          })
          if (hit) {
            state.todo = 'resize'
            args.setContext({ cursor: hit.cursor })
            state.resize.name = hit.name
            return
          }
        }
        state.todo = 'drag'
        args.setContext({ cursor: 'grab' })
      } else {
        state.inStroke.is = false
        state.todo = null
        args.setContext({ cursor: 'crosshair' })
      }
    }
  },
  mouseup: (_e: MouseEvent, args: any) => {
    if (state.isNew) {
      state.ellipse = null
      state.isNew = false
    } else {
      if (state.todo && state.ellipse) {
        if (state.ellipse.history[0].ready) {
          state.ellipse.history.shift()
        }
        state.ellipse.history[0].undoPriority = 1

        if (state.resize.isDown) {
          state.resize.isDown = false
        }

        if (state.drag.isDown) {
          state.drag.isDown = false
          args.setContext({ cursor: 'grab' })
        }
      }
    }
  },
  beforeUnMount: () => {
    mutations.setContext({ editPointers: [] })
  }
})
</script>

<script lang="ts">
export default {
  name: 'EllipseAction',
  title: '圆形',
  type: 'ellipse',
  icon: 'screenshots-icon-ellipse'
}
</script>
