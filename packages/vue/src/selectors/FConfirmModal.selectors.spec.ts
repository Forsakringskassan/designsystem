import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import { flushPromises, mount } from "@vue/test-utils";
import { FConfirmModal } from "../components";
import { FConfirmModalSelectors } from "./FConfirmModal.selectors";

const defaultMountOptions = {
    attachTo: createPlaceholderInDocument(),
    global: { stubs: ["f-icon"] },
    props: { isOpen: true },
};

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FConfirmModal, defaultMountOptions);
    const { selector } = FConfirmModalSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".modal");
    expect(root.classes()).toContain("modal");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FConfirmModal, {
        ...defaultMountOptions,
        attrs: { "data-test": "my-modal" },
    });
    const { selector } = FConfirmModalSelectors('[data-test="my-modal"]');
    expect(selector).toBe('[data-test="my-modal"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("title() should return the title element", async () => {
    expect.assertions(1);
    const wrapper = mount(FConfirmModal, {
        ...defaultMountOptions,
        props: { isOpen: true, heading: "Are you sure?" },
    });
    await flushPromises();
    const { title } = FConfirmModalSelectors();
    expect(wrapper.get(title()).text()).toContain("Are you sure?");
});

it("content() should return the content element", async () => {
    expect.assertions(1);
    const wrapper = mount(FConfirmModal, {
        ...defaultMountOptions,
        props: { isOpen: true, content: "This action cannot be undone." },
    });
    await flushPromises();
    const { content } = FConfirmModalSelectors();
    expect(wrapper.get(content()).text()).toContain(
        "This action cannot be undone.",
    );
});

it("footer() should return the footer element", async () => {
    expect.assertions(1);
    const wrapper = mount(FConfirmModal, defaultMountOptions);
    await flushPromises();
    const { footer } = FConfirmModalSelectors();
    expect(wrapper.find(footer()).exists()).toBeTruthy();
});

it("confirmButton() should return the confirm button in the footer", async () => {
    expect.assertions(1);
    const wrapper = mount(FConfirmModal, defaultMountOptions);
    await flushPromises();
    const { confirmButton } = FConfirmModalSelectors();
    expect(wrapper.find(confirmButton()).exists()).toBeTruthy();
});

it("dismissButton() should return the dismiss button in the footer", async () => {
    expect.assertions(1);
    const wrapper = mount(FConfirmModal, defaultMountOptions);
    await flushPromises();
    const { dismissButton } = FConfirmModalSelectors();
    expect(wrapper.find(dismissButton()).exists()).toBeTruthy();
});

it("closeButton() should return the close button element", async () => {
    expect.assertions(1);
    const wrapper = mount(FConfirmModal, defaultMountOptions);
    await flushPromises();
    const { closeButton } = FConfirmModalSelectors();
    expect(wrapper.find(closeButton()).exists()).toBeTruthy();
});
