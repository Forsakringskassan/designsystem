<template>
    <div :class="wrapperClasses">
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
            <tbody ref="tbodyElement">
                <template v-for="(row, index) in rows" :key="rowKey(row)">
                    <tr
                        :class="rowClasses(row, index)"
                        :aria-label="rowDescription(row)"
                        :aria-expanded="rowAriaExpanded(row)"
                        :aria-level="isExpandableTable ? 1 : undefined"
                        :aria-describedby="getExpandableDescribedby(row)"
                        tabindex="0"
                        @keydown.self="onKeydown($event, index)"
                        @click="onClick($event, row, index)"
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
                            @slot Slot for table row.

                            The row object is available through `v-slot="{ <propertyName> }"`, e.g.
                            `v-slot="{ row }"`.

                            The following properties are available:

                            * `row: ListItem;` The object to be visualized.
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
                            <td></td>

                            <!--
                                Selectable column placeholder.
                                Expandable rows cannot be selected.
                            -->
                            <td v-if="selectable" class="table__column--selectable"></td>

                            <template v-if="!hasExpandableSlot">
                                <td
                                    v-for="(column, columnIndex) in columns"
                                    :key="`${rowKey(expandableRow)}${column.name}`"
                                    :class="expandableColumnClasses(column, columnIndex)"
                                >
                                    {{ expandableRow[column.name] }}
                                </td>
                            </template>
                            <td v-else class="table__column table__column--indented" :colspan="columns.length">
                                <!--
                                    @slot Slot for expandable table row.

                                    The row object is available through `v-slot="{ <propertyName> }"`, e.g.
                                    `v-slot="{ expandableRow }"`.

                                    The following properties are available:

                                    * `expandableRow: ListItem;` The object to be visualized.
                                    * `parentRow: ListItem;` The parent row of the expandable rows.
                                -->
                                <slot name="expandable" v-bind="{ expandableRow, parentRow: row }" />
                            </td>
                        </tr>
                    </template>
                </template>

                <tr v-if="!hasInitiateColumns">
                    <slot v-bind="{ row: emptyRow }"></slot>
                </tr>

                <template v-if="isEmpty">
                    <tr v-show="false" hidden>
                        <!--
                            when no rows are present the columns wont be rendered
                            either so we must add an empty blank row for columns
                            visibility etc to update
                        -->
                        <slot v-bind="{ row: emptyRow }"></slot>
                    </tr>

                    <tr>
                        <td class="table__column table__column--action" :colspan="nbOfColumns">
                            <!--
                                @slot Slot for displaying a message when table is empty.
                                Default text is 'Tabellen är tom' (key fkui.interactive-table.empty).
                            -->
                            <slot name="empty">{{ $t("fkui.interactive-table.empty", "Tabellen är tom") }}</slot>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { type ListArray, type ListItem } from "../../types";
import {
    TableScroll,
    emptyTableRow,
    hasSlot,
    tableScrollClasses,
    itemEquals,
    includeItem,
    renderSlotText,
} from "../../utils";
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
} from "../FTableColumn";
import { ActivateItemInjected, ActivateItemInterface } from "../FCrudDataset";
import { FSortFilterDatasetInjected, FSortFilterDatasetInterface } from "../FSortFilterDataset";
import { FCheckboxField } from "../FCheckboxField";
import { TranslationMixin } from "../../plugins";
import { FIcon } from "../FIcon";
import { onKeydown } from "./FTableKeybindings";
import { type ExpandableTable, useExpandableTable } from "./useExpandableTable";

interface FInteractiveTableData {
    activeRow: ListItem | undefined;
    columns: FTableColumnData[];
    emptyRow: Record<string, unknown>;
    selectedRows: ListArray;
    tr: HTMLElement[];
}

function forceRepaintIE11(target: HTMLElement): void {
    if (navigator.userAgent.includes("Trident")) {
        target.style.display = "none";
        target.offsetHeight;
        target.style.removeProperty("display");
    }
}

