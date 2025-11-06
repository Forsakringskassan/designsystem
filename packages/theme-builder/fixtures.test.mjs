import { Console } from "node:console";
import { it, snapshot } from "node:test";
import dedent from "dedent";
import { Volume } from "memfs";
import { WritableStreamBuffer } from "stream-buffers";
import { cli } from "./src/index.ts";

snapshot.setDefaultSnapshotSerializers([(value) => value]);

function content(value) {
    return dedent(value).trim();
}

function printTree(tab = "", children) {
    let str = "";
    let last = children.length - 1;
    for (; last >= 0; last--) {
        if (children[last]) {
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
    if (path[path.length - 1] === separator) {
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
    if (dir[dir.length - 1] !== separator) {
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
            } else if (a.isDirectory()) {
                return -1;
            } else if (b.isDirectory()) {
                return 1;
            } else {
                return a.name.localeCompare(b.name);
            }
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
                } else if (entry.isSymbolicLink()) {
                    return `{entry.name} → ${fs.readlinkSync(dir + entry.name)}`;
                } else {
                    return `${entry.name}`;
                }
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
    t.assert.snapshot(await fs.readFile("/out/index.css", "utf-8"));
    t.assert.snapshot(await fs.readFile("/out/index.js", "utf-8"));
    t.assert.snapshot(await fs.readFile("/out/index.d.ts", "utf-8"));
    t.assert.snapshot(await fs.readFile("/out/palette.json", "utf-8"));
    t.assert.snapshot(await fs.readFile("/out/metadata.mjs", "utf-8"));
    t.assert.snapshot(await fs.readFile("/out/metadata.d.mts", "utf-8"));
});

it("should generate version", async (t) => {
    const vol = Volume.fromJSON(
        {
            "src/index.scss": [
                `@use "version" as *;`,
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
    t.assert.snapshot(await fs.readFile("/out/index.css", "utf-8"));
    t.assert.snapshot(await fs.readFile("/out/index.js", "utf-8"));
});

it("should include palette", async (t) => {
    const vol = Volume.fromJSON(
        {
            "src/palette-variables.scss": [`$awesome-pink: #ff00aa;`].join(
                "\n",
            ),
            "src/index.scss": [
                `@use "palette-variables" as palette;`,
                `:root { --x-foobar: #{palette.$awesome-pink}; }`,
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
    const css = await fs.readFile("/out/index.css", "utf-8");
    const js = await fs.readFile("/out/index.js", "utf-8");
    const palette = await fs.readFile("/out/palette.json", "utf-8");
    t.assert.strictEqual(
        css,
        content`
        :root{
          --x-foobar:#f0a;
        }
    `,
    );
    t.assert.strictEqual(
        js,
        content`
        const value = {
          "--x-foobar": "#f0a"
        };
        module.exports = value;
    `,
    );
    t.assert.strictEqual(
        palette,
        content`
        [
          {
            "name": "Uncategorised",
            "variables": [
              {
                "name": "$awesome-pink",
                "value": "#ff00aa",
                "group": "Uncategorised",
                "comment": ""
              }
            ]
          }
        ]
    `,
    );
});

it("should include deprecated variables", async (t) => {
    const vol = Volume.fromJSON(
        {
            "src/deprecated-variables.json": JSON.stringify(["--foo"]),
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
    const deprecated = await fs.readFile(
        "/out/deprecated-variables.json",
        "utf-8",
    );
    t.assert.strictEqual(deprecated, `["--foo"]`);
});
