import { isReactive, reactive, watch } from "vue";

const symbol = Symbol("row-meta");

/**
 * @public
 */
export type ReactiveDataset<T> = T[] & {
    __FKUI_VUE_REACTIVE_DATASET: true;
};

/**
 * WAI-ARIA data for a row of an array.
 *
 * Set by `reactiveDataset()` and retrieved with `getRowAriaData()`.
 *
 * @public
 */
export interface RowAriaData {
    /** index of the row (1-based), for usage with `aria-rowindex` */
    readonly ariaRowIndex: number;
    /** level (or depth) of the item in a hierarcial grid (1-based), for usage with `aria-label` */
    readonly ariaLevel: number;
    /** total number of items in this set of data, for usage with `aria-setsize` */
    readonly ariaSetSize: number;
    /** current index of item in this set of data, for usage with `aria-posinset` */
    readonly ariaPosInSet: number;
}

function* enumerate<T>(
    it: Iterable<T>,
): Generator<[index: number, value: T], void> {
    let i = 0;
    for (const item of it) {
        yield [i++, item];
    }
}

function* flat<T>(
    it: T[],
    nestedAttribute: keyof T | undefined,
    level = 1,
): Generator<
    { item: T; level: number; setSize: number; posinset: number },
    void
> {
    for (const [index, item] of enumerate(it)) {
        yield { item, level, setSize: it.length, posinset: index };
        const nested = nestedAttribute ? item[nestedAttribute] : undefined;
        if (Array.isArray(nested)) {
            /* technical debt, here be dragons: as we have never properly
             * asserted the type of `T[nestedAttribute]`, however, as we don't
             * really access anything it "should" be fine */
            yield* flat(nested, nestedAttribute, level + 1);
        }
    }
}

function updateRowAriaData<T>(
    array: T[],
    nestedAttribute: keyof T | undefined,
): void {
    for (const [index, it] of enumerate(flat(array, nestedAttribute))) {
        const value: RowAriaData = {
            ariaRowIndex: index + 1,
            ariaLevel: it.level,
            ariaSetSize: it.setSize,
            ariaPosInSet: it.posinset + 1,
        };
        Object.defineProperty(it.item, symbol, {
            value,
            enumerable: false,

            /* technical debt: this should be false to prevent modification
             * after set, but the `deepClone` from `@fkui/logic` (based on
             * `cloneDeep` from `lodash`) copies but does not preserve
             * enumerable attribute causing components such as `FCrudDataset` to
             * fail. */
            writable: true,
        });
    }
}

/**
 * Create a reactive dataset with ARIA properties.
 *
 * @public
 */
export function reactiveDataset<T>(
    array: T[],
    nestedAttribute?: keyof T,
): ReactiveDataset<T> {
    const reactiveArray = isReactive(array) ? array : (reactive(array) as T[]);
    watch(reactiveArray, () => {
        updateRowAriaData(reactiveArray, nestedAttribute);
    });
    updateRowAriaData(reactiveArray, nestedAttribute);
    Object.defineProperty(reactiveArray, "__FKUI_VUE_REACTIVE_DATASET", {
        value: true,
        enumerable: false,
        writable: true,
    });
    return reactiveArray as ReactiveDataset<T>;
}

export function isReactiveDataset<T>(value: T[]): value is ReactiveDataset<T> {
    return Object.prototype.hasOwnProperty.call(
        value,
        "__FKUI_VUE_REACTIVE_DATASET",
    );
}

/**
 * Retrieve row ARIA data for a specific row.
 *
 * Must have called `reactiveDataset()` on the array containing this row.
 *
 * @public
 */
export function getRowAriaData(item: unknown): RowAriaData {
    const maybeRowMeta = item as { [symbol]?: RowAriaData };
    const value = maybeRowMeta[symbol];
    if (!value) {
        throw new Error("trying to get row meta before row meta was created");
    }
    return value;
}
