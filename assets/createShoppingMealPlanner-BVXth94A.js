import{Q as _}from"./QCardSection-NG0FHRHY.js";import{U as Y,W as R,I as c,N,aE as O,Y as U,Z as q,ag as y,a1 as i,aj as a,a0 as n,a5 as f,av as k,a4 as A,as as B}from"./index-CmuCMgBa.js";import{a as j}from"./QCardActions-CLJaF5Bu.js";import{Q as C}from"./QCard-C4N2OtfF.js";import{M as z,d as F,Q as G}from"./mealPlanner.service-B7CUl3Xz.js";import{Q as H}from"./QInnerLoading-86XDDgru.js";import{Q as W}from"./QPage-Blsos2c0.js";import{S as Z}from"./shopping.service-CSEzRJCL.js";import{V as J}from"./validation.service-Bh9qf873.js";import{D as K,c as X}from"./ingredientCalculator.utils-CnrQgiY1.js";import{C as $}from"./confirmationOnLeave.service-BRmX8Fqq.js";import{E as ee}from"./editableText-Bw7tCjDH.js";import{E as te}from"./editableItems-WOirbmNq.js";import"./QInput-Lm2QrpE2.js";import"./uid-Bzmka5Fh.js";import"./debounce-Dh_zIq8Y.js";import"./format-Dq9uPdyY.js";import"./is-BddHB8T5.js";import"./Lang-BaVfzyKw.js";import"./en-US-C0o87H2x.js";import"./recipe.service-B2BkU8jg.js";import"./QSelect-B1fV5hfF.js";import"./use-prevent-scroll-5Ac-51KI.js";import"./History-BRlARYUr.js";import"./rtl-DFPa-2ov.js";import"./random.utils--ZVVX1T7.js";import"./ingredient.constant-DXTw5qQM.js";import"./QForm-BI170nwI.js";import"./QCheckbox-WeQmrjpL.js";import"./QExpansionItem-BRzWrkZm.js";import"./QSeparator-BZj1x5fP.js";const oe=Y({__name:"createShoppingMealPlanner",setup(s,{expose:t}){t();const{formatDate:g}=F,e=R(),{getMealPlanner:v,getActiveDates:h}=z(),{creteShopping:o}=Z(),{required:p,minLength:L}=J(),{onMountedConfirmationOnLeave:S,onUnmountedConfirmationOnLeave:x}=$(),u=c(!1),r=c({name:K,ingredients:[]}),d=c(),D=c([]),b=c(null),V=c(null);function Q(){if(!d.value)return;u.value=!0;const{from:l,to:m}=typeof d.value=="string"?{from:d.value,to:d.value}:d.value;v(l,m).then(I=>{const E=I.flatMap(T=>T.recipes);r.value.ingredients=X(E),r.value.name=`${g(l,"DD/MM/YYYY")} - ${g(m,"DD/MM/YYYY")}`}).finally(()=>{u.value=!1})}function P(l,m){r.value={...r.value,...l},m?.()}async function w(){u.value=!0,await Promise.all([b,V].map(m=>m?.value?.submit()));const l=await o(r.value).finally(()=>{u.value=!1});await e.push({name:"ShoppingDetail",params:{id:l.id}})}N(()=>{h().then(l=>{D.value=l}),S("ShoppingDetail")}),O(()=>x());const M={formatDate:g,router:e,getMealPlanner:v,getActiveDates:h,creteShopping:o,required:p,minLength:L,onMountedConfirmationOnLeave:S,onUnmountedConfirmationOnLeave:x,isLoading:u,shopping:r,selectedDateRange:d,events:D,editableTextRef:b,editableItemsRef:V,generateShoppingList:Q,update:P,create:w,EditableText:ee,EditableItems:te};return Object.defineProperty(M,"__isScriptSetup",{enumerable:!1,value:!0}),M}}),ae={class:"row q-col-gutter-x-md q-col-gutter-y-md"},ne={class:"col"},le={class:"text-h5 text-capitalize"},ie={class:"text-subtitle2"},se={class:"row q-col-gutter-x-md q-col-gutter-y-md"},re={class:"col col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 title-height"},de={class:"row q-col-gutter-x-md q-col-gutter-y-md"},me={class:"col col-xs-12 col-sm-12 col-md-5 col-lg-4 col-xl-4"},ce={class:"col col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"},pe={class:"text-h6 text-capitalize"};function ue(s,t,g,e,v,h){return q(),y(W,{class:"q-pa-md q-col-gutter-x-md q-col-gutter-y-md"},{default:i(()=>[a("div",ae,[a("div",ne,[n(C,{class:"q-pa-sm"},{default:i(()=>[n(_,{horizontal:"",class:"justify-between"},{default:i(()=>[n(_,null,{default:i(()=>[a("div",le,f(s.$t("shopping.createTitle")),1),a("div",ie,f(s.$t("shopping.createDescription")),1)]),_:1}),n(j,{class:"q-pa-none"},{default:i(()=>[n(k,{disable:!e.shopping.ingredients.length,onClick:t[0]||(t[0]=o=>e.create()),color:"primary"},{default:i(()=>[A(f(s.$t("create")),1)]),_:1},8,["disable"])]),_:1})]),_:1})]),_:1})])]),a("div",se,[a("div",re,[n(e.EditableText,{class:"text-h5",modelValue:e.shopping.name,"onUpdate:modelValue":t[1]||(t[1]=o=>e.shopping.name=o),rules:[e.required,e.minLength(1)],"create-mode":!0,ref:"editableTextRef",placeholder:s.$t("shopping.createTitlePlaceholder"),onOnChange:t[2]||(t[2]=(o,p)=>e.update({name:o},p))},null,8,["modelValue","rules","placeholder"])])]),a("div",de,[a("div",me,[n(G,{modelValue:e.selectedDateRange,"onUpdate:modelValue":[t[3]||(t[3]=o=>e.selectedDateRange=o),e.generateShoppingList],events:e.events,range:"","event-color":"orange"},null,8,["modelValue","events"])]),a("div",ce,[n(H,{showing:e.isLoading},null,8,["showing"]),e.shopping.ingredients.length?(q(),y(C,{key:0,id:"list"},{default:i(()=>[n(_,null,{default:i(()=>[a("div",pe,f(s.$t("shopping.name")),1)]),_:1}),n(e.EditableItems,{modelValue:e.shopping.ingredients,"onUpdate:modelValue":t[4]||(t[4]=o=>e.shopping.ingredients=o),"create-mode":!0,ref:"editableItemsRef",onOnChange:t[5]||(t[5]=(o,p)=>e.update({ingredients:o},p))},null,8,["modelValue"])]),_:1})):B("",!0)])])]),_:1})}const Fe=U(oe,[["render",ue],["__scopeId","data-v-282801ef"],["__file","createShoppingMealPlanner.vue"]]);export{Fe as default};