export default defineComponent({
    name: "FInteractiveTable",
    components: { FCheckboxField, FIcon },
    mixins: [TranslationMixin],
    provide(): FTableInterface {
        return {
            addColumn: (column: FTableColumnData) => {
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
            required: true,
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
         * V-model will bind to value containing selected rows.
         */
        modelValue: {
            type: Array as PropType<ListArray | undefined>,
            required: false,
            default: undefined,
        },
    },
    emits: [
        "change",
        "click",
        "update",
        "unselect",
        "update:modelValue",
        "select",
        /**
         * Emitted when row is expanded.
         *
         * @event expand
         * @param row
         * @type {ListItem}
         */
        "expand",
        /**
         * Emitted when row is collapsed.
         *
         * @event collapse
         * @param row
         * @type {ListItem}
         */
        "collapse",
    ],
    setup(props, context): FSortFilterDatasetInterface & ActivateItemInterface & ExpandableTable {
        const sortFilterDatasetInjected = FSortFilterDatasetInjected();
        const activateItemInjected = ActivateItemInjected();
        const expandableTable = useExpandableTable(
            props.expandableAttribute,
            props.keyAttribute,
            props.expandableDescribedby,
            context.emit,
            context.slots,
        );

        return { ...sortFilterDatasetInjected, ...activateItemInjected, ...expandableTable };
    },
    data(): FInteractiveTableData {
        return {
            activeRow: undefined,
            columns: [],
            emptyRow: emptyTableRow(),
            selectedRows: [],
            tr: [],
        };
    },
    computed: {
        hasCaption(): boolean {
            return hasSlot(this, "caption");
        },
        hasCheckboxDescription(): boolean {
            return hasSlot(this, "checkbox-description", { row: this.emptyRow });
        },
        hasInitiateColumns(): boolean {
            return this.columns.length > 0;
        },
        isEmpty(): boolean {
            return this.rows.length === 0;
        },
        visibleColumns(): FTableColumnData[] {
            return this.columns.filter((col) => col.visible);
        },
        tableClasses(): string[] {
            const classes = [];
            if (this.selectable) {
                classes.push("table--selectable");
            }
            if (this.hover) {
                classes.push("table--hover");
            }
            return classes;
        },
        tableRole(): string {
            return this.isExpandableTable ? "treegrid" : "grid";
        },
        wrapperClasses(): string[] {
            return tableScrollClasses(this.scroll);
        },
        nbOfColumns(): number {
            let columnCount = this.columns.length;

            if (this.selectable) {
                columnCount++;
            }
            if (this.isExpandableTable) {
                columnCount++;
            }

            return columnCount;
        },
    },
    watch: {
        rows: {
            immediate: true,
            deep: true,
            handler: function () {
                if (this.modelValue) {
                    // Remove old selected rows that may not exists in rows.
                    this.selectedRows = this.modelValue.filter((row: ListItem) => {
                        return includeItem(row, this.rows, this.keyAttribute);
                    });
                }
            },
        },
    },
    updated() {
        const tbodyElement = this.$refs["tbodyElement"] as HTMLElement;
        const trElements = [].slice.call(tbodyElement.children) as HTMLElement[];
        const trInteractableElements = trElements.filter((tr) => {
            return tr.tabIndex === 0;
        });

        this.tr = trInteractableElements;
    },
    mounted() {
        this.registerCallbackOnSort(this.callbackOnSort);
        this.registerCallbackOnMount(this.callbackSortableColumns);
        this.registerCallbackAfterItemAdd(this.callbackAfterItemAdd);
        this.registerCallbackBeforeItemDelete(this.callbackBeforeItemDelete);
    },
    methods: {
        isActive(row: ListItem): boolean {
            return itemEquals(row, this.activeRow, this.keyAttribute);
        },
        isSelected(row: ListItem): boolean {
            return includeItem(row, this.selectedRows, this.keyAttribute);
        },
        onKeydownExpandable(event: KeyboardEvent, index: number) {
            if (event.key === " " || event.key === "Spacebar") {
                event.preventDefault();
                return;
            }

            onKeydown.call(this, event, index);
        },
        onKeydown(event: KeyboardEvent, index: number): void {
            onKeydown.call(this, event, index);
        },
        onClick(event: MouseEvent, row: ListItem): void {
            const { target } = event as MouseEvent & { target: HTMLElement };
            const isRelevant = ["TD", "TH"].includes(target.nodeName);

            if (isRelevant) {
                /* get <tr> element */
                const parent = target.parentElement;
                this.activate(row, parent);
            }
        },
        activate(row: ListItem, tr: HTMLElement | null): void {
            /**
             * Emitted when row is clicked.
             *
             * @event click
             * @param row
             * @type {ListItem}
             */
            this.$emit("click", row);

            if (this.isExpandableTable && this.hasExpandableContent(row)) {
                this.toggleExpanded(row);
            }

            if (!itemEquals(row, this.activeRow, this.keyAttribute)) {
                /**
                 * Emitted when row is activated.
                 *
                 * @event change
                 * @param row
                 * @type {ListItem}
                 */
                this.$emit("change", row);
                this.activeRow = row;

                if (tr) {
                    /* ie11: force focus on <tr> instead of <td> */
                    tr.focus();

                    /* ie11 also needs to force repaint or the outline will not
                     * be rendered properly */
                    const td = tr.children[0] as HTMLElement;
                    forceRepaintIE11(td);
                }
            }
        },
        rowDescription(row: ListItem): string | undefined {
            const slot = this.$slots["row-description"];
            return renderSlotText(slot, { row });
        },
        onSelect(row: ListItem): void {
            if (includeItem(row, this.selectedRows, this.keyAttribute)) {
                this.selectedRows = this.selectedRows.filter((i) => !itemEquals(i, row, this.keyAttribute));
                /**
                 * Emitted when row is unselected.
                 *
                 * @event unselect
                 * @param row
                 * @type {ListItem}
                 */
                this.$emit("unselect", row);
            } else {
                this.selectedRows.push(row);
                /**
                 * Emitted when row is selected.
                 *
                 * @event select
                 * @param row
                 * @type {ListItem}
                 * @param selectedRows
                 * @type {ListArray}
                 */
                this.$emit("select", row);
            }

            this.updateVModelWithSelectedRows();
            this.$forceUpdate();
        },
        updateVModelWithSelectedRows(): void {
            if (this.modelValue) {
                /**
                 * V-model event to update value property.
                 * @event update:modelValue
                 */
                this.$emit("update:modelValue", this.selectedRows);

                /**
                 * Vue2 v-model event to update value property.
                 * @deprecated
                 * @event update
                 */
                this.$emit("update", this.selectedRows);
            }
        },
        rowClasses(row: ListItem, index: number): string[] {
            const active = this.isActive(row) ? ["table__row--active"] : [];
            const selected = this.isSelected(row) ? ["table__row--selected"] : [];
            const isExpandableRow = this.isExpandableTable && this.hasExpandableContent(row);
            const expandable = isExpandableRow ? ["table__row--expandable"] : [];
            const expanded = this.isExpanded(row) ? ["table__row--expanded-border"] : [];
            const striped = this.striped && index % 2 !== 0 ? ["table__row--striped"] : [];

            return ["table__row", ...active, ...selected, ...striped, ...expandable, ...expanded];
        },
        rowKey(row: ListItem): string {
            const key = row[this.keyAttribute];
            if (typeof key === "undefined") {
                throw new Error(`Key attribute [${this.keyAttribute}]' is missing in row`);
            }
            return String(key);
        },
        columnClasses(column: FTableColumnData): string[] {
            const sortable = column.sortable ? ["table__column--sortable"] : [];
            return ["table__column", `table__column--${column.type}`, ...sortable, column.size];
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
        callbackAfterItemAdd(item: ListItem): void {
            this.activate(item, null);
        },
        callbackBeforeItemDelete(item: ListItem): void {
            if (this.rows.length === 0) {
                return;
            }
            // Activate the item above the deleted one if it exists
            let targetIndex = this.rows.indexOf(item) - 1;
            if (targetIndex < 0 && this.rows.length > 1) {
                targetIndex = 1;
            } else if (targetIndex < 0) {
                targetIndex = 0;
            }
            this.activate(this.rows[targetIndex], this.tr[targetIndex]);
        },
        escapeNewlines(value: string): string {
            return value.replace(/\n/g, "<br/>");
        },
    },
});
</script>
