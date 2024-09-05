import { defineComponent } from "vue";
import { mount, VueWrapper } from "@vue/test-utils";
import {
    ValidationService,
    type ValidatableHTMLElement,
    type ValidatorConfigs,
} from "@fkui/logic";
import flushPromises from "flush-promises";
import { FTextField, FFieldset, FCheckboxField } from "../../components";
import { ComponentValidityEvent } from "../../types";
import { dispatchComponentValidityEvent } from "../../utils";
import { ValidationPlugin } from "./ValidationPlugin";

const addValidatorsToElement = jest.spyOn(
    ValidationService,
    "addValidatorsToElement",
);

const removeValidatorsFromElement = jest.spyOn(
    ValidationService,
    "removeValidatorsFromElement",
);

const validateElement = jest.spyOn(ValidationService, "validateElement");

ValidationService.addValidationErrorMessages({ required: "REQUIRED" });

afterEach(() => {
    jest.clearAllMocks();
});

const BaseComponent = defineComponent({
    name: "BaseComponent",
    components: {
        FTextField,
        FFieldset,
        FCheckboxField,
    },
    data() {
        return {
            exists: true,
            componentUnmountCalled: false,
            show: false,
            validatorConfigs: {
                required: { errorMessage: "INITIAL MESSAGE" },
            } as ValidatorConfigs,
        };
    },
    methods: {
        onComponentUnmount() {
            this.componentUnmountCalled = true;
        },
    },
});

function createWrapper(
    template: string,
): VueWrapper<InstanceType<typeof BaseComponent>> {
    return mount(BaseComponent, {
        template,
        global: {
            plugins: [ValidationPlugin],
        },
    });
}

it("should pass input element, validators and configurations to ValidationService.addValidatorsToElement when applying directive", () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <f-text-field
            id="val-id"
            v-validation.required.maxLength="{ maxLength: { length: 10 } }"
        >
            some label
        </f-text-field>
    `;
    const wrapper = createWrapper(markup);
    const element = wrapper.get("input").element;
    expect(addValidatorsToElement).toHaveBeenCalledTimes(1);
    expect(addValidatorsToElement).toHaveBeenNthCalledWith(1, element, {
        maxLength: { length: 10 },
        required: {},
    });
});

it("should throw exeception when applying a non supported validator", async () => {
    expect.assertions(1);
    const markup = /* HTML */ `
        <f-text-field
            id="not-supported"
            v-validation.notSupportedValidatorName="{}"
            :maxlength="100"
        >
            some label
        </f-text-field>
    `;
    expect(() => createWrapper(markup)).toThrowErrorMatchingInlineSnapshot(
        `"Validator 'notSupportedValidatorName' does not exist or is not registered, see ValidatorService.registerValidator."`,
    );
    /* technical debt: this is a hack to workaround the watchdog timer that
     * kicks in if validation occurs when no validators are present. This is
     * mostly to prevent regressions as the watchdog shouldn't fire no matter
     * what in this case. Optimally this flow should be rewritten so we could
     * properly and reliably await for stuff to happen but in the meantime this
     * could use `jest.useFakeTimers()` if it weren't for the fact that the
     * current implementation heaviliy uses timers defer execution so the tests
     * would need to be sprinkled with various timer advancements. */
    await new Promise((resolve) => setTimeout(resolve, 500));
    await flushPromises();
});

it("should throw exeception when applying configuration that do not match validators", () => {
    expect.assertions(1);
    const markup = /* HTML */ `
        <f-text-field v-validation.maxLength="{ maxLengthWrongName: {}}">
            some label
        </f-text-field>
    `;
    expect(() => createWrapper(markup)).toThrowErrorMatchingInlineSnapshot(
        `"Have you forget to add 'maxLengthWrongName' to v-validation.maxLengthWrongName?"`,
    );
});

it("should throw exeception when applying directive to a tag without input element", () => {
    expect.assertions(1);
    const markup = /* HTML */ `
        <div v-validation.maxLength="{ maxLengthWrongName: {}}">
            some div without input element
        </div>
    `;
    expect(() => createWrapper(markup)).toThrowErrorMatchingInlineSnapshot(
        `"Couldn't find any validatable element"`,
    );
});

it("should call ValidationService.validateElement when inserted to parent", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <div v-if="show">
            <f-text-field
                id="test"
                v-validation.required.maxLength="{ maxLength: { length: 100 } }"
            >
                some label
            </f-text-field>
        </div>
    `;
    const wrapper = createWrapper(markup);
    wrapper.vm.$data.show = true;
    await flushPromises();
    const element = wrapper.get("input").element;
    expect(validateElement).toHaveBeenCalledTimes(1);
    expect(validateElement).toHaveBeenCalledWith(element);
});

