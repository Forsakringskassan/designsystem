import "html-validate/jest";
import flushPromises from "flush-promises";
import { defineComponent } from "vue";
import { VueWrapper, mount } from "@vue/test-utils";
import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import { ValidationPlugin } from "../../../plugins";
import { FTextField } from "../../FTextField";
import FModal from "../FModal.vue";
import { FFormModalAction } from "./action";
import FFormModal from "./FFormModal.vue";

function generateFFormModalTemplate(errorMessage: string): string {
    return /* HTML */ `
        <f-form-modal use-error-list is-open>
            <template #error-message>${errorMessage}</template>
            <template #input-text-fields>
                <f-text-field
                    id="field1"
                    v-model="field1"
                    v-validation.required
                >
                    Field1
                </f-text-field>
                <f-text-field
                    id="field2"
                    v-model="field2"
                    v-validation.required
                >
                    Field2
                </f-text-field>
            </template>
        </f-form-modal>
    `;
}

function createWrapper(
    errorMessage: string,
    { props = {}, slots = {}, attrs = {} } = {},
): VueWrapper<InstanceType<typeof TestComponent>> {
    const TestComponent = defineComponent({
        name: "TestComponent",
        components: {
            FFormModal,
            FTextField,
        },
        template: generateFFormModalTemplate(errorMessage),
        data() {
            return {
                field1: "",
                field2: "",
            };
        },
    });

    return mount(TestComponent, {
        attrs: { ...attrs },
        props: { id: "test-id", ...props },
        slots: { ...slots },
        attachTo: createPlaceholderInDocument(),
        global: {
            plugins: [ValidationPlugin],
        },
    });
}

async function doTriggerSubmit(wrapper: VueWrapper): Promise<void> {
    const formElement = wrapper.get("form");
    await formElement.trigger("submit");
    await wrapper.vm.$nextTick();
    await flushPromises();
    await wrapper.vm.$nextTick();
    await flushPromises();
    await wrapper.vm.$nextTick();
    await flushPromises();
}

describe("events", () => {
    it('should send "cancel" and "close" event on close button clicked', async () => {
        const wrapper = mount(FFormModal, {
            props: {
                isOpen: true,
            },
        });
        const closeElement = wrapper.get(".close-button");
        await closeElement.trigger("click");
        expect(wrapper.emitted().cancel).toBeTruthy();
        expect(wrapper.emitted().close).toBeTruthy();
    });

    it('should send "cancel" and "close" event on cancel button clicked', async () => {
        const wrapper = mount(FFormModal, {
            props: {
                isOpen: true,
            },
        });
        const closeElement = wrapper.get(".button--secondary");
        await closeElement.trigger("click");
        expect(wrapper.emitted().cancel).toBeTruthy();
        expect(wrapper.emitted().close).toBeTruthy();
    });

    it('should send "submit" and "close" event on submit button clicked', async () => {
        const wrapper = mount(FFormModal, {
            props: {
                isOpen: true,
            },
        });

        await doTriggerSubmit(wrapper);
        expect(wrapper.emitted().submit).toBeTruthy();
        expect(wrapper.emitted().close).toBeTruthy();
    });

    it('should call "beforeSubmit" when it is provided and submit button clicked', async () => {
        const beforeSubmit = jest.fn();
        const wrapper = mount(FFormModal, {
            props: {
                isOpen: true,
                beforeSubmit: beforeSubmit,
            },
        });
        expect(beforeSubmit).toHaveBeenCalledTimes(0);

        await doTriggerSubmit(wrapper);

        expect(beforeSubmit).toHaveBeenCalledTimes(1);
    });

    it("should not emit submit when beforeSubmit returns CANCEL", async () => {
        function onBeforeSubmit(): FFormModalAction {
            return FFormModalAction.CANCEL;
        }
        const wrapper = mount(FFormModal, {
            props: {
                isOpen: true,
                beforeSubmit: onBeforeSubmit,
            },
        });

        await doTriggerSubmit(wrapper);

        expect(wrapper.emitted().submit).toBeFalsy();
    });

    it("should emit submit when beforeSubmit returns CONTINUE", async () => {
        function onBeforeSubmit(): FFormModalAction {
            return FFormModalAction.CONTINUE;
        }
        const wrapper = mount(FFormModal, {
            props: {
                isOpen: true,
                beforeSubmit: onBeforeSubmit,
            },
        });

        await doTriggerSubmit(wrapper);

        expect(wrapper.emitted().submit).toBeTruthy();
    });

    it("should emit submit when beforeSubmit returns undefined", async () => {
        function onBeforeSubmit(): void {
            return;
        }
        const wrapper = mount(FFormModal, {
            props: {
                isOpen: true,
                beforeSubmit: onBeforeSubmit,
            },
        });

        await doTriggerSubmit(wrapper);

        expect(wrapper.emitted().submit).toBeTruthy();
    });

    it("should emit submit when beforeSubmit props not set (default)", async () => {
        const wrapper = mount(FFormModal, {
            props: {
                isOpen: true,
            },
        });

        await doTriggerSubmit(wrapper);

        expect(wrapper.emitted().submit).toBeTruthy();
    });

    it("should contain the submitted data on submit", async () => {
        const errorMessage = "";
        const wrapper = createWrapper(errorMessage);

        await wrapper.vm.$nextTick();

        const field1 = wrapper.find("#field1");
        await field1.setValue("foo");
        await wrapper.vm.$nextTick();
        await field1.trigger("blur");
        await wrapper.vm.$nextTick();

        const field2 = wrapper.find("#field2");
        await field2.setValue("bar");
        await wrapper.vm.$nextTick();
        await field2.trigger("blur");
        await wrapper.vm.$nextTick();

        await wrapper.find('[type="submit"]').trigger("click");
        await wrapper.vm.$nextTick();
        await flushPromises();
        await wrapper.vm.$nextTick();
        await flushPromises();

        expect(wrapper.vm.$data["field1"]).toBe("foo");
        expect(wrapper.vm.$data["field2"]).toBe("bar");
    });
});

