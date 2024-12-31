

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.fbf4ff32.js","_app/immutable/chunks/scheduler.2818db91.js","_app/immutable/chunks/index.5edfff71.js","_app/immutable/chunks/entry.1738196a.js"];
export const stylesheets = [];
export const fonts = [];
