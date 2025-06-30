import { type ConfigEventDetails } from "./event";
import { getValidatorByName } from "./registry";
import { componentStateSymbol } from "./state-symbol";
import { type ValidatorTypeMapping } from "./type-mapping";
import { type ValidationConfig } from "./validation-config";
import {
    type PlaceholderState,
    type ValidationState,
} from "./validation-state";

const eventName = "validation:config";

function configFromState(
    state: ValidationState<unknown, unknown> | PlaceholderState,
): {
    [K in keyof ValidatorTypeMapping]?: ValidationConfig<K>;
} {
    const { validators } = state;
    const entries = validators.map(([validator, config]) => [
        validator.name,
        config,
    ]);
    return Object.fromEntries(entries);
}

function dispatchConfigEvent(
    element: HTMLElement,
    state: ValidationState<unknown, unknown> | PlaceholderState,
): void {
    const config = configFromState(state);
    const event = new CustomEvent<ConfigEventDetails>(eventName, {
        detail: config,
    });
    element.dispatchEvent(event);
}

/**
 * @public
 */
export function configureValidation(
    element: HTMLElement,
    config: {
        [K in keyof ValidatorTypeMapping]?: ValidationConfig<K>;
    },
): void {
    let state = element[componentStateSymbol];
    if (!state) {
        const placeholder: PlaceholderState = {
            placeholder: true,
            validators: [],
        };
        state = placeholder;
        element[componentStateSymbol] = state;
    }
    state.validators = [];
    for (const [name, v] of Object.entries(config)) {
        const validator = getValidatorByName(name);
        state.validators.push([validator, v]);
    }
    dispatchConfigEvent(element, state);
}
