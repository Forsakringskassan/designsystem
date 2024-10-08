import { type ConfigData } from "html-validate";
import { type Manifest, Generator } from "@forsakringskassan/docs-generator";
import { defineConfig } from "cypress";
import getToMatchScreenshotsPlugin from "@forsakringskassan/cypress-visual-regression/plugin";
import { init as installAxe } from "@forsakringskassan/cypress-axe/plugins";
import htmlvalidate, {
    CypressHtmlValidateOptions,
} from "cypress-html-validate/plugin";
import exclude from "./packages/vue/htmlvalidate/cypress";

import config from "./docs.config";

async function getDocsPagesImpl(): Promise<Manifest["pages"]> {
    const docs = new Generator(config);
    const manifest = await docs.manifest(config.sourceFiles);
    return manifest.pages.filter((it) => {
        return it.path.endsWith(".html");
    });
}

function memoize<T>(fn: (() => T) & { cache?: T }): () => T {
    return () => {
        if (!fn.cache) {
            fn.cache = fn();
        }
        return fn.cache;
    };
}

const getDocsPages = memoize(getDocsPagesImpl);

const htmlValidateConfig: ConfigData = {
    rules: {
        "heading-level": [
            "error",
            {
                /* some examples show how to use custom heading levels which
                 * often doesn't match the heading outline for the
                 * documentation */
                minInitialRank: "any",
                sectioningRoots: [
                    "dialog",
                    '[role="dialog"]',
                    ".code-preview__preview",
                    "footer",
                ],
            },
        ],
        /* prevents mismatches from disabled rules which does not trigger errors
         * when Cypress tests are running but would yield errors during normal
         * validation */
        "no-unused-disable": "off",

        /* we cannot use native progressbar element due to SLA */
        "prefer-native-element": [
            "error",
            {
                exclude: ["progressbar"],
            },
        ],

        /* sadly we dont use SRI at FK */
        "require-sri": "off",
    },
};

const htmlValidateOptions: CypressHtmlValidateOptions = {
    include: [
        /* Cypress component tests */
        "#__cy_vue_root > div",
        /* @forsakringskassan/docs-generator examples */
        ".code-preview__preview",
    ],
    exclude,
};

export default defineConfig({
    // Cypress may sometimes restart tests when it detects a changed file in the __screenshot__ folder.
    watchForFileChanges: false,
    /* disable video recording, it is to slow both on remote machines and on
     * CI/CD testing. */
    video: false,
    reporter: require.resolve("mocha-multi-reporters"),
    reporterOptions: {
        reporterEnabled: "spec, mocha-junit-reporter",
        mochaJunitReporterReporterOptions: {
            mochaFile: "test-results/cypress-test-output_[hash].xml",
        },
    },
    e2e: {
        baseUrl: "http://localhost:8080",
        setupNodeEvents(on, config) {
            on("task", {
                getDocsPages(): Promise<Manifest["pages"]> {
                    return getDocsPages();
                },
            });

            getToMatchScreenshotsPlugin(on, config);
            return install(on, config);
        },
    },
    component: {
        setupNodeEvents(on, config) {
            getToMatchScreenshotsPlugin(on, config);
            return install(on, config);
        },
        devServer: {
            framework: "vue",
            bundler: "vite",
        },
    },
    hosts: { localhost: "127.0.0.1" },
});

export function install(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions,
): Cypress.PluginConfigOptions {
    htmlvalidate.install(on, htmlValidateConfig, htmlValidateOptions);
    config = installAxe(on, config);
    return config;
}
