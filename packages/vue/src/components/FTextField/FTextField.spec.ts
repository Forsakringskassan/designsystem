import "html-validate/jest";
import {
    type PendingValidityEvent,
    type ValidatableHTMLElement,
    ValidationService,
    type ValidatorConfigs,
    type ValidityEvent,
} from "@fkui/logic";
import flushPromises from "flush-promises";
import { mount, VueWrapper } from "@vue/test-utils";
import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import { ValidationPlugin } from "../../plugins";
import FTextField from "./FTextField.vue";

function createWrapper({
    props = {},
    slots = {},
    attrs = {},
    options = {},
} = {}): VueWrapper<InstanceType<typeof FTextField>> {
    return mount(FTextField, {
        attrs: { ...attrs },
        props: { ...props },
        slots: { default: "Label", ...slots },
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

    it.each`
        slotsSpecified
        ${"specified"}
        ${"not specified"}
    `(
        "should match snapshot when label and description slots are $slotsSpecified",
        async ({ slotsSpecified }) => {
            const wrapper = mount(FTextField, {
                data() {
                    return {
                        defaultText: "My defaultText",
                        descriptionText: "My descriptionText",
                        descriptionScreenReaderText:
                            "My descriptionScreenReaderText",
                        discreteDescriptionText: "My discreteDescriptionText",
                        discreteDescriptionScreenReaderText:
                            "My discreteDescriptionScreenReaderText",
                    };
                },
                attachTo: createPlaceholderInDocument(),
                global: {
                    stubs: ["f-icon"],
                },
                slots:
                    slotsSpecified === "specified"
                        ? {
                              default: "Custom default slot",
                              description: "Custom description slot",
                          }
                        : {},
            });

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

    it("should set type", () => {
        const wrapper = createWrapper({
            props: {
                type: "email",
            },
        });
        const input = wrapper.get("input");
        expect(input.attributes("type")).toBe("email");
    });

    it("should set type to text as default", () => {
        const wrapper = createWrapper();
        const input = wrapper.get("input");
        expect(input.attributes("type")).toBe("text");
    });

    describe("inline", () => {
        it("should not set class by default", () => {
            const wrapper = createWrapper();
            expect(wrapper.classes()).not.toContain("text-field--inline");
        });

        it("should set class when enabled", () => {
            const wrapper = createWrapper({
                props: {
                    inline: true,
                },
            });
            expect(wrapper.classes()).toContain("text-field--inline");
        });
    });
});

describe("events", () => {
    it("should emit model update event when no validation is used", async () => {
        const wrapper = createWrapper();
        const input = wrapper.get("input");
        input.setValue("foo");
        await input.trigger("change");
        expect(wrapper.emitted("update:modelValue")![0][0]).toBe("foo");
    });

    it("should emit change event when no validation is used", async () => {
        const wrapper = createWrapper();
        const input = wrapper.get("input");
        input.setValue("foo");
        await input.trigger("change");
        expect(wrapper.emitted("update:modelValue")![0][0]).toBe("foo");
    });

    it("should pass listeners", async () => {
        const focus = jest.fn();
        const change = jest.fn();
        const blur = jest.fn();

        const wrapper = createWrapper({
            attrs: {
                onFocus: focus,
                onChange: change,
                onBlur: blur,
            },
        });
        const input = wrapper.get("input");
        await input.trigger("focus");
        await input.trigger("change");
        await input.trigger("blur");

        expect(focus).toHaveBeenCalled();
        expect(change).toHaveBeenCalled();
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
        const wrapper = createWrapper({
            options: { sync: false },
        });
        await flushPromises();

        const input = wrapper.get("input");
        const validatorConfigs: ValidatorConfigs = { number: {}, integer: {} };
        ValidationService.addValidatorsToElement(
            input.element,
            validatorConfigs,
        );

        await input.trigger("focus");
        input.setValue("5.5a");
        await input.trigger("blur");

        expect(wrapper.get(".label__message--error").text()).toBe(
            "Du har fyllt i ett ogiltigt tecken. Fyll i siffror.",
        );

        await input.trigger("focus");
        input.setValue("5.5");
        await input.trigger("blur");

        expect(wrapper.get(".label__message--error").text()).toBe(
            "Fyll i siffror utan decimal.",
        );
    });
});

describe("formatting and parsing combined with validation", () => {
    it.each`
        valid    | nativeEvent | expected
        ${true}  | ${"input"}  | ${"not trigger"}
        ${false} | ${"change"} | ${"trigger"}
        ${true}  | ${"change"} | ${"trigger"}
        ${false} | ${"blur"}   | ${"trigger"}
        ${true}  | ${"blur"}   | ${"trigger"}
        ${false} | ${"input"}  | ${"not trigger"}
    `(
        'should $expected update:modelValue event when valid="$valid" and nativeEvent="$nativeEvent"',
        async ({ valid, nativeEvent, expected }) => {
            const wrapper = createWrapper({
                attrs: {
                    id: "elementId",
                    "data-validation": true,
                },
            });

            const input = wrapper.get("input");
            const htmlInput = input.element;
            input.setValue("qweRTY");

            htmlInput.dispatchEvent(
                new CustomEvent<ValidityEvent>("validity", {
                    detail: {
                        target: wrapper.element as ValidatableHTMLElement,
                        elementId: "elementId",
                        isValid: valid,
                        validityMode: valid ? "VALID" : "ERROR",
                        validationMessage: "Some validationmessage",
                        nativeEvent: nativeEvent,
                    },
                }),
            );

            await flushPromises();
            wrapper.vm.$forceUpdate();

            /* eslint-disable jest/no-conditional-expect -- technical debt */
            if (expected === "trigger") {
                expect(wrapper.emitted()["update:modelValue"]).toBeTruthy();
            } else {
                expect(wrapper.emitted()["update:modelValue"]).toBeFalsy();
            }
            /* eslint-enable jest/no-conditional-expect */
        },
    );

    it.each`
        initialModel | inputValue  | formatter | parser   | expectedModel | expectedValue
        ${""}        | ${"qweRTY"} | ${"yes"}  | ${"no"}  | ${"QWERTY"}   | ${"QWERTY"}
        ${""}        | ${"qweRTY"} | ${"no"}   | ${"yes"} | ${"qwerty"}   | ${"qweRTY"}
        ${""}        | ${"qweRTY"} | ${"yes"}  | ${"yes"} | ${"qwerty"}   | ${"QWERTY"}
        ${""}        | ${"qweRTY"} | ${"no"}   | ${"no"}  | ${"qweRTY"}   | ${"qweRTY"}
        ${"qwerty"}  | ${"qweRTY"} | ${"yes"}  | ${"yes"} | ${"qwerty"}   | ${"QWERTY"}
        ${"qwerty"}  | ${"qweRTY"} | ${"no"}   | ${"yes"} | ${"qwerty"}   | ${"qweRTY"}
    `(
        'should have model="$expectedModel", value="$expectedValue" on blur with input "$inputValue" (initialModel="$initialModel", formatter=$formatter, parser=$parser)',
        async ({
            initialModel,
            inputValue,
            formatter,
            parser,
            expectedModel,
            expectedValue,
        }) => {
            const formatterMock = (viewValue: string): string =>
                viewValue.toUpperCase();
            const parserMock = (viewValue: string): string =>
                viewValue.toLowerCase();

            const wrapper = createWrapper({
                props: {
                    formatter: formatter === "yes" ? formatterMock : undefined,
                    parser: parser === "yes" ? parserMock : undefined,
                    modelValue: initialModel,
                },
                attrs: {
                    id: "elementId",
                    "data-validation": true,
                },
            });

            const input = wrapper.get("input");
            const htmlInput = input.element;
            input.setValue(inputValue);

            htmlInput.dispatchEvent(
                new CustomEvent<ValidityEvent>("validity", {
                    detail: {
                        target: wrapper.element as ValidatableHTMLElement,
                        elementId: "elementId",
                        isValid: true,
                        validityMode: "VALID",
                        validationMessage: "Some validationmessage",
                        nativeEvent: "change",
                    },
                }),
            );

            await flushPromises();
            wrapper.vm.$forceUpdate();

            expect(wrapper.emitted("update:modelValue")![0][0]).toEqual(
                expectedModel,
            );
            expect(htmlInput.value).toEqual(expectedValue);
        },
    );

    it.each`
        initialModel | inputValue  | formatted | parsed       | expectedModel | expectedValue
        ${""}        | ${"qweRTY"} | ${"zero"} | ${0}         | ${0}          | ${"zero"}
        ${"qwerty"}  | ${"qweRTY"} | ${"foo"}  | ${undefined} | ${"qweRTY"}   | ${"foo"}
    `(
        'should have model="$expectedModel", value="$expectedValue" on blur with input "$inputValue" (initialModel="$initialModel", formatted=$formatted, parsed=$parsed)',
        async ({
            initialModel,
            inputValue,
            formatted,
            parsed,
            expectedModel,
            expectedValue,
        }) => {
            const formatterMock = (): string => formatted;
            const parserMock = (): number | undefined => parsed;

            const wrapper = createWrapper({
                props: {
                    formatter: formatterMock,
                    parser: parserMock,
                    modelValue: initialModel,
                },
                attrs: {
                    id: "elementId",
                    "data-validation": true,
                },
            });

            const input = wrapper.get("input");
            const htmlInput = input.element;
            input.setValue(inputValue);

            htmlInput.dispatchEvent(
                new CustomEvent<ValidityEvent>("validity", {
                    detail: {
                        target: wrapper.element as ValidatableHTMLElement,
                        elementId: "elementId",
                        isValid: true,
                        validityMode: "VALID",
                        validationMessage: "Some validationmessage",
                        nativeEvent: "change",
                    },
                }),
            );

            await flushPromises();
            wrapper.vm.$forceUpdate();

            expect(wrapper.emitted("update:modelValue")![0][0]).toEqual(
                expectedModel,
            );
            expect(htmlInput.value).toEqual(expectedValue);
        },
    );
});

describe("set v-model programmatic", () => {
    it.each`
        modelValue            | viewValue
        ${""}                 | ${""}
        ${"an initial value"} | ${"an initial value"}
        ${undefined}          | ${""}
        ${null}               | ${""}
    `(
        "should set viewValue to '$viewValue' when setting v-model to '$modelValue'",
        async ({ modelValue, viewValue }) => {
            const wrapper = createWrapper({
                attrs: { id: "elementId" },
                props: {
                    modelValue: "original input",
                },
            });

            const input = wrapper.get("input");
            input.setValue("original input");

            const htmlInput = input.element;

            htmlInput.dispatchEvent(
                new CustomEvent<ValidityEvent>("validity", {
                    detail: {
                        target: wrapper.element as ValidatableHTMLElement,
                        elementId: "elementId",
                        isValid: true,
                        validityMode: "ERROR",
                        validationMessage: "Something went wrong.",
                        nativeEvent: "blur",
                    },
                }),
            );
            await flushPromises();
            wrapper.vm.$forceUpdate();

            expect(wrapper.vm.$data.validityMode).toBe("ERROR");
            expect(wrapper.vm.viewValue).toBe("original input");
            expect(wrapper.vm.$data.lastModelValue).toBe("original input");

            await wrapper.setProps({ modelValue });

            expect(wrapper.vm.viewValue).toBe(viewValue);
        },
    );

    it.each`
        vModel   | expectedViewModel | formatter | failingFormatter | parser   | failingParser
        ${"qwe"} | ${"qwe"}          | ${false}  | ${false}         | ${false} | ${false}
        ${"foo"} | ${"FOO"}          | ${true}   | ${false}         | ${false} | ${false}
        ${"foo"} | ${"foo"}          | ${true}   | ${true}          | ${false} | ${false}
        ${"BAR"} | ${"BAR"}          | ${false}  | ${false}         | ${true}  | ${false}
        ${"BAR"} | ${"BAR"}          | ${false}  | ${false}         | ${true}  | ${true}
        ${"asd"} | ${"ASD"}          | ${true}   | ${false}         | ${true}  | ${false}
        ${"asd"} | ${"asd"}          | ${true}   | ${true}          | ${true}  | ${false}
        ${"asd"} | ${"asd"}          | ${true}   | ${false}         | ${true}  | ${true}
    `(
        "should set viewModel to '$expectedViewModel' when v-model is set to '$vModel' and formatter=$formatter, parser=$parser, failingFormatter=$failingFormatter, failingParser=$failingParser)",
        async ({
            vModel,
            expectedViewModel,
            formatter,
            parser,
            failingFormatter,
            failingParser,
        }) => {
            const formatterMock = failingFormatter
                ? () => undefined
                : (viewValue: string): string => viewValue.toUpperCase();
            const parserMock = failingParser
                ? () => undefined
                : (viewValue: string): string => viewValue.toLowerCase();

            const wrapper = createWrapper({
                props: {
                    formatter: formatter ? formatterMock : undefined,
                    parser: parser ? parserMock : undefined,
                    modelValue: "zxc",
                },
                attrs: {
                    id: "elementId",
                    "data-validation": true,
                },
            });

            await wrapper.setProps({ modelValue: vModel });

            expect(wrapper.vm.viewValue).toBe(expectedViewModel);
        },
    );
});

describe("html-validate", () => {
    it("should only allow f-tooltip in tooltip slot", () => {
        expect.assertions(2);
        const valid = /* HTML */ `<f-tooltip
            screen-reader-text="lorem ipsum"
        />`;
        const invalid = /* HTML */ `<div />`;
        const markup = (child: string): string => /* HTML */ `
            <f-text-field v-validation.maxLength>
                Label
                <template #tooltip> ${child} </template>
            </f-text-field>
        `;
        expect(markup(valid)).toHTMLValidate();
        expect(markup(invalid)).not.toHTMLValidate({
            ruleId: "element-permitted-content",
            message: `<div> element is not permitted as content under slot "tooltip" (<f-text-field>)`,
        });
    });
});
