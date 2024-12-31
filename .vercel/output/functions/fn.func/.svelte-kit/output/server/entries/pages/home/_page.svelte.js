import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="h-screen w-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-300 via-pink-300 to-pink-100 text-white flex flex-col items-center justify-center p-10" data-svelte-h="svelte-1qbfgha"><h1 class="text-7xl">🎀</h1> <h2 class="lg:text-3xl text-xl font-bold text-center mt-2 text-[#f35087]">The Pink Ribbon Emoji Coin</h2> <div class="flex flex-col justify-center items-center mt-5"><img src="/aptos-white.png" alt="aptos logo" class="w-8 h-8"> <h3 class="lg:text-xl text-lg font-bold text-center mt-2 text-[#f35087]">On Aptos</h3></div> <button class="btn bg-black hover:bg-black text-[#f35087] mt-20 text-md font-bold"><a href="/howtobuy">How to Buy</a></button> <button class="btn bg-black hover:bg-black mt-10"><a href="https://www.emojicoin.fun/market/ribbon" target="_blank"><img src="/emojifun.png" alt="emojifun" class="w-8 h-8"></a></button> </div>`;
});
export {
  Page as default
};
