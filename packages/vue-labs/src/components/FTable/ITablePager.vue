<script setup lang="ts" generic="T">
import { computed, onMounted, ref } from "vue";
import { FBadge, FButton } from "@fkui/vue";

const { items, itemsPerPage = 4 } = defineProps<{
    items: T[];
    itemsPerPage?: number;
}>();

const currentPageIndex = ref(1);
const firstItemIndex = ref(0);
const lastItemIndex = ref(0);

const numberOfItems = computed(() => {
    return items.length;
});

const emit = defineEmits<{
    itemRange: [items: T[]];
}>();

function switchPage(nextPage: boolean): void {
    currentPageIndex.value = nextPage ? ++currentPageIndex.value : --currentPageIndex.value;
    calculateItemRange();
}

function switchPageButtonDisabled(nextPage: boolean): boolean {
    return nextPage ? numberOfItems.value < itemsPerPage * currentPageIndex.value + 1 : currentPageIndex.value === 1;
}

function calculateItemRange(): void {
    firstItemIndex.value = itemsPerPage * (currentPageIndex.value - 1) + 1;
    lastItemIndex.value = Math.min(itemsPerPage * currentPageIndex.value, numberOfItems.value);
    const itemRange = items.slice(firstItemIndex.value - 1, lastItemIndex.value);
    emit("itemRange", itemRange);
}

onMounted(() => {
    calculateItemRange();
});
</script>

<template>
    <div class="container-fluid">
        <div class="row row--align--justify">
            <div class="col col--sm-8">
                <f-badge status="success">Sida: {{ currentPageIndex }}</f-badge>
                <f-badge status="success">Range: {{ firstItemIndex }}-{{ lastItemIndex }}</f-badge>
                <f-badge status="info">{{ itemsPerPage }} element/sida</f-badge>
                <f-badge status="info">{{ numberOfItems }} element totalt</f-badge>
            </div>
            <div class="col col--sm-2">
                <f-button variant="tertiary" :disabled="switchPageButtonDisabled(false)" @click="switchPage(false)">
                    &lt;
                </f-button>
            </div>
            <div class="col col--sm-2">
                <f-button variant="tertiary" :disabled="switchPageButtonDisabled(true)" @click="switchPage(true)">
                    &gt;
                </f-button>
            </div>
        </div>
    </div>
</template>
