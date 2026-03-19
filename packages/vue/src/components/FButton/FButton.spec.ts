import "html-validate/jest";
import { shallowMount } from "@vue/test-utils";
import {
    FileSystemConfigLoader,
    HtmlValidate,
    cjsResolver,
} from "html-validate";
import { FIcon } from "../FIcon";
import FButton from "./FButton.vue";

expect.addSnapshotSerializer({
    test() {
        return true;
    },
    serialize(val) {
        return val;
    },
});

describe("props", () => {
    describe("disabled", () => {
        it("should set aria-disabled on the button element when true", () => {
            expect.assertions(1);
            const wrapper = shallowMount(FButton, {
                props: {
                    disabled: true,
                },
            });
            const button = wrapper.get("button");
            expect(button.attributes("aria-disabled")).toBe("true");
        });

        it("should not set aria-disabled on the button as default", () => {
            expect.assertions(1);
            const wrapper = shallowMount(FButton);
            const button = wrapper.get("button");
            expect(button.attributes("aria-disabled")).toBe("false");
        });
    });

    it("type prop should set type attribute on button element", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FButton, {
            props: {
                type: "submit",
            },
        });
        const button = wrapper.get("button");
        expect(button.attributes("type")).toBe("submit");
    });

    it("iconLibrary should be passed to FIcon", () => {
        const wrapper = shallowMount(FButton, {
            props: {
                iconLeft: "foo",
                iconLibrary: "bar",
            },
        });
        const icon = wrapper.getComponent(FIcon);
        expect(icon.attributes("name")).toBe("foo");
        expect(icon.attributes("library")).toBe("bar");
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

    it("should allow basic button", async () => {
        expect.assertions(1);
        const markup = /* HTML */ ` <f-button> lorem ipsum </f-button> `;
        const report = await htmlvalidate.validateString(markup);
        expect(report).toBeValid();
    });

    describe("type attribute", () => {
        it("should allow valid values", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-button type="submit"> lorem ipsum </f-button>
                <f-button type="reset"> lorem ipsum </f-button>
                <f-button type="button"> lorem ipsum </f-button>
            `;
            const report = await htmlvalidate.validateString(markup);
            expect(report).toBeValid();
        });

        it("should not allow invalid values", async () => {
            expect.assertions(2);
            const markup = /* HTML */ `
                <f-button type="invalid"> lorem ipsum </f-button>
            `;
            const report = await htmlvalidate.validateString(markup);
            expect(report).toBeInvalid();
            expect(report).toMatchInlineCodeframe(`
                error: Attribute "type" has invalid value "invalid" (attribute-allowed-values) at inline:2:33:
                  1 |
                > 2 |                 <f-button type="invalid"> lorem ipsum </f-button>
                    |                                 ^^^^^^^
                  3 |
                Selector: f-button
            `);
        });

        it("should function as button by default", async () => {
            expect.assertions(2);
            const markup = /* HTML */ `
                <form>
                    <f-button> lorem ipsum </f-button>
                </form>
            `;
            const report = await htmlvalidate.validateString(markup);
            expect(report).toBeInvalid();
            expect(report).toMatchInlineCodeframe(`
                error: <form> element must have a submit button (wcag/h32) at inline:2:18:
                  1 |
                > 2 |                 <form>
                    |                  ^^^^
                  3 |                     <f-button> lorem ipsum </f-button>
                  4 |                 </form>
                  5 |
                Selector: form
            `);
        });

        it("should function as submit button when type is submit", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <form>
                    <f-button type="submit"> lorem ipsum </f-button>
                </form>
            `;
            const report = await htmlvalidate.validateString(markup);
            expect(report).toBeValid();
        });
    });

    describe("variant attribute", () => {
        it("should allow valid values", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-button variant="primary"> lorem ipsum </f-button>
                <f-button variant="secondary"> lorem ipsum </f-button>
                <f-button variant="tertiary"> lorem ipsum </f-button>
            `;
            const report = await htmlvalidate.validateString(markup);
            expect(report).toBeValid();
        });

        it("should not allow invalid values", async () => {
            expect.assertions(2);
            const markup = /* HTML */ `
                <f-button variant="invalid"> lorem ipsum </f-button>
            `;
            const report = await htmlvalidate.validateString(markup);
            expect(report).toBeInvalid();
            expect(report).toMatchInlineCodeframe(`
                error: Attribute "variant" has invalid value "invalid" (attribute-allowed-values) at inline:2:36:
                  1 |
                > 2 |                 <f-button variant="invalid"> lorem ipsum </f-button>
                    |                                    ^^^^^^^
                  3 |
                Selector: f-button
            `);
        });
    });

    describe("size attribute", () => {
        it("should allow valid values", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-button size="small"> lorem ipsum </f-button>
                <f-button size="medium"> lorem ipsum </f-button>
                <f-button size="large"> lorem ipsum </f-button>
            `;
            const report = await htmlvalidate.validateString(markup);
            expect(report).toBeValid();
        });

        it("should not allow invalid values", async () => {
            expect.assertions(2);
            const markup = /* HTML */ `
                <f-button size="invalid"> lorem ipsum </f-button>
            `;
            const report = await htmlvalidate.validateString(markup);
            expect(report).toBeInvalid();
            expect(report).toMatchInlineCodeframe(`
                error: Attribute "size" has invalid value "invalid" (attribute-allowed-values) at inline:2:33:
                  1 |
                > 2 |                 <f-button size="invalid"> lorem ipsum </f-button>
                    |                                 ^^^^^^^
                  3 |
                Selector: f-button
            `);
        });
    });

    describe("icon attributes", () => {
        it("should allow either icon-left or icon-right", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-button icon-left="icon"> lorem ipsum </f-button>
                <f-button icon-right="icon"> lorem ipsum </f-button>
            `;
            const report = await htmlvalidate.validateString(markup);
            expect(report).toBeValid();
        });

        it("should not allow both icon-left and icon-right", async () => {
            expect.assertions(2);
            const markup = /* HTML */ `
                <f-button icon-left="icon" icon-right="icon">
                    lorem ipsum
                </f-button>
            `;
            const report = await htmlvalidate.validateString(markup);
            expect(report).toBeInvalid();
            expect(report).toMatchInlineCodeframe(`
                error: "icon-left" attribute cannot be used on <f-button> in this context: cannot be used at the same time as "icon-right" (attribute-misuse) at inline:2:27:
                  1 |
                > 2 |                 <f-button icon-left="icon" icon-right="icon">
                    |                           ^^^^^^^^^
                  3 |                     lorem ipsum
                  4 |                 </f-button>
                  5 |
                Selector: f-button
                error: "icon-right" attribute cannot be used on <f-button> in this context: cannot be used at the same time as "icon-left" (attribute-misuse) at inline:2:44:
                  1 |
                > 2 |                 <f-button icon-left="icon" icon-right="icon">
                    |                                            ^^^^^^^^^^
                  3 |                     lorem ipsum
                  4 |                 </f-button>
                  5 |
                Selector: f-button
            `);
        });
    });

    describe("other attributes", () => {
        it("should allow disabled and mobile-full-width", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-button disabled> lorem ipsum </f-button>
                <f-button mobile-full-width> lorem ipsum </f-button>
            `;
            const report = await htmlvalidate.validateString(markup);
            expect(report).toBeValid();
        });
    });

    describe("tertiary-specific attributes", () => {
        it("should allow tertiary-style and align-text when variant is tertiary", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-button variant="tertiary" tertiary-style="black">
                    lorem ipsum
                </f-button>
                <f-button variant="tertiary" align-text> lorem ipsum </f-button>
            `;
            const report = await htmlvalidate.validateString(markup);
            expect(report).toBeValid();
        });

        it("should not allow tertiary-style without variant tertiary", async () => {
            expect.assertions(2);
            const markup = /* HTML */ `
                <f-button tertiary-style="black"> lorem ipsum </f-button>
            `;
            const report = await htmlvalidate.validateString(markup);
            expect(report).toBeInvalid();
            expect(report).toMatchInlineCodeframe(`
                error: "tertiary-style" attribute cannot be used on <f-button> in this context: "variant" attribute must be "tertiary" (attribute-misuse) at inline:2:27:
                  1 |
                > 2 |                 <f-button tertiary-style="black"> lorem ipsum </f-button>
                    |                           ^^^^^^^^^^^^^^
                  3 |
                Selector: f-button
            `);
        });

        it("should not allow invalid tertiary-style value", async () => {
            expect.assertions(2);
            const markup = /* HTML */ `
                <f-button tertiary-style="invalid" variant="tertiary">
                    lorem ipsum
                </f-button>
            `;
            const report = await htmlvalidate.validateString(markup);
            expect(report).toBeInvalid();
            expect(report).toMatchInlineCodeframe(`
                error: Attribute "tertiary-style" has invalid value "invalid" (attribute-allowed-values) at inline:2:43:
                  1 |
                > 2 |                 <f-button tertiary-style="invalid" variant="tertiary">
                    |                                           ^^^^^^^
                  3 |                     lorem ipsum
                  4 |                 </f-button>
                  5 |
                Selector: f-button
            `);
        });

        it("should not allow align-text without variant tertiary", async () => {
            expect.assertions(2);
            const markup = /* HTML */ `
                <f-button align-text> lorem ipsum </f-button>
            `;
            const report = await htmlvalidate.validateString(markup);
            expect(report).toBeInvalid();
            expect(report).toMatchInlineCodeframe(`
                error: "align-text" attribute cannot be used on <f-button> in this context: "variant" attribute must be "tertiary" (attribute-misuse) at inline:2:27:
                  1 |
                > 2 |                 <f-button align-text> lorem ipsum </f-button>
                    |                           ^^^^^^^^^^
                  3 |
                Selector: f-button
            `);
        });
    });
});
