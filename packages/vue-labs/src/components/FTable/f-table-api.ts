import { type ShallowRef } from "vue";

/**
 * {@link FTable} public api. Exposed in template reference.
 *
 * ```
 * const tableRef = useTemplateRef("table");
 * ```
 *
 * @public
 */
export interface FTableApi {
    /**
     * Alters tabstop behaviour during action.
     * Typically used during single row removal to put focus on cell nearby.
     * Default behaviour is to reset tabstop on removal (focus on first cell).
     */
    withTabstopBehaviour(
        behaviour: "default" | "row-removal",
        action: () => void | Promise<void>,
    ): Promise<void>;
}

/**
 * {@link FTable} optional cell api. Expose in cell component.
 *
 * @internal
 */
export interface FTableCellApi {
    /**
     * Preferred tabstop element when other than default (`td`).
     */
    tabstopEl: Readonly<ShallowRef<HTMLElement | null>>;
}

/**
 * @internal
 */
export function isFTableCellApi(value: unknown): value is FTableCellApi {
    return (
        value !== null &&
        typeof value === "object" &&
        Boolean((value as FTableCellApi).tabstopEl)
    );
}

/**
 * Key used on HTMLElement to store table cell api.
 *
 * @internal
 */
export const tableCellApiSymbol = Symbol("table:cell-api");
