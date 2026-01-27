# `AngleSlider` 角度选择器

AngleSlider, 一个角度选择器组件，支持点击拖拽设置角度值，支持指标器、环形进度条、刻度线等功能，并能由用户自定义样式。

## 基础用法

<demo vue="../demo/AngleSlider/base.vue" />

## 自定义样式

<demo vue="../demo/AngleSlider/custom.vue" />

## 步进模式

<demo vue="../demo/AngleSlider/step.vue" />

## API

### Props

| 参数            | 说明             | 类型      | 默认值    |
| --------------- | ---------------- | --------- | --------- |
| modelValue      | 绑定值（角度）   | `number`  | `0`       |
| size            | 组件尺寸（宽高） | `number`  | `100`     |
| step            | 步进值（度）     | `number`  | `5`       |
| useStep         | 是否启用步进模式 | `boolean` | `false`   |
| showUseStep     | 是否显示步进刻度 | `boolean` | `true`    |
| backgroundColor | 背景颜色         | `string`  | `#f1f3f5` |
| progressColor   | 进度颜色         | `string`  | `#228be6` |
| showProgress    | 是否显示进度圆环 | `boolean` | `true`    |
| endMarkColor    | 终点标记颜色     | `string`  | `#228be6` |
| showEndMark     | 是否显示终点标记 | `boolean` | `true`    |

### Events

| 事件名            | 说明         | 回调参数          |
| ----------------- | ------------ | ----------------- |
| update:modelValue | 值改变时触发 | `(value: number)` |
