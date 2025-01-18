

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CY4iyMWm.js","_app/immutable/chunks/scheduler.COsedd_c.js","_app/immutable/chunks/index.C6-v733S.js"];
export const stylesheets = [];
export const fonts = [];
