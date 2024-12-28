import "html-validate/jest";
import { VueWrapper, mount } from "@vue/test-utils";
import { defineComponent } from "vue";
import { type ValidatableHTMLElement } from "@fkui/logic";
import flushPromises from "flush-promises";
import {
    cjsResolver,
    FileSystemConfigLoader,
    HtmlValidate,
} from "html-validate/node";
import {
    type ComponentUnmountEvent,
    type ComponentValidityEvent,
    type GroupValidityEvent,
} from "../../types";
import FValidationGroup from "./FValidationGroup.vue";

function createWrapper({ props = {}, stubs = [] as string[] }): VueWrapper {
    const slots = {
        default: '<input id="input1"> <input id="input2">',
    };

    return mount(FValidationGroup, {
        props: {
            modelValue: {
                isValid: false,
                componentsWithError: [],
                componentCount: 0,
            },
            ...props,
        },
        slots,
        global: {
            stubs: stubs,
        },
    });
}

afterEach(() => {
    jest.restoreAllMocks();
});

function triggerComponentValidityEvent(
    validatableElement: ValidatableHTMLElement,
    detail = {},
): void {
    validatableElement.dispatchEvent(
        new CustomEvent<ComponentValidityEvent>("component-validity", {
            detail: {
                target: validatableElement,
                elementId: validatableElement.id,
                isValid: true,
                validityMode: "ERROR",
                validationMessage: "A validationMessage",
                nativeEvent: "input",
                focusElementId: "focusElementId",
                errorMessage: "An errorMessage",
                ...detail,
            },
            bubbles: true,
        }),
    );
}

function triggerComponentUnmountEvent(
    validatableElement: ValidatableHTMLElement,
): void {
    validatableElement.dispatchEvent(
        new CustomEvent<ComponentUnmountEvent>("component-unmount", {
            detail: {
                elementId: validatableElement.id,
            },
            bubbles: true,
        }),
    );
}

