<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { focus, debounce, alertScreenReader } from "@fkui/logic";
import { IFlex, IFlexItem } from "../../internal-components/IFlex";
import { FSelectField } from "../FSelectField";
import { FIcon } from "../FIcon";
import { FTextField } from "../FTextField";
import { ListItem, ListArray } from "../../types";
import { TranslationMixin } from "../../plugins";
import {
    FSortFilterDatasetInterface,
    FSortFilterDatasetSortCallback,
    FSortFilterDatasetMountCallback,
} from "./FSortFilterDatasetInterface";
import { sort } from "./FSortFilterSorter";
import { filter } from "./FSortFilterFilter";
import { type SortOrder } from "./sort-order";

export default defineComponent({
    name: "FSortFilterDataset",
    components: { FSelectField, FTextField, FIcon, IFlex, IFlexItem },
    mixins: [TranslationMixin],
    provide(): FSortFilterDatasetInterface {
        return {
            sort: (attribute: string, ascending: boolean) => {
                const foundAttribute = this.sortOrders.find(
                    (item) => item.attribute === attribute && item.ascending === ascending,
                );

                if (foundAttribute) {
                    this.sortAttribute = foundAttribute;
                } else {
                    this.sortAttribute = { attribute: "", ascending: false } as SortOrder;
                }
                this.sortFilterData();
                /**
                 * Emits the used sorting attributes.
                 * @event usedSortAttributes
                 * @param sortAttribute - The attributes used when sorting the data.
                 * @type {SortOrder}
                 */
                this.$emit("usedSortAttributes", this.sortAttribute);
            },
            registerCallbackOnSort: (callback: FSortFilterDatasetSortCallback) => {
                this.tableCallbackOnSort = callback;
            },
            registerCallbackOnMount: (callback: FSortFilterDatasetMountCallback) => {
                this.tableCallbackSortableColumns = callback;
            },
        };
    },
    props: {
        /**
         * The data that you wish to sort or filter.
         */
        data: {
            type: Array as PropType<ListArray<ListItem>>,
            required: true,
            default: () => [],
        },
        /**
         * All the attributes you want to enable sorting for and the corresponding name to display in the dropdown.
         * Structured as `{attributeName: "Name for dropdown", secondAttributeName: "Name for dropdown"}`
         */
        sortableAttributes: {
            type: Object as PropType<Record<string, string>>,
            required: true,
        },
        /**
         * If set the data will be sorted by this attribute by default.
         */
        defaultSortAttribute: {
            type: String,
            required: false,
            default: () => "",
        },
        /**
         * Show/hides the sort dropdown.
         */
        showSort: {
            type: Boolean,
            required: false,
            default: true,
        },
        /**
         * Show/hides the filter input.
         */
        showFilter: {
            type: Boolean,
            required: false,
            default: true,
        },
        /**
         * Set placeholder text in filter input field.
         * Default is textkey "fkui.sort-filter-dataset.placeholder.filter"
         */
        placeholderFilter: {
            type: String,
            required: false,
            default: TranslationMixin.methods.$t("fkui.sort-filter-dataset.placeholder.filter", "Sök"),
        },
        /**
         * The order the data will be sorted by if defaultSortAttribute has been set.
         */
        defaultSortAscending: {
            type: Boolean,
            required: false,
            default: () => true,
        },
    },
    emits: ["datasetSorted", "usedSortAttributes"],
    data() {
        return {
            searchString: "",
            sortAttribute: { attribute: "", ascending: false } as SortOrder,
            sortFilterResult: [] as ListArray<ListItem>,
            tableCallbackOnSort: (() => {
                return;
            }) as FSortFilterDatasetSortCallback,
            tableCallbackSortableColumns: (() => {
                return;
            }) as FSortFilterDatasetMountCallback,
        };
    },
    computed: {
        showClearButton(): boolean {
            return this.searchString.length > 0;
        },
        sortOrders(): SortOrder[] {
            const arr = [] as SortOrder[];
            let id = 0;
            Object.keys(this.sortableAttributes).forEach((key: string) => {
                arr.push({
                    attribute: key,
                    name: this.sortableAttributes[key],
                    ascendingName: this.$t("fkui.sort-filter-dataset.label.ascending", "stigande"),
                    ascending: true,
                    id: id++,
                });
                arr.push({
                    attribute: key,
                    name: this.sortableAttributes[key],
                    ascendingName: this.$t("fkui.sort-filter-dataset.label.descending", "fallande"),
                    ascending: false,
                    id: id++,
                });
            });
            return arr;
        },
        filterAttributes(): string[] {
            return Object.keys(this.sortableAttributes);
        },
    },
    watch: {
        data: {
            immediate: true,
            deep: true,
            handler: function () {
                if (this.defaultSortAttribute !== "") {
                    const foundAttribute = this.sortOrders.find(
                        (item) =>
                            item.attribute === this.defaultSortAttribute &&
                            item.ascending === this.defaultSortAscending,
                    );
                    if (foundAttribute) {
                        this.sortAttribute = foundAttribute;
                    }
                }
                this.sortFilterData();
            },
        },
    },
    created() {
        this.debouncedFilterResultset = debounce(this.filterResultset, 250).bind(this);
    },
    mounted() {
        this.tableCallbackSortableColumns(Object.keys(this.sortableAttributes));
    },
    methods: {
        sortFilterData(): void {
            const filteredData = filter(this.data, this.filterAttributes, this.searchString);

            if (this.sortAttribute.attribute === "") {
                this.sortFilterResult = filteredData;
            } else {
                this.sortFilterResult = sort(
                    [...filteredData],
                    this.sortAttribute.attribute,
                    this.sortAttribute.ascending,
                );
            }
            // Await slot mount, otherwise if defaultSortAttribute is used the slot doesn't have time to register tableCallbackOnSort before this is called.
            this.$nextTick(() => {
                this.tableCallbackOnSort(this.sortAttribute.attribute, this.sortAttribute.ascending);
            });
            /**
             * Emitted when the data is sorted.
             * @event datasetSorted
             * @param sortFilterResult - The sorted data.
             * @type {ListArray}
             */
            this.$emit("datasetSorted", this.sortFilterResult);
        },
        onChangeSortAttribute(): void {
            this.sortFilterData();
            /**
             * Emits the used sorting attributes.
             * @event usedSortAttributes
             * @param sortAttribute - The attributes used when sorting the data.
             * @type {SortOrder}
             */
            this.$emit("usedSortAttributes", this.sortAttribute);
        },
        onSearchInput(event: InputEvent): void {
            this.searchString = (event.target as HTMLInputElement).value;
            this.debouncedFilterResultset();
        },
        onClickClearSearch(): void {
            this.searchString = "";
            this.sortFilterData();
            const input = this.$el.querySelector(".text-field--inline input");
            focus(input);
        },
        debouncedFilterResultset() {
            // debounce method created in create()
        },
        filterResultset(): void {
            this.sortFilterData();
            if (this.searchString === "") {
                alertScreenReader(this.$t("fkui.sort-filter-dataset.aria-live.empty", "Sök redigera Sök tom"));
            } else {
                const searchAriaLive = this.$t(
                    "fkui.sort-filter-dataset.aria-live.search",
                    `Din sökning på "{{ search }}" gav {{ result }} träffar.`,
                    {
                        result: this.sortFilterResult.length,
                        search: this.searchString,
                    },
                );

                alertScreenReader(searchAriaLive);
            }
        },
    },
});
</script>

