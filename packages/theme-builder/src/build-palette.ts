import path from "node:path/posix";
import {
    type VariableGroup,
    extractSassVariables,
} from "./extract-sass-variables.ts";
import { type NormalizedOptions } from "./options.ts";

export async function buildPalette(
    filePath: string,
    basename: string,
    options: NormalizedOptions,
): Promise<VariableGroup[]> {
    const { cwd, logger, outdir, fs } = options;
    const src = path.join(cwd, filePath);
    const dst = path.join(outdir, basename);

    logger.log();
    logger.group("Extracting Sass variables from:");
    logger.log(src, "->", dst);

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

    const dts = `${dst}.d.ts`;
    const variables = await extractSassVariables(src, options);
    await fs.writeFile(dst, JSON.stringify(variables, null, 2), "utf-8");
    await fs.writeFile(dts, dtsContent, "utf-8");

    logger.groupEnd();

    return variables;
}
