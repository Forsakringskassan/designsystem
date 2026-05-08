/**
 * Selectors for `FNavigationMenu`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FNavigationMenu component.
 * @returns An object with selector methods for the FNavigationMenu component.
 */
export function FNavigationMenuSelectors(selector: string = ".imenu") {
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
         * Get all visible menu item elements (excludes hidden overflow items).
         *
         * To target a specific item by index use `.eq()` in Cypress or `.nth()`
         * in Playwright.
         *
         * @example Cypress
         *
         * ```ts
         * const { items } = FNavigationMenuSelectors();
         * cy.get(items()).should("have.length", 4);
         * cy.get(items()).eq(0).find("a").click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { items } = FNavigationMenuSelectors();
         * await expect(page.locator(items())).toHaveCount(4);
         * await page.locator(items()).nth(0).locator("a").click();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for all visible menu item elements.
         */
        items(): string {
            return `${selector} .imenu__list__item:not(.imenu__list__item--hidden)`;
        },

        /**
         * Get all overflowed (hidden) menu item elements.
         *
         * Items overflow into the popup menu when the navigation bar is too
         * narrow to display all items.
         *
         * @example Cypress
         *
         * ```ts
         * const { overflowItems } = FNavigationMenuSelectors();
         * cy.get(overflowItems()).should("have.length", 2);
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { overflowItems } = FNavigationMenuSelectors();
         * await expect(page.locator(overflowItems())).toHaveCount(2);
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for all overflowed menu item elements.
         */
        overflowItems(): string {
            return `${selector} .imenu__list__item--hidden`;
        },

        /**
         * Get the currently selected (highlighted) menu item element.
         *
         * @example Cypress
         *
         * ```ts
         * const { selectedItem } = FNavigationMenuSelectors();
         * cy.get(selectedItem()).should("contain.text", "Home");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { selectedItem } = FNavigationMenuSelectors();
         * await expect(page.locator(selectedItem())).toContainText("Home");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the selected menu item element.
         */
        selectedItem(): string {
            return `${selector} .imenu__list__item--highlight`;
        },

        /**
         * Get the popup menu item element (the overflow trigger button).
         *
         * Only present when some items have overflowed into the popup menu.
         *
         * @example Cypress
         *
         * ```ts
         * const { popupItem } = FNavigationMenuSelectors();
         * cy.get(popupItem()).click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { popupItem } = FNavigationMenuSelectors();
         * await page.locator(popupItem()).click();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the popup menu item element.
         */
        popupItem(): string {
            return `${selector} .imenu__popup-item__wrapper`;
        },
    });
}
