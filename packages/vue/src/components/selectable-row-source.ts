import { type InjectionKey, type Ref, inject, provide, ref } from "vue";

/**
 * * Temporary export for `f-table` component while in vue-labs.
 *
 * @public
 * @since %version%
 */
export interface SelectableRowSource {
    rows: Readonly<Ref<unknown[]>>;
    isProvided: Readonly<Ref<boolean>>;
}

/**
 * Temporary export for `f-table` component while in vue-labs.
 *
 * @public
 * @since %version%
 */
export interface SelectableRowSourceProvider {
    rows: Readonly<Ref<unknown[]>>;
}

const selectableRowsKey = Symbol("fTableSelectableRows") as InjectionKey<
    Readonly<Ref<unknown[]>>
>;
const selectableRowsProvidedKey = Symbol(
    "fTableSelectableRowsProvided",
) as InjectionKey<Readonly<Ref<boolean>>>;

/**
 * Injects `SelectableRowSource`.
 * Temporary export for `f-table` component while in `vue-labs`.
 *
 * @public
 * @since %version%
 */
export function useSelectableRowSource(): SelectableRowSource {
    const rows = inject(selectableRowsKey, ref([]));
    const isProvided = inject(selectableRowsProvidedKey, ref(false));

    return {
        rows,
        isProvided,
    };
}

/**
 * Provides `SelectableRowSource`.
 *
 * Contains information about selectable rows, injected by `f-table` in order to properly
 * handle selection state (checked, indeterminate, not checked) and selected rows cleanup.
 *
 * Will be put inside `f-table` folder when `f-table` is moved to this package.
 *
 * Internal until requested.
 *
 * @internal
 */
export function provideSelectableRowSource(
    options: SelectableRowSourceProvider,
): void {
    provide(selectableRowsKey, options.rows);
    provide(selectableRowsProvidedKey, ref(true));
}
