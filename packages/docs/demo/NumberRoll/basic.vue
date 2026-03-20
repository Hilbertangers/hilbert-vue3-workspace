<template>
  <div style="display: flex; flex-direction: column; gap: 20px; align-items: center;">
    <div style="display: flex; align-items: center; gap: 10px;">
      <NumberRoll v-model="value" />
    </div>
    <div style="display: flex; gap: 10px;">
      <button @click="value--" style="padding: 8px 16px; cursor: pointer;">-1</button>
      <button @click="value++" style="padding: 8px 16px; cursor: pointer;">+1</button>
      <button @click="value = Math.floor(Math.random() * 1000)" style="padding: 8px 16px; cursor: pointer;">随机</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NumberRoll from 'hilbert-vue3-ui/NumberRoll'
import 'hilbert-vue3-ui/NumberRoll/style'

const value = ref(123)
</script>
