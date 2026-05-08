import { mount } from "@vue/test-utils";
import { FLayoutRightPanel } from "../components";
import { FLayoutRightPanelSelectors } from "./FLayoutRightPanel.selectors";

const defaultMountOptions = {
    global: { stubs: ["FButton", "FIcon"] },
};

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FLayoutRightPanel, {
        ...defaultMountOptions,
        slots: { default: "Main content" },
    });
    const { selector } = FLayoutRightPanelSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".layout-secondary");
    expect(root.classes()).toContain("layout-secondary");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FLayoutRightPanel, {
        ...defaultMountOptions,
        slots: { default: "Main content" },
        attrs: { "data-test": "right-panel" },
    });
    const { selector } = FLayoutRightPanelSelectors(
        '[data-test="right-panel"]',
    );
    expect(selector).toBe('[data-test="right-panel"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("primary() should return the primary content element", () => {
    expect.assertions(1);
    const wrapper = mount(FLayoutRightPanel, {
        ...defaultMountOptions,
        slots: { default: "Main content" },
    });
    const { primary } = FLayoutRightPanelSelectors();
    expect(wrapper.get(primary()).text()).toContain("Main content");
});

it("secondary() should not exist when panel is closed", () => {
    expect.assertions(1);
    const wrapper = mount(FLayoutRightPanel, {
        ...defaultMountOptions,
        slots: { default: "Main content" },
    });
    const { secondary } = FLayoutRightPanelSelectors();
    expect(wrapper.find(secondary()).exists()).toBeFalsy();
});
