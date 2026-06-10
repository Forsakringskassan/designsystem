import { readFile } from "node:fs/promises";

export async function readJsonFile(filePath: string): Promise<void> {
    const content = await readFile(filePath, "utf8");
    return JSON.parse(content);
}
