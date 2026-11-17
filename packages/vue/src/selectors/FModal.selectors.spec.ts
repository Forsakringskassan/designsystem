import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import { type VueWrapper, mount } from "@vue/test-utils";
import { afterEach, expect, it } from "vitest";
import { FConfirmModal } from "../components";
import { FModalSelectors } from "./FModal.selectors";

let wrapper: VueWrapper | undefined;

afterEach(() => {
    wrapper?.unmount();
    wrapper = undefined;
});

function createWrapper(): VueWrapper {
    wrapper = mount(
        {
            components: { FConfirmModal },
            template: /* HTML */ `
                <f-confirm-modal
                    data-test="my-modal"
                    heading="Lorem ipsum"
                    content="Dolor sit amet"
                >
                </f-confirm-modal>
            `,
        },
        {
            global: { stubs: ["FIcon"] },
            attachTo: createPlaceholderInDocument(),
        },
    );
    return wrapper;
}

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = createWrapper();
    const { selector } = FModalSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(":scope");
    expect(root.classes()).toContain("modal");
});

it("should handle explicit selector (data-test attribute)", () => {
    expect.assertions(2);
    const wrapper = createWrapper();
    const { selector } = FModalSelectors('[data-test="my-modal"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="my-modal"]');
    expect(root.classes()).toContain("modal");
});

it("dialog() should return the dialog element", () => {
    expect.assertions(1);
    const wrapper = createWrapper();
    const { dialog } = FModalSelectors();
    expect(wrapper.find(dialog()).exists()).toBeTruthy();
});

it("title() should return the title element", () => {
    expect.assertions(1);
    const wrapper = createWrapper();
    const { title } = FModalSelectors();
    expect(wrapper.get(title()).text()).toBe("Lorem ipsum");
});

it("body() should return the body element", () => {
    expect.assertions(1);
    const wrapper = createWrapper();
    const { body } = FModalSelectors();
    expect(wrapper.get(body()).text()).toBe("Dolor sit amet");
});

it("primaryButton() should return the primary button", () => {
    expect.assertions(1);
    const wrapper = createWrapper();
    const { primaryButton } = FModalSelectors();
    expect(wrapper.get(primaryButton()).text()).toBe("Primärknapp");
});

it("secondaryButton() should return the secondary button", () => {
    expect.assertions(1);
    const wrapper = createWrapper();
    const { secondaryButton } = FModalSelectors();
    expect(wrapper.get(secondaryButton()).text()).toBe("Sekundärknapp");
});

it("closeCross() should return the close button", () => {
    expect.assertions(1);
    const wrapper = createWrapper();
    const { closeCross } = FModalSelectors();
    expect(wrapper.find(closeCross()).exists()).toBeTruthy();
});
