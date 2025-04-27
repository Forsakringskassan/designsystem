require("@forsakringskassan/eslint-config/patch/modern-module-resolution");

module.exports = {
    extends: ["@forsakringskassan"],
    root: true,

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
            files: ["*.ts", "*.mts"],
            extends: ["@forsakringskassan/typescript"],
        },

        {
            files: "*.vue",
            extends: ["@forsakringskassan/vue"],
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

        {
            files: [".github/pull-request-changelog/config.mjs"],
            rules: {
                /* the dependencies for these are normally not installed in a
                 * development environment but we dont want eslint to yield errors for
                 * it as they will be installed in the CI pipeline using this file */
                "import/no-extraneous-dependencies": "off",
                "import/no-unresolved": "off",
            },
        },
    ],
};