<template>
    <div class="sort-filter-dataset">
        <i-flex collapse gap="3x" wrap>
            <i-flex-item shrink align="center">
                <!--
@slot Slot for header to the left of the filter dropdown.

Slot content is available through `v-slot="{ <propertyName> }"`, e.g. `v-slot="{ slotClass }"`.

The following properties are available:

* `slotClass: string[];` CSS classes to use for the SortFilter header element. Use with `:class="slotClass"`.
      -->
                <slot name="header" v-bind="{ slotClass: 'sort-filter-dataset__toolbar__header' }"></slot>
            </i-flex-item>

            <i-flex-item grow>
                <i-flex collapse float="right">
                    <i-flex-item v-if="showFilter" shrink align="center">
                        <div class="sort-filter-dataset__search">
                            <f-icon name="search" class="sort-filter-dataset__search__magnify-icon" />

                            <f-text-field
                                v-model="searchString"
                                inline
                                :placeholder="placeholderFilter"
                                maxlength="64"
                                @input="onSearchInput"
                            >
                                <span class="sr-only">{{ placeholderFilter }}</span>
                            </f-text-field>

                            <button
                                v-if="showClearButton"
                                type="button"
                                class="button button--discrete sort-filter-dataset__search__close-icon"
                                :title="$t('fkui.sort-filter-dataset.clear.filter', 'Rensa sökfält')"
                                @click="onClickClearSearch"
                            >
                                <f-icon name="close" />
                                <span class="sr-only">{{
                                    $t("fkui.sort-filter-dataset.clear.filter", "Rensa sökfält")
                                }}</span>
                            </button>
                        </div>
                    </i-flex-item>

                    <i-flex-item v-if="showSort" shrink align="center">
                        <f-select-field
                            v-model="sortAttribute"
                            class="sort-filter-dataset__sort"
                            inline
                            @change="onChangeSortAttribute"
                        >
                            <template #label>{{
                                $t("fkui.sort-filter-dataset.label.sort", "Sortera\u00A0på")
                            }}</template>

                            <option :value="{ attribute: '', ascending: false }">
                                {{ $t("fkui.sort-filter-dataset.label.unsorted", "Välj") }}
                            </option>

                            <option v-for="sortOrder in sortOrders" :key="sortOrder.id" :value="sortOrder">
                                {{ sortOrder.name }} ({{ sortOrder.ascendingName }})
                            </option>
                        </f-select-field>
                    </i-flex-item>
                </i-flex>
            </i-flex-item>
        </i-flex>
        <!--
@slot Slot for displaying the data.

The data is available through `v-slot="{ <propertyName> }"`, e.g. `v-slot="{ sortFilterResult }"`.

The following properties are available:

* `sortFilterResult: ListArray<ListItem>;` The sorted or filtered data.
    -->
        <slot v-bind="{ sortFilterResult }"></slot>
    </div>
</template>
