import{d as g,r as l,Z as n,P as o,Q as r,R as e,V as h,b as s,S as a,a0 as _,a4 as y,T as k,N as b,E as C,_ as N,$ as M}from"./index-GgF00izq.js";import{C as w}from"./index-CHfqlqMS.js";import{_ as B}from"./index-C1H_Zaop.js";const V={class:"bg-slate-600 p-6 flex items-center mb-8"},E=["src"],S={class:"text-white text-2xl"},D={class:"w-full flex justify-center"},T=g({name:"My",__name:"index",setup(j){const c=l({avatar:n().user.avatar||"https://avatars.githubusercontent.com/u/40857942?v=4",nickName:n().user.nickName||""}),u=l([{icon:"hugeicons:online-learning-01",title:"我的课程",to:{name:"MyCourse"}},{icon:"lets-icons:order",title:"订单中心",to:{name:"MyOrder"}},{icon:"ic:baseline-dvr",title:"我的考试",to:{name:"MyExam"}},{icon:"ic:round-card-membership",title:"我的证书",to:{name:"MyCertificate"}},{icon:"ic:round-event-note",title:"我的笔记",to:{name:"MyNote"}}]),d=()=>{n().logout()};return(z,i)=>{const m=B,p=C,f=w,v=N;return o(),r(_,null,[e("div",V,[e("img",{class:"mr-4 w-16 h-16 rounded-full",src:c.avatar,alt:"",srcset:""},null,8,E),e("div",S,h(c.nickName),1)]),s(f,{class:"mb-8"},{default:a(()=>[(o(!0),r(_,null,y(u,(t,x)=>(o(),k(p,{key:x,size:"large",icon:t.icon,title:t.title,"is-link":"",to:t.to},{icon:a(()=>[s(m,{icon:t.icon,class:"mr-4 text-2xl"},null,8,["icon"])]),_:2},1032,["icon","title","to"]))),128))]),_:1}),e("div",D,[s(v,{class:"w-80",round:"",type:"danger",onClick:d},{default:a(()=>i[0]||(i[0]=[b("退出登录")])),_:1})])],64)}}}),I=M(T,[["__scopeId","data-v-60ed908c"]]);export{I as default};