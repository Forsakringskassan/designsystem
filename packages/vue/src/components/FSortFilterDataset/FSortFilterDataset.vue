<script setup lang="ts" generic="T extends object">
import { type Ref, computed, nextTick, onMounted, provide, watch } from "vue";
import { TranslationService, alertScreenReader, debounce } from "@fkui/logic";
import { IFlex, IFlexItem } from "../../internal-components/IFlex";
import { useTranslate } from "../../plugins";
import { type Dataset } from "../../utils";
import { FSelectField } from "../FSelectField";
import { FSearchTextField } from "../FTextField";
import {
    type FSortFilterDatasetMountCallback,
    type FSortFilterDatasetSortCallback,
} from "./f-sort-filter-dataset-interface";
import { type SortOrder } from "./sort-order";
import { useSortFilterDataset } from "./use-sort-filter-dataset";

const {
    data,
    sortableAttributes,
    defaultSortAttribute = "",
    /* eslint-disable-next-line vue/no-boolean-default -- technical debt, boolean attributes should be opt-in not opt-out */
    showSort = true,
    /* eslint-disable-next-line vue/no-boolean-default -- technical debt, boolean attributes should be opt-in not opt-out */
    showFilter = true,
    filterLabel = undefined,
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- for backwards compatibility
    placeholderFilter = undefined,
    /* eslint-disable-next-line vue/no-boolean-default -- technical debt, boolean attributes should be opt-in not opt-out */
    defaultSortAscending = true,
    filterAttributes = undefined,
} = defineProps<{
    /**
     * The data that you wish to sort or filter.
     */
    data: Dataset<T> | T[];
    /**
     * All the attributes you want to enable sorting for and the corresponding name to display in the dropdown.
     * Structured as `{attributeName: "Name for dropdown", secondAttributeName: "Name for dropdown"}`
     */
    sortableAttributes: Record<PropertyKey, string | Readonly<Ref<string>>>;
    /**
     * If set the data will be sorted by this attribute by default.
     */
    defaultSortAttribute?: PropertyKey;
    /**
     * Show/hides the sort dropdown.
     */
    showSort?: boolean;
    /**
     * Show/hides the filter input.
     */
    showFilter?: boolean;
    /**
     * Label text for filter input field.
     */
    filterLabel?: string;
    /**
     * Previously set placeholder text in filter input field.
     *
     * Default is textkey "fkui.sort-filter-dataset.placeholder.filter"
     *
     * @deprecated Use `filterLabel` instead. Deprecated since v6.40.0.
     */
    placeholderFilter?: string;
    /**
     * The order the data will be sorted by if defaultSortAttribute has been set.
     */
    defaultSortAscending?: boolean;
    /**
     * Attributes that should be included in search when filtering by input.
     * Default includes all attributes.
     */
    filterAttributes?: PropertyKey[];
}>();

const emit = defineEmits<{
    /**
     * Emitted when the data is sorted.
     *
     * @arg items - The sorted data.
     */
    datasetSorted: [items: Dataset<T>];

    /**
     * Emits the used sorting attributes.
     *
     * @arg sortAttribute - The attributes used when sorting the data.
     */
    usedSortAttributes: [sortAttribute: SortOrder];
}>();

const $t = useTranslate();
const {
    searchString,
    sortAttribute,
    sortFilterResult,
    defaultSortValue,
    sortableKeys,
    sortOrders,
    onUserChangeSortAttribute,
    onApiChangeSortAttribute,
} = useSortFilterDataset<T>(
    () => data,
    () => sortableAttributes,
    () => filterAttributes,
    defaultSortAttribute,
    defaultSortAscending,
);

const clearableScreenReaderText = $t("fkui.sort-filter-dataset.clear.filter", "Rensa sökfält");

const translatedFilterLabel = computed(() => {
    const label = filterLabel ?? placeholderFilter;
    if (label) {
        return label;
    }
    return TranslationService.provider.translate("fkui.sort-filter-dataset.filter.label", "Sök");
});

function filterResultset(): void {
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

const debouncedFilterResultset = debounce(filterResultset, 250);

let tableCallbackOnSort: FSortFilterDatasetSortCallback = () => {
    /* do nothing */
};

let tableCallbackSortableColumns: FSortFilterDatasetMountCallback = () => {
    /* do nothing */
};

provide("sort", (attribute: string, ascending: boolean) => {
    onApiChangeSortAttribute(attribute, ascending);
});

provide("registerCallbackOnSort", (callback: FSortFilterDatasetSortCallback) => {
    tableCallbackOnSort = callback;
});

provide("registerCallbackOnMount", (callback: FSortFilterDatasetMountCallback) => {
    tableCallbackSortableColumns = callback;
});

onMounted(() => {
    tableCallbackSortableColumns(sortableKeys.value);
});

function onSearchInput(): void {
    debouncedFilterResultset();
}

watch(sortAttribute, () => {
    emit("usedSortAttributes", sortAttribute.value);
});

watch(
    sortFilterResult,
    (newValue, oldValue) => {
        if (newValue === oldValue) {
            return;
        }

        // Await slot mount, otherwise if defaultSortAttribute is used the slot doesn't have time to register tableCallbackOnSort before this is called.
        /* eslint-disable-next-line @typescript-eslint/no-floating-promises -- technical debt */
        nextTick(() => {
            tableCallbackOnSort(sortAttribute.value.attribute, sortAttribute.value.ascending);
        });
        emit("datasetSorted", sortFilterResult.value);
    },
    { immediate: true },
);
</script>

<template>
    <div class="sort-filter-dataset">
        <i-flex collapse gap="3x" wrap>
            <i-flex-item shrink align="center">
                <!--
                     @slot Slot for header to the left of the filter dropdown. Slot content is available through `v-slot="{ <propertyName> }"`, e.g. `v-slot="{ slotClass }"`.
                     @binding {string[]} slotClass - CSS classes to use for the SortFilter header element. Use with `:class="slotClass"`.
                -->
                <slot name="header" v-bind="{ slotClass: 'sort-filter-dataset__toolbar__header' }"></slot>
            </i-flex-item>

            <i-flex-item grow>
                <i-flex collapse float="right">
                    <i-flex-item v-if="showFilter" shrink align="center">
                        <div class="sort-filter-dataset__search">
                            <f-search-text-field
                                v-model="searchString"
                                maxlength="64"
                                :clearable-screen-reader-text
                                inline
                                type="text"
                                @input="onSearchInput"
                            >
                                {{ translatedFilterLabel }}
                            </f-search-text-field>
                        </div>
                    </i-flex-item>

                    <i-flex-item v-if="showSort" shrink align="center">
                        <f-select-field
                            v-model="sortAttribute"
                            class="sort-filter-dataset__sort"
                            inline
                            @change="onUserChangeSortAttribute"
                        >
                            <template #label>{{
                                $t("fkui.sort-filter-dataset.label.sort", "Sortera\u00A0på")
                            }}</template>

                            <option :value="defaultSortValue">
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
             @slot Slot for displaying the data. The data is available through `v-slot="{ <propertyName> }"`, e.g. `v-slot="{ sortFilterResult }"`.
             @binding {T[]} sortFilterResult - The sorted or filtered data.
        -->
        <slot v-bind="{ sortFilterResult }"></slot>
    </div>
</template>
