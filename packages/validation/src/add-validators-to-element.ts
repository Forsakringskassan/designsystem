import { type ConfigEventDetails } from "./event";
import { getValidatorByName } from "./registry";
import { componentStateSymbol } from "./state-symbol";
import { type ValidatorTypeMapping } from "./type-mapping";
import { type UntypedValidator } from "./untyped-validator";
import { ValidationConfig } from "./validation-config";

const eventName = "validation:config";

function dispatchConfigEvent(
    element: HTMLElement,
    validators: Array<[validator: UntypedValidator, config: unknown]>,
): void {
    const config = Object.fromEntries(validators.map(it => [it[0].name, it[1]]));
    const event = new CustomEvent<ConfigEventDetails>(eventName, {
        detail: config,
    });
    element.dispatchEvent(event);
}

/**
 * @public
 */
export function addValidatorsToElement(
    element: HTMLElement,
    config: {
        [K in keyof ValidatorTypeMapping]?: ValidationConfig<K>;
    },
): void {
    const state = element[componentStateSymbol];
    if (!state) {
        throw new Error("element is not validatable");
    }
    for (const [name, v] of Object.entries(config)) {
        const validator = getValidatorByName(name);
        state.validators.push([validator, v]);
    }
    console.log({ config });
    dispatchConfigEvent(element, state.validators);
}
