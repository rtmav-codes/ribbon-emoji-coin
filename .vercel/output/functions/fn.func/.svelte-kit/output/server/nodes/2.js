

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BaPBGM0J.js","_app/immutable/chunks/scheduler.COsedd_c.js","_app/immutable/chunks/index.BnbZuhJE.js"];
export const stylesheets = [];
export const fonts = [];
