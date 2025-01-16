import{c as de,d as X,u as Me,a as fe,b as m,n as Y,t as le,F as me,p as j,w as ge,g as Ae,s as pe,i as Le,e as Re,f as Ne,h as Fe,j as $e,m as U,k as qe,l as ze,r as Oe,o as I,q as De,v as L,x as oe,y as We,C as je,z as Ue,A as Ye,B as D,D as He,E as Ke,G as Ge,H as R,I as ie,J as Je,K as Ze,L as K,M as Qe,N as Q,O as Xe,P as W,Q as re,R as G,S as $,T as se,U as q,V as J,W as et,X as tt,Y as nt,Z as at,_ as lt,$ as ot}from"./index-GgF00izq.js";import{C as it}from"./index-CHfqlqMS.js";const[rt,st]=de("form"),ut={colon:Boolean,disabled:Boolean,readonly:Boolean,required:[Boolean,String],showError:Boolean,labelWidth:Y,labelAlign:String,inputAlign:String,scrollToError:Boolean,scrollToErrorPosition:String,validateFirst:Boolean,submitOnEnter:le,showErrorMessage:le,errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}};var ct=X({name:rt,props:ut,emits:["submit","failed"],setup(e,{emit:a,slots:s}){const{children:u,linkChildren:o}=Me(me),c=n=>n?u.filter(r=>n.includes(r.name)):u,V=n=>new Promise((r,v)=>{const S=[];c(n).reduce((H,N)=>H.then(()=>{if(!S.length)return N.validate().then(F=>{F&&S.push(F)})}),Promise.resolve()).then(()=>{S.length?v(S):r()})}),k=n=>new Promise((r,v)=>{const S=c(n);Promise.all(S.map(y=>y.validate())).then(y=>{y=y.filter(Boolean),y.length?v(y):r()})}),b=n=>{const r=u.find(v=>v.name===n);return r?new Promise((v,S)=>{r.validate().then(y=>{y?S(y):v()})}):Promise.reject()},C=n=>typeof n=="string"?b(n):e.validateFirst?V(n):k(n),g=n=>{typeof n=="string"&&(n=[n]),c(n).forEach(v=>{v.resetValidation()})},w=()=>u.reduce((n,r)=>(n[r.name]=r.getValidationStatus(),n),{}),d=(n,r)=>{u.some(v=>v.name===n?(v.$el.scrollIntoView(r),!0):!1)},T=()=>u.reduce((n,r)=>(r.name!==void 0&&(n[r.name]=r.formValue.value),n),{}),M=()=>{const n=T();C().then(()=>a("submit",n)).catch(r=>{a("failed",{values:n,errors:r});const{scrollToError:v,scrollToErrorPosition:S}=e;v&&r[0].name&&d(r[0].name,S?{block:S}:void 0)})},P=n=>{j(n),M()};return o({props:e}),fe({submit:M,validate:C,getValues:T,scrollToField:d,resetValidation:g,getValidationStatus:w}),()=>{var n;return m("form",{class:st(),onSubmit:P},[(n=s.default)==null?void 0:n.call(s)])}}});const dt=ge(ct);function ve(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function ft(e,a){if(ve(e)){if(a.required)return!1;if(a.validateEmpty===!1)return!0}return!(a.pattern&&!a.pattern.test(String(e)))}function mt(e,a){return new Promise(s=>{const u=a.validator(e,a);if(Le(u)){u.then(s);return}s(u)})}function ue(e,a){const{message:s}=a;return Re(s)?s(e,a):s||""}function gt({target:e}){e.composing=!0}function ce({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function vt(e,a){const s=Ae();e.style.height="auto";let u=e.scrollHeight;if(Ne(a)){const{maxHeight:o,minHeight:c}=a;o!==void 0&&(u=Math.min(u,o)),c!==void 0&&(u=Math.max(u,c))}u&&(e.style.height=`${u}px`,pe(s))}function ht(e){return e==="number"?{type:"text",inputmode:"decimal"}:e==="digit"?{type:"tel",inputmode:"numeric"}:{type:e}}function B(e){return[...e].length}function Z(e,a){return[...e].slice(0,a).join("")}const[bt,x]=de("field"),yt={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:Y,max:Number,min:Number,formatter:Function,clearIcon:U("clear"),modelValue:Ge(""),inputAlign:String,placeholder:String,autocomplete:String,autocapitalize:String,autocorrect:String,errorMessage:String,enterkeyhint:String,clearTrigger:U("focus"),formatTrigger:U("onChange"),spellcheck:{type:Boolean,default:null},error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},St=Fe({},$e,yt,{rows:Y,type:U("text"),rules:Array,autosize:[Boolean,Object],labelWidth:Y,labelClass:qe,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var Vt=X({name:bt,props:St,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:a,slots:s}){const u=ze(),o=Oe({status:"unvalidated",focused:!1,validateMessage:""}),c=I(),V=I(),k=I(),{parent:b}=De(me),C=()=>{var t;return String((t=e.modelValue)!=null?t:"")},g=t=>{if(R(e[t]))return e[t];if(b&&R(b.props[t]))return b.props[t]},w=L(()=>{const t=g("readonly");if(e.clearable&&!t){const l=C()!=="",i=e.clearTrigger==="always"||e.clearTrigger==="focus"&&o.focused;return l&&i}return!1}),d=L(()=>k.value&&s.input?k.value():e.modelValue),T=L(()=>{var t;const l=g("required");return l==="auto"?(t=e.rules)==null?void 0:t.some(i=>i.required):l}),M=t=>t.reduce((l,i)=>l.then(()=>{if(o.status==="failed")return;let{value:f}=d;if(i.formatter&&(f=i.formatter(f,i)),!ft(f,i)){o.status="failed",o.validateMessage=ue(f,i);return}if(i.validator)return ve(f)&&i.validateEmpty===!1?void 0:mt(f,i).then(h=>{h&&typeof h=="string"?(o.status="failed",o.validateMessage=h):h===!1&&(o.status="failed",o.validateMessage=ue(f,i))})}),Promise.resolve()),P=()=>{o.status="unvalidated",o.validateMessage=""},n=()=>a("endValidate",{status:o.status,message:o.validateMessage}),r=(t=e.rules)=>new Promise(l=>{P(),t?(a("startValidate"),M(t).then(()=>{o.status==="failed"?(l({name:e.name,message:o.validateMessage}),n()):(o.status="passed",l(),n())})):l()}),v=t=>{if(b&&e.rules){const{validateTrigger:l}=b.props,i=ie(l).includes(t),f=e.rules.filter(h=>h.trigger?ie(h.trigger).includes(t):i);f.length&&r(f)}},S=t=>{var l;const{maxlength:i}=e;if(R(i)&&B(t)>+i){const f=C();if(f&&B(f)===+i)return f;const h=(l=c.value)==null?void 0:l.selectionEnd;if(o.focused&&h){const A=[...t],p=A.length-+i;return A.splice(h-p,p),A.join("")}return Z(t,+i)}return t},y=(t,l="onChange")=>{var i,f;const h=t;t=S(t);const A=B(h)-B(t);if(e.type==="number"||e.type==="digit"){const _=e.type==="number";t=Je(t,_,_),l==="onBlur"&&t!==""&&(e.min!==void 0||e.max!==void 0)&&(t=Ze(+t,(i=e.min)!=null?i:-1/0,(f=e.max)!=null?f:1/0).toString())}let p=0;if(e.formatter&&l===e.formatTrigger){const{formatter:_,maxlength:E}=e;if(t=_(t),R(E)&&B(t)>+E&&(t=Z(t,+E)),c.value&&o.focused){const{selectionEnd:O}=c.value,ae=Z(h,O);p=B(_(ae))-B(ae)}}if(c.value&&c.value.value!==t)if(o.focused){let{selectionStart:_,selectionEnd:E}=c.value;if(c.value.value=t,R(_)&&R(E)){const O=B(t);A?(_-=A,E-=A):p&&(_+=p,E+=p),c.value.setSelectionRange(Math.min(_,O),Math.min(E,O))}}else c.value.value=t;t!==e.modelValue&&a("update:modelValue",t)},H=t=>{t.target.composing||y(t.target.value)},N=()=>{var t;return(t=c.value)==null?void 0:t.blur()},F=()=>{var t;return(t=c.value)==null?void 0:t.focus()},z=()=>{const t=c.value;e.type==="textarea"&&e.autosize&&t&&vt(t,e.autosize)},he=t=>{o.focused=!0,a("focus",t),D(z),g("readonly")&&N()},be=t=>{o.focused=!1,y(C(),"onBlur"),a("blur",t),!g("readonly")&&(v("onBlur"),D(z),Xe())},ee=t=>a("clickInput",t),ye=t=>a("clickLeftIcon",t),Se=t=>a("clickRightIcon",t),Ve=t=>{j(t),a("update:modelValue",""),a("clear",t)},te=L(()=>{if(typeof e.error=="boolean")return e.error;if(b&&b.props.showError&&o.status==="failed")return!0}),xe=L(()=>{const t=g("labelWidth"),l=g("labelAlign");if(t&&l!=="top")return{width:oe(t)}}),Ce=t=>{t.keyCode===13&&(!(b&&b.props.submitOnEnter)&&e.type!=="textarea"&&j(t),e.type==="search"&&N()),a("keypress",t)},ne=()=>e.id||`${u}-input`,ke=()=>o.status,_e=()=>{const t=x("control",[g("inputAlign"),{error:te.value,custom:!!s.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(s.input)return m("div",{class:t,onClick:ee},[s.input()]);const l={id:ne(),ref:c,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:t,disabled:g("disabled"),readonly:g("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,enterkeyhint:e.enterkeyhint,spellcheck:e.spellcheck,"aria-labelledby":e.label?`${u}-label`:void 0,"data-allow-mismatch":"attribute",onBlur:be,onFocus:he,onInput:H,onClick:ee,onChange:ce,onKeypress:Ce,onCompositionend:ce,onCompositionstart:gt};return e.type==="textarea"?m("textarea",l,null):m("input",Qe(ht(e.type),l),null)},Ie=()=>{const t=s["left-icon"];if(e.leftIcon||t)return m("div",{class:x("left-icon"),onClick:ye},[t?t():m(K,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},we=()=>{const t=s["right-icon"];if(e.rightIcon||t)return m("div",{class:x("right-icon"),onClick:Se},[t?t():m(K,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},Ee=()=>{if(e.showWordLimit&&e.maxlength){const t=B(C());return m("div",{class:x("word-limit")},[m("span",{class:x("word-num")},[t]),Q("/"),e.maxlength])}},Be=()=>{if(b&&b.props.showErrorMessage===!1)return;const t=e.errorMessage||o.validateMessage;if(t){const l=s["error-message"],i=g("errorMessageAlign");return m("div",{class:x("error-message",i)},[l?l({message:t}):t])}},Te=()=>{const t=g("labelWidth"),l=g("labelAlign"),i=g("colon")?":":"";if(s.label)return[s.label(),i];if(e.label)return m("label",{id:`${u}-label`,for:s.input?void 0:ne(),"data-allow-mismatch":"attribute",onClick:f=>{j(f),F()},style:l==="top"&&t?{width:oe(t)}:void 0},[e.label+i])},Pe=()=>[m("div",{class:x("body")},[_e(),w.value&&m(K,{ref:V,name:e.clearIcon,class:x("clear")},null),we(),s.button&&m("div",{class:x("button")},[s.button()])]),Ee(),Be()];return fe({blur:N,focus:F,validate:r,formValue:d,resetValidation:P,getValidationStatus:ke}),We(je,{customValue:k,resetValidation:P,validateWithTrigger:v}),Ue(()=>e.modelValue,()=>{y(C()),P(),v("onChange"),D(z)}),Ye(()=>{y(C(),e.formatTrigger),D(z)}),He("touchstart",Ve,{target:L(()=>{var t;return(t=V.value)==null?void 0:t.$el})}),()=>{const t=g("disabled"),l=g("labelAlign"),i=Ie(),f=()=>{const h=Te();return l==="top"?[i,h].filter(Boolean):h||[]};return m(Ke,{size:e.size,class:x({error:te.value,disabled:t,[`label-${l}`]:l}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:xe.value,valueClass:x("value"),titleClass:[x("label",[l,{required:T.value}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:i&&l!=="top"?()=>i:null,title:f,value:Pe,extra:s.extra})}}});const xt=ge(Vt),Ct="/vue3-h5-template/static/ico/favicon-yZ9RYYti.ico",kt={class:"container"},_t={class:"m-6"},It=X({name:"Login",__name:"index",setup(e){const a=I(!1),s=I(!1),u=I(""),o=I("");let c=I(60),V=I(60),k=I(null);const b=async()=>{if(!k.value&&V.value===c.value){const w={option:a.value?1:2,phone:u.value,type:"client"};await tt(w),nt("发送成功"),k.value=setInterval(()=>{V.value--,V.value<=0&&(clearInterval(k.value),k.value=null,V.value=c.value)},1e3)}},C=w=>{const d={...w};a.value||(d.type=s.value?"smsCodeLogin":"pwdLogin"),at().login(d,a.value),console.log("submit",w)},g=()=>{u.value="",o.value=""};return(w,d)=>{const T=xt,M=lt,P=it,n=dt;return W(),re("div",kt,[d[5]||(d[5]=G("img",{class:"logo",src:Ct,alt:"",srcset:""},null,-1)),m(n,{onSubmit:C},{default:$(()=>[m(P,{inset:""},{default:$(()=>[m(T,{modelValue:u.value,"onUpdate:modelValue":d[0]||(d[0]=r=>u.value=r),name:"mobile",label:"手机号",placeholder:"手机号",rules:[{required:!0,message:"请填写手机号"}]},null,8,["modelValue"]),s.value?(W(),se(T,{key:1,modelValue:o.value,"onUpdate:modelValue":d[2]||(d[2]=r=>o.value=r),clearable:"",name:"code",label:"验证码",placeholder:"验证码",rules:[{required:!0,message:"请填写验证码"}]},{button:$(()=>[m(M,{size:"small",disabled:!u.value||q(V)!==q(c),onClick:b},{default:$(()=>[Q(J(q(V)===q(c)?"获取验证码":q(V)+"s 重新发送"),1)]),_:1},8,["disabled"])]),_:1},8,["modelValue"])):(W(),se(T,{key:0,modelValue:o.value,"onUpdate:modelValue":d[1]||(d[1]=r=>o.value=r),type:"password",name:"code",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue"]))]),_:1}),G("div",_t,[m(M,{round:"",block:"",type:"danger","native-type":"submit"},{default:$(()=>[Q(J(a.value?"注册":"登录"),1)]),_:1}),G("div",{class:"text-center text-xl text-current p-6",onClick:d[3]||(d[3]=r=>{a.value=!1,s.value=!s.value,g()})},J(s.value?"账号密码登录":"手机短信登录"),1),a.value?et("",!0):(W(),re("div",{key:0,class:"text-center text-large text-red-500 p-6",onClick:d[4]||(d[4]=r=>{a.value=!0,s.value=!0,g()})}," 快速注册 "))])]),_:1})])}}}),Bt=ot(It,[["__scopeId","data-v-18a4e412"]]);export{Bt as default};
