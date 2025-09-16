import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * Cypress pageobject for `FPaginator`.
 *
 * @public
 */
export class FPaginatorPageobject implements BasePageObject {
    public selector: string;

    /**
     * @param selector - The root of the FPaginator component
     */
    public constructor(selector: string) {
        this.selector = selector;
    }

    /**
     * Get the root element.
     *
     * @returns The element itself.
     */
    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }

    /**
     * Get the button for the current page.
     *
     * @returns The button for the current page.
     */
    public currentPageButton(): DefaultCypressChainable {
        return cy.get(`${this.selector} .paginator__page--active`);
    }

    /**
     * Get the button for the first page.
     *
     * @returns The button for the first page.
     */
    public firstPageButton(): DefaultCypressChainable {
        return cy.get(`${this.selector} .paginator__page`).first();
    }

    /**
     * Get the button for the last page.
     *
     * @returns The button for the last page.
     */
    public lastPageButton(): DefaultCypressChainable {
        return cy.get(`${this.selector} .paginator__page`).last();
    }

    /**
     * Get the button for navigating to the next page.
     *
     * @returns The button for navigating to the next page.
     */
    public nextButton(): DefaultCypressChainable {
        return cy.get(`${this.selector} .paginator__next`);
    }

    /**
     * Get the buttons for all pages shown.
     *
     * @returns The buttons for all pages shown.
     */
    public pageButtons(): DefaultCypressChainable {
        return cy.get(`${this.selector} .paginator__page`);
    }

    /**
     * Get the button for a specified page.
     *
     * @param page - The number of the page.
     * @returns The button for the specified page.
     */
    public pageButton(page: number): DefaultCypressChainable {
        return cy.contains(`${this.selector} .paginator__page`, page);
    }

    /**
     * Get the page counter.
     * The element replaces the page buttons in compact mode.
     *
     * @returns The page counter.
     */
    public pageCounter(): DefaultCypressChainable {
        return cy.get(`${this.selector} .paginator__page-counter`);
    }

    /**
     * Get the button for navigating to the previous page.
     *
     * @returns The button for navigating to the previous page.
     */
    public previousButton(): DefaultCypressChainable {
        return cy.get(`${this.selector} .paginator__previous`);
    }
}
