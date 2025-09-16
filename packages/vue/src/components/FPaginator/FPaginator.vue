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

// Computes the label for the navigator
const navigatorLabel = computed(() => $t("fkui.paginator.navigatorLabel", "Navigera mellan sidor"));

// Computes the label for the "Next" button
const nextButtonLabel = computed(() => $t("fkui.paginator.next", "Nästa"));

// Computes a array of pages to show
const pages = computed(() => computePages({ currentPage, numberOfPages, maxPagesShown: maxPagesShown.value }));

// Computes the label for the "Previous" button
const previousButtonLabel = computed(() => $t("fkui.paginator.previous", "Föregående"));

// Returns the page counter label
function pageCounterLabel(currentPage: number, numberOfPages: number): string {
    return $t("fkui.paginator.pageCounter", "Sida {{ currentPage }} av {{ numberOfPages }}", {
        currentPage,
        numberOfPages,
    });
}

// Returns the page label
function pageLabel(page: number): string {
    return $t("fkui.paginator.previous", "Sida {{ page }}", { page });
}

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
    <nav ref="paginator" class="paginator" :aria-label="navigatorLabel">
        <button
            type="button"
            size="small"
            class="paginator__previous"
            :aria-label="previousButtonLabel"
            @click="onClickPreviousButton()"
        >
            <f-icon name="chevrons-left" />
            {{ previousButtonLabel }}
        </button>

        <div class="paginator__pages">
            <button
                v-for="page in pages"
                :key="page"
                type="button"
                size="small"
                :class="pageClasses(page)"
                :aria-current="page === currentPage ? 'page' : 'false'"
                :aria-label="pageLabel(page)"
                @click="onClickPageButton(page)"
            >
                {{ showPageNumberAsGap(page) ? "..." : page }}
            </button>
        </div>

        <div class="paginator__page-counter">{{ pageCounterLabel(currentPage, numberOfPages) }}</div>

        <button
            type="button"
            size="small"
            class="paginator__next"
            :aria-label="nextButtonLabel"
            @click="onClickNextButton()"
        >
            {{ nextButtonLabel }}
            <f-icon name="arrow-right" class="paginator__icon" />
        </button>
    </nav>
</template>
