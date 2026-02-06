<template>
  <Size
    :isFont="false"
    :value="store.border"
    @onChange="onSizeChange"
  />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Size from '../Size.vue'
import { store, mutations } from '../context'

interface Tile {
  row: number
  column: number
  pixelWidth: number
  pixelHeight: number
  data?: number[]
  color?: {
    r: number
    g: number
    b: number
    a: number
  }
}

interface MosaicHistoryItem {
  size: number
  tiles: Tile[]
  undoPriority?: number
  ready?: boolean
}

interface Mosaic {
  type: string
  history: MosaicHistoryItem[]
  draw: (ctx: CanvasRenderingContext2D, action: any) => void
  ready?: boolean
}

const mosaic = ref<Mosaic | null>(null)
const tileWidth = 10
const tileHeight = 10
let tiles: Tile[] = []
let imageData: Uint8ClampedArray | null = null
let tileColumnSize = 0
let tileRowSize = 0
let ctx: CanvasRenderingContext2D | null = null

onMounted(() => {
  mutations.setContext({ cursor: 'crosshair' })
})

function initTiles(contextCtx: CanvasRenderingContext2D) {
  if (!store.width || !store.height) return

  ctx = contextCtx
  imageData = ctx.getImageData(0, 0, store.width, store.height).data
  tileColumnSize = Math.ceil(store.width / tileWidth)
  tileRowSize = Math.ceil(store.height / tileHeight)

  tiles = []
  for (let i = 0; i < tileRowSize; i++) {
    for (let j = 0; j < tileColumnSize; j++) {
      const tile: Tile = {
        row: i,
        column: j,
        pixelWidth: tileWidth,
        pixelHeight: tileHeight
      }

      if (j === tileColumnSize - 1) { // Last column
        tile.pixelWidth = store.width - (j * tileWidth)
      }

      if (i === tileRowSize - 1) { // Last row
        tile.pixelHeight = store.height - (i * tileHeight)
      }

      const data: number[] = []
      const pixelPosition = store.width * 4 * tileHeight * tile.row + tile.column * tileWidth * 4
      for (let k = 0, len = tile.pixelHeight; k < len; k++) {
        const position = pixelPosition + store.width * 4 * k
        data.push(...Array.from(imageData!.slice(position, position + tile.pixelWidth * 4)))
      }
      tile.data = data

      tiles.push(tile)
    }
  }
}

function setUndoPriority(context: any): number {
  const priorities = context.stack.map((t: any) => t.history[0]?.undoPriority || 0)
  return Math.max(...priorities, 0) + 1
}

function onSizeChange(size: number) {
  mutations.setContext({ border: size })
}

function drawFunction(ctx: CanvasRenderingContext2D, action: any) {
  const { tiles: actionTiles } = action
  actionTiles.forEach((tile: Tile) => {
    if (!tile.color && tile.data) {
      const dataLen = tile.data.length
      let r = 0; let g = 0; let b = 0; let a = 0
      for (let i = 0; i < dataLen; i += 4) {
        r += tile.data[i]
        g += tile.data[i + 1]
        b += tile.data[i + 2]
        a += tile.data[i + 3]
      }

      const pixelLen = dataLen / 4
      tile.color = {
        r: Math.round(r / pixelLen),
        g: Math.round(g / pixelLen),
        b: Math.round(b / pixelLen),
        a: Math.round(a / pixelLen)
      }
    }

    if (!tile.color) return

    const color = tile.color
    ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a / 255})`

    const x = tile.column * tileWidth
    const y = tile.row * tileHeight
    const w = tile.pixelWidth
    const h = tile.pixelHeight

    ctx.fillRect(x, y, w, h)
  })
}

defineExpose({
  draw: drawFunction,

  mousedown(_e: MouseEvent, args: { el: HTMLElement; ctx: CanvasRenderingContext2D; context: any; setContext: Function }) {
    const { ctx: contextCtx, context } = args
    const { border } = context

    // 初始化tiles（参考Vue2版本在created钩子中的实现）
    if (tiles.length === 0) {
      initTiles(contextCtx)
    }

    mosaic.value = {
      type: 'mosaic',
      history: [
        {
          size: border,
          tiles: []
        }
      ],
      draw: drawFunction,
      ready: true
    }
  },

  mousemove(e: MouseEvent, args: { el: HTMLElement; ctx: CanvasRenderingContext2D; context: any; setContext: Function }, _pointInStroke: any) {
    const { el, context } = args
    const { left, top } = el.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top

    if (mosaic.value) {
      // 开始move以后再推进栈
      if (mosaic.value.ready) {
        delete mosaic.value.ready
        const recent = mosaic.value.history[0]
        if (recent) {
          recent.undoPriority = setUndoPriority(context)
        }
        context.stack.push(mosaic.value)
      }

      const newTiles: Tile[] = []
      const size = mosaic.value.history[0].size / 3
      let startRow = Math.max(0, Math.floor(y / tileHeight) - Math.floor(size / 2))
      const startColumn = Math.max(0, Math.floor(x / tileWidth) - Math.floor(size / 2))

      const endRow = Math.min(tileRowSize, startRow + size)
      const endColumn = Math.min(tileColumnSize, startColumn + size)

      // Get tiles.
      while (startRow < endRow) {
        let column = startColumn
        while (column < endColumn) {
          const tile = tiles[startRow * tileColumnSize + column]
          if (tile) {
            newTiles.push(tile)
          }
          column += 1
        }
        startRow += 1
      }
      mosaic.value.history[0].tiles = mosaic.value.history[0].tiles.concat(newTiles)
      args.setContext({ stack: [...context.stack] })
    }
  },

  mouseup(_e: MouseEvent, _args: any) {
    if (mosaic.value) {
      mosaic.value = null
    }
  },

  beforeUnMount() {
    mutations.setContext({ editPointers: [] })
  }
})
</script>

<script lang="ts">
export default {
  name: 'MosaicAction',
  title: '马赛克',
  type: 'mosaic',
  icon: 'screenshots-icon-mosaic'
}
</script>
