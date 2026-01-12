/** @internal */
export const internalKey = Symbol("internal-key");
let internalIndex = 0;

/** @public */
/* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters -- technical debt, this is a weird one */
export function getInternalKey<T>(): keyof T {
    return internalKey as keyof T;
}

/** @internal */
/* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters -- technical debt, this is a weird one */
export function setInternalKey<T>(item: T, value?: string): void {
    if (item[internalKey as keyof T]) {
        return;
    }

    Object.defineProperty(item, internalKey, {
        value: value ?? String(internalIndex++),
        enumerable: false,
        writable: true,
    });
}

/**
 * Recursively assigns internal keys to items (and optionally to nested item arrays).
 *
 * @public
 * @param items - The array of items to process. Items are mutated in place.
 * @param keyAttribute - Optional property key on each item whose value should be used as the internal key. If omitted, an internal key is generated.
 * @param expandableAttribute - Optional property key on each item whose value is expected to be an array of nested items to process recursively.
 *
 * @throws Error If an item is missing or has an invalid value for `key` when `key` is provided.
 * @throws Error If a duplicate `key` value is encountered when `key` is provided.
 * @returns The same `items` array (with items mutated to include internal keys).
 */
export function setInternalKeys<T>(
    items: T[],
    keyAttribute?: keyof T,
    expandableAttribute?: keyof T,
    seenValues = new Set<unknown>(),
): T[] {
    if (keyAttribute === undefined) {
        return items.map((item) => {
            setInternalKey(item);

            if (expandableAttribute !== undefined) {
                const nestedItem = item[expandableAttribute];
                if (Array.isArray(nestedItem)) {
                    setInternalKeys(nestedItem);
                }
            }

            return item;
        });
    }

    return items.map((item, index) => {
        const value = item[keyAttribute] as unknown;
        const keyString = String(keyAttribute);
        const invalidValue =
            /* eslint-disable-next-line @typescript-eslint/no-base-to-string -- ok since we only test if the string is empty */
            value === undefined || value === null || String(value).length === 0;

        if (invalidValue) {
            throw new Error(
                `Key [${keyString}] is missing or has invalid value in item index ${String(index)}`,
            );
        }
        if (seenValues.has(value)) {
            throw new Error(
                /* eslint-disable-next-line @typescript-eslint/no-base-to-string -- technical debt */
                `Expected each item to have key [${keyString}] with unique value but encountered duplicate of "${String(value)}" in item index ${String(index)}.`,
            );
        }

        /* eslint-disable-next-line @typescript-eslint/no-base-to-string -- technical debt */
        setInternalKey(item, String(value));
        seenValues.add(value);

        if (expandableAttribute !== undefined) {
            const nestedItem = item[expandableAttribute];
            if (Array.isArray(nestedItem)) {
                setInternalKeys(
                    nestedItem,
                    keyAttribute,
                    undefined,
                    seenValues,
                );
            }
        }

        return item;
    });
}
