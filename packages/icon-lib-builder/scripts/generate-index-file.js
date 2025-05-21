import { camelCase } from "./common.js";

export function generateIndexFile(directoryNames) {
    const lib = (dir) => camelCase(dir);
    const libMeta = (dir) => `${lib(dir)}Meta`;
    const libInject = (dir) => `${lib(dir)}Inject`;

    const metaImports = directoryNames.map(
        (it) => `import ${libMeta(it)} from "./${it}/spritesheet.json";`,
    );

    const injectImports = directoryNames.map(
        (it) =>
            `import { injectSpritesheet as ${libInject(
                it,
            )} } from "./${it}/injectSpritesheet";`,
    );

    const exports = directoryNames.map(
        (it) =>
            `${lib(it)}: { metadata: ${libMeta(
                it,
            )}, injectSpritesheet: ${libInject(it)} },`,
    );

    return [
        ...metaImports,
        ...injectImports,
        "export default {",
        ...exports,
        "};",
    ].join("\n");
}
