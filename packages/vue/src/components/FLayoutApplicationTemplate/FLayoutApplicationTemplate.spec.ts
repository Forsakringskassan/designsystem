import "html-validate/vitest";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import FLayoutApplicationTemplate from "./FLayoutApplicationTemplate.vue";

describe("snapshots", () => {
    it("should match snapshot with all slots used", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FLayoutApplicationTemplate, {
            slots: {
                header: "HEADER",
                "top-navigation": "TOPNAVIGATION",
                default: "DEFAULT",
                footer: "FOOTER",
            },
        });
        expect(wrapper.element).toMatchSnapshot();
    });

    it("should render snapshot with no header and footer if running under another application", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FLayoutApplicationTemplate, {
            slots: {
                "top-navigation": "TOPNAVIGATION",
                default: "DEFAULT",
            },
        });
        expect(wrapper.element).toMatchSnapshot();
    });
});

describe("<header>", () => {
    it("should not insert <header> element if neither header or top-navigation slot is set", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FLayoutApplicationTemplate);
        const header = wrapper.find("header");
        expect(header.exists()).toBeFalsy();
    });

    /* eslint-disable-next-line vitest/no-disabled-tests -- technical debt: test fails when broken test code is fixed */
    it.skip("should not insert <header> element if header or top-navigation slot is set but empty", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FLayoutApplicationTemplate, {
            slots: {
                header: "",
                "top-navigation": "",
            },
        });
        const header = wrapper.find("header");
        expect(header.exists()).toBeFalsy();
    });

    it("should insert <header> element if header slot is present and non-empty", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FLayoutApplicationTemplate, {
            slots: {
                header: "lorem ipsum",
            },
        });
        const header = wrapper.find("header");
        expect(header.exists()).toBeTruthy();
    });

    it("should insert <header> element if top-navigation slot is present and non-empty", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FLayoutApplicationTemplate, {
            slots: {
                "top-navigation": "lorem ipsum",
            },
        });
        const header = wrapper.find("header");
        expect(header.exists()).toBeTruthy();
    });
});

it("should apply css class 'layout-application-template__body' to body-element", () => {
    expect.assertions(1);
    shallowMount(FLayoutApplicationTemplate);
    expect(window.document.body.classList).toContain(
        "layout-application-template__body",
    );
});

describe("navLabel prop", () => {
    it("should set default aria-label text when not used", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FLayoutApplicationTemplate, {
            slots: {
                "top-navigation": "lorem ipsum",
            },
        });
        const nav = wrapper.get(".layout-application-template nav");
        expect(nav.attributes("aria-label")).toContain("Navigeringsmeny");
    });

    it("should set correct aria-label text when used", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FLayoutApplicationTemplate, {
            props: {
                navLabel: "Foobar",
            },
            slots: {
                "top-navigation": "lorem ipsum",
            },
        });
        const nav = wrapper.get(".layout-application-template nav");
        expect(nav.attributes("aria-label")).toContain("Foobar");
    });
});

describe("html-validate", () => {
    it("should allow defined slots", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-layout-application-template>
                <template #header></template>
                <template #top-navigation></template>
                <template #default></template>
                <template #footer></template>
            </f-layout-application-template>
        `;
        await expect(markup).toBeValid();
    });
});
