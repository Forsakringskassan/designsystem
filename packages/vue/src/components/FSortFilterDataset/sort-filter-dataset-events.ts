import { type InjectionKey, inject } from "vue";

/**
 * Temporary public export for `f-table` component while in vue-labs.
 *
 * @public
 * @since %version%
 */
export type SortFilterDatasetEventCallback = () => void;

/**
 * Temporary public export for `f-table` component while in vue-labs.
 *
 * @public
 * @since %version%
 */
export interface SortFilterDatasetEvents {
    onFilter(this: void, callback: SortFilterDatasetEventCallback): void;
    onSort(this: void, callback: SortFilterDatasetEventCallback): void;
    onLazyRowsAdded(this: void, callback: SortFilterDatasetEventCallback): void;
}

/**
 * Temporary public export for `f-table` component while in vue-labs.
 *
 * @public
 * @since %version%
 */
export const sortFilterDatasetEventsKey =
    Symbol() as InjectionKey<SortFilterDatasetEvents>;

/**
 * Injects `SortFilterDatasetEvents`.
 * Temporary public export for `f-table` component while in `vue-labs`.
 *
 * @public
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
