import { mount } from "@vue/test-utils";
import { expect, it } from "vitest";
import { FBadge } from "../components";
import { TestDirective } from "../plugins";
import { FBadgeSelectors } from "./FBadge.selectors";

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FBadge, {
        props: { status: "info" },
        slots: { default: "lorem ipsum" },
    });
    const { selector } = FBadgeSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(":scope");
    expect(root.classes()).toContain("badge");
});

it("should handle explicit selector (v-test directive)", () => {
    expect.assertions(2);
    const wrapper = mount({
        components: { FBadge },
        directives: { test: TestDirective },
        template: /* HTML */ `
            <div>
                <f-badge v-test="'my-badge'" status="info">
                    lorem ipsum
                </f-badge>
            </div>
        `,
    });
    const { selector } = FBadgeSelectors('[data-test="my-badge"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="my-badge"]');
    expect(root.classes()).toContain("badge");
});

it("should handle explicit selector (data-test attribute)", () => {
    expect.assertions(2);
    const wrapper = mount({
        components: { FBadge },
        template: /* HTML */ `
            <div>
                <f-badge data-test="my-badge" status="info">
                    lorem ipsum
                </f-badge>
            </div>
        `,
    });
    const { selector } = FBadgeSelectors('[data-test="my-badge"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="my-badge"]');
    expect(root.classes()).toContain("badge");
});
