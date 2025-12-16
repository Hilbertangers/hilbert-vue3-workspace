import type { App } from 'vue'

import { Flow } from './Flow'
import { SkuChoose } from './SkuChoose'
import { PinInput } from './PinInput'
import { Spotlight } from './Spotlight'
import { BulbSwitch } from './BulbSwitch'
import './Flow/index.less'
import './SkuChoose/index.less'
import './PinInput/index.less'
import './Spotlight/index.less'
import './BulbSwitch/index.less'

// Components
export * from './Flow'
export * from './SkuChoose'
export * from './PinInput'
export * from './Spotlight'
export * from './BulbSwitch'
const components = [Flow, SkuChoose, PinInput, Spotlight, BulbSwitch]

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
export { Flow, SkuChoose, PinInput, Spotlight, BulbSwitch }
