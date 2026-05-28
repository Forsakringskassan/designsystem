import { defineComponent } from "vue";
import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import { flushPromises, mount } from "@vue/test-utils";
import { FTextField, FValidationForm } from "../components";
import { ValidationPlugin } from "../plugins";
import { FValidationFormSelectors } from "./FValidationForm.selectors";

const defaultMountOptions = {
    global: {
        plugins: [ValidationPlugin],
        stubs: ["FLabel"],
    },
    attachTo: createPlaceholderInDocument(),
};

const FValidationFormComponent = defineComponent({
    components: { FValidationForm, FTextField },
    template: /* HTML */ `
        <f-validation-form>
            <f-text-field id="field1" v-model="value" v-validation.required>
                Required field
            </f-text-field>
            <button type="submit">Submit</button>
        </f-validation-form>
    `,
    data() {
        return { value: "" };
    },
});

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FValidationFormComponent, defaultMountOptions);
    const { selector } = FValidationFormSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe("form");
    expect(root.element.tagName.toLowerCase()).toBe("form");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FValidationFormComponent, {
        ...defaultMountOptions,
        attrs: { "data-test": "my-form" },
    });
    const { selector } = FValidationFormSelectors('[data-test="my-form"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="my-form"]');
    expect(root.element.tagName.toLowerCase()).toBe("form");
});

it("errorList() should not exist before form is submitted", () => {
    expect.assertions(1);
    const wrapper = mount(FValidationFormComponent, defaultMountOptions);
    const { errorList } = FValidationFormSelectors();
    expect(wrapper.find(errorList()).exists()).toBeFalsy();
});

it("errorList() should exist after form is submitted with errors", async () => {
    expect.assertions(1);
    const wrapper = mount(FValidationFormComponent, defaultMountOptions);
    await wrapper.find("button").trigger("click");
    await flushPromises();
    const { errorList } = FValidationFormSelectors();
    expect(wrapper.find(errorList()).exists()).toBeTruthy();
});

it("errorListItems() should list each invalid field after submission", async () => {
    expect.assertions(1);
    const wrapper = mount(FValidationFormComponent, defaultMountOptions);
    await wrapper.find("button").trigger("click");
    await flushPromises();
    const { errorListItems } = FValidationFormSelectors();
    const items = wrapper.findAll(errorListItems());
    expect(items).toHaveLength(1);
});
