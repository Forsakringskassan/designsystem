#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { globSync } = require("glob");
const { moduleReturnVariables } = require("get-css-variables");

globSync("dist/*.css").forEach((file) => {
    const content = moduleReturnVariables(fs.readFileSync(file, "utf-8"));
    const fileName = path.basename(file, path.extname(file));
    fs.writeFileSync(`dist/${fileName}.js`, content);
});

fs.mkdirSync("dist", { recursive: true });

fs.copyFileSync(
    "src/deprecated-variables.json",
    "dist/deprecated-variables.json",
);
