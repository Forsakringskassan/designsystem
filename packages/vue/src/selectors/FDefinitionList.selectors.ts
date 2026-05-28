/**
 * Selectors for `FDefinitionList`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FDefinitionList component.
 * @returns An object with selector methods for the FDefinitionList component.
 */
export function FDefinitionListSelectors(
    selector: string = ".definition-list",
) {
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
         * Get all term (`dt`) elements.
         *
         * To target a specific term by index use `.eq()` in Cypress or
         * `.nth()` in Playwright.
         *
         * @example Cypress
         *
         * ```ts
         * const { terms } = FDefinitionListSelectors();
         * cy.get(terms()).should("have.length", 3);
         * cy.get(terms()).eq(0).should("contain.text", "Name");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { terms } = FDefinitionListSelectors();
         * await expect(page.locator(terms())).toHaveCount(3);
         * await expect(page.locator(terms()).nth(0)).toContainText("Name");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for all term elements.
         */
        terms(): string {
            return `${selector} .definition-list__term`;
        },

        /**
         * Get all definition (`dd`) elements.
         *
         * To target a specific definition by index use `.eq()` in Cypress or
         * `.nth()` in Playwright.
         *
         * @example Cypress
         *
         * ```ts
         * const { definitions } = FDefinitionListSelectors();
         * cy.get(definitions()).should("have.length", 3);
         * cy.get(definitions()).eq(0).should("contain.text", "Jane Doe");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { definitions } = FDefinitionListSelectors();
         * await expect(page.locator(definitions())).toHaveCount(3);
         * await expect(page.locator(definitions()).nth(0)).toContainText("Jane Doe");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for all definition elements.
         */
        definitions(): string {
            return `${selector} .definition-list__definition`;
        },
    });
}
