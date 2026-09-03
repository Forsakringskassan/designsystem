import { styleText } from "node:util";
import {
    axePlugin,
    defineConfig,
    docsGeneratorPlugin,
    htmlValidatePlugin,
} from "@forsakringskassan/cypress-config";
import getToMatchScreenshotsPlugin from "@forsakringskassan/cypress-visual-regression/plugin";
import { Generator } from "@forsakringskassan/docs-generator";
import config from "./docs.config";
import cypressSplit from "@fkui/cypress-split";

const docs = new Generator(import.meta.url, config);
const sourceFiles = config.sourceFiles;

async function installPlugins(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {
    getToMatchScreenshotsPlugin(on, config, {
        threshold: 0.005,
    });
    config = await axePlugin(on, config);
    config = await htmlValidatePlugin(on, config);
    config = cypressSplit(on, config);
    return config;
}

const disableVisualRegression = (() => {
    return Boolean(process.env.CI);
})();

export default defineConfig(import.meta.dirname, {
    // Cypress may sometimes restart tests when it detects a changed file in the __screenshot__ folder.
    watchForFileChanges: false,
    e2e: {
        baseUrl: "http://localhost:8080",
        async setupNodeEvents(on, config) {
            config = await docsGeneratorPlugin(on, config, docs, sourceFiles);
            return await installPlugins(on, config);
        },
    },
    component: {
        async setupNodeEvents(on, config) {
            console.log(
                "Visual regression:",
                disableVisualRegression
                    ? styleText("red", "disabled")
                    : styleText("green", "enabled"),
            );
            config.expose = {
                DISABLE_VISUAL_REGRESSION: disableVisualRegression,
            };
            return await installPlugins(on, config);
        },
    },
    hosts: { localhost: "127.0.0.1" },
});
