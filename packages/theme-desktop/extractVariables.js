#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { moduleReturnVariables } = require("get-css-variables");
const { globSync } = require("glob");

globSync("dist/*.css").forEach((file) => {
    const content = moduleReturnVariables(fs.readFileSync(file, "utf-8"));
    const fileName = path.basename(file, path.extname(file));
    fs.writeFileSync(`dist/${fileName}.js`, content);
});

fs.mkdirSync("dist", { recursive: true });
