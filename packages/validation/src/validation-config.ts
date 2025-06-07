import { type ValidatorTypeMapping } from "./type-mapping";

/**
 * @public
 */
export interface ValidationCommonConfig {
    enabled?: boolean;
    errorMessage?: string;
}

/**
 * @public
 */
export type ValidationConfig<K extends keyof ValidatorTypeMapping> =
    ValidatorTypeMapping[K]["config"] extends never
        ? ValidationCommonConfig
        : ValidationCommonConfig & ValidatorTypeMapping[K]["config"];
