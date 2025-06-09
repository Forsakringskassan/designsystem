import { ConfigEvent, UpdateEvent } from "./event";
import { componentStateSymbol, formStateSymbol } from "./state-symbol";
import {
    type PlaceholderState,
    type ValidationState,
} from "./validation-state";
import "./validators";

export {
    type EnableValidationOptions,
    type EnableValidationOptionsParsed,
    type EnableValidationOptionsSimple,
    enableValidation,
} from "./enable-validation";
export {
    type ConfigEvent,
    type ConfigEventDetails,
    type UpdateEvent,
    type UpdateEventDetails,
} from "./event";
export { addValidatorsToElement } from "./add-validators-to-element";
export { addErrorMessages } from "./error-messages";
export { setFormSubmitted, resetFormSubmitted } from "./form-submitted";
export { type ValidatorTypeMapping } from "./type-mapping";
export { validateElement } from "./validate-element";
export {
    type ValidationCommonConfig,
    type ValidationConfig,
} from "./validation-config";
export { type ValidationResult } from "./validation-result";

declare global {
    interface HTMLElement {
        [componentStateSymbol]?:
            | ValidationState<unknown, unknown>
            | PlaceholderState;
    }

    interface HTMLElementEventMap {
        "validation:config": ConfigEvent;
        "validation:update": UpdateEvent;
    }

    interface HTMLFormElement {
        [formStateSymbol]?: { submitted: boolean };
    }
}