describe("slots", () => {
    it("should change header via slot", () => {
        const headerText = "foo header";
        const wrapper = mount(FFormModal, {
            props: {
                isOpen: true,
            },
            slots: {
                header: headerText,
            },
        });

        const header = wrapper.find("h1");
        expect(header.text()).toBe(headerText);
    });

    it("should change header content via slot", () => {
        const contentText = "bar content";
        const wrapper = mount(FFormModal, {
            props: {
                isOpen: true,
            },
            slots: {
                header: /* HTML */ ` <pre>${contentText}</pre> `,
            },
        });

        const content = wrapper.find("pre");
        expect(content.text()).toBe(contentText);
    });

    it("should change default content via slot", () => {
        const contentText = "bar content";
        const wrapper = mount(FFormModal, {
            props: {
                isOpen: true,
            },
            slots: {
                default: `${contentText}`,
            },
        });

        const content = wrapper.find(".modal__content div");
        expect(content.text()).toContain(contentText);
    });

    it("should add error message text via slot when using error list", async () => {
        const errorMessage = "foo message";
        const wrapper = createWrapper(errorMessage);

        await wrapper.vm.$nextTick();
        await wrapper.find('[type="submit"]').trigger("click");
        await wrapper.vm.$nextTick();
        await flushPromises();
        await wrapper.vm.$nextTick();
        await flushPromises();

        const error = wrapper.find(".error-list");
        expect(error.text()).toContain(errorMessage);
    });
});

describe("props", () => {
    describe("size", () => {
        it.each`
            size            | className
            ${"small"}      | ${"modal__dialog-container--small"}
            ${"large"}      | ${"modal__dialog-container--large"}
            ${"fullwidth"}  | ${"modal__dialog-container--fullwidth"}
            ${"fullscreen"} | ${"modal__dialog-container--fullwidth"}
        `(
            "'$size' should be reflected in applied class name.",
            async ({ size, className }) => {
                const wrapper = mount(FFormModal, {
                    props: {
                        size,
                    },
                });
                const container = wrapper.get(".modal__dialog-container");
                expect(container.classes()).toContain(className);
            },
        );
    });

    it("should passs ariaCloseText to FModal", async () => {
        const wrapper = mount(FFormModal, {
            props: {
                isOpen: true,
                ariaCloseText: "CLOSE_TEXT",
            },
            slots: {},
        });

        const fmodal = wrapper.getComponent(FModal);
        expect(fmodal.vm.$props["ariaCloseText"]).toBe("CLOSE_TEXT");
    });

    it("should append screenreader text if given", () => {
        const wrapper = mount(FFormModal, {
            props: {
                isOpen: true,
                buttons: [
                    {
                        label: "Lorem ipsum",
                        screenreader: "with screenreader text",
                        type: "secondary",
                    },
                ],
            },
        });

        const button = wrapper.get(".button--secondary");
        const nbsp = "\xa0";
        expect(button.text()).toBe(`Lorem ipsum${nbsp}with screenreader text`);
    });

    it("should not append extra space if no screenreader text is given", () => {
        const wrapper = mount(FFormModal, {
            props: {
                isOpen: true,
                buttons: [{ label: "Lorem ipsum", type: "secondary" }],
            },
        });

        const button = wrapper.get(".button--secondary");
        expect(button.text()).toBe("Lorem ipsum");
    });
});

