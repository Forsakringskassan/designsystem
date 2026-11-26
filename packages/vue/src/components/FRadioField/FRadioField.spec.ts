import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { injectionKeys as fieldsetInjectionKeys } from "../FFieldset/use-fieldset";
import FRadioField from "./FRadioField.vue";

it.each`
    vModel       | value        | expected
    ${undefined} | ${undefined} | ${true}
    ${undefined} | ${false}     | ${false}
    ${undefined} | ${true}      | ${false}
    ${undefined} | ${""}        | ${false}
    ${undefined} | ${0}         | ${false}
    ${""}        | ${""}        | ${true}
    ${""}        | ${undefined} | ${false}
    ${""}        | ${false}     | ${false}
    ${""}        | ${true}      | ${false}
    ${""}        | ${0}         | ${false}
    ${false}     | ${false}     | ${true}
    ${false}     | ${undefined} | ${false}
    ${false}     | ${true}      | ${false}
    ${false}     | ${""}        | ${false}
    ${false}     | ${0}         | ${false}
    ${true}      | ${true}      | ${true}
    ${true}      | ${undefined} | ${false}
    ${true}      | ${false}     | ${false}
    ${true}      | ${""}        | ${false}
    ${true}      | ${0}         | ${false}
    ${0}         | ${0}         | ${true}
    ${0}         | ${undefined} | ${false}
    ${0}         | ${false}     | ${false}
    ${0}         | ${true}      | ${false}
    ${0}         | ${1}         | ${false}
    ${0}         | ${""}        | ${false}
    ${1}         | ${1}         | ${true}
    ${1}         | ${0}         | ${false}
    ${null}      | ${null}      | ${true}
    ${null}      | ${true}      | ${false}
    ${null}      | ${false}     | ${false}
    ${null}      | ${""}        | ${false}
    ${null}      | ${0}         | ${false}
`(
    'should handle v-model value "$vModel" where checked should be "$expected" when radio value is "$value"',
    ({ vModel, value, expected }) => {
        expect.assertions(1);
        const wrapper = shallowMount(FRadioField, {
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
        const wrapper = shallowMount(FRadioField, {
            props: { value: "Default value" },
            slots: { default: "Default label" },
            global: {
                provide: {
                    [fieldsetInjectionKeys.sharedName]: "providedName",
                },
            },
        });
        expect(wrapper.element).toMatchSnapshot();
    });
});

describe("attributes", () => {
    it("should pass attributes", () => {
        expect.assertions(2);
        const wrapper = shallowMount(FRadioField, {
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
        ({ disabled, expectedResult }) => {
            expect.assertions(2);
            const wrapper = shallowMount(FRadioField, {
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
        const wrapper = shallowMount(FRadioField, {
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
        const wrapper = shallowMount(FRadioField, {
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

    it("should pass listeners", async () => {
        expect.assertions(1);
        const foobar = vi.fn();
        const wrapper = shallowMount(FRadioField, {
            attrs: { onFoobar: foobar },
        });
        const element = wrapper.get("input");
        await element.trigger("foobar");
        expect(foobar).toHaveBeenCalled();
    });

    it("should pass click listener and trigger focus on click", async () => {
        expect.assertions(2);
        const click = vi.fn();

        const wrapper = mount(FRadioField, {
            attrs: { onClick: click },
            props: { value: "Default value" },
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
