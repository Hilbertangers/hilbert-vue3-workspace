const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/step.D6Frcr7f.js","assets/chunks/index.Cf3Bb3JD.js","assets/chunks/framework.BnfD-2QM.js","assets/chunks/custom.DNje6Ty8.js","assets/chunks/base.U_0I46e7.js"])))=>i.map(i=>d[i]);
import{D as m,v as p,ae as h,p as _,C as A,c as x,o as V,j as l,af as v,G as t,ag as Z,a as r,ah as f,k as n,w as o,ai as b}from"./chunks/framework.BnfD-2QM.js";import{L as g,N as y}from"./chunks/index.3JkuxlVZ.js";const k=`<template>
  <div class="demo-container">
    <div class="demo-item">
      <h4>步进模式（5度）</h4>
      <AngleSlider v-model="angle1" :use-step="true" :step="5" />
      <p>当前角度: {{ angle1 }}°</p>
    </div>
    <div class="demo-item">
      <h4>步进模式（10度）</h4>
      <AngleSlider v-model="angle2" :use-step="true" :step="10" />
      <p>当前角度: {{ angle2 }}°</p>
    </div>
    <div class="demo-item">
      <h4>步进模式（15度）</h4>
      <AngleSlider v-model="angle3" :use-step="true" :step="15" />
      <p>当前角度: {{ angle3 }}°</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AngleSlider from 'hilbert-vue3-ui/AngleSlider'
import 'hilbert-vue3-ui/AngleSlider/style'

const angle1 = ref(0)
const angle2 = ref(0)
const angle3 = ref(0)
<\/script>

<style scoped>
.demo-container {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
}

.demo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.demo-item h4 {
  margin: 0;
  color: #333;
}

.demo-item p {
  margin: 0;
  color: #666;
}
</style>
`,w=`<template>
  <div class="demo-container">
    <div class="demo-item">
      <h4>自定义尺寸</h4>
      <AngleSlider v-model="angle1" :size="150" />
      <p>当前角度: {{ angle1 }}°</p>
    </div>
    <div class="demo-item">
      <h4>自定义颜色</h4>
      <AngleSlider v-model="angle2" progressColor="#e74c3c" endMarkColor="#e74c3c" />
      <p>当前角度: {{ angle2 }}°</p>
    </div>
    <div class="demo-item">
      <h4>隐藏进度条</h4>
      <AngleSlider v-model="angle3" :show-progress="false" />
      <p>当前角度: {{ angle3 }}°</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AngleSlider from 'hilbert-vue3-ui/AngleSlider'
import 'hilbert-vue3-ui/AngleSlider/style'

const angle1 = ref(0)
const angle2 = ref(0)
const angle3 = ref(0)
<\/script>

<style scoped>
.demo-container {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
}

.demo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.demo-item h4 {
  margin: 0;
  color: #333;
}

.demo-item p {
  margin: 0;
  color: #666;
}
</style>
`,C=`<template>
  <div class="demo-container">
    <div class="demo-item">
      <h4>基础用法</h4>
      <AngleSlider v-model="angle1" />
      <p>当前角度: {{ angle1 }}°</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AngleSlider from 'hilbert-vue3-ui/AngleSlider'
import 'hilbert-vue3-ui/AngleSlider/style'

const angle1 = ref(0)
<\/script>

<style scoped>
.demo-container {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
}

.demo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.demo-item h4 {
  margin: 0;
  color: #333;
}

.demo-item p {
  margin: 0;
  color: #666;
}
</style>
`,W=JSON.parse('{"title":"AngleSlider 角度选择器","description":"","frontmatter":{},"headers":[],"relativePath":"components/AngleSlider.md","filePath":"components/AngleSlider.md"}'),S={name:"components/AngleSlider.md"},X=Object.assign(S,{setup(G){const i=m();p(async()=>{i.value=(await h(async()=>{const{default:a}=await import("./chunks/step.D6Frcr7f.js");return{default:a}},__vite__mapDeps([0,1,2]))).default});const s=m();p(async()=>{s.value=(await h(async()=>{const{default:a}=await import("./chunks/custom.DNje6Ty8.js");return{default:a}},__vite__mapDeps([3,1,2]))).default});const d=_(!0),c=m();return p(async()=>{c.value=(await h(async()=>{const{default:a}=await import("./chunks/base.U_0I46e7.js");return{default:a}},__vite__mapDeps([4,1,2]))).default}),(a,e)=>{const u=A("ClientOnly");return V(),x("div",null,[e[3]||(e[3]=l("h1",{id:"angleslider-角度选择器",tabindex:"-1"},[l("code",null,"AngleSlider"),r(" 角度选择器 "),l("a",{class:"header-anchor",href:"#angleslider-角度选择器","aria-label":'Permalink to "`AngleSlider` 角度选择器"'},"​")],-1)),e[4]||(e[4]=l("p",null,"AngleSlider, 一个角度选择器组件，支持点击拖拽设置角度值，支持指标器、环形进度条、刻度线等功能，并能由用户自定义样式。",-1)),e[5]||(e[5]=l("h2",{id:"基础用法",tabindex:"-1"},[r("基础用法 "),l("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),v(t(n(g),null,null,512),[[f,d.value]]),t(u,null,{default:o(()=>[t(n(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[0]||(e[0]=()=>{d.value=!1}),vueCode:n(C)},b({_:2},[c.value?{name:"vue",fn:o(()=>[t(n(c))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[6]||(e[6]=l("h2",{id:"自定义样式",tabindex:"-1"},[r("自定义样式 "),l("a",{class:"header-anchor",href:"#自定义样式","aria-label":'Permalink to "自定义样式"'},"​")],-1)),v(t(n(g),null,null,512),[[f,d.value]]),t(u,null,{default:o(()=>[t(n(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[1]||(e[1]=()=>{d.value=!1}),vueCode:n(w)},b({_:2},[s.value?{name:"vue",fn:o(()=>[t(n(s))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[7]||(e[7]=l("h2",{id:"步进模式",tabindex:"-1"},[r("步进模式 "),l("a",{class:"header-anchor",href:"#步进模式","aria-label":'Permalink to "步进模式"'},"​")],-1)),v(t(n(g),null,null,512),[[f,d.value]]),t(u,null,{default:o(()=>[t(n(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[2]||(e[2]=()=>{d.value=!1}),vueCode:n(k)},b({_:2},[i.value?{name:"vue",fn:o(()=>[t(n(i))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[8]||(e[8]=Z("",5))])}}});export{W as __pageData,X as default};
