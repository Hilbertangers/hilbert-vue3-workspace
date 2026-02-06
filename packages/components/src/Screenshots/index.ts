import Screenshots from './index.vue'
import './index.less'
import type { App } from 'vue'

Screenshots.install = (app: App) => {
  app.component('Screenshots', Screenshots)
}

export default Screenshots
export { Screenshots }
