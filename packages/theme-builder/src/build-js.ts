import path from "node:path/posix";
import { getVariables } from "get-css-variables";
import { type NormalizedOptions } from "./options.ts";

export async function buildJs(
    files: string[],
    options: NormalizedOptions,
): Promise<void> {
    const { fs, logger, outdir } = options;

    logger.log();
    logger.group("Extracting CSS variables from:");

    for (const file of files) {
        const content = await fs.readFile(file, "utf8");
        const variables = getVariables(content);
        const esm = `export default ${JSON.stringify(variables, null, 2)};`;
        const dts = [
            `declare const value: Record<string, string>;`,
            `export default value;`,
        ].join("\n");
        const { name } = path.parse(file);
        logger.log(file, "->", path.join(outdir, `${name}.mjs`));
        await fs.writeFile(path.join(outdir, `${name}.mjs`), esm, "utf8");
        await fs.writeFile(path.join(outdir, `${name}.d.mts`), dts, "utf8");
    }

    logger.groupEnd();
}
