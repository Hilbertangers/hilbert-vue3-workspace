<template>
  <div id="app">
    <header class="header">
      <p>现代化的 Vue3 组件库示例</p>
    </header>

    <main class="main">
      <section class="section">
        <h2>flow</h2>
        <div class="component-demo">
          <div class="demo-group">
            <h3>基础用法</h3>
            <div class="demo-column">
              <input v-model="inputValue" placeholder="请输入内容" />
              <p>当前值: {{ inputValue }}</p>
              <Flow :value="inputValue" />
              <Flow
                v-bind="flowProps"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <h2>sku-choose</h2>
        <div class="component-demo">
          <div class="demo-group">
            <h3>基础用法</h3>
            <div class="demo-column">
              <sku-choose v-bind="skuChooseProps" />
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <h2>pin-input</h2>
        <div class="component-demo">
          <div class="demo-group">
            <h3>基础用法</h3>
            <div style="margin-bottom: 10px;">
                密码类型：
                <pin-input
                  v-model="pin3"
                  type="password"
                  :length="6"
                  @complete="handleComplete"
                />
              </div>
            <div class="demo-column">
              <div style="margin-bottom: 10px;">
                数字类型：
                <pin-input
                  v-model="pin1"
                  type="number"
                  disabled
                  :length="6"
                  @complete="handleComplete"
                />
              </div>
              <div style="margin-bottom: 10px;">
                数字字母类型：
                <pin-input
                  v-model="pin2"
                  type="text"
                  :length="4"
                  @complete="handleComplete"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <h2>spotlight</h2>
        <div class="component-demo">
          <div class="demo-group">
            <h3>基础用法</h3>
            <div class="demo-column">
              <div>
                <input
                  placeholder="Search..."
                  style="width: 300px"
                  @focus="openSearch"
                >
                  <span slot="append">Ctrl/Command + K</span>
                </input>
              </div>
              <Spotlight v-bind="spotlightProps" />
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <h2>bulbSwitch</h2>
        <div class="component-demo">
          <div class="demo-group">
            <h3>基础用法</h3>
            <div class="demo-column">
              <div class="BulbSwitchWrapper">

                <bulb-switch :width="200" v-model="light"></bulb-switch>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <h2>angleSlider</h2>
        <div class="component-demo">
          <div class="demo-group">
            <h3>基础用法</h3>
            <div class="demo-column">
              <div style="margin-bottom: 10px;">
                基础用法：
                <angle-slider v-model="angle1" />
              </div>
              <div style="margin-bottom: 10px;">
                自定义尺寸：
                <angle-slider v-model="angle2" :size="150" />
              </div>
              <div style="margin-bottom: 10px;">
                步进模式：
                <angle-slider v-model="angle3" :use-step="true" :step="10" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- MultiDonutChart section temporarily disabled due to zrender dependency issue -->
      <!--
      <section class="section">
        <h2>MultiDonutChart</h2>
        <div class="component-demo">
          <div class="demo-group">
            <h3>基础用法</h3>
            <div class="demo-column">
              <MultiDonutChart
                :chartParam="chartParam"
                width="600px"
                height="600px"
                v-if="chartParam"
              />
            </div>
          </div>
        </div>
      </section>
      -->
      <section class="section">
        <h2>SignaturePad</h2>
        <div class="component-demo">
          <div class="demo-group">
            <h3>基础用法</h3>
            <div class="demo-column">
              <div class="signature-pad-demo">
                <p>网格背景：</p>
                <SignaturePad
                  :background="{
                    type: 'grid',
                    color: '#e5e5e5',
                    gridSize: 20,
                    opacity: 0.2
                  }"
                  @save="handleSave"
                />
              </div>
              <div class="signature-pad-demo">
                <p>横线背景：</p>
                <SignaturePad
                  :background="{
                    type: 'line',
                    color: '#e5e5e5',
                    lineHeight: 40,
                    opacity: 0.2
                  }"
                  @save="handleSave"
                />
              </div>
              <div class="signature-pad-demo">
                <p>无背景：</p>
                <SignaturePad
                  :background="{
                    type: 'line',
                    color: '#e5e5e5',
                    lineHeight: 40,
                    opacity: 0
                  }"
                  @save="handleSave"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <h2>Screenshots</h2>
        <div class="component-demo">
          <div class="demo-group">
            <h3>基础用法</h3>
            <div class="demo-column">
              <div class="screenshots-demo">
                <button @click="startScreenshots = true">开启截图</button>
                <img
                  v-if="!startScreenshots && screenshotImage"
                  :src="screenshotImage"
                  alt="截图结果"
                  style="display: block; width: 500px; height: 500px;"
                />
                <Screenshots
                  v-if="startScreenshots"
                  :image="screenshotImage"
                  :width="500"
                  :height="500"
                  @onCancel="handleScreenshotsCancel"
                  @onOk="handleScreenshotsOk"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <h2>NumberRoll</h2>
        <div class="component-demo">
          <div class="demo-group">
            <h3>基础用法</h3>
            <div class="demo-column">
              <p>当前值: {{ numberRollValue }}</p>
              <NumberRoll v-model="numberRollValue" />
            </div>
          </div>
          <div class="demo-group">
            <h3>自定义样式</h3>
            <div class="demo-column">
              <p>大尺寸 - 当前值: {{ numberRollValue2 }}</p>
              <NumberRoll
                v-model="numberRollValue2"
                :width="70"
                :height="80"
                :fontSize="48"
                :transitionDuration="800"
              />
            </div>
          </div>
          <div class="demo-group">
            <h3>控制按钮</h3>
            <div class="demo-row">
              <button @click="numberRollValue++" class="control-button">+1</button>
              <button @click="numberRollValue--" class="control-button">-1</button>
              <button @click="numberRollValue = Math.floor(Math.random() * 1000)" class="control-button">随机</button>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <h2>Marquee</h2>
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
            <div class="marquee-demo-content" style="margin-top: 20px;">
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
            <div class="marquee-demo-content" style="margin-top: 20px;">
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
              <div style="margin-top: 15px;">
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
            <div class="marquee-demo-content" style="margin-top: 20px; padding-top: 20px; border-top: 1px dashed #ddd;">
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
            <div class="marquee-demo-content" style="margin-top: 20px;">
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
            <div class="marquee-demo-content" style="margin-top: 20px;">
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
            <div class="marquee-demo-content" style="margin-top: 20px;">
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
              <div class="controls" style="margin-top: 15px;">
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
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Flow from 'hilbert-vue3-ui/Flow'
import 'hilbert-vue3-ui/Flow/style'

