export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["aptos-white.png","emojifun.png","favicon.ico","favicon.png","ribbon.png","tg.png","x.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.D8AWZdEO.js","app":"_app/immutable/entry/app.D6fZgRVK.js","imports":["_app/immutable/entry/start.D8AWZdEO.js","_app/immutable/chunks/entry.BJqu_6Aw.js","_app/immutable/chunks/runtime.Dr4XedoK.js","_app/immutable/chunks/index-client.CRH35Lmc.js","_app/immutable/entry/app.D6fZgRVK.js","_app/immutable/chunks/runtime.Dr4XedoK.js","_app/immutable/chunks/render.p_grq_zW.js","_app/immutable/chunks/disclose-version.Bk-e0Tb6.js","_app/immutable/chunks/index-client.CRH35Lmc.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/howtobuy",
				pattern: /^\/howtobuy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
