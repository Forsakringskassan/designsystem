/**
 * Selectors for `FLayoutApplicationTemplate`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FLayoutApplicationTemplate component.
 * @returns An object with selector methods for the FLayoutApplicationTemplate component.
 */
export function FLayoutApplicationTemplateSelectors(
    selector: string = ".layout-application-template",
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
         * Get the header element.
         *
         * Only present when the `header` slot is used.
         *
         * @example Cypress
         *
         * ```ts
         * const { header } = FLayoutApplicationTemplateSelectors();
         * cy.get(header()).should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { header } = FLayoutApplicationTemplateSelectors();
         * await expect(page.locator(header())).toBeVisible();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the header element.
         */
        header(): string {
            return `${selector} .layout-application-template__header`;
        },

        /**
         * Get the main content element.
         *
         * @example Cypress
         *
         * ```ts
         * const { main } = FLayoutApplicationTemplateSelectors();
         * cy.get(main()).should("contain.text", "Page content");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { main } = FLayoutApplicationTemplateSelectors();
         * await expect(page.locator(main())).toContainText("Page content");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the main content element.
         */
        main(): string {
            return `${selector} .layout-application-template__main`;
        },

        /**
         * Get the footer element.
         *
         * Only present when the `footer` slot is used.
         *
         * @example Cypress
         *
         * ```ts
         * const { footer } = FLayoutApplicationTemplateSelectors();
         * cy.get(footer()).should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { footer } = FLayoutApplicationTemplateSelectors();
         * await expect(page.locator(footer())).toBeVisible();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the footer element.
         */
        footer(): string {
            return `${selector} .layout-application-template__footer`;
        },
    });
}
