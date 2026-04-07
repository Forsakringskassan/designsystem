import { type Dataset } from "./dataset";
import { type DatasetElementMetadata } from "./dataset-element-metadata";
import { getDatasetMetadata } from "./get-dataset-metadata";

/** @internal */
export interface TreeContext<T extends { id: number }> {
    item: T;
    metadata: DatasetElementMetadata;
}

/** @internal */
export function rowindex<T extends { id: number }>(
    context: TreeContext<T>,
): string {
    const { item, metadata } = context;
    return `id:${item.id} row-index=${metadata.rowIndex}`;
}

/** @internal */
export function all<T extends { id: number }>(context: TreeContext<T>): string {
    const { item, metadata } = context;
    return `id:${item.id} row-index=${metadata.rowIndex} aria-rowindex=${metadata.ariaRowIndex} aria-level=${metadata.ariaLevel} aria-setsize=${metadata.ariaSetSize} aria-posinset=${metadata.ariaPosInSet}`;
}

/**
 * Renders a tree of dataset items as a string for use in snapshot tests.
 *
 * @internal
 * @remarks For unit testing only.
 */
export function treeSnapshot<T extends { id: number }>(
    items: Dataset<T>,
    callback: (context: TreeContext<T>) => string,
): string {
    const { size, nestedAttribute } = getDatasetMetadata(items);

    function renderItems(items: T[], prefix: string): string {
        return items
            .map((item, i) => {
                const isLast = i === items.length - 1;
                const connector = isLast ? "└─ " : "├─ ";
                const childPrefix = isLast ? "   " : "│  ";
                const children = nestedAttribute
                    ? item[nestedAttribute]
                    : undefined;
                const childLines =
                    Array.isArray(children) && children.length > 0
                        ? `\n${renderItems(children as T[], prefix + childPrefix)}`
                        : "";
                const label = callback({
                    item,
                    metadata: getDatasetMetadata(item),
                });
                return `${prefix}${connector}${label}${childLines}`;
            })
            .join("\n");
    }

    return `length=${items.length} size=${size}\n${renderItems(items, "")}`;
}
