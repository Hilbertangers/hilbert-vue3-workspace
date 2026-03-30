<template>
  <div class="flow-demo">
    <h2>flow - 与或逻辑图绘制器</h2>
    <div class="component-demo">
      <div class="demo-group">
        <h3>基础用法</h3>
        <div class="demo-column">
          <input v-model="inputValue" placeholder="请输入内容" />
          <p>当前值: {{ inputValue }}</p>
          <Flow :value="inputValue" />
          <Flow v-bind="flowProps" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Flow from 'hilbert-vue3-ui/Flow'
import 'hilbert-vue3-ui/Flow/style'

import type { FlowProps } from 'hilbert-vue3-ui'

const inputValue = ref('vue & (vue2 | vue3)')

const flowProps: FlowProps = {
  value: '1&2&(3|(4|5)) & 6 & 7',
  nodeMap: [
    { label: 'Vue', value: '1' },
    { label: 'Vue 2', value: '2', status: false },
    { label: 'Vue 3', value: '3', status: true }
  ]
}
</script>

<style scoped>
.flow-demo {
  font-family: var(--ui-font-family);
  color: var(--ui-color-gray-900);
  line-height: 1.6;
}

.flow-demo h2 {
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
