/**
 * Selectors for `FPageHeader`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FPageHeader component.
 * @returns An object with selector methods for the FPageHeader component.
 */
export function FPageHeaderSelectors(selector: string = ".page-header__root") {
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
         * Get the skip link element.
         *
         * The skip link is visually hidden by default and only becomes visible
         * on keyboard focus. Use this selector to assert its presence or to
         * verify the link target.
         *
         * @example Cypress
         *
         * ```ts
         * const { skipLink } = FPageHeaderSelectors();
         * cy.get(skipLink()).should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { skipLink } = FPageHeaderSelectors();
         * await expect(page.locator(skipLink())).toBeAttached();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the skip link element.
         */
        skipLink(): string {
            return `${selector} .iskiplink`;
        },

        /**
         * Get the logo element.
         *
         * Only present when the `logo` slot is used.
         *
         * @example Cypress
         *
         * ```ts
         * const { logo } = FPageHeaderSelectors();
         * cy.get(logo()).should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { logo } = FPageHeaderSelectors();
         * await expect(page.locator(logo())).toBeVisible();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the logo element.
         */
        logo(): string {
            return `${selector} .page-header__logo`;
        },

        /**
         * Get the application name element.
         *
         * @example Cypress
         *
         * ```ts
         * const { appName } = FPageHeaderSelectors();
         * cy.get(appName()).should("have.text", "My App");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { appName } = FPageHeaderSelectors();
         * await expect(page.locator(appName())).toHaveText("My App");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the application name element.
         */
        appName(): string {
            return `${selector} .page-header__app-name`;
        },

        /**
         * Get the right-side slot element.
         *
         * Only present when the `right` slot is used.
         *
         * @example Cypress
         *
         * ```ts
         * const { right } = FPageHeaderSelectors();
         * cy.get(right()).should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { right } = FPageHeaderSelectors();
         * await expect(page.locator(right())).toBeVisible();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the right-side content element.
         */
        right(): string {
            return `${selector} .page-header__right`;
        },
    });
}
