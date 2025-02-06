import { VueWrapper, mount } from "@vue/test-utils";
import {
    cjsResolver,
    FileSystemConfigLoader,
    HtmlValidate,
} from "html-validate/node";
import "html-validate/jest";
import FTooltip from "./FTooltip.vue";

const tooltipButtonClass = ".tooltip__button";
const headerClass = ".tooltip__header";

function createWrapper({
    props = {},
    slots = {},
    attrs = {},
} = {}): VueWrapper {
    return mount(FTooltip, {
        attrs: { ...attrs },
        props: { screenReaderText: "Lorem ipsum", ...props },
        slots: { ...slots },
        global: {
            stubs: ["f-icon"],
        },
    });
}

it("should set aria-expanded on tooltip button", () => {
    expect.assertions(2);
    const expanded = mount(FTooltip, {
        props: { screenReaderText: "", modelValue: true },
    });
    const collapsed = mount(FTooltip, {
        props: { screenReaderText: "", modelValue: false },
    });
    const selector = ".tooltip__button";
    expect(expanded.get(selector).attributes("aria-expanded")).toBe("true");
    expect(collapsed.get(selector).attributes("aria-expanded")).toBe("false");
});

it("should set expanded class on tooltip container", () => {
    expect.assertions(2);
    const expanded = mount(FTooltip, {
        props: { screenReaderText: "", modelValue: true },
    });
    const collapsed = mount(FTooltip, {
        props: { screenReaderText: "", modelValue: false },
    });
    const selector = ".tooltip";
    expect(expanded.get(selector).classes()).toContain("expanded");
    expect(collapsed.get(selector).classes()).not.toContain("expanded");
});

describe("slots", () => {
    it("should render header if header slot is used", async () => {
        const wrapper = createWrapper({
            slots: {
                header: `Tooltip`,
            },
            props: {
                headerTag: "h3",
            },
        });
        await wrapper.get(tooltipButtonClass).trigger("click");
        const header = wrapper.get(headerClass);
        expect(header.text()).toBe("Tooltip");
    });

    it("should throw error if has slot for header but no header-tag", async () => {
        expect.assertions(1);
        expect(() => {
            createWrapper({
                slots: {
                    header: `Tooltip`,
                },
            });
        }).toThrowErrorMatchingInlineSnapshot(
            `"Tooltip with header must define headerTag"`,
        );
    });

    it("should not render header if header slot isn't used", async () => {
        const wrapper = createWrapper();

        await wrapper.get(tooltipButtonClass).trigger("click");
        const header = wrapper.find(headerClass);
        expect(header.exists()).toBeFalsy();
    });
});

