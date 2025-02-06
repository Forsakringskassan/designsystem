import { defineComponent, type Component } from "vue";
import { FTextFieldPageObject } from "../../../../cypress";
import FNumericTextField from "./FNumericTextField.vue";

function defineTestComponent(
    textFieldTemplate: string,
    components: Record<string, Component>,
): ReturnType<typeof defineComponent> {
    return defineComponent({
        name: "TestComponent",
        template: /* HTML */ `
            <button
                data-test="toggleButton"
                type="button"
                class="button"
                @click="onClickToggleShowTextField"
            >
                Toggle showing text field
            </button>
            ${textFieldTemplate}
        `,
        components,
        data() {
            return {
                show: true,
                value: "",
            };
        },
        methods: {
            onClickToggleShowTextField(): void {
                this.show = !this.show;
            },
        },
    });
}

const textField = new FTextFieldPageObject(`[data-test="textField"]`);
const toggleButtonSelector = `[data-test="toggleButton"]`;

it("should retain correct error message when existence is toggled off and on (wrong format and too long)", () => {
    // Given
    const TestComponent = defineTestComponent(
        /* HTML */ `
            <f-numeric-text-field
                v-if="show"
                v-model="value"
                v-test="'textField'"
                v-validation.required.maxLength="{
                maxLength: { length: 3 },
            }"
            >
                Test
            </f-numeric-text-field>
        `,
        { FNumericTextField },
    );
    cy.mount(TestComponent);

    textField.enter("Wrong format and too long");
    textField.label.errorMessage().should("be.visible");
    textField.label
        .errorMessage()
        .invoke("text")
        .invoke("trim")
        .then((expectedErrorMessage) => {
            // When
            cy.get(toggleButtonSelector).click();
            textField.el().should("not.exist");
            cy.get(toggleButtonSelector).click();
            textField.el().should("be.visible");

            // Then
            textField.label.errorMessage().should("be.visible");
            textField.label
                .errorMessage()
                .invoke("text")
                .invoke("trim")
                .should("equal", expectedErrorMessage);
        });
});

it("should retain correct error message when existance is toggled off and on (wrong format)", () => {
    // Given
    const TestComponent = defineTestComponent(
        /* HTML */ `
            <f-numeric-text-field
                v-if="show"
                v-model="value"
                v-test="'textField'"
                v-validation.required.maxLength="{
                maxLength: { length: 20 },
            }"
            >
                Test
            </f-numeric-text-field>
        `,
        { FNumericTextField },
    );
    cy.mount(TestComponent);

    textField.enter("Wrong format");
    textField.label.errorMessage().should("be.visible");
    textField.label
        .errorMessage()
        .invoke("text")
        .invoke("trim")
        .then((expectedErrorMessage) => {
            // When
            cy.get(toggleButtonSelector).click();
            textField.el().should("not.exist");
            cy.get(toggleButtonSelector).click();
            textField.el().should("be.visible");

            // Then
            textField.label.errorMessage().should("be.visible");
            textField.label
                .errorMessage()
                .invoke("text")
                .invoke("trim")
                .should("equal", expectedErrorMessage);
        });
});

it("should show format error message when v-model has wrong value upon mount", () => {
    // Given
    const TestComponent = defineComponent({
        name: "TestComponent",
        template: /* HTML */ `
            <f-numeric-text-field
                v-model="value"
                v-test="'textField'"
                v-validation.required.maxLength="{
                maxLength: { length: 3 },
            }"
            >
                Test
            </f-numeric-text-field>
        `,
        components: { FNumericTextField },
        data() {
            return {
                value: "Malformatted and too long",
            };
        },
    });
    cy.mount(TestComponent);

    textField.label.errorMessage().should("be.visible");
    textField.label
        .errorMessage()
        .invoke("text")
        .invoke("trim")
        .should("equal", "Du har fyllt i ett ogiltigt tecken. Fyll i siffror.");
});
