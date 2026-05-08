import { mount } from "@vue/test-utils";
import { FLayoutLeftPanel } from "../components";
import { FLayoutLeftPanelSelectors } from "./FLayoutLeftPanel.selectors";

const defaultMountOptions = {
    global: { stubs: ["FButton", "FIcon"] },
};

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FLayoutLeftPanel, {
        ...defaultMountOptions,
        slots: { default: "Main content" },
    });
    const { selector } = FLayoutLeftPanelSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".layout-navigation");
    expect(root.classes()).toContain("layout-navigation");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FLayoutLeftPanel, {
        ...defaultMountOptions,
        slots: { default: "Main content" },
        attrs: { "data-test": "left-panel" },
    });
    const { selector } = FLayoutLeftPanelSelectors('[data-test="left-panel"]');
    expect(selector).toBe('[data-test="left-panel"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("navigation() should return the navigation panel element", () => {
    expect.assertions(1);
    const wrapper = mount(FLayoutLeftPanel, {
        ...defaultMountOptions,
        slots: { default: "Content" },
    });
    const { navigation } = FLayoutLeftPanelSelectors();
    expect(wrapper.find(navigation()).exists()).toBeTruthy();
});

it("primary() should return the primary content element", () => {
    expect.assertions(1);
    const wrapper = mount(FLayoutLeftPanel, {
        ...defaultMountOptions,
        slots: { default: "Main content" },
    });
    const { primary } = FLayoutLeftPanelSelectors();
    expect(wrapper.get(primary()).text()).toContain("Main content");
});
