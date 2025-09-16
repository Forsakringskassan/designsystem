<script setup lang="ts">
import { assertRef } from "@fkui/logic";
import { FButton, useTranslate } from "@fkui/vue";
import { computed, useTemplateRef } from "vue";

const {
    numberOfPages,
    currentPage,
    maxPagesShown = 8,
} = defineProps<{
    numberOfPages: number;
    currentPage: number;
    maxPagesShown?: number;
}>();

const paginatorRef = useTemplateRef("paginator");
const $t = useTranslate();

const pages = computed(() => {
    let startPage = Math.max(currentPage - Math.floor(maxPagesShown / 2), 1);
    let endPage = startPage + maxPagesShown - 1;

    if (endPage > numberOfPages) {
        endPage = numberOfPages;
        startPage = Math.max(endPage - maxPagesShown + 1, 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    if (startPage > 1) {
        pages.shift(); //remove first array item
        pages.unshift(1); //add first
    }

    if (endPage < numberOfPages) {
        pages.pop(); //remove last array item
        pages.push(numberOfPages); //add last
    }

    return pages;
});

function onClickPreviousButton(): void {
    assertRef(paginatorRef);
    paginatorRef.value.dispatchEvent(
        new CustomEvent("pagination:previous", {
            bubbles: true,
        }),
    );
}

function onClickNextButton(): void {
    assertRef(paginatorRef);
    paginatorRef.value.dispatchEvent(
        new CustomEvent("pagination:next", {
            bubbles: true,
        }),
    );
}

function onClickPageButton(page: number): void {
    assertRef(paginatorRef);
    paginatorRef.value.dispatchEvent(
        new CustomEvent("pagination:page", {
            bubbles: true,
            detail: page,
        }),
    );
}

function pageClasses(page: number): string[] {
    const rootClass = "paginator__page";
    const classes = [rootClass];

    // --active
    if (page === currentPage) {
        classes.push(`${rootClass}--active`);
    }

    // --gap-after
    if (page === 1 && !pages.value.includes(2)) {
        classes.push(`${rootClass}--gap-after`);
    }

    // --gap-before
    if (page === numberOfPages && !pages.value.includes(numberOfPages - 1)) {
        classes.push(`${rootClass}--gap-before`);
    }

    return classes;
}
</script>

<template>
    <div v-if="numberOfPages > 1" ref="paginator" class="paginator">
        <f-button
            :disabled="currentPage === 1"
            variant="tertiary"
            size="small"
            icon-left="chevrons-left"
            class="paginator__previous"
            @click="onClickPreviousButton()"
        >
            {{ $t("fkui.table.paginator.previous", "Föregående") }}
        </f-button>

        <f-button
            v-for="page in pages"
            :key="page"
            size="small"
            variant="tertiary"
            :disabled="page === currentPage"
            :class="pageClasses(page)"
            @click="onClickPageButton(page)"
        >
            {{ page }}
        </f-button>

        <f-button
            :disabled="currentPage === numberOfPages"
            variant="tertiary"
            size="small"
            icon-right="arrow-right"
            class="paginator__next"
            @click="onClickNextButton()"
        >
            {{ $t("fkui.table.paginator.next", "Nästa") }}
        </f-button>
    </div>
</template>
