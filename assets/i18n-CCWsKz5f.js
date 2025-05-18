
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.top/
 */
    
import{_ as b}from"./index-CPokHgEa.js";import{d as y,l as w,ad as x,r as M,R as j,m as k,c as C,o as $,w as e,a,b as t,e as l,t as m,u as c,_ as z,bi as B,bj as f,a$ as L}from"./index-DYOJpx7Z.js";import{_ as S}from"./index.vue_vue_type_script_setup_true_lang-BJ4zJUgu.js";const V={class:"flex justify-center gap-4"},K={class:"mt-4 text-center"},h=y({__name:"i18n",setup(N){const{t:u}=w(),_=x(),r=M("");j(()=>_.lang,()=>{r.value=L().format("MMMM-dddd")},{immediate:!0});function i(n){const s=B();s&&(n==="zh-cn"?(Object.assign(s["zh-cn"],{hello:{world:"你好，世界！"}}),f.global.setLocaleMessage(n,s["zh-cn"])):(Object.assign(s["en-us"],{hello:{world:"Hello World !"}}),f.global.setLocaleMessage(n,s["en-us"])))}return(n,s)=>{const p=k("van-calendar"),o=S,d=z,g=b;return $(),C(g,{navbar:"","navbar-start-side":"back","navbar-end-side":"i18n"},{default:e(()=>[s[4]||(s[4]=a("div",{class:"m-4 c-gray"}," Vant 组件国际化 ",-1)),t(o,{class:"my-0"},{default:e(()=>[t(p,{poppable:!1,"show-confirm":!1,style:{height:"500px"}})]),_:1}),s[5]||(s[5]=a("div",{class:"m-4 c-gray"}," Dayjs ",-1)),t(o,{class:"my-0"},{default:e(()=>[l(m(c(r)),1)]),_:1}),s[6]||(s[6]=a("div",{class:"m-4 c-gray"}," 延迟加载 ",-1)),t(o,{class:"my-0"},{default:e(()=>[a("div",V,[t(d,{onClick:s[0]||(s[0]=v=>i("zh-cn"))},{default:e(()=>s[2]||(s[2]=[l(" 载入中文 ")])),_:1}),t(d,{onClick:s[1]||(s[1]=v=>i("en-us"))},{default:e(()=>s[3]||(s[3]=[l(" 载入英文 ")])),_:1})]),a("div",K,m(c(u)("hello.world")),1)]),_:1})]),_:1})}}});export{h as default};
