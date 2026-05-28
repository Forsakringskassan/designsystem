/**
 * Selectors for `FFormModal`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FFormModal component.
 * @returns An object with selector methods for the FFormModal component.
 */
export function FFormModalSelectors(selector: string = ".modal") {
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
         * Get the header element.
         *
         * @example Cypress
         *
         * ```ts
         * const { header } = FFormModalSelectors();
         * cy.get(header()).should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { header } = FFormModalSelectors();
         * await expect(page.locator(header())).toBeVisible();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the header element.
         */
        header(): string {
            return `${selector} .modal__header`;
        },

        /**
         * Get the title element.
         *
         * @example Cypress
         *
         * ```ts
         * const { title } = FFormModalSelectors();
         * cy.get(title()).should("have.text", "Edit details");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { title } = FFormModalSelectors();
         * await expect(page.locator(title())).toHaveText("Edit details");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the title element.
         */
        title(): string {
            return `${selector} .modal__title`;
        },

        /**
         * Get the content element.
         *
         * @example Cypress
         *
         * ```ts
         * const { content } = FFormModalSelectors();
         * cy.get(content()).should("contain.text", "Fill in the form");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { content } = FFormModalSelectors();
         * await expect(page.locator(content())).toContainText("Fill in the form");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the content element.
         */
        content(): string {
            return `${selector} .modal__content`;
        },

        /**
         * Get the footer element.
         *
         * @example Cypress
         *
         * ```ts
         * const { footer } = FFormModalSelectors();
         * cy.get(footer()).should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { footer } = FFormModalSelectors();
         * await expect(page.locator(footer())).toBeVisible();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the footer element.
         */
        footer(): string {
            return `${selector} .modal__footer`;
        },

        /**
         * Get the close button element.
         *
         * @example Cypress
         *
         * ```ts
         * const { closeButton } = FFormModalSelectors();
         * cy.get(closeButton()).click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { closeButton } = FFormModalSelectors();
         * await page.locator(closeButton()).click();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the close button element.
         */
        closeButton(): string {
            return `${selector} .close-button`;
        },

        /**
         * Get the submit button element in the footer.
         *
         * Use this to submit the form inside the modal.
         *
         * @example Cypress
         *
         * ```ts
         * const { submitButton } = FFormModalSelectors();
         * cy.get(submitButton()).click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { submitButton } = FFormModalSelectors();
         * await page.locator(submitButton()).click();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the submit button element.
         */
        submitButton(): string {
            return `${selector} .modal__footer .button--primary`;
        },

        /**
         * Get the cancel button element in the footer.
         *
         * Use this to dismiss the modal without submitting.
         *
         * @example Cypress
         *
         * ```ts
         * const { cancelButton } = FFormModalSelectors();
         * cy.get(cancelButton()).click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { cancelButton } = FFormModalSelectors();
         * await page.locator(cancelButton()).click();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the cancel button element.
         */
        cancelButton(): string {
            return `${selector} .modal__footer .button--secondary`;
        },
    });
}
