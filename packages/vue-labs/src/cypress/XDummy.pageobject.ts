import { type DefaultCypressChainable, type BasePageObject } from "./common";

/**
 * @public
 */
export class XDummyPageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;

    /**
     * @param selector - the root of the label, usually `<label class="label">...</label>`.
     */
    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(this.selector);
    }

    /**
     * Heading
     */
    public heading(): DefaultCypressChainable {
        return cy.get(`${this.selector} h1`);
    }
}
