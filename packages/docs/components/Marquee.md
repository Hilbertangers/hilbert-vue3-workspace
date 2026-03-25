# `Marquee` 跑马灯

Marquee, 一个功能丰富的 Vue 3 跑马灯组件，支持多种滚动方向、自动填充、渐变遮罩、交互控制等功能。基于 CSS 动画实现，性能优异，适合新闻公告、广告横幅、数据展示等场景。

## 基础用法

默认向左滚动，支持无缝循环，平滑流畅。可通过 `direction` 属性切换滚动方向。

<demo vue="../demo/Marquee/basic.vue" />

## 自动填充

使用 `autoFill` 属性让内容自动复制填满容器宽度，实现无缝连续滚动效果。适用于少量内容需要循环展示的场景。

<demo vue="../demo/Marquee/autofill.vue" />

## 交互控制

支持悬停暂停、点击暂停、外部控制播放状态和滚动速度等交互方式，提供灵活的用户交互体验。

<demo vue="../demo/Marquee/controls.vue" />

## 渐变遮罩

使用 `gradient` 属性在跑马灯两端添加渐变遮罩，让文本平滑过渡。通过 `gradientColor` 设置渐变颜色，需要与容器背景色匹配才能看到自然的效果。

<demo vue="../demo/Marquee/gradient.vue" />

## 高级用法

包括限制循环次数、延迟启动、慢速公告、组合使用等高级功能。

<demo vue="../demo/Marquee/advanced.vue" />

## API

### Props

| 参数           | 说明                     | 类型              | 默认值    |
| -------------- | ------------------------ | ----------------- | --------- |
| customStyle    | 自定义容器样式           | `Record<string, any>` | `{}`      |
| className      | 自定义容器类名           | `string`          | `''`      |
| autoFill       | 是否自动填充内容         | `boolean`         | `false`   |
| play           | 是否播放                 | `boolean`         | `true`    |
| pauseOnHover   | 鼠标悬停时暂停           | `boolean`         | `false`   |
| pauseOnClick   | 点击时暂停/恢复          | `boolean`         | `false`   |
| direction      | 滚动方向                 | `'left' \| 'right'` | `'left'`  |
| speed          | 滚动速度（像素/秒）      | `number`          | `50`      |
| delay          | 启动延迟（秒）           | `number`          | `0`       |
| loop           | 循环次数，0 表示无限循环 | `number`          | `0`       |
| gradient       | 是否启用渐变遮罩         | `boolean`         | `false`   |
| gradientColor  | 渐变遮罩颜色             | `string`          | `'white'` |

### Events

| 事件名           | 说明                       | 回调参数 |
| ---------------- | -------------------------- | -------- |
| mount            | 组件挂载完成时触发         | -        |
| finish           | 滚动完成（达到 loop 次数）时触发 | `Event`  |
| cycle-complete   | 每次循环完成时触发         | `Event`  |

### Expose

| 方法名        | 说明           | 类型             |
| ------------- | -------------- | ---------------- |
| containerRef  | 容器元素 ref   | `Ref<HTMLElement>` |
| marqueeRef    | 跑马灯内容 ref | `Ref<HTMLElement>` |
