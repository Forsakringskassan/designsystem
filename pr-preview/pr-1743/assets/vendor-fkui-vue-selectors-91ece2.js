// packages/vue/dist/esm/selectors.esm.js
function FBadgeSelectors(selector = ":scope") {
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
function FButtonSelectors(selector = ":scope") {
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
function FCheckboxFieldSelectors(selector = ":scope") {
  return Object.freeze({
    /**
     * The base selector for the component.
     *
     * This is the same selector that the consumer provided.
     *
     * @public
     * @since v6.56.0
     * @returns The root selector for the component.
     */
    get selector() {
      return selector;
    },
    /**
     * Get the checkbox input element.
     *
     * Use this to assert the checked state or value. To check or uncheck
     * the checkbox programmatically, click `label()` instead.
     *
     * @example Cypress
     *
     * ```ts
     * const { checkbox } = FCheckboxFieldSelectors();
     * cy.get(checkbox()).should("be.checked");
     * cy.get(checkbox()).should("have.value", "my-value");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { checkbox } = FCheckboxFieldSelectors();
     * await expect(page.locator(checkbox())).toBeChecked();
     * await expect(page.locator(checkbox())).toHaveValue("my-value");
     * ```
     *
     * @public
     * @since v6.56.0
     * @returns A selector for the checkbox input element.
     */
    checkbox() {
      return `${selector} .checkbox__input`;
    },
    /**
     * Get the label element.
     *
     * Clicking the label checks or unchecks the checkbox.
     *
     * @example Cypress
     *
     * ```ts
     * const { label } = FCheckboxFieldSelectors();
     * cy.get(label()).should("contain.text", "Accept terms");
     * // Check the checkbox:
     * cy.get(label()).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { label } = FCheckboxFieldSelectors();
     * await expect(page.locator(label())).toContainText("Accept terms");
     * // Check the checkbox:
     * await page.locator(label()).click();
     * ```
     *
     * @public
     * @since v6.56.0
     * @returns A selector for the label element.
     */
    label() {
      return `${selector} .checkbox__label`;
    },
    /**
     * Get the details element.
     *
     * The details element is only present when the `details` slot is used
     * and visible (controlled by the parent `FFieldset` `showDetails` prop).
     *
     * @example Cypress
     *
     * ```ts
     * const { details } = FCheckboxFieldSelectors();
     * cy.get(details()).should("contain.text", "Additional information");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { details } = FCheckboxFieldSelectors();
     * await expect(page.locator(details())).toContainText("Additional information");
     * ```
     *
     * @public
     * @since v6.56.0
     * @returns A selector for the details element.
     */
    details() {
      return `${selector} .checkbox__details`;
    }
  });
}
function FCrudDatasetSelectors(selector = ":scope") {
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
     * @since v6.57.0
     * @returns A selector for the add button element.
     */
    addButtonTop() {
      return `${selector} [data-test="f-crud-dataset-add-button-top"]`;
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
function FDetailsPanelSelectors(selector = ":scope") {
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
function FExpandablePanelSelectors(selector = ":scope") {
  return Object.freeze({
    /**
     * The base selector for the component.
     *
     * This is the same selector that the consumer provided.
     *
     * @public
     * @since v6.59.0
     * @returns The root selector for the component.
     */
    get selector() {
      return selector;
    },
    /**
     * Get the toggle header element.
     *
     * The toggle header element of type H1-H6 consist of the toggle button and title.
     *
     * @example Cypress
     *
     * ```ts
     * const { header } = FExpandablePanelSelectors();
     * cy.get(header()).should("contain.text", "Full name");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { header } = FExpandablePanelSelectors();
     * await expect(page.locator(header())).toContainText("Full name");
     * ```
     *
     * @public
     * @since v6.59.0
     * @returns A selector for the header element.
     */
    header() {
      return `${selector} .expandable-panel__heading`;
    },
    /**
     * Get the toggle button element.
     *
     * The toggle button is the clickable heading element used to expand or
     * collapse the panel. To check the current state, assert the
     * `aria-expanded` attribute:
     *
     * @example Cypress
     *
     * ```ts
     * const { header } = FExpandablePanelSelectors();
     * cy.get(header()).click();
     * cy.get(header()).should("have.attr", "aria-expanded", "true");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { toggleButton } = FExpandablePanelSelectors();
     * await page.locator(header()).click();
     * await expect(page.locator(header())).toHaveAttribute("aria-expanded", "true");
     * ```
     *
     * @public
     * @since v6.59.0
     * @returns A selector for the header element.
     */
    toggleButton() {
      return `${selector} .expandable-panel__heading button`;
    },
    /**
     * Get the expand/collapse icon element.
     *
     * @example Cypress
     *
     * ```ts
     * const { expandCollapseIcon } = FExpandablePanelSelectors();
     * cy.get(expandCollapseIcon()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { expandCollapseIcon } = FExpandablePanelSelectors();
     * await expect(page.locator(expandCollapseIcon())).toBeVisible();
     * ```
     *
     * @public
     * @since v6.59.0
     * @returns A selector for the expand/collapse icon element.
     */
    expandCollapseIcon() {
      return `${selector} .expandable-panel__icon`;
    },
    /**
     * Get the body element.
     *
     * The body contains the main slotted content of the panel.
     *
     * @example Cypress
     *
     * ```ts
     * const { body } = FExpandablePanelSelectors();
     * cy.get(body()).should("contain.text", "Panel content");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { body } = FExpandablePanelSelectors();
     * await expect(page.locator(body())).toContainText("Panel content");
     * ```
     *
     * @public
     * @since v6.59.0
     * @returns A selector for the body element.
     */
    body() {
      return `${selector} .expandable-panel__body`;
    },
    /**
     * Get the notification badge element.
     *
     * The notification badge is only present when the `notifications` prop
     * is greater than zero. To read the notification count, get the text
     * content of this element.
     *
     * @example Cypress
     *
     * ```ts
     * const { notification } = FExpandablePanelSelectors();
     * cy.get(notification()).should("be.visible");
     * cy.get(notification()).invoke("text").then((el) => {
     *   const count = Number(el.replace(/\D/g, ""));
     *   expect(count).to.eq(2);
     * }
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { notification } = FExpandablePanelSelectors();
     * await expect(page.locator(notification())).toBeVisible();
     * const count = Number(await page.locator(notification()).textContent());
     * ```
     *
     * @public
     * @since v6.59.0
     * @returns A selector for the notification badge element.
     */
    notification() {
      return `${selector} .expandable-panel__heading .expandable-panel__notification`;
    },
    /**
     * Get the related info element.
     *
     * The related info area contains content from the `outside` slot and is
     * only present when that slot is used.
     *
     * @example Cypress
     *
     * ```ts
     * const { relatedInfo } = FExpandablePanelSelectors();
     * cy.get(relatedInfo()).should("contain.text", "Related information");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { relatedInfo } = FExpandablePanelSelectors();
     * await expect(page.locator(relatedInfo())).toContainText("Related information");
     * ```
     *
     * @public
     * @since v6.59.0
     * @returns A selector for the related info element.
     */
    relatedInfo() {
      return `${selector} .expandable-panel__outside`;
    }
  });
}
function FExpandableParagraphSelectors(selector = ":scope") {
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
function FLabelSelectors(selector = ":scope") {
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
function FListSelectors(selector = ":scope") {
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
function FLoaderSelectors(selector = ":scope") {
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
function FMinimizablePanelSelectors(selector = ":scope") {
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
function FPaginatorSelectors(selector = ":scope") {
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
function FRadioFieldSelectors(selector = ":scope") {
  return Object.freeze({
    /**
     * The base selector for the component.
     *
     * This is the same selector that the consumer provided.
     *
     * @public
     * @since v6.59.0
     * @returns The root selector for the component.
     */
    get selector() {
      return selector;
    },
    /**
     * Get the radio input element selector.
     *
     * Use this to assert the checked state or value. To select the radio
     * button programmatically, click `label()` instead.
     *
     * @example Cypress
     *
     * ```ts
     * const { input } = FRadioFieldSelectors();
     * cy.get(input()).should("be.checked");
     * cy.get(input()).should("have.value", "yes");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { input } = FRadioFieldSelectors();
     * await expect(page.locator(input())).toBeChecked();
     * await expect(page.locator(input())).toHaveValue("yes");
     * ```
     *
     * @public
     * @since v6.59.0
     * @returns A selector for the radio input element.
     */
    input() {
      return `${selector} .radio-button__input`;
    },
    /**
     * Get the label element selector.
     *
     * The label contains the slotted label text. Clicking it selects the
     * radio button.
     *
     * @example Cypress
     *
     * ```ts
     * const { label } = FRadioFieldSelectors();
     * cy.get(label()).should("have.text", "Yes");
     * // Select the radio button:
     * cy.get(label()).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { label } = FRadioFieldSelectors();
     * await expect(page.locator(label())).toHaveText("Yes");
     * // Select the radio button:
     * await page.locator(label()).click();
     * ```
     *
     * @public
     * @since v6.59.0
     * @returns A selector for the label element.
     */
    label() {
      return `${selector} .radio-button__label`;
    },
    /**
     * Get the details element selector.
     *
     * The details element is only present when the `details` slot is used
     * and visible (controlled by the parent `FFieldset` `showDetails` prop).
     *
     * @example Cypress
     *
     * ```ts
     * const { details } = FRadioFieldSelectors();
     * cy.get(details()).should("contain.text", "Additional information");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { details } = FRadioFieldSelectors();
     * await expect(page.locator(details())).toContainText("Additional information");
     * ```
     *
     * @public
     * @since v6.59.0
     * @returns A selector for the details element.
     */
    details() {
      return `${selector} .radio-button__details`;
    }
  });
}
function FTextareaFieldSelectors(selector = ":scope") {
  const labelSelectors = FLabelSelectors(`${selector} .label`);
  return Object.freeze({
    /**
     * The base selector for the component.
     *
     * This is the same selector that the consumer provided.
     *
     * @public
     * @since v6.58.0
     * @returns The root selector for the component.
     */
    get selector() {
      return selector;
    },
    /**
     * Get the textarea element selector.
     *
     * @example Cypress
     *
     * ```ts
     * const { textarea } = FTextareaFieldSelectors();
     * cy.get(textarea()).type("Hello world");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { textarea } = FTextareaFieldSelectors();
     * await page.locator(textarea()).fill("Hello world");
     * ```
     *
     * @public
     * @since v6.58.0
     * @returns A selector for the textarea element.
     */
    textarea() {
      return `${selector} textarea`;
    },
    /**
     * Get the label element selector.
     *
     * @example Cypress
     *
     * ```ts
     * const { label } = FTextareaFieldSelectors();
     * cy.get(label()).should("contain.text", "Comments");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { label } = FTextareaFieldSelectors();
     * await expect(page.locator(label())).toContainText("Comments");
     * ```
     *
     * @public
     * @since v6.58.0
     * @returns A selector for the label element.
     */
    label() {
      return labelSelectors.selector;
    },
    /**
     * Get the description element selector.
     *
     * The description is only present when the `description` slot is used.
     *
     * @example Cypress
     *
     * ```ts
     * const { description } = FTextareaFieldSelectors();
     * cy.get(description()).should("contain.text", "Enter your full name");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { description } = FTextareaFieldSelectors();
     * await expect(page.locator(description())).toContainText("Enter your full name");
     * ```
     *
     * @public
     * @since v6.58.0
     * @returns A selector for the description element.
     */
    description() {
      return labelSelectors.description();
    },
    /**
     * Get the format description element selector.
     *
     * Only present when the `description` slot is used with format
     * description content.
     *
     * @example Cypress
     *
     * ```ts
     * const { formatDescription } = FTextareaFieldSelectors();
     * cy.get(formatDescription()).should("contain.text", "YYYY-MM-DD");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { formatDescription } = FTextareaFieldSelectors();
     * await expect(page.locator(formatDescription())).toContainText("YYYY-MM-DD");
     * ```
     *
     * @public
     * @since v6.58.0
     * @returns A selector for the format description element.
     */
    formatDescription() {
      return labelSelectors.formatDescription();
    },
    /**
     * Get the error message element selector.
     *
     * Only present when the field has a validation error.
     *
     * @example Cypress
     *
     * ```ts
     * const { errorMessage } = FTextareaFieldSelectors();
     * cy.get(errorMessage()).should("contain.text", "This field is required");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { errorMessage } = FTextareaFieldSelectors();
     * await expect(page.locator(errorMessage())).toContainText("This field is required");
     * ```
     *
     * @public
     * @since v6.58.0
     * @returns A selector for the error message element.
     */
    errorMessage() {
      return labelSelectors.errorMessage();
    }
  });
}
function FTextFieldSelectors(selector = ":scope") {
  const labelSelectors = FLabelSelectors(`${selector} .label`);
  return Object.freeze({
    /**
     * The base selector for the component.
     *
     * This is the same selector that the consumer provided.
     *
     * @public
     * @since v6.58.0
     * @returns The root selector for the component.
     */
    get selector() {
      return selector;
    },
    /**
     * Get the input element selector.
     *
     * @example Cypress
     *
     * ```ts
     * const { input } = FTextFieldSelectors();
     * cy.get(input()).type("Hello");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { input } = FTextFieldSelectors();
     * await page.locator(input()).fill("Hello");
     * ```
     *
     * @public
     * @since v6.58.0
     * @returns A selector for the text input element.
     */
    input() {
      return `${selector} input`;
    },
    /**
     * Get the label element selector.
     *
     * Use `FLabelSelectors` for more fine-grained access to label sub-elements.
     *
     * @example Cypress
     *
     * ```ts
     * const { label } = FTextFieldSelectors();
     * cy.get(label()).should("contain.text", "Full name");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { label } = FTextFieldSelectors();
     * await expect(page.locator(label())).toContainText("Full name");
     * ```
     *
     * @public
     * @since v6.58.0
     * @returns A selector for the label element.
     */
    label() {
      return labelSelectors.selector;
    },
    /**
     * Get the description element selector.
     *
     * The description is only present when the `description` slot is used.
     *
     * @example Cypress
     *
     * ```ts
     * const { description } = FTextFieldSelectors();
     * cy.get(description()).should("contain.text", "Enter your full name");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { description } = FTextFieldSelectors();
     * await expect(page.locator(description())).toContainText("Enter your full name");
     * ```
     *
     * @public
     * @since v6.58.0
     * @returns A selector for the description element.
     */
    description() {
      return labelSelectors.description();
    },
    /**
     * Get the format description element selector.
     *
     * Only present when the `description` slot is used with format
     * description content.
     *
     * @example Cypress
     *
     * ```ts
     * const { formatDescription } = FTextFieldSelectors();
     * cy.get(formatDescription()).should("contain.text", "YYYY-MM-DD");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { formatDescription } = FTextFieldSelectors();
     * await expect(page.locator(formatDescription())).toContainText("YYYY-MM-DD");
     * ```
     *
     * @public
     * @since v6.58.0
     * @returns A selector for the format description element.
     */
    formatDescription() {
      return labelSelectors.formatDescription();
    },
    /**
     * Get the error message element selector.
     *
     * Only present when the field has a validation error.
     *
     * @example Cypress
     *
     * ```ts
     * const { errorMessage } = FTextFieldSelectors();
     * cy.get(errorMessage()).should("contain.text", "This field is required");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { errorMessage } = FTextFieldSelectors();
     * await expect(page.locator(errorMessage())).toContainText("This field is required");
     * ```
     *
     * @public
     * @since v6.58.0
     * @returns A selector for the error message element.
     */
    errorMessage() {
      return labelSelectors.errorMessage();
    }
  });
}
function FTooltipSelectors(selector = ".tooltip") {
  return Object.freeze({
    /**
     * The base selector for the component.
     *
     * This is the same selector that the consumer provided.
     *
     * @public
     * @since v6.59.0
     * @returns The root selector for the component.
     */
    get selector() {
      return selector;
    },
    /**
     * Get the toggle button element selector.
     *
     * Clicking this button opens or closes the tooltip bubble.
     *
     * @example Cypress
     *
     * ```ts
     * const { toggleButton } = FTooltipSelectors();
     * cy.get(toggleButton()).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { toggleButton } = FTooltipSelectors();
     * await page.locator(toggleButton()).click();
     * ```
     *
     * @public
     * @since v6.59.0
     * @returns A selector for the toggle button element.
     */
    toggleButton() {
      return [
        /* no attached to anything */
        `.tooltip__button:has(~ :is(${selector}))`,
        /* attached to label or heading */
        `.tooltip__container:has(.tooltip__button):has(~ :is(${selector})) > .tooltip__button`
      ].join(", ");
    },
    /**
     * Get the tooltip bubble element selector.
     *
     * The bubble contains the tooltip header and body content. It is only
     * visible when the tooltip is open.
     *
     * @example Cypress
     *
     * ```ts
     * const { bubble } = FTooltipSelectors();
     * cy.get(bubble()).should("be.visible");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { bubble } = FTooltipSelectors();
     * await expect(page.locator(bubble())).toBeVisible();
     * ```
     *
     * @public
     * @since v6.59.0
     * @returns A selector for the tooltip bubble element.
     */
    bubble() {
      return `${selector} .tooltip__bubble`;
    },
    /**
     * Get the tooltip header element selector.
     *
     * @example Cypress
     *
     * ```ts
     * const { header } = FTooltipSelectors();
     * cy.get(header()).should("contain.text", "More info");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { header } = FTooltipSelectors();
     * await expect(page.locator(header())).toContainText("More info");
     * ```
     *
     * @public
     * @since v6.59.0
     * @returns A selector for the tooltip header element.
     */
    header() {
      return `${selector} .tooltip__header`;
    },
    /**
     * Get the tooltip body element selector.
     *
     * @example Cypress
     *
     * ```ts
     * const { body } = FTooltipSelectors();
     * cy.get(body()).should("contain.text", "Helpful information");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { body } = FTooltipSelectors();
     * await expect(page.locator(body())).toContainText("Helpful information");
     * ```
     *
     * @public
     * @since v6.59.0
     * @returns A selector for the tooltip body element.
     */
    body() {
      return `${selector} .tooltip__body`;
    },
    /**
     * Get the close button element selector.
     *
     * @example Cypress
     *
     * ```ts
     * const { closeButton } = FTooltipSelectors();
     * cy.get(closeButton()).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { closeButton } = FTooltipSelectors();
     * await page.locator(closeButton()).click();
     * ```
     *
     * @public
     * @since v6.59.0
     * @returns A selector for the close button element.
     */
    closeButton() {
      return `${selector} .close-button`;
    }
  });
}
export {
  FBadgeSelectors,
  FButtonSelectors,
  FCheckboxFieldSelectors,
  FCrudDatasetSelectors,
  FDetailsPanelSelectors,
  FExpandablePanelSelectors,
  FExpandableParagraphSelectors,
  FLabelSelectors,
  FListSelectors,
  FLoaderSelectors,
  FMinimizablePanelSelectors,
  FPaginatorSelectors,
  FRadioFieldSelectors,
  FTextFieldSelectors,
  FTextareaFieldSelectors,
  FTooltipSelectors
};
