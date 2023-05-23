import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import pkg from "./package.json" assert { type: "json" };
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from '@rollup/plugin-typescript';

const extensions = [".js", ".jsx", ".ts", ".tsx"];

process.env.BABEL_ENV = "production";

export default {
  input: "./src/index.ts",
  output: [
    {
      file: pkg.module, // (package.json) main 경로로 번들링.
      format: "es", // es로 변들링
    },
  ],
  plugins: [
    typescript(),
    peerDepsExternal(), //peerDependencies에 설치된 라이브러리들을 external모듈로 설정하여 번들 결과물에서 제외
    resolve({ extensions }), //node_modules에서 모듈을 불러올 수 있도록 만드는 플러그인
    commonjs({
      include: "node_modules/**",
    }), // commonJS로 만들어진 모듈을 사용 가능하게 하는 플러그인
    babel({
      extensions,
      include: ["src/**/*"],
      babelHelpers: "bundled",
    }),
  ],
};
