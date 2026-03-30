<template>
  <div class="marquee-demo">
    <h2>Marquee - 跑马灯组件</h2>
    <div class="component-demo">
      <div class="demo-group">
        <h3>基础用法</h3>
        <div class="marquee-demo-content">
          <p>默认向左滚动，速度 50px/s</p>
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
        <h3>自定义速度和方向</h3>
        <div class="marquee-demo-content">
          <p>👉 向右滚动，速度 100px/s</p>
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
      <div class="demo-group">
        <h3>暂停控制</h3>
        <div class="marquee-demo-content">
          <p>🖱️ 鼠标悬停暂停</p>
        </div>
        <div class="marquee-demo-wrapper demo-content">
          <Marquee :pause-on-hover="true" :speed="50">
            <div class="marquee-item">鼠标悬停会暂停 ⏸️</div>
            <div class="marquee-item">试试把鼠标放上来 👆</div>
            <div class="marquee-item">鼠标悬停会暂停 ⏸️</div>
            <div class="marquee-item">试试把鼠标放上来 👆</div>
          </Marquee>
        </div>
        <div class="marquee-demo-content" style="margin-top: 20px">
          <p>👆 点击暂停/继续</p>
        </div>
        <div class="marquee-demo-wrapper demo-content-light">
          <Marquee :pause-on-click="true" :speed="50">
            <div class="marquee-item">点击可以暂停 ⏸️</div>
            <div class="marquee-item">再点击继续 ▶️</div>
            <div class="marquee-item">点击可以暂停 ⏸️</div>
            <div class="marquee-item">再点击继续 ▶️</div>
          </Marquee>
        </div>
        <div class="marquee-demo-content" style="margin-top: 20px">
          <p>🎛️ 手动控制播放/暂停</p>
          <p>当前: {{ marqueeIsPlaying ? '▶️ 播放中' : '⏸️ 已暂停' }}</p>
        </div>
        <div class="marquee-demo-wrapper demo-content">
          <div class="controls">
            <button
              :style="{
                background: marqueeIsPlaying ? '#f5222d' : '#1890ff',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 24px',
                fontSize: '16px',
                cursor: 'pointer'
              }"
              @click="marqueeIsPlaying = !marqueeIsPlaying"
            >
              {{ marqueeIsPlaying ? '暂停' : '播放' }}
            </button>
          </div>
          <div style="margin-top: 15px">
            <Marquee :play="marqueeIsPlaying" :speed="60">
              <div class="marquee-item">手动控制播放状态 🎛️</div>
              <div class="marquee-item">当前: {{ marqueeIsPlaying ? '▶️ 播放中' : '⏸️ 已暂停' }}</div>
              <div class="marquee-item">手动控制播放状态 🎛️</div>
              <div class="marquee-item">当前: {{ marqueeIsPlaying ? '▶️ 播放中' : '⏸️ 已暂停' }}</div>
            </Marquee>
          </div>
        </div>
      </div>
      <div class="demo-group">
        <h3>渐变效果 ✨</h3>
        <div class="marquee-demo-content">
          <p>🌈 <code>gradient=true</code> 添加左右渐变遮罩，让内容在边缘处自然淡出</p>
          <p>💡 <strong>关键提示：</strong>渐变颜色要和容器背景色匹配，才能看到自然的效果！</p>
        </div>
        <div class="marquee-demo-content" style="margin-top: 20px; padding-top: 20px; border-top: 1px dashed #ddd">
          <p>🟣 紫色渐变背景 + 紫色渐变遮罩</p>
          <p><code>gradientColor="#f093fb"</code> - 从紫色渐变到透明</p>
        </div>
        <div class="marquee-demo-wrapper demo-content-light">
          <Marquee
            :gradient="true"
            :gradient-width="200"
            gradient-color="#f093fb"
            :speed="50"
          >
            <div class="marquee-item">带渐变遮罩 🌈</div>
            <div class="marquee-item">边缘有渐变效果 ✨</div>
            <div class="marquee-item">带渐变遮罩 🌈</div>
            <div class="marquee-item">边缘有渐变效果 ✨</div>
          </Marquee>
        </div>
        <div class="marquee-demo-content" style="margin-top: 20px">
          <p>💚 绿色渐变背景 + 绿色渐变遮罩</p>
          <p><code>gradientColor="#43e97b"</code></p>
        </div>
        <div class="marquee-demo-wrapper demo-content-green">
          <Marquee
            :gradient="true"
            gradient-color="#43e97b"
            :gradient-width="150"
            :speed="50"
          >
            <div class="marquee-item">自定义渐变颜色 🎨</div>
            <div class="marquee-item">可以匹配页面背景 💚</div>
            <div class="marquee-item">自定义渐变颜色 🎨</div>
            <div class="marquee-item">可以匹配页面背景 💚</div>
          </Marquee>
        </div>
        <div class="marquee-demo-content" style="margin-top: 20px">
          <p>🟡 黄色渐变背景 + 黄色渐变遮罩</p>
          <p><code>gradientColor="#f6d365"</code></p>
        </div>
        <div class="marquee-demo-wrapper demo-content-yellow">
          <Marquee
            :gradient="true"
            gradient-color="#f6d365"
            :gradient-width="180"
            :speed="50"
          >
            <div class="marquee-item">黄色渐变效果 🌟</div>
            <div class="marquee-item">温暖柔和 🌅</div>
            <div class="marquee-item">黄色渐变效果 🌟</div>
            <div class="marquee-item">温暖柔和 🌅</div>
          </Marquee>
        </div>
      </div>
      <div class="demo-group">
        <h3>自动填充</h3>
        <div class="marquee-demo-content">
          <p>🔄 autoFill: true 会自动填充内容以覆盖整个容器，实现无缝循环</p>
        </div>
        <div class="marquee-demo-wrapper demo-content">
          <Marquee :auto-fill="true" :speed="50">
            <div class="marquee-logo">🏷️ LOGO</div>
          </Marquee>
        </div>
        <div class="marquee-demo-content" style="margin-top: 20px">
          <p>📦 少量内容自动填充</p>
        </div>
        <div class="marquee-demo-wrapper demo-content-blue">
          <Marquee :auto-fill="true" :speed="60" :pause-on-hover="true">
            <div class="marquee-logo">品牌 1 🏢</div>
            <div class="marquee-logo">品牌 2 🏭</div>
          </Marquee>
        </div>
      </div>
      <div class="demo-group">
        <h3>慢速效果</h3>
        <div class="marquee-demo-content">
          <p>🐢 速度: 20px/s，适合公告栏等场景</p>
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
        <h3>循环次数控制</h3>
        <div class="marquee-demo-content">
          <p>🔢 loop: 3 - 只循环 3 次后停止</p>
          <p>📊 已完成循环: <strong>{{ cycleCount }}</strong> 次</p>
          <p>⏱️ 状态: <strong>{{ isMarqueeFinished ? '✅ 已完成' : '🔄 运行中' }}</strong></p>
        </div>
        <div class="marquee-demo-wrapper demo-content-light">
          <Marquee
            :loop="3"
            :speed="80"
            :on-cycle-complete="handleCycleComplete"
            :on-finish="handleMarqueeFinish"
            :key="marqueeResetKey"
          >
            <div class="marquee-item">循环 3 次 🔄</div>
            <div class="marquee-item">然后停止 🛑</div>
            <div class="marquee-item">循环 3 次 🔄</div>
            <div class="marquee-item">然后停止 🛑</div>
          </Marquee>
          <div class="controls" style="margin-top: 15px">
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
              @click="resetMarqueeLoop"
            >
              🔄 重新开始
            </button>
          </div>
        </div>
      </div>
      <div class="demo-group">
        <h3>延迟启动</h3>
        <div class="marquee-demo-content">
          <p>⏰ delay: 2 - 延迟 2 秒后开始滚动</p>
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Marquee from 'hilbert-vue3-ui/Marquee'
import 'hilbert-vue3-ui/Marquee/style'

