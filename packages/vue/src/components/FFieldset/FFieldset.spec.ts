import "html-validate/jest";
import { defineComponent, h } from "vue";
import { VueWrapper, mount, shallowMount } from "@vue/test-utils";
import {
    type ValidityEvent,
    type ValidatableHTMLElement,
    type ValidityMode,
} from "@fkui/logic";
import flushPromises from "flush-promises";
import { ComponentValidityEvent } from "../../types";
import { FIcon } from "../FIcon";
import { getFieldsetLabelText } from "./FFieldsetProvide";
import FFieldset from "./FFieldset.vue";

const defaultSlots = { label: "Label", default: "Content" };

function createWrapper({
    props = {},
    slots = {},
    attrs = {},
    stubs = [],
} = {}): VueWrapper {
    return mount(FFieldset, {
        attrs: { ...attrs },
        props: { id: "someId", name: "someName", ...props },
        slots: { ...slots },
        global: {
            stubs: ["FIcon", ...stubs],
        },
    });
}

function dispatchValidityEvent(
    wrapper: VueWrapper,
    isValid: boolean,
    validityMode: ValidityMode,
    target?: ValidatableHTMLElement,
): void {
    if (!target) {
        target = document.createElement("input");
        target.setAttribute("id", "elementId");
        target.setAttribute("type", "radio");
        wrapper.element.appendChild(target);
    }

    wrapper.element.dispatchEvent(
        new CustomEvent<ValidityEvent>("validity", {
            detail: {
                target,
                elementId: "elementId",
                isValid,
                validityMode,
                validationMessage: "Something went wrong.",
                nativeEvent: "validate",
            },
        }),
    );
}

describe("snapshots", () => {
    it("should match snapshot with generated id attribute", () => {
        const wrapper = createWrapper({ props: { id: undefined } });
        expect(wrapper).toMatchSnapshot();
    });

    it("should match snapshot with label and content", () => {
        const wrapper = createWrapper({ slots: defaultSlots });
        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with label, content and error message", () => {
        const wrapper = createWrapper({
            slots: {
                "error-message": "Something went wrong.",
                ...defaultSlots,
            },
        });

        expect(wrapper.element).toMatchSnapshot();
    });

    it("should match snapshot with label, content and tooltip", () => {
        const wrapper = createWrapper({
            slots: { tooltip: "Tooltip", ...defaultSlots },
        });

        expect(wrapper.element).toMatchSnapshot();
    });

    it.each`
        validityMode | isValid
        ${"VALID"}   | ${true}
        ${"ERROR"}   | ${false}
        ${"INITIAL"} | ${true}
        ${"INITIAL"} | ${false}
    `(
        "should match snapshot when validityMode is $validityMode",
        async ({ validityMode, isValid }) => {
            const wrapper = createWrapper({
                slots: { label: "Label" },
                attrs: { id: "elementId" },
            });

            dispatchValidityEvent(
                wrapper,
                isValid,
                validityMode,
                wrapper.element as ValidatableHTMLElement,
            );

            await flushPromises();
            wrapper.vm.$forceUpdate();

            expect(wrapper.element).toMatchSnapshot();
        },
    );
});

it("should provide injection for label (legend) text", () => {
    const ChildComponent = defineComponent({
        inject: { getFieldsetLabelText },
        render() {
            return h("div");
        },
    });
    const wrapper = createWrapper({
        slots: {
            label: "Label text",
            default: ChildComponent,
        },
    });

    /* eslint-disable @typescript-eslint/no-explicit-any -- technical debt,
     * should not test methods directly or at least use a proper interface */
    expect(
        (
            wrapper.findComponent(ChildComponent).vm as any
        ).getFieldsetLabelText(),
    ).toBe("Label text");
    /* eslint-enable */
});

