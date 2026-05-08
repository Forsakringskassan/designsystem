/**
 * Selectors for `FFieldset`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FFieldset component.
 * @returns An object with selector methods for the FFieldset component.
 */
export function FFieldsetSelectors(selector: string = ".fieldset") {
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
         * Get the legend element.
         *
         * The legend contains the label text and, when present, description and
         * error message.
         *
         * @example Cypress
         *
         * ```ts
         * const { legend } = FFieldsetSelectors();
         * cy.get(legend()).should("have.text", "My label");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { legend } = FFieldsetSelectors();
         * await expect(page.locator(legend())).toHaveText("My label");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the legend element.
         */
        legend(): string {
            return `${selector} > legend`;
        },

        /**
         * Get the content wrapper element.
         *
         * The content wrapper contains the slotted form controls (radio buttons,
         * checkboxes, etc.).
         *
         * @example Cypress
         *
         * ```ts
         * const { content } = FFieldsetSelectors();
         * cy.get(content()).find("input").should("have.length", 3);
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { content } = FFieldsetSelectors();
         * await expect(page.locator(content()).locator("input")).toHaveCount(3);
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the content wrapper element.
         */
        content(): string {
            return `${selector} .fieldset__content`;
        },

        /**
         * Get the error message element.
         *
         * The error message is only present when the fieldset has a validation
         * error.
         *
         * @example Cypress
         *
         * ```ts
         * const { errorMessage } = FFieldsetSelectors();
         * cy.get(errorMessage()).should("have.text", "This field is required");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { errorMessage } = FFieldsetSelectors();
         * await expect(page.locator(errorMessage())).toHaveText("This field is required");
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
         * Get all radio button elements inside the fieldset.
         *
         * Use this to assert the number of radio buttons rendered.
         *
         * @example Cypress
         *
         * ```ts
         * const { radioButtons } = FFieldsetSelectors();
         * cy.get(radioButtons()).should("have.length", 3);
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { radioButtons } = FFieldsetSelectors();
         * await expect(page.locator(radioButtons())).toHaveCount(3);
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for all radio button elements.
         */
        radioButtons(): string {
            return `${selector} .radio-button`;
        },

        /**
         * Get all checkbox elements inside the fieldset.
         *
         * Use this to assert the number of checkboxes rendered.
         *
         * @example Cypress
         *
         * ```ts
         * const { checkboxes } = FFieldsetSelectors();
         * cy.get(checkboxes()).should("have.length", 2);
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { checkboxes } = FFieldsetSelectors();
         * await expect(page.locator(checkboxes())).toHaveCount(2);
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for all checkbox elements.
         */
        checkboxes(): string {
            return `${selector} .checkbox`;
        },
    });
}
