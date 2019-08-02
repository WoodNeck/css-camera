const buildHelper = require("@egjs/build-helper");

const name = "CSSCamera";
const external = {
	"gl-matrix": "gl-matrix",
}
export default buildHelper([
  {
    name,
    input: "./src/index.umd.ts",
    output: "./lib/css-camera.js",
    format: "umd",
    external,
  },
  {
    name,
    input: "./src/index.umd.ts",
    output: "./lib/css-camera.min.js",
    format: "umd",
    uglify: true,
    external,
  },
  {
    name,
    input: "./src/index.umd.ts",
    output: "./lib/css-camera.pkgd.js",
    format: "umd",
    resolve: true,
  },
  {
    name,
    input: "./src/index.umd.ts",
    output: "./lib/css-camera.pkgd.min.js",
    format: "umd",
    resolve: true,
    uglify: true,
  },
  {
    input: "./src/index.ts",
    output: "./lib/css-camera.esm.js",
    format: "esm",
    external,
    exports: "named",
  },
]);
