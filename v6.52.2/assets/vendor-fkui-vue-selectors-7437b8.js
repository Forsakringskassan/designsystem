// packages/vue/dist/esm/selectors.esm.js
function FBadgeSelectors(selector = ".badge") {
  return Object.freeze({
    /**
     * The base selector for the component.
     *
     * This is the same selector that the consumer provided.
     *
     * @public
     * @since v6.52.0
     * @returns The root selector for the component.
     */
    get selector() {
      return selector;
    }
  });
}
function FButtonSelectors(selector = ".button") {
  return Object.freeze({
    /**
     * The base selector for the component.
     *
     * This is the same selector that the consumer provided.
     *
     * @public
     * @since v6.52.0
     * @returns The root selector for the component.
     */
    get selector() {
      return selector;
    }
  });
}
function FCrudDatasetSelectors(selector = ".crud-dataset") {
  return Object.freeze({
    /**
     * The base selector for the component.
     *
     * This is the same selector that the consumer provided.
     *
     * @public
     * @since v6.52.0
     * @returns The root selector for the component.
     */
    get selector() {
      return selector;
    },
    /**
     * Get the add button element.
     *
     * @example Cypress
     *
     * ```ts
     * const { addButton } = FCrudDatasetSelectors();
     * cy.get(addButton()).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { addButton } = FCrudDatasetSelectors();
     * await page.locator(addButton()).click();
     * ```
     *
     * @public
     * @since v6.52.0
     * @returns A selector for the add button element.
     */
    addButton() {
      return `${selector} [data-test="f-crud-dataset-add-button"]`;
    },
    /**
     * Get the cancel button element.
     *
     * The cancel button is present in the modal footer when the add or edit
     * form is open.
     *
     * @example Cypress
     *
     * ```ts
     * const { cancelButton } = FCrudDatasetSelectors();
     * cy.get(cancelButton()).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { cancelButton } = FCrudDatasetSelectors();
     * await page.locator(cancelButton()).click();
     * ```
     *
     * @public
     * @since v6.52.0
     * @returns A selector for the cancel button element.
     */
    cancelButton() {
      return `${selector} .modal__footer > .button-group > .button--secondary`;
    },
    /**
     * Get the confirm button element.
     *
     * The confirm button is present in the modal footer when the add or edit
     * form is open.
     *
     * @example Cypress
     *
     * ```ts
     * const { confirmButton } = FCrudDatasetSelectors();
     * cy.get(confirmButton()).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { confirmButton } = FCrudDatasetSelectors();
     * await page.locator(confirmButton()).click();
     * ```
     *
     * @public
     * @since v6.52.0
     * @returns A selector for the confirm button element.
     */
    confirmButton() {
      return `${selector} .modal__footer > .button-group > .button--primary`;
    }
  });
}
function FDetailsPanelSelectors(selector = ".panel.panel--details") {
  return Object.freeze({
    /**
     * The base selector for the component.
     *
     * This is the same selector that the consumer provided.
     *
     * @public
     * @since v6.52.0
     * @returns The root selector for the component.
     */
    get selector() {
      return selector;
    },
    /**
     * Get the panel header slot content element.
     *
     * @example Cypress
     *
     * ```ts
     * const { header } = FDetailsPanelSelectors('[data-panel-name="my-panel"]');
     * cy.get(header()).should("contain.text", "Panel title");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { header } = FDetailsPanelSelectors('[data-panel-name="my-panel"]');
     * await expect(page.locator(header())).toContainText("Panel title");
     * ```
     *
     * @public
     * @since v6.52.0
     * @returns A selector for the panel header slot element.
     */
    header() {
      return `${selector} [slot=header]`;
    },
    /**
     * Get the panel content slot element.
     *
     * @example Cypress
     *
     * ```ts
     * const { content } = FDetailsPanelSelectors('[data-panel-name="my-panel"]');
     * cy.get(content()).should("contain.text", "Panel body");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { content } = FDetailsPanelSelectors('[data-panel-name="my-panel"]');
     * await expect(page.locator(content())).toContainText("Panel body");
     * ```
     *
     * @public
     * @since v6.52.0
     * @returns A selector for the panel content slot element.
     */
    content() {
      return `${selector} [slot=content]`;
    },
    /**
     * Get the panel footer slot element.
     *
     * @example Cypress
     *
     * ```ts
     * const { footer } = FDetailsPanelSelectors('[data-panel-name="my-panel"]');
     * cy.get(footer()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { footer } = FDetailsPanelSelectors('[data-panel-name="my-panel"]');
     * await expect(page.locator(footer())).toBeVisible();
     * ```
     *
     * @public
     * @since v6.52.0
     * @returns A selector for the panel footer slot element.
     */
    footer() {
      return `${selector} [slot=footer]`;
    }
  });
}
function FExpandableParagraphSelectors(selector = ".expandable-paragraph") {
  return Object.freeze({
    /**
     * The base selector for the component.
     *
     * This is the same selector that the consumer provided.
     *
     * @public
     * @since v6.43.0
     * @returns The root selector for the component.
     */
    get selector() {
      return selector;
    },
    /**
     * Get the expand/collapse icon.
     *
     * @public
     * @since v6.43.0
     * @returns The expand/collapse icon.
     */
    expandCollapseIcon() {
      return `${selector} .expandable-paragraph__icon`;
    },
    /**
     * Get the header.
     *
     * @public
     * @since v6.43.0
     * @returns The header.
     */
    header() {
      return `${selector} .expandable-paragraph__heading .expandable-paragraph__button`;
    },
    /**
     * Get the body.
     *
     * @public
     * @since v6.43.0
     * @returns The body.
     */
    body() {
      return `${selector} .expandable-paragraph__content`;
    },
    /**
     * Get the related info.
     *
     * @public
     * @since v6.43.0
     * @returns The related info.
     */
    relatedInfo() {
      return `${selector} .expandable-paragraph__related-information`;
    }
  });
}
function FLabelSelectors(selector = ".label") {
  return Object.freeze({
    /**
     * The base selector for the component.
     *
     * This is the same selector that the consumer provided.
     *
     * @public
     * @since v6.52.0
     * @returns The root selector for the component.
     */
    get selector() {
      return selector;
    },
    /**
     * Get the description element.
     *
     * The description is only present when the `description` slot is used.
     *
     * @example Cypress
     *
     * ```ts
     * const { description } = FLabelSelectors();
     * cy.get(description()).should("contain.text", "Enter your full name");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { description } = FLabelSelectors();
     * await expect(page.locator(description())).toContainText("Enter your full name");
     * ```
     *
     * @public
     * @since v6.52.0
     * @returns A selector for the description element.
     */
    description() {
      return `${selector} .label__description`;
    },
    /**
     * Get the format description element.
     *
     * Only present when the `description` slot is used with format
     * description content.
     *
     * @example Cypress
     *
     * ```ts
     * const { formatDescription } = FLabelSelectors();
     * cy.get(formatDescription()).should("contain.text", "YYYY-MM-DD");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { formatDescription } = FLabelSelectors();
     * await expect(page.locator(formatDescription())).toContainText("YYYY-MM-DD");
     * ```
     *
     * @public
     * @since v6.52.0
     * @returns A selector for the format description element.
     */
    formatDescription() {
      return `${selector} .label__description.label__description--format`;
    },
    /**
     * Get the error message element.
     *
     * The error message is only present when the label has a validation
     * error.
     *
     * @example Cypress
     *
     * ```ts
     * const { errorMessage } = FLabelSelectors();
     * cy.get(errorMessage()).should("contain.text", "This field is required");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { errorMessage } = FLabelSelectors();
     * await expect(page.locator(errorMessage())).toContainText("This field is required");
     * ```
     *
     * @public
     * @since v6.52.0
     * @returns A selector for the error message element.
     */
    errorMessage() {
      return `${selector} .label__message.label__message--error`;
    },
    /**
     * Get the error icon element.
     *
     * The error icon is only present when the label has a validation error.
     *
     * @example Cypress
     *
     * ```ts
     * const { errorIcon } = FLabelSelectors();
     * cy.get(errorIcon()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { errorIcon } = FLabelSelectors();
     * await expect(page.locator(errorIcon())).toBeVisible();
     * ```
     *
     * @public
     * @since v6.52.0
     * @returns A selector for the error icon element.
     */
    errorIcon() {
      return `${selector} .icon.label__icon--left.f-icon-error`;
    }
  });
}
function FListSelectors(selector = ".list") {
  return Object.freeze({
    /**
     * The base selector for the component.
     *
     * This is the same selector that the consumer provided.
     *
     * @public
     * @since v6.42.0
     * @returns The root selector for the component.
     */
    get selector() {
      return selector;
    },
    /**
     * Get all list items.
     *
     * @public
     * @since v6.42.0
     * @returns A selector for all of the list items.
     */
    listItems() {
      return `${selector} > .list__item:not(.list__item--empty) > .list__item__itempane`;
    },
    /**
     * Get the list item with the given index.
     *
     * @public
     * @since v6.42.0
     * @param index - The index of the item (0-based).
     * @returns A selector for the list item with the given index.
     */
    listItemByIndex(index) {
      return `${selector} > .list__item:nth-child(${index + 1}):not(.list__item--empty)`;
    },
    /**
     * Get the element displaying the empty message when the list is empty.
     *
     * @public
     * @since v6.42.0
     * @returns A selector for the element with empty text.
     */
    emptyMessage() {
      return `${selector} > .list__item.list__item--empty`;
    }
  });
}
function FLoaderSelectors(selector = ".loader") {
  return Object.freeze({
    /**
     * The base selector for the component.
     *
     * This is the same selector that the consumer provided.
     *
     * @public
     * @since v6.52.0
     * @returns The root selector for the component.
     */
    get selector() {
      return selector;
    },
    /**
     * Get the loader wrapper element.
     *
     * @example Cypress
     *
     * ```ts
     * const { wrapper } = FLoaderSelectors();
     * cy.get(wrapper()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { wrapper } = FLoaderSelectors();
     * await expect(page.locator(wrapper())).toBeVisible();
     * ```
     *
     * @public
     * @since v6.52.0
     * @returns A selector for the loader wrapper element.
     */
    wrapper() {
      return `${selector} .loader__wrapper`;
    },
    /**
     * Get the wait text element.
     *
     * The wait text element displays the loading message shown to the user.
     *
     * @example Cypress
     *
     * ```ts
     * const { waitText } = FLoaderSelectors();
     * cy.get(waitText()).should("have.text", "Loading…");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { waitText } = FLoaderSelectors();
     * await expect(page.locator(waitText())).toHaveText("Loading…");
     * ```
     *
     * @public
     * @since v6.52.0
     * @returns A selector for the wait text element.
     */
    waitText() {
      return `${selector} .loader__wait-text`;
    }
  });
}
function FMinimizablePanelSelectors(selector = ".panel") {
  return Object.freeze({
    /**
     * The base selector for the component.
     *
     * This is the same selector that the consumer provided.
     *
     * @public
     * @since v6.52.0
     * @returns The root selector for the component.
     */
    get selector() {
      return selector;
    },
    /**
     * Get the panel header slot content element.
     *
     * @example Cypress
     *
     * ```ts
     * const { header } = FMinimizablePanelSelectors();
     * cy.get(header()).should("contain.text", "Panel title");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { header } = FMinimizablePanelSelectors();
     * await expect(page.locator(header())).toContainText("Panel title");
     * ```
     *
     * @public
     * @since v6.52.0
     * @returns A selector for the panel header slot element.
     */
    header() {
      return `${selector} [slot=header]`;
    },
    /**
     * Get the panel content slot element.
     *
     * @example Cypress
     *
     * ```ts
     * const { content } = FMinimizablePanelSelectors();
     * cy.get(content()).should("contain.text", "Panel body");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { content } = FMinimizablePanelSelectors();
     * await expect(page.locator(content())).toContainText("Panel body");
     * ```
     *
     * @public
     * @since v6.52.0
     * @returns A selector for the panel content slot element.
     */
    content() {
      return `${selector} [slot=content]`;
    },
    /**
     * Get the panel footer slot element.
     *
     * @example Cypress
     *
     * ```ts
     * const { footer } = FMinimizablePanelSelectors();
     * cy.get(footer()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { footer } = FMinimizablePanelSelectors();
     * await expect(page.locator(footer())).toBeVisible();
     * ```
     *
     * @public
     * @since v6.52.0
     * @returns A selector for the panel footer slot element.
     */
    footer() {
      return `${selector} [slot=footer]`;
    }
  });
}
function FPaginatorSelectors(selector = ".paginator") {
  return Object.freeze({
    /**
     * The base selector for the component.
     *
     * This is the same selector that the consumer provided.
     *
     * @public
     * @since v6.34.0
     * @returns The root selector for the component.
     */
    get selector() {
      return selector;
    },
    /**
     * Get the button for the current page.
     *
     * @public
     * @since v6.34.0
     * @returns A selector for the currently active page button.
     */
    currentPageButton() {
      return `${selector} .paginator__page--active`;
    },
    /**
     * Get the button for the first page.
     *
     * @public
     * @since v6.34.0
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
     * @since v6.34.0
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
     * @since v6.34.0
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
     * @since v6.34.0
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
     * @since v6.34.0
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
     * @since v6.34.0
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
     * @since v6.34.0
     * @returns A selector for the page counter element.
     */
    pageCounter() {
      return `${selector} .paginator__page-counter`;
    },
    /**
     * Get the button for navigating to the previous page.
     *
     * @public
     * @since v6.34.0
     * @returns A selector for the button that navigates to the previous
     * page.
     */
    previousPageButton() {
      return `${selector} .paginator__previous`;
    }
  });
}
export {
  FBadgeSelectors,
  FButtonSelectors,
  FCrudDatasetSelectors,
  FDetailsPanelSelectors,
  FExpandableParagraphSelectors,
  FLabelSelectors,
  FListSelectors,
  FLoaderSelectors,
  FMinimizablePanelSelectors,
  FPaginatorSelectors
};
