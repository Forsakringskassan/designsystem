/**
 * Selectors for `FMessageBox`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FMessageBox component.
 * @returns An object with selector methods for the FMessageBox component.
 */
export function FMessageBoxSelectors(selector: string = ".message-box") {
    return Object.freeze({
        /**
         * The base selector for the component.
         *
         * This is the same selector that the consumer provided.
         *
         * To assert the message type (`info`, `warning`, `error`, `success`),
         * check the modifier class on the root element:
         *
         * @example Cypress
         *
         * ```ts
         * const { selector } = FMessageBoxSelectors();
         * cy.get(selector).should("have.class", "message-box--error");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { selector } = FMessageBoxSelectors();
         * await expect(page.locator(selector)).toHaveClass(/message-box--error/);
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns The root selector for the component.
         */
        get selector(): string {
            return selector;
        },

        /**
         * Get the content area element.
         *
         * The content area contains the slotted content such as headings and
         * paragraphs.
         *
         * @example Cypress
         *
         * ```ts
         * const { content } = FMessageBoxSelectors();
         * cy.get(content()).should("contain.text", "Something went wrong");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { content } = FMessageBoxSelectors();
         * await expect(page.locator(content())).toContainText("Something went wrong");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the content area element.
         */
        content(): string {
            return `${selector} .message-box__content`;
        },

        /**
         * Get the heading element.
         *
         * The heading is rendered inside the content area when the consumer
         * uses the `headingSlotClass` slot binding on a heading element. Only
         * present in the standard layout.
         *
         * @example Cypress
         *
         * ```ts
         * const { heading } = FMessageBoxSelectors();
         * cy.get(heading()).should("have.text", "Operation successful");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { heading } = FMessageBoxSelectors();
         * await expect(page.locator(heading())).toHaveText("Operation successful");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the heading element.
         */
        heading(): string {
            return `${selector} .message-box__heading`;
        },

        /**
         * Get the icon container element.
         *
         * The icon container is only present when the `short` layout is used.
         *
         * @example Cypress
         *
         * ```ts
         * const { icon } = FMessageBoxSelectors();
         * cy.get(icon()).should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { icon } = FMessageBoxSelectors();
         * await expect(page.locator(icon())).toBeVisible();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the icon container element.
         */
        icon(): string {
            return `${selector} .message-box__icon`;
        },
    });
}
