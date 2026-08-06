import "html-validate/vitest";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { FIcon } from "../FIcon";
import FButton from "./FButton.vue";

expect.addSnapshotSerializer({
    test() {
        return true;
    },
    serialize: String,
});

describe("props", () => {
    describe("disabled", () => {
        it("should set aria-disabled on the button element when true", () => {
            expect.assertions(1);
            const wrapper = shallowMount(FButton, {
                props: {
                    disabled: true,
                    size: "medium",
                    variant: "primary",
                },
            });
            const button = wrapper.get("button");
            expect(button.attributes("aria-disabled")).toBe("true");
        });

        it("should not set aria-disabled on the button as default", () => {
            expect.assertions(1);
            const wrapper = shallowMount(FButton, {
                props: {
                    size: "medium",
                    variant: "primary",
                },
            });
            const button = wrapper.get("button");
            expect(button.attributes("aria-disabled")).toBe("false");
        });
    });

    it("type prop should set type attribute on button element", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FButton, {
            props: {
                type: "submit",
                size: "medium",
                variant: "primary",
            },
        });
        const button = wrapper.get("button");
        expect(button.attributes("type")).toBe("submit");
    });

    it("iconLibrary should be passed to FIcon", () => {
        expect.assertions(2);
        const wrapper = shallowMount(FButton, {
            props: {
                iconLeft: "foo",
                iconLibrary: "bar",
                size: "medium",
                variant: "primary",
            },
        });
        const icon = wrapper.getComponent(FIcon);
        expect(icon.attributes("name")).toBe("foo");
        expect(icon.attributes("library")).toBe("bar");
    });
});

