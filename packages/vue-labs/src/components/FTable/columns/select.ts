import { type Component } from "vue";
import {
    type NormalizedTableColumnBase,
    type OmittedNormalizedColumnProperties,
    type TableColumnBase,
} from "./base";
import { getLabelFn, getUpdateFn, getValueFn } from "./helpers";

/**
 * @public
 */
export interface TableColumnSelect<
    T,
    K extends keyof T,
> extends TableColumnBase {
    type: "select";
    key?: K;
    label?(this: void, row: T): string;
    selected?(this: void, row: T): string;
    update?(this: void, row: T, newValue: string, oldValue: string): void;
    options: string[];
}

/**
 * @internal
 */
export interface NormalizedTableColumnSelect<
    T,
    K,
> extends NormalizedTableColumnBase<K> {
    readonly type: "select";
    readonly options: string[];
    readonly component: Component<{
        row: T;
        column: NormalizedTableColumnSelect<T, K>;
    }>;
    label(this: void, row: T): string;
    selected(this: void, row: T): string;
    update(this: void, row: T, newValue: string, oldValue: string): void;
}

/**
 * @internal
 */
export function normalizeSelectColumn<T, K extends keyof T>(
    column: TableColumnSelect<T, K>,
): Omit<NormalizedTableColumnSelect<T, K>, OmittedNormalizedColumnProperties> {
    return {
        type: "select",
        label: getLabelFn(column.label),
        selected: getValueFn(column.selected, column.key, String, ""),
        update: getUpdateFn(column.update, column.key),
        options: column.options,
    };
}
