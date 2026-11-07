import path from "node:path/posix";
import {
    type CssAtRuleAST,
    type CssRuleAST,
    CssTypes,
    parse,
} from "@adobe/css-tools";
import { type VariableGroup } from "./extract-sass-variables.ts";
import { type NormalizedOptions } from "./options.ts";

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
}

const metadataDts = `
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
}

declare const metadata: Metadata;
export default metadata;
`;

function isRootRule(rule: CssAtRuleAST): rule is CssRuleAST {
    return rule.type === CssTypes.rule && rule.selectors.includes(":root");
}

interface PaletteLookup {
    /** Palette name by color value */
    readonly byValue: Record<string, string>;
    /** Color value by palette name */
    readonly byName: Record<string, string>;
}

/**
 * Resolves a declaration value to the palette color it refers to, either by
 * referencing the palette custom property or by having the same color value.
 */
function resolveValue(
    value: string,
    palette: PaletteLookup,
    prefix: string,
): Pick<Variable, "value" | "palette"> {
    const match = new RegExp(`^var\\(--${prefix}-palette-([^)]+)\\)$`).exec(
        value,
    );
    const name = match?.[1];
    if (name && Object.hasOwn(palette.byName, name)) {
        return { value: palette.byName[name], palette: name };
    }
    return { value, palette: palette.byValue[value] ?? null };
}

function* getTokens(
    rule: CssRuleAST | undefined,
    palette: PaletteLookup,
    prefix: string,
): Generator<Variable> {
    if (!rule) {
        return;
    }
    let last: Variable | null = null;
    for (const decl of rule.declarations) {
        if (
            decl.type === CssTypes.declaration &&
            decl.property.startsWith(`--${prefix}-palette-`)
        ) {
            /* palette variables are not tokens */
            last = null;
        } else if (
            decl.type === CssTypes.declaration &&
            decl.property.startsWith(`--${prefix}-`)
        ) {
            last = {
                name: decl.property,
                ...resolveValue(decl.value, palette, prefix),
                comment: null,
            };
            yield last;
        } else if (decl.type === CssTypes.comment && last !== null) {
            last.comment = decl.comment.trim();
        }
    }
}

async function fromFile(
    src: string,
    paletteVariables: VariableGroup[],
    options: NormalizedOptions,
): Promise<Variable[]> {
    const { fs, prefix } = options;
    const css = await fs.readFile(src, "utf8");

    const entries = paletteVariables.flatMap((it) => it.variables);
    const palette: PaletteLookup = {
        byValue: Object.fromEntries(entries.map((it) => [it.value, it.name])),
        byName: Object.fromEntries(entries.map((it) => [it.name, it.value])),
    };
    const { stylesheet } = parse(css);
    const rule = stylesheet.rules.find(isRootRule);

    return Array.from(getTokens(rule, palette, prefix));
}

/**
 * Extracts all CSS variables from given filename.
 */
async function getVariables(
    src: string,
    paletteVariables: VariableGroup[],
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
    paletteVariables: VariableGroup[],
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
