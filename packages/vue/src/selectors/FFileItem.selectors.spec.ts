import { mount } from "@vue/test-utils";
import { FFileItem } from "../components";
import { TranslationPlugin } from "../plugins";
import { FFileItemSelectors } from "./FFileItem.selectors";

const defaultMountOptions = {
    global: { plugins: [TranslationPlugin], stubs: ["f-icon"] },
};

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FFileItem, {
        ...defaultMountOptions,
        props: { fileName: "document.pdf", url: "/files/document.pdf" },
    });
    const { selector } = FFileItemSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".file-item");
    expect(root.classes()).toContain("file-item");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(1);
    const { selector } = FFileItemSelectors('[data-test="my-file"]');
    expect(selector).toBe('[data-test="my-file"]');
});

it("fileName() should return the file name element", () => {
    expect.assertions(1);
    const wrapper = mount(FFileItem, {
        ...defaultMountOptions,
        props: { fileName: "document.pdf", url: "/files/document.pdf" },
    });
    const { fileName } = FFileItemSelectors();
    expect(wrapper.get(fileName()).text()).toContain("document.pdf");
});

it("openLink() should return the open link element", () => {
    expect.assertions(1);
    const wrapper = mount(FFileItem, {
        ...defaultMountOptions,
        props: { fileName: "document.pdf", url: "/files/document.pdf" },
    });
    const { openLink } = FFileItemSelectors();
    expect(wrapper.find(openLink()).exists()).toBeTruthy();
});

it("deleteButton() should not exist when no delete callback is provided", () => {
    expect.assertions(1);
    const wrapper = mount(FFileItem, {
        ...defaultMountOptions,
        props: { fileName: "document.pdf", url: "/files/document.pdf" },
    });
    const { deleteButton } = FFileItemSelectors();
    expect(wrapper.find(deleteButton()).exists()).toBeFalsy();
});
