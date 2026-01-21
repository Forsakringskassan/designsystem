import { type Component } from "vue";
import { type NormalizedTableColumnBase, type TableColumnBase } from "./base";

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
    checked(this: void, row: T): boolean;
    update(this: void, row: T, newValue: boolean, oldValue: boolean): void;
    editable(this: void, row: T): boolean;
}
