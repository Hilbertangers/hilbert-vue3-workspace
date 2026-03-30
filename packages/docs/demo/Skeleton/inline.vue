<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <p>行内模式</p>

    <div>
      <p style="margin-bottom: 8px; font-size: 14px; color: #666;">非行内模式（默认）- 每个骨架屏独占一行</p>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <Skeleton :count="3" :height="20" :width="100" />
      </div>
    </div>

    <div>
      <p style="margin-bottom: 8px; font-size: 14px; color: #666;">行内模式（inline: true）- 多个骨架屏在同一行</p>
      <div>
        <Skeleton :count="5" :height="20" :width="60" :inline="true" />
      </div>
    </div>

    <div>
      <p style="margin-bottom: 8px; font-size: 14px; color: #666;">行内模式示例 - 模拟文本行</p>
      <div style="line-height: 1.6;">
        <span>这是一段文本示例，</span>
        <Skeleton :height="14" :width="80" :inline="true" />
        <span>中间有一个</span>
        <Skeleton :height="14" :width="60" :inline="true" />
        <span>占位符。</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Skeleton from 'hilbert-vue3-ui/Skeleton'
import 'hilbert-vue3-ui/Skeleton/style'
</script>
