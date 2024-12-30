

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.DyEfl-93.js","_app/immutable/chunks/disclose-version.Bk-e0Tb6.js","_app/immutable/chunks/runtime.Dr4XedoK.js","_app/immutable/chunks/legacy.BrX7FqZQ.js"];
export const stylesheets = [];
export const fonts = [];
