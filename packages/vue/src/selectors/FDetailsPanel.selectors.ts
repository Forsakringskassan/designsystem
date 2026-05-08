/**
 * Selectors for `FDetailsPanel`.
 *
 * `FDetailsPanel` renders as a custom element. Use the `data-panel-name`
 * attribute to scope selectors when multiple panels are present on a page.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FDetailsPanel component.
 * @returns An object with selector methods for the FDetailsPanel component.
 */
export function FDetailsPanelSelectors(
    selector: string = ".panel.panel--details",
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
         * Get the panel header slot content element.
         *
         * @example Cypress
         *
         * ```ts
         * const { header } = FDetailsPanelSelectors('[data-panel-name="my-panel"]');
         * cy.get(header()).should("contain.text", "Panel title");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { header } = FDetailsPanelSelectors('[data-panel-name="my-panel"]');
         * await expect(page.locator(header())).toContainText("Panel title");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the panel header slot element.
         */
        header(): string {
            return `${selector} [slot=header]`;
        },

        /**
         * Get the panel content slot element.
         *
         * @example Cypress
         *
         * ```ts
         * const { content } = FDetailsPanelSelectors('[data-panel-name="my-panel"]');
         * cy.get(content()).should("contain.text", "Panel body");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { content } = FDetailsPanelSelectors('[data-panel-name="my-panel"]');
         * await expect(page.locator(content())).toContainText("Panel body");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the panel content slot element.
         */
        content(): string {
            return `${selector} [slot=content]`;
        },

        /**
         * Get the panel footer slot element.
         *
         * @example Cypress
         *
         * ```ts
         * const { footer } = FDetailsPanelSelectors('[data-panel-name="my-panel"]');
         * cy.get(footer()).should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { footer } = FDetailsPanelSelectors('[data-panel-name="my-panel"]');
         * await expect(page.locator(footer())).toBeVisible();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the panel footer slot element.
         */
        footer(): string {
            return `${selector} [slot=footer]`;
        },
    });
}
