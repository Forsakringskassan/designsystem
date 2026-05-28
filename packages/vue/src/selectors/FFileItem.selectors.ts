/**
 * Selectors for `FFileItem`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FFileItem component.
 * @returns An object with selector methods for the FFileItem component.
 */
export function FFileItemSelectors(selector: string = ".file-item") {
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
         * Get the file name element.
         *
         * @example Cypress
         *
         * ```ts
         * const { fileName } = FFileItemSelectors();
         * cy.get(fileName()).should("have.text", "document.pdf");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { fileName } = FFileItemSelectors();
         * await expect(page.locator(fileName())).toHaveText("document.pdf");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the file name element.
         */
        fileName(): string {
            return `${selector} .file-item__file-name`;
        },

        /**
         * Get the open file link element.
         *
         * @example Cypress
         *
         * ```ts
         * const { openLink } = FFileItemSelectors();
         * cy.get(openLink()).should("have.attr", "href");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { openLink } = FFileItemSelectors();
         * await expect(page.locator(openLink())).toHaveAttribute("href");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the open file link element.
         */
        openLink(): string {
            return `${selector} .file-item__file-open`;
        },

        /**
         * Get the delete/cancel button element.
         *
         * Only present when the component has a delete or cancel callback
         * configured.
         *
         * @example Cypress
         *
         * ```ts
         * const { deleteButton } = FFileItemSelectors();
         * cy.get(deleteButton()).click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { deleteButton } = FFileItemSelectors();
         * await page.locator(deleteButton()).click();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the delete/cancel button element.
         */
        deleteButton(): string {
            return `${selector} .file-item__file-remove`;
        },
    });
}
