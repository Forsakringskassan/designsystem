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
export interface TableColumnButton<
    T,
    K extends keyof T,
> extends TableColumnBase {
    /** Column type */
    type: "button";
    key?: K;
    /** Button text */
    text(this: void, row: T): string | null;
    /** Callback when button is clicked */
    onClick?(this: void, row: T): void;
    /** Name of icon to show on the button, see {@link FIcon} for list of icons. */
    icon?: string;
    /**
     * The icon library to use when rendering an icon. If not set, the default icon library will be used.
     */
    iconLibrary?: string;
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
    readonly iconLibrary: string | undefined;
    readonly component: Component<{
        row: T;
        column: NormalizedTableColumnButton<T, K>;
    }>;
    text(this: void, row: T): string | null;
    onClick?(this: void, row: T): void;
}

/**
 * @internal
 */
export function normalizeButtonColumn<T, K extends keyof T>(
    column: TableColumnButton<T, K>,
): Omit<NormalizedTableColumnButton<T, K>, OmittedNormalizedColumnProperties> {
    return {
        type: "button",
        text: getValueFn(column.text, column.key, String, ""),
        onClick: column.onClick,
        icon: column.icon ?? null,
        iconLibrary: column.iconLibrary,
    };
}
