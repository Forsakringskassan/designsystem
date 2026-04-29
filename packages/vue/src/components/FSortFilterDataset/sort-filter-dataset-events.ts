import { type InjectionKey, inject } from "vue";

/**
 * @internal
 * @since %version%
 */
export type SortFilterDatasetEventCallback = () => void;

/**
 * @internal
 * @since %version%
 */
export interface SortFilterDatasetEvents {
    onFilter(this: void, callback: SortFilterDatasetEventCallback): void;
    onSort(this: void, callback: SortFilterDatasetEventCallback): void;
    onLazyRowsAdded(this: void, callback: SortFilterDatasetEventCallback): void;
}

/**
 * @internal
 * @since %version%
 */
export const sortFilterDatasetEventsKey =
    Symbol() as InjectionKey<SortFilterDatasetEvents>;

/**
 * Injects `SortFilterDatasetEvents`.
 *
 * @internal
 * @since %version%
 */
export function useSortFilterDatasetEvents(): SortFilterDatasetEvents {
    const defaultEvents: SortFilterDatasetEvents = {
        onFilter: () => undefined,
        onSort: () => undefined,
        onLazyRowsAdded: () => undefined,
    };

    return inject(sortFilterDatasetEventsKey, defaultEvents);
}
