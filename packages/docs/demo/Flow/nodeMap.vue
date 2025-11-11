<template>
  <Flow v-bind="flowProps" />
</template>

<script setup lang="ts">
import Flow from 'hilbert-vue3-ui/Flow'
import 'hilbert-vue3-ui/Flow/style'

import type { FlowProps } from 'hilbert-vue3-ui'

const flowProps: FlowProps = {
  value: '1&2|3',
  nodeMap: [
    { value: '1', label: '校验1', status: true },
    { value: '2', label: '校验2', status: false },
    { value: '3', label: '不校验' },
  ],
}

</script>
