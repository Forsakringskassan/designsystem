import { type ValidatorTypeMapping } from "../type-mapping";

/**
 * @public
 */
export interface ValidatorCommonConfig {
    enabled?: boolean;
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
 * An object containing optional configuration for each validator.
 *
 * @public
 */
export type ValidatorConfigMapping = {
    readonly [K in keyof ValidatorTypeMapping]?: ValidatorConfig<K>;
};
