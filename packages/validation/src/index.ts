import { componentStateSymbol, formStateSymbol } from "./state-symbol";
import { type ValidationState } from "./validation-state";
import "./validators";

export {
    type EnableValidationOptions,
    type EnableValidationOptionsParsed,
    type EnableValidationOptionsSimple,
    enableValidation,
} from "./enable-validation";
export { addValidatorsToElement } from "./add-validators-to-element";
export { addErrorMessages } from "./error-messages";
export { setFormSubmitted, resetFormSubmitted } from "./form-submitted";
export { type ValidatorTypeMapping } from "./type-mapping";
export { type UpdateEvent, type UpdateEventDetails } from "./update-event";
export { validateElement } from "./validate-element";
export {
    type ValidationCommonConfig,
    type ValidationConfig,
} from "./validation-config";
export { type ValidationResult } from "./validation-result";

declare global {
    interface HTMLElement {
        [componentStateSymbol]?: ValidationState<unknown, unknown>;
    }

    interface HTMLFormElement {
        [formStateSymbol]?: { submitted: boolean };
    }
}
