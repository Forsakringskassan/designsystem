import { getDatasetMetadata } from "@fkui/vue";

/** Renders a cell value together with the live dataset metadata for the row. */
export function formatDatasetCell(value: string, row: object): string {
    const meta = getDatasetMetadata(row);
    return `${value} [rowIndex=${meta.rowIndex}, pos=${meta.ariaPosInSet}/${meta.ariaSetSize}]`;
}
