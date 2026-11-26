import { defineComponent } from "vue";
import { config, mount } from "@vue/test-utils";
import { expect, it } from "vitest";
import { FCrudDataset } from "../components";
import { TestDirective } from "../plugins";
import { FCrudDatasetSelectors } from "./FCrudDataset.selectors";

config.global.stubs = {
    ...config.global.stubs,
    "f-icon": true,
    "f-form-modal": true,
    "f-confirm-modal": true,
};

const TestComponent = defineComponent({
    components: { FCrudDataset },
    template: /* HTML */ `
        <f-crud-dataset data-test="crud" v-model="items" key-attribute="id">
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

const TestComponentWithDirective = defineComponent({
    components: { FCrudDataset },
    directives: { test: TestDirective },
    template: /* HTML */ `
        <f-crud-dataset v-test="'crud'" v-model="items" key-attribute="id">
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

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FCrudDataset, {
        slots: {
            default: "item",
            add: "add",
        },
    });
    const { selector } = FCrudDatasetSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(":scope");
    expect(root.classes()).toContain("crud-dataset");
});

it("should handle explicit selector (v-test directive)", () => {
    expect.assertions(2);
    const wrapper = mount(TestComponentWithDirective);
    const { selector } = FCrudDatasetSelectors('[data-test="crud"]');
    expect(selector).toBe('[data-test="crud"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("should handle explicit selector (data-test attribute)", () => {
    expect.assertions(2);
    const wrapper = mount(TestComponent);
    const { selector } = FCrudDatasetSelectors('[data-test="crud"]');
    expect(selector).toBe('[data-test="crud"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("addButton() should return the add button element", () => {
    expect.assertions(1);
    const wrapper = mount(TestComponent);
    const { addButton } = FCrudDatasetSelectors('[data-test="crud"]');
    expect(wrapper.find(addButton()).exists()).toBeTruthy();
});

it("cancelButton() should not exist when modal is closed", () => {
    expect.assertions(1);
    const wrapper = mount(TestComponent);
    const { cancelButton } = FCrudDatasetSelectors('[data-test="crud"]');
    expect(wrapper.find(cancelButton()).exists()).toBeFalsy();
});

it("confirmButton() should not exist when modal is closed", () => {
    expect.assertions(1);
    const wrapper = mount(TestComponent);
    const { confirmButton } = FCrudDatasetSelectors('[data-test="crud"]');
    expect(wrapper.find(confirmButton()).exists()).toBeFalsy();
});
