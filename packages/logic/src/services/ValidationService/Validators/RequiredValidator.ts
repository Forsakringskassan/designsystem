import { type Validator } from "../Validator";
import { isRadiobuttonOrCheckbox } from "../../../dom";

const REQUIRED_REGEXP = /^\S+/;

function isRelevantElement(input: Element): input is HTMLInputElement {
    return isRadiobuttonOrCheckbox(input) && !input.disabled;
}

function validateFieldset(fieldset: HTMLFieldSetElement): boolean {
    const inputs = Array.from(fieldset.elements).filter(isRelevantElement);
    return inputs.length > 0 ? inputs.some((input) => input.checked) : true;
}

function validateChecked(element: HTMLInputElement): boolean {
    return element.checked;
}

function validateInput(value: string): boolean {
    return REQUIRED_REGEXP.test(value);
}

export const requiredValidator: Validator = {
    name: "required",
    validation(value, element) {
        if (element instanceof HTMLFieldSetElement) {
            return validateFieldset(element);
        } else if (isRadiobuttonOrCheckbox(element)) {
            return validateChecked(element);
        } else {
            return validateInput(value);
        }
    },
};
