<script setup lang="ts" generic="T extends object, TArray extends Dataset<T> | T[] = Dataset<T> | T[]">
import { type Ref, nextTick, onMounted, provide, useTemplateRef, watch } from "vue";
import { TranslationService, alertScreenReader, debounce } from "@fkui/logic";
import { IFlex, IFlexItem } from "../../internal-components/IFlex";
import { useTranslate } from "../../plugins";
import { type Dataset, getHTMLElementFromVueRef } from "../../utils";
import { FIcon } from "../FIcon";
import { FSelectField } from "../FSelectField";
import { FTextField } from "../FTextField";
import {
    type FSortFilterDatasetMountCallback,
    type FSortFilterDatasetSortCallback,
} from "./f-sort-filter-dataset-interface";
import { type SortOrder } from "./sort-order";
import { useSortFilterDataset } from "./use-sort-filter-dataset";

export interface FSortFilterDatasetProps<TArray> {
    /**
     * The data that you wish to sort or filter.
     */
    data: TArray;
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
     * Set placeholder text in filter input field.
     * Default is textkey "fkui.sort-filter-dataset.placeholder.filter"
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
}

type TInfered = TArray extends Dataset<infer U> ? Dataset<U> : TArray;

const {
    data,
    sortableAttributes,
    defaultSortAttribute = "",
    /* eslint-disable-next-line vue/no-boolean-default -- technical debt, boolean attributes should be opt-in not opt-out */
    showSort = true,
    /* eslint-disable-next-line vue/no-boolean-default -- technical debt, boolean attributes should be opt-in not opt-out */
    showFilter = true,
    placeholderFilter = TranslationService.provider.translate("fkui.sort-filter-dataset.placeholder.filter", "Sök"),
    /* eslint-disable-next-line vue/no-boolean-default -- technical debt, boolean attributes should be opt-in not opt-out */
    defaultSortAscending = true,
    filterAttributes = undefined,
} = defineProps<FSortFilterDatasetProps<TInfered>>();

const emit = defineEmits<{
    /**
     * Emitted when the data is sorted.
     *
     * @arg items - The sorted data.
     */
    datasetSorted: [items: TInfered];

    /**
     * Emits the used sorting attributes.
     *
     * @arg sortAttribute - The attributes used when sorting the data.
     */
    usedSortAttributes: [sortAttribute: SortOrder];
}>();

const $t = useTranslate();
const searchField = useTemplateRef("search-field");
const {
    searchString,
    sortAttribute,
    sortFilterResult,
    showClearButton,
    defaultSortValue,
    sortableKeys,
    sortOrders,
    onUserChangeSortAttribute,
    onApiChangeSortAttribute,
} = useSortFilterDataset<T, TInfered>(
    () => data,
    () => sortableAttributes,
    () => filterAttributes,
    defaultSortAttribute,
    defaultSortAscending,
);

function filterResultset(): void {
    searchString.value = searchField.value?.$el.querySelector("input").value;

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

function onClickClearSearch(): void {
    searchString.value = "";

    const input = getHTMLElementFromVueRef(searchField.value).querySelector("input");
    if (input) {
        input.focus();
    }
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

                            <!-- [html-validate-disable-next fkui/class-deprecated -- technical debt] -->
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
