/// <reference types="cypress" />

import { configure } from "@forsakringskassan/cypress-config/support";
import "@forsakringskassan/cypress-visual-regression/commands";
import "../assertions/trimmed-text";

if (Cypress.expose("DISABLE_VISUAL_REGRESSION")) {
    Cypress.Commands.overwrite("toMatchScreenshot", () => {
        Cypress.log({
            message: "Visual regression disabled, ignoring assertion",
        });
    });
}

configure({
    resetEmulatedMedia: true,
    afterEach: {
        htmlvalidate: true,
    },
});