describe("events", () => {
    it("should trigger group-validity event after componentValidity event is triggered", async () => {
        const wrapper = createWrapper({});
        const input = wrapper.get<HTMLInputElement>("#input1");
        triggerComponentValidityEvent(input.element);
        await flushPromises();
        wrapper.vm.$forceUpdate();

        expect(wrapper.emitted("group-validity")).toHaveLength(1);
    });

    /* eslint-disable-next-line jest/no-disabled-tests -- technical debt: flaky test */
    it.skip.each`
        stopPropagation | expectedEvent
        ${true}         | ${false}
        ${false}        | ${true}
    `(
        'should propagate componentValidityEvent = $expectedEvent when stopPropagation="$stopPropagation"',
        async ({ stopPropagation, expectedEvent }) => {
            const wrapper = mount(
                defineComponent({
                    name: "TestComponent",
                    components: {
                        FValidationGroup,
                    },
                    data() {
                        return {
                            group1: {},
                            componentValidityCalled: false,
                        };
                    },
                    methods: {
                        onComponentValidity() {
                            this.componentValidityCalled = true;
                        },
                    },
                    template: /* HTML */ `
                        <div @component-validity="onComponentValidity">
                            <f-validation-group
                                :value="group1"
                                :stopPropagation="${stopPropagation}"
                            >
                                <input id="input1" />
                            </f-validation-group>
                        </div>
                    `,
                }),
            );

            const input = wrapper.get<HTMLInputElement>("#input1");
            triggerComponentValidityEvent(input.element);

            await flushPromises();
            wrapper.vm.$forceUpdate();

            expect(wrapper.vm.$data.componentValidityCalled).toEqual(
                expectedEvent,
            );
        },
    );

    it("should delete components when unmounted", async () => {
        const wrapper = createWrapper({});
        const vGroup = wrapper.getComponent(FValidationGroup);
        const input1 = wrapper.get<HTMLInputElement>("#input1");
        triggerComponentValidityEvent(input1.element, { isValid: true });
        const input2 = wrapper.get<HTMLInputElement>("#input2");
        triggerComponentValidityEvent(input2.element, { isValid: true });

        await flushPromises();

        const event =
            vGroup.emitted<GroupValidityEvent[]>("group-validity")![1][0];
        expect(event.componentCount).toBe(2);

        triggerComponentUnmountEvent(input1.element);
        await flushPromises();

        const event2 =
            vGroup.emitted<GroupValidityEvent[]>("group-validity")![2][0];
        expect(event2.componentCount).toBe(1);
    });

    it("should emit isValid = true when all components are valid", async () => {
        const wrapper = createWrapper({});
        const input1 = wrapper.get<HTMLInputElement>("#input1");
        triggerComponentValidityEvent(input1.element, { isValid: true });
        const input2 = wrapper.get<HTMLInputElement>("#input2");
        triggerComponentValidityEvent(input2.element, { isValid: true });
        await flushPromises();
        wrapper.vm.$forceUpdate();
        expect(
            wrapper.emitted<GroupValidityEvent[]>("group-validity")![1][0]
                .isValid,
        ).toBeTruthy();
    });

    it("should emit isValid = false when some component is not valid", async () => {
        const wrapper = createWrapper({});
        const input1 = wrapper.get<HTMLInputElement>("#input1");
        triggerComponentValidityEvent(input1.element, { isValid: true });
        const input2 = wrapper.get<HTMLInputElement>("#input2");
        triggerComponentValidityEvent(input2.element, { isValid: false });
        await flushPromises();
        wrapper.vm.$forceUpdate();

        expect(
            wrapper.emitted<GroupValidityEvent[]>("group-validity")![1][0]
                .isValid,
        ).toBeFalsy();
    });

    it("should emit nothing when no components are registered", async () => {
        const wrapper = createWrapper({});
        await flushPromises();
        wrapper.vm.$forceUpdate();

        expect(wrapper.emitted("group-validity")).toBeUndefined();
    });

    it("should emit components with errors (validityMode = ERROR)", async () => {
        const wrapper = createWrapper({});
        const input1 = wrapper.get<HTMLInputElement>("#input1");
        triggerComponentValidityEvent(input1.element, {
            isValid: false,
            validityMode: "INITIAL",
        });
        const input2 = wrapper.get<HTMLInputElement>("#input2");
        triggerComponentValidityEvent(input2.element, {
            isValid: false,
            validityMode: "ERROR",
        });
        await flushPromises();
        wrapper.vm.$forceUpdate();

        const event =
            wrapper.emitted<GroupValidityEvent[]>("group-validity")![1][0];
        expect(event.componentsWithError).toHaveLength(1);
        expect(event.componentsWithError[0].elementId).toBe("input2");
    });

    it("should emit components with errors in DOM-order", async () => {
        const wrapper = createWrapper({});
        const input2 = wrapper.get<HTMLInputElement>("#input2");
        triggerComponentValidityEvent(input2.element, {
            isValid: false,
            validityMode: "ERROR",
        });
        const input1 = wrapper.get<HTMLInputElement>("#input1");
        triggerComponentValidityEvent(input1.element, {
            isValid: false,
            validityMode: "ERROR",
        });
        await flushPromises();
        wrapper.vm.$forceUpdate();

        const event =
            wrapper.emitted<GroupValidityEvent[]>("group-validity")![1][0];
        expect(event.componentsWithError).toHaveLength(2);
        expect(event.componentsWithError[0].elementId).toBe("input1");
        expect(event.componentsWithError[1].elementId).toBe("input2");
    });

    it("should emit only components that still exists in DOM", async () => {
        const wrapper = createWrapper({});
        const input1 = wrapper.get<HTMLInputElement>("#input1");
        triggerComponentValidityEvent(input1.element, {
            isValid: false,
            validityMode: "ERROR",
        });

        input1.element.parentElement?.removeChild(input1.element);

        const input2 = wrapper.get<HTMLInputElement>("#input2");
        triggerComponentValidityEvent(input2.element, {
            isValid: false,
            validityMode: "ERROR",
        });

        await flushPromises();
        wrapper.vm.$forceUpdate();

        const firstEvent =
            wrapper.emitted<GroupValidityEvent[]>("group-validity")![0][0];
        const secondEvent =
            wrapper.emitted<GroupValidityEvent[]>("group-validity")![1][0];
        expect(firstEvent.componentsWithError).toHaveLength(1);
        expect(firstEvent.componentsWithError[0].elementId).toBe("input1");
        expect(secondEvent.componentsWithError).toHaveLength(1);
        expect(secondEvent.componentsWithError[0].elementId).toBe("input2");
    });

    it("should emit component count", async () => {
        const wrapper = createWrapper({});
        const input2 = wrapper.get<HTMLInputElement>("#input2");
        const input1 = wrapper.get<HTMLInputElement>("#input1");
        triggerComponentValidityEvent(input1.element, {
            isValid: false,
            validityMode: "ERROR",
        });
        triggerComponentValidityEvent(input2.element, {
            isValid: false,
            validityMode: "INITIAL",
        });
        await flushPromises();
        wrapper.vm.$forceUpdate();

        const event =
            wrapper.emitted<GroupValidityEvent[]>("group-validity")![1][0];
        expect(event.componentCount).toBe(2);
    });
});

