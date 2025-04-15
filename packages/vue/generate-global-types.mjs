import fs from "node:fs/promises";
import { generateGlobalTypes } from "@vue/language-core";

const compilerOptions = {
    lib: "vue",
    target: 3.5,
    checkUnknownProps: false,
    checkUnknownEvents: false,
    checkUnknownComponents: false,
};

const globalTypes = generateGlobalTypes(compilerOptions)
    .split("\n")
    /* remove "declare global { ... } */
    .filter((line) => line.startsWith("\t"))
    /* dedent everything one level */
    .map((it) => it.replace(/^\t/, ""))
    .join("\n")
    /* remove constants and functions */
    .replace(/^(const|function)[^]*?(?=^const |^function |^type )/gm, "")
    .replace(/(const|function)[^]*?;$/m, "");

await fs.writeFile("src/@types/vls.d.ts", globalTypes, "utf-8");
