export function showPageNumberAsGap(options: {
    page: number;
    pages: number[];
}): boolean {
    const { page, pages } = options;

    /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- technical debt */
    const numberOfPages = pages.at(-1)!;

    /**
     * Show gap to first page if these conditions are fulfilled:
     * ¤ The page is the second button
     * ¤ The page is not the second page
     */
    const showGapToFirstPage = pages.indexOf(page) === 1 && page !== 2;

    /**
     * Show gap to last page if these conditions are fulfilled:
     * ¤ The page is the second to last button
     * ¤ The page is not the second to last page
     */
    const showGapToLastPage =
        pages.indexOf(page) === pages.length - 2 && page !== numberOfPages - 1;

    return showGapToFirstPage || showGapToLastPage;
}
