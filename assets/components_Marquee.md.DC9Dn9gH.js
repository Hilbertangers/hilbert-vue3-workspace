const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/advanced.B34OL7Yv.js","assets/chunks/index.BUiTooHX.js","assets/chunks/framework.BnfD-2QM.js","assets/chunks/gradient.BrcBydga.js","assets/chunks/controls.DcL0R5VK.js","assets/chunks/autofill.5WzqvOeC.js","assets/chunks/basic.T3yAZFDl.js"])))=>i.map(i=>d[i]);
import{D as s,v as c,ae as u,p as w,C as M,c as k,o as Z,j as n,af as m,G as t,ag as C,a as d,ah as p,k as a,w as i,ai as v}from"./chunks/framework.BnfD-2QM.js";import{L as g,N as b}from"./chunks/index.3JkuxlVZ.js";const V=`<template>
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
  console.log(\`Cycle \${cycleCount.value} completed\`)
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
<\/script>

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
`,W=`<template>
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
<\/script>

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
`,_=`<template>
  <div class="demo-group">
    <h3>悬停暂停</h3>
    <div class="marquee-demo-content">
      <p>🖱️ 鼠标悬停在跑马灯上时会暂停滚动</p>
      <p><code>pauseOnHover: true</code></p>
    </div>
    <div class="marquee-demo-wrapper demo-content">
      <Marquee :pause-on-hover="true" :speed="50">
        <div class="marquee-item">鼠标悬停会暂停 ⏸️</div>
        <div class="marquee-item">试试把鼠标放上来 👆</div>
        <div class="marquee-item">鼠标悬停会暂停 ⏸️</div>
        <div class="marquee-item">试试把鼠标放上来 👆</div>
      </Marquee>
    </div>
  </div>
  <div class="demo-group">
    <h3>点击暂停/继续</h3>
    <div class="marquee-demo-content">
      <p>👆 点击跑马灯可以暂停/恢复滚动</p>
      <p><code>pauseOnClick: true</code></p>
    </div>
    <div class="marquee-demo-wrapper demo-content-light">
      <Marquee :pause-on-click="true" :speed="50">
        <div class="marquee-item">点击可以暂停 ⏸️</div>
        <div class="marquee-item">再点击继续 ▶️</div>
        <div class="marquee-item">点击可以暂停 ⏸️</div>
        <div class="marquee-item">再点击继续 ▶️</div>
      </Marquee>
    </div>
  </div>
  <div class="demo-group">
    <h3>外部控制播放状态</h3>
    <div class="marquee-demo-content">
      <p>🎛️ 通过 <code>play</code> 属性控制播放状态</p>
      <p>当前: {{ isPlaying ? '▶️ 播放中' : '⏸️ 已暂停' }}</p>
    </div>
    <div class="controls">
      <button
        :style="{
          background: isPlaying ? '#f5222d' : '#1890ff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          padding: '8px 24px',
          fontSize: '16px',
          cursor: 'pointer'
        }"
        @click="isPlaying = !isPlaying"
      >
        {{ isPlaying ? '暂停' : '播放' }}
      </button>
    </div>
    <div style="margin-top: 15px;">
      <div class="marquee-demo-wrapper demo-content">
        <Marquee :play="isPlaying" :speed="60">
          <div class="marquee-item">手动控制播放状态 🎛️</div>
          <div class="marquee-item">当前: {{ isPlaying ? '▶️ 播放中' : '⏸️ 已暂停' }}</div>
          <div class="marquee-item">手动控制播放状态 🎛️</div>
          <div class="marquee-item">当前: {{ isPlaying ? '▶️ 播放中' : '⏸️ 已暂停' }}</div>
        </Marquee>
      </div>
    </div>
  </div>
  <div class="demo-group">
    <h3>调整滚动速度</h3>
    <div class="marquee-demo-content">
      <p>⚡ 通过 <code>speed</code> 属性调整滚动速度（像素/秒）</p>
      <p>当前速度: {{ speed }}px/s</p>
    </div>
    <div class="controls">
      <div style="display: flex; align-items: center; gap: 15px; color: var(--ui-color-gray-600);">
        <span>速度:</span>
        <input
          v-model="speed"
          type="range"
          min="10"
          max="100"
          step="5"
          style="width: 200px; accent-color: #667eea;"
        />
        <span>{{ speed }}px/s</span>
      </div>
    </div>
    <div style="margin-top: 15px;">
      <div class="marquee-demo-wrapper demo-content-blue">
        <Marquee :speed="speed">
          <div class="marquee-item">拖动滑块调整速度 🎚️</div>
          <div class="marquee-item">速度越快滚动越快 🚀</div>
          <div class="marquee-item">拖动滑块调整速度 🎚️</div>
          <div class="marquee-item">速度越快滚动越快 🚀</div>
        </Marquee>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Marquee from 'hilbert-vue3-ui/Marquee'
import 'hilbert-vue3-ui/Marquee/style'

const isPlaying = ref(true)
const speed = ref(50)
<\/script>

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

.demo-content-blue {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
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

.controls {
  margin-top: 15px;
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
`,z=`<template>
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
<\/script>

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
`,B=`<template>
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
<\/script>

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
`,A=JSON.parse('{"title":"Marquee 跑马灯","description":"","frontmatter":{},"headers":[],"relativePath":"components/Marquee.md","filePath":"components/Marquee.md"}'),G={name:"components/Marquee.md"},U=Object.assign(G,{setup(D){const h=s();c(async()=>{h.value=(await u(async()=>{const{default:r}=await import("./chunks/advanced.B34OL7Yv.js");return{default:r}},__vite__mapDeps([0,1,2]))).default});const f=s();c(async()=>{f.value=(await u(async()=>{const{default:r}=await import("./chunks/gradient.BrcBydga.js");return{default:r}},__vite__mapDeps([3,1,2]))).default});const q=s();c(async()=>{q.value=(await u(async()=>{const{default:r}=await import("./chunks/controls.DcL0R5VK.js");return{default:r}},__vite__mapDeps([4,2,1]))).default});const x=s();c(async()=>{x.value=(await u(async()=>{const{default:r}=await import("./chunks/autofill.5WzqvOeC.js");return{default:r}},__vite__mapDeps([5,1,2]))).default});const o=w(!0),y=s();return c(async()=>{y.value=(await u(async()=>{const{default:r}=await import("./chunks/basic.T3yAZFDl.js");return{default:r}},__vite__mapDeps([6,1,2]))).default}),(r,e)=>{const l=M("ClientOnly");return Z(),k("div",null,[e[5]||(e[5]=n("h1",{id:"marquee-跑马灯",tabindex:"-1"},[n("code",null,"Marquee"),d(" 跑马灯 "),n("a",{class:"header-anchor",href:"#marquee-跑马灯","aria-label":'Permalink to "`Marquee` 跑马灯"'},"​")],-1)),e[6]||(e[6]=n("p",null,"Marquee, 一个功能丰富的 Vue 3 跑马灯组件，支持多种滚动方向、自动填充、渐变遮罩、交互控制等功能。基于 CSS 动画实现，性能优异，适合新闻公告、广告横幅、数据展示等场景。",-1)),e[7]||(e[7]=n("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),n("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),e[8]||(e[8]=n("p",null,[d("默认向左滚动，支持无缝循环，平滑流畅。可通过 "),n("code",null,"direction"),d(" 属性切换滚动方向。")],-1)),m(t(a(g),null,null,512),[[p,o.value]]),t(l,null,{default:i(()=>[t(a(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[0]||(e[0]=()=>{o.value=!1}),vueCode:a(B)},v({_:2},[y.value?{name:"vue",fn:i(()=>[t(a(y))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[9]||(e[9]=n("h2",{id:"自动填充",tabindex:"-1"},[d("自动填充 "),n("a",{class:"header-anchor",href:"#自动填充","aria-label":'Permalink to "自动填充"'},"​")],-1)),e[10]||(e[10]=n("p",null,[d("使用 "),n("code",null,"autoFill"),d(" 属性让内容自动复制填满容器宽度，实现无缝连续滚动效果。适用于少量内容需要循环展示的场景。")],-1)),m(t(a(g),null,null,512),[[p,o.value]]),t(l,null,{default:i(()=>[t(a(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[1]||(e[1]=()=>{o.value=!1}),vueCode:a(z)},v({_:2},[x.value?{name:"vue",fn:i(()=>[t(a(x))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[11]||(e[11]=n("h2",{id:"交互控制",tabindex:"-1"},[d("交互控制 "),n("a",{class:"header-anchor",href:"#交互控制","aria-label":'Permalink to "交互控制"'},"​")],-1)),e[12]||(e[12]=n("p",null,"支持悬停暂停、点击暂停、外部控制播放状态和滚动速度等交互方式，提供灵活的用户交互体验。",-1)),m(t(a(g),null,null,512),[[p,o.value]]),t(l,null,{default:i(()=>[t(a(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[2]||(e[2]=()=>{o.value=!1}),vueCode:a(_)},v({_:2},[q.value?{name:"vue",fn:i(()=>[t(a(q))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[13]||(e[13]=n("h2",{id:"渐变遮罩",tabindex:"-1"},[d("渐变遮罩 "),n("a",{class:"header-anchor",href:"#渐变遮罩","aria-label":'Permalink to "渐变遮罩"'},"​")],-1)),e[14]||(e[14]=n("p",null,[d("使用 "),n("code",null,"gradient"),d(" 属性在跑马灯两端添加渐变遮罩，让文本平滑过渡。通过 "),n("code",null,"gradientColor"),d(" 设置渐变颜色，需要与容器背景色匹配才能看到自然的效果。")],-1)),m(t(a(g),null,null,512),[[p,o.value]]),t(l,null,{default:i(()=>[t(a(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[3]||(e[3]=()=>{o.value=!1}),vueCode:a(W)},v({_:2},[f.value?{name:"vue",fn:i(()=>[t(a(f))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[15]||(e[15]=n("h2",{id:"高级用法",tabindex:"-1"},[d("高级用法 "),n("a",{class:"header-anchor",href:"#高级用法","aria-label":'Permalink to "高级用法"'},"​")],-1)),e[16]||(e[16]=n("p",null,"包括限制循环次数、延迟启动、慢速公告、组合使用等高级功能。",-1)),m(t(a(g),null,null,512),[[p,o.value]]),t(l,null,{default:i(()=>[t(a(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[4]||(e[4]=()=>{o.value=!1}),vueCode:a(V)},v({_:2},[h.value?{name:"vue",fn:i(()=>[t(a(h))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[17]||(e[17]=C('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>customStyle</td><td>自定义容器样式</td><td><code>Record&lt;string, any&gt;</code></td><td><code>{}</code></td></tr><tr><td>className</td><td>自定义容器类名</td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>autoFill</td><td>是否自动填充内容</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>play</td><td>是否播放</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>pauseOnHover</td><td>鼠标悬停时暂停</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>pauseOnClick</td><td>点击时暂停/恢复</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>direction</td><td>滚动方向</td><td><code>&#39;left&#39; | &#39;right&#39;</code></td><td><code>&#39;left&#39;</code></td></tr><tr><td>speed</td><td>滚动速度（像素/秒）</td><td><code>number</code></td><td><code>50</code></td></tr><tr><td>delay</td><td>启动延迟（秒）</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>loop</td><td>循环次数，0 表示无限循环</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>gradient</td><td>是否启用渐变遮罩</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>gradientColor</td><td>渐变遮罩颜色</td><td><code>string</code></td><td><code>&#39;white&#39;</code></td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>mount</td><td>组件挂载完成时触发</td><td>-</td></tr><tr><td>finish</td><td>滚动完成（达到 loop 次数）时触发</td><td><code>Event</code></td></tr><tr><td>cycle-complete</td><td>每次循环完成时触发</td><td><code>Event</code></td></tr></tbody></table><h3 id="expose" tabindex="-1">Expose <a class="header-anchor" href="#expose" aria-label="Permalink to &quot;Expose&quot;">​</a></h3><table tabindex="0"><thead><tr><th>方法名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>containerRef</td><td>容器元素 ref</td><td><code>Ref&lt;HTMLElement&gt;</code></td></tr><tr><td>marqueeRef</td><td>跑马灯内容 ref</td><td><code>Ref&lt;HTMLElement&gt;</code></td></tr></tbody></table>',7))])}}});export{A as __pageData,U as default};
