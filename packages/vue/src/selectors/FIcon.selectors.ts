/**
 * Selectors for `FIcon`.
 *
 * @public
 * @since %version%
 * @param selector - The selector for the FIcon component.
 * @returns An object with selector methods for the FIcon component.
 */
export function FIconSelectors(selector: string = ".icon") {
    return Object.freeze({
        /**
         * The base selector for the component.
         *
         * This is the same selector that the consumer provided.
         *
         * @public
         * @since %version%
         * @returns The root selector for the component.
         */
        get selector(): string {
            return selector;
        },

        /**
         * Get the `<use>` element.
         *
         * The `href` attribute of this element identifies which icon from the
         * sprite sheet is displayed, following the pattern `#f-icon-{name}`.
         *
         * @example Cypress
         *
         * ```ts
         * const { use } = FIconSelectors();
         * cy.get(use()).should("have.attr", "href", "#f-icon-bell");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { use } = FIconSelectors();
         * await expect(page.locator(use())).toHaveAttribute("href", "#f-icon-bell");
         * ```
         *
         * @public
         * @since %version%
         * @returns A selector for the `<use>` element.
         */
        use(): string {
            return `${selector} use`;
        },
    });
}
