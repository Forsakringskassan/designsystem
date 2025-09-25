<script setup lang="ts" generic="T">
import { computed, ref } from "vue";

const { items, itemsPerPage = 8 } = defineProps<{
    items: T[];
    itemsPerPage?: number;
}>();

// Defines index of page currently showing
const currentPage = ref(1);

// Computes index for first and last item on current page
const firstItemIndex = computed(() => Math.max(0, itemsPerPage * (currentPage.value - 1)));
const lastItemIndex = computed(() => Math.min(itemsPerPage * currentPage.value, numberOfItems.value));

// Computes array of items on current page
const currentPageItems = computed(() => items.slice(firstItemIndex.value, lastItemIndex.value));

// Computes number of items on current page
const currentPageItemLength = computed(() => currentPageItems.value.length);

// Computes number of pages
const numberOfPages = computed(() => Math.ceil(numberOfItems.value / itemsPerPage));

// Computes number of items
const numberOfItems = computed(() => items.length);

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
