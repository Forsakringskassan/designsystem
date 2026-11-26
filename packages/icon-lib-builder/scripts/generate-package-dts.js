import { camelCase } from "./common.js";

/**
 * @param {string[]} libraries - all library names
 * @returns {string]
 */
export function generatePackageDts(libraries) {
    const keys = libraries.map(camelCase);
    return [
        `import { IconLibrary } from "./icon-library";`,
        ...keys.map((key, i) => {
            return `import ${key}Meta from "./${libraries[i]}/spritesheet.json";`;
        }),
        ``,
        `export { IconDefinition } from "./icon-definition";`,
        `export { IconLibrary } from "./icon-library";`,
        ``,
        `export type IconPackage = Record<string, IconLibrary>;`,
        ``,
        `declare const value: {`,
        ...keys.map((key) => {
            return `    ${key}: { metadata: typeof ${key}Meta } & IconLibrary,`;
        }),
        `}`,
        ``,
        `export default value;`,
    ].join("\n");
}
