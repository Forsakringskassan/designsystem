import "html-validate/jest";
import { defineComponent } from "vue";
import { mount } from "@vue/test-utils";
import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import flushPromises from "flush-promises";
import FWizard from "./FWizard.vue";
import FWizardStep from "./FWizardStep.vue";

afterEach(() => {
    jest.restoreAllMocks();
    jest.clearAllTimers();
});

it("should use header tag provided from FWizard", async () => {
    expect.assertions(3);
    const selector = ".wizard-step__header__title";
    const TestComponent = defineComponent({
        components: {
            FWizard,
            FWizardStep,
        },
        props: {
            headerTag: String,
        },
        template: /* HTML */ `
            <f-wizard :header-tag="headerTag">
                <f-wizard-step key="step1" title="step1"></f-wizard-step>
            </f-wizard>
        `,
    });
    const wrapper = mount(TestComponent, {
        props: {
            headerTag: "h1",
        },
    });
    await flushPromises();
    expect(wrapper.get(selector).element.tagName).toBe("H1");
    wrapper.setProps({ headerTag: "h2" });
    await flushPromises();
    expect(wrapper.get(selector).element.tagName).toBe("H2");
    wrapper.setProps({ headerTag: "h5" });
    await flushPromises();
    expect(wrapper.get(selector).element.tagName).toBe("H5");
});

it("should call beforeNext with data including key, totalSteps and stepNumber", async () => {
    expect.assertions(1);
    const beforeNextMock = jest.fn();
    const TestComponent = defineComponent({
        components: {
            FWizard,
            FWizardStep,
        },
        props: {
            beforeNext: Function,
        },
        template: /* HTML */ `
            <f-wizard header-tag="h2">
                <f-wizard-step
                    key="step1"
                    title="step1"
                    :before-next
                ></f-wizard-step>
            </f-wizard>
        `,
    });
    const wrapper = mount(TestComponent, {
        props: {
            beforeNext: beforeNextMock,
        },
        attachTo: createPlaceholderInDocument(),
    });
    await wrapper.find("[type='submit']").trigger("click");
    await wrapper.vm.$nextTick();
    await flushPromises();
    expect(beforeNextMock).toHaveBeenCalledWith({
        key: "step1",
        stepNumber: 1,
        totalSteps: 1,
    });
});

it("should call beforeValidation with data including key, totalSteps and stepNumber", async () => {
    expect.assertions(1);
    const beforeValidationMock = jest.fn();
    const TestComponent = defineComponent({
        components: {
            FWizard,
            FWizardStep,
        },
        props: {
            beforeValidation: Function,
        },
        template: /* HTML */ `
            <f-wizard header-tag="h2">
                <f-wizard-step
                    key="step1"
                    title="step1"
                    :before-validation
                ></f-wizard-step>
            </f-wizard>
        `,
    });
    const wrapper = mount(TestComponent, {
        props: {
            beforeValidation: beforeValidationMock,
        },
        attachTo: createPlaceholderInDocument(),
    });
    await wrapper.find("[type='submit']").trigger("click");
    await wrapper.vm.$nextTick();
    await flushPromises();
    expect(beforeValidationMock).toHaveBeenCalledWith({
        key: "step1",
        stepNumber: 1,
        totalSteps: 1,
    });
});

