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
): void {
    ValidationService.addValidatorsToElement(
        inputElement,
        inputFieldConfig[type].validationConfig,
        true,
    );
}
