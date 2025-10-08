import { type ComputedRef, type Ref, type Slots, computed, ref } from "vue";
import { includeItem, itemEquals } from "../../utils";

/**
 * @internal
 */
export interface ExpandableTable<T> {
    isExpandableTable: ComputedRef<boolean>;
    hasExpandableSlot: ComputedRef<boolean>;
    toggleExpanded(row: T): void;
    isExpanded(row: T): boolean;
    rowAriaExpanded(row: T): boolean | undefined;
    expandableRowClasses(row: T, index: number): string[];
    getExpandableDescribedby(row: T): string | undefined;
    expandableRows(row: T): T[] | undefined;
    hasExpandableContent(row: T): boolean;
    getExpandedIndex(row: T, rows: T[]): number;
}

type Emit<T> = ((evt: "expand", row: T) => void) &
    ((evt: "collapse", row: T) => void);

/**
 * @internal
 */
export function useExpandableTable<T extends object>(
    expandableAttribute: string,
    keyAttribute: keyof T,
    describedby: string | undefined,
    emit: Emit<T>,
    slots: Slots,
): ExpandableTable<T> {
    const expandedRows: Ref<T[]> = ref([]);

    const isExpandableTable = computed(() => {
        return expandableAttribute.length > 0;
    });

    const hasExpandableSlot = computed(() => {
        return Boolean(slots.expandable);
    });

    function toggleExpanded(row: T): void {
        if (isExpanded(row)) {
            expandedRows.value = expandedRows.value.filter(
                (it) => !itemEquals(it, row, keyAttribute),
            );
            emit("collapse", row);
        } else {
            expandedRows.value.push(row);
            emit("expand", row);
        }
    }

    function isExpanded(row: T): boolean {
        return includeItem(row, expandedRows.value, keyAttribute);
    }

    function rowAriaExpanded(row: T): boolean | undefined {
        if (!isExpandableTable || !row[expandableAttribute as keyof T]) {
            return undefined;
        }

        return isExpanded(row);
    }

    function expandableRowClasses(row: T, index: number): string[] {
        const rows = expandableRows(row);

        if (!rows) {
            return [];
        }

        const border =
            index < rows.length - 1 ? ["table__row--expanded-border"] : [];
        const expanded = isExpanded(row)
            ? []
            : ["table__expandable-row--collapsed"];

        return ["table__expandable-row", ...border, ...expanded];
    }

    function getExpandableDescribedby(row: T): string | undefined {
        if (!isExpandableTable) {
            return undefined;
        }
        if (!describedby || describedby.length < 1) {
            return undefined;
        }

        if (!hasExpandableContent(row)) {
            return undefined;
        }

        return describedby;
    }

    function expandableRows(row: T): T[] | undefined {
        const expandableRows = row[expandableAttribute as keyof T] as unknown;

        if (expandableRows === undefined || expandableRows === null) {
            return undefined;
        }
        if (!Array.isArray(expandableRows)) {
            throw new Error(`Expandable rows must be an array`);
        }
        if (expandableRows.length === 0) {
            return undefined;
        }

        return expandableRows as T[];
    }

    function hasExpandableContent(row: T): boolean {
        return Boolean(expandableRows(row));
    }

    /**
     * Get the flattened index (including expandable rows) from a row.
     */
    function getExpandedIndex(row: T, rows: T[]): number {
        let index = 0;

        for (const currentRow of rows) {
            if (currentRow === row) {
                return index;
            }

            index++;

            if (!hasExpandableContent(currentRow) || !isExpanded(currentRow)) {
                continue;
            }

            /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- technical debt */
            const nestedRows = expandableRows(currentRow)!;
            for (const currentNestedRow of nestedRows) {
                if (currentNestedRow === row) {
                    return index;
                }
                index++;
            }
        }

        return -1;
    }

    return {
        isExpandableTable,
        hasExpandableSlot,
        toggleExpanded,
        isExpanded,
        rowAriaExpanded,
        expandableRowClasses,
        getExpandableDescribedby,
        expandableRows,
        hasExpandableContent,
        getExpandedIndex,
    };
}
