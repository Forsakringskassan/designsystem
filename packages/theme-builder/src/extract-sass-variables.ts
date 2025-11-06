import postcss from "postcss";
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
        return await fs.readFile(filePath, "utf-8");
    } catch {
        return null;
    }
}

export async function extractSassVariables(
    filename: string,
    options: NormalizedOptions,
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
                    group: docblock?.group ?? "Uncategorised",
                    comment: comment ?? "",
                });
                comment = undefined;
                break;
            case "rule":
            case "atrule":
                /* ignore */
                break;

            default:
                throw new Error(
                    /* eslint-disable-next-line @typescript-eslint/no-explicit-any -- should never happen but better to throw an error if the assumptions change */
                    `Unhandled node type "${String((node as any).type)}"`,
                );
        }
    });

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
