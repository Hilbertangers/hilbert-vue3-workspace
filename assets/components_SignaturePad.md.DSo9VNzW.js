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
`,G=JSON.parse('{"title":"SignaturePad 笔锋签字板","description":"","frontmatter":{},"headers":[],"relativePath":"components/SignaturePad.md","filePath":"components/SignaturePad.md"}'),w={name:"components/SignaturePad.md"},T=Object.assign(w,{setup(D){const o=h();p(async()=>{o.value=(await b(async()=>{const{default:l}=await import("./chunks/nobg.CxHngrqz.js");return{default:l}},__vite__mapDeps([0,1,2]))).default});const s=h();p(async()=>{s.value=(await b(async()=>{const{default:l}=await import("./chunks/line.DNtr6ZVN.js");return{default:l}},__vite__mapDeps([3,1,2]))).default});const d=V(!0),c=h();return p(async()=>{c.value=(await b(async()=>{const{default:l}=await import("./chunks/grid.ClvEYoUl.js");return{default:l}},__vite__mapDeps([4,1,2]))).default}),(l,t)=>{const u=_("ClientOnly");return Z(),k("div",null,[t[3]||(t[3]=n("h1",{id:"signaturepad-笔锋签字板",tabindex:"-1"},[n("code",null,"SignaturePad"),i(" 笔锋签字板 "),n("a",{class:"header-anchor",href:"#signaturepad-笔锋签字板","aria-label":'Permalink to "`SignaturePad` 笔锋签字板"'},"​")],-1)),t[4]||(t[4]=n("p",null,"SignaturePad, 一个基于 Canvas 的手写签名组件，支持鼠标和触摸屏手写签名，具有笔锋效果（根据书写速度变化线条粗细）。",-1)),t[5]||(t[5]=n("h2",{id:"基础用法",tabindex:"-1"},[i("基础用法 "),n("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),m(e(a(f),null,null,512),[[v,d.value]]),e(u,null,{default:r(()=>[e(a(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[0]||(t[0]=()=>{d.value=!1}),vueCode:a(S)},g({_:2},[c.value?{name:"vue",fn:r(()=>[e(a(c))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[6]||(t[6]=n("h2",{id:"横线背景",tabindex:"-1"},[i("横线背景 "),n("a",{class:"header-anchor",href:"#横线背景","aria-label":'Permalink to "横线背景"'},"​")],-1)),m(e(a(f),null,null,512),[[v,d.value]]),e(u,null,{default:r(()=>[e(a(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[1]||(t[1]=()=>{d.value=!1}),vueCode:a(C)},g({_:2},[s.value?{name:"vue",fn:r(()=>[e(a(s))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[7]||(t[7]=n("h2",{id:"无背景",tabindex:"-1"},[i("无背景 "),n("a",{class:"header-anchor",href:"#无背景","aria-label":'Permalink to "无背景"'},"​")],-1)),m(e(a(f),null,null,512),[[v,d.value]]),e(u,null,{default:r(()=>[e(a(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[2]||(t[2]=()=>{d.value=!1}),vueCode:a(B)},g({_:2},[o.value?{name:"vue",fn:r(()=>[e(a(o))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[8]||(t[8]=P('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>background</td><td>背景配置</td><td><code>BackgroundConfig</code></td><td><code>{ type: &#39;line&#39;, color: &#39;#e5e5e5&#39;, lineHeight: 40, gridSize: 40, opacity: 0.2 }</code></td></tr></tbody></table><h4 id="backgroundconfig" tabindex="-1">BackgroundConfig <a class="header-anchor" href="#backgroundconfig" aria-label="Permalink to &quot;BackgroundConfig&quot;">​</a></h4><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>背景类型</td><td><code>&#39;line&#39; | &#39;grid&#39; | &#39;image&#39;</code></td><td><code>&#39;line&#39;</code></td></tr><tr><td>color</td><td>背景颜色</td><td><code>string</code></td><td><code>&#39;#e5e5e5&#39;</code></td></tr><tr><td>lineHeight</td><td>横线间距（line类型时）</td><td><code>number</code></td><td><code>40</code></td></tr><tr><td>gridSize</td><td>网格大小（grid类型时）</td><td><code>number</code></td><td><code>40</code></td></tr><tr><td>imageSrc</td><td>图片地址（image类型时）</td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>opacity</td><td>背景透明度</td><td><code>number</code></td><td><code>0.2</code></td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>save</td><td>保存时触发</td><td><code>(dataUrl: string)</code></td></tr></tbody></table><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h3><table tabindex="0"><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>clear</td><td>清除画布</td><td>-</td></tr><tr><td>save</td><td>保存签名</td><td>-</td></tr></tbody></table>',9))])}}});export{G as __pageData,T as default};
