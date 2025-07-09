import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * Cypress page object for `FDefinitionList`
 *
 * @public
 */
export class FDefinitionListPageObject implements BasePageObject {
    /**
     * The root of the component.
     *
     * @param selector - The selector
     */
    public selector: string;

    /**
     * @param selector - The selector.
     */
    public constructor(selector: string) {
        this.selector = selector;
    }

    /**
     * Gets the page object element.
     *
     * @returns The page object element.
     */
    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }

    /**
     * Gets the description of a definition.
     *
     * @param index - Index of definition in definition list.
     * @returns The description of the definition.
     */
    public description(index: number): DefaultCypressChainable {
        return cy.get(
            `${this.selector} .definition-list__description:nth(${index})`,
        );
    }

    /**
     * Gets the number of definitions.
     *
     * @returns The number of definitions.
     */
    public numberOfDefinitions(): Cypress.Chainable<number> {
        return cy.get(`${this.selector} .definition-list__term`).its("length");
    }

    /**
     * Gets the term of a definition.
     *
     * @param index - Index of definition in definition list.
     * @returns The term of the definition.
     */
    public term(index: number): DefaultCypressChainable {
        return cy.get(`${this.selector} .definition-list__term:nth(${index})`);
    }
}
