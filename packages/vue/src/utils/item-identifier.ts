/**
 * Represents an item identifier used with `{get,set}ItemIdentifier()`.
 *
 * @public
 * @since %version%
 */
export type ItemIdentifier = string | number | symbol;

const sym = Symbol("item-identifier");
let internalIndex = 0;

function isObject(value: unknown): value is object {
    return Boolean(value && typeof value === "object");
}

/**
 * Do not use. This only exists for backwards compatibility.
 *
 * @public
 * @deprecated Use `getInternalKey(item)` instead.
 */
/* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters -- this should not be used */
export function getLegacyInternalKey<T>(): keyof T {
    return sym as keyof T;
}

/**
 * Get an identifier previously set by a call to `setItemIdentifier()` or `undefined`
 * if no identifier was set.
 *
 * @public
 * @since %version%
 * @param item - An item to get identifier from.
 */
export function findItemIdentifier(item: unknown): ItemIdentifier | undefined {
    if (isObject(item) && Object.prototype.hasOwnProperty.call(item, sym)) {
        return item[sym as keyof typeof item] as ItemIdentifier;
    } else {
        return undefined;
    }
}

/**
 * Get an identifier previously set by a call to `setItemIdentifier()` or throws an error
 * if no identifier was set.
 *
 * @public
 * @since %version%
 * @param item - An item to get key from.
 */
export function getItemIdentifier(item: unknown): ItemIdentifier {
    const identifier = findItemIdentifier(item);
    if (identifier !== undefined) {
        return identifier;
    } else {
        throw new TypeError(
            "Expected item to have an internal key but no key was set",
        );
    }
}

/**
 * Set or generate an identifier for given item. The identifier should be unique
 * within your set of data.
 *
 * If an identifier already exists it will *not* be overwritten.
 *
 * @public
 * @since %version%
 * @param item - An item to set the identifier on.
 * @param value - Specific identifier to use instead of generated one.
 */
export function setItemIdentifier(item: unknown, value?: ItemIdentifier): void {
    const existing = findItemIdentifier(item);
    if (existing !== undefined) {
        return;
    }

    Object.defineProperty(item, sym, {
        value: value ?? internalIndex++,
        enumerable: false,

        /* technical debt: this should be false to prevent modification after
         * set, but the `deepClone` from `@fkui/logic` (based on `cloneDeep`
         * from `lodash`) copies but does not preserve enumerable attribute
         * causing components such as `FCrudDataset` to fail. */
        writable: true,
    });
}

/**
 * Recursively assigns identifiers to items (and optionally to nested items).
 *
 * @public
 * @param items - The array of items to process. Items are mutated in place.
 * @param attribute - Optional property on each item whose value should be used as the identifier. If omitted, an identifier is generated.
 * @param expandableAttribute - Optional property key on each item whose value is expected to be an array of nested items to process recursively.
 *
 * @throws Error If an item is missing or has an invalid value for `attribute` when `attribute` is provided.
 * @throws Error If a duplicate `attribute` value is encountered when `attribute` is provided.
 * @returns The same `items` array (with items mutated to include identifiers).
 */
export function setItemIdentifiers<T>(
    items: T[],
    attribute?: keyof T,
    expandableAttribute?: keyof T,
): T[] {
    const seenValues = new Set<unknown>();
    const process = (items: T[]): T[] => {
        return items.map((item, index) => {
            const value = attribute ? item[attribute] : undefined;

            if (attribute) {
                ensureUniqueKey(attribute, value, index, seenValues);
            }

            setItemIdentifier(item, value as ItemIdentifier | undefined);

            if (expandableAttribute !== undefined) {
                const nestedItem = item[expandableAttribute];
                if (Array.isArray(nestedItem)) {
                    process(nestedItem);
                }
            }

            return item;
        });
    };
    return process(items);
}

function ensureUniqueKey(
    attribute: PropertyKey,
    value: unknown,
    index: number,
    seenValues: Set<unknown>,
): void {
    const keyString = String(attribute);
    const invalidValue =
        // eslint-disable-next-line @typescript-eslint/no-base-to-string -- technical debt
        value === undefined || value === null || String(value).length === 0;

    if (invalidValue) {
        throw new Error(
            `Key [${keyString}] is missing or has invalid value in item index ${String(index)}`,
        );
    }
    if (seenValues.has(value)) {
        throw new Error(
            /* eslint-disable-next-line @typescript-eslint/no-base-to-string -- technical debt */
            `Expected each item to have identifier [${keyString}] with unique value but encountered duplicate of "${String(value)}" in item index ${String(index)}.`,
        );
    }
    seenValues.add(value);
}

/**
 * For tests only.
 *
 * @internal
 */
export function resetGenerator(): void {
    internalIndex = 0;
}
