<template>
  <div class="demo-container">
    <div class="demo-item">
      <h4>步进模式（5度）</h4>
      <AngleSlider v-model="angle1" :use-step="true" :step="5" />
      <p>当前角度: {{ angle1 }}°</p>
    </div>
    <div class="demo-item">
      <h4>步进模式（10度）</h4>
      <AngleSlider v-model="angle2" :use-step="true" :step="10" />
      <p>当前角度: {{ angle2 }}°</p>
    </div>
    <div class="demo-item">
      <h4>步进模式（15度）</h4>
      <AngleSlider v-model="angle3" :use-step="true" :step="15" />
      <p>当前角度: {{ angle3 }}°</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AngleSlider from 'hilbert-vue3-ui/AngleSlider'
import 'hilbert-vue3-ui/AngleSlider/style'

const angle1 = ref(0)
const angle2 = ref(0)
const angle3 = ref(0)
</script>

<style scoped>
.demo-container {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
}

.demo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.demo-item h4 {
  margin: 0;
  color: #333;
}

.demo-item p {
  margin: 0;
  color: #666;
}
</style>
