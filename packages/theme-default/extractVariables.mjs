import fs from "node:fs/promises";
import path from "node:path";
import { getVariables } from "get-css-variables";

console.group("Extracting variables from:");

for await (const file of fs.glob("dist/*.css")) {
    const content = await fs.readFile(file, "utf-8");
    const variables = getVariables(content);
    const value = `const value = ${JSON.stringify(variables, null, 2)};`;
    const cjs = [value, `module.exports = value;`].join("\n");
    const cts = [
        `declare const value: Record<string, string>;`,
        `export = value;`,
    ].join("\n");
    const { name } = path.parse(file);
    console.log(file, "->", `dist/${name}.js`);
    await fs.writeFile(`dist/${name}.js`, cjs, "utf-8");
    await fs.writeFile(`dist/${name}.d.ts`, cts, "utf-8");
}

console.groupEnd();

await fs.copyFile(
    "src/deprecated-variables.json",
    "dist/deprecated-variables.json",
);
