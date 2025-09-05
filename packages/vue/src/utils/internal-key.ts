/** @internal */
export const internalKey = Symbol("internal-key");
let internalIndex = 0;

/** @public */
export function getInternalKey<T>(): keyof T {
    return internalKey as keyof T;
}

/** @internal */
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

/** @public */
export function setInternalKeys<T>(
    items: T[],
    key?: keyof T,
    nestedKey?: keyof T,
    seenValues = new Set<unknown>(),
): T[] {
    if (key === undefined) {
        return items.map((item) => {
            setInternalKey(item);

            if (nestedKey !== undefined) {
                const nestedItem = item[nestedKey];
                if (Array.isArray(nestedItem)) {
                    setInternalKeys(nestedItem);
                }
            }

            return item;
        });
    }

    return items.map((item, index) => {
        const value = item[key];
        const keyString = String(key);
        const invalidValue =
            value === undefined || value === null || String(value).length === 0;

        if (invalidValue) {
            throw new Error(
                `Key [${keyString}] is missing or has invalid value in item index ${index}`,
            );
        }
        if (seenValues.has(value)) {
            throw new Error(
                `Expected each item to have key [${keyString}] with unique value but encountered duplicate of "${value}" in item index ${index}.`,
            );
        }

        setInternalKey(item, String(value));
        seenValues.add(value);

        if (nestedKey !== undefined) {
            const nestedItem = item[nestedKey];
            if (Array.isArray(nestedItem)) {
                setInternalKeys(nestedItem, key, undefined, seenValues);
            }
        }

        return item;
    });
}
