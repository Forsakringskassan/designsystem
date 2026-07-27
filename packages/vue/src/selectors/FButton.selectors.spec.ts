import { mount } from "@vue/test-utils";
import { expect, it } from "vitest";
import { FButton } from "../components";
import { TestDirective } from "../plugins";
import { FButtonSelectors } from "./FButton.selectors";

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FButton, {
        props: {
            size: "medium",
            variant: "primary",
        },
        slots: { default: "Click me" },
    });
    const { selector } = FButtonSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(":scope");
    expect(root.classes()).toContain("button");
});

it("should handle explicit selector (v-test directive)", () => {
    expect.assertions(2);
    const wrapper = mount({
        components: { FButton },
        directives: { test: TestDirective },
        template: /* HTML */ `
            <div>
                <f-button v-test="'my-button'" size="medium" variant="primary">
                    Click me
                </f-button>
            </div>
        `,
    });
    const { selector } = FButtonSelectors('[data-test="my-button"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="my-button"]');
    expect(root.classes()).toContain("button");
});

it("should handle explicit selector (data-test attribute)", () => {
    expect.assertions(2);
    const wrapper = mount({
        components: { FButton },
        template: /* HTML */ `
            <div>
                <f-button data-test="my-button" size="medium" variant="primary">
                    Click me
                </f-button>
            </div>
        `,
    });
    const { selector } = FButtonSelectors('[data-test="my-button"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="my-button"]');
    expect(root.classes()).toContain("button");
});
