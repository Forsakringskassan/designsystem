import {
    type DefaultCypressChainable,
    FWizardStepPageobject,
} from "../../../packages/vue/pageobject";

export class MyOrderWizardStepPageobject extends FWizardStepPageobject {
    public addBasket: () => DefaultCypressChainable;
    public constructor(selector: string) {
        super(selector);

        this.addBasket = () =>
            cy.get(`${this.selector} button.button--discrete`);
    }
}
