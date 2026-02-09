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
export interface TableColumnAnchor<
    T,
    K extends keyof T,
> extends TableColumnBase {
    type: "anchor";
    key?: K;
    text(this: void, row: T): string | null;
    href: string;
}

/**
 * @internal
 */
export interface NormalizedTableColumnAnchor<
    T,
    K,
> extends NormalizedTableColumnBase<K> {
    readonly type: "anchor";
    readonly href: string;
    readonly component: Component<{
        row: T;
        column: NormalizedTableColumnAnchor<T, K>;
    }>;
    text(this: void, row: T): string | null;
}

/**
 * @internal
 */
export function normalizeAnchorColumn<T, K extends keyof T>(
    column: TableColumnAnchor<T, K>,
): Omit<NormalizedTableColumnAnchor<T, K>, OmittedNormalizedColumnProperties> {
    return {
        type: "anchor",
        text: getValueFn(column.text, column.key, String, ""),
        href: column.href,
        sortable: column.key ?? null,
    };
}
