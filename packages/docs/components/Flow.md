# `Flow` 与或逻辑图绘制器

flow, 一个通过 canvas 绘制与或流程图的组件，支持与逻辑，或逻辑，括号逻辑和节点设置。<br>
它能把一段 DSL（如 A&B|C&(D|E) ）解析成动态的节点-或门-括号嵌套结构并实时绘制到 Canvas，放在日常后台、审批流、规则引擎等场景里可以即拿即用

## 基础用法

<demo vue="../demo/Flow/base.vue" />

## 设置节点

<demo vue="../demo/Flow/nodeMap.vue" />

## 自定义样式

<demo vue="../demo/Flow/custom.vue" />

## API

### Props

| 参数         | 说明                                   | 类型             | 例子                   | 默认值 |
| ------------ | -------------------------------------- | ---------------- | ---------------------- | ------ |
| value        | DSL                                    | `string`         | `vue & (vue2 \| vue3)` |        |
| nodeMap      | 节点映射表                             | `FlowNodeItem[]` |                        |        |
| orWidthRate  | or 占据的宽度比                        | `number`         |                        | `0.9`  |
| orHeightRate | or 占据的高度比                        | `number`         |                        | `0.5`  |
| orHybridRate | or 占据的宽度比，or 与 node 混合的情况 | `number`         |                        | `0.5`  |
| nodeStyle    | 自定义节点样式                         | `FlowNodeStyle`  |                        |        |

### Events

| 事件名       | 说明                                         | 回调参数 |
| ------------ | -------------------------------------------- | -------- |
| fetch-struct | 渲染时会返回解析结构体，可以用来给其他组件用 |          |
