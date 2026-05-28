/**
 * Selectors for `FFileSelector`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FFileSelector component.
 * @returns An object with selector methods for the FFileSelector component.
 */
export function FFileSelectorSelectors(selector: string = ".file-selector") {
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
         * Get the file input element.
         *
         * This is the hidden `<input type="file">` element used to trigger the
         * file picker dialog. In Cypress and Playwright it can be used to
         * attach files programmatically.
         *
         * @example Cypress
         *
         * ```ts
         * const { fileInput } = FFileSelectorSelectors();
         * cy.get(fileInput()).selectFile("path/to/file.pdf", { force: true });
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { fileInput } = FFileSelectorSelectors();
         * await page.locator(fileInput()).setInputFiles("path/to/file.pdf");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the file input element.
         */
        fileInput(): string {
            return `${selector} > input`;
        },

        /**
         * Get the icon element.
         *
         * @example Cypress
         *
         * ```ts
         * const { icon } = FFileSelectorSelectors();
         * cy.get(icon()).should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { icon } = FFileSelectorSelectors();
         * await expect(page.locator(icon())).toBeVisible();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the icon element.
         */
        icon(): string {
            return `${selector} .button__icon`;
        },
    });
}
