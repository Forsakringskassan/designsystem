/**
 * Selectors for `FContextMenu`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FContextMenu component.
 * @returns An object with selector methods for the FContextMenu component.
 */
export function FContextMenuSelectors(selector: string = ".contextmenu") {
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
         * Get all menu item elements.
         *
         * To target a specific item by index use `.eq()` in Cypress or `.nth()`
         * in Playwright.
         *
         * @example Cypress
         *
         * ```ts
         * const { items } = FContextMenuSelectors();
         * cy.get(items()).should("have.length", 3);
         * cy.get(items()).eq(0).should("contain.text", "Home");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { items } = FContextMenuSelectors();
         * await expect(page.locator(items())).toHaveCount(3);
         * await expect(page.locator(items()).nth(0)).toContainText("Home");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for all menu item elements.
         */
        items(): string {
            return `${selector} .contextmenu__list__item`;
        },

        /**
         * Get all link elements inside menu items.
         *
         * To target the link of a specific item, scope by index first using
         * `.eq()` in Cypress or `.nth()` in Playwright.
         *
         * @example Cypress
         *
         * ```ts
         * const { items, itemLink } = FContextMenuSelectors();
         * cy.get(items()).eq(0).find(itemLink()).click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { items, itemLink } = FContextMenuSelectors();
         * await page.locator(items()).nth(0).locator(itemLink()).click();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the link inside a menu item.
         */
        itemLink(): string {
            return "a";
        },
    });
}
