<script setup lang="ts" generic="T">
import { type Ref, computed, nextTick, onMounted, provide, ref, toValue, useTemplateRef, watch } from "vue";
import { TranslationService, alertScreenReader, debounce } from "@fkui/logic";
import { IFlex, IFlexItem } from "../../internal-components/IFlex";
import { useTranslate } from "../../plugins";
import { getHTMLElementFromVueRef } from "../../utils";
import { FIcon } from "../FIcon";
import { FSelectField } from "../FSelectField";
import { FTextField } from "../FTextField";
import {
    type FSortFilterDatasetMountCallback,
    type FSortFilterDatasetSortCallback,
} from "./FSortFilterDatasetInterface";
import { filter } from "./FSortFilterFilter";
import { sort } from "./FSortFilterSorter";
import { type SortOrder } from "./sort-order";
import { type SortableAttribute } from "./sortable-attribute";

export interface FSortFilterDatasetProps<T> {
    /**
     * The data that you wish to sort or filter.
     */
    data: T[];
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
} = defineProps<FSortFilterDatasetProps<T>>();

const emit = defineEmits<{
    /**
     * Emitted when the data is sorted.
     *
     * @arg items - The sorted data.
     */
    datasetSorted: [items: T[]];

    /**
     * Emits the used sorting attributes.
     *
     * @arg sortAttribute - The attributes used when sorting the data.
     */
    usedSortAttributes: [sortAttribute: SortOrder];
}>();

const $t = useTranslate();
const searchField = useTemplateRef("search-field");

const useDefaultSortOrder = ref(true);
const searchString = ref("");
const defaultSortValue = { attribute: "", name: "", ascendingName: "", ascending: false, id: 0 } satisfies SortOrder;
const sortAttribute = ref<SortOrder>({ ...defaultSortValue });
const sortFilterResult = ref<T[]>([]) as Ref<T[]>; // eslint-disable-line @typescript-eslint/no-unnecessary-type-assertion -- technical debt
const debouncedFilterResultset = debounce(filterResultset, 250);

let tableCallbackOnSort: FSortFilterDatasetSortCallback = () => {
    /* do nothing */
};

let tableCallbackSortableColumns: FSortFilterDatasetMountCallback = () => {
    /* do nothing */
};

const showClearButton = computed(() => {
    return searchString.value.length > 0;
});

/* all enumerable keys from sortableAttributes */
const sortableKeys = computed(() => {
    return Reflect.ownKeys(sortableAttributes).filter((key) => {
        const descriptor = Object.getOwnPropertyDescriptor(sortableAttributes, key);
        return descriptor?.enumerable ?? false;
    });
});

const sortOrders = computed((): SortableAttribute[] => {
    const arr = [] as SortableAttribute[];
    let id = 0;
    for (const key of sortableKeys.value) {
        arr.push({
            attribute: key,
            name: sortableAttributes[key],
            ascendingName: $t("fkui.sort-filter-dataset.label.ascending", "stigande"),
            ascending: true,
            id: id++,
        });
        arr.push({
            attribute: key,
            name: sortableAttributes[key],
            ascendingName: $t("fkui.sort-filter-dataset.label.descending", "fallande"),
            ascending: false,
            id: id++,
        });
    }
    return arr;
});

const internalFilterAttributes = computed(() => {
    if (!filterAttributes) {
        return Object.keys(data[0] ?? {});
    }
    return filterAttributes;
});

provide("sort", (attribute: string, ascending: boolean) => {
    const foundAttribute = sortOrders.value.find((item) => {
        return item.attribute === attribute && item.ascending === ascending;
    });

    if (foundAttribute) {
        sortAttribute.value = {
            ...foundAttribute,
            name: toValue(foundAttribute.name),
        };
    } else {
        sortAttribute.value = { ...defaultSortValue };
    }

    sortFilterData();

    emit("usedSortAttributes", sortAttribute.value);
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

watch(
    () => data,
    () => {
        if (defaultSortAttribute !== "" && useDefaultSortOrder.value) {
            const foundAttribute = sortOrders.value.find((item) => {
                return item.attribute === defaultSortAttribute && item.ascending === defaultSortAscending;
            });
            if (foundAttribute) {
                sortAttribute.value = {
                    ...foundAttribute,
                    name: toValue(foundAttribute.name),
                };
            }
            useDefaultSortOrder.value = false;
        }
        sortFilterData();
    },
    { immediate: true, deep: true },
);

function sortFilterData(): void {
    const filteredData = filter(data, internalFilterAttributes.value, searchString.value);
    const sortedData = sort(filteredData, sortAttribute.value.attribute, sortAttribute.value.ascending);

    sortFilterResult.value = sortedData;

    // Await slot mount, otherwise if defaultSortAttribute is used the slot doesn't have time to register tableCallbackOnSort before this is called.
    /* eslint-disable-next-line @typescript-eslint/no-floating-promises -- technical debt */
    nextTick(() => {
        tableCallbackOnSort(sortAttribute.value.attribute, sortAttribute.value.ascending);
    });

    emit("datasetSorted", sortFilterResult.value);
}

function onChangeSortAttribute(): void {
    sortFilterData();
    emit("usedSortAttributes", sortAttribute.value);
}

function onSearchInput(event: InputEvent): void {
    searchString.value = (event.target as HTMLInputElement).value;
    debouncedFilterResultset();
}

function onClickClearSearch(): void {
    searchString.value = "";
    sortFilterData();
    const input = getHTMLElementFromVueRef(searchField.value).querySelector("input");
    if (input) {
        input.focus();
    }
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
                            @change="onChangeSortAttribute"
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
