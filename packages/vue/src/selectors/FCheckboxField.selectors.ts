/**
 * Selectors for `FCheckboxField`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FCheckboxField component.
 * @returns An object with selector methods for the FCheckboxField component.
 */
export function FCheckboxFieldSelectors(selector: string = ".checkbox") {
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
         * @since v6.45.0
         * @returns A selector for the checkbox input element.
         */
        input(): string {
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
         * @since v6.45.0
         * @returns A selector for the label element.
         */
        label(): string {
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
         * @since v6.45.0
         * @returns A selector for the details element.
         */
        details(): string {
            return `${selector} .checkbox__details`;
        },
    });
}
