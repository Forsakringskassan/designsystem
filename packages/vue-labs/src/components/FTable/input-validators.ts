import { ValidationService } from "@fkui/logic";

import {
    specializedInputFieldConfig,
    type InputType,
    type InputAttribute,
} from "./specialized-input-fields-config";

export function addSubtypeValidators(
    inputElement: HTMLInputElement,
    subtype: InputType,
    decimals?: number,
): void {
    ValidationService.addValidatorsToElement(
        inputElement,
        specializedInputFieldConfig[subtype].validationConfig,
        true,
    );
    const options = decimals ? { decimals } : undefined;
    specializedInputFieldConfig[subtype]
        .attributes(options)
        .forEach((attribute: InputAttribute) => {
            inputElement.setAttribute(attribute.name, attribute.value);
        });

    ValidationService.validateElement(inputElement);
}
