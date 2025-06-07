import { type ValidatorCode, type ValidatorName } from "./type-mapping";
import { type ValidatorContext } from "./validator-context";

type ValidatorResult<K extends ValidatorName> =
    ValidatorCode<K> extends never
        ? { valid: boolean }
        : { valid: boolean; code: ValidatorCode<K> };

type ViewValueValidatorCallback<K extends ValidatorName, T> = (
    this: ValidatorContext<K>,
    value: T | null | undefined,
) => ValidatorResult<K>;

type ModelValueValidatorCallback<K extends ValidatorName, T> = (
    this: ValidatorContext<K>,
    value: T,
) => ValidatorResult<K>;

/**
 * @public
 */
export interface Validator<K extends ValidatorName, TValue, TModel> {
    readonly name: K;
    validateViewValue?: ViewValueValidatorCallback<K, TValue>;
    validateModelValue?: ModelValueValidatorCallback<K, TModel>;
}
