import * as esbuild from "esbuild";

const extension = {
    cjs: ".cjs",
    esm: ".mjs",
};

for (const format of ["cjs", "esm"]) {
    const result = await esbuild.build({
        entryPoints: ["src/cypress/index.ts"],
        outfile: `dist/${format}/cypress.${format}.js`,
        bundle: true,
        platform: "browser",
        format,
        target: "chrome119",
        sourcemap: true,
        outExtension: {
            ".js": extension[format],
        },
        logLevel: "info",
        metafile: true,
    });
    if (format === "esm") {
        const output = await esbuild.analyzeMetafile(result.metafile);
        console.log(output);
    }
}
