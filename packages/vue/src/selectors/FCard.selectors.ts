/**
 * Selectors for `FCard`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FCard component.
 * @returns An object with selector methods for the FCard component.
 */
export function FCardSelectors(selector: string = ".card") {
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
         * Get the header element.
         *
         * @example Cypress
         *
         * ```ts
         * const { header } = FCardSelectors();
         * cy.get(header()).should("contain.text", "My heading");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { header } = FCardSelectors();
         * await expect(page.locator(header())).toContainText("My heading");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the header element.
         */
        header(): string {
            return `${selector} .card__header`;
        },

        /**
         * Get the content element.
         *
         * @example Cypress
         *
         * ```ts
         * const { content } = FCardSelectors();
         * cy.get(content()).should("contain.text", "Card body");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { content } = FCardSelectors();
         * await expect(page.locator(content())).toContainText("Card body");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the content element.
         */
        content(): string {
            return `${selector} .card__content`;
        },

        /**
         * Get the footer element.
         *
         * @example Cypress
         *
         * ```ts
         * const { footer } = FCardSelectors();
         * cy.get(footer()).should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { footer } = FCardSelectors();
         * await expect(page.locator(footer())).toBeVisible();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the footer element.
         */
        footer(): string {
            return `${selector} .card__footer`;
        },

        /**
         * Get the error message element.
         *
         * Only present when the card has a validation error.
         *
         * @example Cypress
         *
         * ```ts
         * const { errorMessage } = FCardSelectors();
         * cy.get(errorMessage()).should("contain.text", "Fix the errors");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { errorMessage } = FCardSelectors();
         * await expect(page.locator(errorMessage())).toContainText("Fix the errors");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the error message element.
         */
        errorMessage(): string {
            return `${selector} .card__error-message`;
        },
    });
}
