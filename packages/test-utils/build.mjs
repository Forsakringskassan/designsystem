import fs from "node:fs/promises";
import path from "node:path";
import * as esbuild from "esbuild";

const type = {
    cjs: "commonjs",
    esm: "module",
};

for (const format of ["cjs", "esm"]) {
    const outdir = `dist/${format}`;
    const common = {
        logLevel: "info",
        sourcemap: true,
        external: ["vue", "@jest/globals", "@fkui/*", "vitest"],
        bundle: true,
        platform: "node",
        format,
        target: "node22",
        outdir,
    };
    await esbuild.build({
        ...common,
        entryPoints: ["src/lib.ts", "src/jest.ts", "src/vitest.ts"],
    });
    await esbuild.build({
        ...common,
        entryPoints: [{ in: "src/vue/index.ts", out: "vue" }],
        define: {
            "process.env.NODE_ENV": JSON.stringify("development"),
        },
    });
    const pkg = JSON.stringify({ type: type[format] }, null, 2);
    await fs.writeFile(path.join(outdir, "package.json"), pkg, "utf8");
}
