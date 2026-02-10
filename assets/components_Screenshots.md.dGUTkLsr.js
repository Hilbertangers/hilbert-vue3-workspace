const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/basic.DbzEIvxT.js","assets/chunks/framework.j6AdDFXK.js"])))=>i.map(i=>d[i]);
import{p as h,D as c,v as b,ae as u,C as m,c as p,o as f,j as e,af as v,G as d,ag as g,a as s,ah as _,k as a,w as l,ai as k}from"./chunks/framework.j6AdDFXK.js";import{L as y,N as x}from"./chunks/index.Cjvz-lhF.js";const w=`<script setup lang="ts">
import { ref } from 'vue'
import Screenshots from 'hilbert-vue3-ui/Screenshots'
import 'hilbert-vue3-ui/Screenshots/style'

const affix = process.env.NODE_ENV === 'production' ? '/hilbert-vue3-workspace/' : '/'

const start = ref(false)
const image = ref(affix + 'screenshot.png')

function onCancel() {
  start.value = false
  console.log('Screenshots::CANCEL')
}

function onOk({ viewer, dataURL }: { viewer: any; dataURL: string }) {
  start.value = false
  console.log('Screenshots::OK', dataURL, viewer)
}
<\/script>

<template>
  <div style="position: relative; width: 100%; min-height: 500px;">
    <button @click="start = true" style="padding: 8px 16px; background: #39f; color: white; border: none; border-radius: 4px; cursor: pointer; margin-bottom: 16px;">
      开启截图
    </button>
    <img
      v-if="!start"
      :src="image"
      style="display: block; width: 500px; height: 500px;"
    />
    <Screenshots
      v-if="start"
      :image="image"
      :width="500"
      :height="500"
      @onCancel="onCancel"
      @onOk="onOk"
    />
  </div>
</template>
`,N=JSON.parse('{"title":"Screenshots 截图组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/Screenshots.md","filePath":"components/Screenshots.md"}'),V={name:"components/Screenshots.md"},L=Object.assign(V,{setup(C){const o=h(!0),r=c();return b(async()=>{r.value=(await u(async()=>{const{default:n}=await import("./chunks/basic.DbzEIvxT.js");return{default:n}},__vite__mapDeps([0,1]))).default}),(n,t)=>{const i=m("ClientOnly");return f(),p("div",null,[t[1]||(t[1]=e("h1",{id:"screenshots-截图组件",tabindex:"-1"},[e("code",null,"Screenshots"),s(" 截图组件 "),e("a",{class:"header-anchor",href:"#screenshots-截图组件","aria-label":'Permalink to "`Screenshots` 截图组件"'},"​")],-1)),t[2]||(t[2]=e("p",null,"Screenshots, 一个界面截图组件，支持 Web、Electron 端使用，操作模式参照企业微信截图，支持各类路径的拖拽和编辑，支持放大镜、取色器、马赛克、文字绘制编辑等小组件，且所有操作均可回退，保存后会返回 base64 图片数据。",-1)),t[3]||(t[3]=e("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),v(d(a(y),null,null,512),[[_,o.value]]),d(i,null,{default:l(()=>[d(a(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[0]||(t[0]=()=>{o.value=!1}),vueCode:a(w)},k({_:2},[r.value?{name:"vue",fn:l(()=>[d(a(r))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=g('<h2 id="功能特性" tabindex="-1">功能特性 <a class="header-anchor" href="#功能特性" aria-label="Permalink to &quot;功能特性&quot;">​</a></h2><ul><li><strong>截图选择</strong>：鼠标拖拽选择截图区域</li><li><strong>绘制工具</strong>：支持矩形、椭圆、箭头、画笔、马赛克、文字等绘制工具</li><li><strong>编辑功能</strong>：支持对已绘制的图形进行编辑和调整</li><li><strong>撤销操作</strong>：所有操作均可回退</li><li><strong>放大镜</strong>：截图区域选择时显示放大镜辅助</li><li><strong>取色器</strong>：实时显示鼠标位置的颜色信息</li><li><strong>多种导出</strong>：支持导出为 base64 图片数据</li></ul><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>image</td><td>图片地址</td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>width</td><td>容器宽度</td><td><code>number | string</code></td><td><code>0</code></td></tr><tr><td>height</td><td>容器高度</td><td><code>number | string</code></td><td><code>0</code></td></tr><tr><td>className</td><td>容器类名</td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>onOk</td><td>确定截图时触发</td><td><code>(data: { viewer: any; dataURL: string })</code></td></tr><tr><td>onCancel</td><td>取消截图时触发</td><td>-</td></tr></tbody></table><h4 id="onok-回调参数" tabindex="-1">onOk 回调参数 <a class="header-anchor" href="#onok-回调参数" aria-label="Permalink to &quot;onOk 回调参数&quot;">​</a></h4><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>viewer</td><td>截图区域信息</td><td><code>object</code></td></tr><tr><td>dataURL</td><td>截图 base64 数据</td><td><code>string</code></td></tr></tbody></table><h4 id="viewer-对象结构" tabindex="-1">viewer 对象结构 <a class="header-anchor" href="#viewer-对象结构" aria-label="Permalink to &quot;viewer 对象结构&quot;">​</a></h4><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>x1</td><td>左上角 x</td><td><code>number</code></td></tr><tr><td>y1</td><td>左上角 y</td><td><code>number</code></td></tr><tr><td>x2</td><td>右下角 x</td><td><code>number</code></td></tr><tr><td>y2</td><td>右下角 y</td><td><code>number</code></td></tr></tbody></table><h3 id="绘制工具" tabindex="-1">绘制工具 <a class="header-anchor" href="#绘制工具" aria-label="Permalink to &quot;绘制工具&quot;">​</a></h3><table tabindex="0"><thead><tr><th>工具</th><th>图标</th><th>说明</th></tr></thead><tbody><tr><td>矩形</td><td>□</td><td>绘制矩形</td></tr><tr><td>椭圆</td><td>○</td><td>绘制椭圆</td></tr><tr><td>箭头</td><td>→</td><td>绘制箭头</td></tr><tr><td>画笔</td><td>✏️</td><td>自由绘制</td></tr><tr><td>马赛克</td><td>▧</td><td>马赛克效果</td></tr><tr><td>文字</td><td>T</td><td>添加文字标注</td></tr><tr><td>撤销</td><td>↩️</td><td>撤销上一步操作</td></tr><tr><td>取消</td><td>✕</td><td>取消截图</td></tr><tr><td>确定</td><td>✓</td><td>完成截图</td></tr></tbody></table>',13))])}}});export{N as __pageData,L as default};
