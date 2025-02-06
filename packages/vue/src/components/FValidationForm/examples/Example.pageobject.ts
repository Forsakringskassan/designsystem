import {
    FValidationFormPageObject,
    type DefaultCypressChainable,
} from "../../../cypress";

export class ExamplePageobject extends FValidationFormPageObject {
    public constructor(selector: string) {
        super(selector);
        this.selector = selector;
    }
    public getFirstTextFieldInput(): DefaultCypressChainable {
        return cy.get(`${this.selector} #field1`);
    }

    public getSecondTextFieldInput(): DefaultCypressChainable {
        return cy.get(`${this.selector} #field2`);
    }

    public getSubmitButton(): DefaultCypressChainable {
        return cy.get(`${this.selector} [data-test=submit-button]`);
    }

    public getCancelButton(): DefaultCypressChainable {
        return cy.get(`${this.selector} [data-test=cancel-button]`);
    }
}
