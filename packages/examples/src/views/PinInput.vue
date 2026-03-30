<template>
  <div class="pin-input-demo">
    <h2>pin-input - PIN输入组件</h2>
    <div class="component-demo">
      <div class="demo-group">
        <h3>基础用法</h3>
        <div style="margin-bottom: 10px">
          密码类型：
          <pin-input v-model="pin3" type="password" :length="6" @complete="handleComplete" />
        </div>
        <div class="demo-column">
          <div style="margin-bottom: 10px">
            数字类型：
            <pin-input v-model="pin1" type="number" disabled :length="6" @complete="handleComplete" />
          </div>
          <div style="margin-bottom: 10px">
            数字字母类型：
            <pin-input v-model="pin2" type="text" :length="4" @complete="handleComplete" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import PinInput from 'hilbert-vue3-ui/PinInput'
import 'hilbert-vue3-ui/PinInput/style'

const pin1 = ref('')
const pin2 = ref('')
const pin3 = ref('')

function handleComplete(value: string) {
  console.log('输入完成，当前值为：', value)
}
</script>

<style scoped>
.pin-input-demo {
  font-family: var(--ui-font-family);
  color: var(--ui-color-gray-900);
  line-height: 1.6;
}

.pin-input-demo h2 {
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
