import { build } from "esbuild";

await build({
    entryPoints: ["src/index.js"],
    outdir: "dist",
    bundle: true,
    format: "esm",
    platform: "node",
    target: "node20",
    logLevel: "info",
    outExtension: {
        ".js": ".mjs",
    },
});
