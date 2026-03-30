<template>
  <div class="bulb-switch-demo">
    <h2>bulbSwitch - 灯泡开关组件</h2>
    <div class="component-demo">
      <div class="demo-group">
        <h3>基础用法</h3>
        <div class="demo-column">
          <div class="BulbSwitchWrapper">
            <bulb-switch :width="200" v-model="light" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { BulbSwitch } from 'hilbert-vue3-ui/BulbSwitch'
import 'hilbert-vue3-ui/BulbSwitch/style'

const light = ref(false)
</script>

<style scoped>
.bulb-switch-demo {
  font-family: var(--ui-font-family);
  color: var(--ui-color-gray-900);
  line-height: 1.6;
}

.bulb-switch-demo h2 {
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

.BulbSwitchWrapper {
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #514878;
}
</style>
