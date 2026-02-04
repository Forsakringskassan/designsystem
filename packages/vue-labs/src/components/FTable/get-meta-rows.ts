import { type ItemIdentifier, getItemIdentifier } from "@fkui/vue";
import { type MetaRow } from "./MetaRow";
import { walk } from "./walk";

function getRowIndexes<T>(
    rows: T[],
    expandableAttribute?: keyof T,
): ItemIdentifier[] {
    const array: ItemIdentifier[] = [];

    walk(
        rows,
        (row) => {
            array.push(getItemIdentifier(row));
            return true;
        },
        expandableAttribute,
    );

    return array;
}

/**
 * @internal
 */
export function getMetaRows<T>(
    keyedRows: T[],
    expandedKeys: Set<ItemIdentifier>,
    expandableAttribute?: keyof T,
): Array<MetaRow<T>> {
    const rowIndexes = getRowIndexes(keyedRows, expandableAttribute);
    const array: Array<MetaRow<T>> = [];

    walk(
        keyedRows,
        (row, level) => {
            const isExpandable = Boolean(
                expandableAttribute && row[expandableAttribute],
            );
            const isExpanded =
                isExpandable && expandedKeys.has(getItemIdentifier(row));

            // +2 since header row has rowindex 1.
            const rowIndex = rowIndexes.indexOf(getItemIdentifier(row)) + 2;

            array.push({
                key: getItemIdentifier(row),
                row,
                rowIndex,
                level: expandableAttribute ? level : undefined,
                isExpandable,
                isExpanded,
            });

            return isExpanded;
        },
        expandableAttribute,
    );

    return array;
}
