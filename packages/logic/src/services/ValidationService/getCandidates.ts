import { ValidatorName } from "./Validator";

/**
 * Returns validation error message candidates in prioritized order.
 *
 * @internal
 */
export function getCandidates(
    validatorName: ValidatorName,
    validators: Array<{ name: ValidatorName }>,
    elementType?: "text" | "radio" | "checkbox" | "select" | "textarea",
): string[] {
    const candidates: string[] = [];
    const combinedNames = validators.map((it) => `${validatorName}.${it.name}`);

    if (elementType) {
        const combinedNamesWithType = combinedNames.map(
            (it) => `${it}.${elementType}`,
        );
        candidates.push(...combinedNamesWithType);
    }

    candidates.push(...combinedNames);

    if (elementType) {
        candidates.push(`${validatorName}.${elementType}`);
    }

    candidates.push(validatorName);

    return candidates;
}
