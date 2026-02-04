import { type ItemIdentifier, getItemIdentifier } from "@fkui/vue";
import { type MetaRow } from "./MetaRow";
import { walk } from "./walk";

/* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters -- technical debt */
function getRowIndexes<T, K extends keyof T = keyof T>(
    rows: T[],
    expandableAttribute?: K,
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
/* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters -- technical debt */
export function getMetaRows<T, K extends keyof T = keyof T>(
    keyedRows: T[],
    expandedKeys: ItemIdentifier[],
    expandableAttribute?: K,
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
                isExpandable && expandedKeys.includes(getItemIdentifier(row));

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
