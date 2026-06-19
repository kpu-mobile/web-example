
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{C as e,D as t,Dt as n,O as r,ct as i,k as a,q as o,w as s}from"./vue-router-DpP-iWv7.js";import{H as c,O as l,Q as u,ot as d}from"./index-D4TT8-Ku.js";import{t as f}from"./AppPageLayout-DuOJLTKk.js";import"./logo-BuKSDxoE.js";var p={};function m(e,n){let r=c;return o(),s(r,{class:`m-0`},{default:i(()=>[...n[0]||(n[0]=[t(` PageMain 是最常用的页面组件，几乎所有页面都会使用到 `,-1)])]),_:1})}var h=d(p,[[`render`,m]]),g=`<template>
  <KmPageMain class="m-0">
    PageMain 是最常用的页面组件，几乎所有页面都会使用到
  </KmPageMain>
</template>
`,_={};function v(e,n){let r=c;return o(),s(r,{title:`你可以设置一个自定义的标题`,class:`m-0`},{default:i(()=>[...n[0]||(n[0]=[t(` 这里放页面内容 `,-1)])]),_:1})}var y=d(_,[[`render`,v]]),b=`<template>
  <KmPageMain title="你可以设置一个自定义的标题" class="m-0">
    这里放页面内容
  </KmPageMain>
</template>
`,x={},S={class:`flex items-center justify-between`};function C(n,a){let l=u,d=c;return o(),s(d,{class:`m-0`},{title:i(()=>[e(`div`,S,[a[1]||(a[1]=t(` 通过 slot 设置标题 `,-1)),r(l,{size:`sm`,variant:`outline`},{default:i(()=>[...a[0]||(a[0]=[t(` 自定义按钮 `,-1)])]),_:1})])]),default:i(()=>[a[2]||(a[2]=t(` 这里放页面内容 `,-1))]),_:1})}var w=d(x,[[`render`,C]]),T=`<template>
  <KmPageMain class="m-0">
    <template #title>
      <div class="flex items-center justify-between">
        通过 slot 设置标题
        <KmButton size="sm" variant="outline">
          自定义按钮
        </KmButton>
      </div>
    </template>
    这里放页面内容
  </KmPageMain>
</template>
`,E={};function D(t,n){let r=c;return o(),s(r,{title:`带展开/收起功能`,collaspe:``,height:`20vh`,class:`m-0`},{default:i(()=>[...n[0]||(n[0]=[e(`h1`,{class:`text-2xl font-bold`},` Kpu-mobile `,-1),e(`img`,{src:``+new URL(`logo-C4NiTglW.png`,import.meta.url).href,class:`w-40`},null,-1)])]),_:1})}var O=d(E,[[`render`,D]]),k=`<template>
  <KmPageMain title="带展开/收起功能" collaspe height="20vh" class="m-0">
    <h1 class="text-2xl font-bold">
      Kpu-mobile
    </h1>
    <img src="@/assets/images/logo.png" class="w-40">
  </KmPageMain>
</template>
`,A=a({__name:`index`,setup(e){return(e,t)=>{let a=l,c=f;return o(),s(c,{navbar:``,"navbar-start-side":`back`},{default:i(()=>[r(a,{code:n(g)},{default:i(()=>[r(h)]),_:1},8,[`code`]),r(a,{code:n(b)},{default:i(()=>[r(y)]),_:1},8,[`code`]),r(a,{code:n(T)},{default:i(()=>[r(w)]),_:1},8,[`code`]),r(a,{code:n(k)},{default:i(()=>[r(O)]),_:1},8,[`code`])]),_:1})}}});export{A as default};