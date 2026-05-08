/**
 * Selectors for `FValidationForm`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FValidationForm component.
 * @returns An object with selector methods for the FValidationForm component.
 */
export function FValidationFormSelectors(selector: string = "form") {
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
         * @since v6.45.0
         * @returns A selector for the error list container element.
         */
        errorList(): string {
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
         * @since v6.45.0
         * @returns A selector for all error item links.
         */
        errorListItems(): string {
            return `${selector} .error-list__list a`;
        },
    });
}
