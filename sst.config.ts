/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: "portfolio",
			removal: input?.stage === "main" ? "retain" : "remove",
			// protect: ["main"].includes(input?.stage),
			home: "aws",
			providers: process.env.AWS_PROFILE ? {
				aws: {
					profile: process.env.AWS_PROFILE,
				},
			} : undefined,
		};
	},
	async run() {
		new sst.aws.SvelteKit("Portfolio");
	},
});
