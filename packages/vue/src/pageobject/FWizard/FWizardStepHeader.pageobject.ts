import { type BasePageObject, type DefaultCypressChainable } from "../common";

/**
 * pageobject for the header part of the FWizardStep component
 *
 * @public
 * @param selector - CSS seletor to the FWizardStepHeader object
 */
export class FWizardStepHeaderPageobject implements BasePageObject {
    public selector: string;
    public el: () => DefaultCypressChainable;
    public successIcon: () => DefaultCypressChainable;
    public stepNumber: () => Cypress.Chainable<string>;
    public stepOf: () => DefaultCypressChainable;
    public title: () => DefaultCypressChainable;

    public constructor(selector: string) {
        this.selector = selector;
        this.el = () => cy.get(this.selector);

        this.successIcon = () =>
            cy.get(`${this.selector} .icon-stack .f-icon-success`);
        this.stepNumber = () =>
            cy.get(`${this.selector} [data-test="step-number"]`).invoke("text");
        this.stepOf = () =>
            cy.get(`${this.selector} .wizard-step__header__step-of`);
        this.title = () =>
            cy.get(`${this.selector} .wizard-step__header__title`);
    }
}
