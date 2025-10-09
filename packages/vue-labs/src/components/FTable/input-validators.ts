import { ValidationService } from "@fkui/logic";

import {
    inputFieldConfig,
    type InputType,
    type InputAttribute,
} from "./input-fields-config";

export function addSubtypeValidators(
    inputElement: HTMLInputElement,
    subtype: InputType,
    decimals?: number,
): void {
    ValidationService.addValidatorsToElement(
        inputElement,
        inputFieldConfig[subtype].validationConfig,
        true,
    );
    const options = decimals ? { decimals } : undefined;
    inputFieldConfig[subtype]
        .attributes(options)
        .forEach((attribute: InputAttribute) => {
            inputElement.setAttribute(attribute.name, attribute.value);
        });

    ValidationService.validateElement(inputElement);
}
