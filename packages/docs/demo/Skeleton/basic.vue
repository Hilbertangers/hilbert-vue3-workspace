<template>
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <p>基础骨架屏加载效果</p>

    <div style="display: flex; align-items: center; gap: 12px;">
      <Skeleton :width="40" :height="40" :circle="true" />
      <div style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
        <Skeleton :height="16" :width="120" />
        <Skeleton :height="14" :width="80" />
      </div>
    </div>

    <Skeleton :height="14" :width="100" />
    <Skeleton :height="14" :width="95" />
    <Skeleton :height="14" :width="70" />
  </div>
</template>

<script setup lang="ts">
import Skeleton from 'hilbert-vue3-ui/Skeleton'
import 'hilbert-vue3-ui/Skeleton/style'
</script>
