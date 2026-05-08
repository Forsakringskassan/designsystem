import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import { mount } from "@vue/test-utils";
import { FCheckboxField } from "../components";
import { injectionKeys as fieldsetInjectionKeys } from "../components/FFieldset/use-fieldset";
import { FCheckboxFieldSelectors } from "./FCheckboxField.selectors";

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
    const wrapper = mount(FCheckboxField, {
        ...defaultMountOptions,
        props: { value: "agree" },
        slots: { default: "I agree" },
    });
    const { selector } = FCheckboxFieldSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".checkbox");
    expect(root.classes()).toContain("checkbox");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FCheckboxField, {
        ...defaultMountOptions,
        props: { value: "agree" },
        slots: { default: "I agree" },
        attrs: { "data-test": "agree" },
    });
    const { selector } = FCheckboxFieldSelectors('[data-test="agree"]');
    expect(selector).toBe('[data-test="agree"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("input() should return the checkbox input element", () => {
    expect.assertions(2);
    const wrapper = mount(FCheckboxField, {
        ...defaultMountOptions,
        props: { value: "agree" },
        slots: { default: "I agree" },
    });
    const { input } = FCheckboxFieldSelectors();
    const el = wrapper.get(input());
    expect(el.element.tagName.toLowerCase()).toBe("input");
    expect((el.element as HTMLInputElement).type).toBe("checkbox");
});

it("label() should return the label element", () => {
    expect.assertions(1);
    const wrapper = mount(FCheckboxField, {
        ...defaultMountOptions,
        props: { value: "agree" },
        slots: { default: "I agree" },
    });
    const { label } = FCheckboxFieldSelectors();
    expect(wrapper.get(label()).text()).toContain("I agree");
});

it("details() should exist when details slot is used with showDetails always", () => {
    expect.assertions(1);
    const wrapper = mount(FCheckboxField, {
        ...defaultMountOptions,
        global: {
            provide: {
                [fieldsetInjectionKeys.sharedName as symbol]: "my-group",
                [fieldsetInjectionKeys.showDetails as symbol]: "always",
            },
        },
        props: { value: "agree" },
        slots: { default: "I agree", details: "Extra info" },
    });
    const { details } = FCheckboxFieldSelectors();
    expect(wrapper.find(details()).exists()).toBeTruthy();
});

it("details() should not exist when details slot is not used", () => {
    expect.assertions(1);
    const wrapper = mount(FCheckboxField, {
        ...defaultMountOptions,
        props: { value: "agree" },
        slots: { default: "I agree" },
    });
    const { details } = FCheckboxFieldSelectors();
    expect(wrapper.find(details()).exists()).toBeFalsy();
});
