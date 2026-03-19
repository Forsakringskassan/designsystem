import { type Validator } from "./Validator";

/**
 * Registered validators.
 *
 * @internal
 */
export const registry: Record<string, Validator<unknown>> = {};
