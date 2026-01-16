import { ValidationService } from "@fkui/logic";

import {
    type InputTypeNumber,
    type InputTypeText,
    inputFieldConfig,
} from "./input-fields-config";

/** @internal */
export function addInputValidators(
    inputElement: HTMLInputElement,
    type: InputTypeText | InputTypeNumber,
    decimals?: number,
): void {
    ValidationService.addValidatorsToElement(
        inputElement,
        inputFieldConfig[type].validationConfig,
        true,
    );

    const options = decimals ? { decimals } : undefined;
    const attributes = inputFieldConfig[type].attributes(options);

    for (const { name, value } of attributes) {
        inputElement.setAttribute(name, value);
    }
}
