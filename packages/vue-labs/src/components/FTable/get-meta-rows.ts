import {
    type ItemIdentifier,
    getItemIdentifier,
    getRowAriaData,
} from "@fkui/vue";
import { type MetaRow } from "./MetaRow";
import { walk } from "./walk";

/**
 * @internal
 */
export function getMetaRows<T>(
    keyedRows: T[],
    expandedKeys: Set<ItemIdentifier>,
    expandableAttribute?: keyof T,
): Array<MetaRow<T>> {
    const array: Array<MetaRow<T>> = [];

    walk(keyedRows, expandableAttribute, (row) => {
        const key = getItemIdentifier(row);
        const meta = getRowAriaData(row);

        const isExpandable = Boolean(
            expandableAttribute && row[expandableAttribute],
        );
        const isExpanded = isExpandable && expandedKeys.has(key);

        // +1 since header row has rowindex 1.
        const rowIndex = meta.ariaRowIndex + 1;

        array.push({
            key,
            row,
            rowIndex,
            level: expandableAttribute ? meta.ariaLevel : undefined,
            isExpandable,
            isExpanded,
        });

        return isExpanded;
    });

    return array;
}
