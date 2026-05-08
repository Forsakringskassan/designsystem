import { mount } from "@vue/test-utils";
import { FOffline } from "../components";
import { FOfflineSelectors } from "./FOffline.selectors";

const defaultMountOptions = {
    global: { stubs: ["FIcon", "IFlex", "IFlexItem"] },
};

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FOffline, defaultMountOptions);
    const { selector } = FOfflineSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".offline__wrapper");
    expect(root.classes()).toContain("offline__wrapper");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FOffline, {
        ...defaultMountOptions,
        attrs: { "data-test": "offline" },
    });
    const { selector } = FOfflineSelectors('[data-test="offline"]');
    expect(selector).toBe('[data-test="offline"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("offlineMessage() should not exist when online", () => {
    expect.assertions(1);
    const wrapper = mount(FOffline, defaultMountOptions);
    const { offlineMessage } = FOfflineSelectors();
    expect(wrapper.find(offlineMessage()).exists()).toBeFalsy();
});
