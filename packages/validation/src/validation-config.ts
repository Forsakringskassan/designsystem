import { type ValidatorTypeMapping } from "./type-mapping";

/**
 * Key used to store validation-config.
 *
 * @internal
 */
export const validationConfigSymbol = Symbol("validation:config");

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

/**
 * Get validation config from element
 *
 * @public
 */
export function getConfigFromElement(element: HTMLElement):
    | {
          [K in keyof ValidatorTypeMapping]?: ValidationConfig<K>;
      }
    | undefined {
    return element[validationConfigSymbol];
}

/**
 * Store validation config to element
 *
 * @public
 */
export function setConfigToElement(
    element: HTMLElement,
    config: {
        [K in keyof ValidatorTypeMapping]?: ValidationConfig<K>;
    },
): void {
    element[validationConfigSymbol] = config;
}
