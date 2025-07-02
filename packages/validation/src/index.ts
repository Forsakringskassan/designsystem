export { configureValidation } from "./configure-validation";
export { defineValidator } from "./define-validator";
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
export { addErrorMessages } from "./error-messages";
export { setFormSubmitted, resetFormSubmitted } from "./form-submitted";
export {
    type ValidatorTypeMapping,
    type ValidatorName,
    type ValidatorCode,
    type ValidatorConfig,
} from "./type-mapping";
export {
    type ValidatorContext,
    type TypedValidatorContext,
    type UntypedValidatorContext,
} from "./validator-context";
export { validateElement } from "./validate-element";
export {
    getConfigFromElement,
    setConfigToElement,
    type ValidationCommonConfig,
    type ValidationConfig,
} from "./validation-config";
export { type ValidationResult } from "./validation-result";
export {
    type Validator,
    type ValidatorResult,
    type ModelValueValidatorCallback,
    type ViewValueValidatorCallback,
} from "./validator";
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
