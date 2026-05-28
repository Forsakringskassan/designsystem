import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import { mount } from "@vue/test-utils";
import { FTextareaField } from "../components";
import { ValidationPlugin } from "../plugins";
import { FTextareaFieldSelectors } from "./FTextareaField.selectors";

const defaultMountOptions = {
    attachTo: createPlaceholderInDocument(),
    global: {
        stubs: ["f-icon"],
        plugins: [ValidationPlugin],
    },
};

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FTextareaField, {
        ...defaultMountOptions,
        slots: { default: "Message" },
    });
    const { selector } = FTextareaFieldSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".textarea-field");
    expect(root.classes()).toContain("textarea-field");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FTextareaField, {
        ...defaultMountOptions,
        slots: { default: "Message" },
        attrs: { "data-test": "message" },
    });
    const { selector } = FTextareaFieldSelectors('[data-test="message"]');
    expect(selector).toBe('[data-test="message"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("textarea() should return the textarea element", () => {
    expect.assertions(1);
    const wrapper = mount(FTextareaField, {
        ...defaultMountOptions,
        slots: { default: "Message" },
    });
    const { textarea } = FTextareaFieldSelectors();
    const el = wrapper.get(textarea());
    expect(el.element.tagName.toLowerCase()).toBe("textarea");
});

it("label() should return the label element", () => {
    expect.assertions(2);
    const wrapper = mount(FTextareaField, {
        ...defaultMountOptions,
        slots: { default: "Message" },
    });
    const { label } = FTextareaFieldSelectors();
    const el = wrapper.find(label());
    expect(el.exists()).toBeTruthy();
    expect(el.classes()).toContain("label");
});

it("errorIcon() should not exist by default", () => {
    expect.assertions(1);
    const wrapper = mount(FTextareaField, {
        ...defaultMountOptions,
        slots: { default: "Message" },
    });
    const { errorIcon } = FTextareaFieldSelectors();
    expect(wrapper.find(errorIcon()).exists()).toBeFalsy();
});
