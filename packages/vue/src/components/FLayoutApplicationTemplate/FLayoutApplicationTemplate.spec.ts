import "html-validate/vitest";
import { type VueWrapper, mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import FLayoutApplicationTemplate from "./FLayoutApplicationTemplate.vue";

let wrapper: VueWrapper;

function createPlaceholderInDocument(): HTMLElement {
    const elem = document.createElement("div");
    if (document.body) {
        document.body.append(elem);
    }
    return elem;
}

interface IApplicationTemplateSlots {
    header?: string;
    "top-navigation": string;
    default: string;
    footer?: string;
}

const defaultSlots: IApplicationTemplateSlots = {
    header: "HEADER",
    "top-navigation": "TOPNAVIGATION",
    default: "DEFAULT",
    footer: "FOOTER",
};

function createWrapper(slots: IApplicationTemplateSlots): VueWrapper {
    return mount(FLayoutApplicationTemplate, {
        slots: {
            ...slots,
        },
        attachTo: createPlaceholderInDocument(),
    });
}

describe("snapshots", () => {
    it("should match snapshot with all slots used", () => {
        expect.assertions(1);
        wrapper = createWrapper(defaultSlots);
        expect(wrapper.element).toMatchSnapshot();
    });

    it("should render snapshot with no header and footer if running under another application", () => {
        expect.assertions(1);
        const withoutOptsSlots: IApplicationTemplateSlots = {
            "top-navigation": "TOPNAVIGATION",
            default: "DEFAULT",
        };
        wrapper = createWrapper(withoutOptsSlots);
        expect(wrapper.element).toMatchSnapshot();
    });
});

describe("<header>", () => {
    it("should not insert <header> element if neither header or top-navigation slot is set", () => {
        expect.assertions(1);
        const wrapper = mount(FLayoutApplicationTemplate);
        const header = wrapper.find("header");
        expect(header.exists()).toBeFalsy();
    });

    it("should not insert <header> element if header or top-navigation slot is set but empty", () => {
        expect.assertions(1);
        const wrapper = mount(FLayoutApplicationTemplate, {
            header: "",
            "top-navigation": "",
        });
        const header = wrapper.find("header");
        expect(header.exists()).toBeFalsy();
    });

    it("should insert <header> element if header slot is present and non-empty", () => {
        expect.assertions(1);
        const wrapper = mount(FLayoutApplicationTemplate, {
            slots: {
                header: "lorem ipsum",
            },
        });
        const header = wrapper.find("header");
        expect(header.exists()).toBeTruthy();
    });

    it("should insert <header> element if top-navigation slot is present and non-empty", () => {
        expect.assertions(1);
        const wrapper = mount(FLayoutApplicationTemplate, {
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
    wrapper = createWrapper(defaultSlots);
    expect(window.document.body.classList).toContain(
        "layout-application-template__body",
    );
});

describe("navLabel prop", () => {
    it("should set default aria-label text when not used", () => {
        expect.assertions(1);
        const wrapper = mount(FLayoutApplicationTemplate, {
            slots: {
                "top-navigation": "lorem ipsum",
            },
        });
        const nav = wrapper.get(".layout-application-template nav");
        expect(nav.attributes("aria-label")).toContain("Navigeringsmeny");
    });

    it("should set correct aria-label text when used", () => {
        expect.assertions(1);
        const wrapper = mount(FLayoutApplicationTemplate, {
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
        const slotTemplates = Object.entries(defaultSlots).map(
            ([key, value]) => `<template #${key}>${value}</template>`,
        );

        await expect(
            `<f-layout-application-template>${slotTemplates}</f-layout-application-template>`,
        ).toHTMLValidate();
    });
});
