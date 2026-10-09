import { type ItemIdentifier, getItemIdentifier } from "../../utils";
import { type MetaRow } from "./meta-row";
import { walk } from "./walk";

function countDescendants<T extends object>(
    rows: T[],
    expandableAttribute: keyof T,
): number {
    let count = 0;

    for (const row of rows) {
        const children = row[expandableAttribute];
        count += 1;

        if (Array.isArray(children)) {
            count += countDescendants(children, expandableAttribute);
        }
    }

    return count;
}

/**
 * @internal
 */
export function getMetaRows<T extends object>(
    keyedRows: T[],
    expandedKeys: Set<ItemIdentifier>,
    expandableAttribute?: keyof T,
): Array<MetaRow<T>> {
    if (expandableAttribute === undefined) {
        return keyedRows.map((row, index) => ({
            key: getItemIdentifier(row),
            row,
            rowindex: index + 1,
        }));
    }

    const array: Array<MetaRow<T>> = [];
    let nextRowindex = 1;

    walk(keyedRows, expandableAttribute, (row, level, setsize, posinset) => {
        const key = getItemIdentifier(row);
        const children = row[expandableAttribute];
        const isExpandable = Array.isArray(children) && children.length > 0;
        const isExpanded = isExpandable && expandedKeys.has(key);

        const metarow: MetaRow<T> = {
            key,
            row,
            isExpandable,
            isExpanded,
            level,
            setsize,
            posinset,
            rowindex: nextRowindex++,
        };

        array.push(metarow);

        // nested rows are counted even when they are not expanded
        if (!isExpanded && isExpandable) {
            nextRowindex += countDescendants(children, expandableAttribute);
        }

        return isExpanded;
    });

    return array;
}
