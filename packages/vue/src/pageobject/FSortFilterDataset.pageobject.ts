import { type DefaultCypressChainable, type BasePageObject } from "./common";
import { FSelectFieldPageObject } from "./FSelectField.pageobject";
import { FTextFieldPageObject } from "./FTextField.pageobject";

/**
 * @public
 */
export class FSortFilterDatasetPageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;
    public textField: FTextFieldPageObject;
    public selectField: FSelectFieldPageObject;

    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(this.selector);
        this.selectField = new FSelectFieldPageObject(
            `${this.selector} .select-field--inline`,
        );
        this.textField = new FTextFieldPageObject(
            `${this.selector} .sort-filter-dataset__search`,
        );
    }

    public header(): DefaultCypressChainable {
        return cy.get(
            `${this.selector} .iflex .sort-filter-dataset__toolbar__header`,
        );
    }
}
