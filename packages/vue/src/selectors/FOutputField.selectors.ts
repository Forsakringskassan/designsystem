/**
 * Selectors for `FOutputField`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FOutputField component.
 * @returns An object with selector methods for the FOutputField component.
 */
export function FOutputFieldSelectors(selector: string = ".output-field") {
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
         * @since v6.45.0
         * @returns A selector for the output element.
         */
        output(): string {
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
         * @since v6.45.0
         * @returns A selector for the label element.
         */
        label(): string {
            return `${selector} .label`;
        },
    });
}
