import{b as f}from"./user-BvGwxD5y.js";import{d as p,p as m,r as i,E as _,_ as g,c as o,a as n,F as h,q as v,g as E,o as s,t as u}from"./index-CPz04bbn.js";const w=p({setup(){const t=m([]),r=i(1),l=i(999),a=i(!1),c=async()=>{if(!a.value){a.value=!0;try{const e=await f({page:{size:l.value,current:r.value}});t.push(...e.records),r.value++}catch(e){console.error("Failed to fetch certificates:",e)}finally{a.value=!1}}};_(()=>{c()});const d=()=>{window.innerHeight+window.scrollY>=document.documentElement.offsetHeight&&c()};return window.addEventListener("scroll",d),{certificates:t,loading:a}}}),F={class:"certificate-list"},y={key:0,class:"loading"},B={key:1,class:"no-data"};function D(t,r,l,a,c,d){return s(),o("div",F,[n("ul",null,[(s(!0),o(h,null,v(t.certificates,e=>(s(),o("li",{key:e.id},[n("h2",null,u(e.certificateName),1),n("p",null,"课程名称: "+u(e.courseName),1),n("p",null,"获取日期: "+u(e.obtainDate),1)]))),128))]),t.loading?(s(),o("div",y,"加载中...")):t.certificates.length?E("",!0):(s(),o("div",B,"暂无证书信息"))])}const b=g(w,[["render",D],["__scopeId","data-v-d6d5c4c1"]]);export{b as default};
