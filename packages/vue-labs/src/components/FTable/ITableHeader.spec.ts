import { ref } from "vue";
import { mount } from "@vue/test-utils";
import ITableHeader from "./ITableHeader.vue";
import { normalizeTableColumn } from "./table-column";

describe("description", () => {
    const selector = ".table-ng__column__description";

    it("should not render description element by default", () => {
        expect.assertions(1);
        const column = normalizeTableColumn({
            header: "lorem ipsum",
        });
        const wrapper = mount(ITableHeader, {
            props: { column, sortEnabled: false, sortOrder: "unsorted" },
        });
        const description = wrapper.find(selector);
        expect(description.exists()).toBeFalsy();
    });

    it("should render description element when column has description text", () => {
        expect.assertions(2);
        const column = normalizeTableColumn({
            header: "lorem ipsum",
            description: "dolor sit amet",
        });
        const wrapper = mount(ITableHeader, {
            props: { column, sortEnabled: false, sortOrder: "unsorted" },
        });
        const description = wrapper.find(selector);
        expect(description.exists()).toBeTruthy();
        expect(description.text()).toBe("dolor sit amet");
    });

    it("should be reactive", async () => {
        expect.assertions(3);
        const prop = ref<string | null>(null);
        const column = normalizeTableColumn({
            header: "lorem ipsum",
            description: prop,
        });
        const wrapper = mount(ITableHeader, {
            props: { column, sortEnabled: false, sortOrder: "unsorted" },
        });
        expect(wrapper.find(selector).exists()).toBeFalsy();
        prop.value = "dolor sit amet";
        await wrapper.vm.$nextTick();
        expect(wrapper.find(selector).exists()).toBeTruthy();
        expect(wrapper.find(selector).text()).toBe("dolor sit amet");
    });
});

describe("sorting aria attributes", () => {
    it.each`
        order
        ${"ascending"}
        ${"descending"}
    `(
        "should set aria-sort to '$order' when sortOrder is '$order'",
        ({ order }) => {
            expect.assertions(1);
            const column = normalizeTableColumn({
                header: "lorem ipsum",
            });
            const wrapper = mount(ITableHeader, {
                props: { column, sortEnabled: true, sortOrder: order },
            });
            expect(wrapper.find("th").attributes("aria-sort")).toBe(order);
        },
    );

    it("should not define aria-sort when sortOrder is 'unsorted'", () => {
        expect.assertions(1);
        const column = normalizeTableColumn({
            header: "lorem ipsum",
        });
        const wrapper = mount(ITableHeader, {
            props: { column, sortEnabled: true, sortOrder: "unsorted" },
        });
        expect(wrapper.find("th").attributes("aria-sort")).toBeUndefined();
    });

    it("should not define aria-sort when sorting is disabled", () => {
        expect.assertions(1);
        const column = normalizeTableColumn({
            header: "lorem ipsum",
        });
        const wrapper = mount(ITableHeader, {
            props: { column, sortEnabled: false, sortOrder: "unsorted" },
        });
        expect(wrapper.find("th").attributes("aria-sort")).toBeUndefined();
    });
});
