import { mount } from "@vue/test-utils";
import {
    cjsResolver,
    FileSystemConfigLoader,
    HtmlValidate,
} from "html-validate/node";
import "html-validate/jest";
import { GAP } from "./constants";
import IFlex from "./IFlex.vue";

describe("gap", () => {
    it("should have no gap class when gap is unspecified", () => {
        expect.assertions(1);
        const wrapper = mount(IFlex);
        const classList = Array.from(wrapper.element.classList);
        expect(classList).toEqual(["iflex"]);
    });

    it.each([GAP[0], GAP[3], GAP[7]])(
        "should have class iflex--gap-%s",
        (gap) => {
            expect.assertions(1);
            const expectedClass = `iflex--gap-${gap}`;
            const wrapper = mount(IFlex, {
                props: { gap },
            });
            const classList = Array.from(wrapper.element.classList);
            expect(classList).toEqual(["iflex", expectedClass]);
        },
    );
});

describe("collapse", () => {
    it("should have no collapse class when collapse is unspecified", () => {
        expect.assertions(1);
        const wrapper = mount(IFlex);
        const classList = Array.from(wrapper.element.classList);
        expect(classList).toEqual(["iflex"]);
    });

    it("should have collapse class when collapse is specified", () => {
        expect.assertions(1);
        const wrapper = mount(IFlex, {
            props: {
                collapse: true,
            },
        });
        const classList = Array.from(wrapper.element.classList);
        expect(classList).toEqual(["iflex", "iflex--collapse"]);
    });
});

describe("float", () => {
    it("should have no float class when float is unspecified", () => {
        expect.assertions(1);
        const wrapper = mount(IFlex);
        const classList = Array.from(wrapper.element.classList);
        expect(classList).toEqual(["iflex"]);
    });

    it("should have no float class when float left is specified", () => {
        expect.assertions(1);
        const wrapper = mount(IFlex, {
            props: {
                float: "left",
            },
        });
        const classList = Array.from(wrapper.element.classList);
        expect(classList).toEqual(["iflex", "iflex--float-left"]);
    });

    it("should have float center class when float center is specified", () => {
        expect.assertions(1);
        const wrapper = mount(IFlex, {
            props: {
                float: "center",
            },
        });
        const classList = Array.from(wrapper.element.classList);
        expect(classList).toEqual(["iflex", "iflex--float-center"]);
    });

    it("should have float right class when float right is specified", () => {
        expect.assertions(1);
        const wrapper = mount(IFlex, {
            props: {
                float: "right",
            },
        });
        const classList = Array.from(wrapper.element.classList);
        expect(classList).toEqual(["iflex", "iflex--float-right"]);
    });
});

it("should have no collapse class when collapse is unspecified", () => {
    expect.assertions(1);
    const wrapper = mount(IFlex);
    const classList = Array.from(wrapper.element.classList);
    expect(classList).toEqual(["iflex"]);
});

it("should have collapse class when collapse is specified", () => {
    expect.assertions(1);
    const wrapper = mount(IFlex, {
        props: {
            collapse: true,
        },
    });
    const classList = Array.from(wrapper.element.classList);
    expect(classList).toEqual(["iflex", "iflex--collapse"]);
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

    it("should allow <i-flex-item> as children", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <i-flex>
                <i-flex-item></i-flex-item>
            </i-flex>
        `;
        const report = await htmlvalidate.validateString(markup);
        expect(report).toBeValid();
    });

    it("should not allow arbitrary content", async () => {
        expect.assertions(2);
        const markup = /* HTML */ `
            <i-flex>
                <div></div>
                <span></span>
            </i-flex>
        `;
        const report = await htmlvalidate.validateString(markup);
        expect(report).toBeInvalid();
        expect(report).toHaveErrors([
            {
                ruleId: "element-permitted-content",
                message:
                    "<div> element is not permitted as content under <i-flex>",
            },
            {
                ruleId: "element-permitted-content",
                message:
                    "<span> element is not permitted as content under <i-flex>",
            },
        ]);
    });

    describe("gap attribute", () => {
        it.each(GAP)("%s", async (gap) => {
            expect.assertions(1);
            const markup = /* HTML */ ` <i-flex gap="${gap}"></i-flex> `;
            const report = await htmlvalidate.validateString(markup);
            expect(report).toBeValid();
        });

        it("invalid", async () => {
            expect.assertions(1);
            const markup = /* HTML */ ` <i-flex gap="invalid"></i-flex> `;
            const report = await htmlvalidate.validateString(markup);
            expect(report).toMatchInlineCodeframe(`
                "error: Attribute "gap" has invalid value "invalid" (attribute-allowed-values) at inline:1:15:
                > 1 |  <i-flex gap="invalid"></i-flex>
                    |               ^^^^^^^
                Selector: i-flex"
            `);
        });
    });
});
