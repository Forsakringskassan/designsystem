/**
 * Selectors for `FModal`, `FConfirmModal` and `FFormModal`.
 *
 * The selector should reference the root element of the modal (the element
 * with the `modal` class).
 *
 * @public
 * @since %version%
 * @param selector - The selector for the modal.
 * @returns An object with selector methods for the modal.
 */
export function FModalSelectors(selector: string = ":scope") {
    const dialog = `${selector} .modal__dialog-container`;

    return Object.freeze({
        /**
         * The base selector for the modal.
         *
         * This is the same selector that the consumer provided.
         *
         * Note that the root element itself has no dimensions and is never
         * considered visible, use {@link FModalSelectors.dialog} to test if
         * the modal is visible.
         *
         * @public
         * @since %version%
         * @returns The root selector for the modal.
         */
        get selector(): string {
            return selector;
        },

        /**
         * Get the dialog element.
         *
         * Use this element to test if the modal is visible.
         *
         * @example Cypress
         *
         * ```ts
         * const { dialog } = FModalSelectors();
         * cy.get(dialog()).should("be.visible");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { dialog } = FModalSelectors();
         * await expect(page.locator(dialog())).toBeVisible();
         * ```
         *
         * @public
         * @since %version%
         * @returns A selector for the dialog element.
         */
        dialog(this: void): string {
            return dialog;
        },

        /**
         * Get the title element.
         *
         * @example Cypress
         *
         * ```ts
         * const { title } = FModalSelectors();
         * cy.get(title()).should("have.text", "Lorem ipsum");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { title } = FModalSelectors();
         * await expect(page.locator(title())).toHaveText("Lorem ipsum");
         * ```
         *
         * @public
         * @since %version%
         * @returns A selector for the title element.
         */
        title(this: void): string {
            return `${dialog} .modal__title`;
        },

        /**
         * Get the body element.
         *
         * @example Cypress
         *
         * ```ts
         * const { body } = FModalSelectors();
         * cy.get(body()).should("contain.text", "Lorem ipsum");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { body } = FModalSelectors();
         * await expect(page.locator(body())).toContainText("Lorem ipsum");
         * ```
         *
         * @public
         * @since %version%
         * @returns A selector for the body element.
         */
        body(this: void): string {
            return `${dialog} .modal__content`;
        },

        /**
         * Get the primary button in the modal footer.
         *
         * @example Cypress
         *
         * ```ts
         * const { primaryButton } = FModalSelectors();
         * cy.get(primaryButton()).click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { primaryButton } = FModalSelectors();
         * await page.locator(primaryButton()).click();
         * ```
         *
         * @public
         * @since %version%
         * @returns A selector for the primary button element.
         */
        primaryButton(this: void): string {
            return `${dialog} .modal__footer .button--primary`;
        },

        /**
         * Get the secondary button in the modal footer.
         *
         * @example Cypress
         *
         * ```ts
         * const { secondaryButton } = FModalSelectors();
         * cy.get(secondaryButton()).click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { secondaryButton } = FModalSelectors();
         * await page.locator(secondaryButton()).click();
         * ```
         *
         * @public
         * @since %version%
         * @returns A selector for the secondary button element.
         */
        secondaryButton(this: void): string {
            return `${dialog} .modal__footer .button--secondary`;
        },

        /**
         * Get the close button (cross).
         *
         * @example Cypress
         *
         * ```ts
         * const { closeCross } = FModalSelectors();
         * cy.get(closeCross()).click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { closeCross } = FModalSelectors();
         * await page.locator(closeCross()).click();
         * ```
         *
         * @public
         * @since %version%
         * @returns A selector for the close button element.
         */
        closeCross(this: void): string {
            return `${dialog} .close-button`;
        },
    });
}
