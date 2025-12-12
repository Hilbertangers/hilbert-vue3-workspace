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

const pin1 = ref(1234)
const pin2 = ref('')
const pin3 = ref('')
function handleComplete(value: string) {
  console.log('输入完成，当前值为：', value)
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
