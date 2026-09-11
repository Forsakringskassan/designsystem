import { mount } from "@forsakringskassan/cypress-config/support";
import { injectSpritesheet } from "@fkui/icon-lib-default/dist/f/injectSpritesheet";
import "@fkui/theme-default";
import "cypress-real-events";

import "./main.scss";
import "./common";

Cypress.Commands.add("mount", (component, options = {}) => {
    options.global ??= {};
    options.global.plugins ??= [];

    /* handle warnings as errors */
    options.global.plugins.push({
        install(app) {
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
