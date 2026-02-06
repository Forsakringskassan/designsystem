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
    type: "button";
    key?: K;
    text(this: void, row: T): string | null;
    onClick?(this: void, row: T): void;
    enabled?: boolean | ((this: void, row: T) => boolean);
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
    enabled(this: void, row: T): boolean;
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
        enabled:
            typeof column.enabled === "function"
                ? column.enabled
                : () => Boolean(column.enabled ?? true),
        icon: column.icon ?? null,
        iconLibrary: column.iconLibrary,
        sortable: column.key ?? null,
    };
}
