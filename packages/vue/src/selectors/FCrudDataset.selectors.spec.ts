import { defineComponent } from "vue";
import { mount } from "@vue/test-utils";
import { FCrudDataset } from "../components";
import { TranslationPlugin } from "../plugins";
import { FCrudDatasetSelectors } from "./FCrudDataset.selectors";

const TestComponent = defineComponent({
    components: { FCrudDataset },
    template: /* HTML */ `
        <f-crud-dataset v-model="items" key-attribute="id">
            <template #default="{ updateItem, deleteItem }">
                <span>item</span>
            </template>
            <template #add="{ item }">
                <span>add</span>
            </template>
        </f-crud-dataset>
    `,
    data() {
        return { items: [{ id: 1, name: "Alice" }] };
    },
});

const defaultMountOptions = {
    global: {
        plugins: [TranslationPlugin],
        stubs: ["f-icon", "f-form-modal", "f-confirm-modal"],
    },
};

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(TestComponent, defaultMountOptions);
    const { selector } = FCrudDatasetSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".crud-dataset");
    expect(root.classes()).toContain("crud-dataset");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(TestComponent, {
        ...defaultMountOptions,
        attrs: { "data-test": "crud" },
    });
    const { selector } = FCrudDatasetSelectors('[data-test="crud"]');
    expect(selector).toBe('[data-test="crud"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("addButton() should return the add button element", () => {
    expect.assertions(1);
    const wrapper = mount(TestComponent, defaultMountOptions);
    const { addButton } = FCrudDatasetSelectors();
    expect(wrapper.find(addButton()).exists()).toBeTruthy();
});

it("cancelButton() should not exist when modal is closed", () => {
    expect.assertions(1);
    const wrapper = mount(TestComponent, defaultMountOptions);
    const { cancelButton } = FCrudDatasetSelectors();
    expect(wrapper.find(cancelButton()).exists()).toBeFalsy();
});

it("confirmButton() should not exist when modal is closed", () => {
    expect.assertions(1);
    const wrapper = mount(TestComponent, defaultMountOptions);
    const { confirmButton } = FCrudDatasetSelectors();
    expect(wrapper.find(confirmButton()).exists()).toBeFalsy();
});
