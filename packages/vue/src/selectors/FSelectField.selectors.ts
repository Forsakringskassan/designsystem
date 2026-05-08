/**
 * Selectors for `FSelectField`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FSelectField component.
 * @returns An object with selector methods for the FSelectField component.
 */
export function FSelectFieldSelectors(selector: string = ".select-field") {
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
         * Get the select element.
         *
         * Use this to select an option or assert the currently selected value.
         * To count or list options, query `option` children. To get the
         * currently selected option use `selectedOption()`.
         *
         * @example Cypress
         *
         * ```ts
         * const { select } = FSelectFieldSelectors();
         * cy.get(select()).select("Option 2");
         * cy.get(select()).find("option:not([disabled])").should("have.length", 3);
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { select } = FSelectFieldSelectors();
         * await page.locator(select()).selectOption("Option 2");
         * await expect(page.locator(select()).locator("option:not([disabled])")).toHaveCount(3);
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the select element.
         */
        select(): string {
            return `${selector} .select-field__select`;
        },

        /**
         * Get the error message element.
         *
         * Only present when the field has a validation error.
         *
         * @example Cypress
         *
         * ```ts
         * const { errorMessage } = FSelectFieldSelectors();
         * cy.get(errorMessage()).should("contain.text", "This field is required");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { errorMessage } = FSelectFieldSelectors();
         * await expect(page.locator(errorMessage())).toContainText("This field is required");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the error message element.
         */
        errorMessage(): string {
            return `${selector} .label__message--error`;
        },

        /**
         * Get the label element.
         *
         * The label contains the heading text and, when present, description
         * and tooltip. Use `FLabelSelectors` for more fine-grained access to
         * label sub-elements.
         *
         * @example Cypress
         *
         * ```ts
         * const { label } = FSelectFieldSelectors();
         * cy.get(label()).should("contain.text", "Country");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { label } = FSelectFieldSelectors();
         * await expect(page.locator(label())).toContainText("Country");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the label element.
         */
        label(): string {
            return `${selector} .label`;
        },

        /**
         * Get the currently selected option element.
         *
         * @example Cypress
         *
         * ```ts
         * const { selectedOption } = FSelectFieldSelectors();
         * cy.get(selectedOption()).should("have.text", "Sweden");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { selectedOption } = FSelectFieldSelectors();
         * await expect(page.locator(selectedOption())).toHaveText("Sweden");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the currently selected option element.
         */
        selectedOption(): string {
            return `${selector} option:checked`;
        },

        /**
         * Get the dropdown arrow icon element.
         *
         * @example Cypress
         *
         * ```ts
         * const { arrowIcon } = FSelectFieldSelectors();
         * cy.get(arrowIcon()).should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { arrowIcon } = FSelectFieldSelectors();
         * await expect(page.locator(arrowIcon())).toBeVisible();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the arrow icon element.
         */
        arrowIcon(): string {
            return `${selector} .select-field__icon`;
        },
    });
}
