import path from "node:path";
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

function build(format) {
    const outDir = `dist/${format}`;

    return {
        external: ["@fkui/logic", "vue"],
        input: ["src/index.ts"],
        output: {
            dir: outDir,
            format,
            sourcemap: true,
            interop: "auto",
            sourcemapPathTransform(relativeSourcePath, sourcemapPath) {
                const absolute = path.join(sourcemapPath, relativeSourcePath);
                return path.relative(outDir, absolute);
            },
        },
        plugins: [
            typescript({
                outDir,
                declaration: false,
                declarationMap: false,
                declarationDir: undefined,
            }),
            nodeResolve(),
            commonjs(),
            {
                name: "fk:pkg-package-json",
                generateBundle(options) {
                    const mapping = {
                        es: "module",
                        cjs: "commonjs",
                    };
                    const pkg = {
                        type: mapping[options.format],
                    };
                    this.emitFile({
                        type: "asset",
                        fileName: "package.json",
                        source: JSON.stringify(pkg, null, 2),
                    });
                },
            },
        ],
    };
}

export default [build("cjs"), build("esm")];
