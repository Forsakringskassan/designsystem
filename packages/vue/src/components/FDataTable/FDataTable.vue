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
                    <slot v-bind="{ row: {} }"></slot>
                </tr>
                <tr v-if="isEmpty">
                    <td class="table__column table__column--action" :colspan="columns.length">
                        <!--
@slot Slot for displaying a message when table is empty.
Default text is 'Tabellen är tom' (key fkui.data-table.empty).
            -->
                        <slot name="empty">{{ $t("fkui.data-table.empty", "Tabellen är tom") }}</slot>
                    </td>
                </tr>
                <tr v-for="row in rows" :key="rowKey(row)" class="table__row">
                    <!--
                     @slot Slot for table row.

                     The item object is available through `v-slot="{ <propertyName> }"`, e.g.
                     `v-slot="{ row }"`.

                     The following properties are available:

                     * `row: ListItem;` The object to be visualized..
          -->
                    <slot v-bind="{ row }" />
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { type PropType, computed, defineComponent, provide } from "vue";
import { type ListArray, type ListItem } from "../../types";
import { TableScroll, tableScrollClasses, hasSlot } from "../../utils";
import {
    FTableColumnData,
    FTableColumnSort,
    FTableInterface,
    addColumn,
    setVisibilityColumn,
    updateSortOrder,
    setSortableColumns,
    getSortableIconName,
    getSortableIconClasses,
    FTableColumnType,
} from "../FTableColumn";
import { FSortFilterDatasetInjected, FSortFilterDatasetInterface } from "../FSortFilterDataset";
import { FIcon } from "../FIcon";
import { TranslationMixin } from "../../plugins";

export default defineComponent({
    name: "FDataTable",
    components: {
        FIcon,
    },
    mixins: [TranslationMixin],
    provide(): Omit<FTableInterface, "renderColumns"> {
        return {
            addColumn: (column: FTableColumnData) => {
                if (column.type === FTableColumnType.ACTION) {
                    throw new Error("Cannot use action column in FDataTable component");
                }
                this.columns = addColumn(this.columns, column);
            },
            setVisibilityColumn: (id: string, visible: boolean) => {
                setVisibilityColumn(this.columns, id, visible);
            },
            textFieldTableMode: true,
        };
    },
    inheritAttrs: false,
    props: {
        /**
         * The rows to be listed.
         * The rows will be listed in the given array order.
         */
        rows: {
            type: Array as PropType<ListArray>,
            required: true,
        },
        /**
         * Unique attribute in rows.
         */
        keyAttribute: {
            type: String,
            required: true,
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
    },
    setup(props): FSortFilterDatasetInterface {
        provide(
            "renderColumns",
            computed(() => props.rows.length > 0),
        );
        return FSortFilterDatasetInjected();
    },
    data() {
        return {
            columns: [] as FTableColumnData[],
        };
    },
    computed: {
        hasCaption(): boolean {
            return hasSlot(this, "caption", {}, { stripClasses: [] });
        },
        tableClasses(): string[] {
            const classes = [];
            if (this.striped) {
                classes.push("table--striped");
            }
            return classes;
        },
        isEmpty(): boolean {
            return this.rows.length === 0;
        },
        visibleColumns(): FTableColumnData[] {
            return this.columns.filter((col) => col.visible);
        },
        wrapperClasses(): string[] {
            return tableScrollClasses(this.scroll);
        },
        tabindex(): number | undefined {
            return this.scroll !== TableScroll.NONE ? 0 : undefined;
        },
    },
    watch: {
        rows: {
            deep: true,
            immediate: true,
            handler: function () {
                const seenKeys: Record<string, boolean> = {};
                for (const row of this.rows) {
                    const rowKey = String(row[this.keyAttribute]);
                    if (seenKeys[rowKey]) {
                        const index = this.rows.indexOf(row);
                        throw new Error(
                            `Expected each table row to have a unique key attribute but encountered duplicate of "${rowKey}" in row index ${index}.`,
                        );
                    }

                    seenKeys[rowKey] = true;
                }
            },
        },
    },
    mounted() {
        this.registerCallbackOnSort(this.callbackOnSort);
        this.registerCallbackOnMount(this.callbackSortableColumns);
    },
    methods: {
        rowKey(item: ListItem): string {
            const key = item[this.keyAttribute];
            if (typeof key === "undefined") {
                throw new Error(`Key attribute [${this.keyAttribute}]' is missing in row`);
            }
            return String(key);
        },
        columnClasses(column: FTableColumnData): string[] {
            const classes = ["table__column", `table__column--${column.type}`, column.size];
            if (column.sortable) {
                classes.push("table__column--sortable");
            }

            return classes;
        },
        iconClasses(column: FTableColumnData): string[] {
            return getSortableIconClasses(column);
        },
        iconName(column: FTableColumnData) {
            return getSortableIconName(column);
        },
        onClickColumnHeader(column: FTableColumnData): void {
            if (!column.sortable) {
                return;
            }
            let columnName = column.name;
            if (column.sort === FTableColumnSort.DESCENDING) {
                columnName = "";
                column.sort = FTableColumnSort.UNSORTED;
            }
            this.sort(columnName, column.sort !== FTableColumnSort.ASCENDING);
        },
        callbackOnSort(columnName: string, ascending: boolean): void {
            updateSortOrder(this.columns, columnName, ascending);
        },
        callbackSortableColumns(columnNames: string[]): void {
            setSortableColumns(this.columns, columnNames);
        },
        escapeNewlines(value: string): string {
            return value.replace(/\n/g, "<br/>");
        },
    },
});
</script>
