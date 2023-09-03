import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import pkg from "./package.json" assert { type: "json" };
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
// import { terser } from "rollup-plugin-terser"; // 배포할 때 주석 해제 권장

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const external = ["react", "react-dom", "styled-components", "classNames"];

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main, // package.json의 main 경로로 번들링
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module, // package.json의 module 경로로 번들링
      format: "esm",
      sourcemap: true,
    },
  ],

  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    peerDepsExternal(), // peerDependencies에 설치된 라이브러리를 external 모듈로 설정하여 번들 결과물에서 제외
    nodeResolve({ extensions }), // node_modules에서 모듈을 불러올 수 있게 하는 플러그인
    commonjs({ extensions }), // commonJS로 작성된 모듈을 사용 가능하게 하는 플러그인
    babel({
      babelHelpers: "bundled",
      exclude: ["node_modules/**", "dist/**"],
      include: ["src/**/*"],
      extensions,
    }),
    // terser(), // 배포할 때 주석 해제 권장
  ],
  external,
};
