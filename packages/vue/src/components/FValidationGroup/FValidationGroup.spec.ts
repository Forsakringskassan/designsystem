import "html-validate/vitest";
import { defineComponent } from "vue";
import { type ValidatableHTMLElement } from "@fkui/logic";
import { flushPromises, mount } from "@vue/test-utils";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
    type ComponentUnmountEvent,
    type ComponentValidityEvent,
    type GroupValidityEvent,
} from "../../types";
import FValidationGroup from "./FValidationGroup.vue";

beforeEach(() => {
    vi.useFakeTimers();
});

afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
});

function triggerComponentValidityEvent(
    validatableElement: ValidatableHTMLElement,
    detail: Partial<ComponentValidityEvent> = {},
): void {
    const event = new CustomEvent<ComponentValidityEvent>(
        "component-validity",
        {
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
        },
    );
    validatableElement.dispatchEvent(event);
}

function triggerComponentUnmountEvent(
    validatableElement: ValidatableHTMLElement,
): void {
    const event = new CustomEvent<ComponentUnmountEvent>("component-unmount", {
        detail: {
            elementId: validatableElement.id,
        },
        bubbles: true,
    });
    validatableElement.dispatchEvent(event);
}

describe("events", () => {
    it("should trigger group-validity event after componentValidity event is triggered", async () => {
        expect.assertions(1);
        const wrapper = mount(FValidationGroup, {
            slots: {
                default: /* HTML */ `
                    <input id="input1" />
                    <input id="input2" />
                `,
            },
        });
        const input = wrapper.get<HTMLInputElement>("#input1");
        triggerComponentValidityEvent(input.element);
        vi.runAllTimers();
        await flushPromises();
        expect(wrapper.emitted("group-validity")).toHaveLength(1);
    });

    /* eslint-disable-next-line vitest/no-disabled-tests -- technical debt: flaky test */
    it.skip.each`
        stopPropagation | expectedEvent
        ${true}         | ${false}
        ${false}        | ${true}
    `(
        'should propagate componentValidityEvent = $expectedEvent when stopPropagation="$stopPropagation"',
        async ({ stopPropagation, expectedEvent }) => {
            expect.assertions(1);
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
                                :stopPropagation="${String(stopPropagation)}"
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
        expect.assertions(2);
        const wrapper = mount(FValidationGroup, {
            slots: {
                default: /* HTML */ `
                    <input id="input1" />
                    <input id="input2" />
                `,
            },
        });
        const vGroup = wrapper.getComponent(FValidationGroup);
        const input1 = wrapper.get<HTMLInputElement>("#input1");
        triggerComponentValidityEvent(input1.element, { isValid: true });
        const input2 = wrapper.get<HTMLInputElement>("#input2");
        triggerComponentValidityEvent(input2.element, { isValid: true });

        vi.runAllTimers();
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
        expect.assertions(1);
        const wrapper = mount(FValidationGroup, {
            slots: {
                default: /* HTML */ `
                    <input id="input1" />
                    <input id="input2" />
                `,
            },
        });
        const input1 = wrapper.get<HTMLInputElement>("#input1");
        triggerComponentValidityEvent(input1.element, { isValid: true });
        const input2 = wrapper.get<HTMLInputElement>("#input2");
        triggerComponentValidityEvent(input2.element, { isValid: true });
        vi.runAllTimers();
        await flushPromises();
        expect(
            wrapper.emitted<GroupValidityEvent[]>("group-validity")![1][0]
                .isValid,
        ).toBeTruthy();
    });

    it("should emit isValid = false when some component is not valid", async () => {
        expect.assertions(1);
        const wrapper = mount(FValidationGroup, {
            slots: {
                default: /* HTML */ `
                    <input id="input1" />
                    <input id="input2" />
                `,
            },
        });
        const input1 = wrapper.get<HTMLInputElement>("#input1");
        triggerComponentValidityEvent(input1.element, { isValid: true });
        const input2 = wrapper.get<HTMLInputElement>("#input2");
        triggerComponentValidityEvent(input2.element, { isValid: false });
        vi.runAllTimers();
        await flushPromises();
        expect(
            wrapper.emitted<GroupValidityEvent[]>("group-validity")![1][0]
                .isValid,
        ).toBeFalsy();
    });

    it("should emit nothing when no components are registered", async () => {
        expect.assertions(1);
        const wrapper = mount(FValidationGroup, {
            slots: {
                default: /* HTML */ `
                    <input id="input1" />
                    <input id="input2" />
                `,
            },
        });
        await flushPromises();
        expect(wrapper.emitted("group-validity")).toBeUndefined();
    });

    it("should emit components with errors (validityMode = ERROR)", async () => {
        expect.assertions(2);
        const wrapper = mount(FValidationGroup, {
            slots: {
                default: /* HTML */ `
                    <input id="input1" />
                    <input id="input2" />
                `,
            },
        });
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
        vi.runAllTimers();
        await flushPromises();
        const event =
            wrapper.emitted<GroupValidityEvent[]>("group-validity")![1][0];
        expect(event.componentsWithError).toHaveLength(1);
        expect(event.componentsWithError[0].elementId).toBe("input2");
    });

    it("should emit components with errors in DOM-order", async () => {
        expect.assertions(3);
        const wrapper = mount(FValidationGroup, {
            slots: {
                default: /* HTML */ `
                    <input id="input1" />
                    <input id="input2" />
                `,
            },
        });
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
        vi.runAllTimers();
        await flushPromises();
        const event =
            wrapper.emitted<GroupValidityEvent[]>("group-validity")![1][0];
        expect(event.componentsWithError).toHaveLength(2);
        expect(event.componentsWithError[0].elementId).toBe("input1");
        expect(event.componentsWithError[1].elementId).toBe("input2");
    });

    it("should emit only components that still exists in DOM", async () => {
        expect.assertions(4);
        const wrapper = mount(FValidationGroup, {
            slots: {
                default: /* HTML */ `
                    <input id="input1" />
                    <input id="input2" />
                `,
            },
        });
        const input1 = wrapper.get<HTMLInputElement>("#input1");
        triggerComponentValidityEvent(input1.element, {
            isValid: false,
            validityMode: "ERROR",
        });

        input1.element.remove();

        // Process first event's timer before dispatching second event,
        // so cleanUpElements for event 2 sees the updated components state
        vi.runAllTimers();
        await flushPromises();

        const input2 = wrapper.get<HTMLInputElement>("#input2");
        triggerComponentValidityEvent(input2.element, {
            isValid: false,
            validityMode: "ERROR",
        });

        vi.runAllTimers();
        await flushPromises();

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
        expect.assertions(1);
        const wrapper = mount(FValidationGroup, {
            slots: {
                default: /* HTML */ `
                    <input id="input1" />
                    <input id="input2" />
                `,
            },
        });
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
        vi.runAllTimers();
        await flushPromises();

        const event =
            wrapper.emitted<GroupValidityEvent[]>("group-validity")![1][0];
        expect(event.componentCount).toBe(2);
    });
});

