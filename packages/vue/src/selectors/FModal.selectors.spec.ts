import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import { flushPromises, mount } from "@vue/test-utils";
import { FModal } from "../components";
import { FModalSelectors } from "./FModal.selectors";

const defaultMountOptions = {
    attachTo: createPlaceholderInDocument(),
    global: { stubs: ["f-icon"] },
    props: { isOpen: true },
};

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FModal, {
        ...defaultMountOptions,
        slots: { header: "My title", content: "Body" },
    });
    const { selector } = FModalSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".modal");
    expect(root.classes()).toContain("modal");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FModal, {
        ...defaultMountOptions,
        slots: { header: "My title", content: "Body" },
        attrs: { "data-test": "my-modal" },
    });
    const { selector } = FModalSelectors('[data-test="my-modal"]');
    expect(selector).toBe('[data-test="my-modal"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("title() should return the title element", async () => {
    expect.assertions(1);
    const wrapper = mount(FModal, {
        ...defaultMountOptions,
        slots: { header: "My title", content: "Body" },
    });
    await flushPromises();
    const { title } = FModalSelectors();
    expect(wrapper.get(title()).text()).toContain("My title");
});

it("content() should return the content element", async () => {
    expect.assertions(1);
    const wrapper = mount(FModal, {
        ...defaultMountOptions,
        slots: { header: "Title", content: "Body text" },
    });
    await flushPromises();
    const { content } = FModalSelectors();
    expect(wrapper.get(content()).text()).toContain("Body text");
});

it("footer() should exist when footer slot is used", async () => {
    expect.assertions(1);
    const wrapper = mount(FModal, {
        ...defaultMountOptions,
        slots: {
            header: "Title",
            content: "Body",
            footer: '<button class="button button--primary">OK</button><button class="button button--secondary">Cancel</button>',
        },
    });
    await flushPromises();
    const { footer } = FModalSelectors();
    expect(wrapper.find(footer()).exists()).toBeTruthy();
});

it("primaryButton() should return the primary button in the footer", async () => {
    expect.assertions(1);
    const wrapper = mount(FModal, {
        ...defaultMountOptions,
        slots: {
            header: "Title",
            content: "Body",
            footer: '<button class="button button--primary">OK</button>',
        },
    });
    await flushPromises();
    const { primaryButton } = FModalSelectors();
    expect(wrapper.find(primaryButton()).exists()).toBeTruthy();
});

it("secondaryButton() should return the secondary button in the footer", async () => {
    expect.assertions(1);
    const wrapper = mount(FModal, {
        ...defaultMountOptions,
        slots: {
            header: "Title",
            content: "Body",
            footer: '<button class="button button--secondary">Cancel</button>',
        },
    });
    await flushPromises();
    const { secondaryButton } = FModalSelectors();
    expect(wrapper.find(secondaryButton()).exists()).toBeTruthy();
});

it("closeButton() should return the close button element", async () => {
    expect.assertions(1);
    const wrapper = mount(FModal, {
        ...defaultMountOptions,
        slots: { header: "Title", content: "Body" },
    });
    await flushPromises();
    const { closeButton } = FModalSelectors();
    expect(wrapper.find(closeButton()).exists()).toBeTruthy();
});
