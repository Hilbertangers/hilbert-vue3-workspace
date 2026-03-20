const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/custom.Df6ReDLM.js","assets/chunks/index.BnnDoOou.js","assets/chunks/framework.j6AdDFXK.js","assets/chunks/basic.CTUDkBH0.js"])))=>i.map(i=>d[i]);
import{D as c,v as m,ae as b,p as _,C as g,c as x,o as k,j as e,af as p,G as d,ag as V,a as s,ah as h,k as l,w as o,ai as v}from"./chunks/framework.j6AdDFXK.js";import{L as f,N as y}from"./chunks/index.Cjvz-lhF.js";const w=`<template>
  <div style="display: flex; flex-direction: column; gap: 30px; align-items: center;">
    <div>
      <h3>大尺寸</h3>
      <div style="margin-top: 10px;">
        <NumberRoll
          v-model="value1"
          :width="70"
          :height="80"
          :fontSize="48"
          :transitionDuration="800"
        />
      </div>
    </div>
    <div>
      <h3>自定义颜色</h3>
      <div style="margin-top: 10px;">
        <NumberRoll
          v-model="value2"
          backgroundColor="#2d3748"
          textColor="#ffffff"
          borderColor="#4a5568"
          :useGradient="false"
        />
      </div>
    </div>
    <div style="display: flex; gap: 10px;">
      <button @click="randomize" style="padding: 8px 16px; cursor: pointer;">随机数字</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NumberRoll from 'hilbert-vue3-ui/NumberRoll'
import 'hilbert-vue3-ui/NumberRoll/style'

const value1 = ref(456)
const value2 = ref(789)

function randomize() {
  value1.value = Math.floor(Math.random() * 1000)
  value2.value = Math.floor(Math.random() * 1000)
}
<\/script>
`,C=`<template>
  <div style="display: flex; flex-direction: column; gap: 20px; align-items: center;">
    <div style="display: flex; align-items: center; gap: 10px;">
      <NumberRoll v-model="value" />
    </div>
    <div style="display: flex; gap: 10px;">
      <button @click="value--" style="padding: 8px 16px; cursor: pointer;">-1</button>
      <button @click="value++" style="padding: 8px 16px; cursor: pointer;">+1</button>
      <button @click="value = Math.floor(Math.random() * 1000)" style="padding: 8px 16px; cursor: pointer;">随机</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NumberRoll from 'hilbert-vue3-ui/NumberRoll'
import 'hilbert-vue3-ui/NumberRoll/style'

const value = ref(123)
<\/script>
`,M=JSON.parse('{"title":"NumberRoll 数字滚动","description":"","frontmatter":{},"headers":[],"relativePath":"components/NumberRoll.md","filePath":"components/NumberRoll.md"}'),N={name:"components/NumberRoll.md"},B=Object.assign(N,{setup(R){const r=c();m(async()=>{r.value=(await b(async()=>{const{default:n}=await import("./chunks/custom.Df6ReDLM.js");return{default:n}},__vite__mapDeps([0,1,2]))).default});const a=_(!0),i=c();return m(async()=>{i.value=(await b(async()=>{const{default:n}=await import("./chunks/basic.CTUDkBH0.js");return{default:n}},__vite__mapDeps([3,1,2]))).default}),(n,t)=>{const u=g("ClientOnly");return k(),x("div",null,[t[2]||(t[2]=e("h1",{id:"numberroll-数字滚动",tabindex:"-1"},[e("code",null,"NumberRoll"),s(" 数字滚动 "),e("a",{class:"header-anchor",href:"#numberroll-数字滚动","aria-label":'Permalink to "`NumberRoll` 数字滚动"'},"​")],-1)),t[3]||(t[3]=e("p",null,"NumberRoll, 一个使用 CSS 3D perspective 实现的数字滚动可视化组件，支持平滑的数字切换动画效果",-1)),t[4]||(t[4]=e("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),p(d(l(f),null,null,512),[[h,a.value]]),d(u,null,{default:o(()=>[d(l(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:l(C)},v({_:2},[i.value?{name:"vue",fn:o(()=>[d(l(i))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[5]||(t[5]=e("h2",{id:"自定义样式",tabindex:"-1"},[s("自定义样式 "),e("a",{class:"header-anchor",href:"#自定义样式","aria-label":'Permalink to "自定义样式"'},"​")],-1)),p(d(l(f),null,null,512),[[h,a.value]]),d(u,null,{default:o(()=>[d(l(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[1]||(t[1]=()=>{a.value=!1}),vueCode:l(w)},v({_:2},[r.value?{name:"vue",fn:o(()=>[d(l(r))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[6]||(t[6]=V('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>当前显示的数字</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>width</td><td>单个数字位的宽度</td><td>`number</td><td>string`</td></tr><tr><td>height</td><td>单个数字位的高度</td><td>`number</td><td>string`</td></tr><tr><td>fontSize</td><td>字体大小</td><td>`number</td><td>string`</td></tr><tr><td>textColor</td><td>文字颜色</td><td><code>string</code></td><td><code>#ffffff</code></td></tr><tr><td>backgroundColor</td><td>背景颜色</td><td><code>string</code></td><td><code>#1a1a2e</code></td></tr><tr><td>borderColor</td><td>边框颜色</td><td><code>string</code></td><td><code>#4a4a6a</code></td></tr><tr><td>showBorder</td><td>是否显示边框</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>transitionDuration</td><td>动画持续时间（毫秒）</td><td><code>number</code></td><td><code>600</code></td></tr><tr><td>fontFamily</td><td>字体</td><td><code>string</code></td><td><code>&#39;Arial, sans-serif&#39;</code></td></tr><tr><td>useGradient</td><td>是否使用渐变背景</td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:modelValue</td><td>值改变时触发</td><td><code>number</code></td></tr></tbody></table>',5))])}}});export{M as __pageData,B as default};
