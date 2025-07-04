import { ValidatorConfigMapping } from "../types";

/**
 * Key used to store validation-config.
 *
 * @internal
 */
export const validationConfigSymbol = Symbol("validation:config");

/**
 * Get validation config from element
 *
 * @public
 */
export function getConfigFromElement(
    element: HTMLElement | null,
): ValidatorConfigMapping | undefined {
    return element ? element[validationConfigSymbol] : undefined;
}

/**
 * Store validation config to element
 *
 * @public
 */
export function setConfigToElement(
    element: HTMLElement,
    config: ValidatorConfigMapping,
): void {
    element[validationConfigSymbol] = config;
}
