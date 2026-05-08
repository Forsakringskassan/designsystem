/**
 * Selectors for `FCrudDataset`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FCrudDataset component.
 * @returns An object with selector methods for the FCrudDataset component.
 */
export function FCrudDatasetSelectors(selector: string = ".crud-dataset") {
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
         * @since v6.45.0
         * @returns A selector for the add button element.
         */
        addButton(): string {
            return `${selector} [data-test="f-crud-dataset-add-button"]`;
        },

        /**
         * Get the cancel button element.
         *
         * The cancel button is present in the modal footer when the add or edit
         * form is open.
         *
         * @example Cypress
         *
         * ```ts
         * const { cancelButton } = FCrudDatasetSelectors();
         * cy.get(cancelButton()).click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { cancelButton } = FCrudDatasetSelectors();
         * await page.locator(cancelButton()).click();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the cancel button element.
         */
        cancelButton(): string {
            return `${selector} .modal__footer > .button-group > .button--secondary`;
        },

        /**
         * Get the confirm button element.
         *
         * The confirm button is present in the modal footer when the add or edit
         * form is open.
         *
         * @example Cypress
         *
         * ```ts
         * const { confirmButton } = FCrudDatasetSelectors();
         * cy.get(confirmButton()).click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { confirmButton } = FCrudDatasetSelectors();
         * await page.locator(confirmButton()).click();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the confirm button element.
         */
        confirmButton(): string {
            return `${selector} .modal__footer > .button-group > .button--primary`;
        },
    });
}
