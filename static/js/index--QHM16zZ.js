import{d as g,A as l,q as n,o,e as r,f as e,k as h,b as s,g as a,x as _,D as k,h as y,j as b,H as C,B as N,_ as B}from"./index-DqmQnYxG.js";import{C as M}from"./index-CEOxUoRy.js";import{_ as w}from"./index-Cx7M4Bya.js";const D={class:"bg-slate-600 p-6 flex items-center mb-8"},V=["src"],j={class:"text-white text-2xl"},A={class:"w-full flex justify-center"},E=g({name:"My",__name:"index",setup(S){const c=l({avatar:n().user.avatar||"https://avatars.githubusercontent.com/u/40857942?v=4",nickName:n().user.nickName||""}),u=l([{icon:"hugeicons:online-learning-01",title:"我的课程",to:{name:"MyCourse"}},{icon:"lets-icons:order",title:"订单中心",to:{name:"MyOrder"}},{icon:"ic:baseline-dvr",title:"我的考试",to:{name:"MyExam"}},{icon:"ic:round-card-membership",title:"我的证书",to:{name:"MyCertificate"}},{icon:"ic:round-event-note",title:"我的笔记",to:{name:"MyNote"}}]),d=()=>{n().logout()};return(q,i)=>{const m=w,p=C,f=M,x=N;return o(),r(_,null,[e("div",D,[e("img",{class:"mr-4 w-16 h-16 rounded-full",src:c.avatar,alt:"",srcset:""},null,8,V),e("div",j,h(c.nickName),1)]),s(f,{class:"mb-8"},{default:a(()=>[(o(!0),r(_,null,k(u,(t,v)=>(o(),y(p,{key:v,size:"large",icon:t.icon,title:t.title,"is-link":"",to:t.to},{icon:a(()=>[s(m,{icon:t.icon,class:"mr-4 text-2xl"},null,8,["icon"])]),_:2},1032,["icon","title","to"]))),128))]),_:1}),e("div",A,[s(x,{class:"w-80",round:"",type:"danger",onClick:d},{default:a(()=>i[0]||(i[0]=[b("退出登录")])),_:1})])],64)}}}),H=B(E,[["__scopeId","data-v-60ed908c"]]);export{H as default};
