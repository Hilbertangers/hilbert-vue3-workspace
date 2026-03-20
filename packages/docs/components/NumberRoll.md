# `NumberRoll` 数字滚动

NumberRoll, 一个使用 CSS 3D perspective 实现的数字滚动可视化组件，支持平滑的数字切换动画效果

## 基础用法

<demo vue="../demo/NumberRoll/basic.vue" />

## 自定义样式

<demo vue="../demo/NumberRoll/custom.vue" />

## API

### Props

| 参数                | 说明                 | 类型           | 默认值             |
| ------------------- | -------------------- | -------------- | ------------------ |
| modelValue          | 当前显示的数字       | `number`       | `0`                |
| width               | 单个数字位的宽度     | `number|string`| `50`               |
| height              | 单个数字位的高度     | `number|string`| `60`               |
| fontSize            | 字体大小             | `number|string`| `32`               |
| textColor           | 文字颜色             | `string`       | `#ffffff`          |
| backgroundColor     | 背景颜色             | `string`       | `#1a1a2e`          |
| borderColor         | 边框颜色             | `string`       | `#4a4a6a`          |
| showBorder          | 是否显示边框         | `boolean`      | `true`             |
| transitionDuration  | 动画持续时间（毫秒） | `number`       | `600`              |
| fontFamily          | 字体                 | `string`       | `'Arial, sans-serif'` |
| useGradient         | 是否使用渐变背景     | `boolean`      | `true`             |

### Events

| 事件名            | 说明                   | 回调参数 |
| ----------------- | ---------------------- | -------- |
| update:modelValue | 值改变时触发           | `number` |

