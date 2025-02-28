export const internalKey = Symbol("table-key");
let internalIndex = 0;

export function getInternalKey<T>(): keyof T {
    return internalKey as keyof T;
}

export function setInternalKey<T extends object>(
    item: T,
    value?: string,
): void {
    if (item[internalKey as keyof T]) {
        return;
    }

    Object.defineProperty(item, internalKey, {
        value: value ?? String(internalIndex++),
        enumerable: false,
    });
}

export function setInternalKeys<T extends object>(
    items: T[],
    key?: keyof T,
): T[] {
    if (key === undefined) {
        return items.map((item) => {
            setInternalKey(item);
            return item;
        });
    }

    const seenValues: Set<unknown> = new Set<unknown>();

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

        return item;
    });
}
