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
> extends TableColumnBase<T> {
    /** Column type */
    type: "anchor";
    key?: K;
    /** Link text */
    text(this: void, row: T): string | null;
    /** Name of optional icon */
    iconLeft?: string | ((this: void, row: T) => string);
    iconRight?: string | ((this: void, row: T) => string);
    /** Target attribute on link */
    target?: string | ((this: void, row: T) => string);
    /** Link destination */
    href: string | ((this: void, row: T) => string);
}

/**
 * @internal
 */
export interface NormalizedTableColumnAnchor<
    T,
    K,
> extends NormalizedTableColumnBase<T, K> {
    readonly type: "anchor";
    readonly component: Component<{
        row: T;
        column: NormalizedTableColumnAnchor<T, K>;
    }>;
    text(this: void, row: T): string | null;
    iconRight?: (this: void, row: T) => string;
    iconLeft?: (this: void, row: T) => string;
    target?: (this: void, row: T) => string;
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
        iconLeft:
            typeof column.iconLeft === "function"
                ? column.iconLeft
                : () => String(column.iconLeft),
        iconRight:
            typeof column.iconRight === "function"
                ? column.iconRight
                : () => String(column.iconRight),
        target:
            typeof column.target === "function"
                ? column.target
                : () => String(column.target),
        href:
            typeof column.href === "function"
                ? column.href
                : () => String(column.href),
    };
}
