import { nextTick, provide } from "vue";
import { mount } from "@vue/test-utils";
import {
    type SortFilterDatasetEventCallback,
    sortFilterDatasetEventsKey,
} from "../FSortFilterDataset/sort-filter-dataset-events";
import { FPaginateDataset } from "./index";

let refreshCallback: SortFilterDatasetEventCallback = () => {};
let lazyRowsAddedCallback: SortFilterDatasetEventCallback = () => {};

function createWrapper() {
    refreshCallback = () => {};
    lazyRowsAddedCallback = () => {};

    return mount({
        components: { FPaginateDataset },
        setup() {
            provide(sortFilterDatasetEventsKey, {
                onRefresh(callback) {
                    refreshCallback = callback;
                },
                onLazyRowsAdded(callback) {
                    lazyRowsAddedCallback = callback;
                },
            });
        },
        data() {
            return {
                items: Array.from({ length: 11 }, (_, index) => ({
                    id: index + 1,
                    name: `Namn ${index + 1}`,
                })),
            };
        },
        template: /* HTML */ `
            <f-paginate-dataset :items="items" :items-per-page="5">
                <template #default="{ currentPage }">
                    <div id="current-page">{{ currentPage }}</div>
                </template>
            </f-paginate-dataset>
        `,
    });
}

function setPage(wrapper: ReturnType<typeof createWrapper>, page: number): void {
    wrapper.findComponent(FPaginateDataset).element.dispatchEvent(
        new CustomEvent("paginateDataset:page", {
            bubbles: true,
            detail: {
                page,
            },
        }),
    );
}

describe("integration with sortFilterDatasetEvents", () => {
    it("should jump to last page on lazy rows added", async () => {
        const wrapper = createWrapper();
        await nextTick();

        setPage(wrapper, 1);
        await nextTick();
        expect(wrapper.get("#current-page").text()).toBe("1");

        lazyRowsAddedCallback();
        await nextTick();

        expect(wrapper.get("#current-page").text()).toBe("3");
    });

    it("should jump to first page on refresh", async () => {
        const wrapper = createWrapper();
        await nextTick();

        setPage(wrapper, 2);
        await nextTick();
        expect(wrapper.get("#current-page").text()).toBe("2");

        refreshCallback();
        await nextTick();

        expect(wrapper.get("#current-page").text()).toBe("1");
    });
});
