<script setup lang="ts" generic="T">
import { computed, onMounted, ref } from "vue";
import { FButton } from "@fkui/vue";

const { items, itemsPerPage = 11 } = defineProps<{
    items: T[];
    itemsPerPage?: number;
}>();

const currentPage = ref(1);
const currentPageItemLength = ref(0);

const numberOfPages = ref(0);

const numberOfItems = computed(() => {
    return items.length;
});

const emit = defineEmits<{
    itemRange: [items: T[]];
}>();

function switchToNextPage(): void {
    currentPage.value++;
    defineCurrentPage();
}

function switchToPreviousPage(): void {
    currentPage.value--;
    defineCurrentPage();
}

function switchToSpecificPage(page: number): void {
    currentPage.value = page;
    defineCurrentPage();
}

function defineNumberOfPages(): void {
    numberOfPages.value = Math.ceil(numberOfItems.value / itemsPerPage);
}

function defineCurrentPage(): void {
    // Define current page item limits
    const currentPageFirstItemId = itemsPerPage * (currentPage.value - 1) + 1;
    const currentPageLastItemId = Math.min(itemsPerPage * currentPage.value, numberOfItems.value);

    // Define current page items
    const currentPageItems = items.slice(currentPageFirstItemId - 1, currentPageLastItemId);
    emit("itemRange", currentPageItems);

    // Define number of items on current page
    currentPageItemLength.value = currentPageItems.length;
}

function showPageButton(page: number): boolean {
    return page === 1 || Math.abs(currentPage.value - page) <= 2 || page === numberOfPages.value;
}

onMounted(() => {
    defineNumberOfPages();
    defineCurrentPage();
});
</script>

<template>
    <div class="pager">
        <f-button
            v-if="currentPage !== 1"
            variant="tertiary"
            size="small"
            icon-left="chevrons-left"
            @click="switchToPreviousPage()"
        >
            Föregående
        </f-button>

        <template v-for="page in numberOfPages" :key="page">
            <f-button
                v-if="showPageButton(page)"
                size="small"
                variant="tertiary"
                :disabled="page === currentPage"
                @click="switchToSpecificPage(page)"
            >
                {{ page }}
            </f-button>
            <span v-else-if="showPageButton(page + 1)">...</span>
        </template>

        <f-button
            v-if="currentPage !== numberOfPages"
            variant="tertiary"
            size="small"
            icon-right="arrow-right"
            @click="switchToNextPage()"
        >
            Nästa
        </f-button>
    </div>
</template>
