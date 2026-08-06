import "html-validate/vitest";
import {
    type PendingValidityEvent,
    type ValidatableHTMLElement,
    type ValidityEvent,
} from "@fkui/logic";
import { shallowMount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import { describe, expect, it, vi } from "vitest";
import FTextareaField from "./FTextareaField.vue";

describe("snapshots", () => {
    it("should match snapshot with label and textarea", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FTextareaField, {
            props: { id: "textarea-field" },
            slots: {
                default: "Label",
            },
            global: {
                stubs: { FLabel: false },
            },
        });
        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with label, error message and textarea", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FTextareaField, {
            props: { id: "textarea-field" },
            slots: {
                default: "Label",
                "error-message": "ERRROR_MESSAGE",
            },
            global: {
                stubs: { FLabel: false },
            },
        });
        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with label, tooltip, description, error message and textarea", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FTextareaField, {
            props: { id: "textarea-field" },
            slots: {
                default: "Label",
                description: "DESCRIPTION",
                tooltip: "TOOLTIP",
                "error-message": "ERROR_MESSAGE",
            },
            global: {
                stubs: { FLabel: false },
            },
        });
        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with resize vertical", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FTextareaField, {
            props: {
                id: "textarea-field",
                resizable: true,
            },
            slots: {
                default: "Label",
            },
            global: {
                stubs: { FLabel: false },
            },
        });
        expect(wrapper.element).toMatchSnapshot();
    });

    it.each`
        validityMode | isValid
        ${"VALID"}   | ${true}
        ${"ERROR"}   | ${false}
        ${"INITIAL"} | ${true}
        ${"INITIAL"} | ${false}
    `(
        "should match snapshot when validityMode is $validityMode and isValid is $isValid",
        async ({ validityMode, isValid }) => {
            expect.assertions(1);
            const wrapper = shallowMount(FTextareaField, {
                props: { id: "textarea-field" },
                slots: {
                    default: "Label",
                },
                global: {
                    stubs: { FLabel: false },
                },
            });

            const textareaWrapper = wrapper.get("textarea");
            const htmlTextareaElement =
                textareaWrapper.element as HTMLTextAreaElement;

            htmlTextareaElement.dispatchEvent(
                new CustomEvent<ValidityEvent>("validity", {
                    detail: {
                        target: wrapper.element as ValidatableHTMLElement,
                        elementId: "elementId",
                        isValid,
                        validityMode,
                        validationMessage: "Something went wrong.",
                        nativeEvent: "input",
                    },
                }),
            );
            await flushPromises();
            /* eslint-disable-next-line @typescript-eslint/no-unsafe-call -- technical debt */
            wrapper.vm.$forceUpdate();

            expect(wrapper.element).toMatchSnapshot();
        },
    );
});

describe("attributes", () => {
    it("should pass attributes", () => {
        expect.assertions(4);
        const wrapper = shallowMount(FTextareaField, {
            attrs: {
                required: true,
                rows: 8,
                maxlength: 20,
            },
            props: {
                disabled: true,
            },
        });
        const textareaWrapper = wrapper.get("textarea");

        expect(textareaWrapper.attributes("disabled")).toBeDefined();
        expect(textareaWrapper.attributes("required")).toBeDefined();
        expect(textareaWrapper.attributes("rows")).toBe("8");
        expect(textareaWrapper.attributes("maxlength")).toBe("20");
    });
});

