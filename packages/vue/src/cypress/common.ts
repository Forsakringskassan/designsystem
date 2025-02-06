/**
 * @public
 */
export type DefaultCypressChainable = Cypress.Chainable<JQuery<HTMLElement>>;

/**
 * @public
 */
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
