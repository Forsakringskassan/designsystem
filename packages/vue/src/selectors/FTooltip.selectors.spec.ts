import { mount } from "@vue/test-utils";
import { expect, it } from "vitest";
import { FTooltip } from "../components";
import { FTooltipSelectors } from "./FTooltip.selectors";

const defaultMountOptions = {
    global: { stubs: ["f-icon"] },
};

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FTooltip, {
        ...defaultMountOptions,
        props: { screenReaderText: "More info" },
    });
    const { selector } = FTooltipSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".tooltip");
    expect(root.classes()).toContain("tooltip");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FTooltip, {
        ...defaultMountOptions,
        props: { screenReaderText: "More info" },
        attrs: { "data-test": "my-tooltip" },
    });
    const { selector } = FTooltipSelectors('[data-test="my-tooltip"]');
    expect(selector).toBe('[data-test="my-tooltip"]');
    expect(wrapper.get(selector).classes()).toContain("tooltip");
});

it("toggleButton() should return a selector for the toggle button element", () => {
    expect.assertions(1);
    const wrapper = mount(FTooltip, {
        ...defaultMountOptions,
        props: { screenReaderText: "More info" },
    });
    const { toggleButton } = FTooltipSelectors();
    expect(wrapper.get(toggleButton()).element.tagName.toLowerCase()).toBe(
        "button",
    );
});

it("bubble() should return a selector for the bubble element", async () => {
    expect.assertions(1);
    const wrapper = mount(FTooltip, {
        ...defaultMountOptions,
        props: { screenReaderText: "More info", headerTag: "h2" },
        slots: { header: "Help", body: "Tooltip content" },
    });
    const { toggleButton, bubble } = FTooltipSelectors();
    await wrapper.get(toggleButton()).trigger("click");
    expect(wrapper.get(bubble()).classes()).toContain("tooltip__bubble");
});

it("header() should return a selector for the header element", async () => {
    expect.assertions(1);
    const wrapper = mount(FTooltip, {
        ...defaultMountOptions,
        props: { screenReaderText: "More info", headerTag: "h2" },
        slots: { header: "Help", body: "Tooltip content" },
    });
    const { toggleButton, header } = FTooltipSelectors();
    await wrapper.get(toggleButton()).trigger("click");
    expect(wrapper.get(header()).classes()).toContain("tooltip__header");
});

it("body() should return a selector for the body element", async () => {
    expect.assertions(1);
    const wrapper = mount(FTooltip, {
        ...defaultMountOptions,
        props: { screenReaderText: "More info", headerTag: "h2" },
        slots: { header: "Help", body: "Tooltip content" },
    });
    const { toggleButton, body } = FTooltipSelectors();
    await wrapper.get(toggleButton()).trigger("click");
    expect(wrapper.get(body()).classes()).toContain("tooltip__body");
});

it("closeButton() should not exist when tooltip is closed", () => {
    expect.assertions(1);
    const wrapper = mount(FTooltip, {
        ...defaultMountOptions,
        props: { screenReaderText: "More info", headerTag: "h2" },
        slots: { header: "Help", body: "Tooltip content" },
    });
    const { closeButton } = FTooltipSelectors();
    expect(wrapper.find(closeButton()).exists()).toBeFalsy();
});

it("closeButton() should exist when tooltip is open", async () => {
    expect.assertions(3);
    const wrapper = mount(FTooltip, {
        ...defaultMountOptions,
        props: { screenReaderText: "More info", headerTag: "h2" },
        slots: { header: "Help", body: "Tooltip content" },
    });
    const { toggleButton, closeButton } = FTooltipSelectors();
    await wrapper.get(toggleButton()).trigger("click");
    const el = wrapper.get(closeButton());
    expect(el.element.tagName.toLowerCase()).toBe("button");
    expect((el.element as HTMLInputElement).type).toBe("button");
    expect(el.classes()).toContain("close-button");
});
