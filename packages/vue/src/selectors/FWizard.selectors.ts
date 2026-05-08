/**
 * Selectors for `FWizard`.
 *
 * @public
 * @since v6.45.0
 * @param selector - The selector for the FWizard component.
 * @returns An object with selector methods for the FWizard component.
 */
export function FWizardSelectors(selector: string = ".wizard") {
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
         * Get all wizard step elements.
         *
         * To target a specific step by index use `.eq()` in Cypress or
         * `.nth()` in Playwright.
         *
         * @example Cypress
         *
         * ```ts
         * const { steps } = FWizardSelectors();
         * cy.get(steps()).should("have.length", 3);
         * cy.get(steps()).eq(0).find(stepContinueButton()).click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { steps } = FWizardSelectors();
         * await expect(page.locator(steps())).toHaveCount(3);
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for all wizard step elements.
         */
        steps(): string {
            return `${selector} .wizard-step`;
        },

        /**
         * Get the continue (primary) button inside a wizard step.
         *
         * Use together with `steps()` to scope to a specific step.
         *
         * @example Cypress
         *
         * ```ts
         * const { steps, stepContinueButton } = FWizardSelectors();
         * cy.get(steps()).eq(0).find(stepContinueButton()).click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { steps, stepContinueButton } = FWizardSelectors();
         * await page.locator(steps()).nth(0).locator(stepContinueButton()).click();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the continue button inside a wizard step.
         */
        stepContinueButton(): string {
            return ".button-group:last-child .button--primary";
        },

        /**
         * Get the cancel (secondary) button inside a wizard step.
         *
         * Use together with `steps()` to scope to a specific step.
         *
         * @example Cypress
         *
         * ```ts
         * const { steps, stepCancelButton } = FWizardSelectors();
         * cy.get(steps()).eq(0).find(stepCancelButton()).click();
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { steps, stepCancelButton } = FWizardSelectors();
         * await page.locator(steps()).nth(0).locator(stepCancelButton()).click();
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the cancel button inside a wizard step.
         */
        stepCancelButton(): string {
            return ".button-group:last-child .button--secondary";
        },

        /**
         * Get the body element inside a wizard step.
         *
         * Use together with `steps()` to scope to a specific step.
         *
         * @example Cypress
         *
         * ```ts
         * const { steps, stepBody } = FWizardSelectors();
         * cy.get(steps()).eq(0).find(stepBody()).should("contain.text", "Step 1");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { steps, stepBody } = FWizardSelectors();
         * await expect(page.locator(steps()).nth(0).locator(stepBody())).toContainText("Step 1");
         * ```
         *
         * @public
         * @since v6.45.0
         * @returns A selector for the body element inside a wizard step.
         */
        stepBody(): string {
            return ".wizard-step-body";
        },
    });
}
