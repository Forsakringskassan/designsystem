import "html-validate/jest";
import {
    ValidationService,
    type PendingValidityEvent,
    type ValidatableHTMLElement,
    type ValidityEvent,
    type ValidatorConfigs,
} from "@fkui/logic";
import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import { mount, VueWrapper } from "@vue/test-utils";
import flushPromises from "flush-promises";
import { defineComponent } from "vue";
import { ValidationPlugin } from "../../../../plugins";
import FPhoneTextField from "./FPhoneTextField.vue";

function createWrapper({
    props = {},
    slots = {},
    attrs = {},
    options = {},
} = {}): VueWrapper<InstanceType<typeof FPhoneTextField>> {
    return mount(FPhoneTextField, {
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
        const wrapper = createWrapper();

        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with label, error message and input", () => {
        const wrapper = createWrapper({
            slots: { "error-message": "ERROR_MESSAGE" },
        });

        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with label, tooltip, description, error message and input", () => {
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
            wrapper.vm.$forceUpdate();

            expect(wrapper.element).toMatchSnapshot();
        },
    );
});

describe("attributes", () => {
    it("should pass attributes", () => {
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

    it("should set id on input element", () => {
        const wrapper = mount({
            components: { FPhoneTextField },
            template: /* HTML */ `
                <f-phone-text-field id="foobar"> </f-phone-text-field>
            `,
        });
        const input = wrapper.get("input");
        expect(input.attributes("id")).toBe("foobar");
    });

    it("should set id on first input element when using extended validation", () => {
        const wrapper = mount({
            components: { FPhoneTextField },
            template: /* HTML */ `
                <f-phone-text-field id="foobar" extended-validation>
                </f-phone-text-field>
            `,
        });
        const inputs = wrapper.findAll("input");
        expect(inputs[0].attributes("id")).toBe("foobar");
        expect(inputs[1].attributes("id")).toBeDefined();
    });

    it("should set type to tel as default", () => {
        const wrapper = createWrapper();
        const input = wrapper.get("input");
        expect(input.attributes("type")).toBe("tel");
    });
});

describe("events", () => {
    it("should support v-model", async () => {
        const wrapper = createWrapper({
            props: { modelValue: "888" },
        });
        const input = wrapper.get("input");
        const htmlInput = input.element;
        expect(htmlInput.value).toBe("888");

        input.setValue("888-888");
        expect(htmlInput.value).toBe("888-888");

        await input.trigger("change");
        expect(
            wrapper.emitted("update:modelValue")![0][0],
        ).toMatchInlineSnapshot(`"888-888"`);
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

        const input = wrapper.get("input");
        await input.trigger("focus");
        await wrapper.vm.$nextTick();
        await input.trigger("blur");
        await wrapper.vm.$nextTick();

        expect(focus).toHaveBeenCalled();
        expect(blur).toHaveBeenCalled();
    });

    it('should have ValidityMode INITIAL when "pending-validity" event is triggered', async () => {
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
        wrapper.vm.$forceUpdate();

        expect(wrapper.vm.$data.validityMode).toBe("ERROR");

        htmlInput.dispatchEvent(
            new CustomEvent<PendingValidityEvent>("pending-validity"),
        );
        await flushPromises();
        wrapper.vm.$forceUpdate();

        expect(wrapper.vm.$data.validityMode).toBe("INITIAL");
    });
});

describe("validation", () => {
    it("should display correct error message when multiple validators", async () => {
        const wrapper = createWrapper({ options: { sync: false } });
        ValidationService.setSubmitted(wrapper.element);
        await flushPromises();

        const input = wrapper.get("input");
        const validatorConfigs: ValidatorConfigs = { required: {} };
        ValidationService.addValidatorsToElement(
            input.element,
            validatorConfigs,
        );

        await input.trigger("focus");
        input.setValue("");
        await input.trigger("blur");

        expect(wrapper.get(".label__message--error").text()).toBe(
            "Fyll i ett telefonnummer.",
        );

        await input.trigger("focus");
        input.setValue("5.5");
        await input.trigger("blur");

        expect(wrapper.get(".label__message--error").text()).toBe(
            "Telefonnumret är inte rätt ifyllt.",
        );
    });

    it.each`
        required
        ${true}
        ${false}
    `(
        `should set confirm phone textfield as required = $required when first phone textfield is required = $required`,
        async ({ required }) => {
            const validation = required ? "v-validation.required" : "";
            const wrapper = mount(
                defineComponent({
                    name: "TestComponent",
                    components: {
                        FPhoneTextField,
                    },
                    template: /* HTML */ `
                        <f-phone-text-field
                            ${validation}
                            extendedValidation
                        ></f-phone-text-field>
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

it("should be able to set custom label at default and extended slot", () => {
    const wrapper = createWrapper({
        props: {
            extendedValidation: true,
        },
        slots: {
            default: "Mobiltelefonnummer",
            extendedLabel: "Upprepa mobiltelefonnumret",
        },
    });

    const labels = wrapper.findAll("label");
    const firstPhone = labels[0];
    const secondPhone = labels[1];

    expect(firstPhone.text()).toContain("Mobiltelefonnummer");
    expect(secondPhone.text()).toContain("Upprepa mobiltelefonnumret");
});

describe("html-validate", () => {
    it.each`
        html
        ${'<f-phone-text-field maxlength="80">Telefonnummer</f-phone-text-field>'}
        ${'<f-phone-text-field id="phone-input" maxlength="80">Telefonnummer</f-phone-text-field>'}
        ${'<f-phone-text-field id="phone-input" v-validation.required maxlength="80">Telefonnummer</f-phone-text-field>'}
    `("$html should be valid", ({ html }) => {
        expect.assertions(1);

        expect(html).toHTMLValidate();
    });
});
