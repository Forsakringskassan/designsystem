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
        const content = await fs.readFile(file, "utf-8");
        const variables = getVariables(content);
        const value = `const value = ${JSON.stringify(variables, null, 2)};`;
        const cjs = [value, `module.exports = value;`].join("\n");
        const cts = [
            `declare const value: Record<string, string>;`,
            `export = value;`,
        ].join("\n");
        const { name } = path.parse(file);
        logger.log(file, "->", path.join(outdir, `${name}.js`));
        await fs.writeFile(path.join(outdir, `${name}.js`), cjs, "utf-8");
        await fs.writeFile(path.join(outdir, `${name}.d.ts`), cts, "utf-8");
    }

    logger.groupEnd();
}
