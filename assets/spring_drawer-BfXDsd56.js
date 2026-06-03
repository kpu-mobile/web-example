
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{D as e,Dt as t,E as n,O as r,_ as i,ct as a,k as o,mt as s,q as c,w as l,yt as u}from"./vue-router-DpP-iWv7.js";import{O as d,Q as f,d as p}from"./index-CqA6ZM_a.js";import{t as m}from"./AppPageLayout-b-gp_UZ6.js";var h=o({__name:`_demo1`,setup(o){let l=u(!1);return(o,u)=>{let d=f,m=p;return c(),n(i,null,[r(d,{onClick:u[0]||(u[0]=e=>l.value=!0)},{default:a(()=>[...u[2]||(u[2]=[e(` 打开 `,-1)])]),_:1}),r(m,{modelValue:t(l),"onUpdate:modelValue":u[1]||(u[1]=e=>s(l)?l.value=e:null),title:`标题`},{default:a(()=>[...u[3]||(u[3]=[e(` 这里是弹簧抽屉内容 `,-1)])]),_:1},8,[`modelValue`])],64)}}}),g=`<script setup lang="ts">
const drawer = ref(false)
<\/script>

<template>
  <KmButton @click="drawer = true">
    打开
  </KmButton>
  <KmSpringDrawer v-model="drawer" title="标题">
    这里是弹簧抽屉内容
  </KmSpringDrawer>
</template>
`,_=o({__name:`index`,setup(e){return(e,n)=>{let i=d,o=m;return c(),l(o,{navbar:``,"navbar-start-side":`back`},{default:a(()=>[r(i,{code:t(g)},{default:a(()=>[r(h)]),_:1},8,[`code`])]),_:1})}}});export{_ as default};