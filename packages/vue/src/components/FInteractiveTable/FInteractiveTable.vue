<script setup lang="ts" generic="T extends object, K extends keyof T">
import {
    type PropType,
    type Ref,
    computed,
    onUpdated,
    onMounted,
    provide,
    ref,
    useSlots,
    useTemplateRef,
    shallowRef,
    getCurrentInstance,
    watch,
} from "vue";
import { useSlotUtils } from "../../composables";
import { TableScroll, tableScrollClasses, itemEquals, includeItem, renderSlotText } from "../../utils";
import { getInternalKey, setInternalKeys } from "../../utils/internal-key";
import {
    FTableColumnData,
    FTableColumnSort,
    addColumn,
    setVisibilityColumn,
    updateSortOrder,
    setSortableColumns,
    getSortableIconName,
    getSortableIconClasses,
} from "../FTableColumn";
import { ActivateItemInjected } from "../FCrudDataset";
import { FSortFilterDatasetInjected } from "../FSortFilterDataset";
import { FCheckboxField } from "../FCheckboxField";
import { useTranslate } from "../../plugins";
import { FIcon } from "../FIcon";
import { onKeydown as onKeydown2 } from "./FTableKeybindings";
import { ExpandableTable, useExpandableTable } from "./useExpandableTable";

const $t = useTranslate();
const slots = useSlots();
const { hasSlot } = useSlotUtils();
const { sort, registerCallbackOnSort, registerCallbackOnMount } = FSortFilterDatasetInjected();
const { registerCallbackAfterItemAdd, registerCallbackBeforeItemDelete } = ActivateItemInjected<T>();
const internalKey = getInternalKey<T>();

const activeRow = ref<T | undefined>(undefined);
const columns = ref<FTableColumnData[]>([]);
const selectedRows = ref<T[]>([]) as Ref<T[]>;
const tr = shallowRef<HTMLElement[]>([]);
const tbodyKey = ref(0);

defineOptions({
    inheritAttrs: false,
});

const props = defineProps({
    /**
     * The rows to be listed.
     * The rows will be listed in the given array order.
     */
    rows: {
        type: Array as PropType<T[]>,
        required: true,
    },
    /**
     * If `true` hovering over a row will be highlighted
     */
    hover: {
        type: Boolean,
        default: false,
    },
    /**
     * Unique attribute in rows.
     */
    keyAttribute: {
        type: String,
        required: false,
        default: undefined,
    },
    /**
     * Attribute of expandable content in rows.
     * If provided, the table can contain expandable rows.
     */
    expandableAttribute: {
        type: String,
        default: "",
    },
    /**
     * Element id for aria-describedby on expandable rows to describe expanded content.
     */
    expandableDescribedby: {
        type: String,
        default: "",
    },
    /**
     * If `true` the table rows will be selectable.
     * @see 'select' and 'unselect' events.
     */
    selectable: {
        type: Boolean,
        default: false,
    },
    /**
     * If `true` alternating rows will use a different background color.
     */
    striped: {
        type: Boolean,
        default: false,
    },
    /**
     * Enable scrolling inside table.
     *
     * Can be one of the following values:
     *
     * - `"horizontal"`: Enables horizontal scrolling
     * - `"vertical"`: Enables vertical scrolling
     * - `"both"`: Enables scrolling in both directions
     * - `"none"`: Disables scrolling (default)
     */
    scroll: {
        type: String as PropType<TableScroll>,
        default: TableScroll.NONE,
        validator: function (value: string): boolean {
            const types: string[] = Object.values(TableScroll);
            return types.includes(value);
        },
    },
    /**
     * Currently selected rows.
     * Requires `selectable` to be set.
     */
    modelValue: {
        type: Array as PropType<T[] | undefined>,
        required: false,
        default: undefined,
    },
    /**
     * Enable showing the active row.
     */
    showActive: {
        type: Boolean,
        required: false,
        default: true,
    },
    /**
     * V-model will bind to value containing the current active row.
     */
    active: {
        type: Object as PropType<T | undefined>,
        required: false,
        default: () => undefined,
    },
});

const emit = defineEmits<{
    /**
     * Emitted when row is activated.
     */
    change: [row: T];
    /**
     * Emitted when row is clicked.
     */
    click: [row: T];
    /**
     * Emitted when row is unselected.
     */
    unselect: [row: T];
    /**
     * V-model event to update value property.
     */
    "update:modelValue": [rows: T[]];
    /**
     * V-model active event.
     */
    "update:active": [row: T];
    /**
     * Emitted when row is selected.
     */
    select: [row: T];
    /**
     * Emitted when row is expanded.
     */
    expand: [row: T];
    /**
     * Emitted when row is collapsed.
     */
    collapse: [row: T];
}>();

