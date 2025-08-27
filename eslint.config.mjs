import globals from "globals";
import defaultConfig from "@forsakringskassan/eslint-config/flat.mjs";
import cliConfig from "@forsakringskassan/eslint-config-cli/flat.mjs";
import cypressConfig from "@forsakringskassan/eslint-config-cypress/flat.mjs";
import jestConfig from "@forsakringskassan/eslint-config-jest/flat.mjs";
import typescriptConfig from "@forsakringskassan/eslint-config-typescript/flat.mjs";
import vueConfig from "@forsakringskassan/eslint-config-vue/flat.mjs";

export default [
    {
        name: "Ignored files",
        ignores: [
            "**/assets/**",
            "**/coverage/**",
            "**/dist/**",
            "**/node_modules/**",
            "**/public/**",
            "**/temp/**",
            "**/typedoc/**",
            "docs/examples/**/*-nolint*",
            "packages/date/lib/**",
            "packages/logic/lib/**",
        ],
    },

    ...defaultConfig,

    cliConfig({
        files: [
            "*.{js,mjs}",
            "{examples,packages,internal}/*/*.{js,ts,cjs,mjs}",
            "{examples,packages,internal}/*/{htmlvalidate,scripts,stylelint}/**/*.{js,ts,cjs,mjs}",
            "scripts/*.{js,ts,cjs,mjs}",
        ],
    }),
    typescriptConfig({
        files: ["**/*.ts", "**/*.mts"],
    }),
    vueConfig(),
    jestConfig(),
    cypressConfig({
        files: ["**/*.cy.[jt]s", "cypress/support/**/*.[jt]s"],
    }),

    {
        name: "local",
        languageOptions: {
            ecmaVersion: 2024,
            sourceType: "module",
        },
    },

    {
        /* E2E tests imports pageobjects from monorepo packages but the import
         * plugin wont resolve them, yielding lots of false positives */
        name: "local/cypress",
        files: ["cypress/**/*.[jt]s"],
        rules: {
            "import/no-extraneous-dependencies": "off",
            "import/order": "off",
        },
    },

    {
        /* These legacy files points to compiled files which may or may not
         * exist yet */
        name: "local/dts",
        files: ["packages/*/*.d.ts"],
        rules: {
            "import/no-unresolved": "off",
        },
    },

    {
        name: "local/docs",
        files: ["docs/src/*.{js,ts}"],
        languageOptions: {
            globals: {
                ...globals.browser,
            },
        },
    },

    {
        name: "local/examples",
        files: ["**/examples/**/*.{js,ts,vue}"],
        rules: {
            "no-console": "off",
            "no-unused-vars": "off",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "eslint-comments/require-description": "off",
            "import/no-duplicates": "off",
            "import/no-extraneous-dependencies": "off",
        },
    },

    {
        name: "local/pull-request-changelog",
        files: [".github/pull-request-changelog/config.mjs"],
        rules: {
            /* the dependencies for these are normally not installed in a
             * development environment but we dont want eslint to yield errors
             * for it as they will be installed in the CI pipeline using this
             * file */
            "import/no-extraneous-dependencies": "off",
            "import/no-unresolved": "off",
        },
    },

    {
        name: "local/native-esm",
        files: ["packages/icon-lib-builder/**/*.js"],
        rules: {
            "import/extensions": "off",
        },
    },

    {
        name: "local/sandbox",
        files: ["internal/vue-sandbox/**/*.{js,ts,vue}"],
        rules: {
            "no-console": "off",
        },
    },
];
