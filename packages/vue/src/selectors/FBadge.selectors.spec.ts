import { mount } from "@vue/test-utils";
import { FBadge } from "../components";
import { FBadgeSelectors } from "./FBadge.selectors";

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FBadge, {
        props: { status: "info" },
        slots: { default: "3" },
    });
    const { selector } = FBadgeSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".badge");
    expect(root.classes()).toContain("badge");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FBadge, {
        attrs: { "data-test": "my-badge" },
        props: { status: "info" },
        slots: { default: "3" },
    });
    const { selector } = FBadgeSelectors('[data-test="my-badge"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="my-badge"]');
    expect(root.classes()).toContain("badge");
});
