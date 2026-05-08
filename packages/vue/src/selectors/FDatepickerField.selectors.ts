/**
 * Selectors for `FDatepickerField`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FDatepickerField component.
 * @returns An object with selector methods for the FDatepickerField component.
 */
export function FDatepickerFieldSelectors(
    selector: string = ".datepicker-field",
) {
    return Object.freeze({
        /**
         * The base selector for the component.
         *
         * This is the same selector that the consumer provided.
         *
         * @public
         * @since v6.45.0
         * @returns The root selector for the component.
         */
        get selector(): string {
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
         * @since v6.45.0
         * @returns A selector for the label element.
         */
        label(): string {
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
         * @since v6.45.0
         * @returns A selector for the error message element.
         */
        errorMessage(): string {
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
         * @since v6.45.0
         * @returns A selector for the text input element.
         */
        input(): string {
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
         * @since v6.45.0
         * @returns A selector for the calendar toggle button element.
         */
        calendarButton(): string {
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
         * @since v6.45.0
         * @returns A selector for the calendar popup element.
         */
        calendarPopup(): string {
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
         * @since v6.45.0
         * @returns A selector for the calendar element.
         */
        calendar(): string {
            return `${selector} .calendar__wrapper`;
        },
    });
}
