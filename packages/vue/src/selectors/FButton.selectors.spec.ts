import { mount } from "@vue/test-utils";
import { FButton } from "../components";
import { FButtonSelectors } from "./FButton.selectors";

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FButton, {
        slots: { default: "Click me" },
    });
    const { selector } = FButtonSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".button");
    expect(root.classes()).toContain("button");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FButton, {
        attrs: { "data-test": "my-button" },
        slots: { default: "Click me" },
    });
    const { selector } = FButtonSelectors('[data-test="my-button"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="my-button"]');
    expect(root.classes()).toContain("button");
});
