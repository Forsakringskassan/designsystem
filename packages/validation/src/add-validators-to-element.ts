import { getValidatorByName } from "./registry";
import { componentStateSymbol } from "./state-symbol";
import { type ValidatorTypeMapping } from "./type-mapping";
import { ValidationConfig } from "./validation-config";

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
}
