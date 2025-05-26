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
    it("should allow flow content", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-wizard header-tag="h1">
                <f-wizard-step key="my-key" title="my-title">
                    <div></div>
                </f-wizard-step>
            </f-wizard>
        `;
        expect(markup).toMatchInlineCodeframe(`""`);
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
        expect(markup).toMatchInlineCodeframe(`""`);
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
        expect(markup).toMatchInlineCodeframe(`""`);
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
        expect(markup).toMatchInlineCodeframe(`""`);
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
        expect(markup).toMatchInlineCodeframe(`""`);
    });

    it("should not allow flow content in next-button-text slot", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-wizard header-tag="h1">
                <f-wizard-step key="my-key" title="my-title">
                    <template #next-button-text>
                        <div></div>
                    </template>
                </f-wizard-step>
            </f-wizard>
        `;
        expect(markup).toMatchInlineCodeframe(`
            "error: <div> element is not permitted as content under slot "next-button-text" (<f-wizard-step>) (element-permitted-content) at inline:5:26:
              3 |                 <f-wizard-step key="my-key" title="my-title">
              4 |                     <template #next-button-text>
            > 5 |                         <div></div>
                |                          ^^^
              6 |                     </template>
              7 |                 </f-wizard-step>
              8 |             </f-wizard>
            Selector: f-wizard > f-wizard-step > template > div"
        `);
    });

    it("should not allow interactive content in next-button-text slot", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-wizard header-tag="h1">
                <f-wizard-step key="my-key" title="my-title">
                    <template #next-button-text>
                        <button type="button">Button</button>
                    </template>
                </f-wizard-step>
            </f-wizard>
        `;
        expect(markup).toMatchInlineCodeframe(`
            "error: <button> element is not permitted as a descendant of slot "next-button-text" (<f-wizard-step>) (element-permitted-content) at inline:5:26:
              3 |                 <f-wizard-step key="my-key" title="my-title">
              4 |                     <template #next-button-text>
            > 5 |                         <button type="button">Button</button>
                |                          ^^^^^^
              6 |                     </template>
              7 |                 </f-wizard-step>
              8 |             </f-wizard>
            Selector: f-wizard > f-wizard-step > template > button"
        `);
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
        expect(markup).toMatchInlineCodeframe(`""`);
    });

    it("should not allow flow content in cancel-button-text slot", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-wizard header-tag="h1">
                <f-wizard-step key="my-key" title="my-title">
                    <template #cancel-button-text>
                        <div></div>
                    </template>
                </f-wizard-step>
            </f-wizard>
        `;
        expect(markup).toMatchInlineCodeframe(`
            "error: <div> element is not permitted as content under slot "cancel-button-text" (<f-wizard-step>) (element-permitted-content) at inline:5:26:
              3 |                 <f-wizard-step key="my-key" title="my-title">
              4 |                     <template #cancel-button-text>
            > 5 |                         <div></div>
                |                          ^^^
              6 |                     </template>
              7 |                 </f-wizard-step>
              8 |             </f-wizard>
            Selector: f-wizard > f-wizard-step > template > div"
        `);
    });

    it("should not allow interactive content in cancel-button-text slot", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-wizard header-tag="h1">
                <f-wizard-step key="my-key" title="my-title">
                    <template #cancel-button-text>
                        <button type="button">Button</button>
                    </template>
                </f-wizard-step>
            </f-wizard>
        `;
        expect(markup).toMatchInlineCodeframe(`
            "error: <button> element is not permitted as a descendant of slot "cancel-button-text" (<f-wizard-step>) (element-permitted-content) at inline:5:26:
              3 |                 <f-wizard-step key="my-key" title="my-title">
              4 |                     <template #cancel-button-text>
            > 5 |                         <button type="button">Button</button>
                |                          ^^^^^^
              6 |                     </template>
              7 |                 </f-wizard-step>
              8 |             </f-wizard>
            Selector: f-wizard > f-wizard-step > template > button"
        `);
    });

    it("should require key attribute", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-wizard header-tag="h1">
                <f-wizard-step title="my-title"></f-wizard-step>
            </f-wizard>
        `;
        expect(markup).toMatchInlineCodeframe(`
            "error: <f-wizard-step> is missing required "key" attribute (element-required-attributes) at inline:3:18:
              1 |
              2 |             <f-wizard header-tag="h1">
            > 3 |                 <f-wizard-step title="my-title"></f-wizard-step>
                |                  ^^^^^^^^^^^^^
              4 |             </f-wizard>
              5 |
            Selector: f-wizard > f-wizard-step"
        `);
    });

    it("should require title attribute", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-wizard header-tag="h1">
                <f-wizard-step key="my-key"></f-wizard-step>
            </f-wizard>
        `;
        expect(markup).toMatchInlineCodeframe(`
            "error: <f-wizard-step> is missing required "title" attribute (element-required-attributes) at inline:3:18:
              1 |
              2 |             <f-wizard header-tag="h1">
            > 3 |                 <f-wizard-step key="my-key"></f-wizard-step>
                |                  ^^^^^^^^^^^^^
              4 |             </f-wizard>
              5 |
            Selector: f-wizard > f-wizard-step"
        `);
    });

    it("should require non-empty title attribute", () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-wizard header-tag="h1">
                <f-wizard-step key="my-key" title=""></f-wizard-step>
            </f-wizard>
        `;
        expect(markup).toMatchInlineCodeframe(`
            "error: Attribute "title" has invalid value "" (attribute-allowed-values) at inline:3:45:
              1 |
              2 |             <f-wizard header-tag="h1">
            > 3 |                 <f-wizard-step key="my-key" title=""></f-wizard-step>
                |                                             ^^^^^
              4 |             </f-wizard>
              5 |
            Selector: f-wizard > f-wizard-step"
        `);
    });
});
