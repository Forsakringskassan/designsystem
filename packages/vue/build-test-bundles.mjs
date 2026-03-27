import { resolve } from "node:path";
import * as esbuild from "esbuild";

const result = await esbuild.build({
    entryPoints: ["test-bundles/*.mjs"],
    outdir: "temp/test-bundles",
    bundle: true,
    format: "esm",
    platform: "node",
    target: "node20",
    sourcemap: false,
    logLevel: "info",
    metafile: true,
    external: ["@fkui/logic", "@fkui/date", "vue"],
    alias: {
        "@fkui/vue": resolve("dist/esm/index.esm.js"),
    },
});

const output = await esbuild.analyzeMetafile(result.metafile);
console.log(output);
