<template>
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
