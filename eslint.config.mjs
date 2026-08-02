import fs from "node:fs/promises";
import defaultConfig, {
    docsConfig,
    examplesConfig,
    sandboxConfig,
} from "@forsakringskassan/eslint-config";
import cliConfig from "@forsakringskassan/eslint-config-cli";
import cypressConfig from "@forsakringskassan/eslint-config-cypress";
import jestConfig from "@forsakringskassan/eslint-config-jest";
import typescriptConfig from "@forsakringskassan/eslint-config-typescript";
import typeinfoConfig from "@forsakringskassan/eslint-config-typescript-typeinfo";
import vitestConfig from "@forsakringskassan/eslint-config-vitest";
import vueConfig from "@forsakringskassan/eslint-config-vue";

async function readJsonFile(filePath) {
    const content = await fs.readFile(filePath, "utf8");
    return JSON.parse(content);
}

const pkg = await readJsonFile("packages/vue/package.json");

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
    typescriptConfig(),
    typeinfoConfig(import.meta.dirname, {
        files: ["{examples,internal,packages}/**/*.{ts,vue}"],
        ignores: [
            "**/*.d.ts",
            "**/*.cy.ts",
            "**/jest.setup.ts",
            "**/vitest.setup.ts",
            "**/vite.config.ts",
            "**/docs/**",
        ],
    }),
    vueConfig(),
    jestConfig({
        files: ["**/*jest.spec.ts"],
    }),
    vitestConfig({
        ignores: ["**/*jest.spec.ts"],
    }),
    cypressConfig(),
    docsConfig(),
    examplesConfig(),
    sandboxConfig(),

    {
        name: "local/pull-request-changelog",
        files: [".github/pull-request-changelog/config.mjs"],
        rules: {
            /* the dependencies for these are normally not installed in a
             * development environment but we dont want eslint to yield errors
             * for it as they will be installed in the CI pipeline using this
             * file */
            "import-x/no-extraneous-dependencies": "off",
            "import-x/no-unresolved": "off",
        },
    },

    {
        name: "local/native-esm",
        files: ["packages/icon-lib-builder/**/*.js"],
        rules: {
            "import-x/extensions": "off",
        },
    },

    {
        name: "local/stricter-rules/vue",
        files: ["**/*.vue"],
        rules: {
            "vue/component-api-style": [
                "error",
                ["script-setup", "composition"], // "script-setup", "composition", "composition-vue2", or "options"
            ],
            "vue/no-unsupported-features": [
                "error",
                {
                    version: pkg.peerDependencies.vue,
                },
            ],
            "vue/block-lang": [
                "error",
                {
                    script: {
                        lang: "ts",
                    },
                },
            ],
        },
    },

    {
        name: "local/vue-allow-style",
        files: [
            "**/examples/*.vue",
            "**/*.ce.vue",
            "{docs,examples,internal}/**/*.vue",
        ],
        rules: {
            "vue/no-restricted-block": "off",
        },
    },

    {
        name: "local/selectors",
        files: ["**/*.selectors.ts"],
        rules: {
            /* we explicitly want to use implicit typing for the selector objects */
            "@typescript-eslint/explicit-function-return-type": "off",
        },
    },

    {
        name: "local/test-bundles",
        files: ["packages/vue/test-bundles/*.mjs"],
        rules: {
            /* we want to import @fkui/* packages without them explicitly being listed as dependencies */
            "import-x/no-extraneous-dependencies": "off",
        },
    },

    {
        /* mimic how @vue/eslint-config-typescript disables these typecheckinging rules
         * https://github.com/vuejs/eslint-config-typescript/blob/ff3e8c2a75afda59f16dc5dfd5f1b6e863cb1a2c/src/internals.ts#L153-L168 */
        name: "local/vue-type-checking",
        files: ["**/src/{main,router}.ts"],
        rules: {
            /* gives error on `createApp()` */
            "@typescript-eslint/no-unsafe-argument": "off",
            /* gives error in router configuration */
            "@typescript-eslint/no-unsafe-assignment": "off",
        },
    },

    {
        name: "technical-debt/docs",
        files: ["docs/**/*"],
        rules: {
            "unicorn/filename-case": "off",
        },
    },

    {
        name: "technical-debt",
        files: ["**/*.spec.ts"],
        rules: {
            "@typescript-eslint/no-unnecessary-type-assertion": "off",
            "@typescript-eslint/no-unsafe-argument": "off",
            "@typescript-eslint/no-unsafe-call": "off",
            "@typescript-eslint/no-unsafe-return": "off",
            "@typescript-eslint/non-nullable-type-assertion-style": "off",
            "@typescript-eslint/prefer-nullish-coalescing": "off",
            "@typescript-eslint/require-await": "off",
            "@typescript-eslint/restrict-template-expressions": "off",
            "@typescript-eslint/unbound-method": "off",
            "sonarjs/no-undefined-argument": "off",
        },
    },
];
