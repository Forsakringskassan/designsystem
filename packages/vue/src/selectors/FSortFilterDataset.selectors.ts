/**
 * Selectors for `FSortFilterDataset`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FSortFilterDataset component.
 * @returns An object with selector methods for the FSortFilterDataset component.
 */
export function FSortFilterDatasetSelectors(
    selector: string = ".sort-filter-dataset",
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
         * Get the search field element.
         *
         * @example Cypress
         *
         * ```ts
         * const { searchField } = FSortFilterDatasetSelectors();
         * cy.get(searchField()).type("John");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { searchField } = FSortFilterDatasetSelectors();
         * await page.locator(searchField()).fill("John");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the search field element.
         */
        searchField(): string {
            return `${selector} .sort-filter-dataset__search`;
        },

        /**
         * Get the sort dropdown element.
         *
         * @example Cypress
         *
         * ```ts
         * const { sortField } = FSortFilterDatasetSelectors();
         * cy.get(sortField()).find("select").select("Name");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { sortField } = FSortFilterDatasetSelectors();
         * await page.locator(sortField()).locator("select").selectOption("Name");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the sort dropdown element.
         */
        sortField(): string {
            return `${selector} .sort-filter-dataset__sort`;
        },

        /**
         * Get the toolbar header element.
         *
         * The header is only present when the `#header` slot is used. The slot
         * exposes a `slotClass` binding that must be applied to the element for
         * this selector to match:
         *
         * ```html
         * <template #header="{ slotClass }">
         *   <span :class="slotClass">3 results</span>
         * </template>
         * ```
         *
         * @example Cypress
         *
         * ```ts
         * const { header } = FSortFilterDatasetSelectors();
         * cy.get(header()).should("contain.text", "3 results");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { header } = FSortFilterDatasetSelectors();
         * await expect(page.locator(header())).toContainText("3 results");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the toolbar header element.
         */
        header(): string {
            return `${selector} .iflex .sort-filter-dataset__toolbar__header`;
        },
    });
}
