import{d,a0 as m,M as _,r as f,L as v,a1 as C,m as n,_ as D,e as h,b as o,g as y,f as B,K as k,B as w,o as $,H as b}from"./index-ADPyas5r.js";import{C as g}from"./index-HfOjLsLg.js";import{a as E}from"./order-Ch7KRtZA.js";const O=d({name:"ConfirmOrder",setup(){const e=m(),r=_(),s=f({}),l=async()=>{try{const t=e.params.courseId,a=await C(t);s.value=a}catch{n("获取课程详情失败")}},c=async()=>{try{const t=await E({type:e.params.type,linkId:s.value.id});n("订单创建成功"),r.push(`/order/pay/${t.orderSn}`)}catch{n("订单创建失败")}};return v(()=>{l()}),{lessonDetail:s,onCreateOrder:c}}}),I={class:"confirm-order"},L={class:"p-4"};function A(e,r,s,l,c,t){const a=k,u=b,i=g,p=w;return $(),h("div",I,[o(a,{num:"1",price:e.lessonDetail.price,title:e.lessonDetail.title,thumb:e.lessonDetail.imgUrl},null,8,["price","title","thumb"]),o(i,{class:"mt-4"},{default:y(()=>[o(u,{title:"商品总金额",value:e.lessonDetail.price},null,8,["value"]),o(u,{title:"应付",value:e.lessonDetail.price},null,8,["value"])]),_:1}),B("div",L,[o(p,{class:"w-full",type:"primary",text:"提交订单",round:"",onClick:e.onCreateOrder},null,8,["onClick"])])])}const V=D(O,[["render",A]]);export{V as default};
