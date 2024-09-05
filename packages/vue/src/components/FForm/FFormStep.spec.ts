import "html-validate/jest";
import "@fkui/test-utils/jest";
import { defineComponent } from "vue";
import { VueWrapper, mount, DOMWrapper } from "@vue/test-utils";
import flushPromises from "flush-promises";
import { ValidationService, Reference } from "@fkui/logic";
import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import { FormStep, FormErrorList } from "../../types";
import { ValidationPlugin } from "../../plugins";
import { FTextField } from "../FTextField";
import { FFieldset } from "../FFieldset";
import { FRadioField } from "../FRadioField";
import { FFormProvider, createFFormProvideOptions } from "./FFormProvide";
import FForm from "./FForm.vue";
import FFormStep from "./FFormStep.vue";

interface TestComponentData {
    components: Record<string, Reference<FormErrorList | FormStep>>;
}

const TestComponent = defineComponent({
    components: { FFormStep, FTextField },
    provide(): FFormProvider {
        return createFFormProvideOptions(this);
    },
    data(): TestComponentData {
        return {
            components: {},
        };
    },
    template: /* HTML */ `
        <f-form-step v-bind="$attrs">
            <template #header>
                <h2 class="form-step__title">example</h2>
            </template>
            <template #error-message>
                <div>error-message slot content</div>
            </template>
            <template #default="{ toggleIsOpen, isOpen }">
                <div v-show="isOpen">
                    <f-text-field
                        id="element1"
                        v-validation.required.maxLength="{ maxLength: { length: 40 } }"
                    />
                    <f-text-field
                        id="element2"
                        v-validation.required.maxLength="{ maxLength: { length: 40 } }"
                    />
                    <f-text-field id="element3" />
                </div>
                <button
                    id="button"
                    type="button"
                    @click="toggleIsOpen"
                ></button>
            </template>
        </f-form-step>
    `,
});

function createWrapper({
    props = {},
    slots = {},
    attrs = {},
    stubs = {},
} = {}): VueWrapper {
    return mount(TestComponent, {
        attrs: { ...attrs },
        props: { id: "test-id", titleText: "example", ...props },
        slots: { ...slots },
        attachTo: createPlaceholderInDocument(),
        global: {
            plugins: [ValidationPlugin],
            stubs: {
                FLabel: true,
                FIcon: true,
                FErrorList: {
                    props: ["items"],
                    template: /* HTML */ ` <div>{{ items }}</div> `,
                },
                ...stubs,
            },
        },
    });
}

async function touchInputs(
    wrapper: VueWrapper,
    inputs: Array<DOMWrapper<HTMLInputElement>>,
): Promise<void> {
    for (const input of inputs) {
        await input.trigger("focus");
    }
    await flushPromises();

    for (const input of inputs) {
        await input.trigger("blur");
    }
    await flushPromises();
}

async function writeInputs(
    wrapper: VueWrapper,
    inputs: Array<DOMWrapper<HTMLInputElement>>,
    value: string = "foobar",
): Promise<void> {
    for (const input of inputs) {
        await input.trigger("focus");
    }
    await wrapper.vm.$nextTick();
    await flushPromises();

    for (const input of inputs) {
        await input.setValue(value);
    }
    await wrapper.vm.$nextTick();
    await flushPromises();

    for (const input of inputs) {
        await input.trigger("blur");
    }
    await wrapper.vm.$nextTick();
    await flushPromises();
}

afterEach(() => {
    jest.restoreAllMocks();
});

describe("snapshots", () => {
    it("should match snapshot when pristine", async () => {
        expect.assertions(1);
        const wrapper = createWrapper();
        await flushPromises();
        expect(wrapper.element).toMatchSnapshot();
    });
});

