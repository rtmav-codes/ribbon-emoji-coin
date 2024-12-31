

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e1331e99.js","_app/immutable/chunks/scheduler.2818db91.js","_app/immutable/chunks/index.5edfff71.js","_app/immutable/chunks/entry.ad661b2b.js"];
export const stylesheets = [];
export const fonts = [];
