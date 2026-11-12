import "html-validate/vitest";
import { TranslationService } from "@fkui/logic";
import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import ICloseButton from "./ICloseButton.vue";

it("should render a close button without submitting a form", () => {
    expect.assertions(4);
    const wrapper = mount(ICloseButton);
    expect(wrapper.get("button").attributes("type")).toBe("button");
    expect(wrapper.get("button").text()).toBe("Stäng");
    expect(wrapper.get("svg").attributes("aria-hidden")).toBe("true");
    expect(wrapper.get("use").attributes("href")).toContain("close");
});

it("should apply the compact style only when requested", async () => {
    expect.assertions(2);
    const wrapper = mount(ICloseButton);
    const button = wrapper.get("button");
    expect(button.classes()).not.toContain("i-close-button--compact");
    await wrapper.setProps({ compact: true });
    expect(button.classes()).toContain("i-close-button--compact");
});

it("should translate the default text", () => {
    expect.assertions(2);
    const translate = vi
        .spyOn(TranslationService.provider, "translate")
        .mockReturnValue("Close");
    const wrapper = mount(ICloseButton);
    expect(wrapper.get("button").text()).toBe("Close");
    expect(translate).toHaveBeenCalledWith(
        "fkui.close-button.text",
        "Stäng",
        undefined,
    );
    translate.mockRestore();
});

it("should visually hide the text and keep the accessible name in icon-only mode", async () => {
    expect.assertions(4);
    const wrapper = mount(ICloseButton, {
        slots: { default: "Stäng panelen" },
    });
    const button = wrapper.get("button");
    expect(button.get("span").classes()).not.toContain("sr-only");

    await wrapper.setProps({ iconOnly: true });
    expect(button.classes()).toContain("i-close-button--icon-only");
    expect(button.get("span").classes()).toContain("sr-only");
    expect(button.text()).toBe("Stäng panelen");
});

it("should allow custom text and accessible name", () => {
    expect.assertions(2);
    const wrapper = mount(ICloseButton, {
        slots: { default: "Stäng kalendern" },
        attrs: { "aria-label": "Stäng datumväljaren" },
    });
    expect(wrapper.get("button").text()).toBe("Stäng kalendern");
    expect(wrapper.get("button").attributes("aria-label")).toBe(
        "Stäng datumväljaren",
    );
});

describe("events", () => {
    it("should forward click to the caller once", async () => {
        expect.assertions(1);
        const onClick = vi.fn();
        const wrapper = mount(ICloseButton, { attrs: { onClick } });
        await wrapper.get("button").trigger("click");
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});

describe("html-validate", () => {
    it("should allow default and custom button text", async () => {
        expect.assertions(2);
        await expect(
            /* HTML */ `<i-close-button></i-close-button>`,
        ).toBeValid();
        await expect(
            /* HTML */ `<i-close-button
                compact
                icon-only
                aria-label="Stäng kalendern"
                >Stäng</i-close-button
            >`,
        ).toBeValid();
    });
});
