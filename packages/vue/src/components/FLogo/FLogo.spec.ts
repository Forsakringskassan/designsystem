import { mount } from "@vue/test-utils";
import {
    cjsResolver,
    FileSystemConfigLoader,
    HtmlValidate,
} from "html-validate/node";
import "html-validate/jest";
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
    const loader = new FileSystemConfigLoader([cjsResolver()], {
        extends: [
            "html-validate:recommended",
            "html-validate-vue:recommended",
            "@fkui/vue:recommended",
        ],
        plugins: ["<rootDir>/htmlvalidate", "html-validate-vue"],
    });
    const htmlvalidate = new HtmlValidate(loader);

    it("should allow setting correct size values", () => {
        expect.assertions(3);
        expect(/* HTML */ `<f-logo size="small">foo</f-logo>`).toHTMLValidate();
        expect(/* HTML */ `<f-logo size="large">foo</f-logo>`).toHTMLValidate();
        expect(
            /* HTML */ `<f-logo size="responsive">foo</f-logo>`,
        ).toHTMLValidate();
    });

    it("should report error when size value is invalid", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `<f-logo size="huge">foo</f-logo>`;
        const report = await htmlvalidate.validateString(markup);
        expect(report).toMatchInlineCodeframe(`
            "error: Attribute "size" has invalid value "huge" (attribute-allowed-values) at inline:1:15:
            > 1 | <f-logo size="huge">foo</f-logo>
                |               ^^^^
            Selector: f-logo"
        `);
    });

    it("should require text content", async () => {
        expect.assertions(2);
        expect(/* HTML */ `<f-logo>foo</f-logo>`).toHTMLValidate();
        const markup = /* HTML */ `<f-logo></f-logo>`;
        const report = await htmlvalidate.validateString(markup);
        expect(report).toMatchInlineCodeframe(`
            "error: <f-logo> must have text content (text-content) at inline:1:2:
            > 1 | <f-logo></f-logo>
                |  ^^^^^^
            Selector: f-logo"
        `);
    });
});