describe("html-validate", () => {
    const loader = new FileSystemConfigLoader([cjsResolver()], {
        extends: [
            "html-validate:recommended",
            "html-validate-vue:recommended",
            "@fkui/vue:recommended",
        ],
        plugins: ["<rootDir>/htmlvalidate", "html-validate-vue"],
    });
    const htmlvalidate = new HtmlValidate(loader);

    it("close-button-text", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <!-- should allow missing close-button-text -->
            <f-tooltip screen-reader-text="foo"></f-tooltip>

            <!-- should not allow omitted close-button-text value -->
            <f-tooltip close-button-text screen-reader-text="foo"></f-tooltip>

            <!-- should not allow empty close-button-text value -->
            <f-tooltip
                close-button-text=""
                screen-reader-text="foo"
            ></f-tooltip>

            <!-- should allow valid close-button-text value -->
            <f-tooltip
                close-button-text="lorem ipsum"
                screen-reader-text="foo"
            ></f-tooltip>
        `;
        const report = htmlvalidate.validateString(markup);
        expect(report).toMatchInlineCodeframe(`
            "error: Attribute "close-button-text" is missing value (attribute-allowed-values) at inline:6:24:
              4 |
              5 |             <!-- should not allow omitted close-button-text value -->
            > 6 |             <f-tooltip close-button-text screen-reader-text="foo"></f-tooltip>
                |                        ^^^^^^^^^^^^^^^^^
              7 |
              8 |             <!-- should not allow empty close-button-text value -->
              9 |             <f-tooltip
            Selector: f-tooltip:nth-child(2)
            error: Attribute "close-button-text" has invalid value "" (attribute-allowed-values) at inline:10:17:
               8 |             <!-- should not allow empty close-button-text value -->
               9 |             <f-tooltip
            > 10 |                 close-button-text=""
                 |                 ^^^^^^^^^^^^^^^^^
              11 |                 screen-reader-text="foo"
              12 |             ></f-tooltip>
              13 |
            Selector: f-tooltip:nth-child(3)"
        `);
    });

    it("header-tag", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <!-- should allow missing header-tag -->
            <f-tooltip screen-reader-text="foo"></f-tooltip>

            <!-- omitted header-tag value -->
            <f-tooltip header-tag screen-reader-text="foo"></f-tooltip>

            <!-- empty header-tag -->
            <f-tooltip header-tag="" screen-reader-text="foo"></f-tooltip>

            <!-- valid header-tag -->
            <f-tooltip header-tag="h1" screen-reader-text="foo"></f-tooltip>
            <f-tooltip header-tag="h2" screen-reader-text="foo"></f-tooltip>
            <f-tooltip header-tag="h3" screen-reader-text="foo"></f-tooltip>
            <f-tooltip header-tag="h4" screen-reader-text="foo"></f-tooltip>
            <f-tooltip header-tag="h5" screen-reader-text="foo"></f-tooltip>
            <f-tooltip header-tag="h6" screen-reader-text="foo"></f-tooltip>

            <!-- invalid header-tag -->
            <f-tooltip header-tag="foobar" screen-reader-text="foo"></f-tooltip>
            <f-tooltip header-tag="div" screen-reader-text="foo"></f-tooltip>
            <f-tooltip header-tag="span" screen-reader-text="foo"></f-tooltip>
        `;
        const report = htmlvalidate.validateString(markup);
        expect(report).toMatchInlineCodeframe(`
            "error: Attribute "header-tag" is missing value (attribute-allowed-values) at inline:6:24:
              4 |
              5 |             <!-- omitted header-tag value -->
            > 6 |             <f-tooltip header-tag screen-reader-text="foo"></f-tooltip>
                |                        ^^^^^^^^^^
              7 |
              8 |             <!-- empty header-tag -->
              9 |             <f-tooltip header-tag="" screen-reader-text="foo"></f-tooltip>
            Selector: f-tooltip:nth-child(2)
            error: Attribute "header-tag" has invalid value "" (attribute-allowed-values) at inline:9:24:
               7 |
               8 |             <!-- empty header-tag -->
            >  9 |             <f-tooltip header-tag="" screen-reader-text="foo"></f-tooltip>
                 |                        ^^^^^^^^^^
              10 |
              11 |             <!-- valid header-tag -->
              12 |             <f-tooltip header-tag="h1" screen-reader-text="foo"></f-tooltip>
            Selector: f-tooltip:nth-child(3)
            error: Attribute "header-tag" has invalid value "foobar" (attribute-allowed-values) at inline:20:36:
              18 |
              19 |             <!-- invalid header-tag -->
            > 20 |             <f-tooltip header-tag="foobar" screen-reader-text="foo"></f-tooltip>
                 |                                    ^^^^^^
              21 |             <f-tooltip header-tag="div" screen-reader-text="foo"></f-tooltip>
              22 |             <f-tooltip header-tag="span" screen-reader-text="foo"></f-tooltip>
              23 |
            Selector: f-tooltip:nth-child(10)
            error: Attribute "header-tag" has invalid value "div" (attribute-allowed-values) at inline:21:36:
              19 |             <!-- invalid header-tag -->
              20 |             <f-tooltip header-tag="foobar" screen-reader-text="foo"></f-tooltip>
            > 21 |             <f-tooltip header-tag="div" screen-reader-text="foo"></f-tooltip>
                 |                                    ^^^
              22 |             <f-tooltip header-tag="span" screen-reader-text="foo"></f-tooltip>
              23 |
            Selector: f-tooltip:nth-child(11)
            error: Attribute "header-tag" has invalid value "span" (attribute-allowed-values) at inline:22:36:
              20 |             <f-tooltip header-tag="foobar" screen-reader-text="foo"></f-tooltip>
              21 |             <f-tooltip header-tag="div" screen-reader-text="foo"></f-tooltip>
            > 22 |             <f-tooltip header-tag="span" screen-reader-text="foo"></f-tooltip>
                 |                                    ^^^^
              23 |
            Selector: f-tooltip:nth-child(12)"
        `);
    });

    it("screen-reader-text", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <!-- should not allow missing screen-reader-text -->
            <f-tooltip></f-tooltip>

            <!-- should not allow omitted screen-reader-text value -->
            <f-tooltip screen-reader-text></f-tooltip>

            <!-- should not allow empty screen-reader-text value -->
            <f-tooltip screen-reader-text=""></f-tooltip>

            <!-- should allow valid screen-reader-text -->
            <f-tooltip screen-reader-text="lorem ipsum"></f-tooltip>
        `;
        const report = htmlvalidate.validateString(markup);
        expect(report).toMatchInlineCodeframe(`
            "error: <f-tooltip> is missing required "screen-reader-text" attribute (element-required-attributes) at inline:3:14:
              1 |
              2 |             <!-- should not allow missing screen-reader-text -->
            > 3 |             <f-tooltip></f-tooltip>
                |              ^^^^^^^^^
              4 |
              5 |             <!-- should not allow omitted screen-reader-text value -->
              6 |             <f-tooltip screen-reader-text></f-tooltip>
            Selector: f-tooltip:nth-child(1)
            error: Attribute "screen-reader-text" is missing value (attribute-allowed-values) at inline:6:24:
              4 |
              5 |             <!-- should not allow omitted screen-reader-text value -->
            > 6 |             <f-tooltip screen-reader-text></f-tooltip>
                |                        ^^^^^^^^^^^^^^^^^^
              7 |
              8 |             <!-- should not allow empty screen-reader-text value -->
              9 |             <f-tooltip screen-reader-text=""></f-tooltip>
            Selector: f-tooltip:nth-child(2)
            error: Attribute "screen-reader-text" has invalid value "" (attribute-allowed-values) at inline:9:24:
               7 |
               8 |             <!-- should not allow empty screen-reader-text value -->
            >  9 |             <f-tooltip screen-reader-text=""></f-tooltip>
                 |                        ^^^^^^^^^^^^^^^^^^
              10 |
              11 |             <!-- should allow valid screen-reader-text -->
              12 |             <f-tooltip screen-reader-text="lorem ipsum"></f-tooltip>
            Selector: f-tooltip:nth-child(3)"
        `);
    });
});
