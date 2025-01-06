

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.C3U8WnUR.js","_app/immutable/chunks/scheduler.COsedd_c.js","_app/immutable/chunks/index.BnbZuhJE.js"];
export const stylesheets = ["_app/immutable/assets/0.CBjLNl4R.css"];
export const fonts = [];
