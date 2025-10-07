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
        const value = item[key] as unknown;
        const keyString = String(key);
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

        if (nestedKey !== undefined) {
            const nestedItem = item[nestedKey];
            if (Array.isArray(nestedItem)) {
                setInternalKeys(nestedItem, key, undefined, seenValues);
            }
        }

        return item;
    });
}
