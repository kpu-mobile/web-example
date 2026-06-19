
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{D as e,Dt as t,E as n,O as r,Y as i,_ as a,ct as o,k as s,q as c,w as l}from"./vue-router-DpP-iWv7.js";import{O as u,Z as d,ot as f}from"./index-D4TT8-Ku.js";import{t as p}from"./AppPageLayout-DuOJLTKk.js";var m={},h={class:`flex flex-col gap-4`};function g(t,s){let l=d;return c(),n(`div`,h,[(c(),n(a,null,i(3,t=>r(l,{key:t,title:`卡片标题`,description:`卡片描述`,class:`w-full`},{footer:o(()=>[...s[0]||(s[0]=[e(` 卡片底部 `,-1)])]),default:o(()=>[s[1]||(s[1]=e(` 卡片内容 `,-1))]),_:1})),64))])}var _=f(m,[[`render`,g]]),v=`<template>
  <div class="flex flex-col gap-4">
    <KmCard v-for="i in 3" :key="i" title="卡片标题" description="卡片描述" class="w-full">
      卡片内容
      <template #footer>
        卡片底部
      </template>
    </KmCard>
  </div>
</template>
`,y=s({__name:`index`,setup(e){return(e,n)=>{let i=u,a=p;return c(),l(a,{navbar:``,"navbar-start-side":`back`},{default:o(()=>[r(i,{code:t(v)},{default:o(()=>[r(_)]),_:1},8,[`code`])]),_:1})}}});export{y as default};