import { defineComponent } from "vue";
import { mount } from "@vue/test-utils";
import { FInteractiveTable, FTableColumn } from "../components";
import { TranslationPlugin } from "../plugins";
import { FInteractiveTableSelectors } from "./FInteractiveTable.selectors";

const TestComponent = defineComponent({
    components: { FInteractiveTable, FTableColumn },
    template: /* HTML */ `
        <f-interactive-table :rows="rows" key-attribute="id">
            <template #default="{ row }">
                <f-table-column title="Name" type="text">
                    {{ row.name }}
                </f-table-column>
            </template>
        </f-interactive-table>
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
    const { selector } = FInteractiveTableSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".table");
    expect(root.classes()).toContain("table");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(TestComponent, {
        ...defaultMountOptions,
        attrs: { "data-test": "table" },
    });
    const { selector } = FInteractiveTableSelectors('[data-test="table"]');
    expect(selector).toBe('[data-test="table"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("rows() should return all body rows", async () => {
    expect.assertions(1);
    const wrapper = mount(TestComponent, defaultMountOptions);
    await wrapper.vm.$nextTick();
    const { rows } = FInteractiveTableSelectors();
    expect(wrapper.findAll(rows())).toHaveLength(2);
});

it("header() should return the header cell for the given column", async () => {
    expect.assertions(1);
    const wrapper = mount(TestComponent, defaultMountOptions);
    await wrapper.vm.$nextTick();
    const { header } = FInteractiveTableSelectors();
    expect(wrapper.get(header(1)).text()).toBe("Name");
});

it("cell() should return the cell for the given row and column", async () => {
    expect.assertions(2);
    const wrapper = mount(TestComponent, defaultMountOptions);
    await wrapper.vm.$nextTick();
    const { cell } = FInteractiveTableSelectors();
    expect(wrapper.get(cell({ row: 1, col: 1 })).text()).toContain("Alice");
    expect(wrapper.get(cell({ row: 2, col: 1 })).text()).toContain("Bob");
});
