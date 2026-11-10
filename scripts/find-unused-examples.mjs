import fs from "node:fs/promises";
import path from "node:path/posix";

/**
 * @template T
 * @param {Set<T>} a
 * @param {Set<T>} b
 * @returns {Set<T>}
 */
function difference(a, b) {
    const c = new Set(a);
    for (const item of b) {
        c.delete(item);
    }
    return c;
}

/**
 * @template T
 * @param {Set<T>} a
 * @param {Set<T>} b
 * @returns {Set<T>}
 */
function union(a, b) {
    return new Set([...a, ...b]);
}

/**
 * @returns {Promise<Set<{ filePath: string, name: string }>>}
 */
async function findExamples() {
    const filePaths = fs.glob(
        ["packages/**/{examples,docs,tests}/*.vue", "docs/**/*.vue"],
        {
            exclude: ["docs/**/playground/**"],
        },
    );
    const entries = await Array.fromAsync(filePaths, (it) => {
        const filePath = it.replaceAll("\\", "/");
        const name = path.basename(filePath);
        return { filePath, name };
    });
    const found = /** @type {Set<string>} */ (new Set());
    for (const { name } of entries) {
        if (found.has(name)) {
            console.error(`Duplicate example name "${name}"`);
        }
        found.add(name);
    }
    return entries;
}

/**
 * @returns {Promise<Set<string>>}
 */
async function findDocsImported() {
    const dirents = fs.glob("docs/**/*.md", {
        ignore: ["docs/examples/**"],
        withFileTypes: true,
    });
    const found = /** @type {Set<string>} */ new Set();
    for await (const dirent of dirents) {
        if (!dirent.isFile()) {
            continue;
        }
        const filePath = path.join(dirent.parentPath, dirent.name);
        const content = await fs.readFile(filePath, "utf8");
        /* eslint-disable-next-line regexp/no-super-linear-backtracking -- technical debt */
        const matches = content.matchAll(/```import[^\n]*([^`]*)```/g);
        for (const match of matches) {
            const block = match[1];
            let stripped = block;
            let previous;
            do {
                previous = stripped;
                stripped = stripped.replaceAll(/<!--[\s\S]*?-->/g, "");
            } while (stripped !== previous);
            const filename = stripped.trim();
            found.add(filename);
        }
    }
    return found;
}

/**
 * @returns {Promise<Set<string>>}
 */
async function findSrcImported() {
    const dirents = fs.glob("{docs,packages}/**/*.{ts,vue}", {
        withFileTypes: true,
    });
    const found = /** @type {Set<string>} */ new Set();
    for await (const dirent of dirents) {
        if (!dirent.isFile()) {
            continue;
        }
        const filePath = path.join(dirent.parentPath, dirent.name);
        const content = await fs.readFile(filePath, "utf8");
        const matches = content.matchAll(/from "(\.[^"]+\.vue)"/g);
        for (const match of matches) {
            const name = match[1];
            found.add(path.basename(name));
        }
    }
    return found;
}

if (process.argv.includes("-h") || process.argv.includes("--help")) {
    const scriptName = "find-unused-examples.mjs";
    console.log(`usage: ${scriptName} [OPTIONS]`);
    console.log("");
    console.log("  -z             use \\0 as line delimiter");
    console.log("  -h, --help     shows this help");
    console.log("");
    console.log("Typical usage:");
    console.log(`  node ${scriptName} -z | xargs -0 cmd...`);
    /* eslint-disable-next-line unicorn/no-process-exit -- intentional */
    process.exit(0);
}

const examples = await findExamples();
const imported = union(await findDocsImported(), await findSrcImported());
const extraneous = difference(
    examples.map((it) => it.name),
    imported,
);

const delimiter = process.argv.includes("-z") ? "\u{0}" : "\n";

const s = extraneous.size !== 1 ? "s" : "";
process.stderr.write(`${extraneous.size} extraneous example${s} found\n`);
for (const example of extraneous) {
    const entry = examples.find((it) => it.name === example);
    process.stdout.write(`${entry.filePath}${delimiter}`);
}
