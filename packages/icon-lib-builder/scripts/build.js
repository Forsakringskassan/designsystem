const path = require("node:path");
const fs = require("node:fs/promises");
const { globSync } = require("glob");
const { optimize } = require("svgo");
const sass = require("sass");
const { name: packageName } = require("../package.json");
const { capitalize } = require("./common");
const { generateIndexFile } = require("./generate-index-file");
const { buildDemo } = require("./build-demo");
const { generatePackageDts } = require("./generate-package-dts");

const dest = "dist";
const templateDir = path.join(__dirname, "../templates");

/**
 * @param {string[]} libraries
 * @returns {Promise<void>}
 */
async function generateDeclarationFile(libraries) {
    const indexPath = path.join(dest, "index.js");
    const dtsPath = path.join(dest, "index.d.ts");
    const indexContent = generateIndexFile(libraries);
    const dtsContent = generatePackageDts(libraries);
    console.log(`Writing ${indexPath}`);
    await fs.writeFile(indexPath, indexContent);
    console.log(`Writing ${dtsPath}`);
    await fs.writeFile(dtsPath, dtsContent);

    for (const template of ["icon-definition.d.ts", "icon-library.d.ts"]) {
        const src = path.join(dest, template);
        const dst = path.join(templateDir, template);
        console.log(`Writing ${src}`);
        await fs.copyFile(dst, src);
    }
}

/**
 * @param {string} library - Name of library
 * @returns {Promise<void>}
 */
async function generateSpritesheetSvg(library, data) {
    const directory = path.join(dest, library);
    const svgPath = path.join(directory, "spritesheet.svg");
    const dtsPath = path.join(directory, "spritesheet.svg.d.ts");
    const svgContent = data.content;
    const dtsContent = [
        `declare const value: string;`,
        `export default value;`,
    ].join("\n");
    console.log(`Writing ${svgPath}`);
    await fs.writeFile(svgPath, svgContent);
    console.log(`Writing ${dtsPath}`);
    await fs.writeFile(dtsPath, dtsContent);
}

/**
 * @param {string} library - Name of library
 * @returns {Promise<void>}
 */
async function generateSpritesheetJson(library, data) {
    const directory = path.join(dest, library);
    const svgPath = path.join(directory, "spritesheet.json");
    const dtsPath = path.join(directory, "spritesheet.json.d.ts");
    const jsonContent = JSON.stringify(data.icons, null, 2);
    const dtsContent = [
        `import { IconDefinition } from "../icon-definition";`,
        ``,
        `declare const value: [`,
        ...data.icons.map((it) => {
            return `    { key: "${it.key}" } & IconDefinition,`;
        }),
        `]`,
        ``,
        `export default value;`,
    ].join("\n");
    console.log(`Writing ${svgPath}`);
    await fs.writeFile(svgPath, jsonContent);
    console.log(`Writing ${dtsPath}`);
    await fs.writeFile(dtsPath, dtsContent);
}
/**
 * @param {string} library
 * @returns {Promise<void>}
 */
async function generateSpritesheetJs(library, data) {
    const templateFolder = path.join(__dirname, "../templates");
    let spritesheet = await fs.readFile(
        path.join(templateFolder, "spritesheet.js"),
        "utf8",
    );
    spritesheet = spritesheet
        .replace(/.*eslint-disable.*/g, "")
        .replace(/PACKAGE/g, JSON.stringify(packageName))
        .replace(/LIBRARY/g, JSON.stringify(library))
        .replace(
            /IMPORT_SPRITESHEET\(\);.*/,
            `const spritesheet = '${data.content}';`,
        );
    let inject = await fs.readFile(
        path.join(templateFolder, "inject.js"),
        "utf-8",
    );
    inject = inject.replace(/.*eslint-disable.*/g, "");
    const content = [spritesheet, inject].join("\n");
    const indexJs = path.join(dest, library, "index.js");
    const indexDts = path.join(dest, library, "index.d.ts");
    console.log(`Writing ${indexJs}`);
    await fs.writeFile(indexJs, content);
    console.log(`Writing ${indexDts}`);
    await fs.writeFile(indexDts, `export {};`);
}

