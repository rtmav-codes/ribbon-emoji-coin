

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/howtobuy/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BP7iwm0s.js","_app/immutable/chunks/scheduler.COsedd_c.js","_app/immutable/chunks/index.BnbZuhJE.js"];
export const stylesheets = [];
export const fonts = [];
