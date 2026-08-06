import "html-validate/vitest";
import {
    type PendingValidityEvent,
    type ValidatableHTMLElement,
    type ValidatorConfigs,
    type ValidityEvent,
    ValidationService,
} from "@fkui/logic";
import { config, shallowMount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import { describe, expect, it, vi } from "vitest";
import { ValidationPlugin } from "../../plugins";
import FTextField from "./FTextField.vue";

config.global.plugins = [ValidationPlugin];
config.global.stubs = { FLabel: false };

describe("snapshots", () => {
    it("should match snapshot with label and input", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FTextField, {
            slots: {
                default: "Label",
            },
        });
        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with label, error message and input", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FTextField, {
            slots: {
                default: "Label",
                "error-message": "ERROR_MESSAGE",
            },
        });
        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with label, tooltip, description, error message and input", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FTextField, {
            slots: {
                default: "Label",
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
            const wrapper = shallowMount(FTextField, {
                attrs: { id: "elementId" },
                slots: {
                    default: "Label",
                },
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

    it.each`
        slotsSpecified
        ${"specified"}
        ${"not specified"}
    `(
        "should match snapshot when label and description slots are $slotsSpecified",
        async ({ slotsSpecified }) => {
            expect.assertions(1);
            const wrapper = shallowMount(FTextField, {
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
                slots:
                    slotsSpecified === "specified"
                        ? {
                              default: "Custom default slot",
                              description: "Custom description slot",
                          }
                        : {},
            });

            await flushPromises();
            /* eslint-disable-next-line @typescript-eslint/no-unsafe-call -- technical debt */
            wrapper.vm.$forceUpdate();

            expect(wrapper.element).toMatchSnapshot();
        },
    );
});

describe("attributes", () => {
    it("should pass attributes", () => {
        expect.assertions(2);
        const wrapper = shallowMount(FTextField, {
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
        expect.assertions(1);
        const wrapper = shallowMount(FTextField, {
            props: {
                type: "email",
            },
        });
        const input = wrapper.get("input");
        expect(input.attributes("type")).toBe("email");
    });

    it("should set type to text as default", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FTextField);
        const input = wrapper.get("input");
        expect(input.attributes("type")).toBe("text");
    });

    describe("inline", () => {
        it("should not set class by default", () => {
            expect.assertions(1);
            const wrapper = shallowMount(FTextField);
            expect(wrapper.classes()).not.toContain("text-field--inline");
        });

        it("should set class when enabled", () => {
            expect.assertions(1);
            const wrapper = shallowMount(FTextField, {
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
        expect.assertions(1);
        const wrapper = shallowMount(FTextField);
        const input = wrapper.get("input");
        await input.setValue("foo");
        await input.trigger("change");
        expect(wrapper.emitted("update:modelValue")![0][0]).toBe("foo");
    });

    it("should emit change event when no validation is used", async () => {
        expect.assertions(1);
        const wrapper = shallowMount(FTextField);
        const input = wrapper.get("input");
        await input.setValue("foo");
        await input.trigger("change");
        expect(wrapper.emitted("update:modelValue")![0][0]).toBe("foo");
    });

    it("should pass listeners", async () => {
        expect.assertions(3);
        const focus = vi.fn();
        const change = vi.fn();
        const blur = vi.fn();

        const wrapper = shallowMount(FTextField, {
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
        expect.assertions(2);
        const wrapper = shallowMount(FTextField, {
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
        const wrapper = shallowMount(FTextField);
        await flushPromises();

        const input = wrapper.get("input");
        const validatorConfigs: ValidatorConfigs = { number: {}, integer: {} };
        ValidationService.addValidatorsToElement(
            input.element,
            validatorConfigs,
        );

        await input.trigger("focus");
        await input.setValue("5.5a");
        await input.trigger("blur");

        expect(wrapper.get(".label__message--error").text()).toBe(
            "Du har fyllt i ett ogiltigt tecken. Fyll i siffror.",
        );

        await input.trigger("focus");
        await input.setValue("5.5");
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
            expect.assertions(1);
            const wrapper = shallowMount(FTextField, {
                attrs: {
                    id: "elementId",
                    "data-validation": true,
                },
            });

            const input = wrapper.get("input");
            const htmlInput = input.element;
            await input.setValue("qweRTY");

            htmlInput.dispatchEvent(
                new CustomEvent<ValidityEvent>("validity", {
                    detail: {
                        target: wrapper.element as ValidatableHTMLElement,
                        elementId: "elementId",
                        isValid: valid,
                        validityMode: valid ? "VALID" : "ERROR",
                        validationMessage: "Some validationmessage",
                        nativeEvent,
                    },
                }),
            );

            await flushPromises();
            /* eslint-disable-next-line @typescript-eslint/no-unsafe-call -- technical debt */
            wrapper.vm.$forceUpdate();

            // eslint-disable-next-line vitest/no-conditional-in-test -- technical debt, Vitest migration
            if (expected === "trigger") {
                // eslint-disable-next-line vitest/no-conditional-expect -- technical debt, Vitest migration
                expect(wrapper.emitted()["update:modelValue"]).toBeTruthy();
            } else {
                // eslint-disable-next-line vitest/no-conditional-expect -- technical debt, Vitest migration
                expect(wrapper.emitted()["update:modelValue"]).toBeFalsy();
            }
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
            expect.assertions(2);
            const formatterMock = (viewValue: string): string =>
                viewValue.toUpperCase();
            const parserMock = (viewValue: string): string =>
                viewValue.toLowerCase();

            const wrapper = shallowMount(FTextField, {
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
            await input.setValue(inputValue);

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
            /* eslint-disable-next-line @typescript-eslint/no-unsafe-call -- technical debt */
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
        }: {
            initialModel: string;
            inputValue: string;
            formatted: string;
            parsed: number | undefined;
            expectedModel: number | string;
            expectedValue: string;
        }) => {
            expect.assertions(2);
            const formatterMock = (): string => formatted;
            const parserMock = (): number | undefined => parsed;

            const wrapper = shallowMount(FTextField, {
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
            await input.setValue(inputValue);

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
            /* eslint-disable-next-line @typescript-eslint/no-unsafe-call -- technical debt */
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
            expect.assertions(4);
            const wrapper = shallowMount(FTextField, {
                attrs: { id: "elementId" },
                props: {
                    modelValue: "original input",
                },
            });

            const input = wrapper.get("input");
            await input.setValue("original input");

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
            /* eslint-disable-next-line @typescript-eslint/no-unsafe-call -- technical debt */
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
            expect.assertions(1);
            const formatterMock = failingFormatter
                ? () => undefined
                : (viewValue: string): string => viewValue.toUpperCase();
            const parserMock = failingParser
                ? () => undefined
                : (viewValue: string): string => viewValue.toLowerCase();

            const wrapper = shallowMount(FTextField, {
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
    it("should only allow f-tooltip in tooltip slot", async () => {
        expect.assertions(2);
        const valid = /* HTML */ `<f-tooltip
            screen-reader-text="lorem ipsum"
        />`;
        const invalid = /* HTML */ `<div></div>`;
        const markup = (child: string): string => /* HTML */ `
            <f-text-field v-validation.maxLength>
                Label
                <template #tooltip> ${child} </template>
            </f-text-field>
        `;
        await expect(markup(valid)).toBeValid();
        await expect(markup(invalid)).toMatchInlineCodeframe(`
          "error: <div> element is not permitted as content under slot "tooltip" (<f-text-field>) (element-permitted-content)
            2 |             <f-text-field v-validation.maxLength>
            3 |                 Label
          > 4 |                 <template #tooltip> <div></div> </template>
              |                                      ^^^
            5 |             </f-text-field>
            6 |
          Selector: f-text-field > template > div"
        `);
    });
});
