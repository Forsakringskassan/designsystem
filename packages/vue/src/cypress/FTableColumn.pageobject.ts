import { FCheckboxFieldPageObject } from "./FCheckboxField.pageobject";
import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 * @deprecated Use methods on `FInteractiveTable` instead. Deprecated since v6.11.0.
 */
export class FTableColumnPageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;
    public index: number;
    public constructor(selector: string, index: number) {
        this.selector = `${selector}:nth(${String(index)})`;
        this.index = index;
        this.el = () => cy.get(this.selector);
    }

    /**
     * @deprecated Use ´FInteractiveTablePageObject.cell()´ instead. Deprecated since v6.11.0.
     */
    public tableRowBodyContent(position: number): DefaultCypressChainable {
        return cy.get(`${this.selector} td:nth(${String(position)})`);
    }

    /**
     * @deprecated Use ´FInteractiveTablePageObject.header()´ instead. Deprecated since v6.11.0.
     */
    public tableRowHeaderContent(): DefaultCypressChainable {
        return cy.get(`${this.selector} th`);
    }

    /**
     * @deprecated Use ´FInteractiveTablePageObject.checkbox()´ instead. Deprecated since v6.11.0.
     */
    public checkbox(): FCheckboxFieldPageObject {
        return new FCheckboxFieldPageObject(this.selector);
    }
}
