import { Console } from "node:console";
import { it, snapshot } from "node:test";
import dedent from "dedent";
import { Volume } from "memfs";
import { WritableStreamBuffer } from "stream-buffers";
import { extractPalette } from "./src/build-palette.ts";
import { extractCssVariables } from "./src/extract-css-variables.ts";
import { extractSassVariables } from "./src/extract-sass-variables.ts";
import { cli } from "./src/index.ts";

snapshot.setDefaultSnapshotSerializers([(value) => value]);

function content(value) {
    return dedent(value).trim();
}

function printTree(tab = "", children) {
    let str = "";
    let last = children.length - 1;
    for (; last >= 0; last--) {
        if (Object.hasOwn(children, last)) {
            break;
        }
    }
    for (let i = 0; i <= last; i++) {
        const fn = children[i];
        if (!fn) {
            continue;
        }
        const isLast = i === last;
        const child = fn(`${tab + (isLast ? " " : "│")}  `);
        /* eslint-disable-next-line sonarjs/no-nested-conditional -- imported external code */
        const branch = child ? (isLast ? "└─" : "├─") : "│";
        /* eslint-disable-next-line sonarjs/no-nested-template-literals -- imported external code */
        str += `\n${tab}${branch}${child ? ` ${child}` : ""}`;
    }
    return str;
}

/**
 * @param {string} path
 * @param {string} separator
 * @returns {string}
 */
function basename(path, separator) {
    if (path.at(-1) === separator) {
        path = path.slice(0, -1);
    }
    const lastSlashIndex = path.lastIndexOf(separator);
    return lastSlashIndex === -1 ? path : path.slice(lastSlashIndex + 1);
}

/**
 * Until https://github.com/streamich/memfs/issues/1214 is resolved.
 *
 * @param {import("node:fs")} fs
 */
function toTreeSync(fs, opts = {}) {
    const separator = opts.separator || "/";
    let dir = opts.dir || separator;
    if (dir.at(-1) !== separator) {
        dir += separator;
    }
    const tab = opts.tab || "";
    const depth = opts.depth || 10;
    let subtree = " (...)";
    if (depth > 0) {
        const list = fs.readdirSync(dir, { withFileTypes: true });
        list.sort((a, b) => {
            if (a.isDirectory() && b.isDirectory()) {
                return a.name.localeCompare(b.name);
            }
            if (a.isDirectory()) {
                return -1;
            }
            if (b.isDirectory()) {
                return 1;
            }
            return a.name.localeCompare(b.name);
        });
        subtree = printTree(
            tab,
            list.map((entry) => (tab) => {
                if (entry.isDirectory()) {
                    return toTreeSync(fs, {
                        dir: dir + entry.name,
                        depth: depth - 1,
                        tab,
                    });
                }
                if (entry.isSymbolicLink()) {
                    return `${entry.name} → ${fs.readlinkSync(dir + entry.name)}`;
                }
                return entry.name;
            }),
        );
    }
    const base = basename(dir, separator) + separator;
    return base + subtree;
}

it("should build simple theme", async (t) => {
    const vol = Volume.fromJSON(
        {
            "src/index.scss": `:root { --x-foobar: #ff00aa; }`,
        },
        "/",
    );
    const fs = vol.promises;
    const buffer = new WritableStreamBuffer();
    const logger = new Console(buffer);
    await cli([], {
        cwd: "/",
        fs,
        logger,
        outdir: "out",
        prefix: "x",
    });
    t.assert.snapshot(toTreeSync(vol));
    t.assert.snapshot(await fs.readFile("/out/index.css", "utf8"));
    t.assert.snapshot(await fs.readFile("/out/index.mjs", "utf8"));
    t.assert.snapshot(await fs.readFile("/out/index.d.mts", "utf8"));
    t.assert.snapshot(await fs.readFile("/out/metadata.mjs", "utf8"));
    t.assert.snapshot(await fs.readFile("/out/metadata.d.mts", "utf8"));
});

