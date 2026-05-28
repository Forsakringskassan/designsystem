/**
 * Selectors for `FRadioField`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FRadioField component.
 * @returns An object with selector methods for the FRadioField component.
 */
export function FRadioFieldSelectors(selector: string = ".radio-button") {
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
         * @since v6.45.0
         * @returns A selector for the radio input element.
         */
        input(): string {
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
         * @since v6.45.0
         * @returns A selector for the label element.
         */
        label(): string {
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
         * @since v6.45.0
         * @returns A selector for the details element.
         */
        details(): string {
            return `${selector} .radio-button__details`;
        },
    });
}
