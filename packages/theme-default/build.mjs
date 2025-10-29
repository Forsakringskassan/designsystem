import fs from "node:fs/promises";
import path from "node:path";
import { parse } from "@adobe/css-tools";
import { getVariables } from "get-css-variables";

/**
 * @typedef {import("@adobe/css-tools").CssAtRuleAST} CssAtRuleAST
 * @typedef {import("@adobe/css-tools").CssRuleAST} CssRuleAST
 */

/**
 * @typedef {object} Token
 * @property {string} name
 * @property {string} value
 * @property {string | null} palette
 * @property {string | null} comment
 */

/**
 * @typedef {object} Metadata
 * @property {Token[]} tokens
 */

/**
 *
 * @param {CssAtRuleAST} rule
 * @returns {rule is CssRuleAST}
 */
function isRootRule(rule) {
    return rule.type === "rule" && rule.selectors.includes(":root");
}

const metadataDts = `
export interface Token {
    readonly name: string;
    readonly value: string;
    readonly palette: string | null;
    readonly comment: string | null;
}

export interface Metadata {
    readonly tokens: Token[];
}

declare const metadata: Metadata;
export default metadata;
`;

/**
 *
 * @param {CssRuleAST | undefined} rule
 * @returns Generator<Token>
 */
function* getTokens(rule, palette) {
    if (!rule) {
        return;
    }
    /** @type {Token | null} */
    let last = null;
    for (const decl of rule.declarations) {
        if (
            decl.type === "declaration" &&
            decl.property.startsWith("--fkds-")
        ) {
            last = {
                name: decl.property,
                value: decl.value,
                palette: palette[decl.value] ?? null,
                comment: null,
            };
            yield last;
        } else if (decl.type === "comment" && last !== null) {
            last.comment = decl.comment.trim();
        }
    }
}

/**
 * @param {string} pattern
 * @returns {Promise<void>}
 */
async function extractCssVariables(pattern) {
    console.group("Extracting variables from:");

    for await (const file of fs.glob(pattern)) {
        const content = await fs.readFile(file, "utf-8");
        const variables = getVariables(content);
        const value = `const value = ${JSON.stringify(variables, null, 2)};`;
        const cjs = [value, `module.exports = value;`].join("\n");
        const cts = [
            `declare const value: Record<string, string>;`,
            `export = value;`,
        ].join("\n");
        const { name } = path.parse(file);
        console.log(file, "->", `dist/${name}.js`);
        await fs.writeFile(`dist/${name}.js`, cjs, "utf-8");
        await fs.writeFile(`dist/${name}.d.ts`, cts, "utf-8");
    }

    console.groupEnd();
}

async function buildMetadata(src, dst) {
    const css = await fs.readFile(src, "utf-8");
    const rawPalette = await fs.readFile("./dist/palette.json", "utf-8");

    const palette = Object.fromEntries(
        JSON.parse(rawPalette)
            .map((it) => it.variables)
            .flat()
            .map((it) => [it.value, it.name]),
    );
    const { stylesheet } = parse(css);
    const rule = stylesheet.rules.find(isRootRule);

    /** @type {Metadata} */
    const metadata = {
        tokens: Array.from(getTokens(rule, palette)),
    };

    const serialized = `export default ${JSON.stringify(metadata, null, 2)}`;

    await fs.writeFile(`${dst}.mjs`, serialized, "utf-8");
    await fs.writeFile(`${dst}.d.mts`, metadataDts, "utf-8");
}

await buildMetadata("./dist/theme-light.css", "./dist/metadata");
await extractCssVariables("dist/*.css");

await fs.copyFile(
    "src/deprecated-variables.json",
    "dist/deprecated-variables.json",
);
