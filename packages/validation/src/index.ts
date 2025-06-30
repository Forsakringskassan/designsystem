import { type ConfigEvent, type UpdateEvent } from "./event";
import { componentStateSymbol, formStateSymbol } from "./state-symbol";
import { type ValidationState } from "./validation-state";
import "./validators";

export { defineValidator } from "./define-validator";
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
} from "./type-mapping";
export {
    type ValidatorContext,
    type TypedValidatorContext,
    type UntypedValidatorContext,
} from "./validator-context";
export { validateElement } from "./validate-element";
export {
    type ValidatorCommonConfig,
    type ValidatorConfig,
    type ValidatorConfigMapping,
} from "./types";
export { type ValidationResult } from "./validation-result";
export {
    type Validator,
    type ValidatorResult,
    type ModelValueValidatorCallback,
    type ViewValueValidatorCallback,
} from "./validator";
export {
    type ValidationDirective,
    type UseValidation,
    type UseValidationOptions,
    type ValidityModel,
    ValidationPlugin,
    useValidation,
    useValidationConfig,
} from "./vue";

declare global {
    interface HTMLElement {
        [componentStateSymbol]?: ValidationState<unknown, unknown>;
    }

    interface HTMLElementEventMap {
        "validation:config": ConfigEvent;
        "validation:update": UpdateEvent;
    }

    interface HTMLFormElement {
        [formStateSymbol]?: { submitted: boolean };
    }
}
