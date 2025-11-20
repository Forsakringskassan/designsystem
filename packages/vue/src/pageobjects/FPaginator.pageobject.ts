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
     * Get the button for navigating to the next page.
     *
     * @returns The button for navigating to the next page.
     */
    public nextButton(): string {
        return `${this.selector} .paginator__next`;
    }

    /**
     * Get the button/buttons for the specified page/pages.
     *
     * @param page - The index of the page button (if number); the number of the page (if string)
     * @returns The button for the specified page (if param `page` is defined); the buttons for all pages shown (if param `page` is undefined).
     */
    public pageButton(page?: number | string): string {
        switch (typeof page) {
            case "number":
                return `${this.selector} [data-page~="button-${page}"]`;
            case "string":
                return `${this.selector} [data-page~="page-${page}"]`;
            default:
                return `${this.selector} .paginator__page`;
        }
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
