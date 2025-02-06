import { defineComponent } from "vue";
import {
    type DefaultCypressChainable,
    FFormModalPageObject,
    FTextFieldPageObject,
} from "../../../cypress";
import { FTextField } from "../../FTextField";
import { formModal } from "../../../utils/form-modal/form-modal";
import ExampleModal from "../examples/ExampleModal.vue";
import FFormModal from "./FFormModal.vue";

const TestComponent = defineComponent({
    template: /* HTML */ `
        <f-form-modal
            :use-error-list="useErrorList"
            :is-open="true"
            data-test="form-modal-example"
            :buttons="buttons"
        >
            <template #header> Rubrik </template>
            <template #input-text-fields>
                <f-text-field v-model="field1" v-validation.required>
                    Field1
                </f-text-field>
                <button
                    type="button"
                    class="button button--discrete"
                    data-test="add-dynamic-button"
                    @click="addDynamicButton"
                >
                    Add dynamic button
                </button>
            </template>
        </f-form-modal>
    `,
    components: {
        FFormModal,
        FTextField,
    },
    props: {
        useErrorList: Boolean,
        field1: null,
        buttons: Array,
    },
    methods: {
        addDynamicButton() {
            if (!this.buttons) {
                return;
            }
            this.buttons.push({
                label: "Custom",
                event: "dismiss",
                type: "secondary",
            });
        },
    },
});

describe("useErrorList", () => {
    const modal = new FFormModalPageObject('[data-test="form-modal-example"]');
    it("should be shown when useErrorList is enabled", () => {
        cy.mount(TestComponent, {
            props: {
                useErrorList: true,
            },
        });
        modal.submitButton().click();
        cy.get(".error-list").should("exist");
    });

    it("should not be shown when useErrorList is disabled", () => {
        cy.mount(TestComponent, {
            props: {
                useErrorList: false,
            },
        });
        modal.submitButton().click();
        cy.get(".error-list").should("not.exist");
    });
});

describe("Custom buttons", () => {
    const modal = new FFormModalPageObject('[data-test="form-modal-example"]');

    beforeEach(() => {
        cy.mount(TestComponent, {
            props: {
                useErrorList: true,
                buttons: [
                    {
                        label: "Spara",
                        event: "submit",
                        type: "primary",
                        submitButton: true,
                    },
                ],
            },
        });
    });

    it("should only show Submit button", () => {
        modal.cancelButton().should("not.exist");
        modal.submitButton().should("be.visible");
        modal.submitButton().should("contain.text", "Spara");
    });

    it("should be possible to dynamically add buttons", () => {
        modal.cancelButton().should("not.exist");
        cy.get(`[data-test="add-dynamic-button"]`).click();
        modal.cancelButton().should("be.visible");
        modal.cancelButton().should("contain.text", "Custom");
        modal.submitButton().should("be.visible");
    });
});

describe("FFormModal usable with API", () => {
    const modal = new FFormModalPageObject(
        '[data-test="form-modal-api-example"]',
    );

    const FFormModalAPIComponent = defineComponent({
        template: /* HTML */ `
            <div class="f-form-modal-example">
                <button
                    data-test="form-modal-api-example-button"
                    type="button"
                    class="button button--secondary"
                    @click="onClick"
                >
                    Öppna Modal
                </button>
                <div v-if="result">
                    <pre> Modalen stängdes med resultatet:</pre>
                    <pre id="api-result"> {{ result }} </pre>
                </div>
            </div>
        `,
        components: {
            FFormModal,
        },
        props: {},
        data() {
            return {
                result: "",
            };
        },
        methods: {
            async onClick() {
                this.result = "";
                try {
                    this.result = await formModal(this, ExampleModal, {
                        props: {
                            dataTest: "form-modal-api-example",
                            frukt: "Kiwi",
                        },
                    });
                } catch {
                    return;
                }
            },
        },
    });

    beforeEach(() => {
        cy.mount(FFormModalAPIComponent, {});
    });

    const textfield1 = new FTextFieldPageObject('[data-test="field1"]');
    const textfield2 = new FTextFieldPageObject('[data-test="field2"]');

    const openAPIModalButton = (): DefaultCypressChainable =>
        cy.get('[data-test="form-modal-api-example-button"]');

    it("should be usable with API retrieving submitted data in result", () => {
        openAPIModalButton().click();
        textfield1.input().focus();
        textfield1.input().clear().type("Päron").blur();
        textfield1.input().should("have.value", "Päron");
        textfield2.input().focus();
        textfield2.input().type("Söt").blur();
        textfield2.input().should("have.value", "Söt");
        modal.submitButton().scrollIntoView();
        modal.submitButton().should("be.visible");
        modal.submitButton().click();
        const resultText = (): DefaultCypressChainable =>
            cy.get("pre#api-result");
        resultText().should("contain", "Päron");
        resultText().should("contain", "Söt");
        resultText().should("not.contain", '""');
    });

    it("should have same plugins as calling app", () => {
        openAPIModalButton().click();
        modal.submitButton().scrollIntoView().should("be.visible").click();

        // verify ValidationPlugin is used
        textfield2.label
            .errorMessage()
            .should("have.trimmedText", "Fyll i text.");
    });
});
