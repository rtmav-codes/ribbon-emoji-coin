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
		client: {"start":"_app/immutable/entry/start.D8qYSFFO.js","app":"_app/immutable/entry/app.BXUw6y8j.js","imports":["_app/immutable/entry/start.D8qYSFFO.js","_app/immutable/chunks/entry.CgKiP69V.js","_app/immutable/chunks/runtime.CGA6AEGD.js","_app/immutable/chunks/index-client.D9m9Oq3e.js","_app/immutable/entry/app.BXUw6y8j.js","_app/immutable/chunks/runtime.CGA6AEGD.js","_app/immutable/chunks/render.DdB7lyfw.js","_app/immutable/chunks/disclose-version.CHam1Y-5.js","_app/immutable/chunks/index-client.D9m9Oq3e.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js'))
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