describe("autoResize", () => {
    it("should use four rows by default", () => {
        expect.assertions(2);
        const wrapper = shallowMount(FTextareaField, {
            props: {
                autoResize: true,
            },
        });

        const element = wrapper.get("textarea").element as HTMLTextAreaElement;

        expect(wrapper.get("textarea").attributes("rows")).toBe("4");
        expect(
            element.style.getPropertyValue("--i-textarea-field-min-height"),
        ).toBe("4lh");
    });

    it("should let rows override the autoResize default", () => {
        expect.assertions(2);
        const wrapper = shallowMount(FTextareaField, {
            attrs: {
                rows: 3,
            },
            props: {
                autoResize: true,
            },
        });

        const element = wrapper.get("textarea").element as HTMLTextAreaElement;

        expect(wrapper.get("textarea").attributes("rows")).toBe("3");
        expect(
            element.style.getPropertyValue("--i-textarea-field-min-height"),
        ).toBe("3lh");
    });

    it("should use auto resize class when autoResize is used with resizable", () => {
        expect.assertions(3);
        const wrapper = shallowMount(FTextareaField, {
            props: {
                autoResize: true,
                resizable: true,
            },
        });

        const textarea = wrapper.get("textarea");
        expect(textarea.classes()).toContain("textarea-field__resize--auto");
        expect(textarea.classes()).not.toContain(
            "textarea-field__resize--none",
        );
        expect(textarea.classes()).not.toContain(
            "textarea-field__resize--vertical",
        );
    });

    it("should set max rows style when maxRows is used", () => {
        expect.assertions(2);
        const wrapper = shallowMount(FTextareaField, {
            attrs: {
                rows: 1,
            },
            props: {
                autoResize: true,
                maxRows: 3,
            },
        });

        const textarea = wrapper.get("textarea");
        const element = textarea.element as HTMLTextAreaElement;

        expect(textarea.classes()).toContain(
            "textarea-field__resize--max-rows",
        );
        expect(
            element.style.getPropertyValue("--i-textarea-field-max-height"),
        ).toBe("3lh");
    });

    it("should use rows as max rows when maxRows is lower", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FTextareaField, {
            attrs: {
                rows: 6,
            },
            props: {
                autoResize: true,
                maxRows: 3,
            },
        });

        const element = wrapper.get("textarea").element as HTMLTextAreaElement;

        expect(
            element.style.getPropertyValue("--i-textarea-field-max-height"),
        ).toBe("6lh");
    });

    it("should use default rows as max rows when maxRows is lower than default rows and rows are missing", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FTextareaField, {
            props: {
                autoResize: true,
                maxRows: 2,
            },
        });

        const element = wrapper.get("textarea").element as HTMLTextAreaElement;

        expect(
            element.style.getPropertyValue("--i-textarea-field-max-height"),
        ).toBe("4lh");
    });
});

describe("events", () => {
    it("should support v-model by emitting input event with value", async () => {
        expect.assertions(3);
        const wrapper = shallowMount(FTextareaField, {
            props: { modelValue: "Bana" },
        });
        const textareaWrapper = wrapper.get("textarea");
        const htmlTextAreaElement =
            textareaWrapper.element as HTMLTextAreaElement;

        expect(htmlTextAreaElement.value).toBe("Bana");
        await textareaWrapper.setValue("Banana");
        expect(htmlTextAreaElement.value).toBe("Banana");
        expect(wrapper.emitted("input")![0][0]).toMatchInlineSnapshot(
            `"Banana"`,
        );
    });

    it("should pass listeners", async () => {
        expect.assertions(2);
        const focus = vi.fn();
        const blur = vi.fn();

        const wrapper = shallowMount(FTextareaField, {
            attrs: {
                onFocus: focus,
                onBlur: blur,
            },
        });
        const textarea = wrapper.get("textarea");
        await textarea.trigger("focus");
        await textarea.trigger("blur");

        expect(focus).toHaveBeenCalled();
        expect(blur).toHaveBeenCalled();
    });

    it('should have ValidityMode INITIAL when "pending-validity" event is triggered', async () => {
        expect.assertions(2);
        const wrapper = shallowMount(FTextareaField, {
            props: { id: "elementId" },
        });

        const textarea = wrapper.get("textarea");
        const htmlTextarea = textarea.element as HTMLTextAreaElement;

        htmlTextarea.dispatchEvent(
            new CustomEvent<ValidityEvent>("validity", {
                detail: {
                    target: wrapper.element as ValidatableHTMLElement,
                    elementId: "elementId",
                    isValid: true,
                    validityMode: "ERROR",
                    validationMessage: "Something went wrong.",
                    nativeEvent: "input",
                },
            }),
        );
        await flushPromises();
        /* eslint-disable-next-line @typescript-eslint/no-unsafe-call -- technical debt */
        wrapper.vm.$forceUpdate();

        expect(wrapper.vm.$data.validityMode).toBe("ERROR");

        htmlTextarea.dispatchEvent(
            new CustomEvent<PendingValidityEvent>("pending-validity"),
        );
        await flushPromises();
        /* eslint-disable-next-line @typescript-eslint/no-unsafe-call -- technical debt */
        wrapper.vm.$forceUpdate();

        expect(wrapper.vm.$data.validityMode).toBe("INITIAL");
    });
});

