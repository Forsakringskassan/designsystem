/**
 * Selectors for `FTextField`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FTextField component.
 * @returns An object with selector methods for the FTextField component.
 */
export function FTextFieldSelectors(selector: string = ".text-field") {
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
         * @since v6.45.0
         * @returns A selector for the text input element.
         */
        input(): string {
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
         * @since v6.45.0
         * @returns A selector for the error message element.
         */
        errorMessage(): string {
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
         * @since v6.45.0
         * @returns A selector for the label element.
         */
        label(): string {
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
         * @since v6.45.0
         * @returns A selector for the error icon element.
         */
        errorIcon(): string {
            return `${selector} .icon.text-field__icon.f-icon-error`;
        },
    });
}
