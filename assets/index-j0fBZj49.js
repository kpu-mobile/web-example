
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.top/
 */
    
import{_ as q}from"./index-CPokHgEa.js";import{_ as z}from"./index.vue_vue_type_script_setup_true_lang-yVcVFY2c.js";import{d as K,ae as H,r as S,j as G,k as y,o as k,a3 as J,p as Q,a4 as T,u as i,Z as U,t as tt,v as et,b as f,F as ot,c as lt,w as P}from"./index-DYOJpx7Z.js";import"./index.vue_vue_type_script_setup_true_lang-BJ4zJUgu.js";function W(t,e,o,l){return Number.parseFloat((e-l*e/t+o).toFixed(2))}function at(t){[...t.querySelectorAll("*")].forEach(e=>t.removeChild(e))}function nt(t){return t.value}function _(t,e){const o=document.createElementNS("http://www.w3.org/2000/svg",t);for(const l in e)o.setAttribute(l,e[l]);return o}function st(t,e,o){if(at(t),e.length<=1)return;o=o||{},typeof e[0]=="number"&&(e=e.map(n=>({value:n})));const l=o.onmousemove,a=o.onmouseout,s="interactive"in o?o.interactive:!!l,b=o.spotRadius||2,d=b*2,B=o.cursorWidth||2,g=Number.parseFloat(t.attributes["stroke-width"].value),R=o.fetch||nt,w=e.map(n=>R(n)),V=Number.parseFloat(t.attributes.width.value)-d*2,x=Number.parseFloat(t.attributes.height.value),D=x-g*2-d,E=Math.max(...w),u=-1e3,N=w.length-1,I=V/N,m=[],M=W(E,D,g+b,w[0]);let $=`M${d} ${M}`;w.forEach((n,p)=>{const r=p*I+d,c=W(E,D,g+b,n);m.push(Object.assign({},e[p],{index:p,x:r,y:c})),$+=` L ${r} ${c}`});const X=_("path",{class:"sparkline--line",d:$,fill:"none"}),Y=`${$} V ${x} L ${d} ${x} Z`,j=_("path",{class:"sparkline--fill",d:Y,stroke:"none"});if(t.appendChild(j),t.appendChild(X),!s)return;const h=_("line",{class:"sparkline--cursor",x1:u,x2:u,y1:0,y2:x,"stroke-width":B}),C=_("circle",{class:"sparkline--spot",cx:u,cy:u,r:b});t.appendChild(h),t.appendChild(C);const A=_("rect",{width:t.attributes.width.value,height:t.attributes.height.value,style:"fill: transparent; stroke: transparent",class:"sparkline--interaction-layer"});t.appendChild(A),A.addEventListener("mouseout",n=>{h.setAttribute("x1",u.toString()),h.setAttribute("x2",u.toString()),C.setAttribute("cx",u.toString()),a&&a(n)}),A.addEventListener("mousemove",n=>{const p=n.offsetX;let r=m.find(Z=>Z.x>=p);r||(r=m[N]);const c=m[m.indexOf(r)-1];let v,L;c?(L=c.x+(r.x-c.x)/2,v=p>=L?r:c):v=r;const F=v.x,O=v.y;C.setAttribute("cx",F),C.setAttribute("cy",O),h.setAttribute("x1",F),h.setAttribute("x2",F),l&&l(n,v)})}const rt={class:"sparkline"},it=["width","height","stroke-width","stroke","fill"],ut=K({name:"KmSparkline",__name:"index",props:{value:{},width:{default:100},height:{default:30},strokeWidth:{default:3},strokeColor:{default:"#dc2b33"},fillColor:{default:"transparent"},cursorColor:{default:"#dc2b33"},spotColor:{default:"#dc2b33"},tooltip:{type:Boolean,default:!1}},setup(t){H(a=>({"6a1ad9e7":a.cursorColor,"591c663b":a.spotColor}));const e=t,o=S(),l=S({show:!1,content:"",top:0,left:0});return G(()=>{st(o.value,e.value,e.tooltip&&{onmousemove:(a,s)=>{l.value.show=!0,l.value.content=s.tooltip,l.value.top=a.offsetY,l.value.left=a.offsetX+20},onmouseout:()=>{l.value.show=!1}})}),(a,s)=>(k(),y("div",rt,[(k(),y("svg",{ref_key:"sparklineRef",ref:o,width:a.width,height:a.height,"stroke-width":a.strokeWidth,stroke:a.strokeColor,fill:a.fillColor},null,8,it)),a.tooltip?J((k(),y("span",{key:0,class:"tooltip",style:U([`left: ${i(l).left}px`,`top: ${i(l).top}px`])},tt(i(l).content),5)),[[T,i(l).show]]):Q("",!0)]))}}),ct=et(ut,[["__scopeId","data-v-084936cc"]]),pt=K({__name:"_demo1",setup(t){const e=S([1,5,2,4,8,3,7]),o=S([{tooltip:"值：1",value:1},{tooltip:"值：3",value:3},{tooltip:"值：5",value:5},{tooltip:"值：8",value:8},{tooltip:"值：4",value:4},{tooltip:"值：6",value:6},{tooltip:"值：9",value:9}]);return(l,a)=>{const s=ct;return k(),y(ot,null,[f(s,{value:i(e)},null,8,["value"]),f(s,{value:i(e),"stroke-color":"#409eff","fill-color":"#b3d8ff"},null,8,["value"]),f(s,{value:i(o),tooltip:""},null,8,["value"]),f(s,{value:i(o),tooltip:"","stroke-color":"#409eff","fill-color":"#b3d8ff","cursor-color":"#e6a23c","spot-color":"#909399"},null,8,["value"])],64)}}}),ft=`<script setup lang="ts">
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
`,_t=K({__name:"index",setup(t){return(e,o)=>{const l=z,a=q;return k(),lt(a,{navbar:"","navbar-start-side":"back"},{default:P(()=>[f(l,{code:i(ft)},{default:P(()=>[f(pt)]),_:1},8,["code"])]),_:1})}}});export{_t as default};