describe("html-validate", () => {
    it("should allow usage without attributes, no attributes required", () => {
        expect("<f-form-modal></f-form-modal>").toHTMLValidate();
    });

    it("should not allow an invalid form-id attribute", () => {
        expect('<f-form-modal form-id="1"></f-form-modal>').not.toHTMLValidate({
            ruleId: "attribute-allowed-values",
            message: 'Attribute "form-id" has invalid value "1"',
        });
    });

    describe("attributes", () => {
        const validSizes = ["small", "large", "fullwidth"];

        describe("is-open", () => {
            it("should allow boolean value", () => {
                expect.assertions(1);
                const markup = /* HTML */ `
                    <f-form-modal is-open></f-form-modal>
                    <f-form-modal :is-open="true"></f-form-modal>
                    <f-form-modal :is-open="false"></f-form-modal>
                `;
                expect(markup).toHTMLValidate();
            });

            it("should not allow empty string", () => {
                expect.assertions(1);
                const markup = /* HTML */ `
                    <f-form-modal is-open=""></f-form-modal>
                `;
                expect(markup).toMatchInlineCodeframe(`
                    "error: Attribute "is-open" should omit value (attribute-boolean-style) at inline:2:35:
                      1 |
                    > 2 |                     <f-form-modal is-open=""></f-form-modal>
                        |                                   ^^^^^^^
                      3 |
                    Selector: f-form-modal"
                `);
            });

            it("should not allow invalid values", () => {
                expect.assertions(1);
                const markup = /* HTML */ `
                    <f-form-modal is-open="invalid"></f-form-modal>
                `;
                expect(markup).toMatchInlineCodeframe(`
                    "error: Attribute "is-open" should omit value (attribute-boolean-style) at inline:2:35:
                      1 |
                    > 2 |                     <f-form-modal is-open="invalid"></f-form-modal>
                        |                                   ^^^^^^^
                      3 |
                    Selector: f-form-modal
                    error: Attribute "is-open" has invalid value "invalid" (attribute-allowed-values) at inline:2:44:
                      1 |
                    > 2 |                     <f-form-modal is-open="invalid"></f-form-modal>
                        |                                            ^^^^^^^
                      3 |
                    Selector: f-form-modal"
                `);
            });
        });

        describe("size", () => {
            it.each(validSizes)("%s", (size: string) => {
                expect.assertions(1);
                const markup = /* HTML */ `
                    <f-form-modal size="${size}"></f-form-modal>
                `;
                expect(markup).toHTMLValidate();
            });

            it("fullscreen", () => {
                expect.assertions(1);
                const markup = /* HTML */ `
                    <f-form-modal size="fullscreen"></f-form-modal>
                `;
                expect(markup).toMatchInlineCodeframe(`
                    "error: Attribute "size" has invalid value "fullscreen" (attribute-allowed-values) at inline:2:41:
                      1 |
                    > 2 |                     <f-form-modal size="fullscreen"></f-form-modal>
                        |                                         ^^^^^^^^^^
                      3 |
                    Selector: f-form-modal"
                `);
            });

            it("invalid", () => {
                expect.assertions(1);
                const markup = /* HTML */ `
                    <f-form-modal size="invalid"></f-form-modal>
                `;
                expect(markup).toMatchInlineCodeframe(`
                    "error: Attribute "size" has invalid value "invalid" (attribute-allowed-values) at inline:2:41:
                      1 |
                    > 2 |                     <f-form-modal size="invalid"></f-form-modal>
                        |                                         ^^^^^^^
                      3 |
                    Selector: f-form-modal"
                `);
            });
        });
    });

    it.each`
        slotName               | html
        ${"header"}            | ${"<f-form-modal><template #header>Header</template></f-form-modal>"}
        ${"error-message"}     | ${"<f-form-modal><template #error-message>Error</template></f-form-modal>"}
        ${"input-text-fields"} | ${"<f-form-modal><template #input-text-fields></template></f-form-modal>"}
    `("should allow $slotName slot", ({ html }) => {
        expect.assertions(1);

        expect(html).toHTMLValidate();
    });
});
