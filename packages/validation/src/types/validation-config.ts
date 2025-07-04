import { type ValidatorTypeMapping } from "../type-mapping";

/**
 * @public
 */
export interface ValidatorCommonConfig {
    enabled?: boolean;
    errorMessage?: string;
}

/**
 * @internal
 */
export interface NormalizedValidatorCommonConfig {
    enabled: boolean;
    errorMessage?: string;
}

/**
 * @public
 */
export type ValidatorConfig<K extends keyof ValidatorTypeMapping> =
    ValidatorTypeMapping[K]["config"] extends never
        ? ValidatorCommonConfig
        : ValidatorCommonConfig & ValidatorTypeMapping[K]["config"];

/**
 * @internal
 */
export type NormalizedValidatorConfig<K extends keyof ValidatorTypeMapping> =
    ValidatorTypeMapping[K]["config"] extends never
        ? NormalizedValidatorCommonConfig
        : NormalizedValidatorCommonConfig & ValidatorTypeMapping[K]["config"];

/**
 * An object containing optional configuration for each validator.
 *
 * @public
 */
export type ValidatorConfigMapping = {
    readonly [K in keyof ValidatorTypeMapping]?: ValidatorConfig<K>;
};

/**
 * @internal
 */
export type NormalizedValidatorConfigMapping = {
    readonly [K in keyof ValidatorTypeMapping]?: NormalizedValidatorConfig<K>;
};
