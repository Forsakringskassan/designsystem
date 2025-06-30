import { type ValidatorName, type ValidatorTypeMapping } from "../type-mapping";
import {
    type NormalizedValidatorConfig,
    type NormalizedValidatorConfigMapping,
    type ValidatorConfigMapping,
} from "../types";

/**
 * @internal
 */
export function normalizeConfiguration(
    modifiers: Partial<Record<ValidatorName, boolean>>,
    config: ValidatorConfigMapping | undefined,
): NormalizedValidatorConfigMapping {
    const result: {
        [K in keyof ValidatorTypeMapping]?: NormalizedValidatorConfig<K>;
    } = {};
    for (const [name, enabled] of Object.entries(modifiers)) {
        if (!enabled) {
            continue;
        }
        const validatorName = name as ValidatorName;
        const validatorConfig = config?.[validatorName] ?? {};
        result[validatorName] = { enabled: true, ...validatorConfig };
    }
    return result;
}