describe("v-model", () => {
    it("should not require v-model", async () => {
        const wrapper = mount(
            defineComponent({
                name: "TestComponent",
                components: {
                    FValidationGroup,
                },
                data() {
                    return {
                        groupValidityCalled: false,
                    };
                },
                methods: {
                    onGroupValidity() {
                        this.groupValidityCalled = true;
                    },
                },
                template: /* HTML */ `
                    <div>
                        <f-validation-group @group-validity="onGroupValidity">
                            <input id="input1" />
                        </f-validation-group>
                    </div>
                `,
            }),
        );

        const input = wrapper.get<HTMLInputElement>("#input1");
        triggerComponentValidityEvent(input.element);

        await flushPromises();
        wrapper.vm.$forceUpdate();

        expect(wrapper.vm.$data.groupValidityCalled).toBeTruthy();
    });
});

describe("html-validate", () => {
    const loader = new FileSystemConfigLoader([cjsResolver()], {
        extends: [
            "html-validate:recommended",
            "html-validate-vue:recommended",
            "@fkui/vue:recommended",
        ],
        plugins: ["<rootDir>/htmlvalidate", "html-validate-vue"],
    });
    const htmlvalidate = new HtmlValidate(loader);

    describe("key attribute", () => {
        it("should be required", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-validation-group></f-validation-group>
                <f-validation-group key=""></f-validation-group>
            `;
            const report = await htmlvalidate.validateString(markup);
            expect(report).toMatchInlineCodeframe(`
                "error: <f-validation-group> is missing required "key" attribute (element-required-attributes) at inline:2:18:
                  1 |
                > 2 |                 <f-validation-group></f-validation-group>
                    |                  ^^^^^^^^^^^^^^^^^^
                  3 |                 <f-validation-group key=""></f-validation-group>
                  4 |
                Selector: f-validation-group:nth-child(1)
                error: Attribute "key" has invalid value "" (attribute-allowed-values) at inline:3:37:
                  1 |
                  2 |                 <f-validation-group></f-validation-group>
                > 3 |                 <f-validation-group key=""></f-validation-group>
                    |                                     ^^^
                  4 |
                Selector: f-validation-group:nth-child(2)"
            `);
        });
    });

    describe("stop-propagation attribute", () => {
        it.each`
            stopPropagation
            ${"true"}
            ${"false"}
        `(
            "valid when value is $stopPropagation",
            async ({ stopPropagation }) => {
                expect.assertions(1);
                const markup = /* HTML */ `
                    <f-validation-group
                        stop-propagation="${stopPropagation}"
                        key="key"
                    ></f-validation-group>
                `;
                const report = await htmlvalidate.validateString(markup);
                expect(report).toBeValid();
            },
        );

        it("invalid", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-validation-group
                    stop-propagation="invalid"
                    key="key"
                ></f-validation-group>
            `;
            const report = await htmlvalidate.validateString(markup);
            expect(report).toMatchInlineCodeframe(`
                "error: Attribute "stop-propagation" has invalid value "invalid" (attribute-allowed-values) at inline:3:39:
                  1 |
                  2 |                 <f-validation-group
                > 3 |                     stop-propagation="invalid"
                    |                                       ^^^^^^^
                  4 |                     key="key"
                  5 |                 ></f-validation-group>
                  6 |
                Selector: f-validation-group"
            `);
        });
    });
});
