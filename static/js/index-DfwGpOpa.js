import{c as z,h as I,ab as R,m as l,n as C,d as w,ac as D,ad as N,b as a,I as q,p as L,ae as O,w as U}from"./index-BCpDNZSw.js";const[_,o]=z("button"),p=I({},R,{tag:l("button"),text:String,icon:String,type:l("default"),size:l("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:l("button"),loadingSize:C,loadingText:String,loadingType:String,iconPosition:l("left")});var E=w({name:_,props:p,emits:["click"],setup(n,{emit:g,slots:t}){const f=D(),b=()=>t.loading?t.loading():a(O,{size:n.loadingSize,type:n.loadingType,class:o("loading")},null),r=()=>{if(n.loading)return b();if(t.icon)return a("div",{class:o("icon")},[t.icon()]);if(n.icon)return a(q,{name:n.icon,class:o("icon"),classPrefix:n.iconPrefix},null)},m=()=>{let e;if(n.loading?e=n.loadingText:e=t.default?t.default():n.text,e)return a("span",{class:o("text")},[e])},x=()=>{const{color:e,plain:c}=n;if(e){const i={color:c?e:"white"};return c||(i.background=e),e.includes("gradient")?i.border=0:i.borderColor=e,i}},y=e=>{n.loading?L(e):n.disabled||(g("click",e),f())};return()=>{const{tag:e,type:c,size:i,block:S,round:B,plain:P,square:k,loading:T,disabled:s,hairline:d,nativeType:h,iconPosition:u}=n,v=[o([c,i,{plain:P,block:S,round:B,square:k,loading:T,disabled:s,hairline:d}]),{[N]:d}];return a(e,{type:h,class:v,style:x(),disabled:s,onClick:y},{default:()=>[a("div",{class:o("content")},[u==="left"&&r(),m(),u==="right"&&r()])]})}}});const j=U(E);export{j as B};
