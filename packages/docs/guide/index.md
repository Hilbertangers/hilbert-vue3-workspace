# 快速开始

## 安装

使用你喜欢的包管理器安装组件库：

::: code-group

```bash [pnpm]
pnpm add hilbert-vue3-ui
```

```bash [npm]
npm install hilbert-vue3-ui
```

```bash [yarn]
yarn add hilbert-vue3-ui
```

:::

## 使用

### 完整导入

```typescript
import { createApp } from 'vue'
import HilbertUI from 'hilbert-vue3-ui'
import App from './App.vue'

const app = createApp(App)
app.use(HilbertUI)
app.mount('#app')
```

### 按需导入

```vue
<template>
  <div>
    <Flow :value="inputValue" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Flow from 'hilbert-vue3-ui/Flow'
import 'hilbert-vue3-ui/Flow/style'

const inputValue = ref('vue & (vue2 | vue3)')
</script>
```

## TypeScript 支持

本组件库使用 TypeScript 编写，提供完整的类型定义：

```typescript
import type { FlowProps } from 'hilbert-vue3-ui'

const flowProps: FlowProps = {
  value: '1 & (2 | 3)',
  nodeMap: [
    { label: 'Vue', value: '1' },
    { label: 'Vue 2', value: '2', status: false },
    { label: 'Vue 3', value: '3', status: true },
  ],
}
```
