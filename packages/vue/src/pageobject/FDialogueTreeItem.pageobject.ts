import { type DefaultCypressChainable, type BasePageObject } from "./common";

/**
 * @public
 */
export class FDialogueTreeItemPageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;
    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(this.selector);
    }

    public title(): DefaultCypressChainable {
        return cy.get(`${this.selector}`);
    }

    public button(): DefaultCypressChainable {
        return cy.get(`${this.selector} button`);
    }

    public select(): DefaultCypressChainable {
        return this.button().click();
    }
}
