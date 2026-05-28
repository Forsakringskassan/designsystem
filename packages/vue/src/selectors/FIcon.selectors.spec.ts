import { mount } from "@vue/test-utils";
import { FIcon } from "../components";
import { FIconSelectors } from "./FIcon.selectors";

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FIcon, {
        props: { name: "bell" },
    });
    const { selector } = FIconSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".icon");
    expect(root.classes()).toContain("icon");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FIcon, {
        attrs: { "data-test": "my-icon" },
        props: { name: "bell" },
    });
    const { selector } = FIconSelectors('[data-test="my-icon"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="my-icon"]');
    expect(root.classes()).toContain("icon");
});

it("use() should return the use element with the correct sprite href", () => {
    expect.assertions(1);
    const wrapper = mount(FIcon, {
        props: { name: "bell" },
    });
    const { use } = FIconSelectors();
    const el = wrapper.get(use());
    expect(el.attributes("href")).toBe("#f-icon-bell");
});
