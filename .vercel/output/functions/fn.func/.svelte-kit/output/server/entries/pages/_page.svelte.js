import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="h-screen w-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-300 via-pink-300 to-pink-100 text-white p-4 flex flex-col items-center justify-center" data-svelte-h="svelte-13e8j9d"><h1 class="text-7xl">🎀</h1> <a href="/home" class="btn bg-white lg:text-xl text-lg font-bold text-[#f35087] mt-10">Continue</a> </div>`;
});
export {
  Page as default
};
