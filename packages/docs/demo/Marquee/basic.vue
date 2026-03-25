<template>
  <div class="demo-group">
    <h3>基础用法</h3>
    <div class="marquee-demo-content">
      <p>默认向左滚动，速度 60px/s</p>
      <p>支持无缝循环，平滑流畅</p>
    </div>
    <div class="marquee-demo-wrapper demo-content">
      <Marquee :speed="60">
        <div class="marquee-item">🚀 欢迎使用 hilbert-vue-ui</div>
        <div class="marquee-item">✨ 这是一个跑马灯组件</div>
        <div class="marquee-item">🎨 基于 CSS 动画实现</div>
        <div class="marquee-item">💫 平滑流畅</div>
        <div class="marquee-item">🚀 欢迎使用 hilbert-vue-ui</div>
        <div class="marquee-item">✨ 这是一个跑马灯组件</div>
      </Marquee>
    </div>
  </div>
  <div class="demo-group">
    <h3>向右滚动</h3>
    <div class="marquee-demo-content">
      <p>👉 设置 direction="right"</p>
    </div>
    <div class="marquee-demo-wrapper demo-content-light">
      <Marquee :speed="100" direction="right">
        <div class="marquee-item">向右滚动 →</div>
        <div class="marquee-item">速度更快 🚀</div>
        <div class="marquee-item">向右滚动 →</div>
        <div class="marquee-item">速度更快 🚀</div>
      </Marquee>
    </div>
  </div>
</template>

<script setup lang="ts">
import Marquee from 'hilbert-vue3-ui/Marquee'
import 'hilbert-vue3-ui/Marquee/style'
</script>

<style scoped>
.marquee-demo-content {
  margin-bottom: 15px;
  color: var(--ui-color-gray-600);
  font-size: var(--ui-font-size-sm);
  line-height: 1.6;
}

.marquee-demo-content p {
  margin: 5px 0;
}

.marquee-demo-wrapper {
  padding: 25px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.demo-content {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.demo-content-light {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.marquee-item {
  margin: 0 20px;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.95);
  color: #2c3e50;
  border-radius: 8px;
  font-weight: 500;
  font-size: 15px;
  white-space: nowrap;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.demo-group {
  margin-bottom: 30px;
}

.demo-group h3 {
  font-size: var(--ui-font-size-lg);
  margin-bottom: 10px;
  color: var(--ui-color-gray-700);
}
</style>
