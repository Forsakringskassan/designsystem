/**
 * Returns validation error message candidates in prioritized order.
 *
 * @internal
 */
export function getCandidates(
    validator: { name: string; code: string | undefined },
    validators: Array<{ readonly name: string }>,
    component: string | undefined,
): string[] {
    const candidates: string[] = [];
    const combinedNames = validators.map(
        (it) => `${validator.name}.${it.name}`,
    );

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
