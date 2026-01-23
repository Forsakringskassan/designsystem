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
    editable?: boolean | ((this: void, row: T) => boolean);
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
    editable(this: void, row: T): boolean;
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
        editable:
            typeof column.editable === "function"
                ? column.editable
                : () => Boolean(column.editable ?? false),
        options: column.options,
        sortable: column.key ?? null,
    };
}
