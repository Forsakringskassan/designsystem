import { type App } from "vue";
import { mount } from "cypress/vue";
import { injectSpritesheet } from "@fkui/icon-lib-default/dist/f/injectSpritesheet";
import { config, setRunningContext } from "../../packages/vue/src/config";
import {
    FormatPlugin,
    TestPlugin,
    TranslationPlugin,
    ValidationPlugin,
} from "../../packages/vue/src/plugins";
import "@fkui/theme-default";
import "cypress-real-events";

import "./main.scss";
import "./common";

config.teleportTarget = "#teleport";
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace -- module augmentation
    namespace Cypress {
        interface Chainable {
            mount: typeof mount;
        }
    }
}

Cypress.Commands.add("mount", (component, options = {}) => {
    // Setup options object
    options.global ??= {};
    options.global.plugins ??= [];
    options.global.config ??= {};
    options.global.config.compilerOptions ??= {};
    options.global.config.compilerOptions.whitespace = "preserve";

    /* Installing validationPlugin */
    options.global.plugins.push({
        install(app: App) {
            app.use(FormatPlugin);
            app.use(ValidationPlugin);
            app.use(TestPlugin);
            app.use(TranslationPlugin);
            setRunningContext(app);

            /* handle warnings as errors */
            app.config.warnHandler = (msg) => {
                const mochaRunner = Cypress.mocha.getRunner();
                const body = mochaRunner.test?.body ?? "";
                if (!body.includes("<expectedException")) {
                    cy.wrap(`Vue warning: ${msg}`).should("be.empty");
                }
            };
        },
    });

    return mount(component, options);
});

injectSpritesheet();

const uncaughtErrors: string[] = [];

Cypress.on("uncaught:exception", (err) => {
    const mochaRunner = Cypress.mocha.getRunner();
    const currentTest = mochaRunner.test;

    const body = currentTest?.body ?? "";
    const match = body.match(
        /<expectedException>([\s\S]*?)<\/expectedException>|<expectedException\s*\/>/i,
    );
    const message = match ? match[1].trim() : null;
    if (message?.length === 0 || (message && err.message.includes(message))) {
        return false;
    }

    const testName =
        currentTest?.fullTitle() ?? currentTest?.title ?? "<unknown>";

    uncaughtErrors.push(testName);

    return true;
});

after(() => {
    if (uncaughtErrors.length > 0) {
        throw new Error(
            `⚠️ Suite failed because an uncaught exception occurred earlier in: ${uncaughtErrors}`,
        );
    }
});
