import fs from "node:fs/promises";
import path from "node:path";
import { glob } from "glob";

let n = 0;
console.group("Patching vue-tsc dts files (microsoft/rushstack#5146)");

const filenames = await glob("**/*.vue.d.ts", { cwd: "temp/types" });
const promises = filenames.map(async (filename) => {
    const filePath = path.join("temp/types", filename);
    const content = await fs.readFile(filePath, "utf-8");
    const updated = content.replace(
        /declare var (__VLS_\d+)/,
        "declare const $1",
    );
    if (content !== updated) {
        await fs.writeFile(filePath, updated, "utf-8");
        n++;
        console.log(filename);
    }
});
await Promise.all(promises);

console.groupEnd();
console.log(`${n} file${n === 1 ? "" : "s"} patches\n`);
