<template>
  <div class="demo-group">
    <h3>自动填充模式</h3>
    <div class="marquee-demo-content">
      <p>🔄 autoFill: true 会自动复制内容以填满容器，实现无缝循环效果</p>
      <p>适用于少量内容需要循环展示的场景</p>
    </div>
    <div class="marquee-demo-wrapper demo-content">
      <Marquee :auto-fill="true" :speed="50">
        <div class="marquee-logo">🏷️ 品牌 LOGO</div>
      </Marquee>
    </div>
  </div>
  <div class="demo-group">
    <h3>多元素自动填充</h3>
    <div class="marquee-demo-content">
      <p>📦 自动复制多个子元素填满容器</p>
    </div>
    <div class="marquee-demo-wrapper demo-content-blue">
      <Marquee :auto-fill="true" :speed="60" :pause-on-hover="true">
        <div class="marquee-logo">品牌 1 🏢</div>
        <div class="marquee-logo">品牌 2 🏭</div>
        <div class="marquee-logo">品牌 3 🏪</div>
      </Marquee>
    </div>
  </div>
  <div class="demo-group">
    <h3>自动填充 + 右向滚动</h3>
    <div class="marquee-demo-content">
      <p>➡️ autoFill 配合 direction="right" 使用</p>
    </div>
    <div class="marquee-demo-wrapper demo-content-green">
      <Marquee :auto-fill="true" direction="right" :speed="50">
        <div class="marquee-logo">向右滚动示例 →</div>
        <div class="marquee-logo">无缝循环 🔄</div>
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

.demo-content-blue {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.demo-content-green {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.marquee-logo {
  margin: 0 25px;
  padding: 15px 30px;
  background: rgba(255, 255, 255, 0.95);
  color: #2c3e50;
  border-radius: 10px;
  font-weight: bold;
  font-size: 18px;
  white-space: nowrap;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
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
