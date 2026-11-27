import { toRaw } from "vue";

/**
 * Removes `target` from `items`, or when `nestedKey` is given, from nested
 * arrays at any depth. The array holding the item is mutated, parent items
 * keep their identity.
 *
 * Items are compared as raw objects, so a reactive proxy matches its raw
 * object and vice versa.
 *
 * @internal
 * @returns `true` if the item was found and removed.
 */
export function removeNestedItem<T>(
    items: T[],
    target: T,
    nestedKey?: keyof T | null,
): boolean {
    return removeRaw(items, toRaw(target), nestedKey);
}

function removeRaw<T>(
    items: T[],
    rawTarget: T,
    nestedKey?: keyof T | null,
): boolean {
    const index = items.findIndex((item) => toRaw(item) === rawTarget);
    if (index !== -1) {
        items.splice(index, 1);
        return true;
    }

    if (!nestedKey) {
        return false;
    }

    for (const item of items) {
        const nestedItems: unknown = item[nestedKey];
        if (
            Array.isArray(nestedItems) &&
            removeRaw(nestedItems as T[], rawTarget, nestedKey)
        ) {
            return true;
        }
    }

    return false;
}
