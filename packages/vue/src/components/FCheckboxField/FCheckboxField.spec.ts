import { shallowMount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import FCheckboxField from "./FCheckboxField.vue";

it.each`
    modelValue   | value    | expected
    ${undefined} | ${false} | ${false}
    ${null}      | ${false} | ${false}
    ${""}        | ${false} | ${false}
    ${false}     | ${""}    | ${false}
    ${0}         | ${false} | ${false}
    ${undefined} | ${true}  | ${false}
    ${null}      | ${true}  | ${false}
    ${""}        | ${true}  | ${false}
    ${true}      | ${""}    | ${false}
    ${0}         | ${true}  | ${false}
    ${0}         | ${0}     | ${true}
    ${1}         | ${0}     | ${false}
    ${1}         | ${1}     | ${true}
    ${0}         | ${1}     | ${false}
`(
    'should handle v-model value "$modelValue" where checked should be "$expected" when checkbox value is "$value"',
    ({ modelValue, value, expected }) => {
        expect.assertions(1);
        const wrapper = shallowMount(FCheckboxField, {
            props: {
                value,
                modelValue,
            },
        });
        expect(wrapper.get("input").element.checked).toBe(expected);
    },
);

describe("snapshots", () => {
    it("should match snapshot with label and input", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FCheckboxField, {
            props: {
                value: "Default value",
            },
            slots: {
                default: "Default label",
            },
        });
        expect(wrapper.element).toMatchSnapshot();
    });
});

describe("attributes", () => {
    it("should pass attributes", () => {
        expect.assertions(2);
        const wrapper = shallowMount(FCheckboxField, {
            attrs: {
                disabled: true,
                required: true,
            },
            props: {
                value: true,
            },
        });
        const input = wrapper.get("input");
        expect(input.attributes("disabled")).toBeDefined();
        expect(input.attributes("required")).toBeDefined();
    });
});

describe("disabled", () => {
    it.each`
        disabled      | expectedResult | description
        ${"disabled"} | ${true}        | ${"be"}
        ${true}       | ${true}        | ${"be"}
        ${false}      | ${false}       | ${"not be"}
    `(
        "should $description disabled when disabled prop is $disabledAttribute",
        ({ disabled, expectedResult }) => {
            expect.assertions(2);
            const wrapper = shallowMount(FCheckboxField, {
                props: {
                    disabled,
                    value: true,
                },
            });
            const input = wrapper.get("input").element;
            expect(input.disabled).toBe(expectedResult);
            expect(wrapper.classes("disabled")).toBe(expectedResult);
        },
    );
});

