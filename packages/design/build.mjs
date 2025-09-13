import fs from "node:fs/promises";
import path from "node:path/posix";
import { glob } from "glob";
import * as sass from "sass";
import picocolors from "picocolors";
import postcss from "postcss";
import { optimize } from "svgo";

/* postcss plugins */
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import postcssUrl from "postcss-url";
import varFuncFallback from "postcss-var-func-fallback";

/* fkui theme */
import fkuiTheme from "@fkui/theme-default/dist/fkui-css-variables.js";

const themes = {
    fkui: fkuiTheme,
};

async function optimzeAssets(src, dst) {
    const files = await glob("**/*.svg", { cwd: src, posix: true });
    await fs.rm(dst, { recursive: true, force: true });
    for (const filename of files) {
        const srcPath = path.join(src, filename);
        const dstPath = path.join(dst, filename);
        const original = await fs.readFile(srcPath, "utf-8");
        const result = optimize(original, {
            path: srcPath,
            plugins: [
                {
                    name: "preset-default",
                },
                {
                    name: "removeAttrs",
                    params: {
                        attrs: "(id)",
                    },
                },
                {
                    name: "removeDimensions",
                },
            ],
        });
        await fs.mkdir(path.dirname(dstPath), { recursive: true });
        await fs.writeFile(dstPath, result.data, "utf-8");
        console.log(
            picocolors.cyan(path.join("assets", filename)),
            "optimized  ",
            picocolors.bold(prettySize(result.data.length)),
        );
    }
}

async function postprocess(css, from, to, { theme, minify, sourceMap }) {
    /** @type {import("cssnano").Options} */
    const cssnanoOptions = {
        preset: ["default", { discardComments: { removeAll: true } }],
    };
    const fallbackOptions = {
        variables: themes[theme],
    };
    const plugins = [
        autoprefixer,
        postcssUrl({
            basePath: "../temp",
            url: "inline",
            encodeType: "base64",
            optimizeSvgEncode: true,
        }),
        theme ? varFuncFallback(fallbackOptions) : false,
        minify ? cssnano(cssnanoOptions) : false,
    ].filter(Boolean);
    return await postcss(plugins).process(css, {
        from,
        to,
        map: { prev: sourceMap },
    });
}

/**
 *
 * @param {number} size
 * @returns {string}
 */
function prettySize(size) {
    if (size < 1024) {
        return `${size} B`;
    } else if (size < 1024 * 1024) {
        const divisor = 1024;
        const rounded = (size / divisor).toFixed(2);
        return `${rounded} kB`;
    } else {
        const divisor = 1024 * 1024;
        const rounded = (size / divisor).toFixed(2);
        return `${rounded} mB`;
    }
}

async function compileSass(src, dst, { theme } = {}) {
    const data = /* SCSS */ `
        @use "src/core/config-variables" with (
            $asset-path: "assets",
            $asset-path-images: "assets/images"
        );
        @use "${src}"
    `;
    const result = sass.compileString(data, {
        style: "expanded",
        loadPaths: ["."],
        sourceMap: true,
        sourceMapIncludeSources: true,

        /* consider all current active deprecations to be fatal, i.e. fail the build */
        fatalDeprecations: Object.values(sass.deprecations)
            .filter((it) => it.status === "active")
            .map((it) => it.id),
    });

    const development = await postprocess(result.css, src, dst, {
        theme,
        minify: false,
        sourceMap: result.sourceMap,
    });
    const production = await postprocess(result.css, src, dst, {
        theme,
        minify: true,
        sourceMap: result.sourceMap,
    });
    const { dir, name } = path.parse(dst);

    await fs.writeFile(dst, development.css, "utf-8");
    await fs.writeFile(
        path.join(dir, `${name}.min.css`),
        production.css,
        "utf-8",
    );
    console.log(
        picocolors.cyan(dst),
        "written  ",
        picocolors.bold(prettySize(development.css.length)),
        "| min:",
        prettySize(production.css.length),
    );
}

await fs.rm("lib", { recursive: true, force: true });
await fs.mkdir("lib", { recursive: true });

console.group();
await optimzeAssets("src/assets", "temp/assets");
try {
    await compileSass("src/fkui.scss", "lib/fkui.css", {
        theme: "fkui",
    });
    await compileSass("src/fonts.scss", "lib/fonts.css");
} catch (err) {
    console.log();
    if (err instanceof postcss.CssSyntaxError) {
        console.error(`${err.file}:${err.line}:${err.column}: ${err.reason}`);
        console.log(err.showSourceCode());
        process.exitCode = 1;
    } else {
        throw err;
    }
}
console.groupEnd();
