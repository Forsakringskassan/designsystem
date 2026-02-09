import path from "node:path";

/**
 * @typedef {Object} Asset {
 * @property {string} name
 * @property {string} filename
 * @property {string} filePath
 */

export const fontDir = path.join(import.meta.dirname, "fonts");

/**
 * @param {string} name
 * @returns {Asset}
 */
function defineAsset(name) {
    return {
        name,
        filename: `fonts/${name}`,
        filePath: path.join(fontDir, name),
    };
}

/** @type {Asset[]} */
export const assets = [
    defineAsset("Inter-Bold.woff2"),
    defineAsset("Inter-Light.woff2"),
    defineAsset("Inter-Medium.woff2"),
    defineAsset("Inter-Regular.woff2"),
    defineAsset("Inter-SemiBold.woff2"),
];

export default assets;
