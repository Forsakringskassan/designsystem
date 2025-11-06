import nodefs from "node:fs/promises";
import path from "node:path/posix";
import { pathToFileURL } from "node:url";
import { moduleImporter } from "@forsakringskassan/sass-module-importer";
import cssnano from "cssnano";
import postcss from "postcss";
import * as sass from "sass";
import { type NormalizedOptions } from "./options.ts";

/**
 * Custom importer loading files from the provided `fs` instance instead of hardcoded `node:fs`.
 *
 * This is used for test-cases.
 */
function fsImporter(options: {
    cwd: string;
    fs: typeof nodefs;
}): sass.Importer<"async"> {
    const { cwd, fs } = options;
    async function tryResolve(url: string): Promise<URL | null> {
        const { dir, name } = path.posix.parse(url);
        const haystack = [
            path.posix.join(dir, `${name}.scss`),
            path.posix.join(dir, `_${name}.scss`),
        ];
        for (const needle of haystack) {
            try {
                await fs.access(needle);
                return pathToFileURL(needle, { windows: false });
            } catch {
                /* do nothing */
            }
        }
        return null;
    }
    return {
        canonicalize(url) {
            /* hack to only run this importer during testing: it is very
             * simplified and does not handle `_`, `index.scss` or other
             * features that native file importing handles in sass */
            if (fs === nodefs) {
                return null;
            }
            if (url.startsWith("file://")) {
                url = url.slice("file://".length);
            }
            if (path.posix.isAbsolute(url)) {
                return tryResolve(url);
            } else {
                return tryResolve(path.posix.join(cwd, url));
            }
        },
        async load(url) {
            const contents = await fs.readFile(url, "utf-8");
            return {
                contents,
                syntax: "scss",
            };
        },
    };
}

async function compileSass(
    src: string,
    dst: string,
    options: NormalizedOptions,
): Promise<void> {
    const { cwd, fs } = options;
    const data = /* SCSS */ `
        @use "${src}"
    `;
    const result = await sass.compileStringAsync(data, {
        style: "expanded",
        importers: [moduleImporter, fsImporter({ cwd, fs })],
        loadPaths: ["."],
    });

    const production = await postprocess(result.css, src, dst);
    const { dir, name } = path.parse(dst);
    const cssFile = path.join(dir, `${name}.css`);
    await fs.writeFile(cssFile, production.css, "utf8");
}

async function postprocess(
    css: string,
    from: string,
    to: string,
): Promise<postcss.LazyResult<postcss.Root>> {
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

export async function buildCss(
    pattern: string,
    options: NormalizedOptions,
): Promise<string[]> {
    const { logger, cwd, outdir, fs } = options;
    const files = [] as string[];
    logger.group("Compiling CSS:");

    /* eslint-disable-next-line @typescript-eslint/await-thenable -- memfs returns a promise instead */
    for await (const item of await fs.glob(pattern, { cwd })) {
        const src = item.replace(/\\/g, "/");
        const { name } = path.parse(src);
        if (name.startsWith("_")) {
            continue;
        }
        if (name === "palette-variables") {
            continue;
        }
        const dst = `${outdir}/${name}.css`;
        logger.log(src, "->", dst);
        await compileSass(src, dst, options);
        files.push(dst);
    }

    logger.groupEnd();
    return files;
}