const expandableTable: ExpandableTable<T> = useExpandableTable(
    props.expandableAttribute,
    internalKey,
    props.expandableDescribedby,
    emit,
    slots,
);

const {
    isExpandableTable,
    hasExpandableSlot,
    toggleExpanded,
    isExpanded,
    rowAriaExpanded,
    expandableRowClasses,
    getExpandableDescribedby,
    expandableRows,
    hasExpandableContent,
} = expandableTable;

const tbody = useTemplateRef<HTMLElement>("tbodyElement");

const hasCaption = computed((): boolean => {
    return hasSlot("caption", {}, { stripClasses: [] });
});

const hasCheckboxDescription = computed((): boolean => {
    /* this is under the assumption that `hasCheckboxDescription` is
     * only used when there is one or more rows present, if this is to be
     * called under other circumstances we need a stub object but this
     * should be good enough for now */
    const firstRow = internalRows.value[0];
    return hasSlot("checkbox-description", { row: firstRow });
});

const isEmpty = computed((): boolean => {
    return internalRows.value.length === 0;
});

const visibleColumns = computed((): FTableColumnData[] => {
    return columns.value.filter((col) => col.visible);
});

const tableClasses = computed((): string[] => {
    const classes = [];
    if (props.selectable) {
        classes.push("table--selectable");
    }
    if (props.hover) {
        classes.push("table--hover");
    }
    return classes;
});

const tableRole = computed((): string => {
    return isExpandableTable.value ? "treegrid" : "grid";
});

const wrapperClasses = computed((): string[] => {
    return tableScrollClasses(props.scroll);
});

const nbOfColumns = computed((): number => {
    let columnCount = visibleColumns.value.length;
    if (props.selectable) {
        columnCount++;
    }
    if (isExpandableTable.value) {
        columnCount++;
    }

    return columnCount;
});

const internalRows = computed((): T[] => {
    const { keyAttribute, expandableAttribute } = props;

    if (isExpandableTable) {
        return setInternalKeys(props.rows, keyAttribute as K, expandableAttribute as K);
    }
    return setInternalKeys(props.rows, keyAttribute as K);
});

provide("addColumn", (column: FTableColumnData) => {
    columns.value = addColumn(columns.value, column);
});

provide("setVisibilityColumn", (id: string, visible: boolean) => {
    setVisibilityColumn(columns.value, id, visible);
});

provide("textFieldTableMode", true);

provide(
    "renderColumns",
    computed(() => internalRows.value.length > 0),
);

watch(
    () => props.rows,
    () => setSelectedRows(),
    { immediate: true, deep: true },
);

watch(
    () => props.active,
    () => {
        updateActiveRowFromVModel();
    },
    { immediate: true },
);

watch(
    () => props.showActive,
    (val) => {
        if (!val) {
            tbodyKey.value ^= 1;
        }
    },
    { immediate: true },
);

watch(
    () => props.modelValue,
    () => setSelectedRows(),
    { immediate: true, deep: true },
);

function updateTr(tbodyElement: HTMLElement): void {
    const trElements = [].slice.call(tbodyElement.children) as HTMLElement[];
    const trInteractableElements = trElements.filter((tr) => {
        return tr.tabIndex === 0;
    });
    tr.value = trInteractableElements;
}

onUpdated(() => {
    if (tbody.value) {
        updateTr(tbody.value);
    }
});

onMounted(() => {
    if (tbody.value) {
        updateTr(tbody.value);
    }
    registerCallbackOnSort(callbackOnSort);
    registerCallbackOnMount(callbackSortableColumns);
    registerCallbackAfterItemAdd(callbackAfterItemAdd);
    registerCallbackBeforeItemDelete(callbackBeforeItemDelete);
});

function forceRepaintIE11(target: HTMLElement): void {
    if (navigator.userAgent.includes("Trident")) {
        target.style.display = "none";
        /* eslint-disable-next-line @typescript-eslint/no-unused-expressions -- technical debt, this function is probably not needed any longer */
        target.offsetHeight;
        target.style.removeProperty("display");
    }
}

function isActive(row: T): boolean {
    if (!props.showActive) {
        return false;
    }
    return itemEquals(row, activeRow.value, internalKey);
}

function isSelected(row: T): boolean {
    return includeItem(row, selectedRows.value, internalKey);
}

function onKeydown(event: KeyboardEvent, index: number): void {
    onKeydown2({ rows: internalRows.value, tr, activate }, event, index);
}

function onClick(event: MouseEvent, row: T): void {
    const { target } = event as MouseEvent & { target: HTMLElement };
    const isRelevant = ["TD", "TH"].includes(target.nodeName);

    if (isRelevant) {
        /* get <tr> element */
        const parent = target.parentElement;
        activate(row, parent);
    }
}

