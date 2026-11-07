import path from "node:path/posix";
import { type NormalizedOptions } from "./options.ts";

/* group name -> color name -> color value */
type Palette = Record<string, Record<string, string>>;

/**
 * Generates the Sass palette from a JSON file.
 *
 * Each color is generated both as a Sass variable (`$palette-color-<name>`)
 * and as a CSS custom property (`--<prefix>-palette-color-<name>`) in a
 * `css-variables` mixin. The custom properties are interpolated from the Sass
 * variables so overriding a Sass variable affects both.
 *
 * The groups are written as `/// @group` doc comments before the Sass
 * variables, which is used when the palette is extracted to `palette.json`.
 */
export async function generatePalette(
    source: string,
    destination: string,
    options: NormalizedOptions,
): Promise<void> {
    const { cwd, fs, prefix } = options;

    let content: string;
    try {
        content = await fs.readFile(path.join(cwd, source), "utf8");
    } catch {
        return;
    }

    const palette = JSON.parse(content) as Palette;
    const lines: string[] = [];

    lines.push("// This is a generated file. See @fkui/theme-builder", "");

    /* Sass variables, one group at a time */
    for (const [group, colors] of Object.entries(palette)) {
        lines.push(`/// @group ${group}`);
        for (const [name, value] of Object.entries(colors)) {
            lines.push(`$palette-color-${name}: ${value} !default;`);
        }
        lines.push("");
    }

    /* CSS custom properties referencing the Sass variables */
    lines.push("@mixin css-variables {");
    for (const colors of Object.values(palette)) {
        for (const name of Object.keys(colors)) {
            lines.push(
                `    --${prefix}-palette-color-${name}: #{$palette-color-${name}};`,
            );
        }
    }
    lines.push("}", "");

    await fs.writeFile(path.join(cwd, destination), lines.join("\n"), "utf8");
}
