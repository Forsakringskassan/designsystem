/**
 * Selectors for `FDialogueTree`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FDialogueTree component.
 * @returns An object with selector methods for the FDialogueTree component.
 */
export function FDialogueTreeSelectors(selector: string = ".dialogue-tree") {
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
         * Get all dialogue item elements.
         *
         * To target a specific item by index use `:nth-child()` or Cypress
         * `.eq()`:
         *
         * @example Cypress
         *
         * ```ts
         * const { items } = FDialogueTreeSelectors();
         * cy.get(items()).should("have.length", 2);
         * cy.get(items()).eq(0).find("button").click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { items } = FDialogueTreeSelectors();
         * await expect(page.locator(items())).toHaveCount(2);
         * await page.locator(items()).nth(0).locator("button").click();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for all dialogue item elements.
         */
        items(): string {
            return `${selector} .dialogue-tree__list-item`;
        },

        /**
         * Get the button inside a dialogue item element.
         *
         * Use together with `items()` to target the button of a specific item.
         * The button is clicked to select that dialogue option.
         *
         * @example Cypress
         *
         * ```ts
         * const { items, itemButton } = FDialogueTreeSelectors();
         * cy.get(items()).eq(0).find(itemButton()).click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { items, itemButton } = FDialogueTreeSelectors();
         * await page.locator(items()).nth(0).locator(itemButton()).click();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the button inside a dialogue item.
         */
        itemButton(): string {
            return "button";
        },
    });
}
