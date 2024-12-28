import { mount } from "@vue/test-utils";
import {
    cjsResolver,
    FileSystemConfigLoader,
    HtmlValidate,
} from "html-validate/node";
import "html-validate/jest";
import { ALIGNMENT } from "./constants";
import IFlexItem from "./IFlexItem.vue";

describe("prop align", () => {
    it("should have top alignment by default", () => {
        expect.assertions(1);
        const wrapper = mount(IFlexItem);
        const classList = Array.from(wrapper.element.classList);
        expect(classList).toEqual(["iflex__item", "iflex--align-top"]);
    });

    it.each`
        align       | expected
        ${"top"}    | ${"iflex--align-top"}
        ${"center"} | ${"iflex--align-center"}
        ${"bottom"} | ${"iflex--align-bottom"}
    `(
        "should have class $expected when alignment is $align",
        ({ expected, align }) => {
            expect.assertions(1);
            const wrapper = mount(IFlexItem, {
                props: { align },
            });
            const classList = Array.from(wrapper.element.classList);
            expect(classList).toEqual(["iflex__item", expected]);
        },
    );
});

describe("prop grow/shrink", () => {
    it("grow should set proper class when enabled", () => {
        expect.assertions(2);
        const wrapper = mount(IFlexItem, {
            props: { grow: true },
        });
        const classList = Array.from(wrapper.element.classList);
        expect(classList).toContain("iflex--grow");
        expect(classList).not.toContain("iflex--shrink");
    });

    it("shrink should set proper class when enabled", () => {
        expect.assertions(2);
        const wrapper = mount(IFlexItem, {
            props: { shrink: true },
        });
        const classList = Array.from(wrapper.element.classList);
        expect(classList).toContain("iflex--shrink");
        expect(classList).not.toContain("iflex--grow");
    });

    it("grow should take priority over shrink if both are enabled", () => {
        expect.assertions(2);
        const wrapper = mount(IFlexItem, {
            props: { grow: true, shrink: true },
        });
        const classList = Array.from(wrapper.element.classList);
        expect(classList).toContain("iflex--grow");
        expect(classList).not.toContain("iflex--shrink");
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

    it("should allow <i-flex> as parent", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <i-flex>
                <i-flex-item></i-flex-item>
            </i-flex>
        `;
        const report = await htmlvalidate.validateString(markup);
        expect(report).toBeValid();
    });

    it("should not allow arbitrary element as parent", async () => {
        expect.assertions(2);
        const markup = /* HTML */ `
            <div>
                <i-flex-item></i-flex-item>
            </div>
        `;
        const report = await htmlvalidate.validateString(markup);
        expect(report).toBeInvalid();
        expect(report).toMatchInlineCodeframe(`
            "error: <i-flex-item> element requires a "i-flex > i-flex-item" ancestor (element-required-ancestor) at inline:3:18:
              1 |
              2 |             <div>
            > 3 |                 <i-flex-item></i-flex-item>
                |                  ^^^^^^^^^^^
              4 |             </div>
              5 |
            Selector: div > i-flex-item"
        `);
    });

    describe("align attribute", () => {
        it.each(ALIGNMENT)("%s", async (align) => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <i-flex>
                    <i-flex-item align="${align}"></i-flex-item>
                </i-flex>
            `;
            const report = await htmlvalidate.validateString(markup);
            expect(report).toBeValid();
        });
        it("invalid", async () => {
            expect.assertions(2);
            const markup = /* HTML */ `
                <i-flex>
                    <i-flex-item align="invalid"></i-flex-item>
                </i-flex>
            `;
            const report = await htmlvalidate.validateString(markup);
            expect(report).toBeInvalid();
            expect(report).toMatchInlineCodeframe(`
                "error: Attribute "align" has invalid value "invalid" (attribute-allowed-values) at inline:3:41:
                  1 |
                  2 |                 <i-flex>
                > 3 |                     <i-flex-item align="invalid"></i-flex-item>
                    |                                         ^^^^^^^
                  4 |                 </i-flex>
                  5 |
                Selector: i-flex > i-flex-item"
            `);
        });
    });
});
