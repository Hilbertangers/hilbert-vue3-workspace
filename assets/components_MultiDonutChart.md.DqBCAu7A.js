const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/base.D4rDS_bF.js","assets/chunks/framework.ba8B019S.js"])))=>i.map(i=>d[i]);
import{p as s,D as c,v as u,ae as m,C as p,c as b,o as f,j as a,af as D,G as e,ag as _,a as l,ah as v,k as d,w as i,ai as C}from"./chunks/framework.ba8B019S.js";import{L as g,N as P}from"./chunks/index.xZojqZfn.js";const y=`<template>
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
`,V=JSON.parse('{"title":"MultiDonutChart 多层环形图","description":"","frontmatter":{},"headers":[],"relativePath":"components/MultiDonutChart.md","filePath":"components/MultiDonutChart.md"}'),x={name:"components/MultiDonutChart.md"},w=Object.assign(x,{setup(k){const o=s(!0),r=c();return u(async()=>{r.value=(await m(async()=>{const{default:n}=await import("./chunks/base.D4rDS_bF.js");return{default:n}},__vite__mapDeps([0,1]))).default}),(n,t)=>{const h=p("ClientOnly");return f(),b("div",null,[t[1]||(t[1]=a("h1",{id:"multidonutchart-多层环形图",tabindex:"-1"},[l("MultiDonutChart 多层环形图 "),a("a",{class:"header-anchor",href:"#multidonutchart-多层环形图","aria-label":'Permalink to "MultiDonutChart 多层环形图"'},"​")],-1)),t[2]||(t[2]=a("p",null,"基于 ECharts 的多层环形图组件，支持自定义颜色、尺寸和图例样式。",-1)),t[3]||(t[3]=a("h2",{id:"基础用法",tabindex:"-1"},[l("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),D(e(d(g),null,null,512),[[v,o.value]]),e(h,null,{default:i(()=>[e(d(P),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:t[0]||(t[0]=()=>{o.value=!1}),vueCode:d(y)},C({_:2},[r.value?{name:"vue",fn:i(()=>[e(d(r))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=_('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>className</td><td>容器的类名</td><td><code>string</code></td><td><code>&#39;chart&#39;</code></td></tr><tr><td>width</td><td>图表宽度</td><td><code>string</code></td><td><code>&#39;100%&#39;</code></td></tr><tr><td>height</td><td>图表高度</td><td><code>string</code></td><td><code>&#39;300px&#39;</code></td></tr><tr><td>chartParam</td><td>图表数据对象</td><td><code>ChartParam</code></td><td><strong>必传</strong></td></tr><tr><td>color</td><td>自定义颜色数组</td><td><code>string[]</code></td><td><code>[&#39;#0055FE&#39;, &#39;#88DDFF&#39;, &#39;#FF749D&#39;, &#39;#FCDD69&#39;]</code></td></tr></tbody></table><h3 id="chartparam" tabindex="-1">ChartParam <a class="header-anchor" href="#chartparam" aria-label="Permalink to &quot;ChartParam&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>必填</th></tr></thead><tbody><tr><td>data</td><td>数据项数组</td><td><code>ChartDataItem[]</code></td><td>是</td></tr></tbody></table><h3 id="chartdataitem" tabindex="-1">ChartDataItem <a class="header-anchor" href="#chartdataitem" aria-label="Permalink to &quot;ChartDataItem&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>必填</th></tr></thead><tbody><tr><td>name</td><td>数据项名称</td><td><code>string</code></td><td>是</td></tr><tr><td>color</td><td>数据项颜色</td><td><code>string</code></td><td>是</td></tr><tr><td>tips</td><td>数据项提示文本</td><td><code>string</code></td><td>是</td></tr><tr><td>value</td><td>数据项数值</td><td><code>number</code></td><td>是</td></tr></tbody></table><h2 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h2><ul><li><strong>自动排序</strong>：数据会自动按值的大小排序，值越大圆弧宽度越大</li><li><strong>响应式</strong>：组件支持窗口大小变化自动重绘</li><li><strong>自定义图例</strong>：支持自定义图例的样式和格式</li><li><strong>工具提示</strong>：鼠标悬停显示详细数据和百分比</li></ul><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ol><li><code>chartParam</code> 是必传参数，必须包含 <code>data</code> 数组</li><li>数据项中的 <code>color</code> 必须指定，因为组件会对数据进行排序</li><li>组件基于 ECharts 5.x 版本开发</li><li>建议在组件销毁前调用 <code>dispose()</code> 方法清理资源（组件已自动处理）</li></ol>',11))])}}});export{V as __pageData,w as default};
