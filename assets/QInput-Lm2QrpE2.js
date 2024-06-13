import{i as ke,I as O,N as le,L as P,J as k,B as G,ca as ye,F as xe,ci as Ce,O as ne,e as he,bw as be,v as we,M as Q,bZ as Me,b_ as Se,R as x,r as J,C as Re,ck as qe,a3 as ue,bG as Fe,T as W,b2 as Ve,z as Ae,bv as _e,d as Ee,x as Be,s as ie}from"./index-CmuCMgBa.js";import{u as oe}from"./uid-Bzmka5Fh.js";import{d as $e}from"./debounce-Dh_zIq8Y.js";function Oe(e){return e??null}function se(e,t){return e??(t===!0?`f_${oe()}`:null)}function Te({getValue:e,required:t=!0}={}){if(ke.value===!0){const r=e!==void 0?O(Oe(e())):O(null);return t===!0&&r.value===null&&le(()=>{r.value=`f_${oe()}`}),e!==void 0&&P(e,i=>{r.value=se(i,t)}),r}return e!==void 0?k(()=>se(e(),t)):O(`f_${oe()}`)}const de=/^on[A-Z]/;function Ie(){const{attrs:e,vnode:t}=G(),r={listeners:O({}),attributes:O({})};function i(){const f={},d={};for(const v in e)v!=="class"&&v!=="style"&&de.test(v)===!1&&(f[v]=e[v]);for(const v in t.props)de.test(v)===!0&&(d[v]=t.props[v]);r.attributes.value=f,r.listeners.value=d}return ye(i),i(),r}function Pe({validate:e,resetValidation:t,requiresQForm:r}){const i=xe(Ce,!1);if(i!==!1){const{props:f,proxy:d}=G();Object.assign(d,{validate:e,resetValidation:t}),P(()=>f.disable,v=>{v===!0?(typeof t=="function"&&t(),i.unbindComponent(d)):i.bindComponent(d)}),le(()=>{f.disable!==!0&&i.bindComponent(d)}),ne(()=>{f.disable!==!0&&i.unbindComponent(d)})}else r===!0&&console.error("Parent QForm not found on useFormChild()!")}const fe=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ce=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ve=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,X=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ee=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ae={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>fe.test(e),hexaColor:e=>ce.test(e),hexOrHexaColor:e=>ve.test(e),rgbColor:e=>X.test(e),rgbaColor:e=>ee.test(e),rgbOrRgbaColor:e=>X.test(e)||ee.test(e),hexOrRgbColor:e=>fe.test(e)||X.test(e),hexaOrRgbaColor:e=>ce.test(e)||ee.test(e),anyColor:e=>ve.test(e)||X.test(e)||ee.test(e)},je=[!0,!1,"ondemand"],De={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>je.includes(e)}};function ze(e,t){const{props:r,proxy:i}=G(),f=O(!1),d=O(null),v=O(!1);Pe({validate:D,resetValidation:j});let C=0,E;const R=k(()=>r.rules!==void 0&&r.rules!==null&&r.rules.length!==0),w=k(()=>r.disable!==!0&&R.value===!0&&t.value===!1),b=k(()=>r.error===!0||f.value===!0),U=k(()=>typeof r.errorMessage=="string"&&r.errorMessage.length!==0?r.errorMessage:d.value);P(()=>r.modelValue,()=>{v.value=!0,w.value===!0&&r.lazyRules===!1&&T()});function $(){r.lazyRules!=="ondemand"&&w.value===!0&&v.value===!0&&T()}P(()=>r.reactiveRules,N=>{N===!0?E===void 0&&(E=P(()=>r.rules,$,{immediate:!0,deep:!0})):E!==void 0&&(E(),E=void 0)},{immediate:!0}),P(()=>r.lazyRules,$),P(e,N=>{N===!0?v.value=!0:w.value===!0&&r.lazyRules!=="ondemand"&&T()});function j(){C++,t.value=!1,v.value=!1,f.value=!1,d.value=null,T.cancel()}function D(N=r.modelValue){if(r.disable===!0||R.value===!1)return!0;const A=++C,H=t.value!==!0?()=>{v.value=!0}:()=>{},L=(S,M)=>{S===!0&&H(),f.value=S,d.value=M||null,t.value=!1},z=[];for(let S=0;S<r.rules.length;S++){const M=r.rules[S];let B;if(typeof M=="function"?B=M(N,ae):typeof M=="string"&&ae[M]!==void 0&&(B=ae[M](N)),B===!1||typeof B=="string")return L(!0,B),!1;B!==!0&&B!==void 0&&z.push(B)}return z.length===0?(L(!1),!0):(t.value=!0,Promise.all(z).then(S=>{if(S===void 0||Array.isArray(S)===!1||S.length===0)return A===C&&L(!1),!0;const M=S.find(B=>B===!1||typeof B=="string");return A===C&&L(M!==void 0,M),M===void 0},S=>(A===C&&(console.error(S),L(!0)),!1)))}const T=$e(D,0);return ne(()=>{E!==void 0&&E(),T.cancel()}),Object.assign(i,{resetValidation:j,validate:D}),he(i,"hasError",()=>b.value),{isDirtyModel:v,hasRules:R,hasError:b,errorMessage:U,validate:D,resetValidation:j}}function re(e){return e!=null&&(""+e).length!==0}const Ne={...Ae,...De,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},Le={...Ne,maxlength:[Number,String]},Ke=["update:modelValue","clear","focus","blur"];function Ze({requiredForAttr:e=!0,tagProp:t,changeEvent:r=!1}={}){const{props:i,proxy:f}=G(),d=Re(i,f.$q),v=Te({required:e,getValue:()=>i.for});return{requiredForAttr:e,changeEvent:r,tag:t===!0?k(()=>i.tag):{value:"label"},isDark:d,editable:k(()=>i.disable!==!0&&i.readonly!==!0),innerLoading:O(!1),focused:O(!1),hasPopupOpen:!1,splitAttrs:Ie(),targetUid:v,rootRef:O(null),targetRef:O(null),controlRef:O(null)}}function Ue(e){const{props:t,emit:r,slots:i,attrs:f,proxy:d}=G(),{$q:v}=d;let C=null;e.hasValue===void 0&&(e.hasValue=k(()=>re(t.modelValue))),e.emitValue===void 0&&(e.emitValue=u=>{r("update:modelValue",u)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:a,onFocusout:n}),Object.assign(e,{clearValue:s,onControlFocusin:a,onControlFocusout:n,focus:M}),e.computedCounter===void 0&&(e.computedCounter=k(()=>{if(t.counter!==!1){const u=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,c=t.maxlength!==void 0?t.maxlength:t.maxValues;return u+(c!==void 0?" / "+c:"")}}));const{isDirtyModel:E,hasRules:R,hasError:w,errorMessage:b,resetValidation:U}=ze(e.focused,e.innerLoading),$=e.floatingLabel!==void 0?k(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):k(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),j=k(()=>t.bottomSlots===!0||t.hint!==void 0||R.value===!0||t.counter===!0||t.error!==null),D=k(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),T=k(()=>`q-field row no-wrap items-start q-field--${D.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+($.value===!0?" q-field--float":"")+(A.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(w.value===!0?" q-field--error":"")+(w.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&j.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),N=k(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(w.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),A=k(()=>t.labelSlot===!0||t.label!==void 0),H=k(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&w.value!==!0?` text-${t.labelColor}`:"")),L=k(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:$.value,modelValue:t.modelValue,emitValue:e.emitValue})),z=k(()=>{const u={};return e.targetUid.value&&(u.for=e.targetUid.value),t.disable===!0&&(u["aria-disabled"]="true"),u});function S(){const u=document.activeElement;let c=e.targetRef!==void 0&&e.targetRef.value;c&&(u===null||u.id!==e.targetUid.value)&&(c.hasAttribute("tabindex")===!0||(c=c.querySelector("[tabindex]")),c&&c!==u&&c.focus({preventScroll:!0}))}function M(){be(S)}function B(){qe(S);const u=document.activeElement;u!==null&&e.rootRef.value.contains(u)&&u.blur()}function a(u){C!==null&&(clearTimeout(C),C=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,r("focus",u))}function n(u,c){C!==null&&clearTimeout(C),C=setTimeout(()=>{C=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,r("blur",u)),c!==void 0&&c())})}function s(u){we(u),v.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),r("update:modelValue",null),e.changeEvent===!0&&r("change",null),r("clear",t.modelValue),Q(()=>{const c=E.value;U(),E.value=c})}function o(u){[13,32].includes(u.keyCode)&&s(u)}function h(){const u=[];return i.prepend!==void 0&&u.push(x("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:J},i.prepend())),u.push(x("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),w.value===!0&&t.noErrorIcon===!1&&u.push(m("error",[x(ue,{name:v.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?u.push(m("inner-loading-append",i.loading!==void 0?i.loading():[x(Fe,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&u.push(m("inner-clearable-append",[x(ue,{class:"q-field__focusable-action",name:t.clearIcon||v.iconSet.field.clear,tabindex:0,role:"button","aria-label":v.lang.label.clear,onKeyup:o,onClick:s})])),i.append!==void 0&&u.push(x("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:J},i.append())),e.getInnerAppend!==void 0&&u.push(m("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&u.push(e.getControlChild()),u}function g(){const u=[];return t.prefix!==void 0&&t.prefix!==null&&u.push(x("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&u.push(e.getShadowControl()),e.getControl!==void 0?u.push(e.getControl()):i.rawControl!==void 0?u.push(i.rawControl()):i.control!==void 0&&u.push(x("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(L.value))),A.value===!0&&u.push(x("div",{class:H.value},W(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&u.push(x("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),u.concat(W(i.default))}function q(){let u,c;w.value===!0?b.value!==null?(u=[x("div",{role:"alert"},b.value)],c=`q--slot-error-${b.value}`):(u=W(i.error),c="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(u=[x("div",t.hint)],c=`q--slot-hint-${t.hint}`):(u=W(i.hint),c="q--slot-hint"));const y=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&y===!1&&u===void 0)return;const F=x("div",{key:c,class:"q-field__messages col"},u);return x("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:J},[t.hideBottomSpace===!0?F:x(Ve,{name:"q-transition--field-message"},()=>F),y===!0?x("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function m(u,c){return c===null?null:x("div",{key:u,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},c)}let p=!1;return Me(()=>{p=!0}),Se(()=>{p===!0&&t.autofocus===!0&&d.focus()}),t.autofocus===!0&&le(()=>{d.focus()}),ne(()=>{C!==null&&clearTimeout(C)}),Object.assign(d,{focus:M,blur:B}),function(){const c=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...z.value}:z.value;return x(e.tag.value,{ref:e.rootRef,class:[T.value,f.class],style:f.style,...c},[i.before!==void 0?x("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:J},i.before()):null,x("div",{class:"q-field__inner relative-position col self-stretch"},[x("div",{ref:e.controlRef,class:N.value,tabindex:-1,...e.controlEvents},h()),j.value===!0?q():null]),i.after!==void 0?x("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:J},i.after()):null])}}const ge={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},te={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},pe=Object.keys(te);pe.forEach(e=>{te[e].regex=new RegExp(te[e].pattern)});const He=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+pe.join("")+"])|(.)","g"),me=/[.*+?^${}()|[\]\\]/g,_="",Qe={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Ye(e,t,r,i){let f,d,v,C,E,R;const w=O(null),b=O($());function U(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}P(()=>e.type+e.autogrow,D),P(()=>e.mask,a=>{if(a!==void 0)T(b.value,!0);else{const n=M(b.value);D(),e.modelValue!==n&&t("update:modelValue",n)}}),P(()=>e.fillMask+e.reverseFillMask,()=>{w.value===!0&&T(b.value,!0)}),P(()=>e.unmaskedValue,()=>{w.value===!0&&T(b.value)});function $(){if(D(),w.value===!0){const a=z(M(e.modelValue));return e.fillMask!==!1?B(a):a}return e.modelValue}function j(a){if(a<f.length)return f.slice(-a);let n="",s=f;const o=s.indexOf(_);if(o!==-1){for(let h=a-s.length;h>0;h--)n+=_;s=s.slice(0,o)+n+s.slice(o)}return s}function D(){if(w.value=e.mask!==void 0&&e.mask.length!==0&&U(),w.value===!1){C=void 0,f="",d="";return}const a=ge[e.mask]===void 0?e.mask:ge[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=n.replace(me,"\\$&"),o=[],h=[],g=[];let q=e.reverseFillMask===!0,m="",p="";a.replace(He,(F,l,V,Z,K)=>{if(Z!==void 0){const I=te[Z];g.push(I),p=I.negate,q===!0&&(h.push("(?:"+p+"+)?("+I.pattern+"+)?(?:"+p+"+)?("+I.pattern+"+)?"),q=!1),h.push("(?:"+p+"+)?("+I.pattern+")?")}else if(V!==void 0)m="\\"+(V==="\\"?"":V),g.push(V),o.push("([^"+m+"]+)?"+m+"?");else{const I=l!==void 0?l:K;m=I==="\\"?"\\\\\\\\":I.replace(me,"\\\\$&"),g.push(I),o.push("([^"+m+"]+)?"+m+"?")}});const u=new RegExp("^"+o.join("")+"("+(m===""?".":"[^"+m+"]")+"+)?"+(m===""?"":"["+m+"]*")+"$"),c=h.length-1,y=h.map((F,l)=>l===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+F):l===c?new RegExp("^"+F+"("+(p===""?".":p)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+F));v=g,C=F=>{const l=u.exec(e.reverseFillMask===!0?F:F.slice(0,g.length+1));l!==null&&(F=l.slice(1).join(""));const V=[],Z=y.length;for(let K=0,I=F;K<Z;K++){const Y=y[K].exec(I);if(Y===null)break;I=I.slice(Y.shift().length),V.push(...Y)}return V.length!==0?V.join(""):F},f=g.map(F=>typeof F=="string"?F:_).join(""),d=f.split(_).join(n)}function T(a,n,s){const o=i.value,h=o.selectionEnd,g=o.value.length-h,q=M(a);n===!0&&D();const m=z(q),p=e.fillMask!==!1?B(m):m,u=b.value!==p;o.value!==p&&(o.value=p),u===!0&&(b.value=p),document.activeElement===o&&Q(()=>{if(p===d){const y=e.reverseFillMask===!0?d.length:0;o.setSelectionRange(y,y,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const y=o.selectionEnd;let F=h-1;for(let l=E;l<=F&&l<y;l++)f[l]!==_&&F++;A.right(o,F);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)!==-1){const y=e.reverseFillMask===!0?h===0?p.length>m.length?1:0:Math.max(0,p.length-(p===d?0:Math.min(m.length,g)+1))+1:h;o.setSelectionRange(y,y,"forward");return}if(e.reverseFillMask===!0)if(u===!0){const y=Math.max(0,p.length-(p===d?0:Math.min(m.length,g+1)));y===1&&h===1?o.setSelectionRange(y,y,"forward"):A.rightReverse(o,y)}else{const y=p.length-g;o.setSelectionRange(y,y,"backward")}else if(u===!0){const y=Math.max(0,f.indexOf(_),Math.min(m.length,h)-1);A.right(o,y)}else{const y=h-1;A.right(o,y)}});const c=e.unmaskedValue===!0?M(p):p;String(e.modelValue)!==c&&(e.modelValue!==null||c!=="")&&r(c,!0)}function N(a,n,s){const o=z(M(a.value));n=Math.max(0,f.indexOf(_),Math.min(o.length,n)),E=n,a.setSelectionRange(n,s,"forward")}const A={left(a,n){const s=f.slice(n-1).indexOf(_)===-1;let o=Math.max(0,n-1);for(;o>=0;o--)if(f[o]===_){n=o,s===!0&&n++;break}if(o<0&&f[n]!==void 0&&f[n]!==_)return A.right(a,0);n>=0&&a.setSelectionRange(n,n,"backward")},right(a,n){const s=a.value.length;let o=Math.min(s,n+1);for(;o<=s;o++)if(f[o]===_){n=o;break}else f[o-1]===_&&(n=o);if(o>s&&f[n-1]!==void 0&&f[n-1]!==_)return A.left(a,s);a.setSelectionRange(n,n,"forward")},leftReverse(a,n){const s=j(a.value.length);let o=Math.max(0,n-1);for(;o>=0;o--)if(s[o-1]===_){n=o;break}else if(s[o]===_&&(n=o,o===0))break;if(o<0&&s[n]!==void 0&&s[n]!==_)return A.rightReverse(a,0);n>=0&&a.setSelectionRange(n,n,"backward")},rightReverse(a,n){const s=a.value.length,o=j(s),h=o.slice(0,n+1).indexOf(_)===-1;let g=Math.min(s,n+1);for(;g<=s;g++)if(o[g-1]===_){n=g,n>0&&h===!0&&n--;break}if(g>s&&o[n-1]!==void 0&&o[n-1]!==_)return A.leftReverse(a,s);a.setSelectionRange(n,n,"forward")}};function H(a){t("click",a),R=void 0}function L(a){if(t("keydown",a),_e(a)===!0||a.altKey===!0)return;const n=i.value,s=n.selectionStart,o=n.selectionEnd;if(a.shiftKey||(R=void 0),a.keyCode===37||a.keyCode===39){a.shiftKey&&R===void 0&&(R=n.selectionDirection==="forward"?s:o);const h=A[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(a.preventDefault(),h(n,R===s?o:s),a.shiftKey){const g=n.selectionStart;n.setSelectionRange(Math.min(R,g),Math.max(R,g),"forward")}}else a.keyCode===8&&e.reverseFillMask!==!0&&s===o?(A.left(n,s),n.setSelectionRange(n.selectionStart,o,"backward")):a.keyCode===46&&e.reverseFillMask===!0&&s===o&&(A.rightReverse(n,o),n.setSelectionRange(s,n.selectionEnd,"forward"))}function z(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return S(a);const n=v;let s=0,o="";for(let h=0;h<n.length;h++){const g=a[s],q=n[h];if(typeof q=="string")o+=q,g===q&&s++;else if(g!==void 0&&q.regex.test(g))o+=q.transform!==void 0?q.transform(g):g,s++;else return o}return o}function S(a){const n=v,s=f.indexOf(_);let o=a.length-1,h="";for(let g=n.length-1;g>=0&&o!==-1;g--){const q=n[g];let m=a[o];if(typeof q=="string")h=q+h,m===q&&o--;else if(m!==void 0&&q.regex.test(m))do h=(q.transform!==void 0?q.transform(m):m)+h,o--,m=a[o];while(s===g&&m!==void 0&&q.regex.test(m));else return h}return h}function M(a){return typeof a!="string"||C===void 0?typeof a=="number"?C(""+a):a:C(a)}function B(a){return d.length-a.length<=0?a:e.reverseFillMask===!0&&a.length!==0?d.slice(0,-a.length)+a:a+d.slice(a.length)}return{innerValue:b,hasMask:w,moveCursorForPaste:N,updateMaskValue:T,onMaskedKeydown:L,onMaskedClick:H}}const Ge={name:String};function ut(e){return k(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function it(e={}){return(t,r,i)=>{t[r](x("input",{class:"hidden"+(i||""),...e.value}))}}function Je(e){return k(()=>e.name||e.for)}function We(e,t){function r(){const i=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return k(()=>{if(e.type==="file")return r()})}const Xe=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,et=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,tt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,lt=/[a-z0-9_ -]$/i;function nt(e){return function(r){if(r.type==="compositionend"||r.type==="change"){if(r.target.qComposing!==!0)return;r.target.qComposing=!1,e(r)}else r.type==="compositionupdate"&&r.target.qComposing!==!0&&typeof r.data=="string"&&(Ee.is.firefox===!0?lt.test(r.data)===!1:Xe.test(r.data)===!0||et.test(r.data)===!0||tt.test(r.data)===!0)===!0&&(r.target.qComposing=!0)}}const st=Be({name:"QInput",inheritAttrs:!1,props:{...Le,...Qe,...Ge,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ke,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:r}){const{proxy:i}=G(),{$q:f}=i,d={};let v=NaN,C,E,R=null,w;const b=O(null),U=Je(e),{innerValue:$,hasMask:j,moveCursorForPaste:D,updateMaskValue:T,onMaskedKeydown:N,onMaskedClick:A}=Ye(e,t,m,b),H=We(e),L=k(()=>re($.value)),z=nt(g),S=Ze({changeEvent:!0}),M=k(()=>e.type==="textarea"||e.autogrow===!0),B=k(()=>M.value===!0||["text","search","url","tel","password"].includes(e.type)),a=k(()=>{const l={...S.splitAttrs.listeners.value,onInput:g,onPaste:h,onChange:u,onBlur:c,onFocus:ie};return l.onCompositionstart=l.onCompositionupdate=l.onCompositionend=z,j.value===!0&&(l.onKeydown=N,l.onClick=A),e.autogrow===!0&&(l.onAnimationend=q),l}),n=k(()=>{const l={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:U.value,...S.splitAttrs.attributes.value,id:S.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return M.value===!1&&(l.type=e.type),e.autogrow===!0&&(l.rows=1),l});P(()=>e.type,()=>{b.value&&(b.value.value=e.modelValue)}),P(()=>e.modelValue,l=>{if(j.value===!0){if(E===!0&&(E=!1,String(l)===v))return;T(l)}else $.value!==l&&($.value=l,e.type==="number"&&d.hasOwnProperty("value")===!0&&(C===!0?C=!1:delete d.value));e.autogrow===!0&&Q(p)}),P(()=>e.autogrow,l=>{l===!0?Q(p):b.value!==null&&r.rows>0&&(b.value.style.height="auto")}),P(()=>e.dense,()=>{e.autogrow===!0&&Q(p)});function s(){be(()=>{const l=document.activeElement;b.value!==null&&b.value!==l&&(l===null||l.id!==S.targetUid.value)&&b.value.focus({preventScroll:!0})})}function o(){b.value!==null&&b.value.select()}function h(l){if(j.value===!0&&e.reverseFillMask!==!0){const V=l.target;D(V,V.selectionStart,V.selectionEnd)}t("paste",l)}function g(l){if(!l||!l.target)return;if(e.type==="file"){t("update:modelValue",l.target.files);return}const V=l.target.value;if(l.target.qComposing===!0){d.value=V;return}if(j.value===!0)T(V,!1,l.inputType);else if(m(V),B.value===!0&&l.target===document.activeElement){const{selectionStart:Z,selectionEnd:K}=l.target;Z!==void 0&&K!==void 0&&Q(()=>{l.target===document.activeElement&&V.indexOf(l.target.value)===0&&l.target.setSelectionRange(Z,K)})}e.autogrow===!0&&p()}function q(l){t("animationend",l),p()}function m(l,V){w=()=>{R=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==l&&v!==l&&(v=l,V===!0&&(E=!0),t("update:modelValue",l),Q(()=>{v===l&&(v=NaN)})),w=void 0},e.type==="number"&&(C=!0,d.value=l),e.debounce!==void 0?(R!==null&&clearTimeout(R),d.value=l,R=setTimeout(w,e.debounce)):w()}function p(){requestAnimationFrame(()=>{const l=b.value;if(l!==null){const V=l.parentNode.style,{scrollTop:Z}=l,{overflowY:K,maxHeight:I}=f.platform.is.firefox===!0?{}:window.getComputedStyle(l),Y=K!==void 0&&K!=="scroll";Y===!0&&(l.style.overflowY="hidden"),V.marginBottom=l.scrollHeight-1+"px",l.style.height="1px",l.style.height=l.scrollHeight+"px",Y===!0&&(l.style.overflowY=parseInt(I,10)<l.scrollHeight?"auto":"hidden"),V.marginBottom="",l.scrollTop=Z}})}function u(l){z(l),R!==null&&(clearTimeout(R),R=null),w!==void 0&&w(),t("change",l.target.value)}function c(l){l!==void 0&&ie(l),R!==null&&(clearTimeout(R),R=null),w!==void 0&&w(),C=!1,E=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{b.value!==null&&(b.value.value=$.value!==void 0?$.value:"")})}function y(){return d.hasOwnProperty("value")===!0?d.value:$.value!==void 0?$.value:""}ne(()=>{c()}),le(()=>{e.autogrow===!0&&p()}),Object.assign(S,{innerValue:$,fieldClass:k(()=>`q-${M.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:k(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:b,emitValue:m,hasValue:L,floatingLabel:k(()=>L.value===!0&&(e.type!=="number"||isNaN($.value)===!1)||re(e.displayValue)),getControl:()=>x(M.value===!0?"textarea":"input",{ref:b,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...n.value,...a.value,...e.type!=="file"?{value:y()}:H.value}),getShadowControl:()=>x("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(M.value===!0?"":" text-no-wrap")},[x("span",{class:"invisible"},y()),x("span",e.shadowText)])});const F=Ue(S);return Object.assign(i,{focus:s,select:o,getNativeElement:()=>b.value}),he(i,"nativeEl",()=>b.value),F}});export{st as Q,Ge as a,ut as b,it as c,Ie as d,Le as e,Ke as f,Ue as g,Ze as h,Je as i,re as j,nt as k,Te as u};
