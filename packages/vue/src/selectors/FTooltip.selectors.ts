/**
 * Selectors for `FTooltip`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FTooltip component.
 * @returns An object with selector methods for the FTooltip component.
 */
export function FTooltipSelectors(selector: string = ".tooltip") {
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
         * Get the toggle button element.
         *
         * Clicking this button opens or closes the tooltip bubble.
         *
         * @example Cypress
         *
         * ```ts
         * const { toggleButton } = FTooltipSelectors();
         * cy.get(toggleButton()).click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { toggleButton } = FTooltipSelectors();
         * await page.locator(toggleButton()).click();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the toggle button element.
         */
        toggleButton(): string {
            return `.tooltip__button`;
        },

        /**
         * Get the tooltip bubble element.
         *
         * The bubble contains the tooltip header and body content. It is only
         * visible when the tooltip is open.
         *
         * @example Cypress
         *
         * ```ts
         * const { bubble } = FTooltipSelectors();
         * cy.get(bubble()).should("be.visible");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { bubble } = FTooltipSelectors();
         * await expect(page.locator(bubble())).toBeVisible();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the tooltip bubble element.
         */
        bubble(): string {
            return `${selector} .tooltip__bubble`;
        },

        /**
         * Get the tooltip header element.
         *
         * @example Cypress
         *
         * ```ts
         * const { header } = FTooltipSelectors();
         * cy.get(header()).should("contain.text", "More info");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { header } = FTooltipSelectors();
         * await expect(page.locator(header())).toContainText("More info");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the tooltip header element.
         */
        header(): string {
            return `${selector} .tooltip__header`;
        },

        /**
         * Get the tooltip body element.
         *
         * @example Cypress
         *
         * ```ts
         * const { body } = FTooltipSelectors();
         * cy.get(body()).should("contain.text", "Helpful information");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { body } = FTooltipSelectors();
         * await expect(page.locator(body())).toContainText("Helpful information");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the tooltip body element.
         */
        body(): string {
            return `${selector} .tooltip__body`;
        },

        /**
         * Get the close button element.
         *
         * @example Cypress
         *
         * ```ts
         * const { closeButton } = FTooltipSelectors();
         * cy.get(closeButton()).click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { closeButton } = FTooltipSelectors();
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
