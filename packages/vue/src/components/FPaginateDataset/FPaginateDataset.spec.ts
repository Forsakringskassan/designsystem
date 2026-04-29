import { nextTick, provide } from "vue";
import { VueWrapper, mount } from "@vue/test-utils";
import {
    type SortFilterDatasetEventCallback,
    sortFilterDatasetEventsKey,
} from "../FSortFilterDataset";
import FPaginateDataset from "./FPaginateDataset.vue";

function createItems(count: number): Array<{ id: string }> {
    return Array.from({ length: count }, (_, i) => ({
        id: String(i + 1),
    }));
}

describe("FPaginateDataset", () => {
    it("should keep numberOfPages at 1 when the dataset is empty", async () => {
        const wrapper = mount(FPaginateDataset, {
            props: {
                items: [],
                itemsPerPage: 10,
            },
            slots: {
                default: ({ numberOfPages }) => `${numberOfPages}`,
            },
        });

        await nextTick();

        expect(wrapper.text()).toBe("1");
    });

    it("should clamp currentPage to the last valid page when numberOfPages decreases", async () => {
        const wrapper = mount(FPaginateDataset, {
            props: {
                items: createItems(10),
                itemsPerPage: 3,
            },
            slots: {
                default: ({ currentPage, numberOfPages }) =>
                    `${currentPage}-${numberOfPages}`,
            },
        });

        const root = wrapper.find("div");

        // Go to page 4
        root.element.dispatchEvent(
            new CustomEvent("paginateDataset:page", {
                bubbles: true,
                detail: { page: 4 },
            }),
        );

        await nextTick();

        expect(wrapper.text()).toBe("4-4");

        // Reduce items so only 2 pages exist
        await wrapper.setProps({
            items: createItems(5),
        });

        await nextTick();

        expect(wrapper.text()).toBe("2-2");
    });
});

let filterCallback: SortFilterDatasetEventCallback = () => ({});
let sortCallback: SortFilterDatasetEventCallback = () => ({});
let lazyRowsAddedCallback: SortFilterDatasetEventCallback = () => ({});

function createWrapper(): VueWrapper {
    filterCallback = () => ({});
    sortCallback = () => ({});
    lazyRowsAddedCallback = () => ({});

    return mount({
        components: { FPaginateDataset },
        setup() {
            provide(sortFilterDatasetEventsKey, {
                onFilter(callback) {
                    filterCallback = callback;
                },
                onSort(callback) {
                    sortCallback = callback;
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

function setPage(
    wrapper: ReturnType<typeof createWrapper>,
    page: number,
): void {
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

    it("should jump to first page on filter", async () => {
        const wrapper = createWrapper();
        await nextTick();

        setPage(wrapper, 2);
        await nextTick();
        expect(wrapper.get("#current-page").text()).toBe("2");

        filterCallback();
        await nextTick();

        expect(wrapper.get("#current-page").text()).toBe("1");
    });

    it("should jump to first page on sort", async () => {
        const wrapper = createWrapper();
        await nextTick();

        setPage(wrapper, 2);
        await nextTick();
        expect(wrapper.get("#current-page").text()).toBe("2");

        sortCallback();
        await nextTick();

        expect(wrapper.get("#current-page").text()).toBe("1");
    });
});
