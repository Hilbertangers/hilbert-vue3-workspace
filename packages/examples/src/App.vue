<template>
  <div id="app">
    <header class="header">
      <p>现代化的 Vue3 组件库示例</p>
    </header>

    <main class="main">
      <section class="section">
        <h2>flow</h2>
        <div class="component-demo">
          <div class="demo-group">
            <h3>基础用法</h3>
            <div class="demo-column">
              <input v-model="inputValue" placeholder="请输入内容" />
              <p>当前值: {{ inputValue }}</p>
              <Flow :value="inputValue" />
              <Flow
                v-bind="flowProps"
                @fetch-struct="
                  v => {
                    console.log(v)
                  }
                "
              />
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <h2>sku-choose</h2>
        <div class="component-demo">
          <div class="demo-group">
            <h3>基础用法</h3>
            <div class="demo-column">
              <sku-choose v-bind="skuChooseProps" />
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <h2>pin-input</h2>
        <div class="component-demo">
          <div class="demo-group">
            <h3>基础用法</h3>
            <div style="margin-bottom: 10px;">
                密码类型：
                <pin-input
                  v-model="pin3"
                  type="password"
                  :length="6"
                  @complete="handleComplete"
                />
              </div>
            <div class="demo-column">
              <div style="margin-bottom: 10px;">
                数字类型：
                <pin-input
                  v-model="pin1"
                  type="number"
                  disabled
                  :length="6"
                  @complete="handleComplete"
                />
              </div>
              <div style="margin-bottom: 10px;">
                数字字母类型：
                <pin-input
                  v-model="pin2"
                  type="text"
                  :length="4"
                  @complete="handleComplete"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <h2>spotlight</h2>
        <div class="component-demo">
          <div class="demo-group">
            <h3>基础用法</h3>
            <div class="demo-column">
              <div>
                <input
                  placeholder="Search..."
                  style="width: 300px"
                  @focus="openSearch"
                >
                  <span slot="append">Ctrl/Command + K</span>
                </input>
              </div>
              <Spotlight v-bind="spotlightProps" />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Flow from 'hilbert-vue3-ui/Flow'
import 'hilbert-vue3-ui/Flow/style'

const inputValue = ref('vue & (vue2 | vue3)')

import type { FlowProps } from 'hilbert-vue3-ui'

const flowProps: FlowProps = {
  value: '1&2&(3|(4|5)) & 6 & 7',
  nodeMap: [
    { label: 'Vue', value: '1' },
    { label: 'Vue 2', value: '2', status: false },
    { label: 'Vue 3', value: '3', status: true },
  ],
}

import SkuChoose from 'hilbert-vue3-ui/SkuChoose'
import 'hilbert-vue3-ui/SkuChoose/style'
import type { SkuChooseProps } from 'hilbert-vue3-ui'

const skuChooseProps: SkuChooseProps = {
  specList: [
    { title: '颜色', list: ['白色', '粉色'] },
    { title: '尺寸', list: ['1寸', '2寸'] },
    { title: '体重', list: ['G', 'KG', 'PG'] },
  ],
  specCombinationList: [
    // {id: "1", specs: ["白色", "1寸", "G"]},
    { id: '2', specs: ['白色', '1寸', 'KG'] },
    { id: '3', specs: ['白色', '1寸', 'PG'] },
    { id: '4', specs: ['白色', '2寸', 'G'] },
    // {id: "5", specs: ["白色", "2寸", "KG"]},
    // {id: "6", specs: ["白色", "2寸", "PG"]},
    // {id: "7", specs: ["粉色", "1寸", "G"]},
    { id: '8', specs: ['粉色', '1寸', 'KG'] },
    { id: '9', specs: ['粉色', '1寸', 'PG'] },
    { id: '10', specs: ['粉色', '2寸', 'G'] },
    { id: '11', specs: ['粉色', '2寸', 'KG'] },
    { id: '12', specs: ['粉色', '2寸', 'PG'] },
  ],
}

import PinInput from 'hilbert-vue3-ui/PinInput'
import 'hilbert-vue3-ui/PinInput/style'

const pin1 = ref('')
const pin2 = ref('')
const pin3 = ref('')
function handleComplete(value: string) {
  console.log('输入完成，当前值为：', value)
}

import {Spotlight, useSpotlight} from 'hilbert-vue3-ui/Spotlight'
import type { SpotlightProps } from 'hilbert-vue3-ui'
import 'hilbert-vue3-ui/Spotlight/style'

