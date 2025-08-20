/// <reference types="cypress" />

import "@forsakringskassan/cypress-visual-regression/commands";
import "@forsakringskassan/cypress-axe/support";
import "cypress-html-validate/dist/commands";
import "../assertions/trimmedText";

if (Cypress.env("DISABLE_VISUAL_REGRESSION")) {
    Cypress.Commands.overwrite("toMatchScreenshot", () => {
        Cypress.log({
            message: "Visual regression disabled, ignoring assertion",
        });
    });
}

afterEach(() => {
    cy.htmlvalidate();
});
