import { type Component } from "vue";
import {
    type NormalizedTableColumnBase,
    type OmittedNormalizedColumnProperties,
    type TableColumnBase,
} from "./base";
import { getValueFn } from "./helpers";

/**
 * @public
 */
export interface TableColumnMenu<T> extends TableColumnBase {
    type: "menu";
    text(this: void, row: T): string | null;
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
}

function noop(): void {
    /* do nothing */
}

/**
 * @internal
 */
export function normalizeMenuColumn<T>(
    column: TableColumnMenu<T>,
): Omit<NormalizedTableColumnMenu<T>, OmittedNormalizedColumnProperties> {
    return {
        type: "menu",
        text: getValueFn(column.text, undefined, String, ""),
        actions: (column.actions ?? []).map((it) => {
            return {
                label: it.label,
                icon: it.icon ?? null,
                onClick: it.onClick ?? noop,
            };
        }),
    };
}
