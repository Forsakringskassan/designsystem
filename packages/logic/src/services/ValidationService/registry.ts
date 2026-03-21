import { type Validator } from "./validator";

/**
 * Registered validators.
 *
 * @internal
 */
export const registry: Record<string, Validator<unknown>> = {};
