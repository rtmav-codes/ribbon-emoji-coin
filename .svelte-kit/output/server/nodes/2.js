

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DhRGPQsd.js","_app/immutable/chunks/disclose-version.CHam1Y-5.js","_app/immutable/chunks/runtime.CGA6AEGD.js","_app/immutable/chunks/legacy.CfkuCgwr.js"];
export const stylesheets = [];
export const fonts = [];
