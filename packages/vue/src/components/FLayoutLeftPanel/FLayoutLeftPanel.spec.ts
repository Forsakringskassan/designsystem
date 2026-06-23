import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import "html-validate/vitest";
import "@fkui/test-utils/vitest";
import FLayoutLeftPanel from "./FLayoutLeftPanel.vue";

const defaultSlots = {
    default: "DEFAULT",
    content: "TOPNAVIGATION",
    heading: /* HTML */ ` <h3>TITEL</h3> `,
};

describe("navLabel prop", () => {
    it("should set default aria-label text when not used", () => {
        expect.assertions(1);
        const wrapper = mount(FLayoutLeftPanel);
        const nav = wrapper.get("nav#layout-navigation__navigation");
        expect(nav.attributes("aria-label")).toContain("Vänstermeny");
    });

    it("should set correct aria-label text when used", () => {
        expect.assertions(1);
        const wrapper = mount(FLayoutLeftPanel, {
            props: {
                navLabel: "Foobar",
            },
        });
        const nav = wrapper.get("nav#layout-navigation__navigation");
        expect(nav.attributes("aria-label")).toContain("Foobar");
    });
});

describe("html-validate", () => {
    it("should allow defined slots", async () => {
        expect.assertions(1);
        const slotTemplates = Object.entries(defaultSlots).map(
            ([key, value]) => `<template #${key}>${value}</template>`,
        );

        await expect(
            `<f-layout-left-panel>${slotTemplates}</f-layout-left-panel>`,
        ).toHTMLValidate();
    });

    it("should require defined slots", async () => {
        expect.assertions(1);
        const markup = `<f-layout-left-panel></f-layout-left-panel>`;
        await expect(markup).toMatchInlineCodeframe(`
            "error: <f-layout-left-panel> component requires slot "heading" to be implemented (vue/required-slots)
            > 1 | <f-layout-left-panel></f-layout-left-panel>
                |  ^^^^^^^^^^^^^^^^^^^
            Selector: f-layout-left-panel
            error: <f-layout-left-panel> component requires slot "content" to be implemented (vue/required-slots)
            > 1 | <f-layout-left-panel></f-layout-left-panel>
                |  ^^^^^^^^^^^^^^^^^^^
            Selector: f-layout-left-panel
            error: <f-layout-left-panel> component requires slot "default" to be implemented (vue/required-slots)
            > 1 | <f-layout-left-panel></f-layout-left-panel>
                |  ^^^^^^^^^^^^^^^^^^^
            Selector: f-layout-left-panel"
        `);
    });
});
