import { type DefaultCypressChainable, type BasePageObject } from "./common";

/**
 * @public
 */
export class FOfflinePageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;
    public banner: () => DefaultCypressChainable;

    /**
     * @param selector - optional custom selector to offline component.
     */
    public constructor(selector: string = "body > .offline__wrapper") {
        this.selector = selector;
        this.el = () => cy.get(this.selector);
        this.banner = () => cy.get(`${this.selector} .offline`);
    }
}
