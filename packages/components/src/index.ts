import type { App } from 'vue'

import { Flow } from './Flow'

// Components
export * from './Flow'

const components = [Flow]

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
export { Flow }
