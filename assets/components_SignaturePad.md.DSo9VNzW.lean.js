const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/nobg.CxHngrqz.js","assets/chunks/index.BNo9cW9c.js","assets/chunks/framework.j6AdDFXK.js","assets/chunks/line.DNtr6ZVN.js","assets/chunks/grid.ClvEYoUl.js"])))=>i.map(i=>d[i]);
import{D as h,v as p,ae as b,p as V,C as _,c as k,o as Z,j as n,af as m,G as e,ag as P,a as i,ah as v,k as a,w as r,ai as g}from"./chunks/framework.j6AdDFXK.js";import{L as f,N as y}from"./chunks/index.Cjvz-lhF.js";const B=`<template>
  <div class="signature-pad-demo">
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
</template>

<script setup lang="ts">
import SignaturePad from 'hilbert-vue3-ui/SignaturePad'
import 'hilbert-vue3-ui/SignaturePad/style'

function handleSave(dataUrl: string) {
  console.log('签名图片数据:', dataUrl)
  // 这里可以处理签名图片数据
}
<\/script>

<style scoped>
.signature-pad-demo {
  position: relative;
  width: 100%;
  height: 280px;
}
</style>
`,C=`<template>
  <div class="signature-pad-demo">
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
</template>

<script setup lang="ts">
import SignaturePad from 'hilbert-vue3-ui/SignaturePad'
import 'hilbert-vue3-ui/SignaturePad/style'

function handleSave(dataUrl: string) {
  console.log('签名图片数据:', dataUrl)
  // 这里可以处理签名图片数据
}
<\/script>

<style scoped>
.signature-pad-demo {
  position: relative;
  width: 100%;
  height: 280px;
}
</style>
`,S=`<template>
  <div class="signature-pad-demo">
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
</template>

<script setup lang="ts">
import SignaturePad from 'hilbert-vue3-ui/SignaturePad'
import 'hilbert-vue3-ui/SignaturePad/style'

function handleSave(dataUrl: string) {
  console.log('签名图片数据:', dataUrl)
  // 这里可以处理签名图片数据
}
<\/script>

<style scoped>
.signature-pad-demo {
  position: relative;
  width: 100%;
  height: 280px;
}
</style>
`,G=JSON.parse('{"title":"SignaturePad 笔锋签字板","description":"","frontmatter":{},"headers":[],"relativePath":"components/SignaturePad.md","filePath":"components/SignaturePad.md"}'),w={name:"components/SignaturePad.md"},T=Object.assign(w,{setup(D){const o=h();p(async()=>{o.value=(await b(async()=>{const{default:l}=await import("./chunks/nobg.CxHngrqz.js");return{default:l}},__vite__mapDeps([0,1,2]))).default});const s=h();p(async()=>{s.value=(await b(async()=>{const{default:l}=await import("./chunks/line.DNtr6ZVN.js");return{default:l}},__vite__mapDeps([3,1,2]))).default});const d=V(!0),c=h();return p(async()=>{c.value=(await b(async()=>{const{default:l}=await import("./chunks/grid.ClvEYoUl.js");return{default:l}},__vite__mapDeps([4,1,2]))).default}),(l,t)=>{const u=_("ClientOnly");return Z(),k("div",null,[t[3]||(t[3]=n("h1",{id:"signaturepad-笔锋签字板",tabindex:"-1"},[n("code",null,"SignaturePad"),i(" 笔锋签字板 "),n("a",{class:"header-anchor",href:"#signaturepad-笔锋签字板","aria-label":'Permalink to "`SignaturePad` 笔锋签字板"'},"​")],-1)),t[4]||(t[4]=n("p",null,"SignaturePad, 一个基于 Canvas 的手写签名组件，支持鼠标和触摸屏手写签名，具有笔锋效果（根据书写速度变化线条粗细）。",-1)),t[5]||(t[5]=n("h2",{id:"基础用法",tabindex:"-1"},[i("基础用法 "),n("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),m(e(a(f),null,null,512),[[v,d.value]]),e(u,null,{default:r(()=>[e(a(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[0]||(t[0]=()=>{d.value=!1}),vueCode:a(S)},g({_:2},[c.value?{name:"vue",fn:r(()=>[e(a(c))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[6]||(t[6]=n("h2",{id:"横线背景",tabindex:"-1"},[i("横线背景 "),n("a",{class:"header-anchor",href:"#横线背景","aria-label":'Permalink to "横线背景"'},"​")],-1)),m(e(a(f),null,null,512),[[v,d.value]]),e(u,null,{default:r(()=>[e(a(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[1]||(t[1]=()=>{d.value=!1}),vueCode:a(C)},g({_:2},[s.value?{name:"vue",fn:r(()=>[e(a(s))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[7]||(t[7]=n("h2",{id:"无背景",tabindex:"-1"},[i("无背景 "),n("a",{class:"header-anchor",href:"#无背景","aria-label":'Permalink to "无背景"'},"​")],-1)),m(e(a(f),null,null,512),[[v,d.value]]),e(u,null,{default:r(()=>[e(a(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[2]||(t[2]=()=>{d.value=!1}),vueCode:a(B)},g({_:2},[o.value?{name:"vue",fn:r(()=>[e(a(o))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[8]||(t[8]=P("",9))])}}});export{G as __pageData,T as default};
