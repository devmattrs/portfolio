/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: "portfolio",
			removal: input?.stage === "main" ? "retain" : "remove",
			protect: ["main"].includes(input?.stage),
			home: "aws",
			providers: {
				aws: {
					profile: 'mattrs',
				},
			},
		};
	},
	async run() {
		new sst.aws.SvelteKit("Portfolio");
	},
});
