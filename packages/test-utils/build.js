const fs = require("node:fs/promises");
const path = require("node:path");
const esbuild = require("esbuild");

const type = {
    cjs: "commonjs",
    esm: "module",
};

async function build() {
    for (const format of ["cjs", "esm"]) {
        const outdir = `dist/${format}`;
        const common = {
            logLevel: "info",
            sourcemap: true,
            external: ["vue", "@fkui/*"],
            bundle: true,
            platform: "node",
            format,
            target: "node20",
            outdir,
        };
        await esbuild.build({
            ...common,
            entryPoints: ["src/lib.ts", "src/jest.ts"],
        });
        await esbuild.build({
            ...common,
            entryPoints: [{ in: "src/vue/index.ts", out: "vue" }],
            define: {
                "process.env.NODE_ENV": JSON.stringify("development"),
            },
        });
        const pkg = JSON.stringify({ type: type[format] }, null, 2);
        await fs.writeFile(path.join(outdir, "package.json"), pkg, "utf-8");
    }
}

build().catch((err) => {
    console.error(err);
});
