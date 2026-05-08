import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import { mount } from "@vue/test-utils";
import { FRadioField } from "../components";
import { injectionKeys as fieldsetInjectionKeys } from "../components/FFieldset/use-fieldset";
import { FRadioFieldSelectors } from "./FRadioField.selectors";

const defaultMountOptions = {
    attachTo: createPlaceholderInDocument(),
    global: {
        provide: {
            [fieldsetInjectionKeys.sharedName as symbol]: "my-group",
        },
    },
};

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FRadioField, {
        ...defaultMountOptions,
        props: { value: "yes" },
        slots: { default: "Yes" },
    });
    const { selector } = FRadioFieldSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".radio-button");
    expect(root.classes()).toContain("radio-button");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FRadioField, {
        ...defaultMountOptions,
        props: { value: "yes" },
        slots: { default: "Yes" },
        attrs: { "data-test": "yes-option" },
    });
    const { selector } = FRadioFieldSelectors('[data-test="yes-option"]');
    expect(selector).toBe('[data-test="yes-option"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("input() should return the radio input element", () => {
    expect.assertions(2);
    const wrapper = mount(FRadioField, {
        ...defaultMountOptions,
        props: { value: "yes" },
        slots: { default: "Yes" },
    });
    const { input } = FRadioFieldSelectors();
    const el = wrapper.get(input());
    expect(el.element.tagName.toLowerCase()).toBe("input");
    expect((el.element as HTMLInputElement).type).toBe("radio");
});

it("input() should be checked when value matches modelValue", () => {
    expect.assertions(1);
    const wrapper = mount(FRadioField, {
        ...defaultMountOptions,
        props: { value: "yes", modelValue: "yes" },
        slots: { default: "Yes" },
    });
    const { input } = FRadioFieldSelectors();
    const el = wrapper.get(input());
    expect((el.element as HTMLInputElement).checked).toBe(true);
});

it("label() should return the label element", () => {
    expect.assertions(1);
    const wrapper = mount(FRadioField, {
        ...defaultMountOptions,
        props: { value: "yes" },
        slots: { default: "Yes" },
    });
    const { label } = FRadioFieldSelectors();
    const el = wrapper.get(label());
    expect(el.text()).toContain("Yes");
});

it("details() should exist when details slot is used with showDetails always", () => {
    expect.assertions(1);
    const wrapper = mount(FRadioField, {
        ...defaultMountOptions,
        global: {
            provide: {
                [fieldsetInjectionKeys.sharedName as symbol]: "my-group",
                [fieldsetInjectionKeys.showDetails as symbol]: "always",
            },
        },
        props: { value: "yes" },
        slots: { default: "Yes", details: "More info" },
    });
    const { details } = FRadioFieldSelectors();
    expect(wrapper.find(details()).exists()).toBeTruthy();
});

it("details() should not exist when details slot is not used", () => {
    expect.assertions(1);
    const wrapper = mount(FRadioField, {
        ...defaultMountOptions,
        props: { value: "yes" },
        slots: { default: "Yes" },
    });
    const { details } = FRadioFieldSelectors();
    expect(wrapper.find(details()).exists()).toBeFalsy();
});
