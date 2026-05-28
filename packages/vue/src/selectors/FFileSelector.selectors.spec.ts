import { mount } from "@vue/test-utils";
import { FFileSelector } from "../components";
import { FFileSelectorSelectors } from "./FFileSelector.selectors";

const defaultMountOptions = {
    global: { stubs: ["f-icon"] },
};

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FFileSelector, {
        ...defaultMountOptions,
        slots: { default: "Upload file" },
    });
    const { selector } = FFileSelectorSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".file-selector");
    expect(root.classes()).toContain("file-selector");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(1);
    const { selector } = FFileSelectorSelectors('[data-test="upload"]');
    expect(selector).toBe('[data-test="upload"]');
});

it("fileInput() should return the file input element", () => {
    expect.assertions(2);
    const wrapper = mount(FFileSelector, {
        ...defaultMountOptions,
        slots: { default: "Upload file" },
    });
    const { fileInput } = FFileSelectorSelectors();
    const el = wrapper.get(fileInput());
    expect(el.element.tagName.toLowerCase()).toBe("input");
    expect((el.element as HTMLInputElement).type).toBe("file");
});

it("icon() should return the icon element", () => {
    expect.assertions(1);
    const wrapper = mount(FFileSelector, {
        ...defaultMountOptions,
        slots: { default: "Upload file" },
    });
    const { icon } = FFileSelectorSelectors();
    expect(wrapper.find(icon()).exists()).toBeTruthy();
});
