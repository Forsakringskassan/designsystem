import {
    FWizardStepPageobject,
    FFieldsetPageObject,
    FTextFieldPageObject,
} from "@fkui/vue/cypress";

export enum FRUIT {
    banana = ".checkbox:nth(0)",
    apple = ".checkbox:nth(1)",
    mandarin = ".checkbox:nth(2)",
    pineapple = ".checkbox:nth(3)",
    watermelon = ".checkbox:nth(4)",
    other = ".checkbox:nth(5)",
}

export class FruitBasketWizardStepPageobject extends FWizardStepPageobject {
    public nameOnGiftcard: FTextFieldPageObject;
    public fruits: FFieldsetPageObject;
    public constructor(selector: string) {
        super(selector);

        this.nameOnGiftcard = new FTextFieldPageObject(
            `${this.selector} .text-field`,
        );
        this.fruits = new FFieldsetPageObject(
            `${this.selector} [id="frukt-checkbox-group"]`,
        );
    }
}
