import { defineComponent } from "vue";
import { mount } from "@vue/test-utils";
import { FFieldset } from "../components";
import { FFieldsetSelectors } from "./FFieldset.selectors";

const FFieldsetComponent = defineComponent({
    template: /* HTML */ `
        <f-fieldset>
            <template #label> Min etikett </template>
            <template v-if="showError" #error-message>
                <span class="label__message label__message--error"
                    >Något gick fel</span
                >
            </template>
            <template #default>
                <span v-if="variant === 'content'">My content</span>
                <template v-else-if="variant === 'radio'">
                    <div class="radio-button">Option A</div>
                    <div class="radio-button">Option B</div>
                    <div class="radio-button">Option C</div>
                </template>
                <template v-else-if="variant === 'checkbox'">
                    <div class="checkbox">Option A</div>
                    <div class="checkbox">Option B</div>
                </template>
            </template>
        </f-fieldset>
    `,
    props: {
        showError: {
            type: Boolean,
            default: false,
        },
        variant: {
            type: String,
            default: "default",
        },
    },
    components: {
        FFieldset,
    },
});

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FFieldsetComponent);
    const { selector } = FFieldsetSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".fieldset");
    expect(root.classes()).toContain("fieldset");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FFieldsetComponent, {
        attrs: { "data-test": "my-fieldset" },
    });
    const { selector } = FFieldsetSelectors('[data-test="my-fieldset"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="my-fieldset"]');
    expect(root.classes()).toContain("fieldset");
});

it("legend() should return the legend element", () => {
    expect.assertions(1);
    const wrapper = mount(FFieldsetComponent);
    const { legend } = FFieldsetSelectors();
    const el = wrapper.get(legend());
    expect(el.text()).toContain("Min etikett");
});

it("content() should return the content wrapper element", () => {
    expect.assertions(2);
    const wrapper = mount(FFieldsetComponent, {
        props: { variant: "content" },
    });
    const { content } = FFieldsetSelectors();
    const el = wrapper.find(content());
    expect(el.exists()).toBeTruthy();
    expect(el.text()).toContain("My content");
});

it("errorMessage() should return the error message element when present", () => {
    expect.assertions(2);
    const wrapper = mount(FFieldsetComponent, {
        props: { showError: true },
    });
    const { errorMessage } = FFieldsetSelectors();
    const el = wrapper.find(errorMessage());
    expect(el.exists()).toBeTruthy();
    expect(el.text()).toBe("Något gick fel");
});

it("radioButtons() should return all radio button elements", () => {
    expect.assertions(1);
    const wrapper = mount(FFieldsetComponent, {
        props: { variant: "radio" },
    });
    const { radioButtons } = FFieldsetSelectors();
    expect(wrapper.findAll(radioButtons())).toHaveLength(3);
});

it("checkboxes() should return all checkbox elements", () => {
    expect.assertions(1);
    const wrapper = mount(FFieldsetComponent, {
        props: { variant: "checkbox" },
    });
    const { checkboxes } = FFieldsetSelectors();
    expect(wrapper.findAll(checkboxes())).toHaveLength(2);
});

it("errorMessage() should not exist when there is no error", () => {
    expect.assertions(1);
    const wrapper = mount(FFieldsetComponent);
    const { errorMessage } = FFieldsetSelectors();
    const el = wrapper.find(errorMessage());
    expect(el.exists()).toBeFalsy();
});
