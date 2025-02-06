import {
    FRadioGroupPageObject,
    FRadioFieldPageObject,
    FTextFieldPageObject,
    type DefaultCypressChainable,
} from "../../../cypress";

export class OptimizationExamplePageobject {
    public valRadioGroup: FRadioGroupPageObject;
    public fruktRadioGroupField: FRadioFieldPageObject;
    public godisRadioGroupField: FRadioFieldPageObject;
    public fruktTextfield: FTextFieldPageObject;
    public godisTextfield: FTextFieldPageObject;
    public favoritGruppIsValid: () => DefaultCypressChainable;
    public favoritGruppErrorCount: () => DefaultCypressChainable;

    public constructor() {
        this.valRadioGroup = new FRadioGroupPageObject('[data-test="val"]');
        this.fruktRadioGroupField = this.valRadioGroup.radioButton(
            '[data-test="val-frukt"]',
        );
        this.godisRadioGroupField = this.valRadioGroup.radioButton(
            '[data-test="val-godis"]',
        );
        this.fruktTextfield = new FTextFieldPageObject('[data-test="frukt"]');
        this.godisTextfield = new FTextFieldPageObject('[data-test="godis"]');
        this.favoritGruppIsValid = () =>
            cy.get('[data-test="favorit-grupp-is-valid"]');
        this.favoritGruppErrorCount = () =>
            cy.get('[data-test="favorit-grupp-error-count"]');
    }
}
