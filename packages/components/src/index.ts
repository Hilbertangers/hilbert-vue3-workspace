import type { App } from 'vue'

import { Flow } from './Flow'
import { SkuChoose } from './SkuChoose'
import './Flow/index.less'
import './SkuChoose/index.less'

// Components
export * from './Flow'
export * from './SkuChoose'

const components = [Flow, SkuChoose]

// Install function
export function install(app: App) {
  components.forEach(component => {
    const name = component.name || component.__name
    if (name) {
      app.component(name, component)
    }
  })
}

// Default export for full bundle
export default {
  install,
}

// Individual exports
export { Flow, SkuChoose }
