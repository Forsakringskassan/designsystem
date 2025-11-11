// packages/vue/dist/esm/pageobjects.esm.js
var FPaginatorPageobject = class {
  selector;
  /**
   * @param selector - The root of the FPaginator component
   */
  constructor(selector = ".paginator") {
    this.selector = selector;
  }
  /**
   * Get the root element.
   *
   * @returns The element itself.
   */
  el() {
    return this.selector;
  }
  /**
   * Get the button for the current page.
   *
   * @returns The button for the current page.
   */
  currentPageButton() {
    return `${this.selector} .paginator__page--active`;
  }
  /**
   * Get the button for the first page.
   *
   * @returns The button for the first page.
   */
  firstPageButton() {
    return `${this.selector} [data-page~="first"]`;
  }
  /**
   * Get the button for the last page.
   *
   * @returns The button for the last page.
   */
  lastPageButton() {
    return `${this.selector} [data-page~="last"]`;
  }
  /**
   * Get the button for navigating to the next page.
   *
   * @returns The button for navigating to the next page.
   */
  nextButton() {
    return `${this.selector} .paginator__next`;
  }
  /**
   * Get the buttons for all pages shown.
   *
   * @returns The buttons for all pages shown.
   */
  pageButtons() {
    return `${this.selector} .paginator__page`;
  }
  /**
   * Get the button for a specified page.
   *
   * @param page - The number of the page.
   * @returns The button for the specifieds page.
   */
  pageButton(page) {
    return `${this.selector} [data-page~="${page}"]`;
  }
  /**
   * Get the page counter.
   * The element replaces the page buttons in compact mode.
   *
   * @returns The page counter.
   */
  pageCounter() {
    return `${this.selector} .paginator__page-counter`;
  }
  /**
   * Get the button for navigating to the previous page.
   *
   * @returns The button for navigating to the previous page.
   */
  previousButton() {
    return `${this.selector} .paginator__previous`;
  }
};
export {
  FPaginatorPageobject
};
