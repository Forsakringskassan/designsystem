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
    /** Column type */
    type: "menu";
    /** Screenreader text */
    text(this: void, row: T): string | null;
    /**
     * List of menu actions, or a callback returning actions for a row.
     *
     * Each entry consists of:
     *
     * - `label`: the text show on the action, or a callback returning the text.
     * - `icon`: an optional icon.
     * - `onClick`: a callback when the action is clicked.
     */
    actions?: TableColumnMenuActions<T>;
}

/**
 * @public
 */
export type TableColumnMenuActionLabel<T> =
    | string
    | ((this: void, row: T) => string);

/**
 * @public
 */
export interface TableColumnMenuAction<T> {
    /** Action label */
    label: TableColumnMenuActionLabel<T>;
    /** Optional icon */
    icon?: string;
    /** Callback when the action is clicked */
    onClick?(this: void, row: T): void;
}

/**
 * @public
 */
export type TableColumnMenuActions<T> =
    | Array<TableColumnMenuAction<T>>
    | ((this: void, row: T) => Array<TableColumnMenuAction<T>>);

/**
 * @internal
 */
export interface NormalizedTableColumnMenuAction<T> {
    readonly label: TableColumnMenuActionLabel<T>;
    readonly icon: string | null;
    onClick(this: void, row: T): void;
}

/**
 * @internal
 */
export type NormalizedTableColumnMenuActions<T> =
    | Array<NormalizedTableColumnMenuAction<T>>
    | ((this: void, row: T) => Array<NormalizedTableColumnMenuAction<T>>);

/**
 * @internal
 */
export interface NormalizedTableColumnMenu<
    T,
> extends NormalizedTableColumnBase<never> {
    readonly type: "menu";
    readonly actions: NormalizedTableColumnMenuActions<T>;
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
function normalizeMenuAction<T>(
    action: TableColumnMenuAction<T>,
): NormalizedTableColumnMenuAction<T> {
    return {
        label: action.label,
        icon: action.icon ?? null,
        onClick: action.onClick ?? noop,
    };
}

/**
 * @internal
 */
export function normalizeMenuColumn<T>(
    column: TableColumnMenu<T>,
): Omit<NormalizedTableColumnMenu<T>, OmittedNormalizedColumnProperties> {
    const actions: TableColumnMenuActions<T> = column.actions ?? [];

    return {
        type: "menu",
        text: getValueFn(column.text, undefined, String, ""),
        actions:
            typeof actions === "function"
                ? (row: T) => actions(row).map(normalizeMenuAction)
                : actions.map(normalizeMenuAction),
    };
}
