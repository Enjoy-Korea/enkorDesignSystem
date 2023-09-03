import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const external = ["react", "react-dom", "styled-components", "classnames"];

export default {
  input: "src/index.ts",
  output: [
    {
      file: "build/index.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "build/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve({ extensions }),
    commonjs({
      include: /node_modules/,
      extensions,
    }),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    babel({
      babelHelpers: "bundled",
      exclude: ["node_modules/**", "dist/**"],
      extensions,
    }),
  ],
  external,
};
