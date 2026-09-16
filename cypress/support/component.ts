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

Cypress.on("uncaught:exception", (err, { body, fullTitle }) => {
    const match = body.match(
        /<expectedException>([\s\S]*?)<\/expectedException>|<expectedException\s*\/>/i,
    );
    const message = match ? match[1].trim() : null;
    if (message?.length === 0 || (message && err.message.includes(message))) {
        /* suppress error */
        return false;
    }

    uncaughtErrors.push(fullTitle());

    /* fail test */
    return true;
});

after(() => {
    if (uncaughtErrors.length > 0) {
        throw new Error(
            `⚠️ Suite failed because an uncaught exception occurred earlier in: ${uncaughtErrors}`,
        );
    }
});
