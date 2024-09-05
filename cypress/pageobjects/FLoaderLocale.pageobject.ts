import {
    type DefaultCypressChainable,
    type BasePageObject,
} from "@pageobject/common";

export class FLoaderLocalePageobject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;
    public toggleTextButton: () => DefaultCypressChainable;
    public toggleButton: () => DefaultCypressChainable;
    public toggleOverlayButton: () => DefaultCypressChainable;
    public timerInput: () => DefaultCypressChainable;

    /**
     * @param selector - the root of the loader, usually `<div class="loader">...</div>`.
     */
    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(selector);
        this.toggleTextButton = () =>
            cy.get(`${this.selector} [data-test=loader-toggle-text]`);
        this.toggleButton = () =>
            cy.get(`${this.selector} [data-test=loader-toggle] `);
        this.toggleOverlayButton = () =>
            cy.get(`${this.selector} [data-test=loader-toggle-overlay]`);
        this.timerInput = () =>
            cy.get(`${this.selector} [data-test=loader-timer]`);
    }
}
