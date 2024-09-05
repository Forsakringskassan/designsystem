import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";

function suppress(needle) {
    const { code, name } = needle;
    return (warning, defaultHandler) => {
        if (warning.code === code && warning.names.includes(name)) {
            return;
        }
        defaultHandler(warning);
    };
}

function build(format) {
    const outDir = `lib/${format}`;

    return {
        input: ["src/index.ts", "src/polyfills.ts"],
        output: {
            dir: outDir,
            format,
            sourcemap: true,
            interop: "auto",
        },
        onwarn: suppress({ code: "EMPTY_BUNDLE", name: "polyfills" }),
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

export default [
    build("cjs"),
    build("esm"),
    {
        input: ["temp/types/polyfills.d.ts"],
        output: {
            file: "lib/types/polyfills.d.ts",
            format: "esm",
        },
        onwarn: suppress({ code: "EMPTY_BUNDLE", name: "polyfills.d" }),
        preserveEntrySignatures: "strict",
        plugins: [dts()],
    },
];
