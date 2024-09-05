import { inject } from "vue";
import { FTableColumnData } from "./FTableColumnData";

/**
 * This interface must be implemented (provided) by all Vue components
 * supporting table columns.
 *
 * @public
 */
export interface FTableInterface {
    /**
     * Called when a new column is added.
     */
    addColumn(column: FTableColumnData): void;

    /**
     * Called when a column is hidden.
     */
    setVisibilityColumn(id: string, visible: boolean): void;

    /**
     * Enables table mode when set to `true`.
     * Used to hide label (sr-only) and enable `IPopupError`, for inputfields enclosed by a table.
     */
    textFieldTableMode: boolean;
}

export function FTableInjected(): FTableInterface {
    return {
        addColumn: inject("addColumn") as (column: FTableColumnData) => void,
        setVisibilityColumn: inject("setVisibilityColumn") as (
            id: string,
            visible: boolean,
        ) => void,
        textFieldTableMode: true,
    };
}
