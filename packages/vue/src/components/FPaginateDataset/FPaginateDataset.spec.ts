import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
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
