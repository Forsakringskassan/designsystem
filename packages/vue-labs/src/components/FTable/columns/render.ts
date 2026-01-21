import { type Component, type VNode } from "vue";
import { type NormalizedTableColumnBase, type TableColumnBase } from "./base";

/**
 * @public
 */
export interface TableColumnRender<
    T,
    K extends keyof T = keyof T,
> extends TableColumnBase {
    key?: K;
    render(this: void, row: T): VNode | Component;
}

/**
 * @internal
 */
export interface NormalizedTableColumnRender<T> extends Omit<
    NormalizedTableColumnBase<never>,
    "sortable"
> {
    readonly type: undefined;
    readonly sortable: boolean | null;
    render(this: void, row: T): VNode | Component;
}
