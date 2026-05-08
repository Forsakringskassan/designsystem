import { mount } from "@vue/test-utils";
import { FOutputField } from "../components";
import { FOutputFieldSelectors } from "./FOutputField.selectors";

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FOutputField, {
        slots: { label: "Total", default: "1 234 kr" },
    });
    const { selector } = FOutputFieldSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".output-field");
    expect(root.classes()).toContain("output-field");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FOutputField, {
        slots: { label: "Total", default: "1 234 kr" },
        attrs: { "data-test": "total" },
    });
    const { selector } = FOutputFieldSelectors('[data-test="total"]');
    expect(selector).toBe('[data-test="total"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("output() should return the output element", () => {
    expect.assertions(2);
    const wrapper = mount(FOutputField, {
        slots: { label: "Total", default: "1 234 kr" },
    });
    const { output } = FOutputFieldSelectors();
    const el = wrapper.find(output());
    expect(el.exists()).toBeTruthy();
    expect(el.text()).toBe("1 234 kr");
});

it("label() should return the label element", () => {
    expect.assertions(2);
    const wrapper = mount(FOutputField, {
        slots: { label: "Total", default: "1 234 kr" },
    });
    const { label } = FOutputFieldSelectors();
    const el = wrapper.find(label());
    expect(el.exists()).toBeTruthy();
    expect(el.classes()).toContain("label");
});
