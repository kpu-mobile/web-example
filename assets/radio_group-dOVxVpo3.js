
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{C as e,Dt as t,E as n,Nt as r,O as i,S as a,ct as o,k as s,kt as c,mt as l,q as u,w as d,yt as f}from"./vue-router-DpP-iWv7.js";import{O as p,V as m}from"./index-D4TT8-Ku.js";import{t as h}from"./AppPageLayout-DuOJLTKk.js";var g={class:`gap-4 grid`},_={class:`text-sm text-muted-foreground`},v=s({__name:`_demo1`,setup(a){let o=f(`comfortable`),s=[{label:`默认`,value:`default`},{label:`舒适`,value:`comfortable`},{label:`紧凑`,value:`compact`}];return(a,c)=>{let d=m;return u(),n(`div`,g,[i(d,{modelValue:t(o),"onUpdate:modelValue":c[0]||(c[0]=e=>l(o)?o.value=e:null),options:s},null,8,[`modelValue`]),i(d,{modelValue:t(o),"onUpdate:modelValue":c[1]||(c[1]=e=>l(o)?o.value=e:null),options:s,class:`flex`},null,8,[`modelValue`]),e(`div`,_,` 当前值：`+r(t(o)),1)])}}}),y=`<script setup lang="ts">
const value = ref('comfortable')

const options = [
  { label: '默认', value: 'default' },
  { label: '舒适', value: 'comfortable' },
  { label: '紧凑', value: 'compact' },
]
<\/script>

<template>
  <div class="gap-4 grid">
    <KmRadioGroup v-model="value" :options="options" />
    <KmRadioGroup v-model="value" :options="options" class="flex" />
    <div class="text-sm text-muted-foreground">
      当前值：{{ value }}
    </div>
  </div>
</template>
`,b={class:`gap-4 grid`},x={class:`text-sm text-muted-foreground`},S=s({__name:`_demo2`,setup(o){let s=f(`growth`),c=[{label:`创业版`,value:`starter`,description:`适合 1-10 人小团队，保留核心能力。`},{label:`成长版`,value:`growth`,description:`适合多角色协作，支持审批与审计流程。`},{label:`企业版`,value:`enterprise`,description:`高级安全策略与 SSO 即将开放。`,disabled:!0}],d=a(()=>c.find(e=>e.value===s.value)?.label??``);return(a,o)=>{let f=m;return u(),n(`div`,b,[i(f,{modelValue:t(s),"onUpdate:modelValue":o[0]||(o[0]=e=>l(s)?s.value=e:null),options:c},null,8,[`modelValue`]),e(`div`,x,` 已选套餐：`+r(t(d)),1)])}}}),C=`<script setup lang="ts">
const value = ref('growth')

const options = [
  {
    label: '创业版',
    value: 'starter',
    description: '适合 1-10 人小团队，保留核心能力。',
  },
  {
    label: '成长版',
    value: 'growth',
    description: '适合多角色协作，支持审批与审计流程。',
  },
  {
    label: '企业版',
    value: 'enterprise',
    description: '高级安全策略与 SSO 即将开放。',
    disabled: true,
  },
]

const currentLabel = computed(() =>
  options.find(option => option.value === value.value)?.label ?? '',
)
<\/script>

<template>
  <div class="gap-4 grid">
    <KmRadioGroup v-model="value" :options="options" />
    <div class="text-sm text-muted-foreground">
      已选套餐：{{ currentLabel }}
    </div>
  </div>
</template>
`,w={class:`gap-4 grid`},T={class:`gap-1 grid min-w-0`},E={class:`flex gap-2 items-center`},D={class:`text-sm font-medium truncate`},O={class:`text-xs text-muted-foreground px-1.5 py-0.5 rounded bg-muted`},k={class:`text-xs text-muted-foreground leading-5`},A={class:`text-sm text-muted-foreground`},j=s({__name:`_demo3`,setup(a){let s=f(`balanced`),d=[{label:`专注模式`,value:`focus`,badge:`录入`,description:`突出主任务，弱化辅助信息，适合录入和审批场景。`},{label:`平衡模式`,value:`balanced`,badge:`推荐`,description:`信息密度与可读性保持平衡，适合作为默认配置。`},{label:`高密度模式`,value:`dense`,badge:`大屏`,description:`在大屏中同时承载更多信息，适合运营与监控看板。`}];return(a,f)=>{let p=m;return u(),n(`div`,w,[i(p,{modelValue:t(s),"onUpdate:modelValue":f[0]||(f[0]=e=>l(s)?s.value=e:null),options:d,class:`gap-2`,"option-class":`rounded-xl border border-transparent px-1 py-1`},{option:o(({option:t,checked:n,disabled:i})=>[e(`div`,{class:c([`px-4 py-3 border rounded-xl flex gap-3 w-full transition-colors items-start justify-between`,[n?`border-primary bg-primary/5`:`border-border hover:border-primary/40`,i&&`opacity-60`]])},[e(`div`,T,[e(`div`,E,[e(`span`,D,r(t.label),1),e(`span`,O,r(t.badge),1)]),e(`div`,k,r(t.description),1)]),e(`span`,{class:c([`text-xs font-medium shrink-0`,n?`text-primary`:`text-muted-foreground`])},r(n?`已选中`:`可选择`),3)],2)]),_:1},8,[`modelValue`]),e(`div`,A,` 当前值：`+r(t(s)),1)])}}}),M=`<script setup lang="ts">
const value = ref('balanced')

const options = [
  {
    label: '专注模式',
    value: 'focus',
    badge: '录入',
    description: '突出主任务，弱化辅助信息，适合录入和审批场景。',
  },
  {
    label: '平衡模式',
    value: 'balanced',
    badge: '推荐',
    description: '信息密度与可读性保持平衡，适合作为默认配置。',
  },
  {
    label: '高密度模式',
    value: 'dense',
    badge: '大屏',
    description: '在大屏中同时承载更多信息，适合运营与监控看板。',
  },
]
<\/script>

<template>
  <div class="gap-4 grid">
    <KmRadioGroup
      v-model="value"
      :options="options"
      class="gap-2"
      option-class="rounded-xl border border-transparent px-1 py-1"
    >
      <template #option="{ option, checked, disabled }">
        <div
          class="px-4 py-3 border rounded-xl flex gap-3 w-full transition-colors items-start justify-between" :class="[
            checked ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/40',
            disabled && 'opacity-60',
          ]"
        >
          <div class="gap-1 grid min-w-0">
            <div class="flex gap-2 items-center">
              <span class="text-sm font-medium truncate">{{ option.label }}</span>
              <span class="text-xs text-muted-foreground px-1.5 py-0.5 rounded bg-muted">
                {{ option.badge }}
              </span>
            </div>
            <div class="text-xs text-muted-foreground leading-5">
              {{ option.description }}
            </div>
          </div>
          <span class="text-xs font-medium shrink-0" :class="checked ? 'text-primary' : 'text-muted-foreground'">
            {{ checked ? '已选中' : '可选择' }}
          </span>
        </div>
      </template>
    </KmRadioGroup>
    <div class="text-sm text-muted-foreground">
      当前值：{{ value }}
    </div>
  </div>
</template>
`,N=s({__name:`index`,setup(n){return(n,r)=>{let a=p,s=h;return u(),d(s,{navbar:``},{default:o(()=>[e(`div`,null,[i(a,{code:t(y)},{default:o(()=>[i(v)]),_:1},8,[`code`]),i(a,{title:`带描述和禁用态`,code:t(C)},{default:o(()=>[i(S)]),_:1},8,[`code`]),i(a,{title:`自定义选项内容`,code:t(M)},{default:o(()=>[i(j)]),_:1},8,[`code`])])]),_:1})}}});export{N as default};