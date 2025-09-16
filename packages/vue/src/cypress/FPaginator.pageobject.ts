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
    public constructor(selector: string = ".paginator") {
        this.selector = selector;
    }

    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }

    public paginator(): DefaultCypressChainable {
        return this.el().get(".paginator");
    }

    public currentPageButton(): DefaultCypressChainable {
        return cy.get(`.paginator__page--active`);
    }

    public previousButton(): DefaultCypressChainable {
        return cy.get(`.paginator__previous`);
    }

    public nextButton(): DefaultCypressChainable {
        return cy.get(`.paginator__next`);
    }

    public pageButton(page: number): DefaultCypressChainable {
        return cy.contains(`.paginator__page`, page);
    }

    public firstPageButton(): DefaultCypressChainable {
        return cy.get(`.paginator__pages`).children().first();
    }

    public lastPageButton(): DefaultCypressChainable {
        return cy.get(`.paginator__pages`).children().last();
    }
}
