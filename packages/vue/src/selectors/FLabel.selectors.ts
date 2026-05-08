/**
 * Selectors for `FLabel`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FLabel component.
 * @returns An object with selector methods for the FLabel component.
 */
export function FLabelSelectors(selector: string = ".label") {
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
         * @since v6.45.0
         * @returns A selector for the description element.
         */
        description(): string {
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
         * @since v6.45.0
         * @returns A selector for the format description element.
         */
        formatDescription(): string {
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
         * @since v6.45.0
         * @returns A selector for the error message element.
         */
        errorMessage(): string {
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
         * @since v6.45.0
         * @returns A selector for the error icon element.
         */
        errorIcon(): string {
            return `${selector} .icon.label__icon--left.f-icon-error`;
        },
    });
}
