import path from "node:path/posix";
import { extractCssVariables } from "./extract-css-variables.ts";
import { extractSassVariables } from "./extract-sass-variables.ts";
import { type NormalizedOptions } from "./options.ts";

export interface PaletteColor {
    name: string;
    value: string;
    group: string;
}

export async function extractPalette(
    filePath: string,
    options: NormalizedOptions,
): Promise<PaletteColor[]> {
    const { cwd, logger } = options;
    const src = path.join(cwd, filePath);

    logger.log();
    logger.group("Extracting Sass and CSS variables from:");
    const sassVariables = await extractSassVariables(src, options);
    const cssVariables = await extractCssVariables(src, options);
    logger.groupEnd();
    return [...sassVariables, ...cssVariables]
        .flatMap((group) => group.variables)
        .map(({ name, value, group }) => ({ name, value, group }));
}
