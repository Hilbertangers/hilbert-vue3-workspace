const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/base.DTXuOlLT.js","assets/chunks/framework.BnfD-2QM.js"])))=>i.map(i=>d[i]);
import{p as s,D as c,v as u,ae as m,C as p,c as b,o as f,j as a,af as D,G as e,ag as _,a as l,ah as v,k as d,w as i,ai as C}from"./chunks/framework.BnfD-2QM.js";import{L as g,N as P}from"./chunks/index.3JkuxlVZ.js";const y=`<template>
  <div style="display: flex;">
    <MultiDonutChart
      v-if="chartParam"
      :chartParam="chartParam"
      width="500px"
      height="500px"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MultiDonutChart from 'hilbert-vue3-ui/MultiDonutChart';

const chartParam = ref({
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
});
<\/script>
`,V=JSON.parse('{"title":"MultiDonutChart 多层环形图","description":"","frontmatter":{},"headers":[],"relativePath":"components/MultiDonutChart.md","filePath":"components/MultiDonutChart.md"}'),x={name:"components/MultiDonutChart.md"},w=Object.assign(x,{setup(k){const o=s(!0),r=c();return u(async()=>{r.value=(await m(async()=>{const{default:n}=await import("./chunks/base.DTXuOlLT.js");return{default:n}},__vite__mapDeps([0,1]))).default}),(n,t)=>{const h=p("ClientOnly");return f(),b("div",null,[t[1]||(t[1]=a("h1",{id:"multidonutchart-多层环形图",tabindex:"-1"},[l("MultiDonutChart 多层环形图 "),a("a",{class:"header-anchor",href:"#multidonutchart-多层环形图","aria-label":'Permalink to "MultiDonutChart 多层环形图"'},"​")],-1)),t[2]||(t[2]=a("p",null,"基于 ECharts 的多层环形图组件，支持自定义颜色、尺寸和图例样式。",-1)),t[3]||(t[3]=a("h2",{id:"基础用法",tabindex:"-1"},[l("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),D(e(d(g),null,null,512),[[v,o.value]]),e(h,null,{default:i(()=>[e(d(P),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[0]||(t[0]=()=>{o.value=!1}),vueCode:d(y)},C({_:2},[r.value?{name:"vue",fn:i(()=>[e(d(r))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=_("",11))])}}});export{V as __pageData,w as default};
