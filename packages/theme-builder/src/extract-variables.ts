import postcss, { type Declaration } from "postcss";
import postcssScss from "postcss-scss";
import { type NormalizedOptions } from "./options.ts";

/**
 * @internal
 */
export interface SassVariable {
    name: string;
    value: string;
    group: string;
    comment: string;
}

/**
 * @internal
 */
export interface VariableGroup {
    name: string;
    variables: SassVariable[];
}

interface ParsedDoc {
    group: string | null;
}

function parseDoc(text: string): ParsedDoc {
    const lines = text.split("\n").map((it) => it.replace(/^\/\s*/, ""));
    const group = lines.find((it) => it.startsWith("@group"));
    return {
        group: group ? group.replace(/@group\s+/, "").trim() : null,
    };
}

async function readFile(
    fs: NormalizedOptions["fs"],
    filePath: string,
): Promise<string | null> {
    try {
        return await fs.readFile(filePath, "utf8");
    } catch {
        return null;
    }
}

export async function extractVariables(
    filename: string,
    options: NormalizedOptions,
    extract: (node: Declaration) => Pick<SassVariable, "name" | "value"> | null,
    traverse: boolean,
): Promise<VariableGroup[]> {
    const { fs, logger } = options;

    const content = await readFile(fs, filename);
    if (!content) {
        logger.log("Skipping");
        return [];
    }

    logger.log("Parsing", filename);
    const cssProcessor = postcss();

    const { root } = await cssProcessor.process(content, {
        syntax: postcssScss,
        from: undefined,
    });

    let commentAccumulator: string = "";
    let docblock: ParsedDoc | undefined;
    let comment: string | undefined;

    const variables: SassVariable[] = [];

    const walk = (container: postcss.Container): void => {
        container.each((node) => {
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
                case "decl": {
                    const variable = extract(node);
                    if (variable) {
                        variables.push({
                            ...variable,
                            group: docblock?.group ?? "Uncategorised",
                            comment: comment ?? "",
                        });
                    }
                    comment = undefined;
                    break;
                }
                case "rule":
                case "atrule":
                    if (traverse) {
                        walk(node);
                    }
                    break;

                default:
                    throw new Error(
                        /* eslint-disable-next-line @typescript-eslint/no-explicit-any -- should never happen but better to throw an error if the assumptions change */
                        `Unhandled node type "${String((node as any).type)}"`,
                    );
            }
        });
    };
    walk(root);

    const s = variables.length !== 1 ? "s" : "";
    logger.log(`${variables.length} variable${s} found`);

    const grouped = variables.reduce<Record<string, VariableGroup>>(
        (grouped, variable) => {
            grouped[variable.group] ??= { name: variable.group, variables: [] };
            grouped[variable.group].variables.push(variable);
            return grouped;
        },
        {},
    );

    return Object.values(grouped);
}
