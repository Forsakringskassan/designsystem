import { ref } from "vue";
import { shallowMount } from "@vue/test-utils";
import ITableHeader from "./ITableHeader.vue";
import { normalizeTableColumn } from "./table-column";

describe("description", () => {
    const selector = ".table-ng__column__description";

    it("should not render description element by default", () => {
        expect.assertions(1);
        const column = normalizeTableColumn({
            header: "lorem ipsum",
        });
        const wrapper = shallowMount(ITableHeader, {
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
        const wrapper = shallowMount(ITableHeader, {
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
        const wrapper = shallowMount(ITableHeader, {
            props: { column, sortEnabled: false, sortOrder: "unsorted" },
        });
        expect(wrapper.find(selector).exists()).toBeFalsy();
        prop.value = "dolor sit amet";
        await wrapper.vm.$nextTick();
        expect(wrapper.find(selector).exists()).toBeTruthy();
        expect(wrapper.find(selector).text()).toBe("dolor sit amet");
    });
});
