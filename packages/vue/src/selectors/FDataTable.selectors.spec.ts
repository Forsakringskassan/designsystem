import { defineComponent } from "vue";
import { mount } from "@vue/test-utils";
import { FDataTable, FTableColumn } from "../components";
import { TranslationPlugin } from "../plugins";
import { FDataTableSelectors } from "./FDataTable.selectors";

const TestComponent = defineComponent({
    components: { FDataTable, FTableColumn },
    template: /* HTML */ `
        <f-data-table :rows="rows" key-attribute="id">
            <template #default="{ row }">
                <f-table-column title="Name" type="text">
                    {{ row.name }}
                </f-table-column>
            </template>
        </f-data-table>
    `,
    data() {
        return {
            rows: [
                { id: 1, name: "Alice" },
                { id: 2, name: "Bob" },
            ],
        };
    },
});

const defaultMountOptions = {
    global: { plugins: [TranslationPlugin] },
};

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(TestComponent, defaultMountOptions);
    const { selector } = FDataTableSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".table");
    expect(root.classes()).toContain("table");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(TestComponent, {
        ...defaultMountOptions,
        attrs: { "data-test": "my-table" },
    });
    const { selector } = FDataTableSelectors('[data-test="my-table"]');
    expect(selector).toBe('[data-test="my-table"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("rows() should return all body rows", async () => {
    expect.assertions(1);
    const wrapper = mount(TestComponent, defaultMountOptions);
    await wrapper.vm.$nextTick();
    const { rows } = FDataTableSelectors();
    expect(wrapper.findAll(rows())).toHaveLength(2);
});

it("header() should return the header cell for the given column", async () => {
    expect.assertions(1);
    const wrapper = mount(TestComponent, defaultMountOptions);
    await wrapper.vm.$nextTick();
    const { header } = FDataTableSelectors();
    expect(wrapper.get(header(1)).text()).toBe("Name");
});

it("cell() should return the cell for the given row and column", async () => {
    expect.assertions(2);
    const wrapper = mount(TestComponent, defaultMountOptions);
    await wrapper.vm.$nextTick();
    const { cell } = FDataTableSelectors();
    expect(wrapper.get(cell({ row: 1, col: 1 })).text()).toContain("Alice");
    expect(wrapper.get(cell({ row: 2, col: 1 })).text()).toContain("Bob");
});