const inputValue = ref('vue & (vue2 | vue3)')

import type { FlowProps } from 'hilbert-vue3-ui'

const flowProps: FlowProps = {
  value: '1&2&(3|(4|5)) & 6 & 7',
  nodeMap: [
    { label: 'Vue', value: '1' },
    { label: 'Vue 2', value: '2', status: false },
    { label: 'Vue 3', value: '3', status: true },
  ],
}

import SkuChoose from 'hilbert-vue3-ui/SkuChoose'
import 'hilbert-vue3-ui/SkuChoose/style'
import type { SkuChooseProps } from 'hilbert-vue3-ui'

const skuChooseProps: SkuChooseProps = {
  specList: [
    { title: '颜色', list: ['白色', '粉色'] },
    { title: '尺寸', list: ['1寸', '2寸'] },
    { title: '体重', list: ['G', 'KG', 'PG'] },
  ],
  specCombinationList: [
    // {id: "1", specs: ["白色", "1寸", "G"]},
    { id: '2', specs: ['白色', '1寸', 'KG'] },
    { id: '3', specs: ['白色', '1寸', 'PG'] },
    { id: '4', specs: ['白色', '2寸', 'G'] },
    // {id: "5", specs: ["白色", "2寸", "KG"]},
    // {id: "6", specs: ["白色", "2寸", "PG"]},
    // {id: "7", specs: ["粉色", "1寸", "G"]},
    { id: '8', specs: ['粉色', '1寸', 'KG'] },
    { id: '9', specs: ['粉色', '1寸', 'PG'] },
    { id: '10', specs: ['粉色', '2寸', 'G'] },
    { id: '11', specs: ['粉色', '2寸', 'KG'] },
    { id: '12', specs: ['粉色', '2寸', 'PG'] },
  ],
}

import PinInput from 'hilbert-vue3-ui/PinInput'
import 'hilbert-vue3-ui/PinInput/style'

