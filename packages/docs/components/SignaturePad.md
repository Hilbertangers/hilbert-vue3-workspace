# `SignaturePad` 笔锋签字板

SignaturePad, 一个基于 Canvas 的手写签名组件，支持鼠标和触摸屏手写签名，具有笔锋效果（根据书写速度变化线条粗细）。

## 基础用法

<demo vue="../demo/SignaturePad/grid.vue" />

## 横线背景

<demo vue="../demo/SignaturePad/line.vue" />

## 无背景

<demo vue="../demo/SignaturePad/nobg.vue" />

## API

### Props

| 参数       | 说明     | 类型               | 默认值                                                                           |
| ---------- | -------- | ------------------ | -------------------------------------------------------------------------------- |
| background | 背景配置 | `BackgroundConfig` | `{ type: 'line', color: '#e5e5e5', lineHeight: 40, gridSize: 40, opacity: 0.2 }` |

#### BackgroundConfig

| 参数       | 说明                    | 类型                          | 默认值      |
| ---------- | ----------------------- | ----------------------------- | ----------- |
| type       | 背景类型                | `'line' \| 'grid' \| 'image'` | `'line'`    |
| color      | 背景颜色                | `string`                      | `'#e5e5e5'` |
| lineHeight | 横线间距（line类型时）  | `number`                      | `40`        |
| gridSize   | 网格大小（grid类型时）  | `number`                      | `40`        |
| imageSrc   | 图片地址（image类型时） | `string`                      | `''`        |
| opacity    | 背景透明度              | `number`                      | `0.2`       |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| save   | 保存时触发 | `(dataUrl: string)` |

### Methods

| 方法名 | 说明     | 参数 |
| ------ | -------- | ---- |
| clear  | 清除画布 | -    |
| save   | 保存签名 | -    |
