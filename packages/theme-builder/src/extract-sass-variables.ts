import { type VariableGroup, extractVariables } from "./extract-variables.ts";
import { type NormalizedOptions } from "./options.ts";

export async function extractSassVariables(
    filename: string,
    options: NormalizedOptions,
): Promise<VariableGroup[]> {
    return extractVariables(
        filename,
        options,
        (node) => {
            if (!node.prop.startsWith("$")) {
                return null;
            }
            return {
                name: node.prop,
                value: node.value.replace(/!default/, "").trim(),
            };
        },
        false,
    );
}
