import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import { flushPromises, mount } from "@vue/test-utils";
import { FFormModal } from "../components";
import { ValidationPlugin } from "../plugins";
import { FFormModalSelectors } from "./FFormModal.selectors";

const defaultMountOptions = {
    attachTo: createPlaceholderInDocument(),
    global: { stubs: ["f-icon"], plugins: [ValidationPlugin] },
    props: { isOpen: true },
};

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FFormModal, {
        ...defaultMountOptions,
        slots: { header: "Edit details", default: "Form content" },
    });
    const { selector } = FFormModalSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".modal");
    expect(root.classes()).toContain("modal");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FFormModal, {
        ...defaultMountOptions,
        props: { isOpen: true, dataTest: "my-modal" },
        slots: { header: "Edit details", default: "Form content" },
    });
    const { selector } = FFormModalSelectors('[data-test="my-modal"]');
    expect(selector).toBe('[data-test="my-modal"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("title() should return the title element", async () => {
    expect.assertions(1);
    const wrapper = mount(FFormModal, {
        ...defaultMountOptions,
        slots: { header: "Edit details", default: "Form content" },
    });
    await flushPromises();
    const { title } = FFormModalSelectors();
    expect(wrapper.get(title()).text()).toContain("Edit details");
});

it("content() should return the content element", async () => {
    expect.assertions(1);
    const wrapper = mount(FFormModal, {
        ...defaultMountOptions,
        slots: { header: "Title", default: "Form content" },
    });
    await flushPromises();
    const { content } = FFormModalSelectors();
    expect(wrapper.get(content()).text()).toContain("Form content");
});

it("footer() should return the footer element", async () => {
    expect.assertions(1);
    const wrapper = mount(FFormModal, {
        ...defaultMountOptions,
        slots: { header: "Title", default: "Form content" },
    });
    await flushPromises();
    const { footer } = FFormModalSelectors();
    expect(wrapper.find(footer()).exists()).toBeTruthy();
});

it("submitButton() should return the submit button in the footer", async () => {
    expect.assertions(1);
    const wrapper = mount(FFormModal, {
        ...defaultMountOptions,
        slots: { header: "Title", default: "Form content" },
    });
    await flushPromises();
    const { submitButton } = FFormModalSelectors();
    expect(wrapper.find(submitButton()).exists()).toBeTruthy();
});

it("cancelButton() should return the cancel button in the footer", async () => {
    expect.assertions(1);
    const wrapper = mount(FFormModal, {
        ...defaultMountOptions,
        slots: { header: "Title", default: "Form content" },
    });
    await flushPromises();
    const { cancelButton } = FFormModalSelectors();
    expect(wrapper.find(cancelButton()).exists()).toBeTruthy();
});

it("closeButton() should return the close button element", async () => {
    expect.assertions(1);
    const wrapper = mount(FFormModal, {
        ...defaultMountOptions,
        slots: { header: "Title", default: "Form content" },
    });
    await flushPromises();
    const { closeButton } = FFormModalSelectors();
    expect(wrapper.find(closeButton()).exists()).toBeTruthy();
});
