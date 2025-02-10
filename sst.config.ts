/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: "portfolio",
			removal: input?.stage === "production" ? "retain" : "remove",
			protect: ["main"].includes(input?.stage),
			home: "aws",
		};
	},
	async run() {
		new sst.aws.SvelteKit("Portfolio");
	},
});
