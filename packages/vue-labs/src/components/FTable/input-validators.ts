import { ValidationService } from "@fkui/logic";

import {
    type InputAttribute,
    type InputTypeNumber,
    type InputTypeText,
    inputFieldConfig,
} from "./input-fields-config";

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
    inputFieldConfig[type]
        .attributes(options)
        .forEach((attribute: InputAttribute) => {
            inputElement.setAttribute(attribute.name, attribute.value);
        });

    ValidationService.validateElement(inputElement);
}
