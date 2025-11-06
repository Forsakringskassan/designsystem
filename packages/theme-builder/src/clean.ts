import { type NormalizedOptions } from "./options.ts";

export async function clean(options: NormalizedOptions): Promise<void> {
    const { fs, outdir } = options;
    await fs.rm(outdir, { recursive: true, force: true });
    await fs.mkdir(outdir);
}
