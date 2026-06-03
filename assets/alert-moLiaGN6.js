
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{C as e,D as t,Dt as n,E as r,O as i,ct as a,k as o,q as s,w as c}from"./vue-router-DpP-iWv7.js";import{O as l,Q as u,it as d,ot as f}from"./index-CqA6ZM_a.js";import{t as p}from"./AppPageLayout-b-gp_UZ6.js";var m={};function h(e,t){let n=d;return s(),c(n,{icon:`i-lucide:info`,title:`提示信息`,description:`这是一条普通提示，用于展示页面说明或操作反馈。`})}var g=f(m,[[`render`,h]]),_=`<template>
  <KmAlert
    icon="i-lucide:info"
    title="提示信息"
    description="这是一条普通提示，用于展示页面说明或操作反馈。"
  />
</template>
`,v={},y={class:`space-y-4`};function b(e,t){let n=d;return s(),r(`div`,y,[i(n,{icon:`i-lucide:info`,title:`普通提示`,description:`数据已同步完成，可以继续后续操作。`}),i(n,{icon:`i-lucide:circle-alert`,title:`危险提示`,description:`删除后数据将无法恢复，请谨慎操作。`,variant:`destructive`})])}var x=f(v,[[`render`,b]]),S=`<template>
  <div class="space-y-4">
    <KmAlert
      icon="i-lucide:info"
      title="普通提示"
      description="数据已同步完成，可以继续后续操作。"
    />
    <KmAlert
      icon="i-lucide:circle-alert"
      title="危险提示"
      description="删除后数据将无法恢复，请谨慎操作。"
      variant="destructive"
    />
  </div>
</template>
`,C={};function w(n,r){let o=u,l=d;return s(),c(l,{icon:`i-lucide:terminal`,title:`命令执行完成`},{description:a(()=>[e(`div`,null,[r[1]||(r[1]=t(` 已成功生成文件，可继续进行下一步操作。 `,-1)),i(o,{variant:`link`,class:`px-0 h-auto`},{default:a(()=>[...r[0]||(r[0]=[t(` 查看详情 `,-1)])]),_:1})])]),_:1})}var T=f(C,[[`render`,w]]),E=`<template>
  <KmAlert icon="i-lucide:terminal" title="命令执行完成">
    <template #description>
      <div>
        已成功生成文件，可继续进行下一步操作。
        <KmButton variant="link" class="px-0 h-auto">
          查看详情
        </KmButton>
      </div>
    </template>
  </KmAlert>
</template>
`,D=o({__name:`index`,setup(t){return(t,r)=>{let o=l,u=p;return s(),c(u,{navbar:``},{default:a(()=>[e(`div`,null,[i(o,{code:n(_)},{default:a(()=>[i(g)]),_:1},8,[`code`]),i(o,{title:`不同样式`,code:n(S)},{default:a(()=>[i(x)]),_:1},8,[`code`]),i(o,{title:`自定义描述`,code:n(E)},{default:a(()=>[i(T)]),_:1},8,[`code`])])]),_:1})}}});export{D as default};