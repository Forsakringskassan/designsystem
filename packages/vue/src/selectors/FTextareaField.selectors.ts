import { FLabelSelectors } from "./FLabel.selectors";

/**
 * Selectors for `FTextareaField`.
 *
 * @public
 * @since %version%
 * @param selector - The selector for the FTextareaField component.
 * @returns An object with selector methods for the FTextareaField component.
 */
export function FTextareaFieldSelectors(selector: string = ":scope") {
    const labelSelectors = FLabelSelectors(`${selector} .label`);

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
        get selector(): string {
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
         * @since %version%
         * @returns A selector for the textarea element.
         */
        textarea(): string {
            return `${selector} .textarea-field__textarea`;
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
         * @since %version%
         * @returns A selector for the label element.
         */
        label(): string {
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
         * @since %version%
         * @returns A selector for the description element.
         */
        description(): string {
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
         * @since %version%
         * @returns A selector for the format description element.
         */
        formatDescription(): string {
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
         * @since %version%
         * @returns A selector for the error message element.
         */
        errorMessage(): string {
            return labelSelectors.errorMessage();
        },
    });
}
