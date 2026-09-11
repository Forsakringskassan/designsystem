import { shallowMount } from "@vue/test-utils";
import { expect, it } from "vitest";
import { FRadioFieldSelectors } from "./FRadioField.selectors";
import { FFieldset, FRadioField, TestDirective } from "@fkui/vue";

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = shallowMount(FRadioField, {
        props: { value: "yes" },
        slots: { default: "Yes" },
    });
    const { selector } = FRadioFieldSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(":scope");
    expect(root.classes()).toContain("radio-button");
});

it("should handle explicit selector (v-test directive)", () => {
    expect.assertions(2);

    const wrapper = shallowMount(
        {
            template: `<div><f-radio-field v-test="'foo'"></f-radio-field></div>`,
            components: { FRadioField },
        },
        {
            global: {
                stubs: { FRadioField: false },
                directives: { test: TestDirective },
            },
        },
    );

    const { selector } = FRadioFieldSelectors('[data-test="foo"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="foo"]');
    expect(root.classes()).toContain("radio-button");
});

it("input() should return the radio input element", () => {
    expect.assertions(2);
    const wrapper = shallowMount(FRadioField, {
        props: { value: "yes" },
        slots: { default: "Yes" },
    });
    const { input } = FRadioFieldSelectors();
    const el = wrapper.get(input());
    expect(el.element.tagName.toLowerCase()).toBe("input");
    expect((el.element as HTMLInputElement).type).toBe("radio");
});

it("input() should be checked when value matches modelValue", () => {
    expect.assertions(1);
    const wrapper = shallowMount(FRadioField, {
        props: { value: "yes", modelValue: "yes" },
        slots: { default: "Yes" },
    });
    const { input } = FRadioFieldSelectors();
    const el = wrapper.get(input());
    expect((el.element as HTMLInputElement).checked).toBe(true);
});

it("label() should return the label element", () => {
    expect.assertions(1);
    const wrapper = shallowMount(FRadioField, {
        props: { value: "yes" },
        slots: { default: "Yes" },
    });
    const { label } = FRadioFieldSelectors();
    expect(wrapper.get(label()).text()).toBe("Yes");
});

it("details() should exist when details slot is used with showDetails always", () => {
    expect.assertions(1);
    const wrapper = shallowMount(
        {
            template: /* HTML */ `
                <f-fieldset show-details="always">
                    <f-radio-field :value="'ja'">
                        <template #default>Yes</template>
                        <template #details>More info</template>
                    </f-radio-field>
                </f-fieldset>
            `,
            components: { FRadioField, FFieldset },
        },
        {
            global: {
                stubs: { FRadioField: false, FFieldset: false },
            },
        },
    );
    const { details } = FRadioFieldSelectors();
    expect(wrapper.get(details()).text()).toBe("More info");
});

it("details() should not exist when details slot is not used", () => {
    expect.assertions(1);
    const wrapper = shallowMount(
        {
            template: /* HTML */ `
                <f-fieldset show-details="always">
                    <f-radio-field :value="'ja'">
                        <template #default>Yes</template>
                    </f-radio-field>
                </f-fieldset>
            `,
            components: { FRadioField, FFieldset },
        },
        {
            global: {
                stubs: { FRadioField: false, FFieldset: false },
            },
        },
    );
    const { details } = FRadioFieldSelectors();
    expect(wrapper.find(details()).exists()).toBeFalsy();
});
