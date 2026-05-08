import { mount } from "@vue/test-utils";
import { FStaticField } from "../components";
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
    expect(selector).toBe(".output-field");
    expect(root.classes()).toContain("output-field");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FStaticField, {
        attrs: { "data-test": "name-field" },
        slots: {
            label: "Full name",
            default: "Jane Doe",
        },
    });
    const { selector } = FStaticFieldSelectors('[data-test="name-field"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="name-field"]');
    expect(root.classes()).toContain("output-field");
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
    const el = wrapper.get(label());
    expect(el.text()).toContain("Full name");
});

it("output() should return the output element", () => {
    expect.assertions(2);
    const wrapper = mount(FStaticField, {
        slots: {
            label: "Full name",
            default: "Jane Doe",
        },
    });
    const { output } = FStaticFieldSelectors();
    const el = wrapper.find(output());
    expect(el.exists()).toBeTruthy();
    expect(el.text()).toBe("Jane Doe");
});
