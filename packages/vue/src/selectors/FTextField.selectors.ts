import { FLabelSelectors } from "./FLabel.selectors";

/**
 * Selectors for `FTextField`.
 *
 * @public
 * @since %version%
 * @param selector - The selector for the FTextField component.
 * @returns An object with selector methods for the FTextField component.
 */
export function FTextFieldSelectors(selector: string = ":scope") {
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
         * @since %version%
         * @returns A selector for the text input element.
         */
        input(): string {
            return `${selector} .text-field__input`;
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
        errorMessage(): string {
            return labelSelectors.errorMessage();
        },
    });
}
