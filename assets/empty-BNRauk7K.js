
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{C as e,D as t,Dt as n,O as r,ct as i,k as a,q as o,w as s}from"./vue-router-DpP-iWv7.js";import{O as c,Q as l,T as u,at as d,ot as f,tt as p}from"./index-D4TT8-Ku.js";import{t as m}from"./AppPageLayout-DuOJLTKk.js";var h={},g={class:`flex gap-2`};function _(n,a){let c=l,f=d,p=u;return o(),s(p,{icon:`i-lucide:folder-open`,title:`没有项目`,description:`您尚未创建任何项目，请从创建第一个项目开始`},{default:i(()=>[e(`div`,g,[r(c,null,{default:i(()=>[...a[0]||(a[0]=[t(` 创建项目 `,-1)])]),_:1}),r(c,{variant:`outline`},{default:i(()=>[...a[1]||(a[1]=[t(` 导入项目 `,-1)])]),_:1})]),r(c,{variant:`link`,class:`text-muted-foreground`,size:`sm`},{default:i(()=>[a[2]||(a[2]=t(` 了解更多 `,-1)),r(f,{name:`i-lucide:arrow-up-right`})]),_:1})]),_:1})}var v=f(h,[[`render`,_]]),y=`<template>
  <KmEmpty icon="i-lucide:folder-open" title="没有项目" description="您尚未创建任何项目，请从创建第一个项目开始">
    <div class="flex gap-2">
      <KmButton>
        创建项目
      </KmButton>
      <KmButton variant="outline">
        导入项目
      </KmButton>
    </div>
    <KmButton variant="link" class="text-muted-foreground" size="sm">
      了解更多 <KmIcon name="i-lucide:arrow-up-right" />
    </KmButton>
  </KmEmpty>
</template>
`,b={};function x(e,n){let a=l,c=u;return o(),s(c,{icon:`i-lucide:cloud`,title:`云盘为空`,description:`将文件上传到云盘，随时随地访问`,class:`border border-dashed`},{default:i(()=>[r(a,{variant:`outline`,size:`sm`},{default:i(()=>[...n[0]||(n[0]=[t(` 上传文件 `,-1)])]),_:1})]),_:1})}var S=f(b,[[`render`,x]]),C=`<template>
  <KmEmpty icon="i-lucide:cloud" title="云盘为空" description="将文件上传到云盘，随时随地访问" class="border border-dashed">
    <KmButton variant="outline" size="sm">
      上传文件
    </KmButton>
  </KmEmpty>
</template>
`,w={};function T(e,n){let a=d,c=l,f=u;return o(),s(f,{icon:`i-lucide:bell`,title:`无通知`,description:`您已收到所有通知。新通知将出现在这里`,class:`h-full from-muted/50 to-transparent from-30% bg-gradient-to-b`},{default:i(()=>[r(c,{variant:`outline`,size:`sm`},{default:i(()=>[r(a,{name:`i-lucide:refresh-ccw`}),n[0]||(n[0]=t(` 刷新 `,-1))]),_:1})]),_:1})}var E=f(w,[[`render`,T]]),D=`<template>
  <KmEmpty icon="i-lucide:bell" title="无通知" description="您已收到所有通知。新通知将出现在这里" class="h-full from-muted/50 to-transparent from-30% bg-gradient-to-b">
    <KmButton variant="outline" size="sm">
      <KmIcon name="i-lucide:refresh-ccw" />
      刷新
    </KmButton>
  </KmEmpty>
</template>
`,O={};function k(n,a){let c=p,d=l,f=u;return o(),s(f,null,{icon:i(()=>[r(c,{src:`https://github.com/Lmx1220.png`,class:`size-20 grayscale`})]),title:i(()=>[...a[0]||(a[0]=[e(`div`,{class:`text-xl`},` 用户离线 `,-1)])]),description:i(()=>[...a[1]||(a[1]=[e(`div`,null,`该用户目前离线`,-1),e(`div`,null,`您可以留言通知他或稍后再试`,-1)])]),default:i(()=>[r(d,null,{default:i(()=>[...a[2]||(a[2]=[t(` 留言 `,-1)])]),_:1})]),_:1})}var A=f(O,[[`render`,k]]),j=`<template>
  <KmEmpty>
    <template #icon>
      <KmAvatar src="https://github.com/Lmx1220.png" class="size-20 grayscale" />
    </template>
    <template #title>
      <div class="text-xl">
        用户离线
      </div>
    </template>
    <template #description>
      <div>该用户目前离线</div>
      <div>您可以留言通知他或稍后再试</div>
    </template>
    <KmButton>
      留言
    </KmButton>
  </KmEmpty>
</template>
`,M=a({__name:`index`,setup(e){return(e,t)=>{let a=c,l=m;return o(),s(l,{navbar:``,"navbar-start-side":`back`},{default:i(()=>[r(a,{code:n(y)},{default:i(()=>[r(v)]),_:1},8,[`code`]),r(a,{title:`边框`,code:n(C)},{default:i(()=>[r(S)]),_:1},8,[`code`]),r(a,{title:`背景`,code:n(D)},{default:i(()=>[r(E)]),_:1},8,[`code`]),r(a,{title:`插槽`,code:n(j)},{default:i(()=>[r(A)]),_:1},8,[`code`])]),_:1})}}});export{M as default};