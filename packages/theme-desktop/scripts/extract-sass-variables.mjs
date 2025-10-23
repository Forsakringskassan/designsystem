import fs from "node:fs/promises";
import path from "node:path";
import postcss from "postcss";
import postcssScss from "postcss-scss";

/**
 * @typedef {object} SassVariable
 * @property {string} name
 * @property {string} value
 * @property {string} group
 * @property {string} comment
 */

/**
 * @typedef {object} VariableGroup
 * @property {string} name
 * @property {SassVariable[]} variables
 */

/**
 * @typedef {object} ParsedDoc
 * @property {string | null} group
 */

const dtsContent = `
export interface SassVariable {
    name: string;
    value: string;
    group: string;
    comment: string;
}

export interface VariableGroup {
    name: string
    variables: SassVariable[];
}

declare const value: VariableGroup[];
export default value;
`;

/**
 * @param {string} text
 * @returns {ParsedDoc}
 */
function parseDoc(text) {
    const lines = text.split("\n").map((it) => it.replace(/^\/\s*/, ""));
    const group = lines.find((it) => it.startsWith("@group"));
    return {
        group: group ? group.replace(/@group\s+/, "").trim() : null,
    };
}

/**
 * @param {string} filename
 * @returns {VariableGroup[]}
 */
async function extractSassVariables(filename) {
    console.log("Parsing", filename);
    const content = await fs.readFile(filename, "utf-8");
    const cssProcessor = postcss();

    const { root } = await cssProcessor.process(content, {
        syntax: postcssScss,
        from: undefined,
    });

    /** @type {string} */
    let commentAccumulator = "";

    /** @type {ParsedDoc|undefined} */
    let docblock;

    /** @type {string|undefined} */
    let comment;

    /** @type {SassVariable[]} */
    const variables = [];

    root.each((node) => {
        if (commentAccumulator.length > 0 && node.type !== "comment") {
            docblock = parseDoc(commentAccumulator);
            commentAccumulator = "";
        }

        switch (node.type) {
            case "comment":
                if (node.text.startsWith("/")) {
                    commentAccumulator += `${node.text}\n`;
                    comment = undefined;
                } else {
                    comment = node.text;
                }
                break;
            case "decl":
                variables.push({
                    name: node.prop.replace(/^[$]palette-color-/, ""),
                    value: node.value.replace(/!default/, "").trim(),
                    group: docblock.group ?? "Uncategorised",
                    comment: comment ?? "",
                });
                comment = undefined;
                break;
            case "rule":
            case "atrule":
                /* ignore */
                break;

            default:
                throw new Error(`Unhandled node type "${node.type}"`);
        }
    });

    console.log(`${variables.length} variables found`);

    const grouped = variables.reduce((grouped, variable) => {
        grouped[variable.group] ??= { name: variable.group, variables: [] };
        grouped[variable.group].variables.push(variable);
        return grouped;
    }, {});

    return Object.values(grouped);
}

/**
 * @param {string} src
 * @param {string} dst
 */
async function run(src, dst) {
    const parsed = path.parse(dst);
    const dts = `${dst}.d.ts`;
    const variables = await extractSassVariables(src);
    await fs.mkdir(parsed.dir, { recursive: true });
    await fs.writeFile(dst, JSON.stringify(variables, null, 2), "utf-8");
    await fs.writeFile(dts, dtsContent, "utf-8");
}

const [src, dst] = process.argv.slice(2);
run(src, dst);
