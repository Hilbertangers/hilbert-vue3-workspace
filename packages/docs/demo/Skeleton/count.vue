<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <p>多骨架屏效果</p>

    <div>
      <p style="margin-bottom: 8px; font-size: 14px; color: #666;">count="3" - 显示 3 个骨架屏</p>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <Skeleton :count="3" :height="20" :width="100" />
      </div>
    </div>

    <div>
      <p style="margin-bottom: 8px; font-size: 14px; color: #666;">count="5" - 显示 5 个骨架屏</p>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <Skeleton :count="5" :height="20" :width="100" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Skeleton from 'hilbert-vue3-ui/Skeleton'
import 'hilbert-vue3-ui/Skeleton/style'
</script>
