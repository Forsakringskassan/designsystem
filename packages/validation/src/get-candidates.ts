import { type ValidatorName } from "./type-mapping";

/**
 * Returns validation error message candidates in prioritized order.
 *
 * @internal
 */
export function getCandidates(
    validator: { name: string; code: string | undefined },
    validators: ValidatorName[],
    component: string | undefined,
): string[] {
    const candidates: string[] = [];
    const combinedNames = validators.map((it) => `${validator.name}.${it}`);

    if (component) {
        const combinedNamesWithType = combinedNames.map(
            (it) => `${it}.${component}`,
        );
        candidates.push(...combinedNamesWithType);
    }

    candidates.push(...combinedNames);

    if (component) {
        candidates.push(`${validator.name}.${component}`);
    }

    candidates.push(validator.name);

    return candidates;
}
