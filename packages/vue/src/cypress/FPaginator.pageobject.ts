import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * Cypress pageobject for `FPaginator`.
 *
 * @public
 */
export class FPaginatorPageObject implements BasePageObject {
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
     * Get the button for navigating to the next page.
     *
     * @returns The button for navigating to the next page.
     */
    public nextButton(): DefaultCypressChainable {
        return cy.get(`${this.selector} .paginator__next`);
    }

    /**
     * Gets the button/buttons for the specified page/pages.
     *
     * @param page - The index of the page button (if number); the number of the page (if string)
     * @returns The button for the specified page (if param `page` is defined); the buttons for all pages shown (if param `page` is undefined).
     */
    public pageButton(page?: number | string): DefaultCypressChainable {
        const pageButtons = cy.get(`${this.selector} .paginator__page`);
        switch (typeof page) {
            case "number":
                return pageButtons.eq(page);
            case "string":
                return pageButtons.contains(page);
            default:
                return pageButtons;
        }
    }

    /**
     * Get the page counter.
     * The element replaces the page buttons in compact mode.
     *
     * @returns The page counter.
     */
    public pageCounter(): DefaultCypressChainable {
        return cy.get(
            `${this.selector} .paginator__page-counter [aria-hidden]`,
        );
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
