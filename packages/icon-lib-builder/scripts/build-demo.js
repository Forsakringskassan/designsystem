const fs = require("node:fs");
const path = require("node:path");
const { globSync } = require("glob");

/**
 * Read and parse a JSON file.
 *
 * @param {string} filePath - File to read.
 * @returns {any} Parsed content.
 */
function loadJsonFile(filePath) {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function buildDemo() {
    const dest = "dist";
    const binFolder = __dirname;
    const destFolder = path.resolve("./dist");
    const templatesFolder = path.join(binFolder, "../templates");
    const stackedIcons = loadJsonFile(
        path.join(destFolder, "stacked-icons.json"),
    );

    let iconMarkup = "";
    let spritesheets = "";

    for (const directory of globSync(`${dest}/*/`)) {
        const directoryName = path.basename(directory);

        const iconList = loadJsonFile(
            path.join(path.resolve(directory), "spritesheet.json"),
        );

        spritesheets += fs.readFileSync(
            path.join(path.resolve(directory), "spritesheet.svg"),
        );

        iconMarkup += `
        <h2>Library folder: ${directoryName}</h2>
        <div class="container">
    `;

        const libraryMarkup = iconList.map((icon) => {
            return /* HTML */ `
                <div class="item">
                    <svg focusable="false" class="icon">
                        <use href="#${icon.key}"></use>
                    </svg>
                    <p>${icon.name}<br /><small>(${icon.key})</small></p>
                </div>
            `;
        });

        iconMarkup += libraryMarkup.join("\n");
        iconMarkup += `</div>`;
    }

    const demoPageMarkup = `
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="./demo.css">
    </head>
    <body>
        <h1>Icons</h1>
        <div class="hidden">${spritesheets}</div>
        <div>${iconMarkup}</div>
        <h2>Stacked icons</h2>
        <pre>${JSON.stringify(stackedIcons, null, 2)}</pre>
    </body>
</html>
`;

    fs.writeFileSync(`${dest}/index.html`, demoPageMarkup);
    fs.copyFileSync(path.join(templatesFolder, "demo.css"), `${dest}/demo.css`);
}

module.exports = { buildDemo };
