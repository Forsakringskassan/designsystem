import { ConfigEvent, UpdateEvent } from "./event";
import { componentStateSymbol, formStateSymbol } from "./state-symbol";
import { type ValidatorTypeMapping } from "./type-mapping";
import {
    type ValidationConfig,
    type validationConfigSymbol,
} from "./validation-config";
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
export { configureValidation } from "./configure-validation";
export { addErrorMessages } from "./error-messages";
export { setFormSubmitted, resetFormSubmitted } from "./form-submitted";
export { type ValidatorTypeMapping } from "./type-mapping";
export { validateElement } from "./validate-element";
export {
    getConfigFromElement,
    setConfigToElement,
    type ValidationCommonConfig,
    type ValidationConfig,
} from "./validation-config";
export { type ValidationResult } from "./validation-result";
export { ValidationPlugin } from "./plugins/ValidationPlugin";
declare global {
    interface HTMLElement {
        [componentStateSymbol]?:
            | ValidationState<unknown, unknown>
            | PlaceholderState;
        [validationConfigSymbol]?: {
            [K in keyof ValidatorTypeMapping]?: ValidationConfig<K>;
        };
    }

    interface HTMLElementEventMap {
        "validation:config": ConfigEvent;
        "validation:update": UpdateEvent;
    }

    interface HTMLFormElement {
        [formStateSymbol]?: { submitted: boolean };
    }
}
