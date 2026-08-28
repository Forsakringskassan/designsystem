import { type MaybeRef, type Ref, ref, toRef } from "vue";
import { getSortable } from "./helpers/get-sortable";

/**
 * @public
 */
export type TableColumnSize = "grow" | "shrink";

/**
 * Base properties shared by all table column types.
 *
 * @public
 */
export interface TableColumnBase<T> {
    /** Column header */
    header: string | Readonly<Ref<string>>;
    /** Format description (shown in header) */
    description?: string | Readonly<Ref<string | null>>;
    /**
     * Column size, can be one of:
     *
     * - `"grow"`: the column occupies as much space as it can.
     * - `"shrink"`: the column occupies as little space as it can.
     *
     * Default: `"grow"`.
     **/
    size?: TableColumnSize | Readonly<Ref<TableColumnSize | null>>;
    sort?: boolean;
    /**
     * When enabled, the column is rendered. Set to `false` to hide the column
     * and its cells. Default: `true`.
     */
    enabled?: MaybeRef<boolean>;
    /**
     * Show cell content.
     *
     * A callback that can be used for hiding specific cells in the column.
     *
     * Default `() => true`.
     */
    visible?: (this: void, row: T) => boolean;
}

/**
 * Base properties shared by all normalized table column types.
 *
 * @internal
 */
export interface NormalizedTableColumnBase<T, K> {
    readonly id: symbol;
    readonly header: Readonly<Ref<string>>;
    readonly description: Readonly<Ref<string | null>>;
    readonly sortable: K | null;
    readonly size: Readonly<Ref<TableColumnSize | null>>;
    readonly enabled: MaybeRef<boolean>;
    readonly visible: (this: void, row: T) => boolean;
}

/**
 * Properties that are omitted from column-specific normalization functions
 * and added by the main normalizeTableColumn function.
 *
 * @internal
 */
export type OmittedNormalizedColumnProperties =
    | "id"
    | "header"
    | "description"
    | "sortable"
    | "size"
    | "component"
    | "enabled"
    | "visible";

/**
 * @internal
 */
export function normalizeBaseColumn<T, K = never>(
    column: TableColumnBase<T>,
): Pick<
    NormalizedTableColumnBase<T, K>,
    | "id"
    | "header"
    | "description"
    | "size"
    | "enabled"
    | "sortable"
    | "visible"
> {
    const id = Symbol();
    const header = toRef(column.header);
    const description =
        column.description !== undefined ? toRef(column.description) : ref("");
    const size: Readonly<Ref<TableColumnSize | null>> =
        column.size !== undefined ? toRef(column.size) : ref("grow");
    const sortable = getSortable<K>(column);

    return {
        id,
        header,
        description,
        sortable,
        size,
        enabled: column.enabled ?? true,
        visible: column.visible ?? (() => true),
    };
}
