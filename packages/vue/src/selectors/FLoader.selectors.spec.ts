import { mount } from "@vue/test-utils";
import { expect, it } from "vitest";
import { FLoader } from "../components";
import { TestDirective } from "../plugins";
import { FLoaderSelectors } from "./FLoader.selectors";

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FLoader);
    const { selector } = FLoaderSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(":scope");
    expect(root.classes()).toContain("loader");
});

// eslint-disable-next-line vitest/no-disabled-tests -- FLoader's root template is a <teleport> (non-element root), so Vue cannot attach the `v-test` directive to it ("Runtime directive used on component with non-element root node"). Only the `data-test` attribute, which is manually forwarded via `v-bind="$attrs"`, works reliably.
it.skip("should handle explicit selector (v-test directive)", () => {
    expect.assertions(2);
    const wrapper = mount({
        components: { FLoader },
        directives: { test: TestDirective },
        template: /* HTML */ `
            <div>
                <f-loader v-test="'my-loader'"></f-loader>
            </div>
        `,
    });
    const { selector } = FLoaderSelectors('[data-test="my-loader"]');
    expect(selector).toBe('[data-test="my-loader"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("should handle explicit selector (data-test attribute)", () => {
    expect.assertions(2);
    const wrapper = mount({
        components: { FLoader },
        template: /* HTML */ `
            <div>
                <f-loader data-test="my-loader"></f-loader>
            </div>
        `,
    });
    const { selector } = FLoaderSelectors('[data-test="my-loader"]');
    expect(selector).toBe('[data-test="my-loader"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("wrapper() should return the loader wrapper element", () => {
    expect.assertions(1);
    const wrapper = mount(FLoader);
    const { wrapper: loaderWrapper } = FLoaderSelectors();
    expect(wrapper.find(loaderWrapper()).exists()).toBeTruthy();
});

it("waitText() should return the wait text element", () => {
    expect.assertions(1);
    const wrapper = mount(FLoader, {
        slots: { default: "Please wait…" },
    });
    const { waitText } = FLoaderSelectors();
    expect(wrapper.get(waitText()).text()).toBe("Please wait…");
});
