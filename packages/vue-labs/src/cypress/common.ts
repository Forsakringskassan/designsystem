export type DefaultCypressChainable = Cypress.Chainable<JQuery<HTMLElement>>;

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
