<template>
  <Flow v-bind="flowProps" />
</template>

<script setup lang="ts">
import Flow from 'hilbert-vue3-ui/Flow'
import 'hilbert-vue3-ui/Flow/style'

import type { FlowProps } from 'hilbert-vue3-ui'

const flowProps: FlowProps = {
  value: '1&2&(3|(4|5)) & 6 & 7',
  nodeMap: [
    { value: '1', label: '进入收银台', status: true },
    { value: '2', label: '输入金额', status: false },
    { value: '3', label: '不验券' },
    { value: '4', label: '验美团券' },
    { value: '5', label: '验抖音券' },
    { value: '6', label: '支付剩余金额' },
    { value: '7', label: '订单完成', status: true },
  ],
  orWidthRate: 0.4,
  orHeightRate: 0.5,
  orHybridRate: 0.3,
  nodeStyle: {
    height: 30,
    fontSize: 12,
    padding: 6,
    branchPaddingMin: 10, // or上下各分支间node的距离
    marginMin: 0, // node与node，node与or间的最小距离
    color: {
      success: { fill: '#0DBDA4', font: '#FFFFFF' },   // 品牌青
      fail:    { fill: '#FF6F6F', font: '#FFFFFF' },   // 轻盈珊瑚
      default: { fill: '#EAECEF', font: '#4A4E59' },   // 中性灰
    },
  }
}

</script>
