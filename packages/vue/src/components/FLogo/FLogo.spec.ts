import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import "html-validate/vitest";
import FLogo from "./FLogo.vue";

describe("size prop", () => {
    it("`small` size should set `small` class modifier", () => {
        expect.assertions(1);
        const wrapper = mount(FLogo, {
            props: {
                size: "small",
            },
            slots: {
                default: "foo",
            },
        });
        expect(wrapper.classes()).toContain(`logo--small`);
    });

    it("`large` size should set `large` class modifier", () => {
        expect.assertions(1);
        const wrapper = mount(FLogo, {
            props: {
                size: "large",
            },
            slots: {
                default: "foo",
            },
        });
        expect(wrapper.classes()).toContain(`logo--large`);
    });

    it("`responsive` size should set `responsive` class modifier", () => {
        expect.assertions(1);
        const wrapper = mount(FLogo, {
            props: {
                size: "responsive",
            },
            slots: {
                default: "foo",
            },
        });
        expect(wrapper.classes()).toContain(`logo--responsive`);
    });
});

describe("html-validate", () => {
    it("should allow setting correct size values", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-logo size="small">foo</f-logo>
            <f-logo size="large">foo</f-logo>
            <f-logo size="responsive">foo</f-logo>
        `;
        await expect(markup).toBeValid();
    });

    it("should report error when size value is invalid", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `<f-logo size="huge">foo</f-logo>`;
        await expect(markup).toMatchInlineCodeframe(`
            "error: Attribute "size" has invalid value "huge" (attribute-allowed-values)
            > 1 | <f-logo size="huge">foo</f-logo>
                |               ^^^^
            Selector: f-logo"
        `);
    });

    it("should require text content", async () => {
        expect.assertions(2);
        const validMarkup = /* HTML */ ` <f-logo>foo</f-logo> `;
        const invalidMarkup = /* HTML */ ` <f-logo></f-logo> `;
        await expect(validMarkup).toBeValid();
        await expect(invalidMarkup).toMatchInlineCodeframe(`
          "error: <f-logo> must have text content (text-content)
          > 1 |  <f-logo></f-logo>
              |   ^^^^^^
          Selector: f-logo"
        `);
    });
});
