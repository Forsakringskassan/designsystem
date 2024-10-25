import { defineComponent, PropType, ref } from "vue";
import { FFormModal, FModal, FTextField } from "../components";
import { useModal } from "./use-modal";

interface FormData {
    name: string;
}

const page = {
    button: "button",
    pre: "pre",
    modal: ".modal__dialog-container",
    modalHeader: ".modal__header",
    modalContent: ".modal__content",
    modalDismiss: ".modal__dialog-container button.close-button",
    modalSubmit: ".modal__dialog-container button[type=submit]",
    modalFormInput: ".modal__dialog-container input",
};

it("openModal() should open modal", () => {
    const MockModal = defineComponent({
        template: /* HTML */ `
            <f-modal>
                <template #header> Awesome Modal </template>
                <template #content> {{ content }} </template>
            </f-modal>
        `,
        components: { FModal },
        props: {
            content: {
                type: String,
                required: true,
            },
        },
    });
    const TestComponent = defineComponent({
        template: /* HTML */ `
            <button type="button" @click="onClick">Open modal</button>
            <pre>{{ result }}</pre>
        `,
        setup() {
            const { openModal } = useModal();
            const result = ref("");
            async function onClick(): Promise<void> {
                const data = await openModal(MockModal, {
                    props: {
                        content: "Lorem ipsum dolor sit amet",
                    },
                });
                result.value = JSON.stringify(data);
            }
            return { result, onClick };
        },
    });
    cy.mount(TestComponent);
    cy.get(page.modal).should("not.exist");
    cy.get("button").click();
    cy.get(page.modal).should("be.visible");
    cy.get(page.modalHeader).should("contain.text", "Awesome Modal");
    cy.get(page.modalContent).should(
        "contain.text",
        "Lorem ipsum dolor sit amet",
    );
    cy.get(page.modalDismiss).click();
    cy.get(page.modal).should("not.exist");
    cy.get(page.pre).should("have.text", JSON.stringify({ reason: "close" }));
});

it("confirmModal() should open a confirmation modal", () => {
    const TestComponent = defineComponent({
        template: /* HTML */ `
            <button type="button" @click="onClick">Open modal</button>
            <pre>{{ result }}</pre>
        `,
        setup() {
            const { confirmModal } = useModal();
            const result = ref("");
            async function onClick(): Promise<void> {
                const data = await confirmModal({
                    heading: "Awesome Modal",
                    content: "Lorem ipsum dolor sit amet",
                    confirm: "Yeah",
                    dismiss: "Nope",
                });
                result.value = JSON.stringify(data);
            }
            return { result, onClick };
        },
    });
    cy.mount(TestComponent);
    cy.get(page.modal).should("not.exist");
    cy.get("button").click();
    cy.get(page.modal).should("be.visible");
    cy.get(page.modalHeader).should("contain.text", "Awesome Modal");
    cy.get(page.modalContent).should(
        "contain.text",
        "Lorem ipsum dolor sit amet",
    );
    cy.get(page.modalDismiss).click();
    cy.get(page.modal).should("not.exist");
    cy.get(page.pre).should("have.text", JSON.stringify(false));
});

it("formModal() should open form modal", () => {
    const MockModal = defineComponent({
        template: /* HTML */ `
            <f-form-modal :value>
                <template #header> Awesome Modal </template>
                <template #input-text-fields>
                    <f-text-field v-model="value.name">
                        Awesome Field
                    </f-text-field>
                </template>
            </f-form-modal>
        `,
        components: { FFormModal, FTextField },
        props: {
            value: {
                type: Object as PropType<FormData>,
                required: true,
            },
        },
    });
    const TestComponent = defineComponent({
        template: /* HTML */ `
            <button type="button" @click="onClick">Open modal</button>
            <pre>{{ result }}</pre>
        `,
        setup() {
            const { formModal } = useModal();
            const result = ref("");
            async function onClick(): Promise<void> {
                const value = {
                    name: "Kalle Anka",
                } satisfies FormData;
                const data = await formModal(MockModal, {
                    props: {
                        value,
                    },
                });
                result.value = JSON.stringify(data);
            }
            return { result, onClick };
        },
    });
    cy.mount(TestComponent);
    cy.get(page.modal).should("not.exist");
    cy.get("button").click();
    cy.get(page.modal).should("be.visible");
    cy.get(page.modalHeader).should("contain.text", "Awesome Modal");
    cy.get(page.modalFormInput).should("have.value", "Kalle Anka");
    cy.get(page.modalFormInput).clear();
    cy.get(page.modalFormInput).type("Joakim von Anka");
    cy.get(page.modalFormInput).blur();
    cy.get(page.modalSubmit).click();
    cy.get(page.modal).should("not.exist");
    cy.get(page.pre).should(
        "have.text",
        JSON.stringify({ name: "Joakim von Anka" }),
    );
});