describe("v-model", () => {
    it("should not require v-model", async () => {
        expect.assertions(1);
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

        vi.runAllTimers();
        await flushPromises();
        wrapper.vm.$forceUpdate();

        expect(wrapper.vm.$data.groupValidityCalled).toBeTruthy();
    });
});

describe("html-validate", () => {
    describe("key attribute", () => {
        it("should be required", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-validation-group></f-validation-group>
                <f-validation-group key=""></f-validation-group>
            `;
            await expect(markup).toMatchInlineCodeframe(`
                "error: <f-validation-group> is missing required "key" attribute (element-required-attributes)
                  1 |
                > 2 |                 <f-validation-group></f-validation-group>
                    |                  ^^^^^^^^^^^^^^^^^^
                  3 |                 <f-validation-group key=""></f-validation-group>
                  4 |
                Selector: f-validation-group:nth-child(1)
                error: Attribute "key" has invalid value "" (attribute-allowed-values)
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
        it("valid", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-validation-group
                    stop-propagation="true"
                    key="key"
                ></f-validation-group>
                <f-validation-group
                    stop-propagation="false"
                    key="key"
                ></f-validation-group>
            `;
            await expect(markup).toBeValid();
        });

        it("invalid", async () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-validation-group
                    stop-propagation="invalid"
                    key="key"
                ></f-validation-group>
            `;
            await expect(markup).toMatchInlineCodeframe(`
                "error: Attribute "stop-propagation" has invalid value "invalid" (attribute-allowed-values)
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
