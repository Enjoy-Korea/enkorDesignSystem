import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import pkg from "./package.json" assert { type: "json" };
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const external = ["react", "react-dom", "styled-components", "classnames"];

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    nodeResolve({ extensions }),
    commonjs({ extensions }),
    babel({
      babelHelpers: "bundled",
      exclude: ["node_modules/**", "dist/**"],
      include: ["src/**/*"],
      extensions,
    }),
  ],
  external,
};
