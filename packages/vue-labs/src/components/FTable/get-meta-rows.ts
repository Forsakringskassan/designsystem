import { type ItemIdentifier, getItemIdentifier } from "@fkui/vue";
import { type MetaRow } from "./MetaRow";
import { walk } from "./walk";

function getRowIndexes<T>(
    rows: T[],
    expandableAttribute: keyof T | undefined,
): ItemIdentifier[] {
    const array: ItemIdentifier[] = [];

    walk(rows, expandableAttribute, (row) => {
        array.push(getItemIdentifier(row));
        return true;
    });

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

    walk(keyedRows, expandableAttribute, (row, level) => {
        const key = getItemIdentifier(row);
        const isExpandable = Boolean(
            expandableAttribute && row[expandableAttribute],
        );
        const isExpanded = isExpandable && expandedKeys.has(key);

        // +2 since header row has rowindex 1.
        const rowIndex = rowIndexes.indexOf(key) + 2;

        array.push({
            key,
            row,
            rowIndex,
            level: expandableAttribute ? level : undefined,
            isExpandable,
            isExpanded,
        });

        return isExpanded;
    });

    return array;
}
