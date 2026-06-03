import "html-validate/vitest";
import { shallowMount } from "@vue/test-utils";
import { FileSystemConfigLoader, HtmlValidate } from "html-validate";
import { describe, expect, it } from "vitest";
import FTableButton from "./FTableButton.vue";

it("label should be visually hidden by default", () => {
    expect.assertions(3);
    const wrapper = shallowMount(FTableButton, {
        slots: { default: "lorem ipsum" },
    });
    expect(wrapper.text()).toBe("lorem ipsum");
    expect(wrapper.get(".sr-only").text()).toBe("lorem ipsum");
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<button type="button" class="button table__button">
        <!--v-if--> <span class="sr-only">lorem ipsum</span>
      </button>"
    `);
});

it("label should be visually rendered when label prop is set", () => {
    expect.assertions(3);
    const wrapper = shallowMount(FTableButton, {
        props: { label: true },
        slots: { default: "lorem ipsum" },
    });
    expect(wrapper.text()).toBe("lorem ipsum");
    expect(wrapper.find(".sr-only").exists()).toBeFalsy();
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<button type="button" class="button table__button">
        <!--v-if--> lorem ipsum
      </button>"
    `);
});

it("icon should be present by default", () => {
    expect.assertions(1);
    const wrapper = shallowMount(FTableButton, {
        slots: { default: "lorem ipsum" },
    });
    const icon = wrapper.find("f-icon-stub");
    expect(icon.exists()).toBeFalsy();
});

it("icon should be rendered when icon prop is used", () => {
    expect.assertions(2);
    const wrapper = shallowMount(FTableButton, {
        props: { icon: "foo" },
        slots: { default: "lorem ipsum" },
    });
    const icon = wrapper.find("f-icon-stub");
    expect(icon.exists()).toBeTruthy();
    expect(icon.attributes("name")).toBe("foo");
});

it("icon library should be set when iconLibrary prop is used", () => {
    expect.assertions(2);
    const wrapper = shallowMount(FTableButton, {
        props: { icon: "foo", iconLibrary: "bar" },
        slots: { default: "lorem ipsum" },
    });
    const icon = wrapper.find("f-icon-stub");
    expect(icon.exists()).toBeTruthy();
    expect(icon.attributes("library")).toBe("bar");
});

