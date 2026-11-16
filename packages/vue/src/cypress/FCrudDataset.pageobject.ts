import { FCrudDatasetSelectors } from "../selectors";
import { FModalPageObject } from "./FModal.pageobject";
import { FValidationFormPageObject } from "./FValidationForm.pageobject";
import { type BasePageObject, type DefaultCypressChainable } from "./common";

/**
 * @public
 */
export class FCrudDatasetPageObject implements BasePageObject {
    private _selectors: ReturnType<typeof FCrudDatasetSelectors>;
    public form: FValidationFormPageObject;

    /**
     * The add, modify or delete modal (only present while open).
     *
     * @since %version%
     */
    public modal: FModalPageObject;

    public constructor(selector = ".crud-dataset") {
        this._selectors = FCrudDatasetSelectors(selector);
        this.form = new FValidationFormPageObject(`${this.selector} form`);
        this.modal = new FModalPageObject(this._selectors.modal());
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
