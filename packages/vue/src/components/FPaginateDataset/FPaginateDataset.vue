<script setup lang="ts" generic="T extends object, TArray extends Dataset<T> | T[] = Dataset<T> | T[]">
import { type Ref, computed, onMounted, provide, ref, watch } from "vue";
import { type Dataset, toDataset } from "../../utils";
import { type FPaginateDatasetPageEventDetail } from "../FPaginator";
import { useSortFilterDatasetEvents } from "../FSortFilterDataset";
import { provideSelectableRowSource, useSelectableRowSource } from "../FTable";
import { paginateDatasetKey } from "./provide";

const currentPage = defineModel<number>({
    default: 1,
});

// Defines component props
const {
    items = [],
    itemsPerPage = 10,
    itemsLength = 0,
    fetchData = () => null,
} = defineProps<{
    /**
     * Current visible page (1-indexed)
     */
    /* eslint-disable-next-line vue/require-default-prop -- technical debt, this is only present to appease docs-generator which does not yet recognize `defineModel()` */
    modelValue?: number;
    /**
     * The items to be used. The items will be used in the given array order.
     */
    items?: TInfered;

    /**
     * The number of items per page (at most).
     */
    itemsPerPage?: number;

    /**
     * The number of items to be used.
     *
     * Used together with `fetchData`.
     */
    itemsLength?: number;

    /**
     * The function for fetching data when switching pages.
     *
     * @param firstItemIndex - The index of the first item on the page.
     * @param lastItemIndex - The index of the last item on the page.
     */
    fetchData?(firstItemIndex: number, lastItemIndex: number): TInfered | Promise<TInfered>;
}>();

defineEmits<{
    "update:modelValue": [page: number];
}>();

type TInfered = TArray extends Dataset<infer U> ? Dataset<U> : TArray;

// References fetched data
const fetchedData = ref(null as TInfered | null) as Ref<TInfered | null>;

// References status of ongoing data fetching
const dataFetchingInProgress = ref(false);

// Computes index for first and last item on current page
const firstItemIndex = computed(() => Math.max(0, itemsPerPage * (currentPage.value - 1)));
const lastItemIndex = computed(() => Math.min(itemsPerPage * currentPage.value, numberOfItems.value));

// Computes array of items on current page
const currentPageItems = computed<TInfered>((): TInfered => {
    if (fetchedData.value) {
        return fetchedData.value;
    }
    /* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion -- false positive */
    return toDataset(items.slice(firstItemIndex.value, lastItemIndex.value), items) as TInfered;
});

// Computes number of items on current page
const currentPageItemLength = computed(() => currentPageItems.value.length);

// Computes number of pages
// Keeps page count at minimum 1 so currentPage never falls outside valid pagination state,
// even when the dataset is empty
const numberOfPages = computed(() => Math.max(1, Math.ceil(numberOfItems.value / itemsPerPage)));

// Computes number of items
const numberOfItems = computed(() => (itemsLength > 0 ? itemsLength : items.length));
const { isProvided: hasSelectableRowsProvider } = useSelectableRowSource();

const sortFilterDatasetEvents = useSortFilterDatasetEvents();

onMounted(() => {
    sortFilterDatasetEvents.onFilter(goToFirstPage);
    sortFilterDatasetEvents.onSort(goToFirstPage);
    sortFilterDatasetEvents.onLazyRowsAdded(goToLastPage);

    /* eslint-disable-next-line @typescript-eslint/no-floating-promises -- technical debt */
    refetchData();
});

provide(paginateDatasetKey, {
    currentPage,
    numberOfPages,
});

if (!hasSelectableRowsProvider.value) {
    provideSelectableRowSource({
        rows: computed(() => items as unknown[]),
    });
}

watch(currentPage, (newPageValue) => {
    currentPage.value = Math.max(1, Math.min(newPageValue, numberOfPages.value));
    /* eslint-disable-next-line @typescript-eslint/no-floating-promises -- technical debt */
    refetchData();
});

watch(numberOfPages, (newNumberOfPages) => {
    if (currentPage.value > newNumberOfPages) {
        currentPage.value = newNumberOfPages;
    }
});

async function refetchData(): Promise<void> {
    try {
        dataFetchingInProgress.value = true;
        fetchedData.value = await fetchData(firstItemIndex.value, lastItemIndex.value);
    } finally {
        dataFetchingInProgress.value = false;
    }
}

function goToFirstPage(): void {
    currentPage.value = 1;
}

function goToNextPage(): void {
    currentPage.value++;
}

function goToPreviousPage(): void {
    currentPage.value--;
}

function goToLastPage(): void {
    currentPage.value = numberOfPages.value;
}

function goToPage(event: CustomEvent<FPaginateDatasetPageEventDetail>): void {
    currentPage.value = event.detail.page;
}
</script>

<template>
    <div
        @paginateDataset:first="goToFirstPage"
        @paginateDataset:previous="goToPreviousPage"
        @paginateDataset:next="goToNextPage"
        @paginateDataset:last="goToLastPage"
        @paginateDataset:page="goToPage"
    >
        <!--
            @slot Slot for the page.
            @binding {T[]} items The items on the current page.
            @binding {number} numberOfItems The number of items on the current page.
            @binding {number} currentPage The number of the current page.
            @binding {number} firstItemIndex The index of the first item on the current page.
            @binding {number} lastItemIndex The index of the last item on the current page.
            @binding {number} numberOfPages The number of pages.
        -->
        <slot
            name="default"
            v-bind="{
                items: currentPageItems,
                numberOfItems: currentPageItemLength,
                currentPage,
                firstItemIndex,
                lastItemIndex,
                numberOfPages,
            }"
        >
        </slot>
    </div>
</template>
