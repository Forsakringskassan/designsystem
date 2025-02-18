<script setup lang="ts">
import { type PropType, computed, nextTick, onMounted, provide, ref, useTemplateRef, watch } from "vue";
import { focus, debounce, alertScreenReader, TranslationService } from "@fkui/logic";
import { IFlex, IFlexItem } from "../../internal-components/IFlex";
import { FSelectField } from "../FSelectField";
import { FIcon } from "../FIcon";
import { FTextField } from "../FTextField";
import { ListItem, ListArray } from "../../types";
import { useTranslate } from "../../plugins";
import { FSortFilterDatasetSortCallback, FSortFilterDatasetMountCallback } from "./FSortFilterDatasetInterface";
import { sort } from "./FSortFilterSorter";
import { filter } from "./FSortFilterFilter";
import { type SortOrder } from "./sort-order";

const $t = useTranslate();

const searchString = ref("");
const sortAttribute = ref<SortOrder>({ attribute: "", name: "", ascendingName: "", ascending: false, id: 0 });
const sortFilterResult = ref<ListArray<ListItem>>([]);
const debouncedFilterResultset = debounce(filterResultset, 250);

let tableCallbackOnSort: FSortFilterDatasetSortCallback = () => {
    /* do nothing */
};

let tableCallbackSortableColumns: FSortFilterDatasetMountCallback = () => {
    /* do nothing */
};

const props = defineProps({
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
        default: TranslationService.provider.translate("fkui.sort-filter-dataset.placeholder.filter", "Sök"),
    },
    /**
     * The order the data will be sorted by if defaultSortAttribute has been set.
     */
    defaultSortAscending: {
        type: Boolean,
        required: false,
        default: () => true,
    },
});

const emit = defineEmits(["datasetSorted", "usedSortAttributes"]);

const showClearButton = computed((): boolean => {
    return searchString.value.length > 0;
});

const sortOrders = computed((): SortOrder[] => {
    const arr = [] as SortOrder[];
    let id = 0;
    Object.keys(props.sortableAttributes).forEach((key: string) => {
        arr.push({
            attribute: key,
            name: props.sortableAttributes[key],
            ascendingName: $t("fkui.sort-filter-dataset.label.ascending", "stigande"),
            ascending: true,
            id: id++,
        });
        arr.push({
            attribute: key,
            name: props.sortableAttributes[key],
            ascendingName: $t("fkui.sort-filter-dataset.label.descending", "fallande"),
            ascending: false,
            id: id++,
        });
    });
    return arr;
});

const filterAttributes = computed((): string[] => {
    return Object.keys(props.sortableAttributes);
});

provide("sort", (attribute: string, ascending: boolean) => {
    const foundAttribute = sortOrders.value.find((item) => {
        return item.attribute === attribute && item.ascending === ascending;
    });

    if (foundAttribute) {
        sortAttribute.value = foundAttribute;
    } else {
        sortAttribute.value = { attribute: "", ascending: false } as SortOrder;
    }

    sortFilterData();

    /**
     * Emits the used sorting attributes.
     * @event usedSortAttributes
     * @param sortAttribute - The attributes used when sorting the data.
     * @type {SortOrder}
     */
    emit("usedSortAttributes", sortAttribute.value);
});

provide("registerCallbackOnSort", (callback: FSortFilterDatasetSortCallback) => {
    tableCallbackOnSort = callback;
});

provide("registerCallbackOnMount", (callback: FSortFilterDatasetMountCallback) => {
    tableCallbackSortableColumns = callback;
});

onMounted(() => {
    tableCallbackSortableColumns(Object.keys(props.sortableAttributes));
});

watch(
    () => props.data,
    () => {
        if (props.defaultSortAttribute !== "") {
            const foundAttribute = sortOrders.value.find((item) => {
                return item.attribute === props.defaultSortAttribute && item.ascending === props.defaultSortAscending;
            });
            if (foundAttribute) {
                sortAttribute.value = foundAttribute;
            }
        }
        sortFilterData();
    },
    { immediate: true, deep: true },
);

function sortFilterData(): void {
    const filteredData = filter(props.data, filterAttributes.value, searchString.value);

    if (sortAttribute.value.attribute === "") {
        sortFilterResult.value = filteredData;
    } else {
        sortFilterResult.value = sort([...filteredData], sortAttribute.value.attribute, sortAttribute.value.ascending);
    }
    // Await slot mount, otherwise if defaultSortAttribute is used the slot doesn't have time to register tableCallbackOnSort before this is called.
    nextTick(() => {
        tableCallbackOnSort(sortAttribute.value.attribute, sortAttribute.value.ascending);
    });
    /**
     * Emitted when the data is sorted.
     * @event datasetSorted
     * @param sortFilterResult - The sorted data.
     * @type {ListArray}
     */
    emit("datasetSorted", sortFilterResult.value);
}

function onChangeSortAttribute(): void {
    sortFilterData();
    /**
     * Emits the used sorting attributes.
     * @event usedSortAttributes
     * @param sortAttribute - The attributes used when sorting the data.
     * @type {SortOrder}
     */
    emit("usedSortAttributes", sortAttribute.value);
}

function onSearchInput(event: InputEvent): void {
    searchString.value = (event.target as HTMLInputElement).value;
    debouncedFilterResultset();
}

function onClickClearSearch(): void {
    searchString.value = "";
    sortFilterData();
    const input = useTemplateRef<HTMLElement>("search-field").value;
    focus(input);
}

function filterResultset(): void {
    sortFilterData();
    if (searchString.value === "") {
        alertScreenReader($t("fkui.sort-filter-dataset.aria-live.empty", "Sök redigera Sök tom"));
    } else {
        const searchAriaLive = $t(
            "fkui.sort-filter-dataset.aria-live.search",
            `Din sökning på "{{ search }}" gav {{ result }} träffar.`,
            {
                result: sortFilterResult.value.length,
                search: searchString.value,
            },
        );

        alertScreenReader(searchAriaLive);
    }
}
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
                                ref="search-field"
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
