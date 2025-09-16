<script setup lang="ts">
import { computed, ref, useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { useTranslate } from "../../plugins";
import FIcon from "../FIcon/FIcon.vue";
import { computePages } from "./compute-pages";

const {
    numberOfPages,
    currentPage,
    numberOfPagesToShow = 9,
} = defineProps<{
    numberOfPages: number;
    currentPage: number;
    numberOfPagesToShow?: number;
}>();

const paginatorRef = useTemplateRef<HTMLElement>("paginator");
const $t = useTranslate();

// References the lower limit of maximum number of pages
const maxNumberOfPagesLowerLimit = ref(5);

// References the upper limit of maximum number of pages
// References `$number-of-pages` in _paginator.scss
const maxNumberOfPagesUpperLimit = ref(9);

// Computes the maximum number of pages to show
const maxPagesShown = computed(() =>
    Math.max(maxNumberOfPagesLowerLimit.value, Math.min(numberOfPagesToShow, maxNumberOfPagesUpperLimit.value)),
);

// Computes a array of pages to show
const pages = computed(() => computePages({ currentPage, numberOfPages, maxPagesShown: maxPagesShown.value }));

function onClickPreviousButton(): void {
    dispatchPaginationEvent("previous");
}

function onClickNextButton(): void {
    dispatchPaginationEvent("next");
}

function onClickPageButton(page: number): void {
    dispatchPaginationEvent("page", page);
}

function dispatchPaginationEvent(type: string, page?: number): void {
    assertRef(paginatorRef);
    paginatorRef.value.dispatchEvent(
        new CustomEvent(`pagination:${type}`, {
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
    <nav ref="paginator" class="paginator" aria-label="Table paginator prop">
        <button type="button" size="small" class="paginator__previous" @click="onClickPreviousButton()">
            <f-icon name="chevrons-left" />
            {{ $t("fkui.paginator.previous", "Föregående") }}
        </button>

        <div class="paginator__pages">
            <button
                v-for="page in pages"
                :key="page"
                type="button"
                size="small"
                :class="pageClasses(page)"
                :aria-current="page === currentPage"
                aria-label="Go to page"
                @click="onClickPageButton(page)"
            >
                {{ showPageNumberAsGap(page) ? "..." : page }}
            </button>
        </div>

        <div class="paginator__navigation">
            <button type="button" size="small" class="paginator__previous" @click="onClickPreviousButton()">
                <f-icon name="chevrons-left" class="paginator__icon" />
                {{ $t("fkui.paginator.previous", "Föregående") }}
            </button>
            <button type="button" size="small" class="paginator__next" @click="onClickNextButton()">
                {{ $t("fkui.paginator.next", "Nästa") }}
                <f-icon name="arrow-right" class="paginator__icon" />
            </button>
        </div>
    </nav>
</template>
