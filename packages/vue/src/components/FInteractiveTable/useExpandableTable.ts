import { type ComputedRef, type Ref, type Slots, ref, computed } from "vue";
import { type ListArray, type ListItem } from "../../types";
import { itemEquals, includeItem } from "../../utils";

/**
 * @public
 */
export interface ExpandableTable {
    isExpandableTable: ComputedRef<boolean>;
    hasExpandableSlot: ComputedRef<boolean>;
    toggleExpanded(row: ListItem): void;
    isExpanded(row: ListItem): boolean;
    rowAriaExpanded(row: ListItem): boolean | undefined;
    expandableRowClasses(row: ListItem, index: number): string[];
    getExpandableDescribedby(row: ListItem): string | undefined;
    expandableRows(row: ListItem): ListArray | undefined;
    hasExpandableContent(row: ListItem): boolean;
}

type InteractiveTableEmit = (
    event:
        | "change"
        | "update:modelValue"
        | "click"
        | "unselect"
        | "select"
        | "expand"
        | "collapse",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- technical debt
    ...args: any[]
) => void;

export function useExpandableTable(
    expandableAttribute: string,
    keyAttribute: string,
    describedby: string | undefined,
    emit: InteractiveTableEmit,
    slots: Slots,
): ExpandableTable {
    const expandedRows: Ref<ListArray> = ref([]);

    const isExpandableTable = computed(() => {
        return expandableAttribute.length > 0;
    });

    const hasExpandableSlot = computed(() => {
        return Boolean(slots["expandable"]);
    });

    function toggleExpanded(row: ListItem): void {
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

    function isExpanded(row: ListItem): boolean {
        return includeItem(row, expandedRows.value, keyAttribute);
    }

    function rowAriaExpanded(row: ListItem): boolean | undefined {
        if (!isExpandableTable || !row[expandableAttribute]) {
            return undefined;
        }

        return isExpanded(row);
    }

    function expandableRowClasses(row: ListItem, index: number): string[] {
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

    function getExpandableDescribedby(row: ListItem): string | undefined {
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

    function expandableRows(row: ListItem): ListArray | undefined {
        const expandableRows = row[expandableAttribute];

        if (typeof expandableRows === "undefined") {
            return undefined;
        }
        if (!Array.isArray(expandableRows)) {
            throw new Error(`Expandable rows must be a ListArray`);
        }

        return expandableRows;
    }

    function hasExpandableContent(row: ListItem): boolean {
        return Boolean(expandableRows(row));
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
    };
}
