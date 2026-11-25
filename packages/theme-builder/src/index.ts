import nodefs from "node:fs/promises";
import path from "node:path/posix";
import yargs from "yargs";
import { buildCss } from "./build-css.ts";
import { buildJs } from "./build-js.ts";
import { buildMetadata } from "./build-metadata.ts";
import { extractPalette } from "./build-palette.ts";
import { clean } from "./clean.ts";
import { generateVersion } from "./generate-version.ts";
import { type NormalizedOptions, type Options } from "./options.ts";

const nodeConsole = console;
const paletteVariablesFile = "src/palette-variables.scss";

async function run(options: NormalizedOptions): Promise<void> {
    await clean(options);
    await generateVersion("src/_version.scss", options);
    const files = await buildCss(
        "src/*.scss",
        ["src/_*.scss", paletteVariablesFile],
        options,
    );
    await buildJs(files, options);
    if (files.length === 0) {
        return;
    }

    const paletteVariables = await extractPalette(
        paletteVariablesFile,
        options,
    );
    await buildMetadata(files, "metadata", paletteVariables, options);
}

export async function cli(argv: string[], options: Options): Promise<void> {
    const {
        cwd,
        fs = nodefs,
        logger = nodeConsole,
        version = process.env.npm_package_version ?? "",
    } = options;

    const { outdir, prefix } = await yargs()
        .scriptName("fkui-theme-builder")
        .usage("$0 [OPTIONS]")
        .option("outdir", {
            alias: "o",
            describe: "Output directory",
            type: "string",
            default: options.outdir ?? "dist",
            requiresArg: true,
        })
        .option("prefix", {
            alias: "p",
            describe: "Token and palette prefix",
            type: "string",
            default: options.prefix ?? "fkds",
            requiresArg: true,
        })
        .help()
        .parse(argv);

    return run({
        cwd,
        fs,
        logger,
        outdir: path.isAbsolute(outdir) ? outdir : path.join(cwd, outdir),
        prefix,
        version,
        themes: [
            { name: "light", filename: "theme-light" },
            { name: "dark", filename: "theme-dark" },
        ],
    });
}
