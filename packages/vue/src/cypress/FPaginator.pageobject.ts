import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * Cypress pageobject for `FPaginator`.
 *
 * @public
 */
export class FPaginatorPageObject implements BasePageObject {
    public selector: string;

    /**
     * @param selector - the root of the FPaginator component
     */
    public constructor(selector: string) {
        this.selector = selector;
    }

    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }

    public currentPageButton(): DefaultCypressChainable {
        return cy.get(`${this.selector} .paginator__page--active`);
    }

    public firstPageButton(): DefaultCypressChainable {
        return cy.get(`${this.selector} .paginator__pages :first-child`);
    }

    public lastPageButton(): DefaultCypressChainable {
        return cy.get(`${this.selector} .paginator__pages :last-child`);
    }

    public nextButton(): DefaultCypressChainable {
        return cy.get(`${this.selector} .paginator__next`);
    }

    public pageButtons(): DefaultCypressChainable {
        return cy.get(`${this.selector} .paginator__page`);
    }

    public pageButton(page: number): DefaultCypressChainable {
        return cy.contains(`${this.selector} .paginator__page`, page);
    }

    public pageCounter(): DefaultCypressChainable {
        return cy.get(`${this.selector} .paginator__page-counter`);
    }

    public previousButton(): DefaultCypressChainable {
        return cy.get(`${this.selector} .paginator__previous`);
    }
}
