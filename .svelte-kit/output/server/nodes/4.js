

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/howtobuy/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.6e0098f6.js","_app/immutable/chunks/scheduler.2818db91.js","_app/immutable/chunks/index.5edfff71.js"];
export const stylesheets = [];
export const fonts = [];
