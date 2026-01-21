import { type Component } from "vue";
import { type NormalizedTableColumnBase, type TableColumnBase } from "./base";

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
    checked(this: void, row: T): boolean;
    update(this: void, row: T, newValue: boolean, oldValue: boolean): void;
}
