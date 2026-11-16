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
         * Get the header element (the modal heading).
         *
         * Contains the content of the `header` slot (`heading` slot for
         * `FConfirmModal`).
         *
         * @example Cypress
         *
         * ```ts
         * const { header } = FModalSelectors();
         * cy.get(header()).should("have.text", "Lorem ipsum");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { header } = FModalSelectors();
         * await expect(page.locator(header())).toHaveText("Lorem ipsum");
         * ```
         *
         * @public
         * @since %version%
         * @returns A selector for the header element.
         */
        header(this: void): string {
            return `${dialog} .modal__title`;
        },

        /**
         * Get the content element.
         *
         * Contains the content of the `content` slot. For `FFormModal` this
         * also includes the form, use the selectors for the respective input
         * components scoped to this element to access the fields.
         *
         * @example Cypress
         *
         * ```ts
         * const { content } = FModalSelectors();
         * cy.get(content()).should("contain.text", "Lorem ipsum");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { content } = FModalSelectors();
         * await expect(page.locator(content())).toContainText("Lorem ipsum");
         * ```
         *
         * @public
         * @since %version%
         * @returns A selector for the content element.
         */
        content(this: void): string {
            return `${dialog} .modal__content`;
        },

        /**
         * Get the footer element.
         *
         * The footer contains the modal buttons. For `FModal` the buttons are
         * whatever is passed in the `footer` slot. For `FConfirmModal` and
         * `FFormModal` they are rendered from the `buttons` prop (or the
         * default buttons) in the configured button order.
         *
         * Since the number, order and types of the buttons vary, no selectors
         * for individual buttons are provided. Locate a button inside the
         * footer by its text (accessible name) or by a selector of your own
         * instead.
         *
         * @example Cypress
         *
         * ```ts
         * const { footer } = FModalSelectors();
         * cy.get(footer()).contains("button", "Bekräfta").click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { footer } = FModalSelectors();
         * await page
         *     .locator(footer())
         *     .getByRole("button", { name: "Bekräfta" })
         *     .click();
         * ```
         *
         * @public
         * @since %version%
         * @returns A selector for the footer element.
         */
        footer(this: void): string {
            return `${dialog} .modal__footer`;
        },

        /**
         * Get the close button in the top right corner of the modal.
         *
         * @example Cypress
         *
         * ```ts
         * const { closeButton } = FModalSelectors();
         * cy.get(closeButton()).click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { closeButton } = FModalSelectors();
         * await page.locator(closeButton()).click();
         * ```
         *
         * @public
         * @since %version%
         * @returns A selector for the close button element.
         */
        closeButton(this: void): string {
            return `${dialog} .modal__shelf > .close-button`;
        },
    });
}