describe("attributes", () => {
    it("should pass attributes", () => {
        const wrapper = createWrapper({
            attrs: {
                disabled: true,
                required: true,
                class: "passed-class",
            },
        });
        const fieldset = wrapper.get("fieldset");

        expect(fieldset.attributes("disabled")).toBeDefined();
        expect(fieldset.attributes("required")).toBeDefined();
        expect(fieldset.attributes("class")).toBe("fieldset passed-class");
    });

    it("should only set content class if contentClass prop is set", () => {
        expect.assertions(2);
        const withClass = shallowMount(FFieldset, {
            props: { contentClass: "foo" },
        });
        const withoutClass = shallowMount(FFieldset, {
            props: {},
        });
        expect(withClass.find("div").attributes("class")).toBe(
            "fieldset__content foo",
        );
        expect(withoutClass.find("div").attributes("class")).toBe(
            "fieldset__content",
        );
    });
});

describe("should display error icon when error is present", () => {
    it("without tooltip", async () => {
        expect.assertions(2);
        const wrapper = createWrapper({
            slots: { label: "Label" },
            attrs: { id: "elementId" },
        });
        dispatchValidityEvent(
            wrapper,
            false,
            "ERROR",
            wrapper.element as ValidatableHTMLElement,
        );
        await flushPromises();
        const icon = wrapper.findComponent(FIcon);
        expect(icon.exists()).toBeTruthy();
        expect(icon.attributes("name")).toBe("error");
    });

    it("with tooltip", async () => {
        expect.assertions(2);
        const wrapper = createWrapper({
            slots: { label: "Label", tooltip: "Tooltip" },
            attrs: { id: "elementId" },
        });
        dispatchValidityEvent(
            wrapper,
            false,
            "ERROR",
            wrapper.element as ValidatableHTMLElement,
        );
        await flushPromises();
        const icon = wrapper.findComponent(FIcon);
        expect(icon.exists()).toBeTruthy();
        expect(icon.attributes("name")).toBe("error");
    });
});

describe("events", () => {
    it("should pass listeners", async () => {
        const foobar = jest.fn();
        const wrapper = createWrapper({
            attrs: { onFoobar: foobar },
        });
        const element = wrapper.get("fieldset");
        await element.trigger("foobar");
        expect(foobar).toHaveBeenCalled();
    });
});

describe("onValidity should only handle events from itself", () => {
    it("handles events if event.target is itself", async () => {
        const wrapper = createWrapper({
            slots: { label: "Label" },
            attrs: { id: "elementId" },
        });
        const onComponentValidityListener = jest.fn();
        wrapper.element.addEventListener(
            "component-validity",
            onComponentValidityListener,
        );

        dispatchValidityEvent(
            wrapper,
            false,
            "INITIAL",
            wrapper.element as ValidatableHTMLElement,
        );

        await flushPromises();
        wrapper.vm.$forceUpdate();

        expect(onComponentValidityListener).toHaveBeenCalled();
    });

    it.each`
        element       | inputType     | description
        ${"input"}    | ${"radio"}    | ${"should not"}
        ${"input"}    | ${"checkbox"} | ${"should not"}
        ${"input"}    | ${"text"}     | ${"should not"}
        ${"textarea"} | ${undefined}  | ${"should not"}
        ${"select"}   | ${undefined}  | ${"should not"}
    `(
        "$description dispatch component-validity event if element is $element and type is $inputType",
        ({ element, inputType }) => {
            const wrapper = createWrapper({
                slots: { label: "Label" },
                attrs: { id: "elementId" },
            });
            const onComponentValidityListener = jest.fn();
            wrapper.element.addEventListener(
                "component-validity",
                onComponentValidityListener,
            );
            const inputElement = document.createElement(element);
            inputElement.setAttribute("id", "elementId");
            inputElement.setAttribute("type", inputType);
            wrapper.element.appendChild(inputElement);

            dispatchValidityEvent(wrapper, false, "INITIAL", inputElement);
            expect(onComponentValidityListener).not.toHaveBeenCalled();
        },
    );

    it.each`
        inputType
        ${"radio"}
        ${"checkbox"}
    `(
        "should not dispatch component-validity event if input $inputType belongs to nestled fieldset",
        ({ inputType }) => {
            const wrapper = createWrapper({
                slots: { label: "Label" },
                attrs: { id: "elementId" },
            });
            const onComponentValidityListener = jest.fn();
            wrapper.element.addEventListener(
                "component-validity",
                onComponentValidityListener,
            );

            const fieldset = document.createElement("fieldset");
            wrapper.element.appendChild(fieldset);

            const inputElement = document.createElement("input");
            inputElement.setAttribute("id", "elementId");
            inputElement.setAttribute("type", inputType);

            fieldset.appendChild(inputElement);

            dispatchValidityEvent(wrapper, false, "INITIAL", inputElement);
            expect(onComponentValidityListener).not.toHaveBeenCalled();
        },
    );
});

