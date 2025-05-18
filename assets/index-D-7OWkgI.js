
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.top/
 */
    
import{_ as R}from"./index-CPokHgEa.js";import{_ as h}from"./index.vue_vue_type_script_setup_true_lang-yVcVFY2c.js";import{d as k,r as x,Q as D,T as F,A as S,u as a,R as g,j as b,k as y,o as i,t as w,S as N,v as T,c as m,U as P,b as n,a as O,w as c,e as V,_ as j,F as A,V as $}from"./index-DYOJpx7Z.js";import"./index.vue_vue_type_script_setup_true_lang-BJ4zJUgu.js";const _=k({name:"KmCountTo",__name:"index",props:{startVal:{},endVal:{},autoplay:{type:Boolean,default:!0},duration:{default:2e3},transition:{default:"linear"},delay:{default:0},decimals:{default:0},separator:{default:","},prefix:{},suffix:{}},emits:["onStarted","onFinished"],setup(l,{expose:s,emit:o}){const t=l,d=o,f=x(!1),p=x(t.startVal),r=D(p,{duration:t.duration,transition:F[t.transition],delay:t.delay,disabled:f,onFinished:()=>d("onFinished"),onStarted:()=>d("onStarted")}),C=S(()=>{let e=a(r);if(e=Number(e).toFixed(t.decimals),t.separator){const[K,B]=e.split(".");e=K.replace(/\B(?=(\d{3})+(?!\d))/g,t.separator)+(B?`.${B}`:"")}return t.prefix&&(e=t.prefix+e),t.suffix&&(e=e+t.suffix),e});function u(){p.value=t.endVal}function v(){f.value=!0,p.value=t.startVal,N(()=>{f.value=!1})}return g([()=>t.startVal,()=>t.endVal],()=>{u()}),b(()=>{t.autoplay&&u()}),s({start:u,reset:v}),(e,K)=>(i(),y("span",null,w(a(C)),1))}}),E={};function L(l,s){const o=_;return i(),m(o,{"start-val":0,"end-val":1e5})}const M=T(E,[["render",L]]),Q=`<template>
  <KmCountTo :start-val="0" :end-val="100000" />
</template>
`,U={};function q(l,s){const o=_;return i(),m(o,{"start-val":0,"end-val":1e5,duration:1e4})}const z=T(U,[["render",q]]),G=`<template>
  <KmCountTo :start-val="0" :end-val="100000" :duration="10000" />
</template>
`,H={};function I(l,s){const o=_;return i(),m(o,{"start-val":0,"end-val":1e5,decimals:2})}const J=T(H,[["render",I]]),W=`<template>
  <KmCountTo :start-val="0" :end-val="100000" :decimals="2" />
</template>
`,X={};function Y(l,s){const o=_;return i(),m(o,{"start-val":0,"end-val":1e5,prefix:"￥",suffix:"元"})}const Z=T(X,[["render",Y]]),tt=`<template>
  <KmCountTo :start-val="0" :end-val="100000" prefix="￥" suffix="元" />
</template>
`,nt={class:"flex flex-row gap-2"},et=k({__name:"_demo5",setup(l){const s=P("countToRef"),o=x(0),t=x(1e5);function d(){$("开始")}function f(){$("结束")}return(p,r)=>{var v,e;const C=_,u=j;return i(),y(A,null,[n(C,{ref_key:"countToRef",ref:s,"start-val":a(o),"end-val":a(t),autoplay:!1,onOnStarted:d,onOnFinished:f},null,8,["start-val","end-val"]),O("div",nt,[n(u,{onClick:(v=a(s))==null?void 0:v.start},{default:c(()=>r[1]||(r[1]=[V(" 开始 ")])),_:1},8,["onClick"]),n(u,{onClick:(e=a(s))==null?void 0:e.reset},{default:c(()=>r[2]||(r[2]=[V(" 重置 ")])),_:1},8,["onClick"]),n(u,{onClick:r[0]||(r[0]=K=>t.value+=1e4)},{default:c(()=>r[3]||(r[3]=[V(" 增加10000 ")])),_:1})])],64)}}}),ot=`<script setup lang="ts">
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
`,lt=k({__name:"index",setup(l){return(s,o)=>{const t=h,d=R;return i(),m(d,{navbar:"","navbar-start-side":"back"},{default:c(()=>[n(t,{code:a(Q)},{default:c(()=>[n(M)]),_:1},8,["code"]),n(t,{title:"持续10秒",code:a(G)},{default:c(()=>[n(z)]),_:1},8,["code"]),n(t,{title:"保留2位小数",code:a(W)},{default:c(()=>[n(J)]),_:1},8,["code"]),n(t,{title:"带前缀和后缀",code:a(tt)},{default:c(()=>[n(Z)]),_:1},8,["code"]),n(t,{title:"手动控制",code:a(ot)},{default:c(()=>[n(et)]),_:1},8,["code"])]),_:1})}}});export{lt as default};
