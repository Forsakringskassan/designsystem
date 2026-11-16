import { FModalSelectors } from "./FModal.selectors";

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

        /**
         * Get the cancel button element.
         *
         * The cancel button is present in the modal footer when the add, modify
         * or delete modal is open.
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
         * @since v6.52.0
         * @returns A selector for the cancel button element.
         */
        cancelButton(): string {
            return FModalSelectors(selector).secondaryButton();
        },

        /**
         * Get the confirm button element.
         *
         * The confirm button is present in the modal footer when the add, modify
         * or delete modal is open.
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
         * @since v6.52.0
         * @returns A selector for the confirm button element.
         */
        confirmButton(): string {
            return FModalSelectors(selector).primaryButton();
        },

        /**
         * Get the modal element.
         *
         * The modal is only present while it is open. The same selector is
         * used for the add, modify and delete modal (only one can be open at
         * a time). Use it to scope selectors for the content rendered by the
         * `#add`, `#modify` or `#delete` slot.
         *
         * @example Cypress
         *
         * ```ts
         * const { modal } = FCrudDatasetSelectors();
         * cy.get(modal()).should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { modal } = FCrudDatasetSelectors();
         * await expect(page.locator(modal())).toHaveCount(1);
         * ```
         *
         * @public
         * @since %version%
         * @returns A selector for the modal element.
         */
        modal(): string {
            return `${selector} .modal`;
        },
    });
}
