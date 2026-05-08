/**
 * Selectors for `FExpandablePanel`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FExpandablePanel component.
 * @returns An object with selector methods for the FExpandablePanel component.
 */
export function FExpandablePanelSelectors(
    selector: string = ".expandable-panel",
) {
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
         * The toggle button is the clickable heading element used to expand or
         * collapse the panel. To check the current state, assert the
         * `aria-expanded` attribute:
         *
         * @example Cypress
         *
         * ```ts
         * const { toggleButton } = FExpandablePanelSelectors();
         * cy.get(toggleButton()).click();
         * cy.get(toggleButton()).should("have.attr", "aria-expanded", "true");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { toggleButton } = FExpandablePanelSelectors();
         * await page.locator(toggleButton()).click();
         * await expect(page.locator(toggleButton())).toHaveAttribute("aria-expanded", "true");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the toggle button element.
         */
        toggleButton(): string {
            return `${selector} .expandable-panel__heading button`;
        },

        /**
         * Get the expand/collapse icon element.
         *
         * @example Cypress
         *
         * ```ts
         * const { expandCollapseIcon } = FExpandablePanelSelectors();
         * cy.get(expandCollapseIcon()).should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { expandCollapseIcon } = FExpandablePanelSelectors();
         * await expect(page.locator(expandCollapseIcon())).toBeVisible();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the expand/collapse icon element.
         */
        expandCollapseIcon(): string {
            return `${selector} .expandable-panel__icon`;
        },

        /**
         * Get the body element.
         *
         * The body contains the main slotted content of the panel.
         *
         * @example Cypress
         *
         * ```ts
         * const { body } = FExpandablePanelSelectors();
         * cy.get(body()).should("contain.text", "Panel content");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { body } = FExpandablePanelSelectors();
         * await expect(page.locator(body())).toContainText("Panel content");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the body element.
         */
        body(): string {
            return `${selector} .expandable-panel__body`;
        },

        /**
         * Get the notification badge element.
         *
         * The notification badge is only present when the `notifications` prop
         * is greater than zero. To read the notification count, get the text
         * content of this element.
         *
         * @example Cypress
         *
         * ```ts
         * const { notification } = FExpandablePanelSelectors();
         * cy.get(notification()).should("exist");
         * cy.get(notification()).invoke("text").then(Number).should("be.gt", 0);
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { notification } = FExpandablePanelSelectors();
         * await expect(page.locator(notification())).toBeVisible();
         * const count = Number(await page.locator(notification()).textContent());
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the notification badge element.
         */
        notification(): string {
            return `${selector} .expandable-panel__notification`;
        },

        /**
         * Get the related info element.
         *
         * The related info area contains content from the `outside` slot and is
         * only present when that slot is used.
         *
         * @example Cypress
         *
         * ```ts
         * const { relatedInfo } = FExpandablePanelSelectors();
         * cy.get(relatedInfo()).should("contain.text", "Related information");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { relatedInfo } = FExpandablePanelSelectors();
         * await expect(page.locator(relatedInfo())).toContainText("Related information");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the related info element.
         */
        relatedInfo(): string {
            return `${selector} .expandable-panel__outside`;
        },
    });
}