describe("html-validate", () => {
    it("should allow as root element in SFC", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <template>
                <f-wizard-step key="my-key" title="my-title"></f-wizard-step>
            </template>
        `;
        expect(markup).toHTMLValidate("Component.vue");
    });

    it("should allow flow content", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-wizard header-tag="h1">
                <f-wizard-step key="my-key" title="my-title">
                    <div></div>
                </f-wizard-step>
            </f-wizard>
        `;
        expect(markup).toHTMLValidate();
    });

    it("should allow flow content in default slot", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-wizard header-tag="h1">
                <f-wizard-step key="my-key" title="my-title">
                    <template #default>
                        <div></div>
                    </template>
                </f-wizard-step>
            </f-wizard>
        `;
        expect(markup).toHTMLValidate();
    });

    it("should allow flow content in step-of slot", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-wizard header-tag="h1">
                <f-wizard-step key="my-key" title="my-title">
                    <template #step-of>
                        <div></div>
                    </template>
                </f-wizard-step>
            </f-wizard>
        `;
        expect(markup).toHTMLValidate();
    });

    it("should allow flow content in error-message slot", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-wizard header-tag="h1">
                <f-wizard-step key="my-key" title="my-title">
                    <template #error-message>
                        <div></div>
                    </template>
                </f-wizard-step>
            </f-wizard>
        `;
        expect(markup).toHTMLValidate();
    });

    it("should allow phrasing content in next-button-text slot", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-wizard header-tag="h1">
                <f-wizard-step key="my-key" title="my-title">
                    <template #next-button-text>
                        <span></span>
                    </template>
                </f-wizard-step>
            </f-wizard>
        `;
        expect(markup).toHTMLValidate();
    });

    it("should not allow flow content in next-button-text slot", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-wizard-step key="my-key" title="my-title">
                <template #next-button-text>
                    <div></div>
                </template>
            </f-wizard-step>
        `;
        expect(markup).not.toHTMLValidate({
            ruleId: "element-permitted-content",
            message:
                '<div> element is not permitted as content under slot "next-button-text" (<f-wizard-step>)',
        });
    });

    it("should not allow interactive content in next-button-text slot", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-wizard-step key="my-key" title="my-title">
                <template #next-button-text>
                    <button type="button">Button</button>
                </template>
            </f-wizard-step>
        `;
        expect(markup).not.toHTMLValidate({
            ruleId: "element-permitted-content",
            message:
                '<button> element is not permitted as a descendant of slot "next-button-text" (<f-wizard-step>)',
        });
    });

    it("should allow phrasing content in cancel-button-text slot", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-wizard header-tag="h1">
                <f-wizard-step key="my-key" title="my-title">
                    <template #cancel-button-text>
                        <span></span>
                    </template>
                </f-wizard-step>
            </f-wizard>
        `;
        expect(markup).toHTMLValidate();
    });

    it("should not allow flow content in cancel-button-text slot", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-wizard-step key="my-key" title="my-title">
                <template #cancel-button-text>
                    <div></div>
                </template>
            </f-wizard-step>
        `;
        expect(markup).not.toHTMLValidate({
            ruleId: "element-permitted-content",
            message:
                '<div> element is not permitted as content under slot "cancel-button-text" (<f-wizard-step>)',
        });
    });

    it("should not allow interactive content in cancel-button-text slot", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-wizard-step key="my-key" title="my-title">
                <template #cancel-button-text>
                    <button type="button">Button</button>
                </template>
            </f-wizard-step>
        `;
        expect(markup).not.toHTMLValidate({
            ruleId: "element-permitted-content",
            message:
                '<button> element is not permitted as a descendant of slot "cancel-button-text" (<f-wizard-step>)',
        });
    });

    it("should require key attribute", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-wizard-step title="my-title"></f-wizard-step>
        `;
        expect(markup).not.toHTMLValidate({
            ruleId: "element-required-attributes",
            message: '<f-wizard-step> is missing required "key" attribute',
        });
    });

    it("should require title attribute", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-wizard-step key="my-key"></f-wizard-step>
        `;
        expect(markup).not.toHTMLValidate({
            ruleId: "element-required-attributes",
            message: '<f-wizard-step> is missing required "title" attribute',
        });
    });

    it("should require non-empty title attribute", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-wizard-step key="my-key" title=""></f-wizard-step>
        `;
        expect(markup).not.toHTMLValidate({
            ruleId: "attribute-allowed-values",
            message: 'Attribute "title" has invalid value ""',
        });
    });
});