describe("html-validate", async () => {
    it("should require text content", async () => {
        const loader = new FileSystemConfigLoader();
        const htmlvalidate = new HtmlValidate(loader);
        const markup = /* HTML */ `
            <f-table-column title="column title">
                <!-- valid -->
                <f-table-button>lorem ipsum</f-table-button>
                <f-table-button><span>lorem ipsum</span></f-table-button>
                <f-table-button>
                    <span class="sr-only">lorem ipsum</span>
                </f-table-button>

                <!-- invalid -->
                <f-table-button></f-table-button>
                <f-table-button> </f-table-button>
            </f-table-column>
        `;
        // technical debt html-validate issue, should not need filname?
        const result = await htmlvalidate.validateString(
            markup,
            "FtableButton.spec.ts",
        );
        expect(result).toMatchInlineCodeframe(`
            "error: <f-table-button> must have accessible text (text-content)
               9 |
              10 |                 <!-- invalid -->
            > 11 |                 <f-table-button></f-table-button>
                 |                  ^^^^^^^^^^^^^^
              12 |                 <f-table-button> </f-table-button>
              13 |             </f-table-column>
              14 |
            Selector: f-table-column > f-table-button:nth-child(4)
            error: <f-table-button> must have accessible text (text-content)
              10 |                 <!-- invalid -->
              11 |                 <f-table-button></f-table-button>
            > 12 |                 <f-table-button> </f-table-button>
                 |                  ^^^^^^^^^^^^^^
              13 |             </f-table-column>
              14 |
            Selector: f-table-column > f-table-button:nth-child(5)"
        `);
    });

    it("should not allow interactive descendants", async () => {
        const markup = /* HTML */ `
            <f-table-column title="column title">
                <f-table-button>
                    <button type="button">lorem ipsum</button>
                    <a href="">lorem ipsum</a>
                </f-table-button>
            </f-table-column>
        `;
        await expect(markup).toMatchInlineCodeframe(`
            "error: <button> element is not permitted as content under <f-table-button> (element-permitted-content)
              2 |             <f-table-column title="column title">
              3 |                 <f-table-button>
            > 4 |                     <button type="button">lorem ipsum</button>
                |                      ^^^^^^
              5 |                     <a href="">lorem ipsum</a>
              6 |                 </f-table-button>
              7 |             </f-table-column>
            Selector: f-table-column > f-table-button > button
            error: <a> element is not permitted as content under <f-table-button> (element-permitted-content)
              3 |                 <f-table-button>
              4 |                     <button type="button">lorem ipsum</button>
            > 5 |                     <a href="">lorem ipsum</a>
                |                      ^
              6 |                 </f-table-button>
              7 |             </f-table-column>
              8 |
            Selector: f-table-column > f-table-button > a"
        `);
    });

    it("should be allowed as content under FTableColumn", () => {
        const markup = /* HTML */ `
            <f-table-column title="column title">
                <f-table-button>lorem ipsum</f-table-button>
            </f-table-column>
        `;
        expect(markup).toMatchInlineCodeframe(`""`);
    });

    it("should require FTableColumn ancestor", async () => {
        const markup = /* HTML */ `
            <f-table-button>lorem ipsum</f-table-button>
        `;
        await expect(markup).toMatchInlineCodeframe(`
            "error: <f-table-button> element requires a <f-table-column> ancestor (element-required-ancestor)
              1 |
            > 2 |             <f-table-button>lorem ipsum</f-table-button>
                |              ^^^^^^^^^^^^^^
              3 |
            Selector: f-table-button"
        `);
    });

    it("should not require icon or label prop", () => {
        const markup = /* HTML */ `
            <f-table-column title="column title">
                <f-table-button>lorem ipsum</f-table-button>
            </f-table-column>
        `;
        expect(markup).toMatchInlineCodeframe(`""`);
    });

    it("should not allow empty icon prop", async () => {
        const markup = /* HTML */ `
            <f-table-column title="column title">
                <!-- valid -->
                <f-table-button icon="foo">lorem ipsum</f-table-button>

                <!-- invalid -->
                <f-table-button icon>lorem ipsum</f-table-button>
                <f-table-button icon="">lorem ipsum</f-table-button>
            </f-table-column>
        `;
        await expect(markup).toMatchInlineCodeframe(`
            "error: Attribute "icon" is missing value (attribute-allowed-values)
               5 |
               6 |                 <!-- invalid -->
            >  7 |                 <f-table-button icon>lorem ipsum</f-table-button>
                 |                                 ^^^^
               8 |                 <f-table-button icon="">lorem ipsum</f-table-button>
               9 |             </f-table-column>
              10 |
            Selector: f-table-column > f-table-button:nth-child(2)
            error: Attribute "icon" has invalid value "" (attribute-allowed-values)
               6 |                 <!-- invalid -->
               7 |                 <f-table-button icon>lorem ipsum</f-table-button>
            >  8 |                 <f-table-button icon="">lorem ipsum</f-table-button>
                 |                                 ^^^^
               9 |             </f-table-column>
              10 |
            Selector: f-table-column > f-table-button:nth-child(3)"
        `);
    });

    it("should not allow non-boolean label prop", async () => {
        const markup = /* HTML */ `
            <f-table-column title="column title">
                <!-- valid -->
                <f-table-button label>lorem ipsum</f-table-button>
                <f-table-button :label="false">lorem ipsum</f-table-button>

                <!-- invalid -->
                <f-table-button label="foo">lorem ipsum</f-table-button>
            </f-table-column>
        `;
        await expect(markup).toMatchInlineCodeframe(`
            "error: Attribute "label" should omit value (attribute-boolean-style)
               6 |
               7 |                 <!-- invalid -->
            >  8 |                 <f-table-button label="foo">lorem ipsum</f-table-button>
                 |                                 ^^^^^
               9 |             </f-table-column>
              10 |
            Selector: f-table-column > f-table-button:nth-child(3)
            error: Attribute "label" has invalid value "foo" (attribute-allowed-values)
               6 |
               7 |                 <!-- invalid -->
            >  8 |                 <f-table-button label="foo">lorem ipsum</f-table-button>
                 |                                        ^^^
               9 |             </f-table-column>
              10 |
            Selector: f-table-column > f-table-button:nth-child(3)"
        `);
    });
});
