import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import { type VueWrapper, mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import FCheckboxField from "./FCheckboxField.vue";

function createWrapper({
    props = {},
    slots = {},
    attrs = {},
} = {}): VueWrapper {
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-return -- technical debt */
    return mount(FCheckboxField, {
        attrs: { ...attrs },
        props: { value: "Default value", ...props },
        slots: { default: "Default label", ...slots },
        attachTo: createPlaceholderInDocument(),
    });
}

it.each`
    vModel       | value    | expected
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
    'should handle v-model value "$vModel" where checked should be "$expected" when checkbox value is "$value"',
    ({ vModel, value, expected }) => {
        expect.assertions(1);
        const wrapper = createWrapper({
            props: {
                value,
                modelValue: vModel,
            },
        });

        expect(wrapper.get("input").element.checked).toBe(expected);
    },
);

describe("snapshots", () => {
    it("should match snapshot with label and input", () => {
        expect.assertions(1);
        const wrapper = createWrapper();
        expect(wrapper.element).toMatchSnapshot();
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
});

describe("disabled", () => {
    it.each`
        disabled      | expectedResult | description
        ${"disabled"} | ${true}        | ${"be"}
        ${true}       | ${true}        | ${"be"}
        ${false}      | ${false}       | ${"not be"}
    `(
        "should $description disabled when disabled prop is $disabledAttribute",
        async ({ disabled, expectedResult }) => {
            expect.assertions(2);
            const wrapper = createWrapper({
                props: {
                    disabled,
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
        const wrapper = createWrapper({
            props: { value: "Some value", modelValue: "Some value" },
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
        const wrapper = createWrapper({
            props: { value: true, modelValue: false },
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
            const wrapper = createWrapper({
                props: {
                    value: "This checkbox",
                    modelValue: ["Another checkbox"],
                },
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
            const wrapper = createWrapper({
                props: {
                    value: "This checkbox",
                    modelValue: ["Another checkbox", "This checkbox"],
                },
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
            const wrapper = createWrapper({
                props: {
                    value: ["This checkbox"],
                    modelValue: ["Another checkbox"],
                },
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
            const wrapper = createWrapper({
                props: {
                    value: ["This checkbox"],
                    modelValue: ["Another checkbox", ["This checkbox"]],
                },
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
            const wrapper = createWrapper({
                props: {
                    value: { foo: true },
                    modelValue: ["Another checkbox"],
                },
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
            const wrapper = createWrapper({
                props: {
                    value: { foo: true },
                    modelValue: ["Another checkbox", { foo: true }],
                },
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

        const wrapper = createWrapper({
            attrs: {
                onFocus: focus,
                onBlur: blur,
            },
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

        const wrapper = createWrapper({
            attrs: { onClick: click },
        });

        const input = wrapper.get("input");
        const htmlInput = input.element;
        vi.spyOn(htmlInput, "focus");

        await input.trigger("click");
        expect(click).toHaveBeenCalled();
        expect(htmlInput.focus).toHaveBeenCalled();
    });
});