describe("events", () => {
    it("should support v-model by emitting update:modelValue event with value", async () => {
        expect.assertions(3);
        const wrapper = shallowMount(FCheckboxField, {
            props: { value: "Some value", modelValue: "Some value" },
            attachTo: document.body,
        });

        const input = wrapper.get("input");
        const htmlInput = input.element;

        expect(htmlInput.checked).toBe(true);
        await wrapper.setProps({ modelValue: undefined });
        expect(htmlInput.checked).toBe(false);

        await input.trigger("click");
        expect(
            wrapper.emitted("update:modelValue")![0][0],
        ).toMatchInlineSnapshot(`"Some value"`);
    });

    it("should emit change event when input value changes", async () => {
        expect.assertions(1);
        const wrapper = shallowMount(FCheckboxField, {
            props: { value: true, modelValue: false },
            attachTo: document.body,
        });

        const input = wrapper.get("input");

        await input.trigger("click");
        expect(wrapper.emitted("change")![0]).toMatchInlineSnapshot(`
            [
              true,
            ]
        `);
    });

    describe("should support v-model as array", () => {
        it("should add value to array", async () => {
            expect.assertions(1);
            const wrapper = shallowMount(FCheckboxField, {
                props: {
                    value: "This checkbox",
                    modelValue: ["Another checkbox"],
                },
                attachTo: document.body,
            });

            await wrapper.get("input").trigger("click");
            expect(wrapper.emitted("update:modelValue")![0][0])
                .toMatchInlineSnapshot(`
                [
                  "Another checkbox",
                  "This checkbox",
                ]
            `);
        });

        it("should remove value from array", async () => {
            expect.assertions(1);
            const wrapper = shallowMount(FCheckboxField, {
                props: {
                    value: "This checkbox",
                    modelValue: ["Another checkbox", "This checkbox"],
                },
                attachTo: document.body,
            });

            await wrapper.get("input").trigger("click");
            expect(wrapper.emitted("update:modelValue")![0][0])
                .toMatchInlineSnapshot(`
                [
                  "Another checkbox",
                ]
            `);
        });

        it("should add nested array", async () => {
            expect.assertions(1);
            const wrapper = shallowMount(FCheckboxField, {
                props: {
                    value: ["This checkbox"],
                    modelValue: ["Another checkbox"],
                },
                attachTo: document.body,
            });

            await wrapper.get("input").trigger("click");
            expect(wrapper.emitted("update:modelValue")![0][0])
                .toMatchInlineSnapshot(`
                [
                  "Another checkbox",
                  [
                    "This checkbox",
                  ],
                ]
            `);
        });

        it("should remove nested array", async () => {
            expect.assertions(1);
            const wrapper = shallowMount(FCheckboxField, {
                props: {
                    value: ["This checkbox"],
                    modelValue: ["Another checkbox", ["This checkbox"]],
                },
                attachTo: document.body,
            });

            await wrapper.get("input").trigger("click");
            expect(wrapper.emitted("update:modelValue")![0][0])
                .toMatchInlineSnapshot(`
                [
                  "Another checkbox",
                ]
            `);
        });

        it("should add nested object", async () => {
            expect.assertions(1);
            const wrapper = shallowMount(FCheckboxField, {
                props: {
                    value: { foo: true },
                    modelValue: ["Another checkbox"],
                },
                attachTo: document.body,
            });

            await wrapper.get("input").trigger("click");
            expect(wrapper.emitted("update:modelValue")![0][0])
                .toMatchInlineSnapshot(`
                [
                  "Another checkbox",
                  {
                    "foo": true,
                  },
                ]
            `);
        });

        it("should remove nested object", async () => {
            expect.assertions(1);
            const wrapper = shallowMount(FCheckboxField, {
                props: {
                    value: { foo: true },
                    modelValue: ["Another checkbox", { foo: true }],
                },
                attachTo: document.body,
            });

            await wrapper.get("input").trigger("click");
            expect(wrapper.emitted("update:modelValue")![0][0])
                .toMatchInlineSnapshot(`
                [
                  "Another checkbox",
                ]
            `);
        });
    });

    it("should pass listeners", async () => {
        expect.assertions(2);
        const focus = vi.fn();
        const blur = vi.fn();

        const wrapper = shallowMount(FCheckboxField, {
            attrs: {
                onFocus: focus,
                onBlur: blur,
            },
            props: { value: true },
        });
        const input = wrapper.get("input");
        await input.trigger("focus");
        await input.trigger("blur");

        expect(focus).toHaveBeenCalled();
        expect(blur).toHaveBeenCalled();
    });

    it("should pass click listener and trigger focus on click", async () => {
        expect.assertions(2);
        const click = vi.fn();

        const wrapper = shallowMount(FCheckboxField, {
            attrs: { onClick: click },
            props: { value: true },
            attachTo: document.body,
        });

        const input = wrapper.get("input");
        const htmlInput = input.element;
        vi.spyOn(htmlInput, "focus");

        await input.trigger("click");
        expect(click).toHaveBeenCalled();
        /* eslint-disable-next-line @typescript-eslint/unbound-method -- technical debt */
        expect(htmlInput.focus).toHaveBeenCalled();
    });
});
