import{a8 as s}from"./vendor-d2da8f8e.js";const e="undefined"==typeof window,r=()=>{const e=s("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session}},n={subscribe:s=>r().page.subscribe(s)},i=s=>{throw new Error(e?`Can only ${s} session store in browser`:`Cannot ${s} session store before subscribing`)},t={subscribe(s){const n=r().session;return e||(t.set=n.set,t.update=n.update),n.subscribe(s)},set:s=>{i("set")},update:s=>{i("update")}};export{n as p,t as s};
