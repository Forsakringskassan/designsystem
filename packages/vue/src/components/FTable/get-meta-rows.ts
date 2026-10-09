import { type ItemIdentifier, getItemIdentifier } from "../../utils";
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
    if (expandableAttribute === undefined) {
        return keyedRows.map((row) => ({
            key: getItemIdentifier(row),
            row,
        }));
    }

    const array: Array<MetaRow<T>> = [];

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
        };

        array.push(metarow);

        return isExpanded;
    });

    return array;
}
