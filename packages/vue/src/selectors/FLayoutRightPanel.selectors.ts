/**
 * Selectors for `FLayoutRightPanel`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FLayoutRightPanel component.
 * @returns An object with selector methods for the FLayoutRightPanel component.
 */
export function FLayoutRightPanelSelectors(
    selector: string = ".layout-secondary",
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
         * Get the primary content element.
         *
         * @example Cypress
         *
         * ```ts
         * const { primary } = FLayoutRightPanelSelectors();
         * cy.get(primary()).should("contain.text", "Main content");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { primary } = FLayoutRightPanelSelectors();
         * await expect(page.locator(primary())).toContainText("Main content");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the primary content element.
         */
        primary(): string {
            return `${selector} .layout-secondary__primary`;
        },

        /**
         * Get the secondary panel element.
         *
         * Only present when the secondary panel is open.
         *
         * @example Cypress
         *
         * ```ts
         * const { secondary } = FLayoutRightPanelSelectors();
         * cy.get(secondary()).should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { secondary } = FLayoutRightPanelSelectors();
         * await expect(page.locator(secondary())).toBeVisible();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the secondary panel element.
         */
        secondary(): string {
            return `${selector} .layout-secondary__secondary`;
        },
    });
}
