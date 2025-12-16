const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/custom.DWwlrk1S.js","assets/chunks/index.DGrylQkd.js","assets/chunks/framework.ba8B019S.js","assets/chunks/nodeMap.ByD2-pb0.js","assets/chunks/base.sVVblmyj.js"])))=>i.map(i=>d[i]);
import{D as h,v as b,ae as v,p as _,C as y,c as V,o as Z,j as l,af as p,G as e,ag as k,a as d,ah as m,k as a,w as r,ai as f}from"./chunks/framework.ba8B019S.js";import{L as w,N as F}from"./chunks/index.xZojqZfn.js";const D=`<template>
  <Flow v-bind="flowProps" />
</template>

<script setup lang="ts">
import Flow from 'hilbert-vue3-ui/Flow'
import 'hilbert-vue3-ui/Flow/style'

import type { FlowProps } from 'hilbert-vue3-ui'

const flowProps: FlowProps = {
  value: '1&2&(3|(4|5)) & 6 & 7',
  nodeMap: [
    { value: '1', label: '进入收银台', status: true },
    { value: '2', label: '输入金额', status: false },
    { value: '3', label: '不验券' },
    { value: '4', label: '验美团券' },
    { value: '5', label: '验抖音券' },
    { value: '6', label: '支付剩余金额' },
    { value: '7', label: '订单完成', status: true },
  ],
  orWidthRate: 0.4,
  orHeightRate: 0.5,
  orHybridRate: 0.3,
  nodeStyle: {
    height: 30,
    fontSize: 12,
    padding: 6,
    branchPaddingMin: 10, // or上下各分支间node的距离
    marginMin: 0, // node与node，node与or间的最小距离
    color: {
      success: { fill: '#0DBDA4', font: '#FFFFFF' },   // 品牌青
      fail:    { fill: '#FF6F6F', font: '#FFFFFF' },   // 轻盈珊瑚
      default: { fill: '#EAECEF', font: '#4A4E59' },   // 中性灰
    },
  }
}

<\/script>
`,A=`<template>
  <Flow v-bind="flowProps" />
</template>

<script setup lang="ts">
import Flow from 'hilbert-vue3-ui/Flow'
import 'hilbert-vue3-ui/Flow/style'

import type { FlowProps } from 'hilbert-vue3-ui'

const flowProps: FlowProps = {
  value: '1&2|3',
  nodeMap: [
    { value: '1', label: '校验1', status: true },
    { value: '2', label: '校验2', status: false },
    { value: '3', label: '不校验' },
  ],
}

<\/script>
`,B=`<template>
  <Flow :value="inputValue" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Flow from 'hilbert-vue3-ui/Flow'
import 'hilbert-vue3-ui/Flow/style'
const inputValue = ref('vue & (vue2 | vue3)')
<\/script>
`,W=JSON.parse('{"title":"Flow 与或逻辑图绘制器","description":"","frontmatter":{},"headers":[],"relativePath":"components/Flow.md","filePath":"components/Flow.md"}'),C={name:"components/Flow.md"},g=Object.assign(C,{setup(P){const s=h();b(async()=>{s.value=(await v(async()=>{const{default:o}=await import("./chunks/custom.DWwlrk1S.js");return{default:o}},__vite__mapDeps([0,1,2]))).default});const i=h();b(async()=>{i.value=(await v(async()=>{const{default:o}=await import("./chunks/nodeMap.ByD2-pb0.js");return{default:o}},__vite__mapDeps([3,1,2]))).default});const n=_(!0),u=h();return b(async()=>{u.value=(await v(async()=>{const{default:o}=await import("./chunks/base.sVVblmyj.js");return{default:o}},__vite__mapDeps([4,1,2]))).default}),(o,t)=>{const c=y("ClientOnly");return Z(),V("div",null,[t[3]||(t[3]=l("h1",{id:"flow-与或逻辑图绘制器",tabindex:"-1"},[l("code",null,"Flow"),d(" 与或逻辑图绘制器 "),l("a",{class:"header-anchor",href:"#flow-与或逻辑图绘制器","aria-label":'Permalink to "`Flow` 与或逻辑图绘制器"'},"​")],-1)),t[4]||(t[4]=l("p",null,[d("flow, 一个通过 canvas 绘制与或流程图的组件，支持与逻辑，或逻辑，括号逻辑和节点设置。"),l("br"),d(" 它能把一段 DSL（如 A&B|C&(D|E) ）解析成动态的节点-或门-括号嵌套结构并实时绘制到 Canvas，放在日常后台、审批流、规则引擎等场景里可以即拿即用")],-1)),t[5]||(t[5]=l("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),l("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),p(e(a(w),null,null,512),[[m,n.value]]),e(c,null,{default:r(()=>[e(a(F),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[0]||(t[0]=()=>{n.value=!1}),vueCode:a(B)},f({_:2},[u.value?{name:"vue",fn:r(()=>[e(a(u))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[6]||(t[6]=l("h2",{id:"设置节点",tabindex:"-1"},[d("设置节点 "),l("a",{class:"header-anchor",href:"#设置节点","aria-label":'Permalink to "设置节点"'},"​")],-1)),p(e(a(w),null,null,512),[[m,n.value]]),e(c,null,{default:r(()=>[e(a(F),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[1]||(t[1]=()=>{n.value=!1}),vueCode:a(A)},f({_:2},[i.value?{name:"vue",fn:r(()=>[e(a(i))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[7]||(t[7]=l("h2",{id:"自定义样式",tabindex:"-1"},[d("自定义样式 "),l("a",{class:"header-anchor",href:"#自定义样式","aria-label":'Permalink to "自定义样式"'},"​")],-1)),p(e(a(w),null,null,512),[[m,n.value]]),e(c,null,{default:r(()=>[e(a(F),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[2]||(t[2]=()=>{n.value=!1}),vueCode:a(D)},f({_:2},[s.value?{name:"vue",fn:r(()=>[e(a(s))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[8]||(t[8]=k("",5))])}}});export{W as __pageData,g as default};
