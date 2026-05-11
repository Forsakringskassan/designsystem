/**
 * Selectors for `FModal`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FModal component.
 * @returns An object with selector methods for the FModal component.
 */
export function FModalSelectors(selector: string = ".modal") {
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
         * const { header } = FModalSelectors();
         * cy.get(header()).should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { header } = FModalSelectors();
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
         * const { title } = FModalSelectors();
         * cy.get(title()).should("have.text", "Confirm action");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { title } = FModalSelectors();
         * await expect(page.locator(title())).toHaveText("Confirm action");
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
         * const { content } = FModalSelectors();
         * cy.get(content()).should("contain.text", "Are you sure?");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { content } = FModalSelectors();
         * await expect(page.locator(content())).toContainText("Are you sure?");
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
         * const { footer } = FModalSelectors();
         * cy.get(footer()).find("button").first().click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { footer } = FModalSelectors();
         * await page.locator(footer()).locator("button").first().click();
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
         * Get the primary button element in the footer.
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
         * @since v6.45.0
         * @returns A selector for the primary button element.
         */
        primaryButton(): string {
            return `${selector} .modal__footer .button--primary`;
        },

        /**
         * Get the secondary button element in the footer.
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
         * @since v6.45.0
         * @returns A selector for the secondary button element.
         */
        secondaryButton(): string {
            return `${selector} .modal__footer .button--secondary`;
        },

        /**
         * Get the close button element.
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
         * @since v6.45.0
         * @returns A selector for the close button element.
         */
        closeButton(): string {
            return `${selector} .close-button`;
        },
    });
}
