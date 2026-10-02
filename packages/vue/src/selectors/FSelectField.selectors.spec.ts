import { shallowMount } from "@vue/test-utils";
import { expect, it } from "vitest";
import { FSelectField } from "../components";
import { TestDirective } from "../plugins";
import { FSelectFieldSelectors } from "./FSelectField.selectors";

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = shallowMount(FSelectField, {
        slots: {
            label: "Country",
            default: "<option value='se'>Sweden</option>",
        },
    });
    const { selector } = FSelectFieldSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(":scope");
    expect(root.classes()).toContain("select-field");
});

it("should handle explicit selector (v-test directive)", () => {
    expect.assertions(2);
    const wrapper = shallowMount(
        {
            template: /* HTML */ `
                <f-select-field v-test="'foo'">
                    <option disabled hidden value="">Choose…</option>
                    <option value="1">Option 1</option>
                </f-select-field>
            `,
            components: { FSelectField },
        },
        {
            global: {
                stubs: { FSelectField: false },
                directives: { test: TestDirective },
            },
        },
    );
    const { selector } = FSelectFieldSelectors('[data-test="foo"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="foo"]');
    expect(root.classes()).toContain("select-field");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = shallowMount(FSelectField, {
        slots: {
            label: "Country",
            default: "<option value='se'>Sweden</option>",
        },
        attrs: { "data-test": "country" },
    });
    const { selector } = FSelectFieldSelectors('[data-test="country"]');
    expect(selector).toBe('[data-test="country"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("select() should return the select element", () => {
    expect.assertions(1);
    const wrapper = shallowMount(FSelectField, {
        slots: {
            label: "Country",
            default: "<option value='se'>Sweden</option>",
        },
    });
    const { select } = FSelectFieldSelectors();
    const el = wrapper.get(select());
    expect(el.element.tagName.toLowerCase()).toBe("select");
});

it("options() should return the option elements", () => {
    expect.assertions(2);
    const wrapper = shallowMount(FSelectField, {
        slots: {
            label: "Country",
            default: /* HTML */ `
                <option disabled hidden value="">Choose…</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            `,
        },
    });
    const { options } = FSelectFieldSelectors();
    const els = wrapper.findAll(options());
    expect(els).toHaveLength(3);
    expect(els[1].text()).toBe("Option 1");
});

it("label() should return the label element", () => {
    expect.assertions(2);
    const wrapper = shallowMount(FSelectField, {
        slots: {
            label: "Country",
            default: "<option value='se'>Sweden</option>",
        },
        global: {
            stubs: { FLabel: false },
        },
    });
    const { label } = FSelectFieldSelectors();
    const el = wrapper.find(label());
    expect(el.exists()).toBeTruthy();
    expect(el.classes()).toContain("label");
});

it("description() should exist if description slot is used", () => {
    expect.assertions(1);
    const wrapper = shallowMount(FSelectField, {
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
    const { description } = FSelectFieldSelectors();
    expect(wrapper.find(description()).exists()).toBeTruthy();
});

it("arrowIcon() should return the arrow icon element", () => {
    expect.assertions(1);
    const wrapper = shallowMount(FSelectField, {
        slots: {
            label: "Country",
            default: "<option value='se'>Sweden</option>",
        },
        global: {
            stubs: { FIcon: false },
        },
    });
    const { arrowIcon } = FSelectFieldSelectors();
    expect(wrapper.get(arrowIcon()).attributes("focusable")).toBe("false");
});

it("selectedOption() should return the currently selected option", () => {
    expect.assertions(1);
    const wrapper = shallowMount(FSelectField, {
        props: { modelValue: "se" },
        slots: {
            label: "Country",
            default: `
                <option value="se">Sweden</option>
                <option value="no">Norway</option>
            `,
        },
    });
    const { selectedOption } = FSelectFieldSelectors();
    expect(wrapper.get(selectedOption()).text()).toBe("Sweden");
});
