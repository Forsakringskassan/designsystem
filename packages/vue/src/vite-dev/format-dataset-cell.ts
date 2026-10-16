import { getDatasetMetadata } from "@fkui/vue";

/** Renders a cell value together with the live dataset metadata for the row. */
export function formatDatasetCell(row: object): string {
    const meta = getDatasetMetadata(row);
    return `ariaRowIndex=${meta.rowIndex}, ariaPosInSet=${meta.ariaPosInSet}, ariaSetSize=${meta.ariaSetSize},  ariaLevel=${meta.ariaLevel}`;
}
