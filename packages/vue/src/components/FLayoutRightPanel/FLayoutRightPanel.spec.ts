import "html-validate/jest";
import "@fkui/test-utils/jest";
import { flushPromises, mount, VueWrapper } from "@vue/test-utils";
import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import FLayoutRightPanel from "./FLayoutRightPanel.vue";

let wrapper: VueWrapper;

const defaultSlots = {
    default: "DEFAULT",
    content: "TOPNAVIGATION",
    heading: /* HTML */ ` <h3>TITEL</h3> `,
};

async function createWrapper(): Promise<VueWrapper> {
    const wrapper = mount(FLayoutRightPanel, {
        slots: {
            ...defaultSlots,
        },
        global: {
            stubs: ["FIcon"],
        },
        attachTo: createPlaceholderInDocument(),
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- technical debt, should not test methods this way, should interact with the component the same way an actual user does
    (wrapper.vm as any).openSecondary();
    // wait for it to open
    await wrapper.vm.$nextTick();
    await flushPromises();
    return wrapper;
}

describe("snapshot", () => {
    it("should match snapshot", async () => {
        wrapper = await createWrapper();
        expect(wrapper).toMatchSnapshot();
    });
});

it("should be closable", async () => {
    wrapper = await createWrapper();
    await wrapper.get("button").trigger("click");
    await flushPromises();
    expect(wrapper.find(".layout-secondary__secondary").exists()).toBeFalsy();
});

it("should focus title on open", async () => {
    wrapper = await createWrapper();
    const heading = wrapper.get("h3");
    expect(heading.element).toHaveFocus();
});

describe("html-validate", () => {
    it("should allow defined slots", () => {
        expect.assertions(1);
        const slotTemplates = Object.entries(defaultSlots).map(
            ([key, value]) => `<template #${key}>${value}</template>`,
        );

        expect(
            `<f-layout-right-panel>${slotTemplates}</f-layout-right-panel>`,
        ).toHTMLValidate();
    });
});
