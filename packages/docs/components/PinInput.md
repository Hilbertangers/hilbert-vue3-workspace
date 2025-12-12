# `PinInput` 验证码输入框

PinInput, 一个验证码输入组件，长度可配，支持数字、字母、密码、移动端输入，支持自动聚焦，禁用，粘贴，回退等功能

## 数字输入

<demo vue="../demo/PinInput/number.vue" />

## 数字字母输入

<demo vue="../demo/PinInput/text.vue" />

## 密码输入

<demo vue="../demo/PinInput/password.vue" />

## API

### Props

| 参数       | 说明       | 类型      | 例子                         | 默认值  |
| ---------- | ---------- | --------- | ---------------------------- | ------- |
| length     | 输入框数量 | `number`  |                              | `4`     |
| type       | 可输入类型 | `string`  | `number`、`text`、`password` | `text`  |
| disabled   | 是否禁用   | `boolean` |                              | `false` |
| modelValue | 值         | `string`  |                              | ``      |

### Events

| 事件名   | 说明                 | 回调参数 |
| -------- | -------------------- | -------- |
| complete | 全部输入完成后返回值 | `string` |
