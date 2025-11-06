import path from "node:path";
import { type NormalizedOptions } from "./options.ts";

export async function generateVersion(
    filename: string,
    options: NormalizedOptions,
): Promise<void> {
    const { cwd, fs, version } = options;
    const content = [
        "// This is a generated file. See @fkui/theme-builder",
        `$version: "${version}";`,
        "",
    ].join("\n");
    const dst = path.posix.join(cwd, filename);
    await fs.writeFile(dst, content, "utf-8");
}
