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
    /** Column type */
    type: "anchor";
    key?: K;
    /** Link text */
    text(this: void, row: T): string | null;
    /** Link destination */
    href: string | ((this: void, row: T) => string);
}

/**
 * @internal
 */
export interface NormalizedTableColumnAnchor<
    T,
    K,
> extends NormalizedTableColumnBase<K> {
    readonly type: "anchor";
    readonly component: Component<{
        row: T;
        column: NormalizedTableColumnAnchor<T, K>;
    }>;
    text(this: void, row: T): string | null;
    href(this: void, row: T): string;
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
        href:
            typeof column.href === "function"
                ? column.href
                : () => String(column.href),
    };
}