describe("errorlist", () => {
    const errorList = ".form-step__error";

    it("should not be displayed initially", async () => {
        expect.assertions(1);
        const wrapper = createWrapper();
        await flushPromises();
        const formStep = wrapper.getComponent(FFormStep);
        expect(formStep.find(errorList).exists()).toBeFalsy();
    });

    it("should not be displayed when form step is opened and closed without touching input fields", async () => {
        expect.assertions(1);
        const wrapper = createWrapper();
        await flushPromises();
        const formStep = wrapper.getComponent(FFormStep);
        const button = wrapper.get("#button");

        /* open step */
        await button.trigger("click");
        await flushPromises();

        /* close step */
        await button.trigger("click");
        await flushPromises();

        expect(formStep.find(errorList).exists()).toBeFalsy();
    });

    it("should not be displayed when form step is opened and closed with touched input fields", async () => {
        expect.assertions(1);
        const wrapper = createWrapper();
        await flushPromises();
        const formStep = wrapper.getComponent(FFormStep);
        const button = wrapper.get("#button");
        const inputs = wrapper.findAll("input");

        /* open step */
        await button.trigger("click");
        await flushPromises();

        /* touch input fields */
        await touchInputs(wrapper, inputs);

        /* close step, the errorlist should now be visible */
        await button.trigger("click");
        await flushPromises();

        const element = formStep.find(errorList);
        expect(element.exists()).toBeFalsy();
    });

    it("should be displayed when form step is opened and closed with touched input fields having invalid values", async () => {
        expect.assertions(2);
        const wrapper = createWrapper();
        await flushPromises();
        const formStep = wrapper.getComponent(FFormStep);
        const button = wrapper.get("#button");
        const inputs = wrapper.findAll("input");

        /* open step */
        await button.trigger("click");
        await flushPromises();

        /* type to long value in input fields */
        await writeInputs(
            wrapper,
            inputs,
            "longer than maxlength validator of this field",
        );

        /* close step, the errorlist should now be visible */
        await button.trigger("click");
        await flushPromises();

        const element = formStep.find(errorList);
        expect(element.exists()).toBeTruthy();
        expect(element.element).toMatchSnapshot();
    });

    it("should be displayed without links when disableErrorLinks is enabled", async () => {
        const wrapper = mount(TestComponent, {
            props: {
                id: "test-id",
                titleText: "example",
                disableErrorLinks: true,
            },
            attachTo: createPlaceholderInDocument(),
            global: {
                plugins: [ValidationPlugin],
                stubs: {
                    FLabel: true,
                    FIcon: true,
                },
            },
        });

        const errorListBulletSelector = ".error-list__bullet";

        await flushPromises();
        const formStep = wrapper.getComponent(FFormStep);

        const button = wrapper.get("#button");
        const inputs = wrapper.findAll("input");

        /* open step */
        await button.trigger("click");
        await flushPromises();

        /* type to long value in input fields */
        await writeInputs(
            wrapper,
            inputs,
            "longer than maxlength validator of this field",
        );

        /* close step, the errorlist should now be visible without links */
        await button.trigger("click");
        await flushPromises();
        const errors = formStep.find(errorList);
        expect(errors.isVisible()).toBeTruthy();
        expect(errors.find("a").exists()).toBeFalsy();

        const bullets = formStep
            .find(errorList)
            .findAll(errorListBulletSelector);
        expect(bullets[0].element).toBeTruthy();
        expect(bullets[1].element).toBeTruthy();

        expect(formStep.props().disableErrorLinks).toBeTruthy();
    });

    it.todo("should be displayed when form is submitted");
});

describe("focus", () => {
    it("should not show errorlist when closed with only `required` form errors and touched fields", async () => {
        expect.assertions(1);

        /* given: a form step with input fields */
        const wrapper = createWrapper();
        await flushPromises();

        const button = wrapper.get("#button");
        const inputs = wrapper.findAll("input");

        /* when: form step is opened and closed, touching form fields in the
         * progress */
        await button.trigger("click");
        await flushPromises();
        await touchInputs(wrapper, inputs);
        await button.trigger("click");
        await flushPromises();

        /* then: the error list should not appear */
        expect(wrapper.find(".form-step__error").exists()).toBeFalsy();
    });

    it("should focus on errorlist when closed with other than `required` form errors and touched fields", async () => {
        expect.assertions(1);

        /* given: a form step with input fields */
        const wrapper = createWrapper();
        await flushPromises();

        const button = wrapper.get("#button");
        const inputs = wrapper.findAll("input");

        /* when: form step is opened and closed, touching form fields in the
         * progress */
        await button.trigger("click");
        await flushPromises();

        /* type to long value in input fields */
        await writeInputs(
            wrapper,
            inputs,
            "longer than maxlength validator of this field",
        );

        await button.trigger("click");
        await flushPromises();

        /* then: the error list should receive focus */
        const errorlist = wrapper.get(".form-step__error");
        expect(errorlist.element).toHaveFocus();
    });

    it("should focus on header when step is closed with form errors but untouched", async () => {
        expect.assertions(1);

        /* given: a form step with input fields */
        const wrapper = createWrapper();
        await flushPromises();

        /* when: form step is opened and closed without touching any form
         * fields */
        const button = wrapper.get("#button");
        await button.trigger("click");
        await flushPromises();
        await button.trigger("click");
        await flushPromises();

        /* then: the heading should receive focus */
        const header = wrapper.get(".form-step__header");
        expect(header.element).toHaveFocus();
    });

    it("should focus on header when form is closed without errors", async () => {
        expect.assertions(1);

        /* given: a form step with input fields */
        const wrapper = createWrapper();
        await flushPromises();

        const button = wrapper.get("#button");
        const inputs = wrapper.findAll("input");

        /* when: form step is opened and closed, touching form fields in the
         * progress */
        await button.trigger("click");
        await flushPromises();
        await writeInputs(wrapper, inputs);
        await button.trigger("click");
        await flushPromises();

        /* then: the heading should receive focus */
        const header = wrapper.get(".form-step__header");
        expect(header.element).toHaveFocus();
    });
});

