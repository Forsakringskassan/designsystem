import { registerValidator } from "./registry";
import { type ValidatorName } from "./type-mapping";
import { type UntypedValidator } from "./untyped-validator";
import { type Validator } from "./validator";

/**
 * @public
 */
export function defineValidator<K extends ValidatorName, TValue, TModel>(
    name: K,
    definition: Omit<Validator<K, TValue, TModel>, "name">,
): Validator<K, TValue, TModel> {
    const validator = { name, ...definition };
    registerValidator(validator as UntypedValidator);
    return validator;
}
