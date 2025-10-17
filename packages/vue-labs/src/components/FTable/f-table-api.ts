import { type ShallowRef } from "vue";

/**
 * {@link FTable} optional cell api. Expose in cell component.
 *
 * @public
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
