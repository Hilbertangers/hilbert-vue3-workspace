import type { App } from 'vue'

import { Flow } from './Flow'
import { SkuChoose } from './SkuChoose'
import { PinInput } from './PinInput'
import { Spotlight } from './Spotlight'
import { BulbSwitch } from './BulbSwitch'
import { AngleSlider } from './AngleSlider'
import { MultiDonutChart } from './MultiDonutChart'
import { SignaturePad } from './SignaturePad'
import Screenshots from './Screenshots'
import { NumberRoll } from './NumberRoll'
import Marquee from './Marquee'
import Skeleton from './Skeleton'
import './Flow/index.less'
import './SkuChoose/index.less'
import './PinInput/index.less'
import './Spotlight/index.less'
import './BulbSwitch/index.less'
import './AngleSlider/index.less'
import './SignaturePad/index.less'
import './Screenshots/index.less'
import './NumberRoll/index.less'
import './Marquee/index.less'
import './Skeleton/index.less'

// Components
export * from './Flow'
export * from './SkuChoose'
export * from './PinInput'
export * from './Spotlight'
export * from './BulbSwitch'
export * from './AngleSlider'
export * from './MultiDonutChart'
export * from './SignaturePad'
export * from './Screenshots'
export * from './NumberRoll'
export * from './Marquee'
export * from './Skeleton'
const components = [
  Flow,
  SkuChoose,
  PinInput,
  Spotlight,
  BulbSwitch,
  AngleSlider,
  MultiDonutChart,
  SignaturePad,
  Screenshots,
  NumberRoll,
  Marquee,
  Skeleton,
]

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
export {
  Flow,
  SkuChoose,
  PinInput,
  Spotlight,
  BulbSwitch,
  AngleSlider,
  MultiDonutChart,
  SignaturePad,
  Screenshots,
  NumberRoll,
  Marquee,
  Skeleton,
}
