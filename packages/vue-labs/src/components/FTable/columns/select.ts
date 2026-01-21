import { type Component } from "vue";
import { type NormalizedTableColumnBase, type TableColumnBase } from "./base";

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
