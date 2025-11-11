<script setup lang="ts">
import { FList, FPaginateDataset, FPaginator } from "@fkui/vue";
import { FPaginatorPageobject } from "@fkui/vue/pageobjects";

const pageobject = new FPaginatorPageobject();

const methods = Object.getOwnPropertyNames(FPaginatorPageobject.prototype).filter(
    (name) => name !== "constructor",
) as Array<keyof FPaginatorPageobject>;

const parameters: Partial<Record<keyof FPaginatorPageobject, unknown[]>> = {
    pageButton: [3],
};

const items = methods.map((method) => {
    const params = parameters[method] ?? [];
    const fn = pageobject[method];
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-function-type -- type-safety is applied to the parameters object */
    const selector = typeof fn === "function" ? (fn as Function).apply(pageobject, params) : fn;
    return {
        method,
        params,
        selector,
    };
});

const rows: undefined[] = Array(20).fill(undefined);

function getSelectorFromElement(element: EventTarget | null): string | null {
    if (element instanceof HTMLElement) {
        return element.dataset.selector ?? null;
    } else {
        return null;
    }
}

function onMouseEnter(event: MouseEvent): void {
    const { target } = event;
    const selector = getSelectorFromElement(target);
    if (!selector) {
        return;
    }
    for (const element of Array.from(document.querySelectorAll<HTMLElement>(selector))) {
        element.style.setProperty("outline", "3px dashed #f0a");
    }
}

function onMouseLeave(event: MouseEvent): void {
    const { target } = event;
    const selector = getSelectorFromElement(target);
    if (!selector) {
        return;
    }
    for (const element of Array.from(document.querySelectorAll<HTMLElement>(selector))) {
        element.style.removeProperty("outline");
    }
}
</script>

<template>
    <div class="row">
        <div class="col col--md-9">
            <f-paginate-dataset :items="rows" :items-per-page="1">
                <template #default="{ currentPage, numberOfPages }">
                    <f-paginator :current-page :number-of-pages />
                </template>
            </f-paginate-dataset>
        </div>
        <div class="col col--md-3">
            <f-list :items class="density-densest">
                <template #default="{ item }">
                    <div
                        class="selector"
                        :data-selector="item.selector"
                        @mouseenter="onMouseEnter"
                        @mouseleave="onMouseLeave"
                    >
                        {{ item.method }}({{ item.params.join(", ") }})
                    </div>
                </template>
            </f-list>
        </div>
    </div>
</template>

<style>
.list__item__itempane {
    padding: 0;
}

.selector {
    padding: 0.5rem;
}

.selector:hover {
    background: #dedede;
    cursor: pointer;
}
</style>
