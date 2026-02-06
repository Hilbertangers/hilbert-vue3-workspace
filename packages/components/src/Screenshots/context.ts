import { reactive } from 'vue'
// 导入将在后续创建的actions
import Ok from './actions/ok'
import Undo from './actions/undo'
import Rect from './actions/Rect.vue'
import Brush from './actions/Brush.vue'
import Arrow from './actions/Arrow.vue'
import Cancel from './actions/cancel'
import Ellipse from './actions/Ellipse.vue'
import Text from './actions/Text.vue'
import Mosaic from './actions/Mosaic.vue'

// @ts-ignore - Actions文件将在后续创建

interface ViewerData {
  x1?: number
  y1?: number
  x2?: number
  y2?: number
  resizing?: boolean
  moving?: boolean
}

type ActionItem = {
  key: any
  value: Record<string, any>
} | {
  type: string
}

interface StackItem {
  type: string
  history: Array<any>
  draw: Function
  undoCB?: Function
  canDraw?: boolean
  ready?: boolean
}

interface EditPointer {
  name: string
  x: number
  y: number
  cursor: string
  size: number
  color: string
}

interface ImageData {
  el: HTMLImageElement
  width: number
  height: number
}

interface MagnifyPoint {
  x: number
  y: number
  right?: number
  bottom?: number
}

interface StoreState {
  image: ImageData | null
  viewer: ViewerData | null
  width: number
  height: number
  action: any
  actionRef: any
  actions: Array<ActionItem | { type: string }>
  stack: StackItem[]
  border: number
  font: number
  color: string
  cursor: string | null
  magnifyPoint: MagnifyPoint
  editPointers: EditPointer[]
  state: Record<string, any>
  _resolveActionChange: ((value: any) => void) | null
  _actionChangePromise: Promise<any> | null
  // 用于触发浅层watch的版本号，避免频繁创建新stack数组
  stackVersion: number
}

const storeTmp: StoreState = {
  image: null,
  viewer: null,
  width: 0,
  height: 0,
  action: null,
  actionRef: null,
  actions: [
    {
      key: Ellipse,
      value: {},
    },
    {
      key: Rect,
      value: {},
    },
    {
      key: Arrow,
      value: {},
    },
    {
      key: Brush,
      value: {},
    },
    {
      key: Mosaic,
      value: {},
    },
    {
      key: Text,
      value: {},
    },
    { type: 'divider' },
    {
      key: Undo,
      value: {},
    },
    { type: 'divider' },
    {
      key: Cancel,
      value: {},
    },
    {
      key: Ok,
      value: {},
    },
  ],
  stack: [],
  border: 6,
  font: 23,
  color: '#ee5126',
  cursor: null,
  magnifyPoint: { x: 0, y: 0 },
  editPointers: [],
  state: {},
  _resolveActionChange: null,
  _actionChangePromise: null,
  stackVersion: 0,
}

// 创建一个响应式的 store
export const store = reactive<StoreState>(storeTmp)

// 添加触发函数
export function triggerActionChange(value: any) {
  if (store._resolveActionChange) {
    store._resolveActionChange(value)
    store._actionChangePromise = null
    store._resolveActionChange = null
  }
}

// 添加获取Promise的函数
export async function getActionChangeRef() {
  if (!store._actionChangePromise) {
    store._actionChangePromise = new Promise(resolve => {
      store._resolveActionChange = resolve
    })
  }
  return store._actionChangePromise
}

// 创建 mutations 方法
export const mutations = {
  initContext(context: Partial<StoreState>) {
    Object.keys(context).forEach(key => {
      const k = key as keyof StoreState
      ;(store as any)[k] = context[k]
    })
  },

  setContext(
    context: Partial<StoreState> | ((state: StoreState) => Partial<StoreState>),
    callback?: () => void
  ) {
    if (typeof context === 'function') {
      const newState = context(store)
      Object.keys(newState).forEach(key => {
        const k = key as keyof StoreState
        if (k !== 'image' && k !== 'width' && k !== 'height') {
          ;(store as any)[k] = newState[k]
        }
      })
      if (callback) {
        callback()
      }
    } else if (typeof context === 'object') {
      Object.keys(context).forEach(key => {
        const k = key as keyof StoreState
        if (k !== 'image' && k !== 'width' && k !== 'height') {
          ;(store as any)[k] = context[k]
        }
      })
      if (callback) {
        callback()
      }
    }
  },
}

export type { StoreState, ViewerData, ActionItem, StackItem, EditPointer, ImageData, MagnifyPoint }
