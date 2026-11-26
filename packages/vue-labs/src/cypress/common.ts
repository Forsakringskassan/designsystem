export type DefaultCypressChainable = Cypress.Chainable<JQuery>;

export interface BasePageObject {
    /**
     * The selector that is used.
     */
    selector: string;
    /**
     * The element.
     */
    el: () => DefaultCypressChainable;
}
