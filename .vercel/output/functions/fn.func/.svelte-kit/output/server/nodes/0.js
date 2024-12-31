

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.5b33d9f8.js","_app/immutable/chunks/scheduler.2818db91.js","_app/immutable/chunks/index.5edfff71.js"];
export const stylesheets = ["_app/immutable/assets/0.717a8966.css"];
export const fonts = [];
