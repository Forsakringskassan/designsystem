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

    /**
     * Get loader root.
     * Only applicable if selector is a parent of loader.
     *
     * @deprecated Use a direct selector and `el()` instead.
     */
    public loader(): DefaultCypressChainable {
        return cy.get(`${this.selector} .loader`);
    }

    public wrapper(): DefaultCypressChainable {
        return cy.get(`${this.selector} .loader__wrapper`);
    }

    public waitText(): DefaultCypressChainable {
        return cy.get(`${this.selector} .loader__wait-text`);
    }
}
