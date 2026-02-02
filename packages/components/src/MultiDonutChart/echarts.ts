import { init, use } from 'echarts/core'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import { LabelLayout } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

use([TitleComponent, TooltipComponent, PieChart, LabelLayout, CanvasRenderer, LegendComponent])

// 导出配置好的 echarts 对象，包含 init 方法
const echartsInstance = {
  init,
}

export default echartsInstance
