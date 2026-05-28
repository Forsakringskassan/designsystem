/**
 * Selectors for `FErrorList`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FErrorList component.
 * @returns An object with selector methods for the FErrorList component.
 */
export function FErrorListSelectors(selector: string = ".error-list") {
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
         * Get all error item links.
         *
         * Each link navigates to and focuses the corresponding invalid form
         * field. Only items with an `id` are rendered as links.
         *
         * To find a link by its text, filter the result:
         *
         * @example Cypress
         *
         * ```ts
         * const { items } = FErrorListSelectors();
         * cy.get(items()).should("have.length", 2);
         * // Find by text:
         * cy.get(items()).contains("Field 1 is required").should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { items } = FErrorListSelectors();
         * await expect(page.locator(items())).toHaveCount(2);
         * // Find by text:
         * await expect(page.locator(items()).filter({ hasText: "Field 1 is required" })).toBeVisible();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for all error item link elements.
         */
        items(): string {
            return `${selector} .error-list__list a`;
        },

        /**
         * Get all error list items.
         *
         * Each item corresponds to one validation error, including those
         * without links. Use this to assert the total number of errors or to
         * check whether a specific error message is present by filtering on
         * text:
         *
         * @example Cypress
         *
         * ```ts
         * const { listItems } = FErrorListSelectors();
         * cy.get(listItems()).should("have.length", 3);
         * // Check a specific error is present:
         * cy.get(listItems()).contains("Field 1 is required").should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { listItems } = FErrorListSelectors();
         * await expect(page.locator(listItems())).toHaveCount(3);
         * // Check a specific error is present:
         * await expect(page.locator(listItems()).filter({ hasText: "Field 1 is required" })).toHaveCount(1);
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for all error list item elements.
         */
        listItems(): string {
            return `${selector} .error-list__list li`;
        },
    });
}
