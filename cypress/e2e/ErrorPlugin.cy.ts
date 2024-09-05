import { ErrorPluginPageobject } from "../pageobjects/ErrorPlugin.pageobject";

describe("ErrorPlugin", () => {
    const page = new ErrorPluginPageobject();

    beforeEach(() => {
        cy.clearLocalStorage();
        cy.visit("/develop/plugins/errorplugin.html", {
            onBeforeLoad(win) {
                cy.spy(win.console, "error").as("consoleError");
                cy.spy(win.console, "warn").as("consoleWarn");
            },
        });
    });

    it("error page should not initially be visible", () => {
        page.errorPage.should("not.exist");
    });

    it("should show error page when error is triggered", () => {
        page.generateError.click();
        page.errorPage.should("be.visible");

        /* Assert console.error() was called with the correct arguments:
         *
         *   1. Error type
         *   2. Error instance (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
         *   3. Vue vm
         *
         * The error instance is matched partially, i.e. only the message is matched.
         */
        cy.get("@consoleError").should(
            "be.calledWith",
            Cypress.sinon.match(/^Error in .*:$/),
            Cypress.sinon.match({
                message: "It's game over man!",
            }),
            Cypress.sinon.match.any,
        );
    });

    it("should show error page when warning is triggered", () => {
        page.generateWarning.click();
        page.errorPage.should("be.visible");

        /* Assert console.warn() was called with the correct arguments:
         *
         *   1. Error type
         *   2. Warning message
         *   3. Stacktrace
         */
        cy.get("@consoleWarn").should(
            "be.calledWith",
            "Warning:",
            "It's game over man!",
            Cypress.sinon.match.string,
        );
    });
});
