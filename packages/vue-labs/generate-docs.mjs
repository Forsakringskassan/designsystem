import path from "node:path";
import module from "node:module";
import {
    frontMatterFileReader,
    vueFileReader,
    Generator,
    versionProcessor,
    searchProcessor,
} from "@forsakringskassan/docs-generator";

const require = module.createRequire(import.meta.url);

const pkg = require("./package.json");

const docs = new Generator({
    site: {
        name: "FKUI Labs",
        lang: "sv",
    },
    outputFolder: "./public",
    cacheFolder: "./temp/docs",
    exampleFolders: ["./src"],
    vendor: ["vue", "@fkui/logic", "@fkui/date", "@fkui/vue"],
    processors: [searchProcessor(), versionProcessor(pkg, "toolbar")],
    setupPath: path.resolve("docs/src/setup.ts"),
});

docs.compileScript("main", "./docs/src/main.js", {
    appendTo: "body",
});

docs.compileStyle("docs", "./docs/src/docs-theme.scss", {
    appendTo: "head",
});

docs.compileStyle("docs-fkui", "./docs/src/fkui-theme.scss", {
    appendTo: "head",
    attributes: {
        data: {
            theme: "fkui",
        },
        disabled: true,
    },
});

try {
    await docs.build([
        {
            include: "docs/**/*.md",
            basePath: "docs",
            fileReader: frontMatterFileReader,
        },
        {
            include: [
                "src/components/**/*.vue",
                "src/internal-components/**/*.vue",
            ],
            exclude: ["src/**/examples/*.vue", "src/**/ct/*.vue"],
            fileReader: vueFileReader,
        },
    ]);
} catch (err) {
    console.error(err.prettyError ? err.prettyError() : err);
    process.exitCode = 1;
}
