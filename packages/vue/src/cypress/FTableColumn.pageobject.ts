import { type DefaultCypressChainable, type BasePageObject } from "./common";
import { FCheckboxFieldPageObject } from "./FCheckboxField.pageobject";

/**
 * @public
 */
export class FTableColumnPageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;
    public index: number;
    public constructor(selector: string, index: number) {
        this.selector = `${selector}:nth(${index})`;
        this.index = index;
        this.el = () => cy.get(this.selector);
    }

    public tableRowBodyContent(position: number): DefaultCypressChainable {
        return cy.get(`${this.selector} td:nth(${position})`);
    }

    public tableRowHeaderContent(): DefaultCypressChainable {
        return cy.get(`${this.selector} th`);
    }

    public checkbox(): FCheckboxFieldPageObject {
        return new FCheckboxFieldPageObject(this.selector);
    }
}