describe("submit", () => {
    it("should call ValidationService.setSubmitted and ValidateService.validateAllElements when self.ref.numberOfTimeSubmitted is incremented", async () => {
        const validateAllElements = jest.spyOn(
            ValidationService,
            "validateAllElements",
        );
        const setState = jest.spyOn(ValidationService, "setSubmitted");

        const wrapper = createWrapper();
        const formStep = wrapper.getComponent(FFormStep);
        formStep.vm.$data.self.ref.numberOfTimesSubmitted++;
        await flushPromises();

        expect(setState).toHaveBeenCalled();
        expect(validateAllElements).toHaveBeenCalledTimes(1);
        expect(validateAllElements).toHaveBeenCalledWith("test-id");
    });
});

describe("error list", () => {
    it("should remove errors when field not in DOM anymore (i.e. v-if=false)", async () => {
        const Component = defineComponent({
            name: "TestComponent",
            components: {
                FForm,
                FFormStep,
                FTextField,
                FFieldset,
                FRadioField,
            },
            data() {
                return {
                    showField: "yes",
                    myText: "",
                };
            },
            template: /* HTML */ `
                <f-form :displayError="false">
                    <f-form-step id="form-step">
                        <f-fieldset
                            id="radiogroup"
                            name="myRadios"
                            v-validation.required
                        >
                            <template #label> Show field </template>
                            <template #default>
                                <f-radio-field
                                    id="radioRemoveField"
                                    value="no"
                                    v-model="showField"
                                >
                                    No
                                </f-radio-field>
                                <f-radio-field
                                    id="radioAddField"
                                    value="yes"
                                    v-model="showField"
                                >
                                    Yes
                                </f-radio-field>
                                <f-text-field
                                    v-if="showField==='yes'"
                                    id="textfield"
                                    v-model="myText"
                                    v-validation.required
                                >
                                    Textfield
                                </f-text-field>
                            </template>
                        </f-fieldset>
                    </f-form-step>
                </f-form>
            `,
        });
        const wrapper = mount(Component, {
            attachTo: createPlaceholderInDocument(),
            global: {
                plugins: [ValidationPlugin],
            },
        });

        await wrapper.get("#textfield").trigger("blur");
        await wrapper.get("form").trigger("submit");
        await flushPromises();

        const ul = wrapper.get(".error-list ul");
        expect(ul.html()).toMatchInlineSnapshot(`
            <ul class="error-list__list error-list--list-style-none">
              <li class=""><a href="javascript:"><span class="error-list__bullet" aria-hidden="true"></span><span class="error-list__link">Textfield</span></a></li>
            </ul>
        `);

        await wrapper.get("#radioRemoveField").trigger("click");
        await flushPromises();

        expect(wrapper.find(".error-list").exists()).toBeFalsy();
    });
});

describe("html-validate", () => {
    it.each`
        html
        ${"<f-form-step>Default</f-form-step>"}
        ${"<f-form-step><template #header>Title</template></f-form-step>"}
        ${"<f-form-step><template #error-message>Error</template></f-form-step>"}
    `("$html should be valid", ({ html }) => {
        expect.assertions(1);

        expect(html).toHTMLValidate();
    });

    it.each`
        html
        ${"<f-form-step><template #tooltip>Tooltip</template></f-form-step>"}
    `("$html should be invalid", ({ html }) => {
        expect.assertions(3);
        let catchedError;

        try {
            expect(html).toHTMLValidate();
        } catch (error) {
            catchedError = error;
        } finally {
            expect(catchedError).toBeDefined();
            expect(catchedError).toMatchSnapshot();
        }
    });
});