const marqueeIsPlaying = ref(true)
const cycleCount = ref(0)
const isMarqueeFinished = ref(false)
const marqueeResetKey = ref(0)

function handleCycleComplete() {
  cycleCount.value++
  console.log(`Cycle ${cycleCount.value} completed`)
}

function handleMarqueeFinish() {
  isMarqueeFinished.value = true
  console.log('Marquee animation finished!')
}

function resetMarqueeLoop() {
  cycleCount.value = 0
  isMarqueeFinished.value = false
  marqueeResetKey.value++
}
</script>

<style scoped>
.marquee-demo {
  font-family: var(--ui-font-family);
  color: var(--ui-color-gray-900);
  line-height: 1.6;
}

.marquee-demo h2 {
  font-size: var(--ui-font-size-xl);
  margin-bottom: var(--ui-space-6);
  padding-bottom: var(--ui-space-2);
  border-bottom: 1px solid var(--ui-color-gray-200);
}

.component-demo {
  background: var(--ui-color-white);
  border-radius: var(--ui-border-radius-lg);
  padding: var(--ui-space-6);
  box-shadow: var(--ui-shadow);
}

.demo-group {
  margin-bottom: var(--ui-space-6);
}

.demo-group:last-child {
  margin-bottom: 0;
}

.demo-group h3 {
  font-size: var(--ui-font-size-lg);
  margin-bottom: var(--ui-space-4);
  color: var(--ui-color-gray-700);
}

.marquee-demo-content {
  margin-bottom: 20px;
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

.demo-content-blue {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
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
</style>
