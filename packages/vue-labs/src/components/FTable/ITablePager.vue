<script setup lang="ts" generic="T">
import { computed, onMounted, ref } from "vue";
import { FButton } from "@fkui/vue";

const {
    items,
    itemsPerPage = 21,
    // maxVisiblePages = 8,
} = defineProps<{
    items: T[];
    itemsPerPage?: number;
    // maxVisiblePages?: number;
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

function switchPage(nextPage: boolean): void {
    currentPage.value = nextPage ? ++currentPage.value : --currentPage.value;
    defineCurrentPage();
}

function switchToSpecificPage(page: number): void {
    currentPage.value = page;
    defineCurrentPage();
}

function switchPageButtonDisabled(nextPage: boolean): boolean {
    return nextPage ? numberOfItems.value < itemsPerPage * currentPage.value + 1 : currentPage.value === 1;
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

onMounted(() => {
    defineNumberOfPages();
    defineCurrentPage();
});
</script>

<template>
    <div class="pager">
        <f-button
            variant="tertiary"
            icon-left="chevrons-left"
            :disabled="switchPageButtonDisabled(false)"
            @click="switchPage(false)"
        >
            Föregående
        </f-button>

        <template v-for="page in numberOfPages" :key="page">
            <f-button variant="tertiary" @click="switchToSpecificPage(page)">
                {{ page }}
            </f-button>
        </template>

        <f-button
            variant="tertiary"
            icon-right="arrow-right"
            :disabled="switchPageButtonDisabled(true)"
            @click="switchPage(true)"
        >
            Nästa
        </f-button>
    </div>
</template>
