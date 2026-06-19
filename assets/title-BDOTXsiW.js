
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{D as e,O as t,a as n,ct as r,i,k as a,q as o,w as s}from"./vue-router-DpP-iWv7.js";import{H as c,Q as l,ht as u}from"./index-D4TT8-Ku.js";import{t as d}from"./AppPageLayout-DuOJLTKk.js";function f(){let e=i(),t=n(),r=u();function a(){t.push({name:`reload`})}function o(t){r.setCustomTitle(e.fullPath,t)}function s(){r.resetCustomTitle(e.fullPath)}return{reload:a,setCustomTitle:o,resetCustomTitle:s}}var p=a({__name:`title`,setup(n){let i=f();function a(){i.setCustomTitle(`测试标题`)}function u(){i.resetCustomTitle()}return(n,i)=>{let f=l,p=c,m=d;return o(),s(m,{navbar:``,"navbar-start-side":`back`},{default:r(()=>[t(p,{"main-class":`flex gap-2`},{default:r(()=>[t(f,{onClick:a},{default:r(()=>[...i[0]||(i[0]=[e(` 标题设置为「 测试标题 」 `,-1)])]),_:1}),t(f,{onClick:u},{default:r(()=>[...i[1]||(i[1]=[e(` 标题重置 `,-1)])]),_:1})]),_:1})]),_:1})}}});export{p as default};