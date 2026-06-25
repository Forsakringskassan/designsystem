// packages/vue/dist/esm/selectors.esm.js
function FBadgeSelectors(selector = ".badge") {
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
     * @since %version%
     * @returns The root selector for the component.
     */
    get selector() {
      return selector;
    }
  });
}
function FErrorListSelectors(selector = ".error-list") {
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
     * Get all error item links.
     *
     * Each link navigates to and focuses the corresponding invalid form
     * field. Only items with an `id` are rendered as links.
     *
     * To find a link by its text, filter the result:
     *
     * @example Cypress
     *
     * ```ts
     * const { items } = FErrorListSelectors();
     * cy.get(items()).should("have.length", 2);
     * // Find by text:
     * cy.get(items()).contains("Field 1 is required").should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { items } = FErrorListSelectors();
     * await expect(page.locator(items())).toHaveCount(2);
     * // Find by text:
     * await expect(page.locator(items()).filter({ hasText: "Field 1 is required" })).toBeVisible();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for all error item link elements.
     */
    items() {
      return `${selector} .error-list__list a`;
    },
    /**
     * Get all error list items.
     *
     * Each item corresponds to one validation error, including those
     * without links. Use this to assert the total number of errors or to
     * check whether a specific error message is present by filtering on
     * text:
     *
     * @example Cypress
     *
     * ```ts
     * const { listItems } = FErrorListSelectors();
     * cy.get(listItems()).should("have.length", 3);
     * // Check a specific error is present:
     * cy.get(listItems()).contains("Field 1 is required").should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { listItems } = FErrorListSelectors();
     * await expect(page.locator(listItems())).toHaveCount(3);
     * // Check a specific error is present:
     * await expect(page.locator(listItems()).filter({ hasText: "Field 1 is required" })).toHaveCount(1);
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for all error list item elements.
     */
    listItems() {
      return `${selector} .error-list__list li`;
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
function FFieldsetSelectors(selector = ".fieldset") {
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
     * Get the legend element.
     *
     * The legend contains the label text and, when present, description and
     * error message.
     *
     * @example Cypress
     *
     * ```ts
     * const { legend } = FFieldsetSelectors();
     * cy.get(legend()).should("have.text", "My label");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { legend } = FFieldsetSelectors();
     * await expect(page.locator(legend())).toHaveText("My label");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the legend element.
     */
    legend() {
      return `${selector} > legend`;
    },
    /**
     * Get the content wrapper element.
     *
     * The content wrapper contains the slotted form controls (radio buttons,
     * checkboxes, etc.).
     *
     * @example Cypress
     *
     * ```ts
     * const { content } = FFieldsetSelectors();
     * cy.get(content()).find("input").should("have.length", 3);
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { content } = FFieldsetSelectors();
     * await expect(page.locator(content()).locator("input")).toHaveCount(3);
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the content wrapper element.
     */
    content() {
      return `${selector} .fieldset__content`;
    },
    /**
     * Get the error message element.
     *
     * The error message is only present when the fieldset has a validation
     * error.
     *
     * @example Cypress
     *
     * ```ts
     * const { errorMessage } = FFieldsetSelectors();
     * cy.get(errorMessage()).should("have.text", "This field is required");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { errorMessage } = FFieldsetSelectors();
     * await expect(page.locator(errorMessage())).toHaveText("This field is required");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the error message element.
     */
    errorMessage() {
      return `${selector} .label__message--error`;
    },
    /**
     * Get all radio button elements inside the fieldset.
     *
     * Use this to assert the number of radio buttons rendered.
     *
     * @example Cypress
     *
     * ```ts
     * const { radioButtons } = FFieldsetSelectors();
     * cy.get(radioButtons()).should("have.length", 3);
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { radioButtons } = FFieldsetSelectors();
     * await expect(page.locator(radioButtons())).toHaveCount(3);
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for all radio button elements.
     */
    radioButtons() {
      return `${selector} .radio-button`;
    },
    /**
     * Get all checkbox elements inside the fieldset.
     *
     * Use this to assert the number of checkboxes rendered.
     *
     * @example Cypress
     *
     * ```ts
     * const { checkboxes } = FFieldsetSelectors();
     * cy.get(checkboxes()).should("have.length", 2);
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { checkboxes } = FFieldsetSelectors();
     * await expect(page.locator(checkboxes())).toHaveCount(2);
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for all checkbox elements.
     */
    checkboxes() {
      return `${selector} .checkbox`;
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
     * @since %version%
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
     * @since %version%
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
     * @since %version%
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
     * @since %version%
     * @returns A selector for the confirm button element.
     */
    confirmButton() {
      return `${selector} .modal__footer > .button-group > .button--primary`;
    }
  });
}
function FDialogueTreeSelectors(selector = ".dialogue-tree") {
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
     * Get all dialogue item elements.
     *
     * To target a specific item by index use `:nth-child()` or Cypress
     * `.eq()`:
     *
     * @example Cypress
     *
     * ```ts
     * const { items } = FDialogueTreeSelectors();
     * cy.get(items()).should("have.length", 2);
     * cy.get(items()).eq(0).find("button").click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { items } = FDialogueTreeSelectors();
     * await expect(page.locator(items())).toHaveCount(2);
     * await page.locator(items()).nth(0).locator("button").click();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for all dialogue item elements.
     */
    items() {
      return `${selector} .dialogue-tree__list-item`;
    },
    /**
     * Get the button inside a dialogue item element.
     *
     * Use together with `items()` to target the button of a specific item.
     * The button is clicked to select that dialogue option.
     *
     * @example Cypress
     *
     * ```ts
     * const { items, itemButton } = FDialogueTreeSelectors();
     * cy.get(items()).eq(0).find(itemButton()).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { items, itemButton } = FDialogueTreeSelectors();
     * await page.locator(items()).nth(0).locator(itemButton()).click();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the button inside a dialogue item.
     */
    itemButton() {
      return "button";
    }
  });
}
function FCalendarSelectors(selector = ".calendar__wrapper") {
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
     * Get the calendar caption element.
     *
     * Displays the current month and year.
     *
     * @example Cypress
     *
     * ```ts
     * const { navCaption } = FCalendarSelectors();
     * cy.get(navCaption()).should("contain.text", "June 2024");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { navCaption } = FCalendarSelectors();
     * await expect(page.locator(navCaption())).toContainText("June 2024");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the calendar caption element.
     */
    navCaption() {
      return `${selector} .calendar-navbar__month--title`;
    },
    /**
     * Get the previous month button element.
     *
     * @example Cypress
     *
     * ```ts
     * const { navPrevButton } = FCalendarSelectors();
     * cy.get(navPrevButton()).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { navPrevButton } = FCalendarSelectors();
     * await page.locator(navPrevButton()).click();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the previous month button element.
     */
    navPrevButton() {
      return `${selector} .calendar-navbar__arrow--previous`;
    },
    /**
     * Get the next month button element.
     *
     * @example Cypress
     *
     * ```ts
     * const { navNextButton } = FCalendarSelectors();
     * cy.get(navNextButton()).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { navNextButton } = FCalendarSelectors();
     * await page.locator(navNextButton()).click();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the next month button element.
     */
    navNextButton() {
      return `${selector} .calendar-navbar__arrow--next`;
    },
    /**
     * Get the year selector toggle button element.
     *
     * Clicking this button opens the year selector view.
     *
     * @example Cypress
     *
     * ```ts
     * const { navYearSelectorButton } = FCalendarSelectors();
     * cy.get(navYearSelectorButton()).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { navYearSelectorButton } = FCalendarSelectors();
     * await page.locator(navYearSelectorButton()).click();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the year selector toggle button element.
     */
    navYearSelectorButton() {
      return `${selector} .calendar-navbar__year-selector-button`;
    },
    /**
     * Get a day button element by date.
     *
     * The `date` parameter must be in `YYYY-MM-DD` format matching the
     * `data-date` attribute on the day element.
     *
     * @example Cypress
     *
     * ```ts
     * const { dayButton } = FCalendarSelectors();
     * cy.get(dayButton("2024-06-15")).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { dayButton } = FCalendarSelectors();
     * await page.locator(dayButton("2024-06-15")).click();
     * ```
     *
     * @public
     * @since %version%
     * @param date - The date in `YYYY-MM-DD` format.
     * @returns A selector for the day button element.
     */
    dayButton(date) {
      return `${selector} [data-date="${date}"]`;
    },
    /**
     * Get the currently selected day element.
     *
     * @example Cypress
     *
     * ```ts
     * const { selectedDay } = FCalendarSelectors();
     * cy.get(selectedDay()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { selectedDay } = FCalendarSelectors();
     * await expect(page.locator(selectedDay())).toBeVisible();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the selected day element.
     */
    selectedDay() {
      return `${selector} [data-date] .calendar-day--selected`;
    },
    /**
     * Get the today (highlighted) day element.
     *
     * @example Cypress
     *
     * ```ts
     * const { todayDay } = FCalendarSelectors();
     * cy.get(todayDay()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { todayDay } = FCalendarSelectors();
     * await expect(page.locator(todayDay())).toBeVisible();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the today day element.
     */
    todayDay() {
      return `${selector} [data-date] .calendar-day--today`;
    },
    /**
     * Get the year selector element.
     *
     * The year selector is shown when the user activates year navigation
     * via `navYearSelectorButton()`.
     *
     * @example Cypress
     *
     * ```ts
     * const { yearSelector } = FCalendarSelectors();
     * cy.get(yearSelector()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { yearSelector } = FCalendarSelectors();
     * await expect(page.locator(yearSelector())).toBeVisible();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the year selector element.
     */
    yearSelector() {
      return `${selector} .calendar__year-selector`;
    }
  });
}
function FDatepickerFieldSelectors(selector = ".datepicker-field") {
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
     * Get the label element.
     *
     * The label contains the heading text and, when present, description
     * and tooltip. Use `FLabelSelectors` for more fine-grained access to
     * label sub-elements.
     *
     * @example Cypress
     *
     * ```ts
     * const { label } = FDatepickerFieldSelectors();
     * cy.get(label()).should("contain.text", "Date of birth");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { label } = FDatepickerFieldSelectors();
     * await expect(page.locator(label())).toContainText("Date of birth");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the label element.
     */
    label() {
      return `${selector} .label`;
    },
    /**
     * Get the error message element.
     *
     * Only present when the field has a validation error.
     *
     * @example Cypress
     *
     * ```ts
     * const { errorMessage } = FDatepickerFieldSelectors();
     * cy.get(errorMessage()).should("contain.text", "Invalid date");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { errorMessage } = FDatepickerFieldSelectors();
     * await expect(page.locator(errorMessage())).toContainText("Invalid date");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the error message element.
     */
    errorMessage() {
      return `${selector} .label__message--error`;
    },
    /**
     * Get the text input element.
     *
     * @example Cypress
     *
     * ```ts
     * const { input } = FDatepickerFieldSelectors();
     * cy.get(input()).type("2024-01-15");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { input } = FDatepickerFieldSelectors();
     * await page.locator(input()).fill("2024-01-15");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the text input element.
     */
    input() {
      return `${selector} .text-field__input`;
    },
    /**
     * Get the calendar toggle button element.
     *
     * Clicking this button opens or closes the calendar popup.
     *
     * @example Cypress
     *
     * ```ts
     * const { calendarButton } = FDatepickerFieldSelectors();
     * cy.get(calendarButton()).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { calendarButton } = FDatepickerFieldSelectors();
     * await page.locator(calendarButton()).click();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the calendar toggle button element.
     */
    calendarButton() {
      return `${selector} .datepicker-field__button`;
    },
    /**
     * Get the calendar popup element.
     *
     * Only present when the calendar is open.
     *
     * @example Cypress
     *
     * ```ts
     * const { calendarPopup } = FDatepickerFieldSelectors();
     * cy.get(calendarPopup()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { calendarPopup } = FDatepickerFieldSelectors();
     * await expect(page.locator(calendarPopup())).toBeVisible();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the calendar popup element.
     */
    calendarPopup() {
      return `${selector} .datepicker-field__popup`;
    },
    /**
     * Get the calendar element inside the popup.
     *
     * Only present when the calendar is open. Use `FCalendarSelectors`
     * for more fine-grained access to calendar sub-elements.
     *
     * @example Cypress
     *
     * ```ts
     * const { calendar } = FDatepickerFieldSelectors();
     * cy.get(calendar()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { calendar } = FDatepickerFieldSelectors();
     * await expect(page.locator(calendar())).toBeVisible();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the calendar element.
     */
    calendar() {
      return `${selector} .calendar__wrapper`;
    }
  });
}
function FFileItemSelectors(selector = ".file-item") {
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
     * Get the file name element.
     *
     * @example Cypress
     *
     * ```ts
     * const { fileName } = FFileItemSelectors();
     * cy.get(fileName()).should("have.text", "document.pdf");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { fileName } = FFileItemSelectors();
     * await expect(page.locator(fileName())).toHaveText("document.pdf");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the file name element.
     */
    fileName() {
      return `${selector} .file-item__file-name`;
    },
    /**
     * Get the open file link element.
     *
     * @example Cypress
     *
     * ```ts
     * const { openLink } = FFileItemSelectors();
     * cy.get(openLink()).should("have.attr", "href");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { openLink } = FFileItemSelectors();
     * await expect(page.locator(openLink())).toHaveAttribute("href");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the open file link element.
     */
    openLink() {
      return `${selector} .file-item__file-open`;
    },
    /**
     * Get the delete/cancel button element.
     *
     * Only present when the component has a delete or cancel callback
     * configured.
     *
     * @example Cypress
     *
     * ```ts
     * const { deleteButton } = FFileItemSelectors();
     * cy.get(deleteButton()).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { deleteButton } = FFileItemSelectors();
     * await page.locator(deleteButton()).click();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the delete/cancel button element.
     */
    deleteButton() {
      return `${selector} .file-item__file-remove`;
    }
  });
}
function FFileSelectorSelectors(selector = ".file-selector") {
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
     * Get the file input element.
     *
     * This is the hidden `<input type="file">` element used to trigger the
     * file picker dialog. In Cypress and Playwright it can be used to
     * attach files programmatically.
     *
     * @example Cypress
     *
     * ```ts
     * const { fileInput } = FFileSelectorSelectors();
     * cy.get(fileInput()).selectFile("path/to/file.pdf", { force: true });
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { fileInput } = FFileSelectorSelectors();
     * await page.locator(fileInput()).setInputFiles("path/to/file.pdf");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the file input element.
     */
    fileInput() {
      return `${selector} > input`;
    },
    /**
     * Get the icon element.
     *
     * @example Cypress
     *
     * ```ts
     * const { icon } = FFileSelectorSelectors();
     * cy.get(icon()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { icon } = FFileSelectorSelectors();
     * await expect(page.locator(icon())).toBeVisible();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the icon element.
     */
    icon() {
      return `${selector} .button__icon`;
    }
  });
}
function FCheckboxFieldSelectors(selector = ".checkbox") {
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
     * Get the checkbox input element.
     *
     * Use this to assert the checked state or value. To check or uncheck
     * the checkbox programmatically, click `label()` instead.
     *
     * @example Cypress
     *
     * ```ts
     * const { input } = FCheckboxFieldSelectors();
     * cy.get(input()).should("be.checked");
     * cy.get(input()).should("have.value", "my-value");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { input } = FCheckboxFieldSelectors();
     * await expect(page.locator(input())).toBeChecked();
     * await expect(page.locator(input())).toHaveValue("my-value");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the checkbox input element.
     */
    input() {
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
     * @since %version%
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
     * @since %version%
     * @returns A selector for the details element.
     */
    details() {
      return `${selector} .checkbox__details`;
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
     * @since %version%
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
     * @since %version%
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
     * @since %version%
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
     * @since %version%
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
     * @since %version%
     * @returns A selector for the error icon element.
     */
    errorIcon() {
      return `${selector} .icon.label__icon--left.f-icon-error`;
    }
  });
}
function FLayoutApplicationTemplateSelectors(selector = ".layout-application-template") {
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
     * Get the header element.
     *
     * Only present when the `header` slot is used.
     *
     * @example Cypress
     *
     * ```ts
     * const { header } = FLayoutApplicationTemplateSelectors();
     * cy.get(header()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { header } = FLayoutApplicationTemplateSelectors();
     * await expect(page.locator(header())).toBeVisible();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the header element.
     */
    header() {
      return `${selector} .layout-application-template__header`;
    },
    /**
     * Get the main content element.
     *
     * @example Cypress
     *
     * ```ts
     * const { main } = FLayoutApplicationTemplateSelectors();
     * cy.get(main()).should("contain.text", "Page content");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { main } = FLayoutApplicationTemplateSelectors();
     * await expect(page.locator(main())).toContainText("Page content");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the main content element.
     */
    main() {
      return `${selector} .layout-application-template__main`;
    },
    /**
     * Get the footer element.
     *
     * Only present when the `footer` slot is used.
     *
     * @example Cypress
     *
     * ```ts
     * const { footer } = FLayoutApplicationTemplateSelectors();
     * cy.get(footer()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { footer } = FLayoutApplicationTemplateSelectors();
     * await expect(page.locator(footer())).toBeVisible();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the footer element.
     */
    footer() {
      return `${selector} .layout-application-template__footer`;
    }
  });
}
function FLayoutLeftPanelSelectors(selector = ".layout-navigation") {
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
     * Get the navigation panel element.
     *
     * @example Cypress
     *
     * ```ts
     * const { navigation } = FLayoutLeftPanelSelectors();
     * cy.get(navigation()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { navigation } = FLayoutLeftPanelSelectors();
     * await expect(page.locator(navigation())).toBeVisible();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the navigation panel element.
     */
    navigation() {
      return `${selector} .layout-navigation__navigation`;
    },
    /**
     * Get the primary content element.
     *
     * @example Cypress
     *
     * ```ts
     * const { primary } = FLayoutLeftPanelSelectors();
     * cy.get(primary()).should("contain.text", "Main content");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { primary } = FLayoutLeftPanelSelectors();
     * await expect(page.locator(primary())).toContainText("Main content");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the primary content element.
     */
    primary() {
      return `${selector} .layout-navigation__primary`;
    }
  });
}
function FLayoutRightPanelSelectors(selector = ".layout-secondary") {
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
     * Get the primary content element.
     *
     * @example Cypress
     *
     * ```ts
     * const { primary } = FLayoutRightPanelSelectors();
     * cy.get(primary()).should("contain.text", "Main content");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { primary } = FLayoutRightPanelSelectors();
     * await expect(page.locator(primary())).toContainText("Main content");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the primary content element.
     */
    primary() {
      return `${selector} .layout-secondary__primary`;
    },
    /**
     * Get the secondary panel element.
     *
     * Only present when the secondary panel is open.
     *
     * @example Cypress
     *
     * ```ts
     * const { secondary } = FLayoutRightPanelSelectors();
     * cy.get(secondary()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { secondary } = FLayoutRightPanelSelectors();
     * await expect(page.locator(secondary())).toBeVisible();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the secondary panel element.
     */
    secondary() {
      return `${selector} .layout-secondary__secondary`;
    }
  });
}
function FDefinitionListSelectors(selector = ".definition-list") {
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
     * Get all term (`dt`) elements.
     *
     * To target a specific term by index use `.eq()` in Cypress or
     * `.nth()` in Playwright.
     *
     * @example Cypress
     *
     * ```ts
     * const { terms } = FDefinitionListSelectors();
     * cy.get(terms()).should("have.length", 3);
     * cy.get(terms()).eq(0).should("contain.text", "Name");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { terms } = FDefinitionListSelectors();
     * await expect(page.locator(terms())).toHaveCount(3);
     * await expect(page.locator(terms()).nth(0)).toContainText("Name");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for all term elements.
     */
    terms() {
      return `${selector} .definition-list__term`;
    },
    /**
     * Get all definition (`dd`) elements.
     *
     * To target a specific definition by index use `.eq()` in Cypress or
     * `.nth()` in Playwright.
     *
     * @example Cypress
     *
     * ```ts
     * const { definitions } = FDefinitionListSelectors();
     * cy.get(definitions()).should("have.length", 3);
     * cy.get(definitions()).eq(0).should("contain.text", "Jane Doe");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { definitions } = FDefinitionListSelectors();
     * await expect(page.locator(definitions())).toHaveCount(3);
     * await expect(page.locator(definitions()).nth(0)).toContainText("Jane Doe");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for all definition elements.
     */
    definitions() {
      return `${selector} .definition-list__definition`;
    }
  });
}
function FIconSelectors(selector = ".icon") {
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
     * Get the `<use>` element.
     *
     * The `href` attribute of this element identifies which icon from the
     * sprite sheet is displayed, following the pattern `#f-icon-{name}`.
     *
     * @example Cypress
     *
     * ```ts
     * const { use } = FIconSelectors();
     * cy.get(use()).should("have.attr", "href", "#f-icon-bell");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { use } = FIconSelectors();
     * await expect(page.locator(use())).toHaveAttribute("href", "#f-icon-bell");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the `<use>` element.
     */
    use() {
      return `${selector} use`;
    }
  });
}
function FConfirmModalSelectors(selector = ".modal") {
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
     * Get the header element.
     *
     * @example Cypress
     *
     * ```ts
     * const { header } = FConfirmModalSelectors();
     * cy.get(header()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { header } = FConfirmModalSelectors();
     * await expect(page.locator(header())).toBeVisible();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the header element.
     */
    header() {
      return `${selector} .modal__header`;
    },
    /**
     * Get the title element.
     *
     * @example Cypress
     *
     * ```ts
     * const { title } = FConfirmModalSelectors();
     * cy.get(title()).should("have.text", "Are you sure?");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { title } = FConfirmModalSelectors();
     * await expect(page.locator(title())).toHaveText("Are you sure?");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the title element.
     */
    title() {
      return `${selector} .modal__title`;
    },
    /**
     * Get the content element.
     *
     * @example Cypress
     *
     * ```ts
     * const { content } = FConfirmModalSelectors();
     * cy.get(content()).should("contain.text", "This action cannot be undone.");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { content } = FConfirmModalSelectors();
     * await expect(page.locator(content())).toContainText("This action cannot be undone.");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the content element.
     */
    content() {
      return `${selector} .modal__content`;
    },
    /**
     * Get the footer element.
     *
     * @example Cypress
     *
     * ```ts
     * const { footer } = FConfirmModalSelectors();
     * cy.get(footer()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { footer } = FConfirmModalSelectors();
     * await expect(page.locator(footer())).toBeVisible();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the footer element.
     */
    footer() {
      return `${selector} .modal__footer`;
    },
    /**
     * Get the close button element.
     *
     * @example Cypress
     *
     * ```ts
     * const { closeButton } = FConfirmModalSelectors();
     * cy.get(closeButton()).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { closeButton } = FConfirmModalSelectors();
     * await page.locator(closeButton()).click();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the close button element.
     */
    closeButton() {
      return `${selector} .close-button`;
    },
    /**
     * Get the confirm button element in the footer.
     *
     * Use this to confirm the action presented by the modal.
     *
     * @example Cypress
     *
     * ```ts
     * const { confirmButton } = FConfirmModalSelectors();
     * cy.get(confirmButton()).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { confirmButton } = FConfirmModalSelectors();
     * await page.locator(confirmButton()).click();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the confirm button element.
     */
    confirmButton() {
      return `${selector} .modal__footer .button--primary`;
    },
    /**
     * Get the dismiss button element in the footer.
     *
     * Use this to dismiss the modal without confirming the action.
     *
     * @example Cypress
     *
     * ```ts
     * const { dismissButton } = FConfirmModalSelectors();
     * cy.get(dismissButton()).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { dismissButton } = FConfirmModalSelectors();
     * await page.locator(dismissButton()).click();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the dismiss button element.
     */
    dismissButton() {
      return `${selector} .modal__footer .button--secondary`;
    }
  });
}
function FFormModalSelectors(selector = ".modal") {
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
     * Get the header element.
     *
     * @example Cypress
     *
     * ```ts
     * const { header } = FFormModalSelectors();
     * cy.get(header()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { header } = FFormModalSelectors();
     * await expect(page.locator(header())).toBeVisible();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the header element.
     */
    header() {
      return `${selector} .modal__header`;
    },
    /**
     * Get the title element.
     *
     * @example Cypress
     *
     * ```ts
     * const { title } = FFormModalSelectors();
     * cy.get(title()).should("have.text", "Edit details");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { title } = FFormModalSelectors();
     * await expect(page.locator(title())).toHaveText("Edit details");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the title element.
     */
    title() {
      return `${selector} .modal__title`;
    },
    /**
     * Get the content element.
     *
     * @example Cypress
     *
     * ```ts
     * const { content } = FFormModalSelectors();
     * cy.get(content()).should("contain.text", "Fill in the form");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { content } = FFormModalSelectors();
     * await expect(page.locator(content())).toContainText("Fill in the form");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the content element.
     */
    content() {
      return `${selector} .modal__content`;
    },
    /**
     * Get the footer element.
     *
     * @example Cypress
     *
     * ```ts
     * const { footer } = FFormModalSelectors();
     * cy.get(footer()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { footer } = FFormModalSelectors();
     * await expect(page.locator(footer())).toBeVisible();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the footer element.
     */
    footer() {
      return `${selector} .modal__footer`;
    },
    /**
     * Get the close button element.
     *
     * @example Cypress
     *
     * ```ts
     * const { closeButton } = FFormModalSelectors();
     * cy.get(closeButton()).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { closeButton } = FFormModalSelectors();
     * await page.locator(closeButton()).click();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the close button element.
     */
    closeButton() {
      return `${selector} .close-button`;
    },
    /**
     * Get the submit button element in the footer.
     *
     * Use this to submit the form inside the modal.
     *
     * @example Cypress
     *
     * ```ts
     * const { submitButton } = FFormModalSelectors();
     * cy.get(submitButton()).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { submitButton } = FFormModalSelectors();
     * await page.locator(submitButton()).click();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the submit button element.
     */
    submitButton() {
      return `${selector} .modal__footer .button--primary`;
    },
    /**
     * Get the cancel button element in the footer.
     *
     * Use this to dismiss the modal without submitting.
     *
     * @example Cypress
     *
     * ```ts
     * const { cancelButton } = FFormModalSelectors();
     * cy.get(cancelButton()).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { cancelButton } = FFormModalSelectors();
     * await page.locator(cancelButton()).click();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the cancel button element.
     */
    cancelButton() {
      return `${selector} .modal__footer .button--secondary`;
    }
  });
}
function FContextMenuSelectors(selector = ".contextmenu") {
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
     * Get all menu item elements.
     *
     * To target a specific item by index use `.eq()` in Cypress or `.nth()`
     * in Playwright.
     *
     * @example Cypress
     *
     * ```ts
     * const { items } = FContextMenuSelectors();
     * cy.get(items()).should("have.length", 3);
     * cy.get(items()).eq(0).should("contain.text", "Home");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { items } = FContextMenuSelectors();
     * await expect(page.locator(items())).toHaveCount(3);
     * await expect(page.locator(items()).nth(0)).toContainText("Home");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for all menu item elements.
     */
    items() {
      return `${selector} .contextmenu__list__item`;
    },
    /**
     * Get all link elements inside menu items.
     *
     * To target the link of a specific item, scope by index first using
     * `.eq()` in Cypress or `.nth()` in Playwright.
     *
     * @example Cypress
     *
     * ```ts
     * const { items, itemLink } = FContextMenuSelectors();
     * cy.get(items()).eq(0).find(itemLink()).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { items, itemLink } = FContextMenuSelectors();
     * await page.locator(items()).nth(0).locator(itemLink()).click();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the link inside a menu item.
     */
    itemLink() {
      return "a";
    }
  });
}
function FDataTableSelectors(selector = ".table") {
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
     * Get all body row elements.
     *
     * @example Cypress
     *
     * ```ts
     * const { rows } = FDataTableSelectors();
     * cy.get(rows()).should("have.length", 5);
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { rows } = FDataTableSelectors();
     * await expect(page.locator(rows())).toHaveCount(5);
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for all body row elements.
     */
    rows() {
      return `${selector} tbody .table__row`;
    },
    /**
     * Get a header cell (`<th>` in `<thead>`).
     *
     * Expandable and selectable columns are not included in the column count.
     *
     * @example Cypress
     *
     * ```ts
     * const { header } = FDataTableSelectors();
     * cy.get(header(1)).should("contain.text", "Name");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { header } = FDataTableSelectors();
     * await expect(page.locator(header(1))).toContainText("Name");
     * ```
     *
     * @public
     * @since %version%
     * @param col - Column number (1-indexed).
     * @returns A selector for the header cell.
     */
    header(col) {
      return `${selector} thead .table__column:nth-child(${col})`;
    },
    /**
     * Get a body cell.
     *
     * Both row and column are 1-indexed. Expandable and selectable columns
     * are not included in the column count.
     *
     * @example Cypress
     *
     * ```ts
     * const { cell } = FDataTableSelectors();
     * cy.get(cell({ row: 1, col: 1 })).should("contain.text", "Alice");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { cell } = FDataTableSelectors();
     * await expect(page.locator(cell({ row: 1, col: 1 }))).toContainText("Alice");
     * ```
     *
     * @public
     * @since %version%
     * @param descriptor - Row and column number (1-indexed).
     * @returns A selector for the cell element.
     */
    cell(descriptor) {
      const { row, col } = descriptor;
      return `${selector} tbody tr:not(.table__expandable-row--collapsed):nth-child(${row}) > .table__column:nth-child(${col})`;
    },
    /**
     * Get the `<caption>` element.
     *
     * Only present when the caption slot is used.
     *
     * @example Cypress
     *
     * ```ts
     * const { caption } = FDataTableSelectors();
     * cy.get(caption()).should("contain.text", "My table");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { caption } = FDataTableSelectors();
     * await expect(page.locator(caption())).toContainText("My table");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the caption element.
     */
    caption() {
      return `${selector} caption`;
    }
  });
}
function FInteractiveTableSelectors(selector = ".table") {
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
     * Get all body row elements.
     *
     * @example Cypress
     *
     * ```ts
     * const { rows } = FInteractiveTableSelectors();
     * cy.get(rows()).should("have.length", 5);
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { rows } = FInteractiveTableSelectors();
     * await expect(page.locator(rows())).toHaveCount(5);
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for all body row elements.
     */
    rows() {
      return `${selector} tbody .table__row`;
    },
    /**
     * Get all selected row elements.
     *
     * @example Cypress
     *
     * ```ts
     * const { selectedRows } = FInteractiveTableSelectors();
     * cy.get(selectedRows()).should("have.length", 1);
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { selectedRows } = FInteractiveTableSelectors();
     * await expect(page.locator(selectedRows())).toHaveCount(1);
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for all selected row elements.
     */
    selectedRows() {
      return `${selector} tbody .table__row--selected`;
    },
    /**
     * Get a header cell (`<th>` in `<thead>`).
     *
     * Expandable and selectable columns are not included in the column count.
     *
     * @example Cypress
     *
     * ```ts
     * const { header } = FInteractiveTableSelectors();
     * cy.get(header(1)).should("contain.text", "Name");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { header } = FInteractiveTableSelectors();
     * await expect(page.locator(header(1))).toContainText("Name");
     * ```
     *
     * @public
     * @since %version%
     * @param col - Column number (1-indexed).
     * @returns A selector for the header cell.
     */
    header(col) {
      return `${selector} thead .table__column:nth-child(${col})`;
    },
    /**
     * Get a body cell.
     *
     * Both row and column are 1-indexed. Expandable and selectable columns
     * are not included in the column count.
     *
     * @example Cypress
     *
     * ```ts
     * const { cell } = FInteractiveTableSelectors();
     * cy.get(cell({ row: 1, col: 1 })).should("contain.text", "Alice");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { cell } = FInteractiveTableSelectors();
     * await expect(page.locator(cell({ row: 1, col: 1 }))).toContainText("Alice");
     * ```
     *
     * @public
     * @since %version%
     * @param descriptor - Row and column number (1-indexed).
     * @returns A selector for the cell element.
     */
    cell(descriptor) {
      const { row, col } = descriptor;
      return `${selector} tbody tr:not(.table__expandable-row--collapsed):nth-child(${row}) > .table__column:nth-child(${col})`;
    },
    /**
     * Get the `<caption>` element.
     *
     * Only present when the caption slot is used.
     *
     * @example Cypress
     *
     * ```ts
     * const { caption } = FInteractiveTableSelectors();
     * cy.get(caption()).should("contain.text", "My table");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { caption } = FInteractiveTableSelectors();
     * await expect(page.locator(caption())).toContainText("My table");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the caption element.
     */
    caption() {
      return `${selector} caption`;
    }
  });
}
function FCardSelectors(selector = ".card") {
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
     * Get the header element.
     *
     * @example Cypress
     *
     * ```ts
     * const { header } = FCardSelectors();
     * cy.get(header()).should("contain.text", "My heading");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { header } = FCardSelectors();
     * await expect(page.locator(header())).toContainText("My heading");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the header element.
     */
    header() {
      return `${selector} .card__header`;
    },
    /**
     * Get the content element.
     *
     * @example Cypress
     *
     * ```ts
     * const { content } = FCardSelectors();
     * cy.get(content()).should("contain.text", "Card body");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { content } = FCardSelectors();
     * await expect(page.locator(content())).toContainText("Card body");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the content element.
     */
    content() {
      return `${selector} .card__content`;
    },
    /**
     * Get the footer element.
     *
     * @example Cypress
     *
     * ```ts
     * const { footer } = FCardSelectors();
     * cy.get(footer()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { footer } = FCardSelectors();
     * await expect(page.locator(footer())).toBeVisible();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the footer element.
     */
    footer() {
      return `${selector} .card__footer`;
    },
    /**
     * Get the error message element.
     *
     * Only present when the card has a validation error.
     *
     * @example Cypress
     *
     * ```ts
     * const { errorMessage } = FCardSelectors();
     * cy.get(errorMessage()).should("contain.text", "Fix the errors");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { errorMessage } = FCardSelectors();
     * await expect(page.locator(errorMessage())).toContainText("Fix the errors");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the error message element.
     */
    errorMessage() {
      return `${selector} .card__error-message`;
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
     * @since %version%
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
     * @since %version%
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
     * @since %version%
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
     * @since %version%
     * @returns A selector for the panel footer slot element.
     */
    footer() {
      return `${selector} [slot=footer]`;
    }
  });
}
function FExpandablePanelSelectors(selector = ".expandable-panel") {
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
     * @since %version%
     * @returns A selector for the header element.
     */
    header() {
      return `${selector} .expandable-panel__heading`;
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
     * @since %version%
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
     * @since %version%
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
     * cy.get(notification()).should("exist");
     * cy.get(notification()).invoke("text").then(Number).should("be.gt", 0);
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
     * @since %version%
     * @returns A selector for the notification badge element.
     */
    notification() {
      return `${selector} .expandable-panel__notification`;
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
     * @since %version%
     * @returns A selector for the related info element.
     */
    relatedInfo() {
      return `${selector} .expandable-panel__outside`;
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
function FMessageBoxSelectors(selector = ".message-box") {
  return Object.freeze({
    /**
     * The base selector for the component.
     *
     * This is the same selector that the consumer provided.
     *
     * To assert the message type (`info`, `warning`, `error`, `success`),
     * check the modifier class on the root element:
     *
     * @example Cypress
     *
     * ```ts
     * const { selector } = FMessageBoxSelectors();
     * cy.get(selector).should("have.class", "message-box--error");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { selector } = FMessageBoxSelectors();
     * await expect(page.locator(selector)).toHaveClass(/message-box--error/);
     * ```
     *
     * @public
     * @since %version%
     * @returns The root selector for the component.
     */
    get selector() {
      return selector;
    },
    /**
     * Get the content area element.
     *
     * The content area contains the slotted content such as headings and
     * paragraphs.
     *
     * @example Cypress
     *
     * ```ts
     * const { content } = FMessageBoxSelectors();
     * cy.get(content()).should("contain.text", "Something went wrong");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { content } = FMessageBoxSelectors();
     * await expect(page.locator(content())).toContainText("Something went wrong");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the content area element.
     */
    content() {
      return `${selector} .message-box__content`;
    },
    /**
     * Get the heading element.
     *
     * The heading is rendered inside the content area when the consumer
     * uses the `headingSlotClass` slot binding on a heading element. Only
     * present in the standard layout.
     *
     * @example Cypress
     *
     * ```ts
     * const { heading } = FMessageBoxSelectors();
     * cy.get(heading()).should("have.text", "Operation successful");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { heading } = FMessageBoxSelectors();
     * await expect(page.locator(heading())).toHaveText("Operation successful");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the heading element.
     */
    heading() {
      return `${selector} .message-box__heading`;
    },
    /**
     * Get the icon container element.
     *
     * The icon container is only present when the `short` layout is used.
     *
     * @example Cypress
     *
     * ```ts
     * const { icon } = FMessageBoxSelectors();
     * cy.get(icon()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { icon } = FMessageBoxSelectors();
     * await expect(page.locator(icon())).toBeVisible();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the icon container element.
     */
    icon() {
      return `${selector} .message-box__icon`;
    }
  });
}
function FOutputFieldSelectors(selector = ".output-field") {
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
     * Get the output element.
     *
     * The output element contains the value displayed to the user.
     *
     * @example Cypress
     *
     * ```ts
     * const { output } = FOutputFieldSelectors();
     * cy.get(output()).should("have.text", "Jane Doe");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { output } = FOutputFieldSelectors();
     * await expect(page.locator(output())).toHaveText("Jane Doe");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the output element.
     */
    output() {
      return `${selector} .output-field__output`;
    },
    /**
     * Get the label element.
     *
     * The label contains the heading text and, when present, description
     * and tooltip. Use `FLabelSelectors` for more fine-grained access to
     * label sub-elements.
     *
     * @example Cypress
     *
     * ```ts
     * const { label } = FOutputFieldSelectors();
     * cy.get(label()).should("contain.text", "Full name");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { label } = FOutputFieldSelectors();
     * await expect(page.locator(label())).toContainText("Full name");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the label element.
     */
    label() {
      return `${selector} .label`;
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
     * @since %version%
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
     * @since %version%
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
     * @since %version%
     * @returns A selector for the wait text element.
     */
    waitText() {
      return `${selector} .loader__wait-text`;
    }
  });
}
function FLogoSelectors(selector = ".logo") {
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
    }
  });
}
function FOfflineSelectors(selector = ".offline__wrapper") {
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
     * Get the offline message element.
     *
     * Only present when the browser is offline.
     *
     * @example Cypress
     *
     * ```ts
     * const { offlineMessage } = FOfflineSelectors();
     * cy.get(offlineMessage()).should("be.visible");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { offlineMessage } = FOfflineSelectors();
     * await expect(page.locator(offlineMessage())).toBeVisible();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the offline message element.
     */
    offlineMessage() {
      return `${selector} .offline`;
    }
  });
}
function FModalSelectors(selector = ".modal") {
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
     * Get the header element.
     *
     * @example Cypress
     *
     * ```ts
     * const { header } = FModalSelectors();
     * cy.get(header()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { header } = FModalSelectors();
     * await expect(page.locator(header())).toBeVisible();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the header element.
     */
    header() {
      return `${selector} .modal__header`;
    },
    /**
     * Get the title element.
     *
     * @example Cypress
     *
     * ```ts
     * const { title } = FModalSelectors();
     * cy.get(title()).should("have.text", "Confirm action");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { title } = FModalSelectors();
     * await expect(page.locator(title())).toHaveText("Confirm action");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the title element.
     */
    title() {
      return `${selector} .modal__title`;
    },
    /**
     * Get the content element.
     *
     * @example Cypress
     *
     * ```ts
     * const { content } = FModalSelectors();
     * cy.get(content()).should("contain.text", "Are you sure?");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { content } = FModalSelectors();
     * await expect(page.locator(content())).toContainText("Are you sure?");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the content element.
     */
    content() {
      return `${selector} .modal__content`;
    },
    /**
     * Get the footer element.
     *
     * @example Cypress
     *
     * ```ts
     * const { footer } = FModalSelectors();
     * cy.get(footer()).find("button").first().click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { footer } = FModalSelectors();
     * await page.locator(footer()).locator("button").first().click();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the footer element.
     */
    footer() {
      return `${selector} .modal__footer`;
    },
    /**
     * Get the primary button element in the footer.
     *
     * @example Cypress
     *
     * ```ts
     * const { primaryButton } = FModalSelectors();
     * cy.get(primaryButton()).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { primaryButton } = FModalSelectors();
     * await page.locator(primaryButton()).click();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the primary button element.
     */
    primaryButton() {
      return `${selector} .modal__footer .button--primary`;
    },
    /**
     * Get the secondary button element in the footer.
     *
     * @example Cypress
     *
     * ```ts
     * const { secondaryButton } = FModalSelectors();
     * cy.get(secondaryButton()).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { secondaryButton } = FModalSelectors();
     * await page.locator(secondaryButton()).click();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the secondary button element.
     */
    secondaryButton() {
      return `${selector} .modal__footer .button--secondary`;
    },
    /**
     * Get the close button element.
     *
     * @example Cypress
     *
     * ```ts
     * const { closeButton } = FModalSelectors();
     * cy.get(closeButton()).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { closeButton } = FModalSelectors();
     * await page.locator(closeButton()).click();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the close button element.
     */
    closeButton() {
      return `${selector} .close-button`;
    }
  });
}
function FNavigationMenuSelectors(selector = ".imenu") {
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
     * Get all visible menu item elements (excludes hidden overflow items).
     *
     * To target a specific item by index use `.eq()` in Cypress or `.nth()`
     * in Playwright.
     *
     * @example Cypress
     *
     * ```ts
     * const { items } = FNavigationMenuSelectors();
     * cy.get(items()).should("have.length", 4);
     * cy.get(items()).eq(0).find("a").click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { items } = FNavigationMenuSelectors();
     * await expect(page.locator(items())).toHaveCount(4);
     * await page.locator(items()).nth(0).locator("a").click();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for all visible menu item elements.
     */
    items() {
      return `${selector} .imenu__list__item:not(.imenu__list__item--hidden)`;
    },
    /**
     * Get all overflowed (hidden) menu item elements.
     *
     * Items overflow into the popup menu when the navigation bar is too
     * narrow to display all items.
     *
     * @example Cypress
     *
     * ```ts
     * const { overflowItems } = FNavigationMenuSelectors();
     * cy.get(overflowItems()).should("have.length", 2);
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { overflowItems } = FNavigationMenuSelectors();
     * await expect(page.locator(overflowItems())).toHaveCount(2);
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for all overflowed menu item elements.
     */
    overflowItems() {
      return `${selector} .imenu__list__item--hidden`;
    },
    /**
     * Get the currently selected (highlighted) menu item element.
     *
     * @example Cypress
     *
     * ```ts
     * const { selectedItem } = FNavigationMenuSelectors();
     * cy.get(selectedItem()).should("contain.text", "Home");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { selectedItem } = FNavigationMenuSelectors();
     * await expect(page.locator(selectedItem())).toContainText("Home");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the selected menu item element.
     */
    selectedItem() {
      return `${selector} .imenu__list__item--highlight`;
    },
    /**
     * Get the popup menu item element (the overflow trigger button).
     *
     * Only present when some items have overflowed into the popup menu.
     *
     * @example Cypress
     *
     * ```ts
     * const { popupItem } = FNavigationMenuSelectors();
     * cy.get(popupItem()).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { popupItem } = FNavigationMenuSelectors();
     * await page.locator(popupItem()).click();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the popup menu item element.
     */
    popupItem() {
      return `${selector} .imenu__popup-item__wrapper`;
    }
  });
}
function FPageHeaderSelectors(selector = ".page-header__root") {
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
     * Get the skip link element.
     *
     * The skip link is visually hidden by default and only becomes visible
     * on keyboard focus. Use this selector to assert its presence or to
     * verify the link target.
     *
     * @example Cypress
     *
     * ```ts
     * const { skipLink } = FPageHeaderSelectors();
     * cy.get(skipLink()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { skipLink } = FPageHeaderSelectors();
     * await expect(page.locator(skipLink())).toBeAttached();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the skip link element.
     */
    skipLink() {
      return `${selector} .iskiplink`;
    },
    /**
     * Get the logo element.
     *
     * Only present when the `logo` slot is used.
     *
     * @example Cypress
     *
     * ```ts
     * const { logo } = FPageHeaderSelectors();
     * cy.get(logo()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { logo } = FPageHeaderSelectors();
     * await expect(page.locator(logo())).toBeVisible();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the logo element.
     */
    logo() {
      return `${selector} .page-header__logo`;
    },
    /**
     * Get the application name element.
     *
     * @example Cypress
     *
     * ```ts
     * const { appName } = FPageHeaderSelectors();
     * cy.get(appName()).should("have.text", "My App");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { appName } = FPageHeaderSelectors();
     * await expect(page.locator(appName())).toHaveText("My App");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the application name element.
     */
    appName() {
      return `${selector} .page-header__app-name`;
    },
    /**
     * Get the right-side slot element.
     *
     * Only present when the `right` slot is used.
     *
     * @example Cypress
     *
     * ```ts
     * const { right } = FPageHeaderSelectors();
     * cy.get(right()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { right } = FPageHeaderSelectors();
     * await expect(page.locator(right())).toBeVisible();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the right-side content element.
     */
    right() {
      return `${selector} .page-header__right`;
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
     * @since %version%
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
     * @since %version%
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
     * @since %version%
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
     * @since %version%
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
function FTableSelectors(selector = ".table-ng") {
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
     * Get all body row elements.
     *
     * @example Cypress
     *
     * ```ts
     * const { rows } = FTableSelectors();
     * cy.get(rows()).should("have.length", 3);
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { rows } = FTableSelectors();
     * await expect(page.locator(rows())).toHaveCount(3);
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for all body row elements.
     */
    rows() {
      return `${selector} tbody .table-ng__row`;
    },
    /**
     * Get the empty state row element.
     *
     * Only present when the table has no data rows.
     *
     * @example Cypress
     *
     * ```ts
     * const { emptyRow } = FTableSelectors();
     * cy.get(emptyRow()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { emptyRow } = FTableSelectors();
     * await expect(page.locator(emptyRow())).toBeVisible();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the empty state row element.
     */
    emptyRow() {
      return `${selector} .table-ng__row--empty`;
    },
    /**
     * Get a header cell (`<th>` in `<thead>`).
     *
     * Both the expandable button column and selectable checkbox column are
     * included in the column count.
     *
     * @example Cypress
     *
     * ```ts
     * const { header } = FTableSelectors();
     * cy.get(header(1)).should("contain.text", "Name");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { header } = FTableSelectors();
     * await expect(page.locator(header(1))).toContainText("Name");
     * ```
     *
     * @public
     * @since %version%
     * @param col - Column number (1-indexed).
     * @returns A selector for the header cell.
     */
    header(col) {
      return `${selector} thead th:nth-child(${col})`;
    },
    /**
     * Get a body cell (`<td>` or `<th>` for row headers).
     *
     * Both row and column are 1-indexed. Both the expandable button column
     * and selectable checkbox column are included in the column count.
     *
     * @example Cypress
     *
     * ```ts
     * const { cell } = FTableSelectors();
     * cy.get(cell({ row: 1, col: 1 })).should("contain.text", "Alice");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { cell } = FTableSelectors();
     * await expect(page.locator(cell({ row: 1, col: 1 }))).toContainText("Alice");
     * ```
     *
     * @public
     * @since %version%
     * @param descriptor - Row and column number (1-indexed).
     * @returns A selector for the cell element.
     */
    cell(descriptor) {
      const { row, col } = descriptor;
      const rowSelector = `${selector} tbody tr:nth-child(${row})`;
      return `${rowSelector} > td:nth-child(${col}), ${rowSelector} > th:nth-child(${col})`;
    },
    /**
     * Get the `<caption>` element.
     *
     * Only present when the caption slot is used.
     *
     * @example Cypress
     *
     * ```ts
     * const { caption } = FTableSelectors();
     * cy.get(caption()).should("contain.text", "My table");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { caption } = FTableSelectors();
     * await expect(page.locator(caption())).toContainText("My table");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the caption element.
     */
    caption() {
      return `${selector} caption`;
    },
    /**
     * Get the `<tfoot>` element.
     *
     * Only present when the footer slot is used.
     *
     * @example Cypress
     *
     * ```ts
     * const { footer } = FTableSelectors();
     * cy.get(footer()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { footer } = FTableSelectors();
     * await expect(page.locator(footer())).toBeVisible();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the footer element.
     */
    footer() {
      return `${selector} tfoot`;
    }
  });
}
function FTableButtonSelectors(selector = ".table__button") {
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
    }
  });
}
function FWizardSelectors(selector = ".wizard") {
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
     * Get all wizard step elements.
     *
     * To target a specific step by index use `.eq()` in Cypress or
     * `.nth()` in Playwright.
     *
     * @example Cypress
     *
     * ```ts
     * const { steps } = FWizardSelectors();
     * cy.get(steps()).should("have.length", 3);
     * cy.get(steps()).eq(0).find(stepContinueButton()).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { steps } = FWizardSelectors();
     * await expect(page.locator(steps())).toHaveCount(3);
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for all wizard step elements.
     */
    steps() {
      return `${selector} .wizard-step`;
    },
    /**
     * Get the continue (primary) button inside a wizard step.
     *
     * Use together with `steps()` to scope to a specific step.
     *
     * @example Cypress
     *
     * ```ts
     * const { steps, stepContinueButton } = FWizardSelectors();
     * cy.get(steps()).eq(0).find(stepContinueButton()).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { steps, stepContinueButton } = FWizardSelectors();
     * await page.locator(steps()).nth(0).locator(stepContinueButton()).click();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the continue button inside a wizard step.
     */
    stepContinueButton() {
      return ".button-group:last-child .button--primary";
    },
    /**
     * Get the cancel (secondary) button inside a wizard step.
     *
     * Use together with `steps()` to scope to a specific step.
     *
     * @example Cypress
     *
     * ```ts
     * const { steps, stepCancelButton } = FWizardSelectors();
     * cy.get(steps()).eq(0).find(stepCancelButton()).click();
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { steps, stepCancelButton } = FWizardSelectors();
     * await page.locator(steps()).nth(0).locator(stepCancelButton()).click();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the cancel button inside a wizard step.
     */
    stepCancelButton() {
      return ".button-group:last-child .button--secondary";
    },
    /**
     * Get the body element inside a wizard step.
     *
     * Use together with `steps()` to scope to a specific step.
     *
     * @example Cypress
     *
     * ```ts
     * const { steps, stepBody } = FWizardSelectors();
     * cy.get(steps()).eq(0).find(stepBody()).should("contain.text", "Step 1");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { steps, stepBody } = FWizardSelectors();
     * await expect(page.locator(steps()).nth(0).locator(stepBody())).toContainText("Step 1");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the body element inside a wizard step.
     */
    stepBody() {
      return ".wizard-step-body";
    }
  });
}
function FValidationFormSelectors(selector = "form") {
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
     * Get the error list container.
     *
     * The error list is only present after the form has been submitted and
     * contains validation errors.
     *
     * @example Cypress
     *
     * ```ts
     * const { errorList } = FValidationFormSelectors();
     * cy.get(errorList()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { errorList } = FValidationFormSelectors();
     * await expect(page.locator(errorList())).toBeVisible();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the error list container element.
     */
    errorList() {
      return `${selector} .error-list`;
    },
    /**
     * Get the error list item links.
     *
     * Returns all clickable error links inside the error list. Each link
     * navigates to and focuses the corresponding invalid form field.
     *
     * Only present after the form has been submitted with validation errors.
     *
     * @example Cypress
     *
     * ```ts
     * const { errorListItems } = FValidationFormSelectors();
     * cy.get(errorListItems()).should("have.length", 2);
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { errorListItems } = FValidationFormSelectors();
     * await expect(page.locator(errorListItems())).toHaveCount(2);
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for all error item links.
     */
    errorListItems() {
      return `${selector} .error-list__list a`;
    }
  });
}
function FSortFilterDatasetSelectors(selector = ".sort-filter-dataset") {
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
     * Get the search field element.
     *
     * @example Cypress
     *
     * ```ts
     * const { searchField } = FSortFilterDatasetSelectors();
     * cy.get(searchField()).type("John");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { searchField } = FSortFilterDatasetSelectors();
     * await page.locator(searchField()).fill("John");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the search field element.
     */
    searchField() {
      return `${selector} .sort-filter-dataset__search`;
    },
    /**
     * Get the sort dropdown element.
     *
     * @example Cypress
     *
     * ```ts
     * const { sortField } = FSortFilterDatasetSelectors();
     * cy.get(sortField()).find("select").select("Name");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { sortField } = FSortFilterDatasetSelectors();
     * await page.locator(sortField()).locator("select").selectOption("Name");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the sort dropdown element.
     */
    sortField() {
      return `${selector} .sort-filter-dataset__sort`;
    },
    /**
     * Get the toolbar header element.
     *
     * The header is only present when the `#header` slot is used. The slot
     * exposes a `slotClass` binding that must be applied to the element for
     * this selector to match:
     *
     * ```html
     * <template #header="{ slotClass }">
     *   <span :class="slotClass">3 results</span>
     * </template>
     * ```
     *
     * @example Cypress
     *
     * ```ts
     * const { header } = FSortFilterDatasetSelectors();
     * cy.get(header()).should("contain.text", "3 results");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { header } = FSortFilterDatasetSelectors();
     * await expect(page.locator(header())).toContainText("3 results");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the toolbar header element.
     */
    header() {
      return `${selector} .iflex .sort-filter-dataset__toolbar__header`;
    }
  });
}
function FRadioFieldSelectors(selector = ".radio-button") {
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
     * Get the radio input element.
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
     * @since %version%
     * @returns A selector for the radio input element.
     */
    input() {
      return `${selector} .radio-button__input`;
    },
    /**
     * Get the label element.
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
     * @since %version%
     * @returns A selector for the label element.
     */
    label() {
      return `${selector} .radio-button__label`;
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
     * @since %version%
     * @returns A selector for the details element.
     */
    details() {
      return `${selector} .radio-button__details`;
    }
  });
}
function FSelectFieldSelectors(selector = ".select-field") {
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
     * Get the select element.
     *
     * Use this to select an option or assert the currently selected value.
     * To count or list options, query `option` children. To get the
     * currently selected option use `selectedOption()`.
     *
     * @example Cypress
     *
     * ```ts
     * const { select } = FSelectFieldSelectors();
     * cy.get(select()).select("Option 2");
     * cy.get(select()).find("option:not([disabled])").should("have.length", 3);
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { select } = FSelectFieldSelectors();
     * await page.locator(select()).selectOption("Option 2");
     * await expect(page.locator(select()).locator("option:not([disabled])")).toHaveCount(3);
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the select element.
     */
    select() {
      return `${selector} .select-field__select`;
    },
    /**
     * Get the error message element.
     *
     * Only present when the field has a validation error.
     *
     * @example Cypress
     *
     * ```ts
     * const { errorMessage } = FSelectFieldSelectors();
     * cy.get(errorMessage()).should("contain.text", "This field is required");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { errorMessage } = FSelectFieldSelectors();
     * await expect(page.locator(errorMessage())).toContainText("This field is required");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the error message element.
     */
    errorMessage() {
      return `${selector} .label__message--error`;
    },
    /**
     * Get the label element.
     *
     * The label contains the heading text and, when present, description
     * and tooltip. Use `FLabelSelectors` for more fine-grained access to
     * label sub-elements.
     *
     * @example Cypress
     *
     * ```ts
     * const { label } = FSelectFieldSelectors();
     * cy.get(label()).should("contain.text", "Country");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { label } = FSelectFieldSelectors();
     * await expect(page.locator(label())).toContainText("Country");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the label element.
     */
    label() {
      return `${selector} .label`;
    },
    /**
     * Get the currently selected option element.
     *
     * @example Cypress
     *
     * ```ts
     * const { selectedOption } = FSelectFieldSelectors();
     * cy.get(selectedOption()).should("have.text", "Sweden");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { selectedOption } = FSelectFieldSelectors();
     * await expect(page.locator(selectedOption())).toHaveText("Sweden");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the currently selected option element.
     */
    selectedOption() {
      return `${selector} option:checked`;
    },
    /**
     * Get the dropdown arrow icon element.
     *
     * @example Cypress
     *
     * ```ts
     * const { arrowIcon } = FSelectFieldSelectors();
     * cy.get(arrowIcon()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { arrowIcon } = FSelectFieldSelectors();
     * await expect(page.locator(arrowIcon())).toBeVisible();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the arrow icon element.
     */
    arrowIcon() {
      return `${selector} .select-field__icon`;
    }
  });
}
function FStaticFieldSelectors(selector = ".output-field") {
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
     * Get the label element.
     *
     * The label contains the heading text and, when present, description
     * and tooltip.
     *
     * @example Cypress
     *
     * ```ts
     * const { label } = FStaticFieldSelectors();
     * cy.get(label()).should("have.text", "Full name");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { label } = FStaticFieldSelectors();
     * await expect(page.locator(label())).toHaveText("Full name");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the label element.
     */
    label() {
      return `${selector} .label`;
    },
    /**
     * Get the output element.
     *
     * The output element is the container for the static content. The
     * actual text content is inside a `<p>` child element. To assert text
     * directly you can use `toContainText` / `contain.text` which searches
     * descendants, or scope to the inner paragraph explicitly.
     *
     * @example Cypress
     *
     * ```ts
     * const { output } = FStaticFieldSelectors();
     * cy.get(output()).should("contain.text", "Jane Doe");
     * // Or target the paragraph directly:
     * cy.get(output()).find("p").should("have.text", "Jane Doe");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { output } = FStaticFieldSelectors();
     * await expect(page.locator(output())).toContainText("Jane Doe");
     * // Or target the paragraph directly:
     * await expect(page.locator(output()).locator("p")).toHaveText("Jane Doe");
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the output element.
     */
    output() {
      return `${selector} .output-field__output`;
    }
  });
}
function FTextareaFieldSelectors(selector = ".textarea-field") {
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
     * Get the textarea element.
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
     * @since %version%
     * @returns A selector for the textarea element.
     */
    textarea() {
      return `${selector} .textarea-field__textarea`;
    },
    /**
     * Get the error message element.
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
     * @since %version%
     * @returns A selector for the error message element.
     */
    errorMessage() {
      return `${selector} .label__message--error`;
    },
    /**
     * Get the label element.
     *
     * The label contains the heading text and, when present, description
     * and tooltip. Use `FLabelSelectors` for more fine-grained access to
     * label sub-elements.
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
     * @since %version%
     * @returns A selector for the label element.
     */
    label() {
      return `${selector} .label`;
    },
    /**
     * Get the error icon element.
     *
     * The error icon is only present when the field has a validation error.
     *
     * @example Cypress
     *
     * ```ts
     * const { errorIcon } = FTextareaFieldSelectors();
     * cy.get(errorIcon()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { errorIcon } = FTextareaFieldSelectors();
     * await expect(page.locator(errorIcon())).toBeVisible();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the error icon element.
     */
    errorIcon() {
      return `${selector} .icon.textarea-field__icon.f-icon-error`;
    }
  });
}
function FTextFieldSelectors(selector = ".text-field") {
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
     * Get the input element.
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
     * @since %version%
     * @returns A selector for the text input element.
     */
    input() {
      return `${selector} .text-field__input`;
    },
    /**
     * Get the error message element.
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
     * @since %version%
     * @returns A selector for the error message element.
     */
    errorMessage() {
      return `${selector} .label__message--error`;
    },
    /**
     * Get the label element.
     *
     * The label contains the heading text and, when present, description
     * and tooltip. Use `FLabelSelectors` for more fine-grained access to
     * label sub-elements.
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
     * @since %version%
     * @returns A selector for the label element.
     */
    label() {
      return `${selector} .label`;
    },
    /**
     * Get the error icon element.
     *
     * The error icon is only present when the field has a validation error.
     *
     * @example Cypress
     *
     * ```ts
     * const { errorIcon } = FTextFieldSelectors();
     * cy.get(errorIcon()).should("exist");
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { errorIcon } = FTextFieldSelectors();
     * await expect(page.locator(errorIcon())).toBeVisible();
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the error icon element.
     */
    errorIcon() {
      return `${selector} .icon.text-field__icon.f-icon-error`;
    }
  });
}
function FProgressbarSelectors(selector = ".progress") {
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
     * Get the progress meter element.
     *
     * The meter element carries the `role="progressbar"` attribute and the
     * current progress value in the `aria-valuenow` attribute. To read the
     * numeric value, get the `aria-valuenow` attribute and convert to a
     * number.
     *
     * @example Cypress
     *
     * ```ts
     * const { meter } = FProgressbarSelectors();
     * cy.get(meter()).should("have.attr", "aria-valuenow", "50");
     * cy.get(meter()).invoke("attr", "aria-valuenow").then(Number).should("eq", 50);
     * ```
     *
     * @example Playwright
     *
     * ```ts
     * const { meter } = FProgressbarSelectors();
     * await expect(page.locator(meter())).toHaveAttribute("aria-valuenow", "50");
     * const value = Number(await page.locator(meter()).getAttribute("aria-valuenow"));
     * ```
     *
     * @public
     * @since %version%
     * @returns A selector for the progress meter element.
     */
    meter() {
      return `${selector} .progress__meter`;
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
     * @since %version%
     * @returns The root selector for the component.
     */
    get selector() {
      return selector;
    },
    /**
     * Get the toggle button element.
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
     * @since %version%
     * @returns A selector for the toggle button element.
     */
    toggleButton() {
      return `.tooltip__button`;
    },
    /**
     * Get the tooltip bubble element.
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
     * @since %version%
     * @returns A selector for the tooltip bubble element.
     */
    bubble() {
      return `${selector} .tooltip__bubble`;
    },
    /**
     * Get the tooltip header element.
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
     * @since %version%
     * @returns A selector for the tooltip header element.
     */
    header() {
      return `${selector} .tooltip__header`;
    },
    /**
     * Get the tooltip body element.
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
     * @since %version%
     * @returns A selector for the tooltip body element.
     */
    body() {
      return `${selector} .tooltip__body`;
    },
    /**
     * Get the close button element.
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
     * @since %version%
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
  FCalendarSelectors,
  FCardSelectors,
  FCheckboxFieldSelectors,
  FConfirmModalSelectors,
  FContextMenuSelectors,
  FCrudDatasetSelectors,
  FDataTableSelectors,
  FDatepickerFieldSelectors,
  FDefinitionListSelectors,
  FDetailsPanelSelectors,
  FDialogueTreeSelectors,
  FErrorListSelectors,
  FExpandablePanelSelectors,
  FExpandableParagraphSelectors,
  FFieldsetSelectors,
  FFileItemSelectors,
  FFileSelectorSelectors,
  FFormModalSelectors,
  FIconSelectors,
  FInteractiveTableSelectors,
  FLabelSelectors,
  FLayoutApplicationTemplateSelectors,
  FLayoutLeftPanelSelectors,
  FLayoutRightPanelSelectors,
  FListSelectors,
  FLoaderSelectors,
  FLogoSelectors,
  FMessageBoxSelectors,
  FMinimizablePanelSelectors,
  FModalSelectors,
  FNavigationMenuSelectors,
  FOfflineSelectors,
  FOutputFieldSelectors,
  FPageHeaderSelectors,
  FPaginatorSelectors,
  FProgressbarSelectors,
  FRadioFieldSelectors,
  FSelectFieldSelectors,
  FSortFilterDatasetSelectors,
  FStaticFieldSelectors,
  FTableButtonSelectors,
  FTableSelectors,
  FTextFieldSelectors,
  FTextareaFieldSelectors,
  FTooltipSelectors,
  FValidationFormSelectors,
  FWizardSelectors
};
