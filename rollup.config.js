const { esm, umds } = require("./config/bundler");


export default [
	...umds({
		input: "./src/index.umd.ts",
		outputs: [
			`./lib/css-camera.js`,
			`./lib/css-camera.min.js`,
		],
		library: "CSSCamera"
	}),
	...umds({
		input: "./src/index.umd.ts",
		outputs: [
			`./lib/css-camera.pkgd.js`,
			`./lib/css-camera.pkgd.min.js`,
		],
		library: "CSSCamera",
	}),
	esm({
		input: "./src/index.ts",
		output: "./lib/css-camera.esm.js",
	}),
];
