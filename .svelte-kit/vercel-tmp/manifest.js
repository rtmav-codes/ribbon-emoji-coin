export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","ribbon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CAyXkSVq.js","app":"_app/immutable/entry/app.CPPMg0T5.js","imports":["_app/immutable/entry/start.CAyXkSVq.js","_app/immutable/chunks/entry.CL702d2v.js","_app/immutable/chunks/runtime.Dr4XedoK.js","_app/immutable/chunks/index-client.CRH35Lmc.js","_app/immutable/entry/app.CPPMg0T5.js","_app/immutable/chunks/runtime.Dr4XedoK.js","_app/immutable/chunks/render.p_grq_zW.js","_app/immutable/chunks/disclose-version.Bk-e0Tb6.js","_app/immutable/chunks/index-client.CRH35Lmc.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
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
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
