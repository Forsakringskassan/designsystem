import fs from "node:fs/promises";
import path from "node:path/posix";
import { glob } from "glob";

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
    const filePaths = await glob("{docs,packages}/**/examples/*.vue");
    const entries = filePaths.map((it) => {
        const filePath = it.replace(/\\/g, "/");
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
    const filePaths = await glob("{docs,packages/vue-labs/docs}/**/*.md");
    const found = /** @type {Set<string>} */ new Set();
    for (const filePath of filePaths) {
        const content = await fs.readFile(filePath, "utf-8");
        const matches = content.matchAll(/```import[^\n]*([^`]*)```/gm);
        for (const match of matches) {
            const block = match[1];
            let stripped = block;
            let previous;
            do {
                previous = stripped;
                stripped = stripped.replace(/<!--[\s\S]*?-->/g, "");
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
    const filePaths = await glob("{docs,packages}/**/*.{ts,vue}");
    const found = /** @type {Set<string>} */ new Set();
    for (const filePath of filePaths) {
        const content = await fs.readFile(filePath, "utf-8");
        const matches = content.matchAll(/from "([.][^"]+[.]vue)"/gm);
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
    process.exit(0);
}

const examples = await findExamples();
const imported = union(await findDocsImported(), await findSrcImported());
const extraneous = difference(
    examples.map((it) => it.name),
    imported,
);

const delimiter = process.argv.includes("-z") ? "\x00" : "\n";

process.stderr.write(`${extraneous.size} extraneous dependencies found\n`);
for (const example of extraneous) {
    const entry = examples.find((it) => it.name === example);
    process.stdout.write(`${entry.filePath}${delimiter}`);
}
