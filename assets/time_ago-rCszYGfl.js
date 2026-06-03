
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{C as e,Dt as t,E as n,O as r,_ as i,ct as a,k as o,q as s,w as c}from"./vue-router-DpP-iWv7.js";import{O as l,l as u,ot as d}from"./index-CqA6ZM_a.js";import{t as f}from"./AppPageLayout-b-gp_UZ6.js";var p={};function m(e,t){let n=u;return s(),c(n,{date:new Date},null,8,[`date`])}var h=d(p,[[`render`,m]]),g=`<template>
  <KmTimeAgo :date="new Date()" />
</template>
`,_={};function v(t,a){let o=u;return s(),n(i,null,[a[0]||(a[0]=e(`p`,null,`距离 2020/10/17 ：`,-1)),r(o,{date:new Date(`2020/10/17`)},null,8,[`date`])],64)}var y=d(_,[[`render`,v]]),b=`<template>
  <p>距离 2020/10/17 ：</p>
  <KmTimeAgo :date="new Date('2020/10/17')" />
</template>
`,x={};function S(t,a){let o=u;return s(),n(i,null,[a[0]||(a[0]=e(`p`,null,`显示秒，且更新间隔为1秒`,-1)),r(o,{date:new Date,"update-interval":1e3,"show-second":!0},null,8,[`date`])],64)}var C=d(x,[[`render`,S]]),w=`<template>
  <p>显示秒，且更新间隔为1秒</p>
  <KmTimeAgo :date="new Date()" :update-interval="1000" :show-second="true" />
</template>
`,T=o({__name:`index`,setup(n){return(n,i)=>{let o=l,u=f;return s(),c(u,{navbar:``,"navbar-start-side":`back`},{default:a(()=>[e(`div`,null,[r(o,{code:t(g)},{default:a(()=>[r(h)]),_:1},8,[`code`]),r(o,{code:t(b)},{default:a(()=>[r(y)]),_:1},8,[`code`]),r(o,{code:t(w)},{default:a(()=>[r(C)]),_:1},8,[`code`])])]),_:1})}}});export{T as default};