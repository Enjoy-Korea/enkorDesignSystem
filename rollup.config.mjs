import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import pkg from "./package.json" assert { type: "json" };
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const external = ["react", "react-dom", "styled-components", "classNames"];

process.env.BABEL_ENV = "production";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main, // (package.json) main 경로로 번들링.
      format: "cjs", // cjs로 번들링
      sourcemap: true,
    },
    {
      file: pkg.module, // (package.json) main 경로로 번들링.
      format: "esm", // es로 변들링
      sourcemap: true,
    },
  ],
  plugins: [
    typescript(),
    peerDepsExternal(), //peerDependencies에 설치된 라이브러리들을 external모듈로 설정하여 번들 결과물에서 제외
    nodeResolve({ extensions }), //node_modules에서 모듈을 불러올 수 있도록 만드는 플러그인
    commonjs({ extensions: [".js", ".ts", ".tsx", "jsx"] }), // commonJS로 만들어진 모듈을 사용 가능하게 하는 플러그인
    babel({
      extensions,
      include: ["src/**/*"],
      babelHelpers: "runtime",
      skipPreflightCheck: true,
    }),
    terser(),
  ],
  external,
};
