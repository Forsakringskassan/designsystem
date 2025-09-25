<script setup lang="ts">
import { assertRef } from "@fkui/logic";
import { FIcon, useTranslate } from "@fkui/vue";
import { computed, useTemplateRef, watchEffect } from "vue";

const {
    numberOfPages,
    currentPage,
    maxPagesShown = 9,
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

const showPaginator = computed((): boolean => numberOfPages > 1);

const previousButtonDisabled = computed((): boolean => currentPage === 1);

const nextButtonDisabled = computed((): boolean => currentPage === numberOfPages);

watchEffect(() => {
    paginatorRef.value?.style.setProperty("--number-of-pages", pages.value.length.toString());
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

    return classes;
}

function showPageNumberAsGap(page: number): boolean {
    return (
        (pages.value.indexOf(page) === 1 && page !== 2) ||
        (pages.value.indexOf(page) === pages.value.length - 2 && page !== numberOfPages - 1)
    );
}
</script>

<template>
    <nav v-if="showPaginator" ref="paginator" class="paginator" aria-label="Table paginator prop">
        <button
            :disabled="previousButtonDisabled"
            type="button"
            size="small"
            class="paginator__previous"
            @click="onClickPreviousButton()"
        >
            <f-icon name="chevrons-left" />
            {{ $t("fkui.paginator.previous", "Föregående") }}
        </button>

        <button
            v-for="page in pages"
            :key="page"
            type="button"
            size="small"
            :disabled="page === currentPage"
            :class="pageClasses(page)"
            :aria-current="page === currentPage"
            aria-label="Go to page"
            @click="onClickPageButton(page)"
        >
            {{ showPageNumberAsGap(page) ? "..." : page }}
        </button>

        <button
            :disabled="nextButtonDisabled"
            type="button"
            size="small"
            class="paginator__next"
            @click="onClickNextButton()"
        >
            {{ $t("fkui.paginator.next", "Nästa") }}
            <f-icon name="arrow-right" />
        </button>
    </nav>
</template>
