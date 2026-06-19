
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{C as e,D as t,Dt as n,E as r,O as i,_ as a,ct as o,it as s,k as c,q as l,w as u,yt as d}from"./vue-router-DpP-iWv7.js";import{D as f,F as p,O as m,Q as h,ot as g}from"./index-D4TT8-Ku.js";import{t as _}from"./AppPageLayout-DuOJLTKk.js";var v={};function y(e,t){let n=f;return l(),u(n,{"start-val":0,"end-val":1e5})}var b=g(v,[[`render`,y]]),x=`<template>
  <KmCountTo :start-val="0" :end-val="100000" />
</template>
`,S={};function C(e,t){let n=f;return l(),u(n,{"start-val":0,"end-val":1e5,duration:1e4})}var w=g(S,[[`render`,C]]),T=`<template>
  <KmCountTo :start-val="0" :end-val="100000" :duration="10000" />
</template>
`,E={};function D(e,t){let n=f;return l(),u(n,{"start-val":0,"end-val":1e5,decimals:2})}var O=g(E,[[`render`,D]]),k=`<template>
  <KmCountTo :start-val="0" :end-val="100000" :decimals="2" />
</template>
`,A={};function j(e,t){let n=f;return l(),u(n,{"start-val":0,"end-val":1e5,prefix:`￥`,suffix:`元`})}var M=g(A,[[`render`,j]]),N=`<template>
  <KmCountTo :start-val="0" :end-val="100000" prefix="￥" suffix="元" />
</template>
`,P={class:`flex flex-row gap-2`},F=c({__name:`_demo5`,setup(c){let u=s(`countToRef`),m=d(0),g=d(1e5);function _(){p(`开始`)}function v(){p(`结束`)}return(s,c)=>{let d=f,p=h;return l(),r(a,null,[i(d,{ref_key:`countToRef`,ref:u,"start-val":n(m),"end-val":n(g),autoplay:!1,onOnStarted:_,onOnFinished:v},null,8,[`start-val`,`end-val`]),e(`div`,P,[i(p,{onClick:n(u)?.start},{default:o(()=>[...c[1]||(c[1]=[t(` 开始 `,-1)])]),_:1},8,[`onClick`]),i(p,{onClick:n(u)?.reset},{default:o(()=>[...c[2]||(c[2]=[t(` 重置 `,-1)])]),_:1},8,[`onClick`]),i(p,{onClick:c[0]||(c[0]=e=>g.value+=1e4)},{default:o(()=>[...c[3]||(c[3]=[t(` 增加10000 `,-1)])]),_:1})])],64)}}}),I=`<script setup lang="ts">
import { toast } from 'vue-sonner'

const countToRef = useTemplateRef('countToRef')

const startVal = ref(0)
const endVal = ref(100000)

function onStarted() {
  toast('开始')
}

function onFinished() {
  toast('结束')
}
<\/script>

<template>
  <KmCountTo ref="countToRef" :start-val="startVal" :end-val="endVal" :autoplay="false" @on-started="onStarted" @on-finished="onFinished" />
  <div class="flex flex-row gap-2">
    <KmButton @click="countToRef?.start">
      开始
    </KmButton>
    <KmButton @click="countToRef?.reset">
      重置
    </KmButton>
    <KmButton @click="endVal += 10000">
      增加10000
    </KmButton>
  </div>
</template>
`,L=c({__name:`index`,setup(e){return(e,t)=>{let r=m,a=_;return l(),u(a,{navbar:``,"navbar-start-side":`back`},{default:o(()=>[i(r,{code:n(x)},{default:o(()=>[i(b)]),_:1},8,[`code`]),i(r,{title:`持续10秒`,code:n(T)},{default:o(()=>[i(w)]),_:1},8,[`code`]),i(r,{title:`保留2位小数`,code:n(k)},{default:o(()=>[i(O)]),_:1},8,[`code`]),i(r,{title:`带前缀和后缀`,code:n(N)},{default:o(()=>[i(M)]),_:1},8,[`code`]),i(r,{title:`手动控制`,code:n(I)},{default:o(()=>[i(F)]),_:1},8,[`code`])]),_:1})}}});export{L as default};