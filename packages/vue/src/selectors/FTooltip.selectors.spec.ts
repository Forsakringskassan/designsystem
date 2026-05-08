import { mount } from "@vue/test-utils";
import { FTooltip } from "../components";
import { FTooltipSelectors } from "./FTooltip.selectors";

const defaultMountOptions = {
    global: { stubs: ["f-icon"] },
};

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FTooltip, {
        ...defaultMountOptions,
        props: { screenReaderText: "More info", headerTag: "h2" },
        slots: { header: "Help", body: "Tooltip content" },
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
        props: { screenReaderText: "More info", headerTag: "h2" },
        slots: { header: "Help", body: "Tooltip content" },
        attrs: { "data-test": "my-tooltip" },
    });
    const { selector } = FTooltipSelectors('[data-test="my-tooltip"]');
    expect(selector).toBe('[data-test="my-tooltip"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
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

it("bubble() should return a selector for the bubble element", () => {
    expect.assertions(1);
    const { bubble } = FTooltipSelectors();
    expect(bubble()).toBe(".tooltip .tooltip__bubble");
});

it("header() should return a selector for the header element", () => {
    expect.assertions(1);
    const { header } = FTooltipSelectors();
    expect(header()).toBe(".tooltip .tooltip__header");
});

it("body() should return a selector for the body element", () => {
    expect.assertions(1);
    const { body } = FTooltipSelectors();
    expect(body()).toBe(".tooltip .tooltip__body");
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
