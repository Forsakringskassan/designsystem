import { type DefaultCypressChainable, type BasePageObject } from "./common";

/**
 * @public
 */
export class FLoaderPageObject implements BasePageObject {
    public selector: string;

    /**
     * @param selector - the root of the loader, usually `<div class="loader">...</div>`.
     */
    public constructor(selector: string = ".loader") {
        this.selector = selector;
    }

    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }

    public wrapper(): DefaultCypressChainable {
        return cy.get(`${this.selector} .loader__wrapper`);
    }

    public waitText(): DefaultCypressChainable {
        return cy.get(`${this.selector} .loader__wait-text`);
    }
}
