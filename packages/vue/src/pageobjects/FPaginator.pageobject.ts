/**
 * Pageobject for `FPaginator`.
 *
 * @public
 */
export class FPaginatorPageobject {
    public selector: string;

    /**
     * @param selector - The root of the FPaginator component
     */
    public constructor(selector: string = ".paginator") {
        this.selector = selector;
    }

    /**
     * Get the root element.
     *
     * @returns The element itself.
     */
    public el(): string {
        return this.selector;
    }

    /**
     * Get the button for the current page.
     *
     * @returns The button for the current page.
     */
    public currentPageButton(): string {
        return `${this.selector} .paginator__page--active`;
    }

    /**
     * Get the button for the first page.
     *
     * @returns The button for the first page.
     */
    public firstPageButton(): string {
        return `${this.selector} [data-page~="first"]`;
    }

    /**
     * Get the button for the last page.
     *
     * @returns The button for the last page.
     */
    public lastPageButton(): string {
        return `${this.selector} [data-page~="last"]`;
    }

    /**
     * Get the button for navigating to the next page.
     *
     * @returns The button for navigating to the next page.
     */
    public nextButton(): string {
        return `${this.selector} .paginator__next`;
    }

    /**
     * Get the buttons for all pages shown.
     *
     * @returns The buttons for all pages shown.
     */
    public pageButtons(): string {
        return `${this.selector} .paginator__page`;
    }

    /**
     * Get the button for a specified page.
     *
     * @param page - The number of the page.
     * @returns The button for the specifieds page.
     */
    public pageButton(page: number): string {
        return `${this.selector} [data-page~="${page}"]`;
    }

    /**
     * Get the page counter.
     * The element replaces the page buttons in compact mode.
     *
     * @returns The page counter.
     */
    public pageCounter(): string {
        return `${this.selector} .paginator__page-counter`;
    }

    /**
     * Get the button for navigating to the previous page.
     *
     * @returns The button for navigating to the previous page.
     */
    public previousButton(): string {
        return `${this.selector} .paginator__previous`;
    }
}
