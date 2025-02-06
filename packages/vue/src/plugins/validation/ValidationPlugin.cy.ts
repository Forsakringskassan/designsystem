import { FRadioFieldPageObject, FTextFieldPageObject } from "../../cypress";
import ValidationPluginDynamicValidation from "./examples/ValidationPluginDynamicValidation.vue";
import ValidationPluginFormValidation from "./examples/ValidationPluginFormValidation.vue";
import ValidationPluginToggleDisable from "./examples/ValidationPluginToggleDisable.vue";
import ValidationPluginToggleEnabled from "./examples/ValidationPluginToggleEnabled.vue";
import ValidationPluginRevalidateList from "./examples/ValidationPluginRevalidateList.vue";

describe("ValidationPlugin", () => {
    it("should support dynamic validation via value sent from configuration", () => {
        cy.mount(ValidationPluginDynamicValidation);

        const nameTextField = new FTextFieldPageObject("#min-name");
        const lengthTextField = new FTextFieldPageObject("#min-minLength");

        nameTextField.input().should("have.value", "");
        lengthTextField.input().should("have.value", "8");
        nameTextField.label.errorMessage().should("not.exist");

        nameTextField.input().type("Kalle");
        nameTextField.input().should("have.value", "Kalle");
        lengthTextField.input().click();
        nameTextField.label
            .errorMessage()
            .should(
                "have.trimmedText",
                "Namn får inte vara kortare än minimum längd",
            );

        nameTextField.input().clear().type("KalleKalle");
        lengthTextField.label.errorMessage().should("not.exist");

        lengthTextField.input().clear().type("12");
        nameTextField.input().click().blur();
        nameTextField.label
            .errorMessage()
            .should(
                "have.trimmedText",
                "Namn får inte vara kortare än minimum längd",
            );
    });

    it("should prefix error messages when v-validation-prefix directive is used", () => {
        cy.mount(ValidationPluginFormValidation);
        const validationPrefixForm = (): Cypress.Chainable<
            JQuery<HTMLElement>
        > => cy.get('[data-test="form-validation-prefix"]');
        validationPrefixForm().find('button[type="submit"]').click();

        const errorLinks = (): Cypress.Chainable<JQuery<HTMLElement>> =>
            validationPrefixForm().get(".error-list__list li a");
        errorLinks().should("have.length", 3);

        errorLinks().should("contain", "PREFIX 1");
        errorLinks().should("contain", "PREFIX 2");
        errorLinks().should("contain", "PREFIX 3");
    });

    describe("list config reactivity", () => {
        it("should revalidate when list is replaced", () => {
            cy.mount(ValidationPluginRevalidateList);

            // list: ["foo", "bar", "baz"]
            cy.get("#input").type("foo");
            cy.get("#input").blur();
            cy.get("#error").should("not.exist");

            cy.get("#input").clear();
            cy.get("#input").type("doff");
            cy.get("#input").blur();
            cy.get("#error").should("be.visible");

            cy.get("#replace-list").click();
            // list: ["ole", "dole", "doff"]
            cy.get("#error").should("not.exist");
        });
    });

    describe('example "Inaktiva fält"', () => {
        it("should clear validation error when text field is disabled", () => {
            cy.mount(ValidationPluginToggleDisable);
            const textField = new FTextFieldPageObject(
                "[data-test=dynamic-disable]",
            );
            const disabledYes = new FRadioFieldPageObject(
                "[data-test=disabled-yes]",
            );

            /* given: input field has error */
            textField
                .input()
                .focus()
                .type(
                    "En text som innehåller mer än fyrtio tecken och överskrider maxlängd",
                )
                .blur();
            textField.label.errorMessage().should("contain", "MAXLENGTH");

            /* when: input field is disabled */
            disabledYes.radioButton().check({ force: true });

            /* then: validation error should be cleared */
            textField.label.errorMessage().should("not.exist");
        });
    });

    describe('example "Inaktivera validering"', () => {
        const validationEnabledTextField = new FTextFieldPageObject(
            '[data-test="validator-enabled"]',
        );

        beforeEach(() => {
            cy.mount(ValidationPluginToggleEnabled);
        });

        it("should display error if user leaves invalid field with validation enabled", () => {
            validationEnabledTextField
                .input()
                .focus()
                .type("Exceeds maxlength")
                .blur();
            validationEnabledTextField.label
                .errorMessage()
                .should("contain", "MAXLENGTH");
        });

        it("should not display error if user leaves invalid field with validation disabled", () => {
            cy.get('[data-test="validator-enabled-button"]').click();
            validationEnabledTextField
                .input()
                .focus()
                .type("Exceeds maxlength")
                .blur();
            validationEnabledTextField.label.errorMessage().should("not.exist");
        });
    });
});
