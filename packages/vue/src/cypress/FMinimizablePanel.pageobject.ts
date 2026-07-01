import { FMinimizablePanelSelectors } from "../selectors";
import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * Cypress pageobject for`FMinimizablePanel`.
 *
 * @public
 */
export class FMinimizablePanelPageObject implements BasePageObject {
    private _selectors: ReturnType<typeof FMinimizablePanelSelectors>;

    /**
     * @param selector - panel selector.
     */
    public constructor(selector: string) {
        this._selectors = FMinimizablePanelSelectors(selector);
    }

    public get selector(): string {
        return this._selectors.selector;
    }

    /**
     * Panel element.
     */
    public el(): DefaultCypressChainable {
        return cy.get(this._selectors.selector);
    }

    /**
     * Content in header slot (as defined by consumer).
     */
    public header(): Cypress.Chainable<JQuery> {
        return cy.get(this._selectors.header());
    }

    /**
     * Content in content slot (as defined by consumer).
     */
    public content(): Cypress.Chainable<JQuery> {
        return cy.get(this._selectors.content());
    }

    /**
     * Content in footer slot (as defined by consumer).
     */
    public footer(): Cypress.Chainable<JQuery> {
        return cy.get(this._selectors.footer());
    }

    /**
     * Toggle button.
     */
    public toggleButton(): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        return this.el().shadow().find(".panel__button");
    }
}
