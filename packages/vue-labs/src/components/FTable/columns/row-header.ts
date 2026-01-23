import { type Component } from "vue";
import {
    type NormalizedTableColumnBase,
    type OmittedNormalizedColumnProperties,
    type TableColumnBase,
} from "./base";
import { getValueFn } from "./helpers";

/**
 * @public
 */
export interface TableColumnRowHeader<
    T,
    K extends keyof T,
> extends TableColumnBase {
    type: "rowheader";
    key?: K;
    text?(this: void, row: T): string;
}

/**
 * @internal
 */
export interface NormalizedTableColumnRowHeader<
    T,
    K,
> extends NormalizedTableColumnBase<K> {
    readonly type: "rowheader";
    readonly component: Component<{
        row: T;
        column: NormalizedTableColumnRowHeader<T, K>;
    }>;
    text(this: void, row: T): string;
}

/**
 * @internal
 */
export function normalizeRowHeaderColumn<T, K extends keyof T>(
    column: TableColumnRowHeader<T, K>,
): Omit<
    NormalizedTableColumnRowHeader<T, K>,
    OmittedNormalizedColumnProperties
> {
    return {
        type: "rowheader",
        text: getValueFn(column.text, column.key, String, ""),
        sortable: column.key ?? null,
    };
}