/**
 * @param {string} library
 * @returns {Promise<void>}
 */
async function generateSpritesheetJsNoInject(library, data) {
    const templateFolder = path.join(__dirname, "../templates");
    let spritesheet = await fs.readFile(
        path.join(templateFolder, "spritesheet.js"),
        "utf8",
    );
    spritesheet = spritesheet.replace(
        "function injectSpritesheet",
        "export function injectSpritesheet",
    );
    spritesheet = spritesheet
        .replace(/.*eslint-disable.*/g, "")
        .replace(/PACKAGE/g, JSON.stringify(packageName))
        .replace(/LIBRARY/g, JSON.stringify(library))
        .replace(
            /IMPORT_SPRITESHEET\(\);.*/,
            `const spritesheet = '${data.content}';`,
        );
    const injectJs = path.join(dest, library, "injectSpritesheet.js");
    const injectDts = path.join(dest, library, "injectSpritesheet.d.ts");
    console.log(`Writing ${injectJs}`);
    await fs.writeFile(injectJs, spritesheet);
    console.log(`Writing ${injectDts}`);
    await fs.writeFile(injectDts, `export function injectSpritesheet(): void;`);
}

async function getSpriteSheetdata(directory, files) {
    let content = '<svg xmlns="http://www.w3.org/2000/svg" focusable="false">';
    const icons = [];
    for (const file of files) {
        const id = `${path.basename(directory)}-icon-${path.basename(
            file,
            ".svg",
        )}`;
        const name = path.basename(file, ".svg");
        const prettyName = capitalize(name.replace(/-/g, " "));
        const svgFile = await fs.readFile(path.join(directory, file), "utf8");
        const optimizedSvg = optimize(svgFile, {
            plugins: [
                {
                    name: "preset-default",
                },
                {
                    name: "removeAttrs",
                    params: {
                        attrs: "(id)", // In cases where id="Layer_1" is present
                    },
                },
                {
                    name: "removeDimensions",
                },
            ],
        });

        const symbol = optimizedSvg.data
            .replace(/<svg/g, `<symbol id="${id}"`)
            .replace(/<\/svg>/g, "</symbol>")
            .replace(/ xmlns="[^"]*"/g, "");

        content += symbol;
        icons.push({
            key: id,
            name,
            prettyName,
        });
    }
    content += "</svg>";
    return { content, icons };
}

async function generateStyle(directory, directoryName) {
    const stylePath = path.join(directory, "index.scss");

    try {
        await fs.stat(stylePath);
    } catch {
        return;
    }
    const result = sass.compile(stylePath);
    await fs.writeFile(path.join(dest, directoryName, "index.css"), result.css);
}

async function main() {
    const directories = globSync("icons/*/");
    const directoryNames = directories.map((d) => path.basename(d));
    await fs.rm(dest, { force: true, recursive: true });

    for (const directory of directories) {
        const directoryName = path.basename(directory);
        const files = globSync("**/**.svg", { cwd: directory });
        await fs.mkdir(path.join(dest, directoryName), { recursive: true });

        const data = await getSpriteSheetdata(directory, files);

        await generateStyle(directory, directoryName);
        await generateSpritesheetSvg(directoryName, data);
        await generateSpritesheetJson(directoryName, data);
        await fs.writeFile(
            path.join(dest, directoryName, "index.js"),
            "module.exports = require('./spritesheet.json');",
        );

        await generateSpritesheetJs(directoryName, data);
        await generateSpritesheetJsNoInject(directoryName, data);
    }

    await generateDeclarationFile(directoryNames);

    await fs.copyFile(
        "icons/stacked-icons.json",
        path.join(dest, "stacked-icons.json"),
    );

    buildDemo();
}

main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
