/**
 * @public
 */
export function matchPropertyValue<T, K extends keyof T = keyof T>(
    property: K,
): (item: T, value: T[K] | null) => boolean {
    return (item, value) => {
        return value === null || item[property] === value;
    };
}
