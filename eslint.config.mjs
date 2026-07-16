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
            "**/*.spec.ts",
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
        name: "technical-debt/docs",
        files: ["docs/**/*"],
        rules: {
            "unicorn/filename-case": "off",
        },
    },

    {
        rules: {
            "unicorn/no-useless-template-literals": "off",
            "unicorn/numeric-separators-style": "off",
            "unicorn/operator-assignment": "off",
            "unicorn/prefer-array-from-map": "off",
            "unicorn/prefer-array-some": "off",
            "unicorn/prefer-await": "off",
            "unicorn/prefer-dom-node-replace-children": "off",
            "unicorn/prefer-early-return": "off",
            "unicorn/prefer-global-number-constants": "off",
            "unicorn/prefer-https": "off",
            "unicorn/prefer-includes-over-repeated-comparisons": "off",
            "unicorn/prefer-logical-operator-over-ternary": "off",
            "unicorn/prefer-math-constants": "off",
            "unicorn/prefer-modern-dom-apis": "off",
            "unicorn/prefer-native-coercion-functions": "off",
            "unicorn/prefer-number-coercion": "off",
            "unicorn/prefer-number-is-safe-integer": "off",
            "unicorn/prefer-object-define-properties": "off",
            "unicorn/prefer-object-iterable-methods": "off",
            "unicorn/prefer-observer-apis": "off",
            "unicorn/prefer-promise-with-resolvers": "off",
            "unicorn/prefer-queue-microtask": "off",
            "unicorn/prefer-set-has": "off",
            "unicorn/prefer-split-limit": "off",
            "unicorn/prefer-string-repeat": "off",
            "unicorn/prefer-string-replace-all": "off",
            "unicorn/prefer-toggle-attribute": "off",
            "unicorn/prefer-type-literal-last": "off",
            "unicorn/prefer-unicode-code-point-escapes": "off",
            "unicorn/require-array-sort-compare": "off",
        },
    },
];