const pin1 = ref('')
const pin2 = ref('')
const pin3 = ref('')
function handleComplete(value: string) {
  console.log('输入完成，当前值为：', value)
}

import {Spotlight, useSpotlight} from 'hilbert-vue3-ui/Spotlight'
import type { SpotlightProps } from 'hilbert-vue3-ui'
import 'hilbert-vue3-ui/Spotlight/style'

const spotlightProps: SpotlightProps = {
  actions: [
    {
      id: 'flow',
      title: '与或逻辑图绘制器',
      description: 'flow, 一个通过canvas绘制与或流程图的组件，支持与逻辑，或逻辑，括号逻辑和节点设置',
      onTrigger: () => {
        console.log('go to flow demo')
      }
    },
    {
      id: 'sku-choose',
      title: '商品多规格选择组件',
      description: 'sku-choose, 一个使用加权图实现的商品多规格选择组件',
      onTrigger: () => {
        console.log('go to sku-choose demo')
      }
    },
    {
      id: 'brace-editor',
      title: '代码编辑器',
      description: 'brace-editor, 基于brace的代码编辑器封装',
      onTrigger: () => {
        console.log('go to brace-editor demo')
      }
    },
    {
      id: 'number-roll',
      title: '数字滚动',
      description: 'number-roll, 一个使用css perspective实现的数字滚动可视化组件',
      onTrigger: () => {
        console.log('go to number-roll demo')
      }
    },
    {
      id: 'bulb-switch',
      title: '灯泡开关',
      description: 'bulb-switch, 一个纯css实现的灯泡开关组件，可以应用项目暗黑模式的开关',
      onTrigger: () => {
        console.log('go to bulb-switch demo')
      }
    },
    {
      id: 'multi-donut-chart',
      title: '多层级环图',
      description: 'multi-donut-chart, 基于echarts实现的多层级环图，会根据数据量排序递减环宽度',
      onTrigger: () => {
        console.log('go to multi-donut-chart demo')
      }
    },
    {
      id: 'signature-pad',
      title: '笔锋签字板',
      description: 'signature-pad, 一个基于 Canvas 的手写签名组件，支持鼠标和触摸屏手写签名，具有笔锋效果（根据书写速度变化线条粗细）',
      onTrigger: () => {
        console.log('go to signature-pad demo')
      }
    },
    {
      id: 'spotlight',
      title: '全局搜索',
      description: 'spotlight, 一个基于Fuse.js的全局搜索组件，支持中英文模糊搜索、支持高亮、支持背景毛玻璃',
      onTrigger: () => {
        console.log('go to spotlight demo')
      }
    },
    {
      id: 'pin-input',
      title: 'PIN输入',
      description: 'pin-input, 一个验证码输入组件，支持数字、字母、密码、移动端输入，支持自动聚焦，粘贴，回退等功能',
      onTrigger: () => {
        console.log('go to pin-input demo')
      }
      },
      {
        id: 'angle-slider',
        title: '角度选择器',
        description: 'angle-slider, 一个角度选择器组件，支持点击拖拽设置角度值，支持指标器、环形进度条、刻度线等功能，并能由用户自定义样式',
        onTrigger: () => {
          console.log('go to angle-slider demo')
        }
      },
      {
        id: 'screenshots',
        title: '截图工具',
        description: 'screenshots, 一个界面截图组件，支持web、electron端使用，操作模式参照企业微信截图，支持各类路径的拖拽和编辑，支持放大镜、取色器、马赛克、文字绘制编辑等小组件，且所有操作均可回退，保存后会返回base64图片数据',
        onTrigger: () => {
          console.log('go to screenshots demo')
        }
      }
  ]
}
function openSearch() {
  useSpotlight().open()
}

import {BulbSwitch} from 'hilbert-vue3-ui/BulbSwitch'
import 'hilbert-vue3-ui/BulbSwitch/style'

const light = ref(false)

import {AngleSlider} from 'hilbert-vue3-ui/AngleSlider'
import 'hilbert-vue3-ui/AngleSlider/style'

// import {MultiDonutChart} from 'hilbert-vue3-ui/MultiDonutChart'

import {SignaturePad} from 'hilbert-vue3-ui/SignaturePad'
import 'hilbert-vue3-ui/SignaturePad/style'

