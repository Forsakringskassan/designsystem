import { type Component } from "vue";
import { type NormalizedTableColumnBase, type TableColumnBase } from "./base";

/**
 * @public
 */
export interface TableColumnMenu<T> extends TableColumnBase {
    type: "menu";
    text(this: void, row: T): string | null;
    enabled?: boolean | ((row: T) => boolean);
    actions?: Array<{
        label: string;
        icon?: string;
        onClick?(this: void, row: T): void;
    }>;
}

/**
 * @internal
 */
export interface NormalizedTableColumnMenu<
    T,
> extends NormalizedTableColumnBase<never> {
    readonly type: "menu";
    readonly actions: Array<{
        readonly label: string;
        readonly icon: string | null;
        onClick(this: void, row: T): void;
    }>;
    readonly component: Component<{
        row: T;
        column: NormalizedTableColumnMenu<T>;
    }>;
    text(this: void, row: T): string | null;
    enabled(this: void, row: T): boolean;
}
