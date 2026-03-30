<template>
  <div class="angle-slider-demo">
    <h2>angleSlider - 角度选择器组件</h2>
    <div class="component-demo">
      <div class="demo-group">
        <h3>基础用法</h3>
        <div class="demo-column">
          <div style="margin-bottom: 10px">
            基础用法：
            <angle-slider v-model="angle1" />
          </div>
          <div style="margin-bottom: 10px">
            自定义尺寸：
            <angle-slider v-model="angle2" :size="150" />
          </div>
          <div style="margin-bottom: 10px">
            步进模式：
            <angle-slider v-model="angle3" :use-step="true" :step="10" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { AngleSlider } from 'hilbert-vue3-ui/AngleSlider'
import 'hilbert-vue3-ui/AngleSlider/style'

const angle1 = ref(0)
const angle2 = ref(0)
const angle3 = ref(0)
</script>

<style scoped>
.angle-slider-demo {
  font-family: var(--ui-font-family);
  color: var(--ui-color-gray-900);
  line-height: 1.6;
}

.angle-slider-demo h2 {
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
