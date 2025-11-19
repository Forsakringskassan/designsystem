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
   * Get the button for navigating to the next page.
   *
   * @returns The button for navigating to the next page.
   */
  nextButton() {
    return `${this.selector} .paginator__next`;
  }
  /**
   * Get the button/buttons for the specified page/pages.
   *
   * @param page - The index of the page button (if number); the number of the page (if string)
   * @returns The button for the specified page (if param `page` is defined); the buttons for all pages shown (if param `page` is undefined).
   */
  pageButton(page) {
    if (page === void 0) {
      return `${this.selector} .paginator__page`;
    } else if (typeof page === "number") {
      const buttonText = `button-${page}`;
      return `${this.selector} [data-page~=${page < 0 ? "last" : buttonText}]`;
    } else {
      return `${this.selector} [data-page~="page-${page}"]`;
    }
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
