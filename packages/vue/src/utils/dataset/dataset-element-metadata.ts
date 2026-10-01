import { toRaw } from "vue";
import { datasetSymbol } from "./dataset";

/**
 * Metadata about a single element within a dataset.
 *
 * @public
 * @since v6.40.0
 */
export interface DatasetElementMetadata {
    /** Zero-based position of the element in the dataset. */
    readonly rowIndex: number;

    /** 1-based position of the element in the dataset. */
    readonly ariaRowIndex: number;

    /** 1-based depth of the element in a hierarchical dataset. */
    readonly ariaLevel: number;

    /** Total number of elements at the same level in a hierarchical dataset. */
    readonly ariaSetSize: number;

    /** Position among siblings in a hierarchical dataset. */
    readonly ariaPosInSet: number;
}

/**
 * Per-dataset storage for element metadata, keyed by element reference. Each
 * dataset lineage (created via `createDataset()`) owns its own store so that
 * an element reused across unrelated datasets does not share metadata
 * between them.
 *
 * @internal
 */
export type ElementMetadataStore = WeakMap<object, DatasetElementMetadata>;

/**
 * @internal
 */
export function createElementMetadataStore(): ElementMetadataStore {
    return new WeakMap();
}

/**
 * Stores `value` for `item` in `store` (scoped to the owning dataset) and,
 * as a best-effort fallback for callers that only have the element and not
 * its owning dataset (e.g. the public single-argument `getDatasetMetadata()`),
 * also stamps `value` directly on `item`.
 *
 * @internal
 */
export function setElementMetadata(
    store: ElementMetadataStore,
    item: object,
    value: DatasetElementMetadata,
): void {
    // `item` may be a reactive Proxy wrapping the real object (possibly one
    // of several Proxy layers depending on access path); normalize to the
    // raw object so the store always keys on a single, stable reference.
    const raw = toRaw(item);
    store.set(raw, value);
    Object.defineProperty(raw, datasetSymbol, {
        value,
        enumerable: false,
        configurable: true,
        writable: true,
    });
}
