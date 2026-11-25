import { createMount } from "@forsakringskassan/cypress-config/support";
import { injectSpritesheet } from "@fkui/icon-lib-default/dist/f/injectSpritesheet";
import "@fkui/theme-default";
import "cypress-real-events";

import "./main.scss";
import "./common";

const mount = await createMount({
    fkuiVue: await import("@fkui/vue"),
});

Cypress.Commands.add("mount", (component, options = {}) => {
    options.global ??= {};
    options.global.plugins ??= [];

    /* handle warnings as errors */
    options.global.plugins.push({
        install(app) {
            app.config.warnHandler = (err, _vm, info) => {
                assert.fail([err, info].join("\n"));
            };
        },
    });

    return mount(component, options);
});

injectSpritesheet();

const uncaughtErrors: string[] = [];

Cypress.on("uncaught:exception", (err, runnable) => {
    uncaughtErrors.push(runnable.fullTitle());
    return true;
});

after(() => {
    if (uncaughtErrors.length > 0) {
        throw new Error(
            `⚠️ Suite failed because an uncaught exception occurred earlier in: ${uncaughtErrors}`,
        );
    }
});
