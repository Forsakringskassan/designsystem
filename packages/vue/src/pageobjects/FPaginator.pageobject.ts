/**
 * Pageobject for `FPaginator`.
 *
 * @public
 * @since %version%
 */
export class FPaginatorPageObject {
    public readonly selector: string;

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
     * Get the button for a specified page.
     *
     * The page number can either be by index (starting at zero for the first
     * button) or by label (to get the button with the given number on it).
     *
     * If the index is negative it get the buttons in reverse order, e.g. `-1`
     * gets the last button).
     *
     * @param page - The number of the page (index or label)
     * @returns The button for the specifieds page.
     */
    public pageButton(
        page: { byLabel: number | string } | { byIndex: number | string },
    ): string {
        if ("byLabel" in page) {
            return `${this.selector} > [data-page~="${page.byLabel}"]`;
        } else {
            return `${this.selector} > [data-index~="${page.byIndex}"]`;
        }
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
