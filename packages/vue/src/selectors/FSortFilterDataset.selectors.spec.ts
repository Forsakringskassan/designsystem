import { defineComponent } from "vue";
import { mount } from "@vue/test-utils";
import { FSortFilterDataset } from "../components";
import { TranslationPlugin } from "../plugins";
import { FSortFilterDatasetSelectors } from "./FSortFilterDataset.selectors";

const testData = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
];

const sortableAttributes: Record<PropertyKey, string> = { name: "Name" };

const TestComponent = defineComponent({
    components: { FSortFilterDataset },
    template: /* HTML */ `
        <f-sort-filter-dataset
            :data="data"
            :sortable-attributes="sortableAttributes"
        >
            <template #header="{ slotClass }">
                <span :class="slotClass">Results</span>
            </template>
            <template #default="{ sortFilterResult }">
                <ul>
                    <li v-for="item in sortFilterResult" :key="item.id">
                        {{ item.name }}
                    </li>
                </ul>
            </template>
        </f-sort-filter-dataset>
    `,
    data() {
        return {
            data: testData,
            sortableAttributes,
        };
    },
});

const defaultMountOptions = {
    global: {
        plugins: [TranslationPlugin],
        stubs: ["f-icon"],
    },
};

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(TestComponent, defaultMountOptions);
    const { selector } = FSortFilterDatasetSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".sort-filter-dataset");
    expect(root.classes()).toContain("sort-filter-dataset");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(TestComponent, {
        ...defaultMountOptions,
        attrs: { "data-test": "dataset" },
    });
    const { selector } = FSortFilterDatasetSelectors('[data-test="dataset"]');
    expect(selector).toBe('[data-test="dataset"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("searchField() should return the search field element", () => {
    expect.assertions(1);
    const wrapper = mount(TestComponent, defaultMountOptions);
    const { searchField } = FSortFilterDatasetSelectors();
    expect(wrapper.find(searchField()).exists()).toBeTruthy();
});

it("sortField() should return the sort dropdown element", () => {
    expect.assertions(1);
    const wrapper = mount(TestComponent, defaultMountOptions);
    const { sortField } = FSortFilterDatasetSelectors();
    expect(wrapper.find(sortField()).exists()).toBeTruthy();
});

it("header() should return the toolbar header element", () => {
    expect.assertions(1);
    const wrapper = mount(TestComponent, defaultMountOptions);
    const { header } = FSortFilterDatasetSelectors();
    expect(wrapper.find(header()).exists()).toBeTruthy();
});