describe("html-validate", () => {
    it("should allow basic button", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-button size="medium" variant="primary"> lorem ipsum </f-button>
        `;
        await expect(markup).toBeValid();
    });

    describe("type attribute", () => {
        it("should allow valid values", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-button type="submit" size="medium" variant="primary">
                    lorem ipsum
                </f-button>
                <f-button type="reset" size="medium" variant="primary">
                    lorem ipsum
                </f-button>
                <f-button type="button" size="medium" variant="primary">
                    lorem ipsum
                </f-button>
            `;
            await expect(markup).toBeValid();
        });

        it("should not allow invalid values", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-button type="invalid" size="medium" variant="primary">
                    lorem ipsum
                </f-button>
            `;
            await expect(markup).toMatchInlineCodeframe(`
              error: Attribute "type" has invalid value "invalid" (attribute-allowed-values)
                1 |
              > 2 |                 <f-button type="invalid" size="medium" variant="primary">
                  |                                 ^^^^^^^
                3 |                     lorem ipsum
                4 |                 </f-button>
                5 |
              Selector: f-button
            `);
        });

        it("should function as button by default", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <form>
                    <f-button size="medium" variant="primary">
                        lorem ipsum
                    </f-button>
                </form>
            `;
            await expect(markup).toMatchInlineCodeframe(`
              error: <form> element must have a submit button (wcag/h32)
                1 |
              > 2 |                 <form>
                  |                  ^^^^
                3 |                     <f-button size="medium" variant="primary">
                4 |                         lorem ipsum
                5 |                     </f-button>
              Selector: form
            `);
        });

        it("should function as submit button when type is submit", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <form>
                    <f-button type="submit" size="medium" variant="primary">
                        lorem ipsum
                    </f-button>
                </form>
            `;
            await expect(markup).toBeValid();
        });
    });

    describe("variant attribute", () => {
        it("should be required", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-button size="medium"> lorem ipsum </f-button>
            `;
            await expect(markup).toMatchInlineCodeframe(`
              error: <f-button> is missing required "variant" attribute (element-required-attributes)
                1 |
              > 2 |                 <f-button size="medium"> lorem ipsum </f-button>
                  |                  ^^^^^^^^
                3 |
              Selector: f-button
            `);
        });

        it("should allow valid values", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-button size="medium" variant="primary">
                    lorem ipsum
                </f-button>
                <f-button size="medium" variant="secondary">
                    lorem ipsum
                </f-button>
                <f-button size="medium" variant="tertiary">
                    lorem ipsum
                </f-button>
            `;
            await expect(markup).toBeValid();
        });

        it("should not allow invalid values", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-button size="medium" variant="invalid">
                    lorem ipsum
                </f-button>
            `;
            await expect(markup).toMatchInlineCodeframe(`
              error: Attribute "variant" has invalid value "invalid" (attribute-allowed-values)
                1 |
              > 2 |                 <f-button size="medium" variant="invalid">
                  |                                                  ^^^^^^^
                3 |                     lorem ipsum
                4 |                 </f-button>
                5 |
              Selector: f-button
            `);
        });
    });

    describe("size attribute", () => {
        it("should be required", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-button variant="primary"> lorem ipsum </f-button>
            `;
            await expect(markup).toMatchInlineCodeframe(`
              error: <f-button> is missing required "size" attribute (element-required-attributes)
                1 |
              > 2 |                 <f-button variant="primary"> lorem ipsum </f-button>
                  |                  ^^^^^^^^
                3 |
              Selector: f-button
            `);
        });

        it("should allow valid values", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-button size="small" variant="primary">
                    lorem ipsum
                </f-button>
                <f-button size="medium" variant="primary">
                    lorem ipsum
                </f-button>
                <f-button size="large" variant="primary">
                    lorem ipsum
                </f-button>
            `;
            await expect(markup).toBeValid();
        });

        it("should not allow invalid values", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-button size="invalid" variant="primary">
                    lorem ipsum
                </f-button>
            `;
            await expect(markup).toMatchInlineCodeframe(`
              error: Attribute "size" has invalid value "invalid" (attribute-allowed-values)
                1 |
              > 2 |                 <f-button size="invalid" variant="primary">
                  |                                 ^^^^^^^
                3 |                     lorem ipsum
                4 |                 </f-button>
                5 |
              Selector: f-button
            `);
        });
    });

    describe("icon attributes", () => {
        it("should allow either icon-left or icon-right", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-button icon-left="icon" size="medium" variant="primary">
                    lorem ipsum
                </f-button>
                <f-button icon-right="icon" size="medium" variant="primary">
                    lorem ipsum
                </f-button>
            `;
            await expect(markup).toBeValid();
        });

        it("should not allow both icon-left and icon-right", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-button
                    icon-left="icon"
                    icon-right="icon"
                    size="medium"
                    variant="primary"
                >
                    lorem ipsum
                </f-button>
            `;
            await expect(markup).toMatchInlineCodeframe(`
              error: "icon-left" attribute cannot be used on <f-button> in this context: cannot be used at the same time as "icon-right" (attribute-misuse)
                1 |
                2 |                 <f-button
              > 3 |                     icon-left="icon"
                  |                     ^^^^^^^^^
                4 |                     icon-right="icon"
                5 |                     size="medium"
                6 |                     variant="primary"
              Selector: f-button
              error: "icon-right" attribute cannot be used on <f-button> in this context: cannot be used at the same time as "icon-left" (attribute-misuse)
                2 |                 <f-button
                3 |                     icon-left="icon"
              > 4 |                     icon-right="icon"
                  |                     ^^^^^^^^^^
                5 |                     size="medium"
                6 |                     variant="primary"
                7 |                 >
              Selector: f-button
            `);
        });
    });

    describe("other attributes", () => {
        it("should allow disabled and mobile-full-width", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-button disabled size="medium" variant="primary">
                    lorem ipsum
                </f-button>
                <f-button mobile-full-width size="medium" variant="primary">
                    lorem ipsum
                </f-button>
            `;
            await expect(markup).toBeValid();
        });
    });

    describe("tertiary-specific attributes", () => {
        it("should allow tertiary-style and align-text when variant is tertiary", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-button
                    size="medium"
                    variant="tertiary"
                    tertiary-style="muted"
                >
                    lorem ipsum
                </f-button>
                <f-button size="medium" variant="tertiary" align-text>
                    lorem ipsum
                </f-button>
            `;
            await expect(markup).toBeValid();
        });

        it("should not allow tertiary-style without variant tertiary", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-button
                    size="medium"
                    variant="primary"
                    tertiary-style="muted"
                >
                    lorem ipsum
                </f-button>
            `;
            await expect(markup).toMatchInlineCodeframe(`
              error: "tertiary-style" attribute cannot be used on <f-button> in this context: "variant" attribute must be "tertiary" (attribute-misuse)
                3 |                     size="medium"
                4 |                     variant="primary"
              > 5 |                     tertiary-style="muted"
                  |                     ^^^^^^^^^^^^^^
                6 |                 >
                7 |                     lorem ipsum
                8 |                 </f-button>
              Selector: f-button
            `);
        });

        it("should not allow invalid tertiary-style value", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-button
                    size="medium"
                    tertiary-style="invalid"
                    variant="tertiary"
                >
                    lorem ipsum
                </f-button>
            `;
            await expect(markup).toMatchInlineCodeframe(`
              error: Attribute "tertiary-style" has invalid value "invalid" (attribute-allowed-values)
                2 |                 <f-button
                3 |                     size="medium"
              > 4 |                     tertiary-style="invalid"
                  |                                     ^^^^^^^
                5 |                     variant="tertiary"
                6 |                 >
                7 |                     lorem ipsum
              Selector: f-button
            `);
        });

        it("should not allow align-text without variant tertiary", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-button size="medium" variant="primary" align-text>
                    lorem ipsum
                </f-button>
            `;
            await expect(markup).toMatchInlineCodeframe(`
              error: "align-text" attribute cannot be used on <f-button> in this context: "variant" attribute must be "tertiary" (attribute-misuse)
                1 |
              > 2 |                 <f-button size="medium" variant="primary" align-text>
                  |                                                           ^^^^^^^^^^
                3 |                     lorem ipsum
                4 |                 </f-button>
                5 |
              Selector: f-button
            `);
        });
    });
});
