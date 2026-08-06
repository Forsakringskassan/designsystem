import "html-validate/vitest";
import { defineComponent } from "vue";
import {
    type PendingValidityEvent,
    type ValidatableHTMLElement,
    type ValidatorConfigs,
    type ValidityEvent,
    ValidationService,
} from "@fkui/logic";
import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import { type VueWrapper, mount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import { describe, expect, it, vi } from "vitest";
import { ValidationPlugin } from "../../../../plugins";
import FEmailTextField from "./FEmailTextField.vue";

function createWrapper({
    props = {},
    slots = {},
    attrs = {},
    options = {},
} = {}): VueWrapper<InstanceType<typeof FEmailTextField>> {
    return mount(FEmailTextField, {
        attrs: { ...attrs },
        props: { maxLength: 80, ...props },
        slots: { ...slots },
        attachTo: createPlaceholderInDocument(),
        ...options,
        global: {
            stubs: ["f-icon"],
            plugins: [ValidationPlugin],
        },
    });
}

describe("snapshots", () => {
    it("should match snapshot with label and input", () => {
        expect.assertions(1);
        const wrapper = createWrapper();

        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with label, error message and input", () => {
        expect.assertions(1);
        const wrapper = createWrapper({
            slots: { "error-message": "ERROR_MESSAGE" },
        });

        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with label, tooltip, description, error message and input", () => {
        expect.assertions(1);
        const wrapper = createWrapper({
            slots: {
                description: "DESCRIPTION",
                tooltip: "TOOLTIP",
                "error-message": "ERROR_MESSAGE",
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
            const wrapper = createWrapper({
                attrs: { id: "elementId" },
            });

            const input = wrapper.get("input");
            const htmlInput = input.element;

            htmlInput.dispatchEvent(
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

describe("slots", () => {
    it("should support custom label in default and extended field", () => {
        expect.assertions(2);
        const wrapper = createWrapper({
            props: {
                extendedValidation: true,
            },
            slots: {
                default: "Kontaktpersonens mejladress",
                "extended-label": "Upprepa kontaktpersonens mejladress",
            },
        });

        const labels = wrapper.findAll("label");
        const firstLabel = labels[0];
        const secondLabel = labels[1];

        expect(firstLabel.text()).toContain("Kontaktpersonens mejladress");
        expect(secondLabel.text()).toContain(
            "Upprepa kontaktpersonens mejladress",
        );
    });
});

describe("attributes", () => {
    it("should pass attributes", () => {
        expect.assertions(2);
        const wrapper = createWrapper({
            attrs: {
                disabled: true,
                required: true,
            },
        });
        const input = wrapper.get("input");

        expect(input.attributes("disabled")).toBeDefined();
        expect(input.attributes("required")).toBeDefined();
    });

    it("should set type to email as default", () => {
        expect.assertions(1);
        const wrapper = createWrapper();
        const input = wrapper.get("input");
        expect(input.attributes("type")).toBe("email");
    });
});

describe("events", () => {
    it("should support v-model", async () => {
        expect.assertions(3);
        const wrapper = createWrapper({
            props: { modelValue: "foo@example.net" },
        });
        const input = wrapper.get("input");
        const htmlInput = input.element;
        expect(htmlInput.value).toBe("foo@example.net");

        await input.setValue("bar@example.net");
        expect(htmlInput.value).toBe("bar@example.net");

        await input.trigger("change");
        expect(
            wrapper.emitted("update:modelValue")![0][0],
        ).toMatchInlineSnapshot(`"bar@example.net"`);
    });

    it("should pass listeners", async () => {
        expect.assertions(2);
        const focus = vi.fn();
        const blur = vi.fn();

        const wrapper = createWrapper({
            attrs: {
                onFocus: focus,
                onBlur: blur,
            },
        });
        const input = wrapper.get("input");
        await input.trigger("focus");
        /* eslint-disable-next-line @typescript-eslint/no-unsafe-call -- technical debt */
        await wrapper.vm.$nextTick();
        await input.trigger("blur");
        /* eslint-disable-next-line @typescript-eslint/no-unsafe-call -- technical debt */
        await wrapper.vm.$nextTick();

        expect(focus).toHaveBeenCalled();
        expect(blur).toHaveBeenCalled();
    });

    it('should have ValidityMode INITIAL when "pending-validity" event is triggered', async () => {
        expect.assertions(2);
        const wrapper = createWrapper({
            attrs: { id: "elementId" },
        });

        const input = wrapper.get("input");
        const htmlInput = input.element;

        htmlInput.dispatchEvent(
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

        htmlInput.dispatchEvent(
            new CustomEvent<PendingValidityEvent>("pending-validity"),
        );
        await flushPromises();
        /* eslint-disable-next-line @typescript-eslint/no-unsafe-call -- technical debt */
        wrapper.vm.$forceUpdate();

        expect(wrapper.vm.$data.validityMode).toBe("INITIAL");
    });
});

describe("validation", () => {
    it("should display correct error message when multiple validators", async () => {
        expect.assertions(2);
        const wrapper = createWrapper({ options: { sync: false } });
        await flushPromises();
        /* eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- technical debt */
        ValidationService.setSubmitted(wrapper.element);

        const input = wrapper.get("input");
        const validatorConfigs: ValidatorConfigs = { required: {} };
        ValidationService.addValidatorsToElement(
            input.element,
            validatorConfigs,
        );

        await input.trigger("focus");
        await input.setValue("");
        await input.trigger("blur");
        await flushPromises();

        expect(wrapper.get(".label__message--error").text()).toBe(
            "Fyll i en mejladress.",
        );

        await input.trigger("focus");
        await input.setValue("5.5");
        await input.trigger("blur");
        await flushPromises();

        expect(wrapper.get(".label__message--error").text()).toBe(
            "Mejladressen är inte korrekt ifylld.",
        );
    });

    it.each`
        required
        ${true}
        ${false}
    `(
        `should set confirm email textfield as required = $required when first email textfield is required = $required`,
        ({ required }) => {
            expect.assertions(1);
            const validation = required ? "v-validation.required" : "";
            const wrapper = mount(
                defineComponent({
                    name: "TestComponent",
                    components: {
                        FEmailTextField,
                    },
                    template: /* HTML */ `
                        <f-email-text-field ${validation} extendedValidation>
                        </f-email-text-field>
                    `,
                }),
                {
                    attachTo: createPlaceholderInDocument(),
                    global: {
                        plugins: [ValidationPlugin],
                    },
                },
            );

            const input = wrapper.findAll("input")[1];
            const expectedValue = required ? "" : undefined;
            expect(input.attributes("required")).toBe(expectedValue);
        },
    );
});

describe("disable paste", () => {
    function testPaste(inputElement: HTMLInputElement): void {
        const clipboardEvent = new Event("paste", {
            bubbles: true,
            cancelable: true,
            composed: true,
        });
        vi.spyOn(clipboardEvent, "preventDefault");

        inputElement.dispatchEvent(clipboardEvent);
        /* eslint-disable-next-line @typescript-eslint/unbound-method -- technical debt */
        expect(clipboardEvent.preventDefault).toHaveBeenCalled();
    }

    function allowPaste(inputElement: HTMLInputElement): void {
        const clipboardEvent = new Event("paste", {
            bubbles: true,
            cancelable: true,
            composed: true,
        });
        vi.spyOn(clipboardEvent, "preventDefault");

        inputElement.dispatchEvent(clipboardEvent);
        /* eslint-disable-next-line @typescript-eslint/unbound-method -- technical debt */
        expect(clipboardEvent.preventDefault).not.toHaveBeenCalled();
    }

    it("should paste content", async () => {
        expect.assertions(3);
        const wrapper = createWrapper({ options: { sync: false } });
        expect(wrapper.find(".label__message--error").exists()).toBeFalsy();

        const inputElement = wrapper.get("input").element;
        allowPaste(inputElement);
        await flushPromises();

        expect(wrapper.find(".label__message--error").exists()).toBeFalsy();
    });

    it("should not paste content in second textfield", async () => {
        expect.assertions(3);
        const wrapper = createWrapper({
            options: { sync: false },
            props: { extendedValidation: true },
        });
        expect(wrapper.find(".label__message--error").exists()).toBeFalsy();

        const secondInputElement = wrapper.findAll("input")[1].element;
        testPaste(secondInputElement);
        await flushPromises();

        expect(wrapper.get(".label__message--error").text()).toBe(
            "Du kan inte kopiera mejladressen. Du måste skriva in den igen.",
        );
    });

    it("should remove paste error message when field is validated", async () => {
        expect.assertions(4);
        const wrapper = createWrapper({
            options: { sync: false },
            props: { extendedValidation: true },
        });
        const firstInputElement = wrapper.findAll("input")[0].element;
        const secondInputElement = wrapper.findAll("input")[1].element;

        allowPaste(firstInputElement);
        testPaste(secondInputElement);
        await flushPromises();

        expect(wrapper.get(".label__message--error").text()).toBe(
            "Du kan inte kopiera mejladressen. Du måste skriva in den igen.",
        );

        const input = wrapper.findAll("input")[1];
        await input.trigger("focus");
        await input.setValue("bad.formatted.email");
        await input.trigger("blur");
        await flushPromises();

        expect(wrapper.get(".label__message--error").text()).toBe(
            "Mejladressen är inte korrekt ifylld.",
        );
    });
});

describe("html-validate", () => {
    it("should be valid", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-email-text-field type="email" max-length="80">
                E-post
            </f-email-text-field>
            <f-email-text-field id="email-input-1" max-length="80">
                E-post
            </f-email-text-field>
            <f-email-text-field
                id="email-input-2"
                max-length="80"
                v-validation.required
            >
                E-post
            </f-email-text-field>
        `;
        await expect(markup).toBeValid();
    });

    it("should allow custom label for default and extended field", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-email-text-field extended-validation>
                <template #default> E-post </template>
                <template #extended-label> Upprepa e-post </template>
            </f-email-text-field>
        `;
        await expect(markup).toBeValid();
    });
});
