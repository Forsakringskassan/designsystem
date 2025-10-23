import fs from "node:fs/promises";
import path from "node:path/posix";
import { moduleImporter } from "@forsakringskassan/sass-module-importer";
import cssnano from "cssnano";
import postcss from "postcss";
import * as sass from "sass";

async function postprocess(css, from, to) {
    const cssnanoOptions = {
        preset: [
            "default",
            {
                discardComments: { removeAll: true },
                normalizeWhitespace: false,
            },
        ],
    };
    const plugins = [cssnano(cssnanoOptions)].filter(Boolean);
    return await postcss(plugins).process(css, { from, to });
}

export async function compileSass(src, dst) {
    const data = /* SCSS */ `
        @use "${src}"
    `;
    const result = sass.compileString(data, {
        style: "expanded",
        importers: [moduleImporter],
        loadPaths: ["."],
    });

    const production = await postprocess(result.css, src, dst);
    const { dir, name } = path.parse(dst);
    const cssFile = path.join(dir, `${name}.css`);
    await fs.writeFile(cssFile, production.css, "utf8");
}

await fs.mkdir("dist");
await compileSass("src/theme-light.scss", "dist/theme-light.css");
await compileSass("src/theme-dark.scss", "dist/theme-dark.css");
await compileSass("src/theme-auto.scss", "dist/theme-auto.css");
