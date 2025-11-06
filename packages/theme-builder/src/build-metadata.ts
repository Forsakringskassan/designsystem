import path from "node:path/posix";
import {
    type CssAtRuleAST,
    type CssRuleAST,
    CssTypes,
    parse,
} from "@adobe/css-tools";
import { type VariableGroup } from "./extract-sass-variables.ts";
import { type NormalizedOptions } from "./options.ts";

interface Token {
    name: string;
    value: string;
    palette: string | null;
    comment: string | null;
}

interface Metadata {
    tokens: Token[];
}

const metadataDts = `
export interface Token {
    readonly name: string;
    readonly value: string;
    readonly palette: string | null;
    readonly comment: string | null;
}

export interface Metadata {
    readonly tokens: Token[];
}

declare const metadata: Metadata;
export default metadata;
`;

function isRootRule(rule: CssAtRuleAST): rule is CssRuleAST {
    return rule.type === CssTypes.rule && rule.selectors.includes(":root");
}

function* getTokens(
    rule: CssRuleAST | undefined,
    palette: Record<string, string>,
    prefix: string,
): Generator<Token> {
    if (!rule) {
        return;
    }
    let last: Token | null = null;
    for (const decl of rule.declarations) {
        if (
            decl.type === CssTypes.declaration &&
            decl.property.startsWith(`--${prefix}-`)
        ) {
            last = {
                name: decl.property,
                value: decl.value,
                palette: palette[decl.value] ?? null,
                comment: null,
            };
            yield last;
        } else if (decl.type === CssTypes.comment && last !== null) {
            last.comment = decl.comment.trim();
        }
    }
}

export async function buildMetadata(
    src: string,
    basename: string,
    paletteVariables: VariableGroup[],
    options: NormalizedOptions,
): Promise<void> {
    const { fs, outdir, prefix } = options;
    const css = await fs.readFile(src, "utf-8");

    const palette = Object.fromEntries(
        paletteVariables
            .map((it) => it.variables)
            .flat()
            .map((it) => [it.value, it.name]),
    );
    const { stylesheet } = parse(css);
    const rule = stylesheet.rules.find(isRootRule);

    const metadata: Metadata = {
        tokens: Array.from(getTokens(rule, palette, prefix)),
    };

    const serialized = `export default ${JSON.stringify(metadata, null, 2)}`;

    await fs.writeFile(
        path.join(outdir, `${basename}.mjs`),
        serialized,
        "utf-8",
    );
    await fs.writeFile(
        path.join(outdir, `${basename}.d.mts`),
        metadataDts,
        "utf-8",
    );
}
