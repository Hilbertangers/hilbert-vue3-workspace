# hilbert-vue3-ui

一个现代化的 Vue3 组件库，[组件详细介绍](https://hilbertangers.github.io/hilbert-vue3-workspace/#/)

## 安装

```bash
npm install hilbert-vue3-ui
# 或
pnpm add hilbert-vue3-ui
# 或
yarn add hilbert-vue3-ui
```

## 使用

### 完整引入

```js
import { createApp } from 'vue'
import HilbertUI from 'hilbert-vue3-ui'
import App from './App.vue'

const app = createApp(App)
app.use(HilbertUI)
app.mount('#app')
```

### 按需引入

```js
import Flow from 'hilbert-vue3-ui/Flow'
import 'hilbert-vue3-ui/Flow/style'
```

## License

MIT
