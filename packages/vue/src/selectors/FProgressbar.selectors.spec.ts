import { shallowMount } from "@vue/test-utils";
import { expect, it } from "vitest";
import { FProgressbar } from "../components";
import { TestDirective } from "../plugins";
import { FProgressbarSelectors } from "./FProgressbar.selectors";

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = shallowMount(FProgressbar, {
        props: {
            "aria-label": "Progress",
            value: 1,
        },
    });
    const { selector } = FProgressbarSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(":scope");
    expect(root.classes()).toContain("progress");
});

it("should handle explicit selector (v-test directive)", () => {
    expect.assertions(2);
    const wrapper = shallowMount(
        {
            template: `<f-progressbar :value="1"  v-test="'foo'" aria-label="Progress"></f-progressbar>`,
            components: { FProgressbar },
        },
        {
            global: {
                stubs: { FProgressbar: false },
                directives: { test: TestDirective },
            },
        },
    );
    const { selector } = FProgressbarSelectors('[data-test="foo"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="foo"]');
    expect(root.classes()).toContain("progress");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = shallowMount(FProgressbar, {
        props: {
            "aria-label": "Progress",
            value: 1,
        },
        attrs: { "data-test": "foo" },
    });
    const { selector } = FProgressbarSelectors('[data-test="foo"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="foo"]');
    expect(root.classes()).toContain("progress");
});

it("meter() should return the progress meter element", () => {
    expect.assertions(1);
    const wrapper = shallowMount(FProgressbar, {
        props: {
            "aria-label": "Progress",
            value: 1,
        },
    });
    const { meter } = FProgressbarSelectors();
    expect(wrapper.get(meter()).attributes("aria-valuenow")).toBe("1");
});
