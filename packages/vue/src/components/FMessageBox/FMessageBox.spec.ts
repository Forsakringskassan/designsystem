import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import FMessageBox from "./FMessageBox.vue";
import "html-validate/vitest";

describe("FMessageBox", () => {
    it("should render sr-only span when provideScreenReaderContext is true", () => {
        expect.assertions(1);
        const wrapper = mount(FMessageBox, {
            props: { type: "info", provideScreenReaderContext: true },
        });

        expect(wrapper.find("span.sr-only").exists()).toBe(true);
    });

    it("should not render sr-only span when provideScreenReaderContext is false", () => {
        expect.assertions(1);
        const wrapper = mount(FMessageBox, {
            props: { type: "info", provideScreenReaderContext: false },
        });

        expect(wrapper.find("span.sr-only").exists()).toBe(false);
    });

    it.each`
        type         | expected
        ${"info"}    | ${"Informationsmeddelande"}
        ${"warning"} | ${"Varningsmeddelande"}
        ${"error"}   | ${"Felmeddelande"}
        ${"success"} | ${"Meddelande"}
    `(
        "should render correct screen reader text for type $type",
        ({ type, expected }) => {
            expect.assertions(1);
            const wrapper = mount(FMessageBox, {
                props: { type, provideScreenReaderContext: true },
            });

            expect(wrapper.find("span.sr-only").text()).toBe(expected);
        },
    );

    describe("slot bindings", () => {
        it("should provide headingSlotClass binding when layout is 'standard'", () => {
            expect.assertions(1);
            const wrapper = mount(FMessageBox, {
                props: { type: "info", layout: "standard" },
                slots: {
                    default: `
                        <template #default="{ headingSlotClass }">
                             <h3 :class="headingSlotClass">Rubrik</h3>
                        </template>
                    `,
                },
            });

            const header = wrapper.get("h3");
            expect(header.classes()).toContain("message-box__heading");
        });

        it("should not provide headingSlotClass binding when layout is 'short'", () => {
            expect.assertions(1);
            const wrapper = mount(FMessageBox, {
                props: { type: "info", layout: "short" },
                slots: {
                    default: `
                        <template #default="{ headingSlotClass }">
                            <h3 :class="headingSlotClass">Rubrik</h3>
                        </template>
                    `,
                },
            });
            const header = wrapper.get("h3");
            expect(header.classes()).not.toContain("message-box__heading");
        });
    });

    describe("icon rendering", () => {
        it("should render icon when layout is 'short'", () => {
            expect.assertions(1);
            const wrapper = mount(FMessageBox, {
                props: { type: "error", layout: "short" },
            });

            expect(wrapper.find(".message-box__icon").exists()).toBe(true);
        });

        it("should not render icon when layout is 'standard'", () => {
            expect.assertions(1);
            const wrapper = mount(FMessageBox, {
                props: { type: "error", layout: "standard" },
            });

            expect(wrapper.find(".message-box__icon").exists()).toBe(false);
        });

        it.each`
            type         | symbol        | sign
            ${"info"}    | ${"circle"}   | ${"i"}
            ${"warning"} | ${"circle"}   | ${"alert"}
            ${"error"}   | ${"triangle"} | ${"alert"}
            ${"success"} | ${"circle"}   | ${"success"}
        `(
            "should render correct icon symbols for type=$type with layout='short'",
            ({ type, symbol, sign }) => {
                expect.assertions(3);
                const wrapper = mount(FMessageBox, {
                    props: { type, layout: "short" },
                    global: {
                        stubs: ["FIcon"],
                    },
                });

                const icons = wrapper.findAllComponents("f-icon-stub");

                // Two icons are rendered: the symbol icon and the sign icon
                expect(icons).toHaveLength(2);
                expect(icons[0].attributes("name")).toBe(symbol);
                expect(icons[1].attributes("name")).toBe(sign);
            },
        );
    });
});

describe("html-validate", () => {
    it("should not report error when used correctly", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-message-box type="warning">
                <template v-slot="{ headingClass }">
                    <h2 :class="headingClass">Lorem ipsum</h2>
                    <p>dolor sit amet</p>
                </template>
            </f-message-box>
        `;
        await expect(markup).toBeValid();
    });

    it("should report error when obsolete heading slot is used", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-message-box type="warning">
                <template v-slot:heading></template>
            </f-message-box>
        `;
        await expect(markup).toMatchInlineCodeframe(`
          "error: <f-message-box> component has no slot "heading" (vue/available-slots)
            1 |
            2 |             <f-message-box type="warning">
          > 3 |                 <template v-slot:heading></template>
              |                           ^^^^^^^^^^^^^^
            4 |             </f-message-box>
            5 |
          Selector: f-message-box"
        `);
    });

    it("should report error when type is missing", async () => {
        expect.assertions(1);
        const markup = /* HTML */ ` <f-message-box></f-message-box> `;
        await expect(markup).toMatchInlineCodeframe(`
          "error: <f-message-box> is missing required "type" attribute (element-required-attributes)
          > 1 |  <f-message-box></f-message-box>
              |   ^^^^^^^^^^^^^
          Selector: f-message-box"
        `);
    });

    it("should report error when type is invalid", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-message-box type="foobar"></f-message-box>
        `;
        await expect(markup).toMatchInlineCodeframe(`
          "error: Attribute "type" has invalid value "foobar" (attribute-allowed-values)
            1 |
          > 2 |             <f-message-box type="foobar"></f-message-box>
              |                                  ^^^^^^
            3 |
          Selector: f-message-box"
        `);
    });
});
