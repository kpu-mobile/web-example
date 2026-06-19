
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{C as e,D as t,Dt as n,Nt as r,O as i,Z as a,a as o,ct as s,k as c,mt as l,q as u,w as d,yt as f}from"./vue-router-DpP-iWv7.js";import{L as p,Q as m,r as h}from"./index-D4TT8-Ku.js";import{t as g}from"./AppPageLayout-DuOJLTKk.js";var _={class:`p-4 flex flex-col gap-4`},v=c({__name:`custom-area`,setup(c){let v=o(),y=f(!1),b=f(!1),x=[{name:`选项一`},{name:`选项二`},{name:`选项三`}];function S(e){b.value=!1,h(e.name)}return(o,c)=>{let f=p,h=m,C=a(`van-action-sheet`),w=g;return u(),d(w,{navbar:``},{"navbar-start":s(()=>[i(f,{modelValue:n(y),"onUpdate:modelValue":c[0]||(c[0]=e=>l(y)?y.value=e:null),size:`16px`},null,8,[`modelValue`])]),"navbar-end":s(()=>[i(h,{size:`sm`,onClick:c[1]||(c[1]=e=>b.value=!0)},{default:s(()=>[...c[4]||(c[4]=[t(` 操作按钮 `,-1)])]),_:1}),i(C,{show:n(b),"onUpdate:show":c[2]||(c[2]=e=>l(b)?b.value=e:null),actions:x,onSelect:S},null,8,[`show`])]),default:s(()=>[e(`div`,_,[e(`div`,null,` Switch: `+r(n(y)),1),i(h,{onClick:c[3]||(c[3]=e=>n(v).back())},{default:s(()=>[...c[5]||(c[5]=[t(` 返回 `,-1)])]),_:1})])]),_:1})}}});export{v as default};