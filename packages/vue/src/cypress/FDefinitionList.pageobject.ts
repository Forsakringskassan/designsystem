import { FDefinitionListSelectors } from "../selectors";
import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * Cypress page object for `FDefinitionList`
 *
 * @public
 */
export class FDefinitionListPageObject implements BasePageObject {
    private _selectors: ReturnType<typeof FDefinitionListSelectors>;

    /**
     * @param selector - The selector.
     */
    public constructor(selector: string) {
        this._selectors = FDefinitionListSelectors(selector);
    }

    /**
     * Gets the page object selector.
     *
     * @returns The page object selector.
     */
    public get selector(): string {
        return this._selectors.selector;
    }

    /**
     * Gets the page object element.
     *
     * @returns The page object element.
     */
    public el(): DefaultCypressChainable {
        return cy.get(this._selectors.selector);
    }

    /**
     * Gets the definition value.
     *
     * @param index - Index of definition in definition list.
     * @returns The definition value.
     */
    public definition(index: number): DefaultCypressChainable {
        return cy.get(`${this._selectors.definitions()}:nth(${index})`);
    }

    /**
     * Gets the number of definitions.
     *
     * @returns The number of definitions.
     */
    public numberOfDefinitions(): Cypress.Chainable<number> {
        return cy.get(this._selectors.terms()).its("length");
    }

    /**
     * Gets the term of a definition.
     *
     * @param index - Index of definition in definition list.
     * @returns The term of the definition.
     */
    public term(index: number): DefaultCypressChainable {
        return cy.get(`${this._selectors.terms()}:nth(${index})`);
    }
}
