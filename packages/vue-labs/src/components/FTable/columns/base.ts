import { type Ref } from "vue";

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
