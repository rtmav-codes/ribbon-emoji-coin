import{s as k,n as d,o as I,q as F,u as O,v as P,w as S}from"../chunks/scheduler.COsedd_c.js";import{S as H,i as C,e as p,c as x,g as V,a as v,b as m,d as f,s as $,v as L,f as B,j as _,w as M,x as T,p as j,n as y,z as W,y as R,q}from"../chunks/index.BnbZuhJE.js";function z(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function X(n){let t,s='<div class="navbar-start"><div class="dropdown"><div tabindex="0" role="button" class="btn bg-white lg:hidden"><h1 class="text-3xl">🎀</h1></div> <ul class="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"><li><a href="/home" class="text-lg font-bold text-[#f35087]">🎀 Home</a></li> <li><a href="/howtobuy" class="text-lg font-bold text-[#f35087]">🎀 How to Buy</a></li></ul></div> <a href="/home" class="btn btn-ghost lg:text-xl text-lg font-bold text-[#f35087">🎀 Ribbon Emoji Coin</a></div> <div class="navbar-center hidden lg:flex flex-row flex-wrap justify-center items-center"><ul class="menu menu-horizontal px-1 font-bold text-xl"><li><a href="/home">🎀 Home</a></li> <li><a href="/howtobuy">🎀 How to Buy</a></li></ul></div> <div class="navbar-end text-[#fec7de]"><a href="https://www.emojicoin.fun/market/ribbon" target="_blank" class="btn text-[#fec7de] bg-black hover:bg-black text-2xl"><img src="/emojifun.png" alt="emojifun" class="w-10 h-10"/></a></div>';return{c(){t=p("div"),t.innerHTML=s,this.h()},l(l){t=x(l,"DIV",{class:!0,"data-svelte-h":!0}),V(t)!=="svelte-kwa110"&&(t.innerHTML=s),this.h()},h(){v(t,"class","navbar bg-[#fec7de] text-[#f35087] p-3")},m(l,r){m(l,t,r)},p:d,i:d,o:d,d(l){l&&f(t)}}}function N(n){return I(()=>{console.log("Hello World")}),[]}class G extends H{constructor(t){super(),C(this,t,N,X,k,{})}}function J(n){let t,s=`<div class="flex flex-col items-center lg:ml-18 lg:mr-36"><img src="/ribbon.png" alt="Pink Ribbon" class="w-20 h-20"/> <p class="text-center text-lg font-bold">The Pink Ribbon Emoji Coin
          <br/>
          Copyright © 2024</p></div> <div class="flex flex-col lg:items-start items-center lg:ml-36 lg:mr-18"><h6 class="text-lg font-bold lg:text-xl">Links</h6> <div class="grid grid-flow-col gap-4"><button class="w-18 btn bg-white rounded-full"><a href="https://x.com/RibbonEmojiCoin" target="_blank"><img src="/x.png" alt="X" class="w-10 h-10"/></a></button> <button class="w-18 btn bg-white rounded-full"><a href="https://t.me/ribbonemoji" target="_blank"><img src="/tg.png" alt="X" class="w-10 h-10"/></a></button> <button class="w-18 btn bg-black rounded-full"><a href="https://www.emojicoin.fun/market/ribbon" target="_blank"><img src="/emojifun.png" alt="emojifun" class="w-8 h-8"/></a></button></div></div>`;return{c(){t=p("footer"),t.innerHTML=s,this.h()},l(l){t=x(l,"FOOTER",{class:!0,"data-svelte-h":!0}),V(t)!=="svelte-e13psm"&&(t.innerHTML=s),this.h()},h(){v(t,"class","footer bg-[#fec7de] text-[#f35087] p-10 flex lg:flex-row flex-col justify-center items-center")},m(l,r){m(l,t,r)},p:d,i:d,o:d,d(l){l&&f(t)}}}function K(n){return I(()=>{console.log("Hello World")}),[]}class Q extends H{constructor(t){super(),C(this,t,K,J,k,{})}}function A(n,t,s){const l=n.slice();return l[2]=t[s],l[4]=s,l}function D(n){let t;return{c(){t=p("div"),this.h()},l(s){t=x(s,"DIV",{class:!0,style:!0}),B(t).forEach(f),this.h()},h(){v(t,"class","ribbon svelte-1tehlg"),q(t,"animation-delay",n[4]*.5+"s"),q(t,"left",Math.random()*100+"%")},m(s,l){m(s,t,l)},p:d,d(s){s&&f(t)}}}function U(n){let t,s,l,r,u,h,b,g=z(Array(10)),a=[];for(let e=0;e<g.length;e+=1)a[e]=D(A(n,g,e));l=new G({});const w=n[1].default,c=F(w,n,n[0],null);return h=new Q({}),{c(){t=p("div");for(let e=0;e<a.length;e+=1)a[e].c();s=$(),L(l.$$.fragment),r=$(),c&&c.c(),u=$(),L(h.$$.fragment),this.h()},l(e){t=x(e,"DIV",{class:!0});var i=B(t);for(let o=0;o<a.length;o+=1)a[o].l(i);i.forEach(f),s=_(e),M(l.$$.fragment,e),r=_(e),c&&c.l(e),u=_(e),M(h.$$.fragment,e),this.h()},h(){v(t,"class","ribbon-container svelte-1tehlg")},m(e,i){m(e,t,i);for(let o=0;o<a.length;o+=1)a[o]&&a[o].m(t,null);m(e,s,i),T(l,e,i),m(e,r,i),c&&c.m(e,i),m(e,u,i),T(h,e,i),b=!0},p(e,[i]){if(i&0){g=z(Array(10));let o;for(o=0;o<g.length;o+=1){const E=A(e,g,o);a[o]?a[o].p(E,i):(a[o]=D(E),a[o].c(),a[o].m(t,null))}for(;o<a.length;o+=1)a[o].d(1);a.length=g.length}c&&c.p&&(!b||i&1)&&O(c,w,e,e[0],b?S(w,e[0],i,null):P(e[0]),null)},i(e){b||(j(l.$$.fragment,e),j(c,e),j(h.$$.fragment,e),b=!0)},o(e){y(l.$$.fragment,e),y(c,e),y(h.$$.fragment,e),b=!1},d(e){e&&(f(t),f(s),f(r),f(u)),W(a,e),R(l,e),c&&c.d(e),R(h,e)}}}function Y(n,t,s){let{$$slots:l={},$$scope:r}=t;return n.$$set=u=>{"$$scope"in u&&s(0,r=u.$$scope)},[r,l]}class et extends H{constructor(t){super(),C(this,t,Y,U,k,{})}}export{et as component};
