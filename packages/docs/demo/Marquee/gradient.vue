<template>
  <div class="demo-group">
    <h3>渐变遮罩效果</h3>
    <div class="marquee-demo-content">
      <p>🌈 <code>gradient=true</code> 在跑马灯两端添加渐变遮罩</p>
      <p>💡 <strong>关键提示：</strong>渐变颜色需要和容器背景色匹配，才能看到自然的效果！</p>
    </div>
    <div class="marquee-demo-wrapper demo-content">
      <Marquee
        :gradient="true"
        gradient-color="#667eea"
        :speed="50"
      >
        <div class="marquee-item">带渐变遮罩 🌈</div>
        <div class="marquee-item">边缘有渐变效果 ✨</div>
        <div class="marquee-item">带渐变遮罩 🌈</div>
        <div class="marquee-item">边缘有渐变效果 ✨</div>
      </Marquee>
    </div>
  </div>
  <div class="demo-group">
    <h3>粉色渐变</h3>
    <div class="marquee-demo-content">
      <p>🟣 粉色渐变背景 + 粉色渐变遮罩</p>
      <p><code>gradientColor="#f093fb"</code> - 从粉色渐变到透明</p>
    </div>
    <div class="marquee-demo-wrapper demo-content-light">
      <Marquee
        :gradient="true"
        gradient-color="#f093fb"
        :speed="50"
      >
        <div class="marquee-item">粉色渐变遮罩 🌸</div>
        <div class="marquee-item">温柔优雅 💕</div>
        <div class="marquee-item">粉色渐变遮罩 🌸</div>
        <div class="marquee-item">温柔优雅 💕</div>
      </Marquee>
    </div>
  </div>
  <div class="demo-group">
    <h3>绿色渐变</h3>
    <div class="marquee-demo-content">
      <p>💚 绿色渐变背景 + 绿色渐变遮罩</p>
      <p><code>gradientColor="#43e97b"</code></p>
    </div>
    <div class="marquee-demo-wrapper demo-content-green">
      <Marquee
        :gradient="true"
        gradient-color="#43e97b"
        :speed="50"
      >
        <div class="marquee-item">自定义渐变颜色 🎨</div>
        <div class="marquee-item">可以匹配页面背景 💚</div>
        <div class="marquee-item">自定义渐变颜色 🎨</div>
        <div class="marquee-item">可以匹配页面背景 💚</div>
      </Marquee>
    </div>
  </div>
  <div class="demo-group">
    <h3>黄色渐变</h3>
    <div class="marquee-demo-content">
      <p>🟡 黄色渐变背景 + 黄色渐变遮罩</p>
      <p><code>gradientColor="#f6d365"</code></p>
    </div>
    <div class="marquee-demo-wrapper demo-content-yellow">
      <Marquee
        :gradient="true"
        gradient-color="#f6d365"
        :speed="50"
      >
        <div class="marquee-item">黄色渐变效果 🌟</div>
        <div class="marquee-item">温暖柔和 🌅</div>
        <div class="marquee-item">黄色渐变效果 🌟</div>
        <div class="marquee-item">温暖柔和 🌅</div>
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

.marquee-demo-content code {
  background: #f1f2f6;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  color: #2c3e50;
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

.demo-content-green {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.demo-content-yellow {
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
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
