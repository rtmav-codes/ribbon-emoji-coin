

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DU4gh9wa.js","_app/immutable/chunks/disclose-version.Bk-e0Tb6.js","_app/immutable/chunks/runtime.Dr4XedoK.js","_app/immutable/chunks/legacy.BrX7FqZQ.js"];
export const stylesheets = ["_app/immutable/assets/0.CjwzXxAs.css"];
export const fonts = [];
