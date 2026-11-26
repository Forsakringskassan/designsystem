import {
    FTextFieldPageObject,
    FValidationFormPageObject,
} from "../../../cypress";

import { FButtonSelectors, FLabelSelectors } from "../../../selectors";

export class ExamplePageobject extends FValidationFormPageObject {
    public readonly textField1: FTextFieldPageObject;
    public readonly textField2: FTextFieldPageObject;
    public readonly submitSelectors: ReturnType<typeof FButtonSelectors>;
    public readonly cancelSelectors: ReturnType<typeof FButtonSelectors>;

    public constructor(selector: string) {
        super(selector);
        this.selector = selector;

        this.textField1 = new FTextFieldPageObject(
            `${this.selector} [data-test=field1]`,
        );
        this.textField2 = new FTextFieldPageObject(
            `${this.selector} [data-test=field2]`,
        );
        this.submitSelectors = FButtonSelectors(
            `${this.selector} [data-test=submit-button]`,
        );
        this.cancelSelectors = FButtonSelectors(
            `${this.selector} [data-test=cancel-button]`,
        );
    }

    public firstTextFieldLabelSelectors(): ReturnType<typeof FLabelSelectors> {
        return FLabelSelectors(this.textField1.label.selector);
    }

    public secondTextFieldLabelSelectors(): ReturnType<typeof FLabelSelectors> {
        return FLabelSelectors(this.textField2.label.selector);
    }
}
