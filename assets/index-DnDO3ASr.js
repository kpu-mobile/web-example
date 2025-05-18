
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.top/
 */
    
import{_ as L}from"./index-CPokHgEa.js";import{_ as V}from"./index.vue_vue_type_script_setup_true_lang-yVcVFY2c.js";import{d as b,r as x,a9 as $,aa as I,ab as H,A as T,j as U,ac as W,R as G,k as w,o as h,q as J,a as j,ad as R,b as d,u as v,v as O,m as Q,c as Z,w as y}from"./index-DYOJpx7Z.js";import"./index.vue_vue_type_script_setup_true_lang-BJ4zJUgu.js";const X=b({__name:"index",props:{color:{default:"#FFF"},quantity:{default:100},staticity:{default:50},ease:{default:50},class:{}},setup(m){const u=m,a=x(null),c=x(null),n=x(null),g=x([]),_=$({x:0,y:0}),s=$({w:0,h:0}),{x:S,y:M}=I(),{pixelRatio:f}=H(),Y=T(()=>{let e=u.color.replace(/^#/,"");e.length===3&&(e=e.split("").map(i=>i+i).join(""));const t=Number.parseInt(e,16),o=t>>16&255,l=t>>8&255,r=t&255;return`${o} ${l} ${r}`});U(()=>{a.value&&(n.value=a.value.getContext("2d")),k(),P(),window.addEventListener("resize",k)}),W(()=>{window.removeEventListener("resize",k)}),G([S,M],()=>{q()});function k(){E(),K()}function q(){if(a.value){const e=a.value.getBoundingClientRect(),{w:t,h:o}=s,l=S.value-e.left-t/2,r=M.value-e.top-o/2;l<t/2&&l>-t/2&&r<o/2&&r>-o/2&&(_.x=l,_.y=r)}}function E(){c.value&&a.value&&n.value&&(g.value.length=0,s.w=c.value.offsetWidth,s.h=c.value.offsetHeight,a.value.width=s.w*f.value,a.value.height=s.h*f.value,a.value.style.width=`${s.w}px`,a.value.style.height=`${s.h}px`,n.value.scale(f.value,f.value))}function z(){const e=Math.floor(Math.random()*s.w),t=Math.floor(Math.random()*s.h),o=0,l=0,r=Math.floor(Math.random()*2)+1,i=0,p=Number.parseFloat((Math.random()*.6+.1).toFixed(1)),F=(Math.random()-.5)*.2,D=(Math.random()-.5)*.2,N=.1+Math.random()*4;return{x:e,y:t,translateX:o,translateY:l,size:r,alpha:i,targetAlpha:p,dx:F,dy:D,magnetism:N}}function C(e,t=!1){if(n.value){const{x:o,y:l,translateX:r,translateY:i,size:p,alpha:F}=e;n.value.translate(r,i),n.value.beginPath(),n.value.arc(o,l,p,0,2*Math.PI),n.value.fillStyle=`rgba(${Y.value.split(" ").join(", ")}, ${F})`,n.value.fill(),n.value.setTransform(f.value,0,0,f.value,0,0),t||g.value.push(e)}}function B(){n.value&&n.value.clearRect(0,0,s.w,s.h)}function K(){B();const e=u.quantity;for(let t=0;t<e;t++){const o=z();C(o)}}function A(e,t,o,l,r){const i=(e-t)*(r-l)/(o-t)+l;return i>0?i:0}function P(){B(),g.value.forEach((e,t)=>{const l=[e.x+e.translateX-e.size,s.w-e.x-e.translateX-e.size,e.y+e.translateY-e.size,s.h-e.y-e.translateY-e.size].reduce((i,p)=>Math.min(i,p)),r=Number.parseFloat(A(l,0,20,0,1).toFixed(2));if(r>1?(e.alpha+=.02,e.alpha>e.targetAlpha&&(e.alpha=e.targetAlpha)):e.alpha=e.targetAlpha*r,e.x+=e.dx,e.y+=e.dy,e.translateX+=(_.x/(u.staticity/e.magnetism)-e.translateX)/u.ease,e.translateY+=(_.y/(u.staticity/e.magnetism)-e.translateY)/u.ease,e.x<-e.size||e.x>s.w+e.size||e.y<-e.size||e.y>s.h+e.size){g.value.splice(t,1);const i=z();C(i)}else C({...e,x:e.x,y:e.y,translateX:e.translateX,translateY:e.translateY,alpha:e.alpha},!0)}),window.requestAnimationFrame(P)}return(e,t)=>(h(),w("div",{ref_key:"canvasContainerRef",ref:c,class:J(u.class),"aria-hidden":"true"},[j("canvas",{ref_key:"canvasRef",ref:a},null,512)],2))}}),ee={class:"relative h-50 w-full flex flex-col items-center justify-center overflow-hidden bg-background p-2"},te=b({__name:"_demo1",setup(m){const u=R();return(a,c)=>{const n=X;return h(),w("div",ee,[d(n,{class:"absolute inset-0",color:v(u).currentColorScheme==="dark"?"#FFF":"#000"},null,8,["color"])])}}}),ne=`<script setup lang="ts">
import useSettingsStore from '@/store/modules/settings'

const settingsStore = useSettingsStore()
<\/script>

<template>
  <div class="relative h-50 w-full flex flex-col items-center justify-center overflow-hidden bg-background p-2">
    <KmParticlesBg
      class="absolute inset-0"
      :color="settingsStore.currentColorScheme === 'dark' ? '#FFF' : '#000'"
    />
  </div>
</template>
`,ae={},se={class:"relative h-50 w-full flex flex-col items-center justify-center overflow-hidden bg-background p-2"};function oe(m,u){const a=X;return h(),w("div",se,[d(a,{class:"absolute inset-0",color:"#2563EB",quantity:1e3,ease:100,staticity:5})])}const le=O(ae,[["render",oe]]),re=`<template>
  <div class="relative h-50 w-full flex flex-col items-center justify-center overflow-hidden bg-background p-2">
    <KmParticlesBg
      class="absolute inset-0"
      color="#2563EB"
      :quantity="1000"
      :ease="100"
      :staticity="5"
    />
  </div>
</template>
`,ie={class:"relative h-50 w-full flex flex-col items-center justify-center overflow-hidden bg-background p-2"},ue=b({__name:"_demo3",setup(m){const u=R();return(a,c)=>{const n=Q("FmParticlesBg");return h(),w("div",ie,[c[0]||(c[0]=j("span",{class:"pointer-events-none whitespace-pre-wrap from-black to-gray-300/80 bg-gradient-to-b bg-clip-text text-center text-2xl text-transparent font-semibold leading-none dark:from-white dark:to-slate-900/10"}," Kpu-mobile 真好用 ! ",-1)),d(n,{class:"absolute inset-0",color:v(u).currentColorScheme==="dark"?"#FFF":"#000",quantity:100,ease:100,staticity:10},null,8,["color"])])}}}),ce=`<script setup lang="ts">
import useSettingsStore from '@/store/modules/settings'

const settingsStore = useSettingsStore()
<\/script>

<template>
  <div class="relative h-50 w-full flex flex-col items-center justify-center overflow-hidden bg-background p-2">
    <span class="pointer-events-none whitespace-pre-wrap from-black to-gray-300/80 bg-gradient-to-b bg-clip-text text-center text-2xl text-transparent font-semibold leading-none dark:from-white dark:to-slate-900/10">
      Kpu-mobile 真好用 !
    </span>
    <FmParticlesBg
      class="absolute inset-0"
      :color="settingsStore.currentColorScheme === 'dark' ? '#FFF' : '#000'"
      :quantity="100"
      :ease="100"
      :staticity="10"
    />
  </div>
</template>
`,ve=b({__name:"index",setup(m){return(u,a)=>{const c=V,n=L;return h(),Z(n,{navbar:"","navbar-start-side":"back"},{default:y(()=>[d(c,{code:v(ne)},{default:y(()=>[d(te)]),_:1},8,["code"]),d(c,{code:v(re)},{default:y(()=>[d(le)]),_:1},8,["code"]),d(c,{code:v(ce)},{default:y(()=>[d(ue)]),_:1},8,["code"])]),_:1})}}});export{ve as default};
