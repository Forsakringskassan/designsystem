/**
 * Selectors for `FLoader`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FLoader component.
 * @returns An object with selector methods for the FLoader component.
 */
export function FLoaderSelectors(selector: string = ".loader") {
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
         * Get the loader wrapper element.
         *
         * @example Cypress
         *
         * ```ts
         * const { wrapper } = FLoaderSelectors();
         * cy.get(wrapper()).should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { wrapper } = FLoaderSelectors();
         * await expect(page.locator(wrapper())).toBeVisible();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the loader wrapper element.
         */
        wrapper(): string {
            return `${selector} .loader__wrapper`;
        },

        /**
         * Get the wait text element.
         *
         * The wait text element displays the loading message shown to the user.
         *
         * @example Cypress
         *
         * ```ts
         * const { waitText } = FLoaderSelectors();
         * cy.get(waitText()).should("have.text", "Loading…");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { waitText } = FLoaderSelectors();
         * await expect(page.locator(waitText())).toHaveText("Loading…");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the wait text element.
         */
        waitText(): string {
            return `${selector} .loader__wait-text`;
        },
    });
}
