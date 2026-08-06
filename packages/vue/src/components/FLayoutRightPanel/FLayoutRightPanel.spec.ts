import "html-validate/vitest";
import "@fkui/test-utils/vitest";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import FLayoutRightPanel from "./FLayoutRightPanel.vue";
import { FLayoutRightPanelService } from "./services/f-layout-right-panel-service";

describe("snapshot", () => {
    it("should match snapshot", async () => {
        expect.assertions(2);
        const wrapper = shallowMount(FLayoutRightPanel, {
            slots: {
                default: "DEFAULT",
                content: "TOPNAVIGATION",
                heading: /* HTML */ ` <h3>TITEL</h3> `,
            },
        });
        FLayoutRightPanelService.open();
        await expect.poll(() => wrapper.find("aside").exists()).toBeTruthy();
        expect(wrapper.element).toMatchSnapshot();
    });
});

it("should be closable", async () => {
    expect.assertions(2);
    const wrapper = shallowMount(FLayoutRightPanel);
    FLayoutRightPanelService.open();
    await expect.poll(() => wrapper.find("aside").exists()).toBeTruthy();
    await wrapper.get("button").trigger("click");
    await expect.poll(() => wrapper.find("aside").exists()).toBeFalsy();
});

it("should focus title on open", async () => {
    expect.assertions(2);
    const wrapper = shallowMount(FLayoutRightPanel, {
        slots: {
            heading: /* HTML */ ` <h3>TITEL</h3> `,
        },
        attachTo: document.body,
    });
    FLayoutRightPanelService.open();
    await expect.poll(() => wrapper.find("aside").exists()).toBeTruthy();
    expect(wrapper.get("h3").element).toHaveFocus();
});

describe("html-validate", () => {
    it("should allow defined slots", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-layout-right-panel>
                <template #default></template>
                <template #content></template>
                <template #heading></template>
            </f-layout-right-panel>
        `;
        await expect(markup).toBeValid();
    });
});
