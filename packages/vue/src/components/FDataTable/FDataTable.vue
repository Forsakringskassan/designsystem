<script setup lang="ts" generic="T extends object">
import { type PropType, computed, onMounted, provide, ref } from "vue";
import { TableScroll, tableScrollClasses } from "../../utils";
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
    FTableColumnType,
} from "../FTableColumn";
import { FSortFilterDatasetInjected } from "../FSortFilterDataset";
import { FIcon } from "../FIcon";
import { useTranslate } from "../../plugins";
import { useSlotUtils } from "../../composables";

const $t = useTranslate();
const { hasSlot } = useSlotUtils();
const { sort, registerCallbackOnSort, registerCallbackOnMount } = FSortFilterDatasetInjected();
const internalKey = getInternalKey<T>();

const columns = ref<FTableColumnData[]>([]);

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
     * Unique attribute in rows.
     */
    keyAttribute: {
        type: String,
        required: false,
        default: undefined,
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
        validator(value: string): boolean {
            const types: string[] = Object.values(TableScroll);
            return types.includes(value);
        },
    },
});

const hasCaption = computed(() => {
    return hasSlot("caption", {}, { stripClasses: [] });
});

const tableClasses = computed(() => {
    const classes = [];
    if (props.striped) {
        classes.push("table--striped");
    }
    return classes;
});

const isEmpty = computed(() => {
    return internalRows.value.length === 0;
});

const visibleColumns = computed((): FTableColumnData[] => {
    return columns.value.filter((col) => col.visible);
});

const wrapperClasses = computed(() => {
    return tableScrollClasses(props.scroll);
});

const tabindex = computed(() => {
    return props.scroll !== TableScroll.NONE ? 0 : undefined;
});

const internalRows = computed((): T[] => {
    const { keyAttribute } = props;
    if (keyAttribute) {
        return setInternalKeys(props.rows, keyAttribute as keyof T);
    }

    return setInternalKeys(props.rows);
});

provide("addColumn", (column: FTableColumnData) => {
    if (column.type === FTableColumnType.ACTION) {
        throw new Error("Cannot use action column in FDataTable component");
    }
    columns.value = addColumn(columns.value, column);
});

provide("setVisibilityColumn", (id: string, visible: boolean) => {
    setVisibilityColumn(columns.value, id, visible);
});

provide("textFieldTableMode", true);

provide(
    "renderColumns",
    computed(() => {
        return internalRows.value.length > 0;
    }),
);

onMounted(() => {
    registerCallbackOnSort(callbackOnSort);
    registerCallbackOnMount(callbackSortableColumns);
});

function rowKey(item: T): string {
    return String(item[internalKey]);
}

function columnClasses(column: FTableColumnData): string[] {
    const classes = ["table__column", `table__column--${column.type}`, column.size];
    if (column.sortable) {
        classes.push("table__column--sortable");
    }

    return classes;
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

function escapeNewlines(value: string): string {
    return value.replace(/\n/g, "<br/>");
}
</script>

<template>
    <div :class="wrapperClasses">
        <table class="table" :class="tableClasses" :tabindex="tabindex" v-bind="$attrs">
            <caption v-if="hasCaption">
                <!-- @slot Slot for table caption. -->
                <slot name="caption"></slot>
            </caption>
            <colgroup>
                <col v-for="column in columns" :key="column.id" :class="column.size" />
            </colgroup>
            <thead>
                <tr class="table__row">
                    <slot v-bind="{ row: {} }" />

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
            <tbody>
                <tr v-if="isEmpty && columns.length === 0">
                    <slot v-bind="{ row: {} as T }"></slot>
                </tr>
                <tr v-if="isEmpty">
                    <td class="table__column table__column--action" :colspan="columns.length">
                        <!--
                             @slot Slot for displaying a message when table is empty. Default text is 'Tabellen är tom' (key fkui.data-table.empty).
                        -->
                        <slot name="empty">{{ $t("fkui.data-table.empty", "Tabellen är tom") }}</slot>
                    </td>
                </tr>
                <tr v-for="row in internalRows" :key="rowKey(row)" class="table__row">
                    <!--
                         @slot Slot for table row. The item object is available through `v-slot="{ <propertyName> }"`, e.g. `v-slot="{ row }"`.
                         @binding {T} row - The object to be visualized.
                    -->
                    <slot v-bind="{ row }" />
                </tr>
            </tbody>
        </table>
    </div>
</template>
