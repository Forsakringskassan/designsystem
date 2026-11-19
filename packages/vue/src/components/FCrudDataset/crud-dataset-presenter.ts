import {
    type InjectionKey,
    type MaybeRefOrGetter,
    inject,
    onBeforeUnmount,
} from "vue";

/**
 * Hooks for a component presenting the items of a `FCrudDataset`, e.g. a
 * list or table, letting it handle focus and nested items.
 *
 * @public
 */
export interface FCrudDatasetPresenter<T> {
    /**
     * Property holding nested items. When set, nested items (at any depth)
     * can be removed.
     */
    nestedKey?: MaybeRefOrGetter<keyof T | null | undefined>;

    /**
     * Called after an item has been created, e.g. to activate it.
     */
    afterCreate?(item: T): void;

    /**
     * Called when an item is deleted, e.g. to move focus to a nearby item.
     * Must call `commit()` synchronously to actually delete the item.
     */
    handleDelete?(item: T, commit: () => void): void;
}

/**
 * Provided by `FCrudDataset`. Registers a presenter and returns a function
 * unregistering it.
 *
 * @internal
 */
export const crudDatasetPresenterKey: InjectionKey<
    (presenter: FCrudDatasetPresenter<unknown>) => () => void
> = Symbol("FCrudDataset:presenter");

/**
 * Registers the calling component as presenter of the closest
 * `FCrudDataset`. Does nothing when not used inside a `FCrudDataset`.
 *
 * The presenter is unregistered when the component is unmounted.
 *
 * @public
 */
export function useCrudDatasetPresenter<T>(
    presenter: FCrudDatasetPresenter<T>,
): void {
    const register = inject(crudDatasetPresenterKey, undefined);
    if (!register) {
        return;
    }

    const unregister = register(presenter as FCrudDatasetPresenter<unknown>);
    onBeforeUnmount(unregister);
}