const angle1 = ref(0)
const angle2 = ref(0)
const angle3 = ref(0)

import {Screenshots} from 'hilbert-vue3-ui/Screenshots'
import 'hilbert-vue3-ui/Screenshots/style'

const startScreenshots = ref(false)
const screenshotImage = ref('/screenshot.png')

function handleScreenshotsCancel() {
  startScreenshots.value = false
  console.log('Screenshots::CANCEL')
}

function handleScreenshotsOk({ viewer, dataURL }: { viewer: any; dataURL: string }) {
  startScreenshots.value = false
  console.log('Screenshots::OK', dataURL, viewer)
}

// MultiDonutChart related data (commented out due to zrender dependency issue)
/*
const chartParam = ref<{
  data: Array<{
    name: string;
    color: string;
    tips: string;
    value: number;
  }>;
} | null>(null);

setTimeout(() => {
  chartParam.value = {
    data: [
      {
        name: '高消费会员',
        color: '#0055FE',
        tips: '单均金额>25.8/单',
        value: 300,
      },
      {
        name: '中高消费会员',
        color: '#88DDFF',
        tips: '21.5元/单<单均金额<25.8元/单',
        value: 200,
      },
      {
        name: '中消费会员',
        color: '#FF749D',
        tips: '17.2元/单<单均金额<21.5元/单',
        value: 100,
      },
      {
        name: '低消费会员',
        color: '#FCDD69',
        tips: '单均金额<17.2元/单',
        value: 50,
      },
    ]
  };
}, 100);
*/

function handleSave(dataUrl: string) {
  console.log('签名图片数据:', dataUrl)
  // 这里可以处理签名图片数据
}

import { NumberRoll } from 'hilbert-vue3-ui/NumberRoll'
import 'hilbert-vue3-ui/NumberRoll/style'

import Marquee from 'hilbert-vue3-ui/Marquee'
import 'hilbert-vue3-ui/Marquee/style'

const numberRollValue = ref(0)
const numberRollValue2 = ref(123)

// Marquee demo state
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
#app {
  font-family: var(--ui-font-family);
  color: var(--ui-color-gray-900);
  line-height: 1.6;
}

.header {
  text-align: center;
  padding: var(--ui-space-12) 0;
  background: linear-gradient(135deg, var(--ui-color-primary) 0%, #40a9ff 100%);
  color: white;
  margin-bottom: var(--ui-space-8);
}

.header h1 {
  margin: 0 0 var(--ui-space-2) 0;
  font-size: var(--ui-font-size-2xl);
  font-weight: 600;
}

.header p {
  margin: 0;
  font-size: var(--ui-font-size-lg);
  opacity: 0.9;
}

.main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--ui-space-4);
}

.section {
  margin-bottom: var(--ui-space-12);
}

.section h2 {
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

.demo-row {
  display: flex;
  gap: var(--ui-space-4);
  flex-wrap: wrap;
  align-items: center;
}

.demo-column {
  display: flex;
  flex-direction: column;
  gap: var(--ui-space-4);
  max-width: 400px;
}

.demo-column p {
  margin: 0;
  color: var(--ui-color-gray-600);
  font-size: var(--ui-font-size-sm);
}
.BulbSwitchWrapper {
    width: 500px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #514878;
}

.signature-pad-demo {
    position: relative;
    width: 100%;
    height: 280px;
    margin-bottom: 20px;
}

.signature-pad-demo p {
    margin: 0 0 10px 0;
    color: var(--ui-color-gray-700);
    font-size: var(--ui-font-size-sm);
}

.screenshots-demo {
    position: relative;
    width: 100%;
    min-height: 500px;
}

.screenshots-demo button {
    padding: 8px 16px;
    background: var(--ui-color-primary);
    color: white;
    border: none;
    border-radius: var(--ui-border-radius-md);
    cursor: pointer;
    font-size: var(--ui-font-size-base);
    margin-bottom: 16px;
}

.screenshots-demo button:hover {
    opacity: 0.9;
}

.control-button {
  padding: 10px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: var(--ui-font-size-base);
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
}

.control-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
}

.marquee-demo {
  position: relative;
  width: 100%;
  height: 60px;
  background: white;
  border: 2px solid #e8e8e8;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
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
