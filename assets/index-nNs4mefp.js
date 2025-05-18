
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.top/
 */
    
import{_ as d}from"./index-CPokHgEa.js";import{_ as m}from"./index.vue_vue_type_script_setup_true_lang-BJ4zJUgu.js";import{d as v,A as x,k as c,o,p,a,b as s,t as l,u as _,f as h,q as y,v as g,c as $,w as n}from"./index-DYOJpx7Z.js";const k={key:0,class:"prefix"},B={class:"text"},K={key:1,class:"suffix"},b=v({name:"KmTrend",__name:"index",props:{value:{},type:{default:"up"},prefix:{default:""},suffix:{default:""},reverse:{type:Boolean,default:!1}},setup(i){const r=i,t=x(()=>{let e=r.type==="up";return r.reverse&&(e=!e),e});return(e,f)=>{const u=h;return o(),c("div",{class:y(["flex items-center transition",`${_(t)?"c-green":"c-red"}`])},[e.prefix?(o(),c("span",k,l(e.prefix),1)):p("",!0),a("span",B,l(e.value),1),e.suffix?(o(),c("span",K,l(e.suffix),1)):p("",!0),s(u,{name:"i-ep:caret-top",rotate:_(t)?0:180,class:"ml-1 transition"},null,8,["rotate"])],2)}}}),w={},C={class:"flex flex-col gap-2"},N={class:"flex flex-col gap-2"},V={class:"flex flex-col gap-2"};function P(i,r){const t=b,e=m,f=d;return o(),$(f,{navbar:"","navbar-start-side":"back"},{default:n(()=>[a("div",null,[s(e,null,{default:n(()=>[a("div",C,[s(t,{value:"12.3"}),s(t,{value:"12.3",type:"down"})])]),_:1}),s(e,{title:"颜色反转"},{default:n(()=>[a("div",N,[s(t,{value:"12.3",reverse:""}),s(t,{value:"12.3",type:"down",reverse:""})])]),_:1}),s(e,{title:"前缀后缀"},{default:n(()=>[a("div",V,[s(t,{value:"12.3",prefix:"$"}),s(t,{value:"12.3",suffix:"%"})])]),_:1})])]),_:1})}const z=g(w,[["render",P]]);export{z as default};
