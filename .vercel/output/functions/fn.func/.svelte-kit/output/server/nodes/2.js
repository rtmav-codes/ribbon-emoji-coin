

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CVtz4FwT.js","_app/immutable/chunks/disclose-version.Bk-e0Tb6.js","_app/immutable/chunks/runtime.Dr4XedoK.js","_app/immutable/chunks/legacy.BrX7FqZQ.js"];
export const stylesheets = [];
export const fonts = [];
