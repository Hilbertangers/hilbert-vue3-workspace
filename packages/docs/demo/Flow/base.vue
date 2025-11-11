<template>
  <Flow :value="inputValue" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Flow from 'hilbert-vue3-ui/Flow'
import 'hilbert-vue3-ui/Flow/style'
const inputValue = ref('vue & (vue2 | vue3)')
</script>
