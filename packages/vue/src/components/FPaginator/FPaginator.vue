<script setup lang="ts">
import { computed, inject, ref, useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import { useTranslate } from "../../plugins";
import FIcon from "../FIcon/FIcon.vue";
import { paginateDatasetKey } from "../FPaginateDataset";
import { maxPagesShown as maxPagesShownFn, pageClasses } from "./FPaginator.logic";
import { computePages } from "./compute-pages";
import { type FPaginateDatasetPageEventDetail } from "./events";
import { showPageNumberAsGap } from "./show-page-number-as-gap";

const {
    numberOfPages: numberOfPagesProp = undefined,
    currentPage: currentPageProp = undefined,
    numberOfPagesToShow = 9,
} = defineProps<{
    /**
     * The number of pages available.
     */
    numberOfPages?: number;
    /**
     * The number of the current page.
     */
    currentPage?: number;
    /**
     * The number of pages to show in the paginator (at most).
     */
    numberOfPagesToShow?: number;
}>();

const paginateDataset = inject(paginateDatasetKey, {
    currentPage: ref(1),
    numberOfPages: ref(1),
});

const paginatorRef = useTemplateRef<HTMLElement>("paginator");
const $t = useTranslate();

// Computes the current page number
const currentPage = computed(() => currentPageProp ?? paginateDataset.currentPage.value);

// Computes the total number of pages
const numberOfPages = computed(() => numberOfPagesProp ?? paginateDataset.numberOfPages.value);

// Computes the maximum number of pages to show
const maxPagesShown = computed(() => maxPagesShownFn(numberOfPagesToShow));

// Computes a array of pages to show
const pages = computed(() =>
    computePages({
        currentPage: currentPage.value,
        numberOfPages: numberOfPages.value,
        maxPagesShown: maxPagesShown.value,
    }),
);

const navigatorLabel = computed(() =>
    /**
     * ARIA label for navigator.
     */
    $t("fkui.paginator.navigatorLabel", "Navigera mellan sidor"),
);

const nextButtonLabel = computed(() =>
    /**
     * "Next" button.
     */
    $t("fkui.paginator.next", "Nästa"),
);

const previousButtonLabel = computed(() =>
    /**
     * "Previous" button.
     */
    $t("fkui.paginator.previous", "Föregående"),
);

const pageCounterLabel = computed(() =>
    /**
     * Page counter.
     */
    $t("fkui.paginator.page-counter", "Sida {{ currentPage }} av {{ numberOfPages }}", {
        /**
         * The current page number.
         */
        currentPage: currentPage.value,
        /**
         * The total number of pages.
         */
        numberOfPages: numberOfPages.value,
    }),
);

function pageLabel(page: number): string {
    /**
     * ARIA label for page button.
     */
    return $t("fkui.paginator.page-label", "Sida {{ page }}", {
        /**
         * The page number.
         */
        page,
    });
}

function onClickPreviousButton(): void {
    assertRef(paginatorRef);
    paginatorRef.value.dispatchEvent(
        new CustomEvent(`paginateDataset:previous`, {
            bubbles: true,
        }),
    );
}

function onClickNextButton(): void {
    assertRef(paginatorRef);
    paginatorRef.value.dispatchEvent(
        new CustomEvent(`paginateDataset:next`, {
            bubbles: true,
        }),
    );
}

function onClickPageButton(page: number): void {
    assertRef(paginatorRef);
    paginatorRef.value.dispatchEvent(
        new CustomEvent<FPaginateDatasetPageEventDetail>(`paginateDataset:page`, {
            bubbles: true,
            detail: { page },
        }),
    );
}

function showGap(page: number): boolean {
    return showPageNumberAsGap({
        page,
        pages: pages.value,
    });
}
</script>

<template>
    <nav ref="paginator" data-test="nav" class="paginator" :aria-label="navigatorLabel">
        <button
            data-test="previous-button"
            type="button"
            class="paginator__previous"
            :aria-label="previousButtonLabel"
            @click="onClickPreviousButton()"
        >
            <f-icon name="chevrons-left" />
            <span data-test="label">{{ previousButtonLabel }}</span>
        </button>

        <button
            v-for="page in pages"
            :key="page"
            :data-test="'page-' + page + '-button'"
            type="button"
            :class="pageClasses(page, currentPage)"
            :aria-current="page === currentPage ? 'page' : 'false'"
            :aria-label="pageLabel(page)"
            @click="onClickPageButton(page)"
        >
            {{ showGap(page) ? "..." : page }}
        </button>

        <div data-test="page-counter" class="paginator__page-counter">{{ pageCounterLabel }}</div>

        <button
            data-test="next-button"
            type="button"
            class="paginator__next"
            :aria-label="nextButtonLabel"
            @click="onClickNextButton()"
        >
            <span data-test="label">{{ nextButtonLabel }}</span>
            <f-icon name="arrow-right" />
        </button>
    </nav>
</template>
