/**
 * Selectors for `FTextareaField`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FTextareaField component.
 * @returns An object with selector methods for the FTextareaField component.
 */
export function FTextareaFieldSelectors(selector: string = ".textarea-field") {
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
         * @since v6.45.0
         * @returns A selector for the textarea element.
         */
        textarea(): string {
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
         * @since v6.45.0
         * @returns A selector for the error icon element.
         */
        errorIcon(): string {
            return `${selector} .icon.textarea-field__icon.f-icon-error`;
        },
    });
}
