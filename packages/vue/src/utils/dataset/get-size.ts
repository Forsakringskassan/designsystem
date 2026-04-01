import { type DatasetNestedKeyOf } from "./dataset";

/**
 * @internal
 */
export function getSize<T extends object>(
    array: T[] | undefined,
    nestedAttribute: DatasetNestedKeyOf<T> | undefined,
): number {
    if (!Array.isArray(array)) {
        return 0;
    }
    if (nestedAttribute === undefined) {
        return array.length;
    }
    return array.reduce((sum, item) => {
        const nested = item[nestedAttribute] as T[] | undefined;
        return sum + getSize(nested, nestedAttribute);
    }, array.length);
}
