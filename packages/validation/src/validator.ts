import { type ValidatorCode, type ValidatorName } from "./type-mapping";
import { type ValidatorContext } from "./validator-context";

/**
 * @public
 */
export type ValidatorResult<K extends ValidatorName> =
    ValidatorCode<K> extends never
        ? { valid: boolean }
        : { valid: boolean; code: ValidatorCode<K> };

/**
 * @public
 */
export type ViewValueValidatorCallback<K extends ValidatorName, T> = (
    this: ValidatorContext<K>,
    value: T | null | undefined,
) => ValidatorResult<K>;

/**
 * @public
 */
export type ModelValueValidatorCallback<K extends ValidatorName, T> = (
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
