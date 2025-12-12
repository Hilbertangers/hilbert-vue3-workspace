<template>
  <PinInput
    v-model="pin"
    type="text"
    :length="6"
    @complete="handleComplete"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PinInput from 'hilbert-vue3-ui/PinInput'
import 'hilbert-vue3-ui/PinInput/style'

const pin = ref('12ab')

function handleComplete(value: string) {
  console.log('输入完成，当前值为：', value)
}
</script>