it("should generate version", async (t) => {
    const vol = Volume.fromJSON(
        {
            "src/index.scss": [
                `@use "version" as *;`,
                /* eslint-disable-next-line unicorn/no-incorrect-template-string-interpolation -- false positive */
                `:root { --x-foobar: #ff00aa; --version: "#{$version}"; }`,
            ].join("\n"),
        },
        "/",
    );
    const fs = vol.promises;
    const buffer = new WritableStreamBuffer();
    const logger = new Console(buffer);
    await cli([], {
        cwd: "/",
        fs,
        logger,
        outdir: "out",
        prefix: "x",
        version: "1.2.3",
    });
    t.assert.snapshot(toTreeSync(vol));
    t.assert.snapshot(await fs.readFile("/out/index.css", "utf8"));
    t.assert.snapshot(await fs.readFile("/out/index.mjs", "utf8"));
});

it("should include palette", async (t) => {
    const vol = Volume.fromJSON(
        {
            "src/palette-variables.scss": [
                `@mixin variables {`,
                `  /// @group Pink`,
                `  --x-palette-color-awesome-pink: #ff00aa;`,
                `}`,
            ].join("\n"),
            "src/index.scss": [
                `@use "palette-variables" as palette;`,
                `:root { @include palette.variables; --x-foobar: var(--x-palette-color-awesome-pink); }`,
            ].join("\n"),
        },
        "/",
    );
    const fs = vol.promises;
    const buffer = new WritableStreamBuffer();
    const logger = new Console(buffer);
    await cli([], {
        cwd: "/",
        fs,
        logger,
        outdir: "out",
        prefix: "x",
    });
    t.assert.snapshot(toTreeSync(vol));
    const css = await fs.readFile("/out/index.css", "utf8");
    const esm = await fs.readFile("/out/index.mjs", "utf8");
    const metadataSource = await fs.readFile("/out/metadata.mjs", "utf8");
    const metadata = JSON.parse(metadataSource.replace(/^export default /, ""));
    t.assert.strictEqual(
        css,
        content`
        :root {
          --x-palette-color-awesome-pink: #f0a;
          --x-foobar: var(--x-palette-color-awesome-pink);
        }
    `,
    );
    t.assert.strictEqual(
        esm,
        content`
        export default {
          "--x-palette-color-awesome-pink": "#f0a",
          "--x-foobar": "var(--x-palette-color-awesome-pink)"
        };
    `,
    );
    t.assert.deepStrictEqual(metadata.palette, [
        {
            name: "--x-palette-color-awesome-pink",
            value: "#ff00aa",
            group: "Pink",
        },
    ]);
    t.assert.strictEqual(vol.existsSync("/out/palette.json"), false);
    t.assert.strictEqual(vol.existsSync("/out/palette.json.d.ts"), false);
});

it("should extract Sass and CSS variables separately", async (t) => {
    const vol = Volume.fromJSON(
        {
            "palette.scss": [
                `/// @group Sass`,
                `$palette-color-pink: #ff00aa !default;`,
                `@mixin variables {`,
                `  /// @group CSS`,
                `  /* a color */`,
                `  --x-palette-color-green: #00ff00;`,
                `}`,
            ].join("\n"),
        },
        "/",
    );
    const options = {
        fs: vol.promises,
        logger: new Console(new WritableStreamBuffer()),
        prefix: "x",
    };
    t.assert.deepStrictEqual(
        await extractSassVariables("/palette.scss", options),
        [
            {
                name: "Sass",
                variables: [
                    {
                        name: "$palette-color-pink",
                        value: "#ff00aa",
                        group: "Sass",
                        comment: "",
                    },
                ],
            },
        ],
    );
    t.assert.deepStrictEqual(
        await extractCssVariables("/palette.scss", options),
        [
            {
                name: "CSS",
                variables: [
                    {
                        name: "--x-palette-color-green",
                        value: "#00ff00",
                        group: "CSS",
                        comment: "a color",
                    },
                ],
            },
        ],
    );
});

