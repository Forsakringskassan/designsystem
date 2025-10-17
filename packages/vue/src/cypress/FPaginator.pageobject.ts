import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * Cypress pageobject for `FPaginator`.
 *
 * @public
 */
export class FPaginatorPageObject implements BasePageObject {
    public selector: string;

    /**
     * @param selector - the root of the definition list
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
        return cy.get(`${this.selector} .paginator__pages`).children().first();
    }

    public lastPageButton(): DefaultCypressChainable {
        return cy.get(`${this.selector} .paginator__pages`).children().last();
    }

    public nextButton(): DefaultCypressChainable {
        return cy.get(`${this.selector} .paginator__next`);
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
