import{d as w,at as C,S as B,U as I,r as v,D as S,by as D,c as s,e as n,f as b,n as l,a9 as e,F as y,K as f,L as g,h as N,t as U,Y as T,Z as j,bf as z,N as A,E}from"./CJD-Iqip.js";const F=["onClick"],L=w({inheritAttrs:!1,__name:"Tabs",props:{selectedIndex:{type:Number,default:0},class:{type:[String,Object,Array],default:void 0}},setup(_){const h={wrapper:"relative my-5 space-y-6",header:"flex items-center relative overflow-x-auto",border:"absolute bottom-0 inset-x-0 w-full h-px bg-gray-200 dark:bg-gray-800",tab:{base:"px-4 py-2.5 font-semibold text-sm/6 flex items-center gap-1.5 border-b z-[1] focus-visible:outline-primary",active:"text-primary border-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border-transparent hover:border-gray-300 dark:hover:border-gray-700",icon:{base:"w-5 h-5 flex-shrink-0"}}},d=_,i=C(),{ui:r,attrs:x}=B("content.tabs",void 0,h,I(d,"class"),!0),p=v(d.selectedIndex||0),k=v(1),m=S(()=>{var u;return((u=i.default)==null?void 0:u.call(i).map((o,c)=>{var t,a;return{index:c,label:((t=o.props)==null?void 0:t.label)||`${c}`,icon:(a=o.props)==null?void 0:a.icon,component:o}}))||[]});return D(()=>{k.value+=1}),(u,o)=>{const c=E;return s(),n("div",A({class:e(r).wrapper},e(x)),[b("div",{class:l(e(r).header)},[b("div",{class:l(e(r).border)},null,2),(s(!0),n(y,null,f(e(m),(t,a)=>(s(),n("button",{key:a,class:l([e(r).tab.base,e(p)===a?e(r).tab.active:e(r).tab.inactive]),onClick:O=>p.value=a},[t.icon?(s(),g(c,{key:0,name:t.icon,class:l(e(r).tab.icon.base)},null,8,["name","class"])):N("",!0),b("span",null,U(t.label),1)],10,F))),128))],2),(s(!0),n(y,null,f(e(m),(t,a)=>T((s(),n("div",{key:a},[(s(),g(z(t.component)))])),[[j,e(p)===a]])),128))],16)}}}),$=Object.assign(L,{__name:"Tabs"});export{$ as default};
