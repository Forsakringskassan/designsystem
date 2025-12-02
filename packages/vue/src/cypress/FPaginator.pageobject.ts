import { FPaginatorPageObject as SelectorPageObject } from "../pageobjects";
import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * Cypress pageobject for `FPaginator`.
 *
 * @public
 */
export class FPaginatorPageObject implements BasePageObject {
    private _selector: SelectorPageObject;

    /**
     * @param selector - The root of the FPaginator component
     */
    public constructor(selector: string = ".paginator") {
        this._selector = new SelectorPageObject(selector);
    }

    public get selector(): string {
        return this._selector.selector;
    }

    /**
     * Get the root element.
     *
     * @returns The element itself.
     */
    public el(): DefaultCypressChainable {
        return cy.get(this._selector.el());
    }

    /**
     * Get the button for the current page.
     *
     * @returns The button for the current page.
     */
    public currentPageButton(): DefaultCypressChainable {
        return cy.get(this._selector.currentPageButton());
    }

    /**
     * Get the button for navigating to the next page.
     *
     * @returns The button for navigating to the next page.
     */
    public nextButton(): DefaultCypressChainable {
        return cy.get(this._selector.nextButton());
    }

    /**
     * Gets the button/buttons for the specified page/pages.
     *
     * @param page - The index of the page button (if number); the number of the page (if string)
     * @returns The button for the specified page (if param `page` is defined); the buttons for all pages shown (if param `page` is undefined).
     */
    public pageButton(page?: number | string): DefaultCypressChainable {
        switch (typeof page) {
            case "number":
                return cy.get(this._selector.pageButton({ byIndex: page }));
            case "string":
                return cy.get(this._selector.pageButton({ byLabel: page }));
            default:
                return cy.get(this._selector.pageButtons());
        }
    }

    /**
     * Get the page counter.
     * The element replaces the page buttons in compact mode.
     *
     * @returns The page counter.
     */
    public pageCounter(): DefaultCypressChainable {
        return cy.get(`${this._selector.pageCounter()} [aria-hidden]`);
    }

    /**
     * Get the button for navigating to the previous page.
     *
     * @returns The button for navigating to the previous page.
     */
    public previousButton(): DefaultCypressChainable {
        return cy.get(this._selector.previousButton());
    }
}
