# `Spotlight` 全局搜索

Spotlight, 一个基于 Fuse.js 的全局搜索组件，支持中英文模糊搜索、支持高亮、支持背景毛玻璃

## 基本用法

<demo vue="../demo/Spotlight/base.vue" />

## API

### Props

| 参数        | 说明           | 类型               | 例子           | 默认值       |
| ----------- | -------------- | ------------------ | -------------- | ------------ |
| actions     | 可查询项目     | `SpotlightProps[]` | 见基本用法案例 |              |
| placeholder | 输入框提示     | `string`           |                | `搜索...`    |
| emptyText   | 搜索为空时提示 | `string`           |                | `未找到结果` |

### Events

| 事件名 | 说明     | 回调参数 |
| ------ | -------- | -------- |
| open   | 打开回调 |          |
| close  | 关闭回调 |          |