describe("onValidity should set focusElementId in ComponentValidityEvent", () => {
    it("should set focusElementId to own id if having no child input element", async () => {
        const wrapper = createWrapper({
            slots: { label: "Label" },
            props: { id: "elementId" },
        });
        const onComponentValidityListener = jest.fn();
        wrapper.element.addEventListener(
            "component-validity",
            onComponentValidityListener,
        );

        dispatchValidityEvent(
            wrapper,
            false,
            "INITIAL",
            wrapper.element as ValidatableHTMLElement,
        );

        await flushPromises();
        wrapper.vm.$forceUpdate();

        const componentValidityEvent = onComponentValidityListener.mock
            .calls[0][0].detail as ComponentValidityEvent;
        expect(componentValidityEvent.elementId).toBe("elementId");
        expect(componentValidityEvent.focusElementId).toBe("elementId");
    });

    it("should set focusElementId to first child input element", async () => {
        const wrapper = createWrapper({
            slots: { label: "Label" },
            props: { id: "elementId" },
        });
        const onComponentValidityListener = jest.fn();
        wrapper.element.addEventListener(
            "component-validity",
            onComponentValidityListener,
        );

        const inputElement1 = document.createElement("input");
        inputElement1.setAttribute("id", "child1Id");
        wrapper.element.appendChild(inputElement1);

        const inputElement2 = document.createElement("input");
        inputElement2.setAttribute("id", "child2Id");
        wrapper.element.appendChild(inputElement2);

        dispatchValidityEvent(
            wrapper,
            false,
            "INITIAL",
            wrapper.element as ValidatableHTMLElement,
        );

        await flushPromises();
        wrapper.vm.$forceUpdate();

        const componentValidityEvent = onComponentValidityListener.mock
            .calls[0][0].detail as ComponentValidityEvent;
        expect(componentValidityEvent.elementId).toBe("elementId");
        expect(componentValidityEvent.focusElementId).toBe("child1Id");
    });
});

