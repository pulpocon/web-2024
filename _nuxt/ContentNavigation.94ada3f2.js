import{q as f,h as p,e as v,j as l,u as d}from"./query.15f87ea0.js";import{h as g,l as _,d as h,t as y,m as w,p as C,i as N,k as r}from"./entry.fdcf3b8c.js";import{N as $}from"./nuxt-link.25aaa79a.js";import{w as m,s as P,u as j,a as T}from"./utils.7a070a01.js";import"./WebHeader.scss.7bcb44cc.js";/* empty css                      */const x=async n=>{const{content:t}=g().public;typeof(n==null?void 0:n.params)!="function"&&(n=f(n));const a=n.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${v(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(P())return(await _(()=>import("./client-db.cf2c54ec.js"),["./client-db.cf2c54ec.js","./entry.fdcf3b8c.js","./entry.46f569cf.css","./utils.7a070a01.js","./query.15f87ea0.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const e=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:l(a),previewToken:j("previewToken").value}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};const Q=h({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(n){const{query:t}=y(n),a=w(()=>{var e;return typeof((e=t.value)==null?void 0:e.params)=="function"?t.value.params():t.value});if(!a.value&&C("dd-navigation").value){const{navigation:e}=T();return{navigation:e}}const{data:s}=await d(`content-navigation-${p(a.value)}`,()=>x(a.value));return{navigation:s}},render(n){const t=N(),{navigation:a}=n,s=o=>r($,{to:o._path},()=>o.title),e=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),e(i.children,u+1)]):r("li",null,s(i)))),c=o=>e(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}});export{Q as default};