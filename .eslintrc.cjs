require("@forsakringskassan/eslint-config/patch/modern-module-resolution");

module.exports = {
    extends: ["@forsakringskassan"],

    overrides: [
        {
            /* ensure we lint *.cjs and *.mjs files as well */
            files: ["*.cjs", "*.mjs"],
        },
        {
            files: "*.mjs",
            rules: {
                "import/extensions": ["error", "always"],
            },
        },
        {
            files: [
                "./*.{js,mjs}",
                "./{packages,internal}/*/*.{js,ts,cjs,mjs}",
                "./{packages,internal}/*/scripts/**/*.{js,ts,cjs,mjs}",
                "./scripts/*.{js,ts,cjs,mjs}",
            ],
            extends: ["@forsakringskassan/cli"],
        },

        {
            files: "*.ts",
            extends: ["@forsakringskassan/typescript"],
        },

        {
            files: "*.vue",
            extends: ["@forsakringskassan/vue"],
            rules: {
                /* technical debt */
                "vue/block-order": "off",
            },
        },

        {
            files: "**/examples/*.vue",
            rules: {
                "no-console": "off",
                "import/no-extraneous-dependencies": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
            },
        },

        {
            files: "internal/vue-sandbox/src/**/*.vue",
            rules: {
                "no-console": "off",
            },
        },

        {
            files: "*.spec.[jt]s",
            extends: ["@forsakringskassan/jest"],
        },

        {
            files: ["*.cy.[jt]s", "cypress/support/**/*.[jt]s"],
            extends: ["@forsakringskassan/cypress"],
        },

        {
            /* E2E tests imports pageobjects from monorepo packages but the
             * import plugin wont resolve them, yielding lots of false
             * positives */
            files: "cypress/**/*.[jt]s",
            rules: {
                "import/no-extraneous-dependencies": "off",
            },
        },

        {
            /* These legacy files points to compiled files which may or may not
             * exist yet */
            files: "packages/*/*.d.ts",
            rules: {
                "import/no-unresolved": "off",
            },
        },

        {
            files: "docs/examples/**/*.{js,ts}",
            rules: {
                "no-console": "off",
                "no-unused-vars": "off",
                "@typescript-eslint/no-unused-vars": "off",
                "eslint-comments/require-description": "off",
                "import/no-duplicates": "off",
                "import/no-extraneous-dependencies": "off",
            },
        },
    ],
};
