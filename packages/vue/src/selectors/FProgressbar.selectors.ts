/**
 * Selectors for `FProgressbar`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FProgressbar component.
 * @returns An object with selector methods for the FProgressbar component.
 */
export function FProgressbarSelectors(selector: string = ".progress") {
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
         * Get the progress meter element.
         *
         * The meter element carries the `role="progressbar"` attribute and the
         * current progress value in the `aria-valuenow` attribute. To read the
         * numeric value, get the `aria-valuenow` attribute and convert to a
         * number.
         *
         * @example Cypress
         *
         * ```ts
         * const { meter } = FProgressbarSelectors();
         * cy.get(meter()).should("have.attr", "aria-valuenow", "50");
         * cy.get(meter()).invoke("attr", "aria-valuenow").then(Number).should("eq", 50);
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { meter } = FProgressbarSelectors();
         * await expect(page.locator(meter())).toHaveAttribute("aria-valuenow", "50");
         * const value = Number(await page.locator(meter()).getAttribute("aria-valuenow"));
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the progress meter element.
         */
        meter(): string {
            return `${selector} .progress__meter`;
        },
    });
}
