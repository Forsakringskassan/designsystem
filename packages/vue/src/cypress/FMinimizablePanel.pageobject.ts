import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * Cypress pageobject for`FMinimizablePanel`.
 *
 * @public
 */
export class FMinimizablePanelPageObject implements BasePageObject {
    /** Base selector */
    public readonly selector: string;

    /**
     * @param selector - panel selector.
     */
    public constructor(selector: string) {
        this.selector = selector;
    }

    /**
     * Panel element.
     */
    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }

    /**
     * Content in header slot (as defined by consumer).
     */
    public header(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`${this.selector} [slot=header]`);
    }

    /**
     * Content in content slot (as defined by consumer).
     */
    public content(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`${this.selector} [slot=content]`);
    }

    /**
     * Content in footer slot (as defined by consumer).
     */
    public footer(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`${this.selector} [slot=footer]`);
    }

    /**
     * Toggle button.
     */
    public toggleButton(): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        return this.el().shadow().find(".panel__button");
    }
}
