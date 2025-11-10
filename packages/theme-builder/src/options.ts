import type nodefs from "node:fs/promises";

/**
 * @public
 */
export interface Options {
    cwd: string;
    fs?: typeof nodefs;
    logger?: Console;
    outdir?: string;
    prefix?: string;
    version?: string;
}

/**
 * @internal
 */
export interface NormalizedOptions {
    cwd: string;
    fs: typeof nodefs;
    logger: Console;
    outdir: string;
    prefix: string;
    version: string;
    themes: Array<{ name: string; filename: string }>;
}
