import { FDetailsPanelSelectors } from "../selectors";
import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * Cypress pageobject for`FDetailsPanel`.
 *
 * @public
 */
export class FDetailsPanelPageObject implements BasePageObject {
    private _selectors: ReturnType<typeof FDetailsPanelSelectors>;

    protected constructor(selector: string) {
        this._selectors = FDetailsPanelSelectors(selector);
    }

    /** Base selector */
    public get selector(): string {
        return this._selectors.selector;
    }

    /**
     * Get a selector based on the panel name.
     */
    protected static nameSelector(name: string): string {
        return `[data-panel-name="${name}"]`;
    }

    /**
     * Get details panel based on its `name` prop.
     *
     * @param name - Name given to panel.
     */
    public static fromName(name: string): FDetailsPanelPageObject {
        const selector = FDetailsPanelPageObject.nameSelector(name);
        return new FDetailsPanelPageObject(selector);
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
     * Default submit button.
     */
    public closeButton(): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        return this.el().shadow().find(".panel__close-button");
    }
}
