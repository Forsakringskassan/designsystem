import { FLabelSelectors } from "./FLabel.selectors";

/**
 * Selectors for `FSelectField`.
 *
 * @public
 * @since %version%
 * @param selector - The selector for the FSelectField component.
 * @returns An object with selector methods for the FSelectField component.
 */
export function FSelectFieldSelectors(selector: string = ":scope") {
    const labelSelectors = FLabelSelectors(`${selector} .label`);

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
         * Get the select element.
         *
         * Use this to select an option or assert the currently selected value.
         * To count or list options, query `option` children. To get the
         * currently selected option use `selectedOption()`.
         *
         * @example Cypress
         *
         * ```ts
         * const { select } = FSelectFieldSelectors();
         * cy.get(select()).select("Option 2");
         * cy.get(select()).find("option:not([disabled])").should("have.length", 3);
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { select } = FSelectFieldSelectors();
         * await page.locator(select()).selectOption("Option 2");
         * await expect(page.locator(select()).locator("option:not([disabled])")).toHaveCount(3);
         * ```
         *
         * @public
         * @since %version%
         * @returns A selector for the select element.
         */
        select(): string {
            return `${selector} select`;
        },

        /**
         * Get the error message element.
         *
         * Only present when the field has a validation error.
         *
         * @example Cypress
         *
         * ```ts
         * const { errorMessage } = FSelectFieldSelectors();
         * cy.get(errorMessage()).should("contain.text", "This field is required");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { errorMessage } = FSelectFieldSelectors();
         * await expect(page.locator(errorMessage())).toContainText("This field is required");
         * ```
         *
         * @public
         * @since %version%
         * @returns A selector for the error message element.
         */
        errorMessage(): string {
            return labelSelectors.errorMessage();
        },

        /**
         * Get the label element.
         *
         * The label contains the heading text and, when present, description
         * and tooltip. Use `FLabelSelectors` for more fine-grained access to
         * label sub-elements.
         *
         * @example Cypress
         *
         * ```ts
         * const { label } = FSelectFieldSelectors();
         * cy.get(label()).should("contain.text", "Country");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { label } = FSelectFieldSelectors();
         * await expect(page.locator(label())).toContainText("Country");
         * ```
         *
         * @public
         * @since %version%
         * @returns A selector for the label element.
         */
        label(): string {
            return labelSelectors.selector;
        },

        /**
         * Get the description element selector.
         *
         * The description is only present when the `description` slot is used.
         *
         * @example Cypress
         *
         * ```ts
         * const { description } = FSelectFieldSelectors();
         * cy.get(description()).should("contain.text", "Help text");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { description } = FSelectFieldSelectors();
         * await expect(page.locator(description())).toContainText("Help text");
         * ```
         *
         * @public
         * @since v6.58.0
         * @returns A selector for the description element.
         */
        description(): string {
            return labelSelectors.description();
        },

        /**
         * Get the currently selected option element.
         *
         * @example Cypress
         *
         * ```ts
         * const { selectedOption } = FSelectFieldSelectors();
         * cy.get(selectedOption()).should("have.text", "Sweden");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { selectedOption } = FSelectFieldSelectors();
         * await expect(page.locator(selectedOption())).toHaveText("Sweden");
         * ```
         *
         * @public
         * @since %version%
         * @returns A selector for the currently selected option element.
         */
        selectedOption(): string {
            return `${selector} option:checked`;
        },

        /**
         * Get all options elements.
         *
         * To target a specific option by index use `.eq()` in Cypress or
         * `.nth()` in Playwright.
         *
         * @example Cypress
         *
         * ```ts
         * const { options } = FSelectFieldSelectors();
         * cy.get(options()).should("have.length", 3);
         * cy.get(options()).eq(0).should("contain.text", "Option 1");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { definitions } = FSelectFieldSelectors();
         * await expect(page.locator(definitions())).toHaveCount(3);
         * await expect(page.locator(definitions()).nth(0)).toContainText("Option 1");
         * ```
         *
         * @public
         * @since %version%
         * @returns A selector for the currently selected option element.
         */
        options(): string {
            return `${selector} select option`;
        },

        /**
         * Get the dropdown arrow icon element.
         *
         * @example Cypress
         *
         * ```ts
         * const { arrowIcon } = FSelectFieldSelectors();
         * cy.get(arrowIcon()).should("exist");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { arrowIcon } = FSelectFieldSelectors();
         * await expect(page.locator(arrowIcon())).toBeVisible();
         * ```
         *
         * @public
         * @since %version%
         * @returns A selector for the arrow icon element.
         */
        arrowIcon(): string {
            return `${selector} .icon.select-field__icon.f-icon-arrow-down`;
        },
    });
}
