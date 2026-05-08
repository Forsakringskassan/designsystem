import { mount } from "@vue/test-utils";
import { FLogo } from "../components";
import { FLogoSelectors } from "./FLogo.selectors";

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FLogo, {
        slots: { default: "My App" },
    });
    const { selector } = FLogoSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".logo");
    expect(root.classes()).toContain("logo");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FLogo, {
        slots: { default: "My App" },
        attrs: { "data-test": "my-logo" },
    });
    const { selector } = FLogoSelectors('[data-test="my-logo"]');
    expect(selector).toBe('[data-test="my-logo"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});
