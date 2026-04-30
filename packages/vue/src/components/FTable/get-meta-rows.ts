import {
    type ItemIdentifier,
    getDatasetMetadata,
    getItemIdentifier,
} from "../../utils";
import { type MetaRow } from "./meta-row";
import { walk } from "./walk";

/**
 * @internal
 */
export function getMetaRows<T extends object>(
    keyedRows: T[],
    expandedKeys: Set<ItemIdentifier>,
    expandableAttribute?: keyof T,
): Array<MetaRow<T>> {
    const array: Array<MetaRow<T>> = [];

    walk(keyedRows, expandableAttribute, (row) => {
        const key = getItemIdentifier(row);
        const isExpandable = Boolean(
            expandableAttribute &&
            Array.isArray(row[expandableAttribute]) &&
            row[expandableAttribute].length > 0,
        );

        const { ariaLevel, ariaPosInSet, ariaRowIndex, ariaSetSize } =
            getDatasetMetadata(row);
        const rowIndex = ariaRowIndex + 1; // +1 to include header row
        const isExpanded = isExpandable && expandedKeys.has(key);

        let metarow: MetaRow<T> = {
            key,
            row,
            rowIndex,
            isExpandable,
            isExpanded,
        };

        if (expandableAttribute) {
            metarow = {
                level: ariaLevel,
                posinset: ariaPosInSet,
                setsize: ariaSetSize,
                ...metarow,
            };
        }

        array.push(metarow);

        return isExpanded;
    });

    return array;
}
