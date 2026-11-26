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
    /** Name of an icon to display on the left side of the anchor text. **/
    iconLeft?: string;
    /** Name of an icon to display on the right side of the anchor text. **/
    iconRight?: string;
    /** Target attribute on link, default is `"_blank"`**/
    target?: "_blank" | "_self" | "_parent" | "_top";
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
    iconRight?: string;
    iconLeft?: string;
    target: "_blank" | "_self" | "_parent" | "_top";
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
        iconLeft: column.iconLeft,
        iconRight: column.iconRight,
        target: column.target ?? "_blank",
        href:
            typeof column.href === "function"
                ? column.href
                : () => String(column.href),
    };
}
