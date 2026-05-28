import { mount } from "@vue/test-utils";
import { FLabel } from "../components";
import { FLabelSelectors } from "./FLabel.selectors";

const defaultMountOptions = {
    global: { stubs: ["FIcon"] },
};

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FLabel, {
        ...defaultMountOptions,
        slots: { default: "My label" },
    });
    const { selector } = FLabelSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".label");
    expect(root.classes()).toContain("label");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FLabel, {
        ...defaultMountOptions,
        slots: { default: "My label" },
        attrs: { "data-test": "my-label" },
    });
    const { selector } = FLabelSelectors('[data-test="my-label"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="my-label"]');
    expect(root.classes()).toContain("label");
});

it("description() should return the description element when present", () => {
    expect.assertions(1);
    const wrapper = mount(FLabel, {
        ...defaultMountOptions,
        slots: {
            default: "My label",
            description: `<template v-slot="{ descriptionClass }">
                <span :class="descriptionClass">Enter your full name</span>
            </template>`,
        },
    });
    const { description } = FLabelSelectors();
    expect(wrapper.find(description()).exists()).toBeTruthy();
});

it("description() should not exist when description slot is not used", () => {
    expect.assertions(1);
    const wrapper = mount(FLabel, {
        ...defaultMountOptions,
        slots: { default: "My label" },
    });
    const { description } = FLabelSelectors();
    expect(wrapper.find(description()).exists()).toBeFalsy();
});

it("formatDescription() should return the format description element when present", () => {
    expect.assertions(1);
    const wrapper = mount(FLabel, {
        ...defaultMountOptions,
        slots: {
            default: "My label",
            description: `<template v-slot="{ formatDescriptionClass }">
                <span :class="formatDescriptionClass">YYYY-MM-DD</span>
            </template>`,
        },
    });
    const { formatDescription } = FLabelSelectors();
    expect(wrapper.find(formatDescription()).exists()).toBeTruthy();
});

it("formatDescription() should not exist when format description is not used", () => {
    expect.assertions(1);
    const wrapper = mount(FLabel, {
        ...defaultMountOptions,
        slots: { default: "My label" },
    });
    const { formatDescription } = FLabelSelectors();
    expect(wrapper.find(formatDescription()).exists()).toBeFalsy();
});

it("errorMessage() should not exist by default", () => {
    expect.assertions(1);
    const wrapper = mount(FLabel, {
        ...defaultMountOptions,
        slots: { default: "My label" },
    });
    const { errorMessage } = FLabelSelectors();
    expect(wrapper.find(errorMessage()).exists()).toBeFalsy();
});

it("errorIcon() should not exist by default", () => {
    expect.assertions(1);
    const wrapper = mount(FLabel, {
        ...defaultMountOptions,
        slots: { default: "My label" },
    });
    const { errorIcon } = FLabelSelectors();
    expect(wrapper.find(errorIcon()).exists()).toBeFalsy();
});

it("errorIcon() should exist when there is a validation error", () => {
    expect.assertions(1);
    const wrapper = mount(FLabel, {
        slots: {
            default: "My label",
            "error-message": "This field is required",
        },
    });
    const { errorIcon } = FLabelSelectors();
    expect(wrapper.find(errorIcon()).exists()).toBeTruthy();
});