function activate(row: T, tr: HTMLElement | null): void {
    emit("click", row);

    if (isExpandableTable.value && hasExpandableContent(row)) {
        toggleExpanded(row);
    }

    if (!itemEquals(row, activeRow.value, internalKey)) {
        emit("change", row);
        setActiveRow(row);

        if (tr) {
            /* ie11: force focus on <tr> instead of <td> */
            tr.focus();

            /* ie11 also needs to force repaint or the outline will not
             * be rendered properly */
            const td = tr.children[0] as HTMLElement;
            forceRepaintIE11(td);
        }
    }
}

function rowDescription(row: T): string | undefined {
    const slot = slots["row-description"];
    return renderSlotText(slot, { row });
}

function onSelect(row: T): void {
    if (includeItem(row, selectedRows.value, internalKey)) {
        selectedRows.value = selectedRows.value.filter((i) => !itemEquals(i, row, internalKey));
        emit("unselect", row);
    } else {
        selectedRows.value.push(row);
        emit("select", row);
    }

    updateVModelWithSelectedRows();
    getCurrentInstance()?.proxy?.$forceUpdate();
}

function setSelectedRows(): void {
    if (!props.modelValue || !props.modelValue.length) {
        selectedRows.value = [];
        return;
    }
    selectedRows.value = props.modelValue.filter((row: T) => {
        return includeItem<T, K>(row, internalRows.value, internalKey as K);
    });
}

function updateVModelWithSelectedRows(): void {
    if (props.modelValue) {
        emit("update:modelValue", selectedRows.value);
    }
}

function rowClasses(row: T, index: number): string[] {
    const active = isActive(row) ? ["table__row--active"] : [];
    const selected = isSelected(row) ? ["table__row--selected"] : [];
    const isExpandableRow = isExpandableTable.value && hasExpandableContent(row);
    const expandable = isExpandableRow ? ["table__row--expandable"] : [];
    const expanded = isExpanded(row) ? ["table__row--expanded-border"] : [];
    const striped = props.striped && index % 2 !== 0 ? ["table__row--striped"] : [];
    return ["table__row", ...active, ...selected, ...striped, ...expandable, ...expanded];
}

function rowKey(row: T): string {
    return String(row[internalKey]);
}

function columnClasses(column: FTableColumnData): string[] {
    const sortable = column.sortable ? ["table__column--sortable"] : [];
    return ["table__column", `table__column--${column.type}`, ...sortable, column.size];
}

function iconClasses(column: FTableColumnData): string[] {
    return getSortableIconClasses(column);
}

function iconName(column: FTableColumnData): string {
    return getSortableIconName(column);
}

function onClickColumnHeader(column: FTableColumnData): void {
    if (!column.sortable) {
        return;
    }

    let columnName = column.name;
    if (!columnName) {
        throw new Error("`FTableColumn` must have a unique `name` when used with `FSortFilterDataset`");
    }

    if (column.sort === FTableColumnSort.DESCENDING) {
        columnName = "";
        column.sort = FTableColumnSort.UNSORTED;
    }
    sort(columnName, column.sort !== FTableColumnSort.ASCENDING);
}

function callbackOnSort(columnName: string, ascending: boolean): void {
    updateSortOrder(columns.value, columnName, ascending);
}

function callbackSortableColumns(columnNames: string[]): void {
    setSortableColumns(columns.value, columnNames);
}

function callbackAfterItemAdd(item: T): void {
    activate(item, null);
}

function callbackBeforeItemDelete(item: T): void {
    if (internalRows.value.length === 0) {
        return;
    }
    // Activate the item above the deleted one if it exists
    let targetIndex = internalRows.value.indexOf(item) - 1;
    if (targetIndex < 0 && internalRows.value.length > 1) {
        targetIndex = 1;
    } else if (targetIndex < 0) {
        targetIndex = 0;
    }
    activate(internalRows.value[targetIndex], tr.value[targetIndex]);
}

function escapeNewlines(value: string): string {
    return value.replace(/\n/g, "<br/>");
}

function updateActiveRowFromVModel(): void {
    if (props.active === undefined) {
        setActiveRow(undefined);
    } else if (!itemEquals(props.active, activeRow.value, internalKey)) {
        setActiveRow(props.active as T);
    }
}

function setActiveRow(row: T | undefined): void {
    activeRow.value = row;
    emit("update:active", activeRow.value);
}
</script>

