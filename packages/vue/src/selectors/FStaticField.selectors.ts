import { FLabelSelectors } from "./FLabel.selectors";

/**
 * Selectors for `FStaticField`.
 *
 * @public
 * @since %version%
 * @param selector - The selector for the FStaticField component.
 * @returns An object with selector methods for the FStaticField component.
 */
export function FStaticFieldSelectors(selector: string = ":scope") {
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
         * Get the body element selector.
         *
         * The body element is the container for the static text content.
         *
         * @example Cypress
         *
         * ```ts
         * const { body } = FStaticFieldSelectors();
         * cy.get(body()).should("have.text", "Jane Doe");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { body } = FStaticFieldSelectors();
         * await expect(page.locator(body()).toHaveText("Jane Doe");
         * ```
         *
         * @public
         * @since %version%
         * @returns A selector for the body element.
         */
        body(): string {
            return `${selector} p`;
        },

        /**
         * Get the label element selector.
         *
         * Use `FLabelSelectors` for more fine-grained access to label sub-elements.
         *
         * @example Cypress
         *
         * ```ts
         * const { label } = FStaticFieldSelectors();
         * cy.get(label()).should("contain.text", "Full name");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { label } = FStaticFieldSelectors();
         * await expect(page.locator(label())).toContainText("Full name");
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
         * const { description } = FStaticFieldSelectors();
         * cy.get(description()).should("contain.text", "Enter your full name");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { description } = FStaticFieldSelectors();
         * await expect(page.locator(description())).toContainText("Enter your full name");
         * ```
         *
         * @public
         * @since %version%
         * @returns A selector for the description element.
         */
        description(): string {
            return labelSelectors.description();
        },

        /**
         * Get the format description element selector.
         *
         * Only present when the `description` slot is used with format
         * description content.
         *
         * @example Cypress
         *
         * ```ts
         * const { formatDescription } = FStaticFieldSelectors();
         * cy.get(formatDescription()).should("contain.text", "YYYY-MM-DD");
         * ```
         *
         * @example Playwright
         *
         * ```ts
         * const { formatDescription } = FStaticFieldSelectors();
         * await expect(page.locator(formatDescription())).toContainText("YYYY-MM-DD");
         * ```
         *
         * @public
         * @since %version%
         * @returns A selector for the format description element.
         */
        formatDescription(): string {
            return labelSelectors.formatDescription();
        },
    });
}
