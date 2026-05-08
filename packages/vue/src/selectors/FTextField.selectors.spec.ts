import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import { mount } from "@vue/test-utils";
import { FTextField } from "../components";
import { ValidationPlugin } from "../plugins";
import { FTextFieldSelectors } from "./FTextField.selectors";

const defaultMountOptions = {
    attachTo: createPlaceholderInDocument(),
    global: {
        stubs: ["f-icon"],
        plugins: [ValidationPlugin],
    },
};

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FTextField, {
        ...defaultMountOptions,
        slots: { default: "Full name" },
    });
    const { selector } = FTextFieldSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".text-field");
    expect(root.classes()).toContain("text-field");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FTextField, {
        ...defaultMountOptions,
        slots: { default: "Full name" },
        attrs: { "data-test": "name-field" },
    });
    const { selector } = FTextFieldSelectors('[data-test="name-field"]');
    expect(selector).toBe('[data-test="name-field"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("input() should return the text input element", () => {
    expect.assertions(2);
    const wrapper = mount(FTextField, {
        ...defaultMountOptions,
        slots: { default: "Full name" },
    });
    const { input } = FTextFieldSelectors();
    const el = wrapper.get(input());
    expect(el.element.tagName.toLowerCase()).toBe("input");
    expect((el.element as HTMLInputElement).type).toBe("text");
});

it("label() should return the label element", () => {
    expect.assertions(2);
    const wrapper = mount(FTextField, {
        ...defaultMountOptions,
        slots: { default: "Full name" },
    });
    const { label } = FTextFieldSelectors();
    const el = wrapper.find(label());
    expect(el.exists()).toBeTruthy();
    expect(el.classes()).toContain("label");
});

it("errorIcon() should not exist by default", () => {
    expect.assertions(1);
    const wrapper = mount(FTextField, {
        ...defaultMountOptions,
        slots: { default: "Full name" },
    });
    const { errorIcon } = FTextFieldSelectors();
    expect(wrapper.find(errorIcon()).exists()).toBeFalsy();
});
