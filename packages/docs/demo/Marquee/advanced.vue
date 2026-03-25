<template>
  <div class="demo-group">
    <h3>限制循环次数</h3>
    <div class="marquee-demo-content">
      <p>🔢 <code>loop: 3</code> - 只循环 3 次后停止</p>
      <p>📊 已完成循环: <strong>{{ cycleCount }}</strong> 次</p>
      <p>⏱️ 状态: <strong>{{ isFinished ? '✅ 已完成' : '🔄 运行中' }}</strong></p>
    </div>
    <div class="marquee-demo-wrapper demo-content-light">
      <Marquee
        :loop="3"
        :speed="80"
        :on-cycle-complete="handleCycleComplete"
        :on-finish="handleFinish"
        :key="resetKey"
      >
        <div class="marquee-item">循环 3 次 🔄</div>
        <div class="marquee-item">然后停止 🛑</div>
        <div class="marquee-item">循环 3 次 🔄</div>
        <div class="marquee-item">然后停止 🛑</div>
      </Marquee>
      <div class="controls">
        <button
          style="
            background: #1890ff;
            color: white;
            border: none;
            border-radius: 8px;
            padding: 8px 24px;
            font-size: 16px;
            cursor: pointer
          "
          @click="resetLoop"
        >
          🔄 重新开始
        </button>
      </div>
    </div>
  </div>
  <div class="demo-group">
    <h3>延迟启动</h3>
    <div class="marquee-demo-content">
      <p>⏰ <code>delay: 2</code> - 延迟 2 秒后开始滚动</p>
      <p>适用于需要延迟显示的场景</p>
    </div>
    <div class="marquee-demo-wrapper demo-content-green">
      <Marquee :delay="2" :speed="60">
        <div class="marquee-item">延迟启动 ⏰</div>
        <div class="marquee-item">2 秒后开始 🚀</div>
        <div class="marquee-item">延迟启动 ⏰</div>
        <div class="marquee-item">2 秒后开始 🚀</div>
      </Marquee>
    </div>
  </div>
  <div class="demo-group">
    <h3>慢速公告效果</h3>
    <div class="marquee-demo-content">
      <p>🐢 速度: 20px/s，适合公告栏等场景</p>
      <p>配合悬停暂停使用，方便用户阅读</p>
    </div>
    <div class="marquee-demo-wrapper demo-content">
      <Marquee :speed="20" :pause-on-hover="true" :gradient="true" gradient-color="#667eea">
        <div class="marquee-item">📢 这是一条重要公告</div>
        <div class="marquee-item">📋 请仔细阅读</div>
        <div class="marquee-item">📢 这是一条重要公告</div>
        <div class="marquee-item">📋 请仔细阅读</div>
      </Marquee>
    </div>
  </div>
  <div class="demo-group">
    <h3>组合使用</h3>
    <div class="marquee-demo-content">
      <p>🎨 组合多种属性，创建自定义效果</p>
      <p>autoFill + gradient + pauseOnHover + 自定义速度</p>
    </div>
    <div class="marquee-demo-wrapper demo-content">
      <Marquee
        :auto-fill="true"
        :gradient="true"
        gradient-color="#667eea"
        :gradient-width="150"
        :pause-on-hover="true"
        :speed="40"
      >
        <div class="marquee-logo">🎨 自动填充</div>
        <div class="marquee-logo">✨ 渐变效果</div>
        <div class="marquee-logo">⏸️ 悬停暂停</div>
        <div class="marquee-logo">🚀 自定义速度</div>
        <div class="marquee-logo">💪 组合示例</div>
      </Marquee>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Marquee from 'hilbert-vue3-ui/Marquee'
import 'hilbert-vue3-ui/Marquee/style'

const cycleCount = ref(0)
const isFinished = ref(false)
const resetKey = ref(0)

function handleCycleComplete() {
  cycleCount.value++
  console.log(`Cycle ${cycleCount.value} completed`)
}

function handleFinish() {
  isFinished.value = true
  console.log('Marquee animation finished!')
}

function resetLoop() {
  cycleCount.value = 0
  isFinished.value = false
  resetKey.value++
}
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

.controls {
  margin-top: 20px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
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
