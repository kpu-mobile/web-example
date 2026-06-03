
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{C as e,Dt as t,O as n,ct as r,k as i,mt as a,q as o,w as s,yt as c}from"./vue-router-DpP-iWv7.js";import{I as l,O as u}from"./index-CqA6ZM_a.js";import{t as d}from"./AppPageLayout-b-gp_UZ6.js";var f=i({__name:`_demo1`,setup(n){let i=c(1);return(n,c)=>{let u=l;return o(),s(u,{modelValue:t(i),"onUpdate:modelValue":c[0]||(c[0]=e=>a(i)?i.value=e:null),list:[{label:`标签1`,value:1},{label:`标签2`,value:2},{label:`标签3`,value:3}]},{1:r(()=>[...c[1]||(c[1]=[e(`div`,{class:`flex-center`},` 标签1 `,-1)])]),2:r(()=>[...c[2]||(c[2]=[e(`div`,{class:`flex-center`},` 标签2 `,-1)])]),3:r(()=>[...c[3]||(c[3]=[e(`div`,{class:`flex-center`},` 标签3 `,-1)])]),_:1},8,[`modelValue`])}}}),p=`<script setup lang="ts">
const tabs = ref(1)
<\/script>

<template>
  <KmTabs v-model="tabs" :list="[{ label: '标签1', value: 1 }, { label: '标签2', value: 2 }, { label: '标签3', value: 3 }]">
    <template #1>
      <div class="flex-center">
        标签1
      </div>
    </template>
    <template #2>
      <div class="flex-center">
        标签2
      </div>
    </template>
    <template #3>
      <div class="flex-center">
        标签3
      </div>
    </template>
  </KmTabs>
</template>
`,m=i({__name:`index`,setup(e){return(e,i)=>{let a=u,c=d;return o(),s(c,{navbar:``,"navbar-start-side":`back`},{default:r(()=>[n(a,{code:t(p)},{default:r(()=>[n(f)]),_:1},8,[`code`])]),_:1})}}});export{m as default};