import type { App } from 'vue'

import { Flow } from './Flow'
import { SkuChoose } from './SkuChoose'
import { PinInput } from './PinInput'
import { Spotlight } from './Spotlight'
import './Flow/index.less'
import './SkuChoose/index.less'
import './PinInput/index.less'
import './Spotlight/index.less'

// Components
export * from './Flow'
export * from './SkuChoose'
export * from './PinInput'
export * from './Spotlight'
const components = [Flow, SkuChoose, PinInput, Spotlight]

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
export { Flow, SkuChoose, PinInput, Spotlight }
