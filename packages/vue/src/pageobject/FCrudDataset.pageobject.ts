import { type DefaultCypressChainable, type BasePageObject } from "./common";
import { FValidationFormPageObject } from "./FValidationForm.pageobject";

/**
 * @public
 */
export class FCrudDatasetPageObject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;
    public form: FValidationFormPageObject;

    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(this.selector);
        // Modal is teleported so `this.selector` can't be used.
        this.form = new FValidationFormPageObject(`.modal__content form`);
    }

    public addButton(): DefaultCypressChainable {
        return cy.get(
            `${this.selector} [data-test="f-crud-dataset-add-button"]`,
        );
    }

    public cancelButton(): DefaultCypressChainable {
        // Modal is teleported so `this.selector` can't be used.
        return cy.get(`.modal__footer > .button-group > .button--secondary`);
    }

    public confirmButton(): DefaultCypressChainable {
        // Modal is teleported so `this.selector` can't be used.
        return cy.get(`.modal__footer > .button-group > .button--primary`);
    }
}
