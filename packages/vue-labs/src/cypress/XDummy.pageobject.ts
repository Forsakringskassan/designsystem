import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export class XDummyPageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;

    /**
     * @param selector - the root of the dummy, usually `<dummy class="dummy">...</dummy>`.
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
