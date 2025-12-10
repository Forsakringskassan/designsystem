// packages/vue/dist/esm/selectors.esm.js
function FPaginatorSelectors(selector = ".paginator") {
  return {
    /**
     * The base selector for the component.
     */
    get selector() {
      return selector;
    },
    /**
     * Get the button for the current page.
     *
     * @returns The button for the current page.
     */
    currentPageButton() {
      return `${selector} .paginator__page--active`;
    },
    /**
     * Get the button for the first page.
     *
     * @returns The button for the first page.
     */
    firstPageButton() {
      return `${selector} [data-page~="first"]`;
    },
    /**
     * Get the button for the last page.
     *
     * @returns The button for the last page.
     */
    lastPageButton() {
      return `${selector} [data-page~="last"]`;
    },
    /**
     * Get the button for navigating to the next page.
     *
     * @returns The button for navigating to the next page.
     */
    nextButton() {
      return `${selector} .paginator__next`;
    },
    /**
     * Get the button for a specified page by label (to get the button with
     * the given number on it).
     *
     * @param page - The number of the page.
     * @returns The button for the specifieds page.
     */
    pageButtonByLabel(page) {
      return `${selector} > [data-page~="${page}"]`;
    },
    /**
     * Get the button for a specified page by index (starting at zero for
     * the first button).
     *
     * If the index is negative it get the buttons in reverse order, e.g. `-1`
     * gets the last button).
     *
     * @param page - The number of the page)
     * @returns The button for the specifieds page.
     */
    pageButtonByIndex(page) {
      return `${selector} > [data-index~="${page}"]`;
    },
    /**
     * Get the buttons for all pages shown.
     *
     * @returns The buttons for all pages shown.
     */
    pageButtons() {
      return `${selector} .paginator__page`;
    },
    /**
     * Get the page counter.
     * The element replaces the page buttons in compact mode.
     *
     * @returns The page counter.
     */
    pageCounter() {
      return `${selector} .paginator__page-counter`;
    },
    /**
     * Get the button for navigating to the previous page.
     *
     * @returns The button for navigating to the previous page.
     */
    previousButton() {
      return `${selector} .paginator__previous`;
    }
  };
}
export {
  FPaginatorSelectors
};
