/**
 * Selectors for `FMinimizablePanel`.
 *
 * `FMinimizablePanel` renders as a custom element. Consumer-provided slot
 * content is accessible via the `slot` attribute. The toggle button is
 * internal to the shadow DOM and is not accessible via a plain CSS selector.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FMinimizablePanel component.
 * @returns An object with selector methods for the FMinimizablePanel component.
 */
export function FMinimizablePanelSelectors(selector: string = ".panel") {
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
         * const { header } = FMinimizablePanelSelectors();
         * cy.get(header()).should("contain.text", "Panel title");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { header } = FMinimizablePanelSelectors();
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
         * const { content } = FMinimizablePanelSelectors();
         * cy.get(content()).should("contain.text", "Panel body");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { content } = FMinimizablePanelSelectors();
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
         * const { footer } = FMinimizablePanelSelectors();
         * cy.get(footer()).should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { footer } = FMinimizablePanelSelectors();
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
