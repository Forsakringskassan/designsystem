import { fileURLToPath } from "node:url";
import { defineConfig } from "html-validate";

/**
 * @param {string} specifier
 * @returns {string}
 */
function resolve(specifier) {
    return fileURLToPath(import.meta.resolve(specifier));
}

export default defineConfig({
    plugins: ["html-validate-vue"],
    elements: [
        "html5",
        resolve("../elements/overrides.mjs"),
        resolve("../elements/components.mjs"),
        resolve("../elements/internal-components.mjs"),
    ],
    rules: {
        "fkui/button-group": "error",
        "fkui/class-deprecated": "error",
        "fkui/slot-deprecated": "error",
        "fkui/prefer-ficon": "error",
        "fkui/required-max-length": "error",
        "fkui/finteractivetable-selectable-description": "error",
        "fkui/ftextfield-formatter-validation": "error",
        "fkui/no-template-modal": "error",
        "fkui/ftablecolumn-name": "error",
        "vue/prefer-slot-shorthand": "off",
    },
});
