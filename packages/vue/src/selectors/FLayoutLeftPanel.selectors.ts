/**
 * Selectors for `FLayoutLeftPanel`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FLayoutLeftPanel component.
 * @returns An object with selector methods for the FLayoutLeftPanel component.
 */
export function FLayoutLeftPanelSelectors(
    selector: string = ".layout-navigation",
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
         * Get the navigation panel element.
         *
         * @example Cypress
         *
         * ```ts
         * const { navigation } = FLayoutLeftPanelSelectors();
         * cy.get(navigation()).should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { navigation } = FLayoutLeftPanelSelectors();
         * await expect(page.locator(navigation())).toBeVisible();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the navigation panel element.
         */
        navigation(): string {
            return `${selector} .layout-navigation__navigation`;
        },

        /**
         * Get the primary content element.
         *
         * @example Cypress
         *
         * ```ts
         * const { primary } = FLayoutLeftPanelSelectors();
         * cy.get(primary()).should("contain.text", "Main content");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { primary } = FLayoutLeftPanelSelectors();
         * await expect(page.locator(primary())).toContainText("Main content");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the primary content element.
         */
        primary(): string {
            return `${selector} .layout-navigation__primary`;
        },
    });
}
