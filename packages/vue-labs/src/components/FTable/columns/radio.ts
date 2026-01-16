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
export interface TableColumnRadio<
    T,
    K extends keyof T,
> extends TableColumnBase {
    type: "radio";
    key?: K;
    label?(this: void, row: T): string;
    checked?(this: void, row: T): boolean;
    update?(this: void, row: T, newValue: boolean, oldValue: boolean): void;
}

/**
 * @internal
 */
export interface NormalizedTableColumnRadio<
    T,
    K,
> extends NormalizedTableColumnBase<K> {
    readonly type: "radio";
    readonly component: Component<{
        row: T;
        column: NormalizedTableColumnRadio<T, K>;
    }>;
    label(this: void, row: T): string;
    checked(this: void, row: T): boolean | string;
    update(this: void, row: T, newValue: boolean, oldValue: boolean): void;
}

/**
 * @internal
 */
export function normalizeRadioColumn<T, K extends keyof T>(
    column: TableColumnRadio<T, K>,
): Omit<NormalizedTableColumnRadio<T, K>, OmittedNormalizedColumnProperties> {
    return {
        type: "radio",
        label: getLabelFn(column.label),
        checked: getValueFn(column.checked, column.key, Boolean, false),
        update: getUpdateFn(column.update, column.key),
        sortable: column.key ?? null,
    };
}
