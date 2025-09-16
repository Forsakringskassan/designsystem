<script setup lang="ts" generic="T">
import { computed, onMounted, ref, watch } from "vue";

// Defines component props
const {
    items = [],
    itemsPerPage = 8,
    itemsLength = 0,
    fetchData = () => null,
} = defineProps<{
    items?: T[];
    itemsPerPage?: number;
    itemsLength?: number;
    fetchData?(firstItemIndex: number, lastItemIndex: number, currentPage: number): T[] | Promise<T[]>;
}>();

// References fetched data
const fetchedData = ref(null as T[] | null);

// References status of ongoing data fetching
const dataFetchingInProgress = ref(false);

// References index of page currently showing
const currentPage = ref(1);

// Computes index for first and last item on current page
const firstItemIndex = computed(() => Math.max(0, itemsPerPage * (currentPage.value - 1)));
const lastItemIndex = computed(() => Math.min(itemsPerPage * currentPage.value, numberOfItems.value));

// Computes array of items on current page
const currentPageItems = computed(() => fetchedData.value ?? items.slice(firstItemIndex.value, lastItemIndex.value));

// Computes number of items on current page
const currentPageItemLength = computed(() => currentPageItems.value.length);

// Computes number of pages
const numberOfPages = computed(() => Math.ceil(numberOfItems.value / itemsPerPage));

// Computes number of items
const numberOfItems = computed(() => (itemsLength > 0 ? itemsLength : items.length));

// Computes maximum number of items per page
// const maxItemsPerPage = computed(() => Math.max(1, Math.min(itemsPerPage, numberOfItems.value)));

onMounted(() => {
    refetchData();
});

watch(currentPage, (newPageValue) => {
    currentPage.value = Math.max(1, Math.min(newPageValue, numberOfPages.value));
    refetchData();
});

async function refetchData(): Promise<void> {
    try {
        dataFetchingInProgress.value = true;
        fetchedData.value = await fetchData(firstItemIndex.value, lastItemIndex.value, currentPage.value);
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

function goToPage(event: CustomEvent): void {
    currentPage.value = event.detail;
}
</script>

<template>
    <div
        @pagination:first="goToFirstPage"
        @pagination:previous="goToPreviousPage"
        @pagination:next="goToNextPage"
        @pagination:last="goToLastPage"
        @pagination:page="goToPage"
    >
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
