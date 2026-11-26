import { type InjectionKey, inject } from "vue";

/**
 * @internal
 * @since v6.44.0
 */
export type SortFilterDatasetEventCallback = () => void;

/**
 * @internal
 * @since v6.44.0
 */
export interface SortFilterDatasetEvents {
    onFilter(this: void, callback: SortFilterDatasetEventCallback): void;
    onSort(this: void, callback: SortFilterDatasetEventCallback): void;
    onLazyRowsAdded(this: void, callback: SortFilterDatasetEventCallback): void;
}

/**
 * @internal
 * @since v6.44.0
 */
export const sortFilterDatasetEventsKey =
    Symbol() as InjectionKey<SortFilterDatasetEvents>;

/**
 * Injects `SortFilterDatasetEvents`.
 *
 * @internal
 * @since v6.44.0
 */
export function useSortFilterDatasetEvents(): SortFilterDatasetEvents {
    const defaultEvents: SortFilterDatasetEvents = {
        onFilter: () => undefined,
        onSort: () => undefined,
        onLazyRowsAdded: () => undefined,
    };

    return inject(sortFilterDatasetEventsKey, defaultEvents);
}