<template>
    <div :class="wrapperClasses">
        <!-- technical debt / fulhack: this is to make sure the typing understands there is an undocumented slot  -->
        <slot v-if="false" name="row-description"></slot>
        <table class="table" :role="tableRole" :class="tableClasses" v-bind="$attrs">
            <caption v-if="hasCaption">
                <!-- @slot Slot for table caption. -->
                <slot name="caption"></slot>
            </caption>
            <colgroup>
                <col v-if="isExpandableTable" class="table__column--shrink" />
                <col v-if="selectable" class="table__column--shrink" />
                <col v-for="column in columns" :key="column.id" :class="column.size" />
            </colgroup>
            <thead>
                <tr class="table__row">
                    <slot v-bind="{ row: {} }" />

                    <th v-if="isExpandableTable" scope="col">
                        <span class="sr-only">{{ $t("fkui.interactive-table.select", "Expandera") }}</span>
                    </th>

                    <th v-if="selectable" scope="col">
                        <span class="sr-only">{{ $t("fkui.interactive-table.select", "Markera") }}</span>
                    </th>

                    <th
                        v-for="column in visibleColumns"
                        :key="column.id"
                        scope="col"
                        :class="columnClasses(column)"
                        v-on="column.sortable ? { click: () => onClickColumnHeader(column) } : {}"
                    >
                        <!-- eslint-disable-next-line vue/no-v-html -->
                        <span v-html="escapeNewlines(column.title)"></span>
                        <f-icon v-if="column.sortable" :class="iconClasses(column)" :name="iconName(column)" />
                        <span v-if="column.description" class="table__column__description">{{
                            column.description
                        }}</span>
                    </th>
                </tr>
            </thead>
            <tbody ref="tbodyElement" :key="tbodyKey">
                <template v-for="(row, index) in internalRows" :key="rowKey(row)">
                    <tr
                        :class="rowClasses(row, index)"
                        :aria-label="rowDescription(row)"
                        :aria-expanded="rowAriaExpanded(row)"
                        :aria-level="isExpandableTable ? 1 : undefined"
                        :aria-describedby="getExpandableDescribedby(row)"
                        tabindex="0"
                        @keydown.self="onKeydown($event, index)"
                        @click="onClick($event, row)"
                    >
                        <td v-if="isExpandableTable">
                            <div v-if="hasExpandableContent(row)" class="table__expand-icon">
                                <f-icon name="arrow-right" :rotate="isExpanded(row) ? '270' : '90'"></f-icon>
                            </div>
                        </td>

                        <td v-if="selectable" class="table__column--selectable">
                            <div class="table__input">
                                <f-checkbox-field
                                    :value="true"
                                    :model-value="isSelected(row)"
                                    @click.self="onSelect(row)"
                                >
                                    <span v-if="hasCheckboxDescription" class="sr-only">
                                        <slot name="checkbox-description" v-bind="{ row }" />
                                    </span>
                                </f-checkbox-field>
                            </div>
                        </td>

                        <!--
                            @slot Slot for table row. The row object is available through `v-slot="{ <propertyName> }"`, e.g. `v-slot="{ row }"`.
                            @binding {ListItem} row The object to be visualized.
                        -->
                        <slot v-bind="{ row }" />
                    </tr>

                    <template v-if="isExpandableTable && hasExpandableContent(row)">
                        <tr
                            v-for="(expandableRow, expandableIndex) in expandableRows(row)"
                            :key="rowKey(expandableRow)"
                            aria-level="2"
                            :class="expandableRowClasses(row, expandableIndex)"
                        >
                            <!--
                                Expandable column placeholder.
                                Expandable rows cannot be expanded.
                            -->
                            <td class="table__column--placeholder"></td>

                            <!--
                                Selectable column placeholder.
                                Expandable rows cannot be selected.
                            -->
                            <td v-if="selectable" class="table__column--placeholder"></td>

                            <template v-if="!hasExpandableSlot">
                                <slot v-bind="{ row: expandableRow as T }"></slot>
                            </template>
                            <td v-else class="table__column table__column--indented" :colspan="columns.length">
                                <!--
                                    @slot Slot for expandable table row.
                                    The row object is available through `v-slot="{ <propertyName> }"`, e.g.
                                    `v-slot="{ expandableRow }"`.
                                    @binding {ListItem} expandableRow The object to be visualized.
                                    @binding {ListItem} parentRow The parent row of the expandable rows.
                                -->
                                <slot name="expandable" v-bind="{ expandableRow, parentRow: row }" />
                            </td>
                        </tr>
                    </template>
                </template>

                <tr v-if="isEmpty && columns.length === 0">
                    <slot v-bind="{ row: {} as T }"></slot>
                </tr>

                <template v-if="isEmpty">
                    <tr>
                        <td class="table__column table__column--action" :colspan="nbOfColumns">
                            <!--
                                @slot Slot for displaying a message when table is empty.
                                Default text is 'Tabellen är tom' (key fkui.interactive-table.empty).
                            -->
                            <slot name="empty">{{ $t("fkui.interactive-table.empty", "Tabellen är tom") }}</slot>
                        </td>
                        <!-- slot content won't be rendered, since renderColumns is false for empty table -->
                        <slot v-bind="{ row: {} as T }"></slot>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>
