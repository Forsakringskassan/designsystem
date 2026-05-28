import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import { mount } from "@vue/test-utils";
import { FSelectField } from "../components";
import { ValidationPlugin } from "../plugins";
import { FSelectFieldSelectors } from "./FSelectField.selectors";

const defaultMountOptions = {
    attachTo: createPlaceholderInDocument(),
    global: {
        stubs: ["f-icon"],
        plugins: [ValidationPlugin],
    },
};

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FSelectField, {
        ...defaultMountOptions,
        slots: {
            label: "Country",
            default: "<option value='se'>Sweden</option>",
        },
    });
    const { selector } = FSelectFieldSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".select-field");
    expect(root.classes()).toContain("select-field");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FSelectField, {
        ...defaultMountOptions,
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
    const wrapper = mount(FSelectField, {
        ...defaultMountOptions,
        slots: {
            label: "Country",
            default: "<option value='se'>Sweden</option>",
        },
    });
    const { select } = FSelectFieldSelectors();
    const el = wrapper.get(select());
    expect(el.element.tagName.toLowerCase()).toBe("select");
});

it("label() should return the label element", () => {
    expect.assertions(2);
    const wrapper = mount(FSelectField, {
        ...defaultMountOptions,
        slots: {
            label: "Country",
            default: "<option value='se'>Sweden</option>",
        },
    });
    const { label } = FSelectFieldSelectors();
    const el = wrapper.find(label());
    expect(el.exists()).toBeTruthy();
    expect(el.classes()).toContain("label");
});

it("arrowIcon() should return the arrow icon element", () => {
    expect.assertions(1);
    const wrapper = mount(FSelectField, {
        ...defaultMountOptions,
        slots: {
            label: "Country",
            default: "<option value='se'>Sweden</option>",
        },
    });
    const { arrowIcon } = FSelectFieldSelectors();
    expect(wrapper.find(arrowIcon()).exists()).toBeTruthy();
});

it("selectedOption() should return the currently selected option", () => {
    expect.assertions(2);
    const wrapper = mount(FSelectField, {
        ...defaultMountOptions,
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
    const el = wrapper.find(selectedOption());
    expect(el.exists()).toBeTruthy();
    expect(el.text()).toBe("Sweden");
});
