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
import vueConfig from "@forsakringskassan/eslint-config-vue";

async function readJsonFile(filePath) {
    const content = await fs.readFile(filePath);
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
            "**/vite.config.ts",
            "**/docs/**",
        ],
    }),
    vueConfig(),
    jestConfig(),
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
        name: "local/stricter-rules/vue",
        files: ["**/*.vue"],
        rules: {
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
        /* @todo technical debt */
        name: "local/technical-debt",
        rules: {
            "@typescript-eslint/unbound-method": "off",
            "sonarjs/slow-regex": "off",
        },
    },
];
