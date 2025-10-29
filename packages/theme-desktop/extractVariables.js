#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");
const { getVariables } = require("get-css-variables");
const { globSync } = require("glob");

globSync("dist/*.css").forEach((file) => {
    const variables = getVariables(fs.readFileSync(file, "utf-8"));
    const value = `const value = ${JSON.stringify(variables, null, 2)};`;
    const cjs = [value, `module.exports = value;`].join("\n");
    const cts = [
        `declare const value: Record<string, string>;`,
        `export = value;`,
    ].join("\n");
    const { name } = path.parse(file);
    fs.writeFileSync(`dist/${name}.js`, cjs);
    fs.writeFileSync(`dist/${name}.d.ts`, cts);
});

fs.mkdirSync("dist", { recursive: true });

fs.copyFileSync(
    "src/deprecated-variables.json",
    "dist/deprecated-variables.json",
);
