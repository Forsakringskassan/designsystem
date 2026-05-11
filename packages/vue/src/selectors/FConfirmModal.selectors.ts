/**
 * Selectors for `FConfirmModal`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FConfirmModal component.
 * @returns An object with selector methods for the FConfirmModal component.
 */
export function FConfirmModalSelectors(selector: string = ".modal") {
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
         * const { header } = FConfirmModalSelectors();
         * cy.get(header()).should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { header } = FConfirmModalSelectors();
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
         * const { title } = FConfirmModalSelectors();
         * cy.get(title()).should("have.text", "Are you sure?");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { title } = FConfirmModalSelectors();
         * await expect(page.locator(title())).toHaveText("Are you sure?");
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
         * const { content } = FConfirmModalSelectors();
         * cy.get(content()).should("contain.text", "This action cannot be undone.");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { content } = FConfirmModalSelectors();
         * await expect(page.locator(content())).toContainText("This action cannot be undone.");
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
         * const { footer } = FConfirmModalSelectors();
         * cy.get(footer()).should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { footer } = FConfirmModalSelectors();
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
         * const { closeButton } = FConfirmModalSelectors();
         * cy.get(closeButton()).click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { closeButton } = FConfirmModalSelectors();
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
         * Get the confirm button element in the footer.
         *
         * Use this to confirm the action presented by the modal.
         *
         * @example Cypress
         *
         * ```ts
         * const { confirmButton } = FConfirmModalSelectors();
         * cy.get(confirmButton()).click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { confirmButton } = FConfirmModalSelectors();
         * await page.locator(confirmButton()).click();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the confirm button element.
         */
        confirmButton(): string {
            return `${selector} .modal__footer .button--primary`;
        },

        /**
         * Get the dismiss button element in the footer.
         *
         * Use this to dismiss the modal without confirming the action.
         *
         * @example Cypress
         *
         * ```ts
         * const { dismissButton } = FConfirmModalSelectors();
         * cy.get(dismissButton()).click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { dismissButton } = FConfirmModalSelectors();
         * await page.locator(dismissButton()).click();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the dismiss button element.
         */
        dismissButton(): string {
            return `${selector} .modal__footer .button--secondary`;
        },
    });
}
