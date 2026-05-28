/**
 * Selectors for `FStaticField`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FStaticField component.
 * @returns An object with selector methods for the FStaticField component.
 */
export function FStaticFieldSelectors(selector: string = ".output-field") {
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
         * and tooltip.
         *
         * @example Cypress
         *
         * ```ts
         * const { label } = FStaticFieldSelectors();
         * cy.get(label()).should("have.text", "Full name");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { label } = FStaticFieldSelectors();
         * await expect(page.locator(label())).toHaveText("Full name");
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
         * Get the output element.
         *
         * The output element is the container for the static content. The
         * actual text content is inside a `<p>` child element. To assert text
         * directly you can use `toContainText` / `contain.text` which searches
         * descendants, or scope to the inner paragraph explicitly.
         *
         * @example Cypress
         *
         * ```ts
         * const { output } = FStaticFieldSelectors();
         * cy.get(output()).should("contain.text", "Jane Doe");
         * // Or target the paragraph directly:
         * cy.get(output()).find("p").should("have.text", "Jane Doe");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { output } = FStaticFieldSelectors();
         * await expect(page.locator(output())).toContainText("Jane Doe");
         * // Or target the paragraph directly:
         * await expect(page.locator(output()).locator("p")).toHaveText("Jane Doe");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the output element.
         */
        output(): string {
            return `${selector} .output-field__output`;
        },
    });
}
