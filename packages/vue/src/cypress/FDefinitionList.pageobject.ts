import { type DefaultCypressChainable, type BasePageObject } from "./common";

/**
 * @public
 */
export class FDefinitionListPageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;

    /**
     * @param selector - the root of the definition list, usually `<f-definition-list>`.
     */
    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(this.selector);
    }

    /**
     * Hämta page object för specifik definition.
     */
    public definition(index: number): DefaultCypressChainable {
        return cy.get(`${this.selector} .definition-list`).eq(index);
    }

    /**
     * Hämta alla definitioner.
     */
    public definitions(): DefaultCypressChainable {
        return cy.get(`${this.selector} .definition-list`);
    }
}
