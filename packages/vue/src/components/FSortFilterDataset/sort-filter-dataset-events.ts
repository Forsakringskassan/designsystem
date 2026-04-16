import { type InjectionKey, inject } from "vue";

export type SortFilterDatasetEventCallback = () => void;

export interface SortFilterDatasetEvents {
    onRefresh(this: void, callback: SortFilterDatasetEventCallback): void;
    onLazyRowsAdded(this: void, callback: SortFilterDatasetEventCallback): void;
}

export const sortFilterDatasetEventsKey =
    Symbol() as InjectionKey<SortFilterDatasetEvents>;

export function useSortFilterDatasetEvents(): SortFilterDatasetEvents {
    const defaultEvents: SortFilterDatasetEvents = {
        onRefresh: () => undefined,
        onLazyRowsAdded: () => undefined,
    };

    return inject(sortFilterDatasetEventsKey, defaultEvents);
}
