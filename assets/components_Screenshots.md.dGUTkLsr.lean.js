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
`,N=JSON.parse('{"title":"Screenshots 截图组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/Screenshots.md","filePath":"components/Screenshots.md"}'),V={name:"components/Screenshots.md"},L=Object.assign(V,{setup(C){const o=h(!0),r=c();return b(async()=>{r.value=(await u(async()=>{const{default:n}=await import("./chunks/basic.DbzEIvxT.js");return{default:n}},__vite__mapDeps([0,1]))).default}),(n,t)=>{const i=m("ClientOnly");return f(),p("div",null,[t[1]||(t[1]=e("h1",{id:"screenshots-截图组件",tabindex:"-1"},[e("code",null,"Screenshots"),s(" 截图组件 "),e("a",{class:"header-anchor",href:"#screenshots-截图组件","aria-label":'Permalink to "`Screenshots` 截图组件"'},"​")],-1)),t[2]||(t[2]=e("p",null,"Screenshots, 一个界面截图组件，支持 Web、Electron 端使用，操作模式参照企业微信截图，支持各类路径的拖拽和编辑，支持放大镜、取色器、马赛克、文字绘制编辑等小组件，且所有操作均可回退，保存后会返回 base64 图片数据。",-1)),t[3]||(t[3]=e("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),v(d(a(y),null,null,512),[[_,o.value]]),d(i,null,{default:l(()=>[d(a(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[0]||(t[0]=()=>{o.value=!1}),vueCode:a(w)},k({_:2},[r.value?{name:"vue",fn:l(()=>[d(a(r))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=g("",13))])}}});export{N as __pageData,L as default};