it("should warn the user that the maximum string length limit is near", async () => {
    expect.assertions(1);
    const wrapper = shallowMount(FTextareaField, {
        props: {
            id: "textarea-field",
            maxlength: 10,
            softLimit: 5,
            charactersLeftWarning: "Kvar: %charactersLeft%",
        },
        global: {
            stubs: { FLabel: false },
        },
    });
    await wrapper.setProps({
        modelValue: "12345",
    });
    expect(wrapper.get('[aria-live="polite"]').html()).toMatchInlineSnapshot(`
      "<label class="label" for="textarea-field" aria-live="polite"> <span class="label__description">Kvar: 5</span>
        <!--v-if-->
      </label>"
    `);
});

describe("element should be possible to disable with prop disabled", () => {
    it("element should be disabled with prop", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FTextareaField, {
            propsData: { disabled: true },
        });
        const element = wrapper.get("textarea").element as HTMLTextAreaElement;
        expect(element.disabled).toBeTruthy();
    });

    it("element should be enabled without prop", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FTextareaField, {
            propsData: { disabled: false },
        });
        const element = wrapper.get("textarea").element as HTMLTextAreaElement;
        expect(element.disabled).toBeFalsy();
    });
});

describe("html-validate", () => {
    it("should be valid", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-textarea-field maxlength="10" soft-limit="3">
                Label
            </f-textarea-field>
            <f-textarea-field auto-resize max-rows="6" resizable>
                Label
            </f-textarea-field>
        `;
        await expect(markup).toBeValid();
    });

    it("should be invalid", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-textarea-field>
                Label
                <template #tooltip>
                    <div></div>
                </template>
            </f-textarea-field>
            <f-textarea-field maxlength="100 000" soft-limit="30 000">
                Label
            </f-textarea-field>
        `;
        await expect(markup).toMatchInlineCodeframe(`
          "error: <div> element is not permitted as content under slot "tooltip" (<f-textarea-field>) (element-permitted-content)
            3 |                 Label
            4 |                 <template #tooltip>
          > 5 |                     <div></div>
              |                      ^^^
            6 |                 </template>
            7 |             </f-textarea-field>
            8 |             <f-textarea-field maxlength="100 000" soft-limit="30 000">
          Selector: f-textarea-field:nth-child(1) > template > div
          error: Attribute "maxlength" has invalid value "100 000" (attribute-allowed-values)
             6 |                 </template>
             7 |             </f-textarea-field>
          >  8 |             <f-textarea-field maxlength="100 000" soft-limit="30 000">
               |                                          ^^^^^^^
             9 |                 Label
            10 |             </f-textarea-field>
            11 |
          Selector: f-textarea-field:nth-child(2)
          error: Attribute "soft-limit" has invalid value "30 000" (attribute-allowed-values)
             6 |                 </template>
             7 |             </f-textarea-field>
          >  8 |             <f-textarea-field maxlength="100 000" soft-limit="30 000">
               |                                                               ^^^^^^
             9 |                 Label
            10 |             </f-textarea-field>
            11 |
          Selector: f-textarea-field:nth-child(2)"
        `);
    });
});
