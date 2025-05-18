
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.top/
 */
    
import{_ as b}from"./index-CPokHgEa.js";import{d as k,g as V,r,m as g,c as C,o as B,w as t,a as i,b as s,t as S,u as l,_ as $,e as p,i as _,af as K,bn as N}from"./index-DYOJpx7Z.js";const y={class:"flex flex-col gap-4 p-4"},U=k({__name:"custom-area",setup(z){const f=V(),a=r(!1),n=r(!1),c=[{name:"选项一"},{name:"选项二"},{name:"选项三"}];function d(u){n.value=!1,N(u.name)}return(u,e)=>{const v=K,m=$,w=g("van-action-sheet"),x=b;return B(),C(x,{navbar:""},{"navbar-start":t(()=>[s(v,{modelValue:l(a),"onUpdate:modelValue":e[0]||(e[0]=o=>_(a)?a.value=o:null),size:"16px"},null,8,["modelValue"])]),"navbar-end":t(()=>[s(m,{size:"sm",onClick:e[1]||(e[1]=o=>n.value=!0)},{default:t(()=>e[4]||(e[4]=[p(" 操作按钮 ")])),_:1}),s(w,{show:l(n),"onUpdate:show":e[2]||(e[2]=o=>_(n)?n.value=o:null),actions:c,onSelect:d},null,8,["show"])]),default:t(()=>[i("div",y,[i("div",null," Switch: "+S(l(a)),1),s(m,{onClick:e[3]||(e[3]=o=>l(f).back())},{default:t(()=>e[5]||(e[5]=[p(" 返回 ")])),_:1})])]),_:1})}}});export{U as default};
