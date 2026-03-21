/// <reference types="cypress" />

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Forces the application to run in forced colors mode
             * @param mode - "light" or "dark" color mode, "none" will disable the forced colors
             * @example cy.forcedColors("dark")
             */
            forcedColors(
                mode: "none" | "dark" | "light",
            ): Cypress.Chainable<void>;
        }
    }
}

export {};
