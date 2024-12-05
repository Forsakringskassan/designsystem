/// <reference types="cypress" />

import "@forsakringskassan/cypress-visual-regression/commands";
import "@forsakringskassan/cypress-axe/support";
import "cypress-html-validate/dist/commands";
import "../assertions/trimmedText";

beforeEach(() => {
    cy.document().then((document) => document.fonts.ready);
});

afterEach(() => {
    cy.wait(500);
    //cy.htmlvalidate();
});