describe("html-validate", () => {
    describe("content model", () => {
        it("should be allowed where flow is expected", () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <div>
                    <f-fieldset name="foo">
                        <template #label> Label </template>
                    </f-fieldset>
                </div>
            `;
            expect(markup).toMatchInlineCodeframe(`""`);
        });

        it("should not be allowed where phrasing is expected", () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <span>
                    <f-fieldset name="foo">
                        <template #label> Label </template>
                    </f-fieldset>
                </span>
            `;
            expect(markup).toMatchInlineCodeframe(`""`);
        });
    });

    describe("props", () => {
        it("should allow non-empty name", () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-fieldset name="foo">
                    <template #label> Label </template>
                </f-fieldset>
            `;
            expect(markup).toMatchInlineCodeframe(`""`);
        });

        it("should not allow empty name", () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-fieldset name>
                    <template #label> Label </template>
                </f-fieldset>
                <f-fieldset name="">
                    <template #label> Label </template>
                </f-fieldset>
            `;
            expect(markup).toMatchInlineCodeframe(`
                "error: Attribute "name" is missing value (attribute-allowed-values) at inline:2:29:
                  1 |
                > 2 |                 <f-fieldset name>
                    |                             ^^^^
                  3 |                     <template #label> Label </template>
                  4 |                 </f-fieldset>
                  5 |                 <f-fieldset name="">
                Selector: f-fieldset:nth-child(1)
                error: Attribute "name" has invalid value "" (attribute-allowed-values) at inline:5:29:
                  3 |                     <template #label> Label </template>
                  4 |                 </f-fieldset>
                > 5 |                 <f-fieldset name="">
                    |                             ^^^^
                  6 |                     <template #label> Label </template>
                  7 |                 </f-fieldset>
                  8 |
                Selector: f-fieldset:nth-child(2)"
            `);
        });

        it("should allow content class", () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-fieldset content-class="foo">
                    <template #label> Label </template>
                </f-fieldset>
            `;
            expect(markup).toMatchInlineCodeframe(`""`);
        });

        it("should not allow multiple content classes", () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-fieldset content-class="foo bar">
                    <template #label> Label </template>
                </f-fieldset>
            `;
            expect(markup).toMatchInlineCodeframe(`
                "error: Attribute "content-class" has invalid value "foo bar" (attribute-allowed-values) at inline:2:44:
                  1 |
                > 2 |                 <f-fieldset content-class="foo bar">
                    |                                            ^^^^^^^
                  3 |                     <template #label> Label </template>
                  4 |                 </f-fieldset>
                  5 |
                Selector: f-fieldset"
            `);
        });

        it("should allow label class", () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-fieldset label-class="foo">
                    <template #label> Label </template>
                </f-fieldset>
            `;
            expect(markup).toMatchInlineCodeframe(`""`);
        });

        it("should not allow multiple label classes", () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-fieldset label-class="foo bar">
                    <template #label> Label </template>
                </f-fieldset>
            `;
            expect(markup).toMatchInlineCodeframe(`
                "error: Attribute "label-class" has invalid value "foo bar" (attribute-allowed-values) at inline:2:42:
                  1 |
                > 2 |                 <f-fieldset label-class="foo bar">
                    |                                          ^^^^^^^
                  3 |                     <template #label> Label </template>
                  4 |                 </f-fieldset>
                  5 |
                Selector: f-fieldset"
            `);
        });
    });

    describe("slots", () => {
        it("should require label slot", () => {
            expect.assertions(1);
            const markup = /* HTML */ ` <f-fieldset> </f-fieldset> `;
            expect(markup).toMatchInlineCodeframe(`
                "error: <f-fieldset> component requires slot "label" to be implemented (vue/required-slots) at inline:1:3:
                > 1 |  <f-fieldset> </f-fieldset>
                    |   ^^^^^^^^^^
                Selector: f-fieldset"
            `);
        });

        it("should allow phrasing in label slot", () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-fieldset>
                    <template #label>
                        <span> Label </span>
                    </template>
                </f-fieldset>
            `;
            expect(markup).toMatchInlineCodeframe(`""`);
        });

        it("should allow headings in label slot", () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-fieldset>
                    <template #label>
                        <h2>Label</h2>
                    </template>
                </f-fieldset>
            `;
            expect(markup).toMatchInlineCodeframe(`""`);
        });

        it("should not allow block elements in label slot", () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-fieldset>
                    <template #label>
                        <div>Label</div>
                    </template>
                </f-fieldset>
            `;
            expect(markup).toMatchInlineCodeframe(`
                "error: <div> element is not permitted as content under slot "label" (<f-fieldset>) (element-permitted-content) at inline:4:26:
                  2 |                 <f-fieldset>
                  3 |                     <template #label>
                > 4 |                         <div>Label</div>
                    |                          ^^^
                  5 |                     </template>
                  6 |                 </f-fieldset>
                  7 |
                Selector: f-fieldset > template > div"
            `);
        });

        it("should allow phrasing in description slot", () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-fieldset>
                    <template #label> Label </template>
                    <template #description>
                        <span> Lorem ipsum </span>
                    </template>
                </f-fieldset>
            `;
            expect(markup).toMatchInlineCodeframe(`""`);
        });

        it("should not allow block elements in description slot", () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-fieldset>
                    <template #label> Label </template>
                    <template #description>
                        <div>Lorem ipsum</div>
                    </template>
                </f-fieldset>
            `;
            expect(markup).toMatchInlineCodeframe(`
                "error: <div> element is not permitted as content under slot "description" (<f-fieldset>) (element-permitted-content) at inline:5:26:
                  3 |                     <template #label> Label </template>
                  4 |                     <template #description>
                > 5 |                         <div>Lorem ipsum</div>
                    |                          ^^^
                  6 |                     </template>
                  7 |                 </f-fieldset>
                  8 |
                Selector: f-fieldset > template:nth-child(2) > div"
            `);
        });

        it("should allow f-tooltip in tooltip slot", () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-fieldset>
                    <template #label> Label </template>
                    <template #tooltip>
                        <f-tooltip screen-reader-text="lorem ipsum">
                            Lorem ipsum
                        </f-tooltip>
                    </template>
                </f-fieldset>
            `;
            expect(markup).toMatchInlineCodeframe(`""`);
        });

        it("should not allow arbitrary elements in tooltip slot", () => {
            expect.assertions(1);
            const markup = /* HTML */ `
                <f-fieldset>
                    <template #label> Label </template>
                    <template #tooltip>
                        <div>Lorem</div>
                        <span>ipsum</span>
                    </template>
                </f-fieldset>
            `;
            expect(markup).toMatchInlineCodeframe(`
                "error: <div> element is not permitted as content under slot "tooltip" (<f-fieldset>) (element-permitted-content) at inline:5:26:
                  3 |                     <template #label> Label </template>
                  4 |                     <template #tooltip>
                > 5 |                         <div>Lorem</div>
                    |                          ^^^
                  6 |                         <span>ipsum</span>
                  7 |                     </template>
                  8 |                 </f-fieldset>
                Selector: f-fieldset > template:nth-child(2) > div
                error: <span> element is not permitted as content under slot "tooltip" (<f-fieldset>) (element-permitted-content) at inline:6:26:
                  4 |                     <template #tooltip>
                  5 |                         <div>Lorem</div>
                > 6 |                         <span>ipsum</span>
                    |                          ^^^^
                  7 |                     </template>
                  8 |                 </f-fieldset>
                  9 |
                Selector: f-fieldset > template:nth-child(2) > span"
            `);
        });
    });

    describe("screen reader text", () => {
        it("one child should only have checkbox checked screen reader text", async () => {
            const TestComponent = defineComponent({
                components: { FFieldset },
                template: /* HTML */ `
                    <f-fieldset>
                        <input type="checkbox" />
                    </f-fieldset>
                `,
            });
            const wrapper = mount(TestComponent);
            await wrapper.vm.$nextTick();
            await wrapper.vm.$nextTick();
            await wrapper.vm.$nextTick();
            const element = wrapper.get("[data-test='checked-boxes']");
            expect(element.text()).toBe("Kryssruta ej kryssad");
        });

        it("other than one child should have numbers of and checked children screen reader text", async () => {
            const TestComponent = defineComponent({
                components: { FFieldset },
                template: /* HTML */ `
                    <f-fieldset>
                        <input type="checkbox" />
                        <input type="checkbox" />
                    </f-fieldset>
                `,
            });
            const wrapper = mount(TestComponent);
            await wrapper.vm.$nextTick();
            await wrapper.vm.$nextTick();
            await wrapper.vm.$nextTick();
            const content = wrapper.get("[data-test='checked-boxes']");
            const label = wrapper.get(".sr-only");
            expect(content.text()).toBe("0 kryssad av 2");
            expect(label.text()).toBe("Grupp med 2 kryssrutor");
        });

        it("no child should have no screen reader text", async () => {
            const TestComponent = defineComponent({
                components: { FFieldset },
                template: /* HTML */ ` <f-fieldset> </f-fieldset> `,
            });
            const wrapper = mount(TestComponent);
            await wrapper.vm.$nextTick();
            await wrapper.vm.$nextTick();
            await wrapper.vm.$nextTick();
            const content = wrapper.find("[data-test='checked-boxes']");
            const label = wrapper.find(".sr-only");
            expect(content.exists()).toBe(false);
            expect(label.exists()).toBe(false);
        });
    });
});
