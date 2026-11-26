import { mount } from "@vue/test-utils";
import { expect, it } from "vitest";
import { FStaticField } from "../components";
import { TestDirective } from "../plugins";
import { FStaticFieldSelectors } from "./FStaticField.selectors";

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FStaticField, {
        slots: {
            label: "Full name",
            default: "Jane Doe",
        },
    });
    const { selector } = FStaticFieldSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(":scope");
    expect(root.classes()).toContain("output-field");
});

it("should handle explicit selector (v-test directive)", () => {
    expect.assertions(2);
    const wrapper = mount(
        {
            template: /* HTML */ `
                <f-static-field v-test="'foo'">
                    <template #label> Etikett </template>
                    <template #default> En liten statisk text. </template>
                </f-static-field>
            `,
            components: { FStaticField },
        },
        {
            global: {
                //stubs: { FStaticField: false, FLabel: false },
                directives: { test: TestDirective },
            },
        },
    );
    const { selector } = FStaticFieldSelectors('[data-test="foo"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="foo"]');
    expect(root.classes()).toContain("output-field");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FStaticField, {
        attrs: { "data-test": "foo" },
        slots: {
            label: "Full name",
            default: "Jane Doe",
        },
    });
    const { selector } = FStaticFieldSelectors('[data-test="foo"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="foo"]');
    expect(root.classes()).toContain("output-field");
});

it("body() should return the text element", () => {
    expect.assertions(1);

    const wrapper = mount(FStaticField, {
        slots: {
            label: "Full name",
            default: "Jane Doe",
        },
    });
    const { body } = FStaticFieldSelectors();
    expect(wrapper.get(body()).text()).toBe("Jane Doe");
});

it("label() should return the label element", () => {
    expect.assertions(1);
    const wrapper = mount(FStaticField, {
        slots: {
            label: "Full name",
            default: "Jane Doe",
        },
    });
    const { label } = FStaticFieldSelectors();
    expect(wrapper.get(label()).text()).toContain("Full name");
});

it("description() should exist if description slot is used", () => {
    expect.assertions(1);
    const wrapper = mount(FStaticField, {
        slots: {
            default: "Label",
            description: /* HTML */ `
                <template #description="{ descriptionClass }">
                    <span :class="descriptionClass">Description</span>
                </template>
            `,
        },
    });
    const { description } = FStaticFieldSelectors();
    expect(wrapper.get(description()).text()).toBe("Description");
});

it("formatDescription() should be able to exist if description slot is used", () => {
    expect.assertions(1);
    const wrapper = mount(FStaticField, {
        slots: {
            default: "Label",
            description: /* HTML */ `
                <template #description="{ formatDescriptionClass }">
                    <span :class="formatDescriptionClass">Format</span>
                </template>
            `,
        },
    });
    const { formatDescription } = FStaticFieldSelectors();
    expect(wrapper.get(formatDescription()).text()).toBe("Format");
});
