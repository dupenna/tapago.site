if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>s(e,t),l={module:{uri:t},exports:o,require:c};i[t]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-2b18929f.js",revision:null},{url:"assets/index-67a407e1.css",revision:null},{url:"index.html",revision:"03a9394be6108c52f3a8690cb445e0ce"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"pwa-192x192.png",revision:"955726909db23d0c38a0a6d5e6aa2071"},{url:"pwa-512x512.png",revision:"c4be8aee9c8f5dcc73b0ae43349ca4ee"},{url:"manifest.webmanifest",revision:"0ecf62c9029e63c87e75e4304f712815"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
