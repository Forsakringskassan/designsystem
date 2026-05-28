import { defineComponent } from "vue";
import { mount } from "@vue/test-utils";
import { FWizard, FWizardStep } from "../components";
import { TranslationPlugin } from "../plugins";
import { FWizardSelectors } from "./FWizard.selectors";

const TestComponent = defineComponent({
    components: { FWizard, FWizardStep },
    template: /* HTML */ `
        <f-wizard header-tag="h2">
            <f-wizard-step key="step-1" title="Step 1">
                <template #header>Step 1</template>
                <p>Step body</p>
                <template #actions>
                    <button type="button" class="button button--primary">
                        Continue
                    </button>
                    <button type="button" class="button button--secondary">
                        Cancel
                    </button>
                </template>
            </f-wizard-step>
        </f-wizard>
    `,
});

const defaultMountOptions = {
    global: {
        plugins: [TranslationPlugin],
        stubs: ["f-icon"],
    },
};

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FWizard);
    const { selector } = FWizardSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".wizard");
    expect(root.classes()).toContain("wizard");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FWizard, {
        attrs: { "data-test": "my-wizard" },
    });
    const { selector } = FWizardSelectors('[data-test="my-wizard"]');
    expect(selector).toBe('[data-test="my-wizard"]');
    expect(wrapper.find(selector).exists()).toBeTruthy();
});

it("steps() should return all wizard step elements", () => {
    expect.assertions(1);
    const wrapper = mount(TestComponent, defaultMountOptions);
    const { steps } = FWizardSelectors();
    expect(wrapper.findAll(steps())).toHaveLength(1);
});

it("stepBody() should return a selector string", () => {
    expect.assertions(1);
    const { stepBody } = FWizardSelectors();
    expect(stepBody()).toBe(".wizard-step-body");
});

it("stepContinueButton() should return a selector string", () => {
    expect.assertions(1);
    const { stepContinueButton } = FWizardSelectors();
    expect(stepContinueButton()).toContain(".button--primary");
});

it("stepCancelButton() should return a selector string", () => {
    expect.assertions(1);
    const { stepCancelButton } = FWizardSelectors();
    expect(stepCancelButton()).toContain(".button--secondary");
});
