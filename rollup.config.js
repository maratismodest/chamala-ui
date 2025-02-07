import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";

export default {
    input: "src/index.ts",
    output: [
        {
            file: "dist/index.js",
            format: "cjs",
        },
        {
            file: "dist/index.esm.js",
            format: "esm",
        },
    ],
    external: ["react", "react-dom"],
    plugins: [
        typescript(),
        commonjs(),
        resolve(),
        postcss({
            modules: true,
            extensions: [".css"],
            extract: "styles.css",
            minimize: true,
        }),
    ],
};
