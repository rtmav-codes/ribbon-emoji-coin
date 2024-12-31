

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.4qwia3v9.js","_app/immutable/chunks/scheduler.COsedd_c.js","_app/immutable/chunks/index.BnbZuhJE.js"];
export const stylesheets = [];
export const fonts = [];
