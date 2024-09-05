import "html-validate/jest";
import { mount, VueWrapper } from "@vue/test-utils";
import FLayoutApplicationTemplate from "./FLayoutApplicationTemplate.vue";

let wrapper: VueWrapper;

function createPlaceholderInDocument(): HTMLElement {
    const elem = document.createElement("div");
    if (document.body) {
        document.body.appendChild(elem);
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
        wrapper = createWrapper(defaultSlots);
        expect(wrapper.element).toMatchSnapshot();
    });

    it("should render snapshot with no header and footer if running under another application", () => {
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
    wrapper = createWrapper(defaultSlots);
    expect(window.document.body.classList).toContain(
        "layout-application-template__body",
    );
});

describe("html-validate", () => {
    it("should allow defined slots", () => {
        expect.assertions(1);
        const slotTemplates = Object.entries(defaultSlots).map(
            ([key, value]) => `<template #${key}>${value}</template>`,
        );

        expect(
            `<f-layout-application-template>${slotTemplates}</f-layout-application-template>`,
        ).toHTMLValidate();
    });
});
