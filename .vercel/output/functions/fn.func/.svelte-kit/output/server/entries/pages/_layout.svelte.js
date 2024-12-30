import { d as slot } from "../../chunks/index.js";
import "clsx";
function Nav($$payload) {
  $$payload.out += `<div class="navbar bg-[#fec7de] text-[#f35087] p-3"><div class="navbar-start"><div class="dropdown"><div tabindex="0" role="button" class="btn bg-white lg:hidden"><h1 class="text-3xl">🎀</h1></div> <ul class="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"><li><a href="/home" class="text-lg font-bold text-[#f35087] text-white">🎀 Home</a></li> <li><a href="/howtobuy" class="text-lg font-bold text-[#f35087] text-white">🎀 How to Buy</a></li></ul></div> <a href="/home" class="btn btn-ghost lg:text-xl text-lg font-bold text-[#f35087">🎀 Ribbon Emoji Coin</a></div> <div class="navbar-center hidden lg:flex flex-row flex-wrap justify-center items-center"><ul class="menu menu-horizontal px-1 font-bold text-xl"><li><a href="/home">🎀 Home</a></li> <li><a href="/howtobuy">🎀 How to Buy</a></li></ul></div> <div class="navbar-end text-[#fec7de]"><a href="https://www.emojicoin.fun/market/ribbon" target="_blank" class="btn text-[#fec7de] bg-black hover:bg-black text-2xl"><img src="/emojifun.png" alt="emojifun" class="w-10 h-10"></a></div></div>`;
}
function Footer($$payload) {
  $$payload.out += `<footer class="footer bg-[#fec7de] text-[#f35087] p-10 flex lg:flex-row flex-col justify-center items-center"><div class="flex flex-col items-center lg:ml-18 lg:mr-36"><img src="/ribbon.png" alt="Pink Ribbon" class="w-20 h-20"> <p class="text-center text-lg font-bold">The Pink Ribbon Emoji Coin <br> Copyright © 2024</p></div> <div class="flex flex-col lg:items-start items-center lg:ml-36 lg:mr-18"><h6 class="text-lg font-bold lg:text-xl">Links</h6> <div class="grid grid-flow-col gap-4"><button class="w-18 btn bg-white rounded-full"><a href="https://x.com/RibbonEmojiCoin" target="_blank"><img src="/x.png" alt="X" class="w-10 h-10"></a></button> <button class="w-18 btn bg-white rounded-full"><a href="https://t.me/ribbonemoji" target="_blank"><img src="/tg.png" alt="X" class="w-10 h-10"></a></button> <button class="w-18 btn bg-black rounded-full"><a href="https://www.emojicoin.fun/market/ribbon" target="_blank"><img src="/emojifun.png" alt="emojifun" class="w-8 h-8"></a></button></div></div></footer>`;
}
function _layout($$payload, $$props) {
  Nav($$payload);
  $$payload.out += `<!----> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
