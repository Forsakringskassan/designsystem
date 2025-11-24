import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export class FDefinitionListPageObject implements BasePageObject {
    public selector: string;

    /**
     * @param selector - the root of the definition list
     */
    public constructor(selector: string) {
        this.selector = selector;
    }

    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }

    public description(index: number): DefaultCypressChainable {
        return cy.get(
            `${this.selector} .definition-list__description:nth(${index})`,
        );
    }

    public numberOfDefinitions(): Cypress.Chainable<number> {
        return cy.get(`${this.selector} .definition-list__term`).its("length");
    }

    public term(index: number): DefaultCypressChainable {
        return cy.get(`${this.selector} .definition-list__term:nth(${index})`);
    }
}
