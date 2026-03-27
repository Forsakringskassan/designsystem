module.exports = {
    extends: ["@fkui/vue:recommended"],
    plugins: ["@fkui/vue/htmlvalidate"],

    rules: {
        /* disabled as way to many examples does not include this validator
         * (most of them are reasonable as to not include way to much details
         * and overwhelm the reader) */
        "fkui/required-max-length": "off",

        /* technical debt */
        "fkui/ftextfield-formatter-validation": "off",

        /* disable as many examples use fictive elements (such as
         * `<my-awesome-component>`) and it would become very difficult to
         * maintain a list of valid elements */
        "no-unknown-elements": "off",

        /* disabled as it sometime clashes with validating the generated output
         * in `public/` or in Cypress, this should be fixed more properly but as
         * for now it is disabled */
        "no-unused-disable": "off",
    },
};
