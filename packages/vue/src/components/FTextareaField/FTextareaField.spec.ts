import "html-validate/jest";
import { VueWrapper, mount } from "@vue/test-utils";
import {
    type ValidityEvent,
    type ValidatableHTMLElement,
    type PendingValidityEvent,
} from "@fkui/logic";
import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import flushPromises from "flush-promises";
import FTextareaField from "./FTextareaField.vue";

function createWrapper({ props = {}, slots = {}, attrs = {} } = {}): VueWrapper<
    InstanceType<typeof FTextareaField>
> {
    return mount(FTextareaField, {
        attrs: { ...attrs, id: "textarea-field" },
        props: { ...props },
        slots: { default: "Label", ...slots },
        global: {
            stubs: ["f-icon"],
        },
        attachTo: createPlaceholderInDocument(),
    });
}

describe("snapshots", () => {
    it("should match snapshot with label and textarea", () => {
        const wrapper = createWrapper();

        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with label, error message and textarea", () => {
        const wrapper = createWrapper({
            slots: { "error-message": "ERRROR_MESSAGE" },
        });

        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with label, tooltip, description, error message and textarea", () => {
        const wrapper = createWrapper({
            slots: {
                description: "DESCRIPTION",
                tooltip: "TOOLTIP",
                "error-message": "ERROR_MESSAGE",
            },
        });

        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with resize vertical", () => {
        const wrapper = createWrapper({
            props: {
                resizable: true,
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
            const wrapper = createWrapper({
                attrs: { id: "elementId" },
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
            wrapper.vm.$forceUpdate();

            expect(wrapper.element).toMatchSnapshot();
        },
    );
});

describe("attributes", () => {
    it("should pass attributes", () => {
        const wrapper = createWrapper({
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

describe("events", () => {
    it("should support v-model by emitting input event with value", () => {
        const wrapper = createWrapper({
            props: { modelValue: "Bana" },
        });
        const textareaWrapper = wrapper.get("textarea");
        const htmlTextAreaElement =
            textareaWrapper.element as HTMLTextAreaElement;

        expect(htmlTextAreaElement.value).toBe("Bana");
        textareaWrapper.setValue("Banana");
        expect(htmlTextAreaElement.value).toBe("Banana");
        expect(wrapper.emitted("input")![0][0]).toMatchInlineSnapshot(
            `"Banana"`,
        );
    });

    it("should pass listeners", async () => {
        const focus = jest.fn();
        const blur = jest.fn();

        const wrapper = createWrapper({
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
        const wrapper = createWrapper({
            attrs: { id: "elementId" },
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
        wrapper.vm.$forceUpdate();

        expect(wrapper.vm.$data.validityMode).toBe("ERROR");

        htmlTextarea.dispatchEvent(
            new CustomEvent<PendingValidityEvent>("pending-validity"),
        );
        await flushPromises();
        wrapper.vm.$forceUpdate();

        expect(wrapper.vm.$data.validityMode).toBe("INITIAL");
    });
});

it("should warn the user that the maximum string length limit is near", async () => {
    const wrapper = createWrapper({
        props: {
            maxlength: 10,
            softLimit: 5,
            charactersLeftWarning: "Kvar: %charactersLeft%",
        },
    });
    await wrapper.setProps({
        modelValue: "12345",
    });
    expect(wrapper.get('[aria-live="polite"]')).toMatchInlineSnapshot(`
        <label class="label" for="textarea-field" aria-live="polite"><span class="label__description">Kvar: 5</span>
          <!--v-if-->
        </label>
    `);
});

describe("element should be possible to disable with prop disabled", () => {
    it("element should be disabled with prop", async () => {
        const wrapper = mount(FTextareaField, {
            propsData: { disabled: true },
        });
        const element = wrapper.get("textarea").element as HTMLTextAreaElement;
        expect(element.disabled).toBeTruthy();
    });

    it("element should be enabled without prop", async () => {
        const wrapper = mount(FTextareaField, {
            propsData: { disabled: false },
        });
        const element = wrapper.get("textarea").element as HTMLTextAreaElement;
        expect(element.disabled).toBeFalsy();
    });
});

describe("html-validate", () => {
    it.each`
        html
        ${'<f-textarea-field maxlength="10" soft-limit="3">Label</f-textarea-field>'}
    `("$html should be valid", ({ html }) => {
        expect.assertions(1);
        expect(html).toHTMLValidate();
    });

    it.each`
        html
        ${"<f-textarea-field>Label<template #tooltip><div /></template></f-textarea-field>"}
        ${'<f-textarea-field maxlength="100 000" soft-limit="30 000">Label</f-textarea-field>'}
    `("$html should be invalid", ({ html }) => {
        expect.assertions(3);
        let catchedError;

        try {
            expect(html).toHTMLValidate();
        } catch (error) {
            catchedError = error;
        } finally {
            expect(catchedError).toBeDefined();
            expect(catchedError).toMatchSnapshot();
        }
    });
});
