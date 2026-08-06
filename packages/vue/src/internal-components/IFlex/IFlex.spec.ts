import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import "html-validate/vitest";
import IFlex from "./IFlex.vue";
import { GAP } from "./constants";

describe("gap", () => {
    it("should have no gap class when gap is unspecified", () => {
        expect.assertions(1);
        const wrapper = mount(IFlex);
        /* eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- technical debt */
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
            /* eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- technical debt */
            const classList = Array.from(wrapper.element.classList);
            expect(classList).toEqual(["iflex", expectedClass]);
        },
    );
});

describe("collapse", () => {
    it("should have no collapse class when collapse is unspecified", () => {
        expect.assertions(1);
        const wrapper = mount(IFlex);
        /* eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- technical debt */
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
        /* eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- technical debt */
        const classList = Array.from(wrapper.element.classList);
        expect(classList).toEqual(["iflex", "iflex--collapse"]);
    });
});

describe("float", () => {
    it("should have no float class when float is unspecified", () => {
        expect.assertions(1);
        const wrapper = mount(IFlex);
        /* eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- technical debt */
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
        /* eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- technical debt */
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
        /* eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- technical debt */
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
        /* eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- technical debt */
        const classList = Array.from(wrapper.element.classList);
        expect(classList).toEqual(["iflex", "iflex--float-right"]);
    });
});

it("should have no collapse class when collapse is unspecified", () => {
    expect.assertions(1);
    const wrapper = mount(IFlex);
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- technical debt */
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
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- technical debt */
    const classList = Array.from(wrapper.element.classList);
    expect(classList).toEqual(["iflex", "iflex--collapse"]);
});

describe("html-validate", () => {
    it("should allow <i-flex-item> as children", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <i-flex>
                <i-flex-item></i-flex-item>
            </i-flex>
        `;
        await expect(markup).toBeValid();
    });

    it("should not allow arbitrary content", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <i-flex>
                <div></div>
                <span></span>
            </i-flex>
        `;
        await expect(markup).toMatchInlineCodeframe(`
          "error: <div> element is not permitted as content under <i-flex> (element-permitted-content)
            1 |
            2 |             <i-flex>
          > 3 |                 <div></div>
              |                  ^^^
            4 |                 <span></span>
            5 |             </i-flex>
            6 |
          Selector: i-flex > div
          error: <span> element is not permitted as content under <i-flex> (element-permitted-content)
            2 |             <i-flex>
            3 |                 <div></div>
          > 4 |                 <span></span>
              |                  ^^^^
            5 |             </i-flex>
            6 |
          Selector: i-flex > span"
        `);
    });

    describe("gap attribute", () => {
        it.each(GAP)("%s", async (gap) => {
            expect.assertions(1);
            const markup = /* HTML */ ` <i-flex gap="${gap}"></i-flex> `;
            await expect(markup).toBeValid();
        });

        it("invalid", async () => {
            expect.assertions(1);
            const markup = /* HTML */ ` <i-flex gap="invalid"></i-flex> `;
            await expect(markup).toMatchInlineCodeframe(`
                "error: Attribute "gap" has invalid value "invalid" (attribute-allowed-values)
                > 1 |  <i-flex gap="invalid"></i-flex>
                    |               ^^^^^^^
                Selector: i-flex"
            `);
        });
    });
});
