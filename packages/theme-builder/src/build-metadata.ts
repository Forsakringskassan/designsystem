import path from "node:path/posix";
import {
    type CssAtRuleAST,
    type CssRuleAST,
    CssTypes,
    parse,
} from "@adobe/css-tools";
import { type PaletteColor } from "./build-palette.ts";
import { type NormalizedOptions } from "./options.ts";
import { getPalettePrefix } from "./palette-prefix.ts";

interface Variable {
    readonly name: string;
    readonly value: string;
    readonly palette: string | null;
    comment: string | null;
}

interface TokenValue {
    readonly value: string | null;
    readonly palette: string | null;
}

interface Token {
    readonly name: string;
    readonly comment: string | null;
    readonly values: Record<string, TokenValue>;
}

interface Metadata {
    readonly themes: string[];
    readonly tokens: Token[];
    readonly palette: PaletteColor[];
}

const metadataDts = `
export interface PaletteColor {
    readonly name: string;
    readonly value: string;
    readonly group: string;
}

export interface TokenValue {
    readonly value: string | null;
    readonly palette: string | null;
}

export interface Token {
    readonly name: string;
    readonly comment: string | null;
    readonly values: Record<string, TokenValue>;
}

export interface Metadata {
    readonly themes: string[];
    readonly tokens: Token[];
    readonly palette: PaletteColor[];
}

declare const metadata: Metadata;
export default metadata;
`;

function isRootRule(rule: CssAtRuleAST): rule is CssRuleAST {
    return rule.type === CssTypes.rule && rule.selectors.includes(":root");
}

/**
 * Expand shorthand hex colors and lowercase hex digits for palette lookups.
 *
 * - `#f0a` → `#ff00aa`
 * - `#f0a9` → `#ff00aa99`
 * - `#ff00aa` → `#ff00aa`
 * - `#ff00aa99` → `#ff00aa99`
 */
function normalizeHexColor(value: string): string {
    if (!/^#(?:[\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$/i.test(value)) {
        return value;
    }

    const hex = value.toLowerCase();
    if (hex.length <= 5) {
        return hex.replaceAll(/[\da-f]/g, (digit) => digit.repeat(2));
    }
    return hex;
}

function resolvePaletteReference(
    value: string,
    paletteByName: Map<string, PaletteColor>,
): PaletteColor | undefined {
    const reference = /^var\(\s*(--[\w-]+)\s*\)$/.exec(value);
    const name = reference?.[1];
    return name ? paletteByName.get(name) : undefined;
}

function* getTokens(
    rule: CssRuleAST | undefined,
    palette: PaletteColor[],
    prefix: string,
): Generator<Variable> {
    if (!rule) {
        return;
    }
    let last: Variable | null = null;
    const palettePrefix = getPalettePrefix(prefix);
    const byName = new Map(palette.map((color) => [color.name, color]));
    const byValue = new Map(
        palette.map((color) => [normalizeHexColor(color.value), color.name]),
    );
    for (const decl of rule.declarations) {
        if (
            decl.type === CssTypes.declaration &&
            decl.property.startsWith(`--${prefix}-`) &&
            !decl.property.startsWith(palettePrefix)
        ) {
            const color = resolvePaletteReference(decl.value, byName);
            last = {
                name: decl.property,
                value: color?.value ?? decl.value,
                palette:
                    color?.name ??
                    byValue.get(normalizeHexColor(decl.value)) ??
                    null,
                comment: null,
            };
            yield last;
        } else if (decl.type === CssTypes.declaration) {
            last = null;
        } else if (decl.type === CssTypes.comment && last !== null) {
            last.comment = decl.comment.trim();
        }
    }
}

async function fromFile(
    src: string,
    paletteVariables: PaletteColor[],
    options: NormalizedOptions,
): Promise<Variable[]> {
    const { fs, prefix } = options;
    const css = await fs.readFile(src, "utf8");

    const { stylesheet } = parse(css);
    const rule = stylesheet.rules.find(isRootRule);

    return Array.from(getTokens(rule, paletteVariables, prefix));
}

/**
 * Extracts all CSS variables from given filename.
 */
async function getVariables(
    src: string,
    paletteVariables: PaletteColor[],
    options: NormalizedOptions,
): Promise<[name: string, variables: Variable[]]> {
    const { themes } = options;
    const { name } = path.posix.parse(src);
    const theme = themes.find((it) => it.filename === name);
    if (theme) {
        const name = theme.name;
        const variables = await fromFile(src, paletteVariables, options);
        return [name, variables];
    }
    return [name, []];
}

export async function buildMetadata(
    files: string[],
    basename: string,
    paletteVariables: PaletteColor[],
    options: NormalizedOptions,
): Promise<void> {
    const { fs, outdir, themes } = options;

    /* extract variables from each theme */
    const variablesPerTheme = Object.fromEntries(
        await Promise.all(
            files.map((src) => {
                return getVariables(src, paletteVariables, options);
            }),
        ),
    );

    /* get the names of all possible variables */
    const all = Object.values(variablesPerTheme)
        .flat()
        .map((it) => it.name);
    const unique = Array.from(new Set(all)).toSorted((a, b) =>
        a.localeCompare(b),
    );

    /* group variables per variable name */
    const themeNames = themes.map((it) => it.name);
    const metadata: Metadata = {
        themes: themeNames,
        palette: paletteVariables,
        tokens: unique.map((name): Token => {
            let comment: string | null = null;
            const values = themeNames.map(
                (it): [name: string, value: TokenValue] => {
                    /* slow but the amount of variables should be manageable */
                    const entry = variablesPerTheme[it].find(
                        (jt) => name === jt.name,
                    );
                    comment ??= entry?.comment ?? null;
                    return [
                        it,
                        {
                            value: entry?.value ?? null,
                            palette: entry?.palette ?? null,
                        },
                    ];
                },
            );
            return {
                name,
                comment,
                values: Object.fromEntries(values),
            };
        }),
    };

    const serialized = `export default ${JSON.stringify(metadata, null, 2)}`;

    await fs.writeFile(
        path.join(outdir, `${basename}.mjs`),
        serialized,
        "utf8",
    );
    await fs.writeFile(
        path.join(outdir, `${basename}.d.mts`),
        metadataDts,
        "utf8",
    );
}
