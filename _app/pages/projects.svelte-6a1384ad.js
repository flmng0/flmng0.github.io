import{S as t,i as e,s as n,e as s,j as r,k as o,c as a,a as c,m as l,n as i,d as f,b as u,f as h,o as p,I as m,v as d,r as g,w as v,ac as j,u as $,R as y,B as w}from"../chunks/vendor-3b4442f1.js";import{D as x}from"../chunks/DisplayCard-ea464ce8.js";function b(t,e,n){const s=t.slice();return s[2]=e[n],s}function k(t){let e,n,j,$,y;return n=new x({props:{item:t[1](t[2])}}),{c(){e=s("a"),r(n.$$.fragment),j=o(),this.h()},l(t){e=a(t,"A",{href:!0,class:!0});var s=c(e);l(n.$$.fragment,s),j=i(s),s.forEach(f),this.h()},h(){u(e,"href",$=t[2].source),u(e,"class","svelte-qntue4")},m(t,s){h(t,e,s),p(n,e,null),m(e,j),y=!0},p(t,s){const r={};1&s&&(r.item=t[1](t[2])),n.$set(r),(!y||1&s&&$!==($=t[2].source))&&u(e,"href",$)},i(t){y||(d(n.$$.fragment,t),y=!0)},o(t){g(n.$$.fragment,t),y=!1},d(t){t&&f(e),v(n)}}}function E(t){let e,n,r,l=t[0],u=[];for(let s=0;s<l.length;s+=1)u[s]=k(b(t,l,s));const p=t=>g(u[t],1,1,(()=>{u[t]=null}));return{c(){e=o(),n=s("nav");for(let t=0;t<u.length;t+=1)u[t].c();this.h()},l(t){j('[data-svelte="svelte-1pacits"]',document.head).forEach(f),e=i(t),n=a(t,"NAV",{});var s=c(n);for(let e=0;e<u.length;e+=1)u[e].l(s);s.forEach(f),this.h()},h(){document.title="Project Directory | flmng0"},m(t,s){h(t,e,s),h(t,n,s);for(let e=0;e<u.length;e+=1)u[e].m(n,null);r=!0},p(t,[e]){if(3&e){let s;for(l=t[0],s=0;s<l.length;s+=1){const r=b(t,l,s);u[s]?(u[s].p(r,e),d(u[s],1)):(u[s]=k(r),u[s].c(),d(u[s],1),u[s].m(n,null))}for(w(),s=l.length;s<u.length;s+=1)p(s);$()}},i(t){if(!r){for(let t=0;t<l.length;t+=1)d(u[t]);r=!0}},o(t){u=u.filter(Boolean);for(let e=0;e<u.length;e+=1)g(u[e]);r=!1},d(t){t&&f(e),t&&f(n),y(u,t)}}}var D=function(t,e,n,s){return new(n||(n=Promise))((function(r,o){function a(t){try{l(s.next(t))}catch(e){o(e)}}function c(t){try{l(s.throw(t))}catch(e){o(e)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}l((s=s.apply(t,e||[])).next())}))};function P({fetch:t}){return D(this,void 0,void 0,(function*(){const e=yield t("/api/projects.json");if(e.ok){const t=yield e.json();return{props:Object.assign({},t)}}return{status:e.status,error:new Error("Failed to load project index")}}))}function A(t,e,n){let{projects:s}=e;return t.$$set=t=>{"projects"in t&&n(0,s=t.projects)},[s,t=>({name:t.name,description:t.brief,imagePath:null})]}export default class extends t{constructor(t){super(),e(this,t,A,E,n,{projects:0})}}export{P as load};
