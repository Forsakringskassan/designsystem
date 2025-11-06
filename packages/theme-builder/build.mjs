import fs from "node:fs/promises";
import { analyzeMetafile, build } from "esbuild";

const { externalDependencies } = JSON.parse(
    await fs.readFile("package.json", "utf-8"),
);

await fs.rm("dist", { recursive: true, force: true });

const result = await build({
    entryPoints: ["src/index.ts"],
    outdir: `dist`,
    bundle: true,
    format: "esm",
    platform: "node",
    target: "node20",
    logLevel: "info",
    metafile: true,
    external: externalDependencies,
    outExtension: {
        ".js": ".mjs",
    },
    banner: {
        js: [
            `import { createRequire as themeBuilderCreateRequire } from "node:module";`,
            `const require = themeBuilderCreateRequire(import.meta.url);`,
        ].join("\n"),
    },
});
console.log(await analyzeMetafile(result.metafile));
