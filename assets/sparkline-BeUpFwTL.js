
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{Dt as e,E as t,O as n,_ as r,ct as i,k as a,q as o,w as s,yt as c}from"./vue-router-DpP-iWv7.js";import{O as l,f as u}from"./index-CqA6ZM_a.js";import{t as d}from"./AppPageLayout-b-gp_UZ6.js";var f=a({__name:`_demo1`,setup(i){let a=c([1,5,2,4,8,3,7]),s=c([{tooltip:`值：1`,value:1},{tooltip:`值：3`,value:3},{tooltip:`值：5`,value:5},{tooltip:`值：8`,value:8},{tooltip:`值：4`,value:4},{tooltip:`值：6`,value:6},{tooltip:`值：9`,value:9}]);return(i,c)=>{let l=u;return o(),t(r,null,[n(l,{value:e(a)},null,8,[`value`]),n(l,{value:e(a),"stroke-color":`#409eff`,"fill-color":`#b3d8ff`},null,8,[`value`]),n(l,{value:e(s),tooltip:``},null,8,[`value`]),n(l,{value:e(s),tooltip:``,"stroke-color":`#409eff`,"fill-color":`#b3d8ff`,"cursor-color":`#e6a23c`,"spot-color":`#909399`},null,8,[`value`])],64)}}}),p=`<script setup lang="ts">
const value1 = ref([1, 5, 2, 4, 8, 3, 7])
const value2 = ref([
  { tooltip: '值：1', value: 1 },
  { tooltip: '值：3', value: 3 },
  { tooltip: '值：5', value: 5 },
  { tooltip: '值：8', value: 8 },
  { tooltip: '值：4', value: 4 },
  { tooltip: '值：6', value: 6 },
  { tooltip: '值：9', value: 9 },
])
<\/script>

<template>
  <KmSparkline :value="value1" />
  <KmSparkline :value="value1" stroke-color="#409eff" fill-color="#b3d8ff" />
  <KmSparkline :value="value2" tooltip />
  <KmSparkline :value="value2" tooltip stroke-color="#409eff" fill-color="#b3d8ff" cursor-color="#e6a23c" spot-color="#909399" />
</template>
`,m=a({__name:`index`,setup(t){return(t,r)=>{let a=l,c=d;return o(),s(c,{navbar:``,"navbar-start-side":`back`},{default:i(()=>[n(a,{code:e(p)},{default:i(()=>[n(f)]),_:1},8,[`code`])]),_:1})}}});export{m as default};