<template>
  <div ref="wrapper" class="view-flow" style="background: #fff;width: 100%;">
    <canvas ref="canvas" />
  </div>
</template>

<script setup lang="ts">
import elementResizeDetectorMaker from 'element-resize-detector'
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { cloneDeep } from 'es-toolkit/object';

export interface FlowNodeItem {
  value: string
  label?: string
  status?: boolean | null
}

export interface FlowNodeStyle {
  height: number
  fontSize: number
  padding: number
  branchPaddingMin: number
  marginMin: number
  color: {
    success: { fill: string; font: string }
    fail:    { fill: string; font: string }
    default: { fill: string; font: string }
  }
}

export interface FlowProps {
  value: string
  orWidthRate?: number // or占据的宽度比，默认0.9
  orHeightRate?: number // or占据的高度比，默认0.5
  orHybridRate?: number // or占据的宽度比，or与node混合的情况，默认0.5
  nodeStyle?: FlowNodeStyle,
  nodeMap?: FlowNodeItem[] // node节点映射表，如[{value: '1', label: '昂热'}]，node显示为`1:昂热`
}

const props = withDefaults(defineProps<FlowProps>(), {
  value: '',
  nodeMap: () => [],
  orWidthRate: 0.9,
  orHeightRate: 0.5,
  orHybridRate: 0.5,
  nodeStyle: (): FlowNodeStyle => ({
    height: 30,
    fontSize: 12,
    padding: 15,
    branchPaddingMin: 20, // or上下各分支间node的距离
    marginMin: 10, // node与node，node与or间的最小距离
    color: {
      success: { fill: '#19be6b', font: '#fff' },
      fail:    { fill: '#ed4014', font: '#fff' },
      default: { fill: '#ddd',   font: '#666' },
    },
  })
})

const emit = defineEmits<{
  'fetch-struct': [any[]]
}>()

const canvas = ref<HTMLCanvasElement>()
const wrapper = ref<HTMLDivElement>()
const reactiveWidth = ref<number | null>(null)
const struct = ref<any[]>([])
let observer: ReturnType<typeof elementResizeDetectorMaker> // 尺寸侦测

function render() {
  const text = props.value.replace(/\s+/g, '')
  struct.value = parseFlow(text)
  emit('fetch-struct', struct.value)
  reactiveWidth.value = null
  draw()
}
function draw() {
  if (!canvas.value) return
  const ctx = canvas.value.getContext('2d')!
  const width  = setWidth()
  const height = setHeight()
  ctx.clearRect(0, 0, width, height)
  drawMid(ctx)
  if (!struct.value.length) return
  const mustRestart = drawStruct(ctx, struct.value, width, height, 0, 0, [1])
  if (mustRestart === 'restart') nextTick(draw)
}
function setWidth() {
  const width = reactiveWidth.value || wrapper.value!.offsetWidth
  canvas.value!.width = width
  return width
}
function setHeight(): number {
  const h = props.nodeStyle.height + props.nodeStyle.branchPaddingMin
  const heights = [h]
  const find = (arr: any[], branches: number[]) => {
    for (const t of arr) {
      if (Array.isArray(t.value)) {
        let curH = h * (t.value.length - 1)
        const b2 = cloneDeep(branches)
        const canvasH = b2.reduce((a, c) => a * c, curH)
        heights.push(canvasH)
        b2.push(t.value.length)
        t.value.forEach((v: any[]) => find(v, b2))
      }
    }
  }
  find(struct.value, [2])
  const height = Math.max(...heights)
  canvas.value!.height = height
  return height
}

