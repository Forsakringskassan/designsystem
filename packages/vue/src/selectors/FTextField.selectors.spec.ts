import { shallowMount } from "@vue/test-utils";
import { expect, it } from "vitest";
import { FTextField } from "../components";
import { TestDirective } from "../plugins";
import { FTextFieldSelectors } from "./FTextField.selectors";

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = shallowMount(FTextField, {
        slots: {
            default: "Label",
        },
    });
    const { selector } = FTextFieldSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(":scope");
    expect(root.classes()).toContain("text-field");
});

it("should handle explicit selector (v-test directive)", () => {
    expect.assertions(2);

    const wrapper = shallowMount(
        {
            template: `<div><f-text-field v-test="'foo'"></f-text-field></div>`,
            components: { FTextField },
        },
        {
            global: {
                stubs: { FTextField: false },
                directives: { test: TestDirective },
            },
        },
    );

    const { selector } = FTextFieldSelectors('[data-test="foo"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="foo"]');
    expect(root.classes()).toContain("text-field");
});

it("input() should return the text input element", () => {
    expect.assertions(2);
    const wrapper = shallowMount(FTextField, {
        slots: {
            default: "Label",
        },
    });
    const { input } = FTextFieldSelectors();
    const el = wrapper.get(input());
    expect(el.element.tagName.toLowerCase()).toBe("input");
    expect((el.element as HTMLInputElement).type).toBe("text");
});

it("label() should return the label element", () => {
    expect.assertions(2);

    const wrapper = shallowMount(FTextField, {
        slots: {
            default: "Label",
        },
        global: {
            stubs: { FLabel: false },
        },
    });

    const { label } = FTextFieldSelectors();
    const el = wrapper.get(label());
    expect(el.element.tagName.toLowerCase()).toBe("label");
    expect(el.classes()).toContain("label");
});

it("description() should exist if description slot is used", () => {
    expect.assertions(1);

    const wrapper = shallowMount(FTextField, {
        slots: {
            default: "Label",
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

    const { description } = FTextFieldSelectors();
    expect(wrapper.find(description()).exists()).toBeTruthy();
});

it("formatDescription() should be able to exist if description slot is used", () => {
    expect.assertions(1);

    const wrapper = shallowMount(FTextField, {
        slots: {
            default: "Label",
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

    const { description } = FTextFieldSelectors();
    expect(wrapper.find(description()).exists()).toBeTruthy();
});

it("errorMessage() should exist when error is visible", () => {
    expect.assertions(1);
    const wrapper = shallowMount(FTextField, {
        slots: {
            default: "Label",
            "error-message": "ERROR MESSAGE",
        },
        global: {
            stubs: { FLabel: false },
        },
    });

    const { errorMessage } = FTextFieldSelectors();
    const el = wrapper.get(errorMessage());
    expect(el.classes()).toContain("label__message--error");
});
