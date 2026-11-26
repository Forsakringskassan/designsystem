import { FCrudDatasetSelectors } from "../selectors";
import { FValidationFormPageObject } from "./FValidationForm.pageobject";
import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export class FCrudDatasetPageObject implements BasePageObject {
    private _selectors: ReturnType<typeof FCrudDatasetSelectors>;
    public form: FValidationFormPageObject;

    public constructor(selector = ".crud-dataset") {
        this._selectors = FCrudDatasetSelectors(selector);
        this.form = new FValidationFormPageObject(`${this.selector} form`);
    }

    public get selector(): string {
        return this._selectors.selector;
    }

    public el(): DefaultCypressChainable {
        return cy.get(this._selectors.selector);
    }

    public addButton(): DefaultCypressChainable {
        return cy.get(this._selectors.addButton());
    }

    public cancelButton(): DefaultCypressChainable {
        return cy.get(this._selectors.cancelButton());
    }

    public confirmButton(): DefaultCypressChainable {
        return cy.get(this._selectors.confirmButton());
    }
}
