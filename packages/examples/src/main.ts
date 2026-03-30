import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 全局引入
// import HilbertUI from 'hilbert-vue3-ui'
// import 'hilbert-vue3-ui/style'

const app = createApp(App)
app.use(router)
// app.use(HilbertUI)
app.mount('#app')
