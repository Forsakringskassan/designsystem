// packages/vue/dist/esm/selectors.esm.js
function FPaginatorSelectors(selector = ".paginator") {
  return Object.freeze({
    /**
     * The base selector for the component.
     *
     * This is the same selector that the consumer provided.
     *
     * @public
     * @since %version%
     * @returns The root selector for the component.
     */
    get selector() {
      return selector;
    },
    /**
     * Get the button for the current page.
     *
     * @public
     * @since %version%
     * @returns A selector for the currently active page button.
     */
    currentPageButton() {
      return `${selector} .paginator__page--active`;
    },
    /**
     * Get the button for the first page.
     *
     * @public
     * @since %version%
     * @returns A selector for the button that navigates to the first
     * page.
     */
    firstPageButton() {
      return `${selector} [data-page~="first"]`;
    },
    /**
     * Get the button for the last page.
     *
     * @public
     * @since %version%
     * @returns A selector for the button that navigates to the last
     * page.
     */
    lastPageButton() {
      return `${selector} [data-page~="last"]`;
    },
    /**
     * Get the button for navigating to the next page.
     *
     * @public
     * @since %version%
     * @returns A selector for the button that navigates to the next
     * page.
     */
    nextPageButton() {
      return `${selector} .paginator__next`;
    },
    /**
     * Get the button for a specific page by displayed text.
     *
     * This returns the button that displays the given text.
     *
     * @public
     * @since %version%
     * @param text - The text displayed on the requested button. If a
     * numeric value is provided, it is converted to a string.
     * @returns A selector for the specified page button.
     */
    pageButtonByText(text) {
      return `${selector} > [data-page~="${text}"]`;
    },
    /**
     * Get the button for a specific page by index.
     *
     * The index starts at zero for the first button. A negative index
     * selects buttons from the end, e.g. `-1` selects the last button.
     *
     * @public
     * @since %version%
     * @param index - The zero-based page index, or a negative index to
     * select from the end (e.g. `-1` selects the last button).
     * @returns A selector for the specified page button.
     */
    pageButtonByIndex(index) {
      return `${selector} > [data-index~="${index}"]`;
    },
    /**
     * Get the buttons for all pages shown.
     *
     * @public
     * @since %version%
     * @returns A selector for all displayed page buttons.
     */
    pageButtons() {
      return `${selector} .paginator__page`;
    },
    /**
     * Get the page counter element.
     *
     * The counter replaces the page buttons in compact mode on mobile
     * devices.
     *
     * @public
     * @since %version%
     * @returns A selector for the page counter element.
     */
    pageCounter() {
      return `${selector} .paginator__page-counter`;
    },
    /**
     * Get the button for navigating to the previous page.
     *
     * @public
     * @since %version%
     * @returns A selector for the button that navigates to the previous
     * page.
     */
    previousPageButton() {
      return `${selector} .paginator__previous`;
    }
  });
}
export {
  FPaginatorSelectors
};
