import { mount } from "@vue/test-utils";
import { FTableButton } from "../components";
import { FTableButtonSelectors } from "./FTableButton.selectors";

const defaultMountOptions = {
    global: { stubs: ["f-icon"] },
};

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FTableButton, {
        ...defaultMountOptions,
        slots: { default: "Delete" },
    });
    const { selector } = FTableButtonSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".table__button");
    expect(root.classes()).toContain("table__button");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FTableButton, {
        ...defaultMountOptions,
        slots: { default: "Delete" },
        attrs: { "data-test": "delete" },
    });
    const { selector } = FTableButtonSelectors('[data-test="delete"]');
    expect(selector).toBe('[data-test="delete"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});