it("should extract a palette containing both Sass and CSS variables", async (t) => {
    const vol = Volume.fromJSON(
        {
            "palette.scss": [
                `--x-palette-color-unclassified: #ffffff;`,
                `/// @group Sass Colors`,
                `$palette-color-pink: #ff00aa !default;`,
                `/// @group CSS Colors`,
                `--x-palette-color-blue: #0000ff;`,
                `@mixin variables {`,
                `  /// @group Other Colors`,
                `  --x-palette-color-green: #00ff00;`,
                `}`,
            ].join("\n"),
            "out/.keep": "",
        },
        "/",
    );
    const fs = vol.promises;
    const result = await extractPalette("palette.scss", {
        cwd: "/",
        fs,
        logger: new Console(new WritableStreamBuffer()),
        outdir: "/out",
        prefix: "x",
    });
    t.assert.deepStrictEqual(result, [
        {
            name: "$palette-color-pink",
            value: "#ff00aa",
            group: "Sass Colors",
        },
        {
            name: "--x-palette-color-unclassified",
            value: "#ffffff",
            group: "Uncategorised",
        },
        {
            name: "--x-palette-color-blue",
            value: "#0000ff",
            group: "CSS Colors",
        },
        {
            name: "--x-palette-color-green",
            value: "#00ff00",
            group: "Other Colors",
        },
    ]);
});

it("should reject CSS variables outside the palette prefix", async (t) => {
    const vol = Volume.fromJSON(
        {
            "palette.scss": "--other-color: #123456;",
        },
        "/",
    );
    const result = extractCssVariables("/palette.scss", {
        fs: vol.promises,
        logger: new Console(new WritableStreamBuffer()),
        prefix: "x",
    });
    await t.assert.rejects(
        result,
        /CSS variable "--other-color" in "\/palette\.scss" must start with "--x-palette-color-"/,
    );
});

it("should resolve palette references in metadata", async (t) => {
    const theme = [
        `@use "palette-variables" as palette;`,
        `:root {`,
        `  @include palette.variables;`,
        `  --x-foo: var(--x-palette-color-awesome-pink);`,
        `  --x-bar: #00ff00;`,
        `  --x-direct: #f0a;`,
        `  --x-other: var(--x-other-color);`,
        `  --x-unknown: var(--x-palette-color-missing);`,
        `}`,
    ].join("\n");
    const vol = Volume.fromJSON(
        {
            "src/palette-variables.scss": [
                `@mixin variables {`,
                `  /// @group Pink`,
                `  --x-palette-color-awesome-pink: #ff00aa;`,
                `}`,
            ].join("\n"),
            "src/theme-light.scss": theme,
            "src/theme-dark.scss": theme,
        },
        "/",
    );
    const fs = vol.promises;
    const buffer = new WritableStreamBuffer();
    const logger = new Console(buffer);
    await cli([], {
        cwd: "/",
        fs,
        logger,
        outdir: "out",
        prefix: "x",
    });
    const metadata = await fs.readFile("/out/metadata.mjs", "utf8");
    const { tokens, palette } = JSON.parse(
        metadata.replace(/^export default /, ""),
    );
    t.assert.deepStrictEqual(palette, [
        {
            name: "--x-palette-color-awesome-pink",
            value: "#ff00aa",
            group: "Pink",
        },
    ]);
    t.assert.deepStrictEqual(
        tokens.map((it) => it.name),
        ["--x-bar", "--x-direct", "--x-foo", "--x-other", "--x-unknown"],
    );
    t.assert.deepStrictEqual(tokens[2].values.light, {
        value: "#ff00aa",
        palette: "--x-palette-color-awesome-pink",
    });
    t.assert.deepStrictEqual(tokens[1].values.light, {
        value: "#f0a",
        palette: "--x-palette-color-awesome-pink",
    });
    t.assert.deepStrictEqual(tokens[3].values.light, {
        value: "var(--x-other-color)",
        palette: null,
    });
    t.assert.deepStrictEqual(tokens[4].values.light, {
        value: "var(--x-palette-color-missing)",
        palette: null,
    });
});
