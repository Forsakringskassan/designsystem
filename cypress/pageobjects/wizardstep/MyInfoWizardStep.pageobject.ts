import {
    type DefaultCypressChainable,
    FWizardStepPageobject,
} from "../../../packages/vue/pageobject";

export class MyInfoWizardStepPageobject extends FWizardStepPageobject {
    public myAddress: () => DefaultCypressChainable;
    public constructor(selector: string) {
        super(selector);
        this.myAddress = () => cy.get(`${this.selector} #baz-form > p`);
    }
}
