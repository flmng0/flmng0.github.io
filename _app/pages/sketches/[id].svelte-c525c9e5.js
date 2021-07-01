import{S as a,i as s,s as t,e,c as n,a as c,d as r,b as o,f as i,K as l,z as h,ag as u,a0 as d,ah as f,k as g,t as m,j as v,a9 as p,n as $,g as w,m as E,X as S,I as k,o as b,E as x,h as j,v as y,r as z,w as V,Y as D,aa as H,ai as I}from"../../chunks/vendor-7ad97773.js";import{p as P}from"../../chunks/stores-97f810d3.js";function _(a){let s,t;return{c(){s=e("pre"),this.h()},l(a){s=n(a,"PRE",{class:!0,"data-src":!0}),c(s).forEach(r),this.h()},h(){o(s,"class",t="language-"+a[1]),o(s,"data-src",a[0])},m(t,e){i(t,s,e),a[3](s)},p(a,[e]){2&e&&t!==(t="language-"+a[1])&&o(s,"class",t),1&e&&o(s,"data-src",a[0])},i:l,o:l,d(t){t&&r(s),a[3](null)}}}function A(a,s,t){let e,{dataSrc:n}=s,{language:c}=s;return h((()=>{u.highlightElement(e)})),a.$$set=a=>{"dataSrc"in a&&t(0,n=a.dataSrc),"language"in a&&t(1,c=a.language)},[n,c,e,function(a){d[a?"unshift":"push"]((()=>{e=a,t(2,e)}))}]}class C extends a{constructor(a){super(),s(this,a,A,_,t,{dataSrc:0,language:1})}}const{document:N}=H;function T(a){let s,t,l,h,u,d,D,H,P,_,A,T,O,B,K,R,U,X,Y,q,F,G,J,L,M,Q;return N.title=s="Sketch: "+a[0]+" | flmng0",A=new f({props:{size:"1x"}}),B=new C({props:{dataSrc:a[4],language:"javascript"}}),{c(){t=g(),l=e("canvas"),h=g(),u=e("div"),d=e("button"),D=e("span"),H=m("View Source"),P=g(),_=e("div"),v(A.$$.fragment),T=g(),O=e("div"),v(B.$$.fragment),K=g(),R=e("div"),U=e("h1"),X=m(a[0]),Y=g(),q=e("p"),F=m(a[1]),G=g(),this.h()},l(s){p('[data-svelte="svelte-utsmm1"]',N.head).forEach(r),t=$(s),l=n(s,"CANVAS",{id:!0,width:!0,height:!0,class:!0}),c(l).forEach(r),h=$(s),u=n(s,"DIV",{class:!0});var e=c(u);d=n(e,"BUTTON",{class:!0});var o=c(d);D=n(o,"SPAN",{});var i=c(D);H=w(i,"View Source"),i.forEach(r),P=$(o),_=n(o,"DIV",{class:!0});var f=c(_);E(A.$$.fragment,f),f.forEach(r),o.forEach(r),T=$(e),O=n(e,"DIV",{class:!0});var g=c(O);E(B.$$.fragment,g),g.forEach(r),e.forEach(r),K=$(s),R=n(s,"DIV",{class:!0});var m=c(R);U=n(m,"H1",{});var v=c(U);X=w(v,a[0]),v.forEach(r),Y=$(m),q=n(m,"P",{});var S=c(q);F=w(S,a[1]),S.forEach(r),G=$(m),m.forEach(r),this.h()},h(){o(l,"id","sketch-canvas"),o(l,"width","800"),o(l,"height","800"),o(l,"class","svelte-nlgiz0"),o(_,"class","showing-button svelte-nlgiz0"),o(d,"class","source-code__show svelte-nlgiz0"),o(O,"class","source-code__text svelte-nlgiz0"),o(u,"class","source-code svelte-nlgiz0"),S(u,"showing",a[3]),J=new I(null),o(R,"class","docs svelte-nlgiz0")},m(s,e){i(s,t,e),i(s,l,e),i(s,h,e),i(s,u,e),k(u,d),k(d,D),k(D,H),k(d,P),k(d,_),b(A,_,null),k(u,T),k(u,O),b(B,O,null),i(s,K,e),i(s,R,e),k(R,U),k(U,X),k(R,Y),k(R,q),k(q,F),k(R,G),J.m(a[2],R),L=!0,M||(Q=x(d,"click",a[5]),M=!0)},p(a,[t]){(!L||1&t)&&s!==(s="Sketch: "+a[0]+" | flmng0")&&(N.title=s),8&t&&S(u,"showing",a[3]),(!L||1&t)&&j(X,a[0]),(!L||2&t)&&j(F,a[1]),(!L||4&t)&&J.p(a[2])},i(a){L||(y(A.$$.fragment,a),y(B.$$.fragment,a),L=!0)},o(a){z(A.$$.fragment,a),z(B.$$.fragment,a),L=!1},d(a){a&&r(t),a&&r(l),a&&r(h),a&&r(u),V(A),V(B),a&&r(K),a&&r(R),M=!1,Q()}}}var O=function(a,s,t,e){return new(t||(t=Promise))((function(n,c){function r(a){try{i(e.next(a))}catch(s){c(s)}}function o(a){try{i(e.throw(a))}catch(s){c(s)}}function i(a){var s;a.done?n(a.value):(s=a.value,s instanceof t?s:new t((function(a){a(s)}))).then(r,o)}i((e=e.apply(a,s||[])).next())}))};const B=({page:a,fetch:s})=>O(void 0,void 0,void 0,(function*(){const{id:t}=a.params,e=yield s(`/api/sketches/${t}.json`);if(e.ok){const a=yield e.json();return{props:Object.assign({},a)}}return{status:e.status,error:new Error("Sketch doesn't exist")}}));function K(a,s,t){let e;D(a,P,(a=>t(6,e=a)));let{name:n}=s,{brief:c}=s,{contentHtml:r}=s;const o=`/sketches/${e.params.id}.js`;let i=!1;h((()=>{const a=document.createElement("script");a.type="module";const s=(new Date).getTime();return a.src=`${o}?reloadfix=${s}`,document.body.appendChild(a),()=>{document.body.removeChild(a)}}));return a.$$set=a=>{"name"in a&&t(0,n=a.name),"brief"in a&&t(1,c=a.brief),"contentHtml"in a&&t(2,r=a.contentHtml)},[n,c,r,i,o,()=>{t(3,i=!i)}]}export default class extends a{constructor(a){super(),s(this,a,K,T,t,{name:0,brief:1,contentHtml:2})}}export{B as load};