describe("update validators", () => {
    it("should call ValidationService.addValidatorsToElement when the validator configuration changes", async () => {
        expect.assertions(3);
        const markup = /* HTML */ `
            <f-text-field
                id="val-id"
                v-validation.required.maxLength="validatorConfigs"
            >
                some label
            </f-text-field>
        `;
        const wrapper = createWrapper(markup);
        wrapper.vm.$data.validatorConfigs = {
            required: { errorMessage: "FIRST CHANGE" },
            maxLength: { length: 100 },
        };
        await flushPromises();
        wrapper.vm.$data.validatorConfigs = {
            required: { errorMessage: "SECOND CHANGE" },
            maxLength: { length: 100 },
        };
        await flushPromises();

        const element = wrapper.get("input").element;
        expect(addValidatorsToElement).toHaveBeenNthCalledWith(1, element, {
            maxLength: {},
            required: {
                errorMessage: "INITIAL MESSAGE",
            },
        });
        expect(addValidatorsToElement).toHaveBeenNthCalledWith(2, element, {
            maxLength: {
                length: 100,
            },
            required: {
                errorMessage: "FIRST CHANGE",
            },
        });
        expect(addValidatorsToElement).toHaveBeenNthCalledWith(3, element, {
            maxLength: {
                length: 100,
            },
            required: {
                errorMessage: "SECOND CHANGE",
            },
        });
    });

    it("should not call ValidationService.addValidatorsToElement when the validator configuration changes to different instances but with same value", async () => {
        expect.assertions(2);
        const markup = /* HTML */ `
            <f-text-field
                id="val-id"
                v-validation.required.maxLength="validatorConfigs"
            >
                some label
            </f-text-field>
        `;
        const wrapper = createWrapper(markup);
        const validationConfigsInstance1 = {
            required: { errorMessage: "SAME MESSAGE" },
            maxLength: { length: 100 },
        };
        const validationConfigsInstance2 = {
            required: { errorMessage: "SAME MESSAGE" },
            maxLength: { length: 100 },
        };

        wrapper.vm.$data.validatorConfigs = validationConfigsInstance1;
        await flushPromises();
        wrapper.vm.$data.validatorConfigs = validationConfigsInstance2;
        await flushPromises();

        const element = wrapper.get("input").element;
        expect(addValidatorsToElement).toHaveBeenNthCalledWith(1, element, {
            maxLength: {},
            required: {
                errorMessage: "INITIAL MESSAGE",
            },
        });
        expect(addValidatorsToElement).toHaveBeenNthCalledWith(2, element, {
            maxLength: {
                length: 100,
            },
            required: {
                errorMessage: "SAME MESSAGE",
            },
        });
    });
});

it("should call ValidationService.removeValidatorsFromElement and emit 'component-unmount' event when element is removed", async () => {
    expect.assertions(2);
    const markup = /* HTML */ `
        <div @component-unmount="onComponentUnmount">
            <f-text-field
                v-if="exists"
                id="text-field-id"
                v-validation.required.maxLength="{ maxLength: { length: 50 } }"
            >
                some label
            </f-text-field>
        </div>
    `;
    const wrapper = createWrapper(markup);
    const textField = wrapper.getComponent(FTextField);
    const validatableElement = textField.element.querySelector("input");
    wrapper.vm.$data.exists = false;
    await flushPromises();

    expect(removeValidatorsFromElement).toHaveBeenNthCalledWith(
        1,
        validatableElement,
    );
    expect(wrapper.vm.$data.componentUnmountCalled).toBeTruthy();
});

it("should add prefix to component-validity event errorMessage when inserted to parent", async () => {
    const TestComponent = defineComponent({
        extends: BaseComponent,
        template: /* HTML */ `
            <div @component-validity="onComponentValidity">
                <div v-validation-prefix="'PREFIX '">
                    <f-text-field
                        v-validation.required.maxLength="{ maxLength: { length: 100 } }"
                    >
                        some label
                    </f-text-field>
                </div>
            </div>
        `,
        emits: ["error"],
        methods: {
            onComponentValidity(event: CustomEvent<ComponentValidityEvent>) {
                this.$emit("error", event.detail.errorMessage);
            },
        },
    });

    const wrapper = mount(TestComponent, {
        global: {
            plugins: [ValidationPlugin],
        },
    });

    await wrapper.vm.$nextTick();

    const input = wrapper.get("input");
    const vevent: ComponentValidityEvent = {
        target: input.element as ValidatableHTMLElement,
        elementId: input.element.id,
        isValid: false,
        validationMessage: "bad",
        validityMode: "ERROR",
        focusElementId: input.element.id,
        errorMessage: "originalMessage",
        nativeEvent: "validate",
    };

    dispatchComponentValidityEvent(input.element, vevent);
    await wrapper.vm.$nextTick();

    const events = wrapper.emitted("error")!;
    expect(events).toHaveLength(2);
    expect(events[0]).toEqual(["PREFIX some label"]);
    expect(events[1]).toEqual(["PREFIX originalMessage"]);
});
