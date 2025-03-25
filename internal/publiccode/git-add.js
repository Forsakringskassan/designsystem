import { execaSync } from "execa";

export function gitAdd(filePath) {
    return execaSync("git", ["add", filePath]);
}
