import { type VariableGroup, extractVariables } from "./extract-variables.ts";
import { type NormalizedOptions } from "./options.ts";
import { getPalettePrefix } from "./palette-prefix.ts";

export async function extractCssVariables(
    filename: string,
    options: NormalizedOptions,
): Promise<VariableGroup[]> {
    const palettePrefix = getPalettePrefix(options.prefix);
    return extractVariables(
        filename,
        options,
        (node) => {
            if (!node.prop.startsWith("--")) {
                return null;
            }
            if (!node.prop.startsWith(palettePrefix)) {
                throw new Error(
                    `CSS variable "${node.prop}" in "${filename}" must start with "${palettePrefix}"`,
                );
            }
            return {
                name: node.prop,
                value: node.value.trim(),
            };
        },
        true,
    );
}
