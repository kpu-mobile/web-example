
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{C as e,D as t,Dt as n,E as r,O as i,T as a,_ as o,ct as s,k as c,q as l,w as u,yt as d,z as f}from"./vue-router-DpP-iWv7.js";import{A as p,O as m,Q as h}from"./index-D4TT8-Ku.js";import{t as g}from"./AppPageLayout-DuOJLTKk.js";var _=c({__name:`_demo1`,setup(c){let m=d(!0);function g(){m.value=!1,f(()=>{m.value=!0})}return(c,d)=>{let f=p,_=h;return l(),r(o,null,[n(m)?(l(),u(f,{key:0,class:`p-4`},{default:s(()=>[...d[0]||(d[0]=[e(`h2`,{class:`text-6xl tracking-tighter font-bold`},` 你好呀 👋 `,-1),e(`div`,{class:`text-2xl tracking-tighter mt-4 text-pretty`},` 最近怎么样？ `,-1)])]),_:1})):a(``,!0),i(_,{onClick:g},{default:s(()=>[...d[1]||(d[1]=[t(` 重新执行 `,-1)])]),_:1})],64)}}}),v=`<script setup lang="ts">
const show = ref(true)

function handleReset() {
  show.value = false
  nextTick(() => {
    show.value = true
  })
}
<\/script>

<template>
  <KmBlurReveal
    v-if="show"
    class="p-4"
  >
    <h2 class="text-6xl tracking-tighter font-bold">
      你好呀 👋
    </h2>
    <div class="text-2xl tracking-tighter mt-4 text-pretty">
      最近怎么样？
    </div>
  </KmBlurReveal>
  <KmButton @click="handleReset">
    重新执行
  </KmButton>
</template>
`,y=c({__name:`_demo2`,setup(c){let m=d(!0);function g(){m.value=!1,f(()=>{m.value=!0})}return(c,d)=>{let f=p,_=h;return l(),r(o,null,[n(m)?(l(),u(f,{key:0,delay:.2,duration:.75,blur:`10px`,"y-offset":100,class:`p-4`},{default:s(()=>[...d[0]||(d[0]=[e(`h2`,{class:`text-6xl tracking-tighter font-bold`},` 你好呀 👋 `,-1),e(`div`,{class:`text-2xl tracking-tighter mt-4 text-pretty`},` 最近怎么样？ `,-1)])]),_:1})):a(``,!0),i(_,{onClick:g},{default:s(()=>[...d[1]||(d[1]=[t(` 重新执行 `,-1)])]),_:1})],64)}}}),b=`<script setup lang="ts">
const show = ref(true)

function handleReset() {
  show.value = false
  nextTick(() => {
    show.value = true
  })
}
<\/script>

<template>
  <KmBlurReveal
    v-if="show"
    :delay="0.2"
    :duration="0.75"
    blur="10px"
    :y-offset="100"
    class="p-4"
  >
    <h2 class="text-6xl tracking-tighter font-bold">
      你好呀 👋
    </h2>
    <div class="text-2xl tracking-tighter mt-4 text-pretty">
      最近怎么样？
    </div>
  </KmBlurReveal>
  <KmButton @click="handleReset">
    重新执行
  </KmButton>
</template>
`,x=c({__name:`index`,setup(e){return(e,t)=>{let a=m,o=g;return l(),r(`div`,null,[i(o,{navbar:``,"navbar-start-side":`back`},{default:s(()=>[i(a,{code:n(v)},{default:s(()=>[i(_)]),_:1},8,[`code`]),i(a,{title:`延迟、持续时间、模糊、偏移量`,code:n(b)},{default:s(()=>[i(y)]),_:1},8,[`code`])]),_:1})])}}});export{x as default};