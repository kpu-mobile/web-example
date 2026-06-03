
/**
 * 由 Kpu-mobile 提供技术支持
 * Powered by Kpu-mobile
 * https://kpu-mobile.kpui.cn
 */
  
import{C as e,Dt as t,E as n,Nt as r,O as i,S as a,ct as o,k as s,kt as c,mt as l,q as u,w as d,yt as f}from"./vue-router-DpP-iWv7.js";import{O as p,X as m}from"./index-CqA6ZM_a.js";import{t as h}from"./AppPageLayout-b-gp_UZ6.js";var g={class:`gap-4 grid`},_={class:`text-sm text-muted-foreground`},v=s({__name:`_demo1`,setup(o){let s=f([`music`]),c=[{label:`阅读`,value:`reading`},{label:`音乐`,value:`music`},{label:`运动`,value:`sports`}],d=a(()=>c.filter(e=>s.value.includes(e.value)).map(e=>e.label).join(`、`));return(a,o)=>{let f=m;return u(),n(`div`,g,[i(f,{modelValue:t(s),"onUpdate:modelValue":o[0]||(o[0]=e=>l(s)?s.value=e:null),options:c},null,8,[`modelValue`]),i(f,{modelValue:t(s),"onUpdate:modelValue":o[1]||(o[1]=e=>l(s)?s.value=e:null),options:c,class:`flex`},null,8,[`modelValue`]),e(`div`,_,` 当前值：`+r(t(d)),1)])}}}),y=`<script setup lang="ts">
const value = ref(['music'])

const options = [
  { label: '阅读', value: 'reading' },
  { label: '音乐', value: 'music' },
  { label: '运动', value: 'sports' },
]

const currentText = computed(() =>
  options
    .filter(option => value.value.includes(option.value))
    .map(option => option.label)
    .join('、'),
)
<\/script>

<template>
  <div class="gap-4 grid">
    <KmCheckboxGroup v-model="value" :options="options" />
    <KmCheckboxGroup v-model="value" :options="options" class="flex" />
    <div class="text-sm text-muted-foreground">
      当前值：{{ currentText }}
    </div>
  </div>
</template>
`,b={class:`gap-4 grid`},x={class:`text-sm text-muted-foreground`},S=s({__name:`_demo2`,setup(o){let s=f([`dashboard`,`report`]),c=[{label:`看板订阅`,value:`dashboard`,description:`每天 8:00 推送核心经营指标。`},{label:`周报摘要`,value:`report`,description:`每周一汇总关键数据变化。`},{label:`系统告警`,value:`alarm`,description:`异常波动时立即通知处理人。`,disabled:!0}],d=a(()=>c.filter(e=>s.value.includes(e.value)).map(e=>e.label).join(`、`));return(a,o)=>{let f=m;return u(),n(`div`,b,[i(f,{modelValue:t(s),"onUpdate:modelValue":o[0]||(o[0]=e=>l(s)?s.value=e:null),options:c},null,8,[`modelValue`]),e(`div`,x,` 当前值：`+r(t(d)),1)])}}}),C=`<script setup lang="ts">
const value = ref(['dashboard', 'report'])

const options = [
  {
    label: '看板订阅',
    value: 'dashboard',
    description: '每天 8:00 推送核心经营指标。',
  },
  {
    label: '周报摘要',
    value: 'report',
    description: '每周一汇总关键数据变化。',
  },
  {
    label: '系统告警',
    value: 'alarm',
    description: '异常波动时立即通知处理人。',
    disabled: true,
  },
]

const currentText = computed(() =>
  options
    .filter(option => value.value.includes(option.value))
    .map(option => option.label)
    .join('、'),
)
<\/script>

<template>
  <div class="gap-4 grid">
    <KmCheckboxGroup v-model="value" :options="options" />
    <div class="text-sm text-muted-foreground">
      当前值：{{ currentText }}
    </div>
  </div>
</template>
`,w={class:`gap-4 grid`},T={class:`gap-1 grid min-w-0`},E={class:`flex gap-2 items-center`},D={class:`text-sm font-medium truncate`},O={class:`text-xs text-muted-foreground px-1.5 py-0.5 rounded bg-muted`},k={class:`text-xs text-muted-foreground leading-5`},A={class:`text-sm text-muted-foreground`},j=s({__name:`_demo3`,setup(a){let s=f([`focus`,`balanced`]),d=[{label:`专注模式`,value:`focus`,summary:`任务优先`,description:`突出主任务，弱化辅助信息，适合录入和审批场景。`},{label:`平衡模式`,value:`balanced`,summary:`默认体验`,description:`信息密度与可读性保持平衡，适合作为默认配置。`},{label:`高密度模式`,value:`dense`,summary:`信息看板`,description:`在大屏中同时承载更多信息，适合运营与监控看板。`}];return(a,f)=>{let p=m;return u(),n(`div`,w,[i(p,{modelValue:t(s),"onUpdate:modelValue":f[0]||(f[0]=e=>l(s)?s.value=e:null),options:d,class:`gap-2`,"option-class":`rounded-xl border border-transparent px-1 py-1`},{option:o(({option:t,checked:n,disabled:i})=>[e(`div`,{class:c([`px-4 py-3 border rounded-xl flex gap-3 w-full transition-colors items-start justify-between`,[n?`border-primary bg-primary/5`:`border-border hover:border-primary/40`,i&&`opacity-60`]])},[e(`div`,T,[e(`div`,E,[e(`span`,D,r(t.label),1),e(`span`,O,r(t.summary),1)]),e(`div`,k,r(t.description),1)]),e(`span`,{class:c([`text-xs font-medium shrink-0`,n?`text-primary`:`text-muted-foreground`])},r(n?`已选中`:`可选择`),3)],2)]),_:1},8,[`modelValue`]),e(`div`,A,` 当前值：`+r(t(s).join(`、`)),1)])}}}),M=`<script setup lang="ts">
const value = ref(['focus', 'balanced'])

const options = [
  {
    label: '专注模式',
    value: 'focus',
    summary: '任务优先',
    description: '突出主任务，弱化辅助信息，适合录入和审批场景。',
  },
  {
    label: '平衡模式',
    value: 'balanced',
    summary: '默认体验',
    description: '信息密度与可读性保持平衡，适合作为默认配置。',
  },
  {
    label: '高密度模式',
    value: 'dense',
    summary: '信息看板',
    description: '在大屏中同时承载更多信息，适合运营与监控看板。',
  },
]
<\/script>

<template>
  <div class="gap-4 grid">
    <KmCheckboxGroup
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
                {{ option.summary }}
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
    </KmCheckboxGroup>
    <div class="text-sm text-muted-foreground">
      当前值：{{ value.join('、') }}
    </div>
  </div>
</template>
`,N={class:`gap-4 grid`},P={class:`text-sm text-muted-foreground`},F=s({__name:`_demo4`,setup(o){let s=f([`dashboard`]),c=[{label:`看板订阅`,value:`dashboard`},{label:`周报摘要`,value:`report`},{label:`系统告警`,value:`alarm`}],d=a(()=>c.filter(e=>s.value.includes(e.value)).map(e=>e.label).join(`、`));return(a,o)=>{let f=m;return u(),n(`div`,N,[i(f,{modelValue:t(s),"onUpdate:modelValue":o[0]||(o[0]=e=>l(s)?s.value=e:null),options:c,min:1,max:2},null,8,[`modelValue`]),e(`div`,P,` 当前值：`+r(t(d)),1),o[1]||(o[1]=e(`div`,{class:`text-xs text-muted-foreground leading-5`},` 已选数量小于等于 1 时，已选项会被禁用；已选数量大于等于 2 时，未选项会被禁用。 `,-1))])}}}),I=`<script setup lang="ts">
const value = ref(['dashboard'])

const options = [
  { label: '看板订阅', value: 'dashboard' },
  { label: '周报摘要', value: 'report' },
  { label: '系统告警', value: 'alarm' },
]

const currentText = computed(() =>
  options
    .filter(option => value.value.includes(option.value))
    .map(option => option.label)
    .join('、'),
)
<\/script>

<template>
  <div class="gap-4 grid">
    <KmCheckboxGroup
      v-model="value"
      :options="options"
      :min="1"
      :max="2"
    />
    <div class="text-sm text-muted-foreground">
      当前值：{{ currentText }}
    </div>
    <div class="text-xs text-muted-foreground leading-5">
      已选数量小于等于 1 时，已选项会被禁用；已选数量大于等于 2 时，未选项会被禁用。
    </div>
  </div>
</template>
`,L=s({__name:`index`,setup(n){return(n,r)=>{let a=p,s=h;return u(),d(s,{navbar:``},{default:o(()=>[e(`div`,null,[i(a,{code:t(y)},{default:o(()=>[i(v)]),_:1},8,[`code`]),i(a,{title:`带描述和禁用态`,code:t(C)},{default:o(()=>[i(S)]),_:1},8,[`code`]),i(a,{title:`自定义选项内容`,code:t(M)},{default:o(()=>[i(j)]),_:1},8,[`code`]),i(a,{title:`最少 / 最多选择`,code:t(I)},{default:o(()=>[i(F)]),_:1},8,[`code`])])]),_:1})}}});export{L as default};