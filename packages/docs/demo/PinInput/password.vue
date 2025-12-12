<template>
  <PinInput
    v-model="pin"
    type="password"
    :length="4"
    @complete="handleComplete"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PinInput from 'hilbert-vue3-ui/PinInput'
import 'hilbert-vue3-ui/PinInput/style'

const pin = ref('')

function handleComplete(value: string) {
  console.log('输入完成，当前值为：', value)
}
</script>
