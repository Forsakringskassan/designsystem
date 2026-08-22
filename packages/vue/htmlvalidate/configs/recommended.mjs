import { defineConfig } from "html-validate";

export default defineConfig({
    plugins: ["html-validate-vue"],
    elements: [
        "html5",
        import.meta.resolve("../elements/overrides.mjs"),
        import.meta.resolve("../elements/components.mjs"),
        import.meta.resolve("../elements/internal-components.mjs"),
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
