/// <reference types="cypress" />

import "@forsakringskassan/cypress-visual-regression/commands";
import "@forsakringskassan/cypress-axe/support";
import "cypress-html-validate/dist/commands";
import "../assertions/trimmedText";

afterEach(() => {
    cy.htmlvalidate();
});
