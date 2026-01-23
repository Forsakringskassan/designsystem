import { type Ref, ref, toRef } from "vue";

/**
 * @public
 */
export type TableColumnSize = "grow" | "shrink";

/**
 * Base properties shared by all table column types.
 *
 * @public
 */
export interface TableColumnBase {
    header: string | Readonly<Ref<string>>;
    description?: string | Readonly<Ref<string | null>>;
    size?: TableColumnSize | Readonly<Ref<TableColumnSize | null>>;
}

/**
 * Base properties shared by all normalized table column types.
 *
 * @internal
 */
export interface NormalizedTableColumnBase<K> {
    readonly id: symbol;
    readonly header: Readonly<Ref<string>>;
    readonly description: Readonly<Ref<string | null>>;
    readonly sortable: K | null;
    readonly size: Readonly<Ref<TableColumnSize | null>>;
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
    | "size"
    | "component";

/**
 * @internal
 */
export function normalizeBaseColumn(
    column: TableColumnBase,
): Pick<
    NormalizedTableColumnBase<unknown>,
    Exclude<OmittedNormalizedColumnProperties, "component">
> {
    const id = Symbol();
    const header = toRef(column.header);
    const description =
        typeof column.description !== "undefined"
            ? toRef(column.description)
            : ref("");
    const size: Readonly<Ref<TableColumnSize | null>> =
        typeof column.size !== "undefined" ? toRef(column.size) : ref("grow");

    return {
        id,
        header,
        description,
        size,
    };
}
