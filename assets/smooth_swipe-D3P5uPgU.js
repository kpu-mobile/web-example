
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{C as e,D as t,Dt as n,E as r,Nt as i,O as a,Y as o,_ as s,ct as c,k as l,q as u,yt as d}from"./vue-router-DpP-iWv7.js";import{$ as f,O as p,Q as m,m as h}from"./index-D4TT8-Ku.js";import{t as g}from"./AppPageLayout-DuOJLTKk.js";var _=l({__name:`_demo1`,setup(l){let p=d(0);return(l,d)=>{let g=m,_=f,v=h;return u(),r(s,null,[a(_,null,{default:c(()=>[(u(),r(s,null,o(4,e=>a(g,{key:e,variant:n(p)===e-1?`default`:`outline`,onClick:t=>p.value=e-1},{default:c(()=>[t(i(e),1)]),_:2},1032,[`variant`,`onClick`])),64))]),_:1}),a(v,{"active-index":n(p)},{default:c(()=>[...d[0]||(d[0]=[e(`div`,{class:`text-20 flex-center h-50`},` 1 `,-1),e(`div`,{class:`text-20 flex-center h-75`},` 2 `,-1),e(`div`,{class:`text-20 flex-center h-100`},` 3 `,-1),e(`div`,{class:`text-20 flex-center h-25`},` 4 `,-1)])]),_:1},8,[`active-index`])],64)}}}),v=`<script setup lang="ts">
const activeIndex = ref<number>(0)
<\/script>

<template>
  <KmButtonGroup>
    <KmButton v-for="index in 4" :key="index" :variant="activeIndex === index - 1 ? 'default' : 'outline'" @click="activeIndex = index - 1">
      {{ index }}
    </KmButton>
  </KmButtonGroup>
  <KmSmoothSwipe :active-index>
    <div class="text-20 flex-center h-50">
      1
    </div>
    <div class="text-20 flex-center h-75">
      2
    </div>
    <div class="text-20 flex-center h-100">
      3
    </div>
    <div class="text-20 flex-center h-25">
      4
    </div>
  </KmSmoothSwipe>
</template>
`,y=l({__name:`index`,setup(e){return(e,t)=>{let i=p,o=g;return u(),r(`div`,null,[a(o,{navbar:``,"navbar-start-side":`back`},{default:c(()=>[a(i,{code:n(v)},{default:c(()=>[a(_)]),_:1},8,[`code`])]),_:1})])}}});export{y as default};