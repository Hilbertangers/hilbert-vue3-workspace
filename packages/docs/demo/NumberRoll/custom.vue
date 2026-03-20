<template>
  <div style="display: flex; flex-direction: column; gap: 30px; align-items: center;">
    <div>
      <h3>大尺寸</h3>
      <div style="margin-top: 10px;">
        <NumberRoll
          v-model="value1"
          :width="70"
          :height="80"
          :fontSize="48"
          :transitionDuration="800"
        />
      </div>
    </div>
    <div>
      <h3>自定义颜色</h3>
      <div style="margin-top: 10px;">
        <NumberRoll
          v-model="value2"
          backgroundColor="#2d3748"
          textColor="#ffffff"
          borderColor="#4a5568"
          :useGradient="false"
        />
      </div>
    </div>
    <div style="display: flex; gap: 10px;">
      <button @click="randomize" style="padding: 8px 16px; cursor: pointer;">随机数字</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NumberRoll from 'hilbert-vue3-ui/NumberRoll'
import 'hilbert-vue3-ui/NumberRoll/style'

const value1 = ref(456)
const value2 = ref(789)

function randomize() {
  value1.value = Math.floor(Math.random() * 1000)
  value2.value = Math.floor(Math.random() * 1000)
}
</script>
