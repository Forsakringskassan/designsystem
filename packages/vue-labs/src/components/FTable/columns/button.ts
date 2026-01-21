import { type Component } from "vue";
import { type NormalizedTableColumnBase, type TableColumnBase } from "./base";

/**
 * @public
 */
export interface TableColumnButton<
    T,
    K extends keyof T,
> extends TableColumnBase {
    type: "button";
    key?: K;
    text(this: void, row: T): string | null;
    onClick?(this: void, row: T): void;
    enabled?: boolean | ((this: void, row: T) => boolean);
    icon?: string;
}

/**
 * @internal
 */
export interface NormalizedTableColumnButton<
    T,
    K,
> extends NormalizedTableColumnBase<K> {
    readonly type: "button";
    readonly icon: string | null;
    readonly component: Component<{
        row: T;
        column: NormalizedTableColumnButton<T, K>;
    }>;
    text(this: void, row: T): string | null;
    onClick?(this: void, row: T): void;
    enabled(this: void, row: T): boolean;
}
