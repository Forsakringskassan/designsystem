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
export interface TableColumnCheckbox<
    T,
    K extends keyof T,
> extends TableColumnBase {
    type: "checkbox";
    key?: K;
    label?(this: void, row: T): string;
    checked?(this: void, row: T): boolean;
    update?(this: void, row: T, newValue: boolean, oldValue: boolean): void;
    editable?: boolean | ((this: void, row: T) => boolean);
}

/**
 * @internal
 */
export interface NormalizedTableColumnCheckbox<
    T,
    K,
> extends NormalizedTableColumnBase<K> {
    readonly type: "checkbox";
    readonly component: Component<{
        row: T;
        column: NormalizedTableColumnCheckbox<T, K>;
    }>;
    label(this: void, row: T): string;
    checked(this: void, row: T): boolean | string;
    update(this: void, row: T, newValue: boolean, oldValue: boolean): void;
    editable(this: void, row: T): boolean;
}

/**
 * @internal
 */
export function normalizeCheckboxColumn<T, K extends keyof T>(
    column: TableColumnCheckbox<T, K>,
): Omit<
    NormalizedTableColumnCheckbox<T, K>,
    OmittedNormalizedColumnProperties
> {
    return {
        type: "checkbox",
        label: getLabelFn(column.label),
        checked: getValueFn(column.checked, column.key, Boolean, false),
        update: getUpdateFn(column.update, column.key),
        editable:
            typeof column.editable === "function"
                ? column.editable
                : () => Boolean(column.editable ?? false),
        sortable: column.key ?? null,
    };
}
