<template>
  <div>
    <input
      placeholder="Search..."
      style="width: 300px;height: 50px;border: 1px solid #ccc;border-radius: 8px;padding: 0 16px;font-size: 16px;"
      @click="openSearch"
    >
    </input>
    <div>或者键盘快捷键打开：Ctrl/Command + K</div>
    <Spotlight v-bind="spotlightProps" />
  </div>
</template>

<script setup lang="ts">
import {Spotlight, useSpotlight} from 'hilbert-vue3-ui/Spotlight'
import type { SpotlightProps } from 'hilbert-vue3-ui'
import 'hilbert-vue3-ui/Spotlight/style'

function openSearch() {
  useSpotlight().open()
}

const affix = process.env.NODE_ENV === 'production' ? '/hilbert-vue3-workspace/' : '/'

const spotlightProps: SpotlightProps = {
  actions: [
    {
      id: 'flow',
      title: '与或逻辑图绘制器',
      description: 'flow, 一个通过canvas绘制与或流程图的组件，支持与逻辑，或逻辑，括号逻辑和节点设置',
      onTrigger: () => {
        console.log('go to flow demo')
        window.location.href = affix + 'components/Flow.html'
      }
    },
    {
      id: 'sku-choose',
      title: '商品多规格选择组件',
      description: 'sku-choose, 一个使用加权图实现的商品多规格选择组件',
      onTrigger: () => {
        console.log('go to sku-choose demo')
        window.location.href = affix + 'components/SkuChoose.html'
      }
    },
    {
      id: 'pin-input',
      title: 'PIN输入',
      description: 'pin-input, 一个验证码输入组件，支持数字、字母、密码、移动端输入，支持自动聚焦，粘贴，回退等功能',
      onTrigger: () => {
        console.log('go to pin-input demo')
        window.location.href = affix + 'components/PinInput.html'
      }
    },
    {
      id: 'spotlight',
      title: '全局搜索',
      description: 'spotlight, 一个基于Fuse.js的全局搜索组件，支持中英文模糊搜索、支持高亮、支持背景毛玻璃',
      onTrigger: () => {
        console.log('go to spotlight demo')
        window.location.href = affix + 'components/Spotlight.html'
      }
    },
    {
      id: 'bulb-switch',
      title: '灯泡开关',
      description: 'bulb-switch, 一个纯css实现的灯泡开关组件，可以应用项目暗黑模式的开关',
      onTrigger: () => {
        console.log('go to bulb-switch demo')
        window.location.href = affix + 'components/BulbSwitch.html'
      }
    },
  ]
}

</script>