function drawStruct(
  ctx: CanvasRenderingContext2D,
  struct: any[],
  parentW: number,
  parentH: number,
  parentX: number,
  parentY: number,
  gradientRate: number[],
) {
  let scene = struct.every(t => t.type === 'or') && 'justOr'
    || struct.every(t => t.type === 'node') && 'justNode'
    || 'orAndNode';

  if (scene === 'justOr') {
    let w = parentW * props.orWidthRate / struct.length;
    let h = parentH * props.orHeightRate;
    let y = (parentH - h) / 2 + parentY;

    gradientRate.push(props.orWidthRate / struct.length);

    for (let i = 0; i < struct.length; i++) {
      let t = struct[i];
      let x = (parentW - w * struct.length) / 2 + w * i + parentX;

      drawOr(ctx, x, y, w, h, t.value.length);

      for (let _i = 0; _i < t.value.length; _i++) {
        let _t = t.value[_i];
        let branchH = h * 2 / (t.value.length);
        let branchY = h / (t.value.length - 1);

        for (let _j = 0; _j < _t.length; _j++) {
          let mustRestart = drawStruct(ctx, _t, w, branchH, x, y - branchH / 2 + _i * branchY, gradientRate);
          if (mustRestart === 'restart') nextTick(draw)
        }
      }
    }
  }

  if (scene === 'justNode') {
    let margin = (parentW - struct.reduce((p, c) => p + c.width, 0)) / (struct.length + 1);
    margin = Math.round(margin);
    let y = parentY + parentH / 2;

    if (margin < props.nodeStyle.marginMin) {
      let distance = (props.nodeStyle.marginMin - margin) * (struct.length + 1);
      setReactiveWidth(gradientRate, distance + parentW);
      return 'restart';
    }

    for (let i = 0; i < struct.length; i++) {
      let t = struct[i];
      let x = struct.reduce((_p, _c, _i) => { return _i < i ? _p + _c.width : _p; }, parentX + margin * (i + 1));

      drawNode(ctx, t, x, y);
    }
  }

  if (scene === 'orAndNode') {
    let nodeArr = struct.filter(_t => _t.type === 'node');
    let orArr = struct.filter(_t => _t.type === 'or');
    let nodeW = nodeArr.reduce((p, c) => p + c.width, 0);
    let orW = parentW * props.orHybridRate;
    let singleOrW = orW / orArr.length;
    let margin = (parentW - (nodeW + orW)) / (nodeArr.length + orArr.length + 1);

    if (margin < props.nodeStyle.marginMin) {
      let distance = (props.nodeStyle.marginMin - margin + 50) * (struct.length + 1);
      setReactiveWidth(gradientRate, distance + parentW);
      return 'restart';
    }

    let curGradientRate = cloneDeep(gradientRate); // 这里有个bug，orAndNode多执行了一次，深拷hack下
    curGradientRate.push(singleOrW / parentW);

    for (let i = 0; i < struct.length; i++) {
      let t = struct[i];
      let x = struct.reduce((p, c, _i) => {
        let curW = c.type === 'node' ? c.width : singleOrW;
        return _i < i ? p + curW : p;
      }, parentX + margin * (i + 1));

      if (t.type === 'node') {
        let y = parentY + parentH / 2;
        drawNode(ctx, t, x, y);
      }
      if (t.type === 'or') {
        let h = parentH * props.orHeightRate;
        let y = (parentH - h) / 2 + parentY;

        drawOr(ctx, x, y, singleOrW, h, t.value.length);

        for (let _i = 0; _i < t.value.length; _i++) {
          let _t = t.value[_i];
          let branchH = h * 2 / (t.value.length);
          let branchY = h / (t.value.length - 1);

          for (let _j = 0; _j < _t.length; _j++) {
            let mustRestart = drawStruct(
              ctx, _t, singleOrW, branchH, x, y - branchH / 2 + _i * branchY, curGradientRate,
            );
            if (mustRestart === 'restart') nextTick(draw)
          }
        }
      }
    }
  }
}
function drawNode(ctx: CanvasRenderingContext2D, node: any, initX: number, initY: number): void {
  let { height, color } = props.nodeStyle;
  let { width, content, status } = node;
  let x = initX;
  let y = initY - height / 2;
  let fillColor = null;
  let fontColor = null;

  switch (status) {
    case true:
      fillColor = color.success.fill;
      fontColor = color.success.font;
      break;
    case false:
      fillColor = color.fail.fill;
      fontColor = color.fail.font;
      break;
    default:
      fillColor = color.default.fill;
      fontColor = color.default.font;
  }
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.strokeStyle = 'rgba(186, 165, 130, 0.8)';
  ctx.lineWidth = 2;
  let radius = height / 2;
  if ((width - height) < 0) {
    radius = width / 2;
  }
  ctx.beginPath();
  ctx.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 3 / 2);
  ctx.lineTo(width - radius + x, y);
  ctx.arc(width - radius + x, radius + y, radius, Math.PI * 3 / 2, Math.PI * 2);
  ctx.lineTo(width + x, height + y - radius);
  ctx.arc(width - radius + x, height - radius + y, radius, 0, Math.PI * 1 / 2);
  ctx.lineTo(radius + x, height + y);
  ctx.arc(radius + x, height - radius + y, radius, Math.PI * 1 / 2, Math.PI);
  ctx.closePath();
  ctx.stroke();
  ctx.fillStyle = fillColor;
  ctx.fill();
  ctx.textAlign = 'center';
  ctx.fillStyle = fontColor;
  ctx.font = `${props.nodeStyle.fontSize}px sans-serif`;
  ctx.fillText(content, x + width / 2, y + 19);
}
function drawMid(ctx: CanvasRenderingContext2D): void {
  const w = canvas.value!.width
  const h = canvas.value!.height
  ctx.beginPath()
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#009966';
  ctx.moveTo(0, h / 2)
  ctx.lineTo(w, h / 2)
  ctx.stroke()
}
function drawOr(ctx: CanvasRenderingContext2D, initX: number, initY: number, initW: number, initH: number, branch = 2, paddingLR = 0): void {
  let x = initX + paddingLR;
  let y = initY;
  let w = initW - paddingLR * 2;
  let h = initH;
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#009966';
  ctx.rect(x, y, w, h);
  ctx.fillStyle = '#fff';
  ctx.fill();
  if (branch > 2) {
    [...Array(branch - 2)].forEach((_item, index) => {
      ctx.moveTo(x, y + h / (branch - 1) * (index + 1));
      ctx.lineTo(x + w, y + h / (branch - 1) * (index + 1));
    });
  }
  ctx.stroke();
}
interface ParseUtil {
  and: RegExp
  findOrMatch(text: string): string | null
  findBracketsMatch(text: string): string | null
}
function parseUtils(): ParseUtil {
  const and = /^(.*?)&/
  // js正则不支持平衡组 难以区分成对括号情况 or和brackets的匹配改用栈
  function findOrMatch(text: string): string | null {
    let stack: string[] = []
    let cur: string | null = null
    let pos = text.indexOf('|')
    while (pos !== -1) {
      cur = text.substring(0, pos)
      cur.split('').forEach(c => {
        if (c === '(') stack.push('(')
        if (c === ')') stack.pop()
      })
      if (stack.length) {
        cur = null
        stack = []
        pos = text.indexOf('|', pos + 1)
      } else break
    }
    return cur
  }
  function findBracketsMatch(text: string): string | null {
    let stack = ['('];
    let cur = null;
    if (text.indexOf('(') === 0) {
      let textArr = text.split('');
      for (let i = 1; i < textArr.length; i++) {
        if (textArr[i] === '(') stack.push('(');
        if (textArr[i] === ')') stack.pop();
        if (!stack.length) {
          cur = text.substring(1, i);
          break;
        }
      }
    }
    return cur;
  }
  return { and, findOrMatch, findBracketsMatch }
}
type ParsedNode = {
  type: 'node'
  value: string
  content: string
  width: number
  status: boolean | null | undefined
}
type ParsedOr = {
  type: 'or'
  value: any[]
}
function parseFlow(flow: string): Array<ParsedNode | ParsedOr> {
  const utils = parseUtils()
  let root: Array<ParsedNode | ParsedOr> = []
  let last: string
  let parsingOr = false
  while (flow) {
    last = flow
    // OR 处理
    const orMatch = utils.findOrMatch(flow)
    if (orMatch) {
      parsingOr = true
      if (!root[0]) {
        root.push({ type: 'or', value: [] })
      }
      if (Array.isArray(root[0].value)) {
        (root[0] as ParsedOr).value.push(parseFlow(orMatch))
      }
      flow = flow.slice(orMatch.length + 1)
      continue
    }
    if (parsingOr) {
      if (Array.isArray(root[0].value)) {
        (root[0] as ParsedOr).value.push(parseFlow(last))
      }
      parsingOr = false
      break
    }
    // 括号处理
    const bracketsMatch = utils.findBracketsMatch(flow)
    if (bracketsMatch) {
      root.push(...parseFlow(bracketsMatch))
      flow = flow.slice(bracketsMatch.length + 2)
      continue
    }
    // 与处理
    const andMatch = flow.match(utils.and)
    if (andMatch) {
      if (andMatch[1]) {
        root.push(fillNode(andMatch[1]))
      }
      flow = flow.slice(andMatch[1].length + 1)
      continue
    }
    if (last === flow) {
      root.push(fillNode(last))
      break
    }
  }
  return root
}
function fillNode(value: string): ParsedNode {
  const { padding, fontSize } = props.nodeStyle
  const canvasEl = canvas.value!
  const ctx = canvasEl.getContext('2d')!
  ctx.font = `${fontSize}px sans-serif`
  const match = props.nodeMap.find(n => n.value === value)
  const label  = match?.label ?? ''
  const status = match?.status ?? undefined
  const content = label ? `${value}:${label}` : value
  const width = ctx.measureText(content).width + padding * 2
  return {
    type: 'node',
    value,
    content,
    width,
    status,
  }
}
function setReactiveWidth(gradient: number[], distance: number) {
  const arr = cloneDeep(gradient).reverse()
  reactiveWidth.value = arr.reduce((acc, r) => acc / r, distance)
}

onMounted(() => {
  observer = elementResizeDetectorMaker()
  render()
  observer.listenTo(wrapper.value!, draw)
})
onBeforeUnmount(() => {
  observer?.uninstall(wrapper.value!)
})
watch(() => props.value, render)
watch(() => props.nodeMap, render, { deep: true })
</script>
