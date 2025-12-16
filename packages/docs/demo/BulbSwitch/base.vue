<template>
  <bulb-switch :width="220" v-model="light"></bulb-switch>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {BulbSwitch} from 'hilbert-vue3-ui/BulbSwitch'
import 'hilbert-vue3-ui/BulbSwitch/style'

const light = ref(false)
</script>
