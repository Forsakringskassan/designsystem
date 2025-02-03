import { VueWrapper, mount } from "@vue/test-utils";
import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import { injectionKeys as fieldsetInjectionKeys } from "../FFieldset/use-fieldset";
import FRadioField from "./FRadioField.vue";

function createWrapper({
    props = {},
    slots = {},
    attrs = {},
} = {}): VueWrapper {
    return mount(FRadioField, {
        attrs: { ...attrs },
        attachTo: createPlaceholderInDocument(),
        props: { value: "Default value", ...props },
        slots: { default: "Default label", ...slots },
        global: {
            provide: {
                [fieldsetInjectionKeys.sharedName as symbol]: "providedName",
            },
        },
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
    'should handle v-model value "$vModel" where checked should be "$expected" when radio value is "$value"',
    ({ vModel, value, expected }) => {
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
        const wrapper = createWrapper();
        expect(wrapper.element).toMatchSnapshot();
    });
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

    it("should pass listeners", async () => {
        const foobar = jest.fn();
        const wrapper = createWrapper({
            attrs: { onFoobar: foobar },
        });
        const element = wrapper.get("input");
        await element.trigger("foobar");
        expect(foobar).toHaveBeenCalled();
    });

    it("should pass click listener and trigger focus on click", async () => {
        const click = jest.fn();

        const wrapper = createWrapper({
            attrs: { onClick: click },
        });

        const input = wrapper.get("input");
        const htmlInput = input.element;
        htmlInput.focus = jest.fn();

        await input.trigger("click");
        expect(click).toHaveBeenCalled();
        expect(htmlInput.focus).toHaveBeenCalled();
    });
});
