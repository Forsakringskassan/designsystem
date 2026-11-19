/**
 * Selectors for `FCrudDataset`.
 *
 * @public
 * @since v6.52.0
 * @param selector - The selector for the FCrudDataset component.
 * @returns An object with selector methods for the FCrudDataset component.
 */
export function FCrudDatasetSelectors(selector: string = ":scope") {
    return Object.freeze({
        /**
         * The base selector for the component.
         *
         * This is the same selector that the consumer provided.
         *
         * @public
         * @since v6.52.0
         * @returns The root selector for the component.
         */
        get selector(): string {
            return selector;
        },

        /**
         * Get the add button element.
         *
         * @example Cypress
         *
         * ```ts
         * const { addButton } = FCrudDatasetSelectors();
         * cy.get(addButton()).click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { addButton } = FCrudDatasetSelectors();
         * await page.locator(addButton()).click();
         * ```
         *
         * @public
         * @since v6.52.0
         * @returns A selector for the add button element.
         */
        addButton(): string {
            return `${selector} [data-test="f-crud-dataset-add-button"]`;
        },

        /**
         * Get the add button element.
         *
         * @example Cypress
         *
         * ```ts
         * const { addButton } = FCrudDatasetSelectors();
         * cy.get(addButton()).click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { addButton } = FCrudDatasetSelectors();
         * await page.locator(addButton()).click();
         * ```
         *
         * @public
         * @since v6.57.0
         * @returns A selector for the add button element.
         */
        addButtonTop(): string {
            return `${selector} [data-test="f-crud-dataset-add-button-top"]`;
        },
    });
}
