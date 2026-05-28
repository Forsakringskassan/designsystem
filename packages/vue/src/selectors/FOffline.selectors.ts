/**
 * Selectors for `FOffline`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FOffline component.
 * @returns An object with selector methods for the FOffline component.
 */
export function FOfflineSelectors(selector: string = ".offline__wrapper") {
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
         * Get the offline message element.
         *
         * Only present when the browser is offline.
         *
         * @example Cypress
         *
         * ```ts
         * const { offlineMessage } = FOfflineSelectors();
         * cy.get(offlineMessage()).should("be.visible");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { offlineMessage } = FOfflineSelectors();
         * await expect(page.locator(offlineMessage())).toBeVisible();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the offline message element.
         */
        offlineMessage(): string {
            return `${selector} .offline`;
        },
    });
}