const spotlightProps: SpotlightProps = {
  actions: [
    {
      id: 'flow',
      title: '与或逻辑图绘制器',
      description: 'flow, 一个通过canvas绘制与或流程图的组件，支持与逻辑，或逻辑，括号逻辑和节点设置',
      onTrigger: () => {
        console.log('go to flow demo')
      }
    },
    {
      id: 'sku-choose',
      title: '商品多规格选择组件',
      description: 'sku-choose, 一个使用加权图实现的商品多规格选择组件',
      onTrigger: () => {
        console.log('go to sku-choose demo')
      }
    },
    {
      id: 'brace-editor',
      title: '代码编辑器',
      description: 'brace-editor, 基于brace的代码编辑器封装',
      onTrigger: () => {
        console.log('go to brace-editor demo')
      }
    },
    {
      id: 'number-roll',
      title: '数字滚动',
      description: 'number-roll, 一个使用css perspective实现的数字滚动可视化组件',
      onTrigger: () => {
        console.log('go to number-roll demo')
      }
    },
    {
      id: 'bulb-switch',
      title: '灯泡开关',
      description: 'bulb-switch, 一个纯css实现的灯泡开关组件，可以应用项目暗黑模式的开关',
      onTrigger: () => {
        console.log('go to bulb-switch demo')
      }
    },
    {
      id: 'multi-donut-chart',
      title: '多层级环图',
      description: 'multi-donut-chart, 基于echarts实现的多层级环图，会根据数据量排序递减环宽度',
      onTrigger: () => {
        console.log('go to multi-donut-chart demo')
      }
    },
    {
      id: 'signature-pad',
      title: '笔锋签字板',
      description: 'signature-pad, 一个基于 Canvas 的手写签名组件，支持鼠标和触摸屏手写签名，具有笔锋效果（根据书写速度变化线条粗细）',
      onTrigger: () => {
        console.log('go to signature-pad demo')
      }
    },
    {
      id: 'spotlight',
      title: '全局搜索',
      description: 'spotlight, 一个基于Fuse.js的全局搜索组件，支持中英文模糊搜索、支持高亮、支持背景毛玻璃',
      onTrigger: () => {
        console.log('go to spotlight demo')
      }
    },
    {
      id: 'pin-input',
      title: 'PIN输入',
      description: 'pin-input, 一个验证码输入组件，支持数字、字母、密码、移动端输入，支持自动聚焦，粘贴，回退等功能',
      onTrigger: () => {
        console.log('go to pin-input demo')
      }
      },
      {
        id: 'angle-slider',
        title: '角度选择器',
        description: 'angle-slider, 一个角度选择器组件，支持点击拖拽设置角度值，支持指标器、环形进度条、刻度线等功能，并能由用户自定义样式',
        onTrigger: () => {
          console.log('go to angle-slider demo')
        }
      },
      {
        id: 'screenshots',
        title: '截图工具',
        description: 'screenshots, 一个界面截图组件，支持web、electron端使用，操作模式参照企业微信截图，支持各类路径的拖拽和编辑，支持放大镜、取色器、马赛克、文字绘制编辑等小组件，且所有操作均可回退，保存后会返回base64图片数据',
        onTrigger: () => {
          console.log('go to screenshots demo')
        }
      }
  ]
}
function openSearch() {
  useSpotlight().open()
}

</script>

<style scoped>
#app {
  font-family: var(--ui-font-family);
  color: var(--ui-color-gray-900);
  line-height: 1.6;
}

.header {
  text-align: center;
  padding: var(--ui-space-12) 0;
  background: linear-gradient(135deg, var(--ui-color-primary) 0%, #40a9ff 100%);
  color: white;
  margin-bottom: var(--ui-space-8);
}

.header h1 {
  margin: 0 0 var(--ui-space-2) 0;
  font-size: var(--ui-font-size-2xl);
  font-weight: 600;
}

.header p {
  margin: 0;
  font-size: var(--ui-font-size-lg);
  opacity: 0.9;
}

.main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--ui-space-4);
}

.section {
  margin-bottom: var(--ui-space-12);
}

.section h2 {
  font-size: var(--ui-font-size-xl);
  margin-bottom: var(--ui-space-6);
  padding-bottom: var(--ui-space-2);
  border-bottom: 1px solid var(--ui-color-gray-200);
}

.component-demo {
  background: var(--ui-color-white);
  border-radius: var(--ui-border-radius-lg);
  padding: var(--ui-space-6);
  box-shadow: var(--ui-shadow);
}

.demo-group {
  margin-bottom: var(--ui-space-6);
}

.demo-group:last-child {
  margin-bottom: 0;
}

.demo-group h3 {
  font-size: var(--ui-font-size-lg);
  margin-bottom: var(--ui-space-4);
  color: var(--ui-color-gray-700);
}

.demo-row {
  display: flex;
  gap: var(--ui-space-4);
  flex-wrap: wrap;
  align-items: center;
}

.demo-column {
  display: flex;
  flex-direction: column;
  gap: var(--ui-space-4);
  max-width: 400px;
}

.demo-column p {
  margin: 0;
  color: var(--ui-color-gray-600);
  font-size: var(--ui-font-size-sm);
}
</style>
