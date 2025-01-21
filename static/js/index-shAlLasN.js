import{j as D,d as f,k as v,b as d,F as h,C as B,T as O,l as V,o as g,c as m,m as b,a as l,_ as A,n as k,p as E,w as _,f as z,t as $,q as x,e as j,u as P,v as G,x as I,B as N}from"./index-8QcU5NH5.js";import{_ as H}from"./index-CsgDniJm.js";const[C,q]=D("space"),R={align:String,direction:{type:String,default:"horizontal"},size:{type:[Number,String,Array],default:8},wrap:Boolean,fill:Boolean};function M(t=[]){const c=[];return t.forEach(e=>{Array.isArray(e)?c.push(...e):e.type===h?c.push(...M(e.children)):c.push(e)}),c.filter(e=>{var i;return!(e&&(e.type===B||e.type===h&&((i=e.children)==null?void 0:i.length)===0||e.type===O&&e.children.trim()===""))})}var U=f({name:C,props:R,setup(t,{slots:c}){const e=v(()=>{var s;return(s=t.align)!=null?s:t.direction==="horizontal"?"center":""}),i=s=>typeof s=="number"?s+"px":s,u=s=>{const o={},p=`${i(Array.isArray(t.size)?t.size[0]:t.size)}`,n=`${i(Array.isArray(t.size)?t.size[1]:t.size)}`;return s?t.wrap?{marginBottom:n}:{}:(t.direction==="horizontal"&&(o.marginRight=p),(t.direction==="vertical"||t.wrap)&&(o.marginBottom=n),o)};return()=>{var s;const o=M((s=c.default)==null?void 0:s.call(c));return d("div",{class:[q({[t.direction]:t.direction,[`align-${e.value}`]:e.value,wrap:t.wrap,fill:t.fill})]},[o.map((p,n)=>d("div",{key:`item-${n}`,class:`${C}-item`,style:u(n===o.length-1)},[p]))])}}});const W=V(U);function Y(t){return/^(https?:|mailto:|tel:)/.test(t)}const F=["xlink:href"],K=f({__name:"index",props:{name:{default:""},className:{default:""}},setup(t){const c=t,e=v(()=>Y(c.name)),i=v(()=>`#icon-${c.name}`),u=v(()=>c.className?"svg-icon "+c.className:"svg-icon"),s=v(()=>({mask:`url(${c.name}) no-repeat 50% 50%`,"-webkit-mask":`url(${c.name}) no-repeat 50% 50%`}));return(o,p)=>e.value?(g(),m("div",b({key:0,style:s.value,class:"svg-external-icon svg-icon"},o.$attrs),null,16)):(g(),m("svg",b({key:1,class:u.value,"aria-hidden":"true"},o.$attrs),[l("use",{"xlink:href":i.value},null,8,F)],16))}}),Q=A(K,[["__scopeId","data-v-6b7faeaf"]]),J="/vue3-h5-template/static/svg/check-in-CEKQsVGS.svg",X=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),Z="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1681314397470'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='2282'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M448.22%2048C704.358%2048%20912%20255.74%20912%20512l-0.062%207.673C907.842%20772.394%20701.797%20976%20448.22%20976c-110.645%200-198.866-26.169-264.663-78.506a32%2032%200%200%201-4.325-4.159c-11.419-13.256-10.058-33.192%202.962-44.78l0.399-0.35%202.742-2.383c89.13-78.201%20134.016-188.043%20134.66-329.525L320%20512c0.253-143.557-44.635-254.831-134.665-333.822l-2.742-2.384c-13.39-11.534-14.895-31.74-3.36-45.13a32%2032%200%200%201%204.324-4.158C249.354%2074.17%20337.575%2048%20448.22%2048z%20m0%2064c-78.634%200-142.266%2014.443-192.055%2042.56l-1.809%201.03%200.175%200.18c85.695%2088.653%20128.775%20207.05%20129.462%20351.494l0.007%204.825-0.007%204.499c-0.65%20143.074-42.893%20260.596-126.9%20348.969l-2.737%202.852%201.809%201.031c49.174%2027.77%20111.852%2042.201%20189.149%2042.56h2.906c216.135%200%20392.63-171.775%20399.568-386.834l0.154-6.358%200.057-6.946-0.053-6.477C844.452%20289.716%20670.368%20115.55%20454.83%20112.054l-6.61-0.054z'%20fill='%23000000'%20p-id='2283'%3e%3c/path%3e%3c/svg%3e",t2=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),e2="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1613814207456'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='1123'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cdefs%3e%3cstyle%20type='text/css'%3e%3c/style%3e%3c/defs%3e%3cpath%20d='M1021.72444445%20512a495.16088889%20495.16088889%200%200%201-97.57582223%20299.64515555%20500.62222222%20500.62222222%200%200%201-250.85724444%20184.22897778%2030.58346667%2030.58346667%200%200%201-26.2144-4.73315555%2025.85031111%2025.85031111%200%200%201-8.00995556-20.02488889v-139.81013334a119.05706667%20119.05706667%200%200%200-34.58844444-94.29902222%20473.31555555%20473.31555555%200%200%200%2067.72053333-11.65084444%20248.30862222%20248.30862222%200%200%200%2062.2592-26.2144%20187.50577778%20187.50577778%200%200%200%2053.52106667-43.69066667%20209.35111111%20209.35111111%200%200%200%2036.40888889-69.90506667%20334.2336%20334.2336%200%200%200%2013.83537778-100.12444444%20191.87484445%20191.87484445%200%200%200-52.7928889-136.53333333%20176.21902222%20176.21902222%200%200%200-5.09724444-135.44106667%2087.01724445%2087.01724445%200%200%200-53.52106666%207.28177778%20341.87946667%20341.87946667%200%200%200-61.16693334%2029.12711111l-25.12213333%2015.65582222a473.31555555%20473.31555555%200%200%200-254.86222223%200c-7.28177778-5.09724445-16.384-10.55857778-28.03484444-17.84035555A371.00657778%20371.00657778%200%200%200%20300.82844445%20220.72888889a94.29902222%2094.29902222%200%200%200-57.16195556-9.10222222%20178.40355555%20178.40355555%200%200%200-4.73315556%20136.53333333%20197.70026667%20197.70026667%200%200%200-52.4288%20137.26151111A327.68%20327.68%200%200%200%20200.33991111%20584.81777778a223.55057778%20223.55057778%200%200%200%2036.40888889%2069.90506667%20172.94222222%20172.94222222%200%200%200%2053.52106667%2044.41884444%20304.7424%20304.7424%200%200%200%2062.2592%2026.2144%20471.13102222%20471.13102222%200%200%200%2068.08462222%2011.65084444%20105.22168889%20105.22168889%200%200%200-32.768%2068.44871112%20112.86755555%20112.86755555%200%200%201-30.21937778%209.4663111%20190.41848889%20190.41848889%200%200%201-36.40888889%203.2768A78.6432%2078.6432%200%200%201%20274.61404445%20803.27111111a124.5184%20124.5184%200%200%201-36.4088889-41.50613333%20109.22666667%20109.22666667%200%200%200-32.03982222-34.58844445%2091.7504%2091.7504%200%200%200-32.768-16.01991111h-13.1072a47.33155555%2047.33155555%200%200%200-19.29671111%202.91271111q-5.46133333%203.2768-3.2768%207.64586667a50.24426667%2050.24426667%200%200%200%206.18951111%209.10222222%2062.98737778%2062.98737778%200%200%200%208.73813334%208.37404445l4.73315555%202.91271111a88.83768889%2088.83768889%200%200%201%2029.12711111%2025.12213333%20179.49582222%20179.49582222%200%200%201%2020.75306667%2033.49617778l6.5536%2015.29173333a82.28408889%2082.28408889%200%200%200%2029.12711111%2041.14204445%20109.22666667%20109.22666667%200%200%200%2044.05475556%2018.93262222%20223.18648889%20223.18648889%200%200%200%2045.8752%204.73315556%20207.16657778%20207.16657778%200%200%200%2036.40888888-2.54862223l15.29173334-2.54862222v95.39128889a26.2144%2026.2144%200%200%201-8.73813334%2020.02488889%2031.67573333%2031.67573333%200%200%201-26.57848888%204.73315555%20498.43768889%20498.43768889%200%200%201-249.40088889-185.32124444A486.78684445%20486.78684445%200%200%201%202.27555555%20512a497.70951111%20497.70951111%200%200%201%2068.44871112-254.86222222A504.6272%20504.6272%200%200%201%20257.13777778%2070.72426667%20497.70951111%20497.70951111%200%200%201%20512%202.27555555a497.70951111%20497.70951111%200%200%201%20254.86222222%2068.44871112A504.6272%20504.6272%200%200%201%20953.27573333%20257.13777778%20496.98133333%20496.98133333%200%200%201%201021.72444445%20512z'%20p-id='1124'%3e%3c/path%3e%3c/svg%3e",c2=Object.freeze(Object.defineProperty({__proto__:null,default:e2},Symbol.toStringTag,{value:"Module"})),s2="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1681314392506'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='2129'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M512%20224c159.058%200%20288%20128.942%20288%20288S671.058%20800%20512%20800%20224%20671.058%20224%20512s128.942-288%20288-288z%20m0%2064c-123.712%200-224%20100.288-224%20224s100.288%20224%20224%20224%20224-100.288%20224-224-100.288-224-224-224z%20m0%20576c17.673%200%2032%2014.327%2032%2032v64c0%2017.673-14.327%2032-32%2032-17.673%200-32-14.327-32-32v-64c0-17.673%2014.327-32%2032-32zM263.098%20760.902c12.497%2012.496%2012.497%2032.758%200%2045.254l-45.254%2045.255c-12.497%2012.497-32.758%2012.497-45.255%200s-12.497-32.758%200-45.255l45.255-45.254c12.496-12.497%2032.758-12.497%2045.254%200z%20m543.058%200l45.255%2045.254c12.497%2012.497%2012.497%2032.758%200%2045.255s-32.758%2012.497-45.255%200l-45.254-45.255c-12.497-12.496-12.497-32.758%200-45.254%2012.496-12.497%2032.758-12.497%2045.254%200zM128%20480c17.673%200%2032%2014.327%2032%2032%200%2017.673-14.327%2032-32%2032H64c-17.673%200-32-14.327-32-32%200-17.673%2014.327-32%2032-32h64z%20m832%200c17.673%200%2032%2014.327%2032%2032%200%2017.673-14.327%2032-32%2032h-64c-17.673%200-32-14.327-32-32%200-17.673%2014.327-32%2032-32h64zM217.844%20172.589l45.254%2045.255c12.497%2012.496%2012.497%2032.758%200%2045.254-12.496%2012.497-32.758%2012.497-45.254%200l-45.255-45.254c-12.497-12.497-12.497-32.758%200-45.255s32.758-12.497%2045.255%200z%20m633.567%200c12.497%2012.497%2012.497%2032.758%200%2045.255l-45.255%2045.254c-12.496%2012.497-32.758%2012.497-45.254%200-12.497-12.496-12.497-32.758%200-45.254l45.254-45.255c12.497-12.497%2032.758-12.497%2045.255%200zM512%2032c17.673%200%2032%2014.327%2032%2032v64c0%2017.673-14.327%2032-32%2032-17.673%200-32-14.327-32-32V64c0-17.673%2014.327-32%2032-32z'%20fill='%23000000'%20p-id='2130'%3e%3c/path%3e%3c/svg%3e",n2=Object.freeze(Object.defineProperty({__proto__:null,default:s2},Symbol.toStringTag,{value:"Module"})),l2="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1613816440554'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='2265'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cdefs%3e%3cstyle%20type='text/css'%3e%3c/style%3e%3c/defs%3e%3cpath%20d='M883.459773%20504.826645a46.043165%2046.043165%200%200%201-60.708766-0.937916%2041.609379%2041.609379%200%200%201-3.49587-58.236078l77.591261-77.932321a163.538503%20163.538503%200%200%200-16.96776-229.10738c-67.359446-67.274181-166.863842-73.328004-223.053557-16.711964L439.995878%20340.264961a163.538503%20163.538503%200%200%200%2017.053024%20229.107381%2041.609379%2041.609379%200%200%201%200%2060.367706%2045.61684%2045.61684%200%200%201-63.43725%200%20246.330935%20246.330935%200%200%201-16.967759-347.284839L593.473096%2065.37021C686.753139-28.080362%20845.090469-20.406501%20945.959107%2082.423235a246.24567%20246.24567%200%200%201%2015.603518%20343.618438l-78.102852%2078.784972z%20m-742.318145%2013.64242a46.043165%2046.043165%200%200%201%2060.708766%200.937916c16.797229%2015.518252%2018.417266%2040.927258%203.49587%2058.236078l-77.59126%2077.932321a163.538503%20163.538503%200%200%200%2016.967759%20229.10738c67.359446%2067.274181%20166.863842%2073.328004%20223.053557%2016.711964L584.605524%20683.030749a163.538503%20163.538503%200%200%200-17.053025-229.107381%2041.609379%2041.609379%200%200%201%200-60.367706%2045.531575%2045.531575%200%200%201%2063.437251%200%20246.330935%20246.330935%200%200%201%2016.967759%20347.284839l-216.829204%20217.170264c-93.280043%2093.365308-251.617373%2085.691447-352.486011-17.053025a246.24567%20246.24567%200%200%201-15.603517-343.618438l78.102851-78.784972z'%20p-id='2266'%3e%3c/path%3e%3c/svg%3e",o2=Object.freeze(Object.defineProperty({__proto__:null,default:l2},Symbol.toStringTag,{value:"Module"}));function a2(t){return k.request({url:"/list/get",method:"get",params:t})}function i2(t){return k.request({url:"/list/error",method:"post",data:t})}const r2={width:512,height:512,body:'<path fill="currentColor" d="M96 0C60.7 0 32 28.7 32 64v384c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zm112 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0a64 64 0 1 1-128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zm-16 112c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-64z"/>'},d2={width:448,height:512,body:'<path fill="currentColor" d="M224 112c-8.8 0-16-7.2-16-16V80c0-44.2 35.8-80 80-80h16c8.8 0 16 7.2 16 16v16c0 44.2-35.8 80-80 80h-16zM0 288c0-76.3 35.7-160 112-160c27.3 0 59.7 10.3 82.7 19.3c18.8 7.3 39.9 7.3 58.7 0c22.9-8.9 55.4-19.3 82.7-19.3c76.3 0 112 83.7 112 160c0 128-80 224-160 224c-16.5 0-38.1-6.6-51.5-11.3c-8.1-2.8-16.9-2.8-25 0c-13.4 4.7-35 11.3-51.5 11.3C80 512 0 416 0 288z"/>'},g2={width:448,height:512,body:'<path fill="currentColor" d="M152 88a72 72 0 1 1 144 0a72 72 0 1 1-144 0zM39.7 144.5c13-17.9 38-21.8 55.9-8.8l36.2 26.3c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128v-36.3c-15.2-6.7-29.7-15.1-43.3-25l-36.2-26.4c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53l-26 37.2l24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53l50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6l24.3-24.3l-26-37.2z"/>'},p2={width:512,height:512,body:'<path fill="currentColor" d="m86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6c-28.5 32.4-49 72-58.4 115.7C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6.3-21.8.9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124l61.4 61.4L425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8A263 263 0 0 0 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256L172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2.9-14.5.9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256l61.4 61.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9c-13.5-3.7-27.7-5.7-42.4-5.7c-38.4 0-73.7 13.5-101.3 36.1l85.3 85.3c28.5-32.3 49.1-71.9 58.4-115.7zm-166.3 53C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4c43.7-9.4 83.3-29.9 115.7-58.4l-85.2-85.2zM317.4 340L256 278.6L86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z"/>'},m2={width:512,height:512,body:'<path fill="currentColor" d="M61.1 224C45 224 32 211 32 194.9c0-1.9.2-3.7.6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9.6 3.7.6 5.6c0 16.1-13 29.1-29.1 29.1H61.1zm82.9-96a16 16 0 1 0-32 0a16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32a16 16 0 1 0 0 32zM272 96a16 16 0 1 0-32 0a16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48h384c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64v-16z"/>'},u2={width:448,height:512,body:'<path fill="currentColor" d="M96 48L82.7 61.3c-12 12-18.7 28.2-18.7 45.2v132.4c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400h320l28.9-159c2.1-11.3 3.1-22.8 3.1-34.3V192C416 86 330 0 224 0H83.8C72.9 0 64 8.9 64 19.8c0 7.5 4.2 14.3 10.9 17.7L96 48zm24 68a20 20 0 1 1 40 0a20 20 0 1 1-40 0zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16c0 12.5 10.1 22.6 22.6 22.6h370.8c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L384 432H64l-41.4 41.4z"/>'},v2={class:"tools-content pt-[20px] px-[12px]"},h2={class:"text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]"},_2={class:"my-[14px] leading-[24px]"},x2={class:"mt-2"},y2=f({name:"Tools",__name:"index",setup(t){const c=E([]),e=async()=>{const{list:n}=await a2();G("请求成功"),c.push(...n)},i=()=>{i2().then(()=>{},n=>{console.log(n),I("请求有误")})},u=["material-symbols:admin-panel-settings-outline","jam:android","lucide:badge-check","pixelarticons:heart","fxemoji:alienmonster","meteocons:thunderstorms-day-overcast-fill"],s=[r2,d2,g2,p2,m2,u2],p=Object.keys(Object.assign({"../../icons/svg/check-in.svg":X,"../../icons/svg/dark.svg":t2,"../../icons/svg/github.svg":c2,"../../icons/svg/light.svg":n2,"../../icons/svg/link.svg":o2})).map(n=>n.replace("../../icons/svg/","").replace(".svg",""));return(n,a)=>{const w=N,S=W,y=H,L=Q;return g(),m("div",v2,[a[2]||(a[2]=l("div",{class:"pl-[12px] border-l-[3px] border-[color:#41b883] mb-[12px]"},[l("h3",{class:"font-bold text-[18px] my-[4px]"},"Mock")],-1)),d(S,null,{default:_(()=>[d(w,{type:"success",onClick:e},{default:_(()=>a[0]||(a[0]=[z("成功请求")])),_:1}),d(w,{type:"danger",onClick:i},{default:_(()=>a[1]||(a[1]=[z("失败请求")])),_:1})]),_:1}),l("div",h2,[l("p",_2,$(c),1)]),a[3]||(a[3]=l("div",{class:"pl-[12px] border-l-[3px] border-[color:#41b883] mt-[24px] mb-[12px]"},[l("h3",{class:"font-bold text-[18px] my-[4px]"},"Iconify Icon")],-1)),l("div",null,[(g(),m(h,null,x(u,r=>d(y,{key:r,icon:r,class:"inline-block text-[24px] mr-3"},null,8,["icon"])),64))]),l("div",x2,[(g(),m(h,null,x(s,(r,T)=>d(y,{key:T,icon:r,class:"inline-block text-[24px] mr-3"},null,8,["icon"])),64))]),a[4]||(a[4]=l("div",{class:"pl-[12px] border-l-[3px] border-[color:#41b883] mt-[24px] mb-[12px]"},[l("h3",{class:"font-bold text-[18px] my-[4px]"},"Svg Icon")],-1)),l("div",null,[(g(!0),m(h,null,x(P(p),r=>(g(),j(L,{key:r,name:r,class:"inline-block text-[24px] mr-3"},null,8,["name"]))),128))])])}}});export{y2 as default};
