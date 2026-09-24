import { shallowMount } from "@vue/test-utils";
import { expect, it } from "vitest";
import { FTextareaField } from "../components";
import { TestDirective } from "../plugins";
import { FTextareaFieldSelectors } from "./FTextareaField.selectors";

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = shallowMount(FTextareaField, {
        slots: { default: "Message" },
    });
    const { selector } = FTextareaFieldSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(":scope");
    expect(root.classes()).toContain("textarea-field");
});

it("should handle explicit selector (v-test directive)", () => {
    expect.assertions(2);

    const wrapper = shallowMount(
        {
            template: `<div><f-textarea-field v-test="'foo'"></f-textarea-field></div>`,
            components: { FTextareaField },
        },
        {
            global: {
                stubs: { FTextareaField: false },
                directives: { test: TestDirective },
            },
        },
    );

    const { selector } = FTextareaFieldSelectors('[data-test="foo"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="foo"]');
    expect(root.classes()).toContain("textarea-field");
});

it("textarea() should return the textarea element", () => {
    expect.assertions(1);
    const wrapper = shallowMount(FTextareaField, {
        slots: { default: "Message" },
    });

    const { textarea } = FTextareaFieldSelectors();
    const el = wrapper.get(textarea());
    expect(el.element.tagName.toLowerCase()).toBe("textarea");
});

it("label() should return the label element", () => {
    expect.assertions(2);

    const wrapper = shallowMount(FTextareaField, {
        slots: { default: "Message" },
        global: {
            stubs: { FLabel: false },
        },
    });

    const { label } = FTextareaFieldSelectors();
    const el = wrapper.get(label());
    expect(el.element.tagName.toLowerCase()).toBe("label");
    expect(el.classes()).toContain("label");
});

it("description() should exist if description slot is used", () => {
    expect.assertions(1);

    const wrapper = shallowMount(FTextareaField, {
        slots: {
            default: "Message",
            description: /* HTML */ `
                <template #description="{ descriptionClass }">
                    <span :class="descriptionClass">Description</span>
                </template>
            `,
        },
        global: {
            stubs: { FLabel: false },
        },
    });

    const { description } = FTextareaFieldSelectors();
    expect(wrapper.find(description()).exists()).toBeTruthy();
});

it("formatDescription() should be able to exist if description slot is used", () => {
    expect.assertions(1);

    const wrapper = shallowMount(FTextareaField, {
        slots: {
            default: "Message",
            description: /* HTML */ `
                <template #description="{ formatDescriptionClass }">
                    <span :class="formatDescriptionClass">Format</span>
                </template>
            `,
        },
        global: {
            stubs: { FLabel: false },
        },
    });

    const { description } = FTextareaFieldSelectors();
    expect(wrapper.find(description()).exists()).toBeTruthy();
});

it("errorMessage() should exist when error is visible", () => {
    expect.assertions(1);
    const wrapper = shallowMount(FTextareaField, {
        slots: {
            default: "Message",
            "error-message": "ERROR MESSAGE",
        },
        global: {
            stubs: { FLabel: false },
        },
    });

    const { errorMessage } = FTextareaFieldSelectors();
    const el = wrapper.get(errorMessage());
    expect(el.classes()).toContain("label__message--error");
});
