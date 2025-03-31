module.exports = {
    plugins: ["html-validate-vue"],
    elements: [
        "html5",
        require.resolve("../elements/overrides"),
        require.resolve("../elements/components"),
        require.resolve("../elements/internal-components"),
    ],
    rules: {
        "fkui/button-group": "error",
        "fkui/class-deprecated": "error",
        "fkui/prefer-ficon": "error",
        "fkui/required-max-length": "error",
        "fkui/ftextfield-formatter-validation": "error",
        "fkui/no-template-modal": "error",
        "fkui/ftablecolumn-name": "error",
    },
};
