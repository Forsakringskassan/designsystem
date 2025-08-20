import { pathToFileURL } from "node:url";
import { styleText } from "node:util";
import { type ConfigData } from "html-validate";
import { type Manifest, Generator } from "@forsakringskassan/docs-generator";
import { defineConfig } from "cypress";
import cypressSplit from "@fkui/cypress-split";
import getToMatchScreenshotsPlugin from "@forsakringskassan/cypress-visual-regression/plugin";
import { init as installAxe } from "@forsakringskassan/cypress-axe/plugins";
import htmlvalidate, {
    CypressHtmlValidateOptions,
} from "cypress-html-validate/plugin";
import exclude from "./packages/vue/htmlvalidate/cypress";

import config from "./docs.config";

async function getDocsPages(): Promise<Manifest["pages"]> {
    const importMetaUrl = pathToFileURL(__filename);
    const docs = new Generator(importMetaUrl, config);
    const manifest = await docs.manifest(config.sourceFiles);
    return manifest.pages.filter((it) => {
        return it.path.endsWith(".html");
    });
}

const htmlValidateConfig: ConfigData = {
    rules: {
        /* some examples show how to use custom heading levels which often
         * doesn't match the heading outline for the documentation */
        "heading-level": ["off"],

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
        /* @forsakringskassan/docs-live-example examples */
        ".live-example__example",
    ],
    exclude,
};

const disableVisualRegression = (() => {
    return Boolean(process.env.CI);
})();

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
        async setupNodeEvents(on, config) {
            config.env.pages = await getDocsPages();

            getToMatchScreenshotsPlugin(on, config);
            return install(on, config);
        },
    },
    component: {
        setupNodeEvents(on, config) {
            /* eslint-disable-next-line no-console -- expected to log */
            console.log(
                "Visual regression:",
                disableVisualRegression
                    ? styleText("red", "disabled")
                    : styleText("green", "enabled"),
            );
            config.env.DISABLE_VISUAL_REGRESSION = disableVisualRegression;
            getToMatchScreenshotsPlugin(on, config);
            config = install(on, config);
            config = cypressSplit(on, config);
            return config;
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
