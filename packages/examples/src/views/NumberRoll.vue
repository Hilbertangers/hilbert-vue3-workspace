<template>
  <div class="number-roll-demo">
    <h2>NumberRoll - 数字滚动组件</h2>
    <div class="component-demo">
      <div class="demo-group">
        <h3>基础用法</h3>
        <div class="demo-column">
          <p>当前值: {{ numberRollValue }}</p>
          <NumberRoll v-model="numberRollValue" />
        </div>
      </div>
      <div class="demo-group">
        <h3>自定义样式</h3>
        <div class="demo-column">
          <p>大尺寸 - 当前值: {{ numberRollValue2 }}</p>
          <NumberRoll
            v-model="numberRollValue2"
            :width="70"
            :height="80"
            :fontSize="48"
            :transitionDuration="800"
          />
        </div>
      </div>
      <div class="demo-group">
        <h3>控制按钮</h3>
        <div class="demo-row">
          <button @click="numberRollValue++" class="control-button">+1</button>
          <button @click="numberRollValue--" class="control-button">-1</button>
          <button @click="numberRollValue = Math.floor(Math.random() * 1000)" class="control-button">随机</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { NumberRoll } from 'hilbert-vue3-ui/NumberRoll'
import 'hilbert-vue3-ui/NumberRoll/style'

const numberRollValue = ref(0)
const numberRollValue2 = ref(123)
</script>

<style scoped>
.number-roll-demo {
  font-family: var(--ui-font-family);
  color: var(--ui-color-gray-900);
  line-height: 1.6;
}

.number-roll-demo h2 {
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

.control-button {
  padding: 10px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: var(--ui-font-size-base);
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
}

.control-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
}
</style>
