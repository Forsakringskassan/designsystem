import { FTextFieldPageObject } from "../../../../cypress/FTextField.pageobject";
import FEmailTextField from "./FEmailTextField.vue";

function mount(): FTextFieldPageObject {
    cy.mount(FEmailTextField, {
        attrs: { "extended-validation": true },
        slots: {
            extendedLabel: "",
        },
    });
    return new FTextFieldPageObject("body");
}

describe("FEmailTextField", () => {
    const selector = "body";
    const firstEmailTextField = new FTextFieldPageObject(
        `${selector} .text-field:nth(0)`,
    );
    const secondEmailTextField = new FTextFieldPageObject(
        `${selector} .text-field:nth(1)`,
    );

    beforeEach(() => {
        mount();
    });

    describe("extended validation", () => {
        it("should have two email fields with the second matching the input of the first", () => {
            firstEmailTextField.label.errorIcon().should("not.exist");
            secondEmailTextField.label.errorIcon().should("not.exist");
            firstEmailTextField
                .input()
                .focus()
                .clear()
                .type("user@example.net");
            secondEmailTextField.input().click();
            firstEmailTextField.label.errorIcon().should("not.exist");
            secondEmailTextField.label.errorIcon().should("not.exist");

            secondEmailTextField
                .input()
                .focus()
                .clear()
                .type("user@example.net");

            firstEmailTextField.input().click();
            firstEmailTextField.label.errorIcon().should("not.exist");
            secondEmailTextField.label.errorIcon().should("not.exist");
        });

        it("should have two email fields with the second matching displaying error if it doesnt match input of the first", () => {
            firstEmailTextField
                .input()
                .focus()
                .clear()
                .type("user@example.net");

            secondEmailTextField
                .input()
                .focus()
                .clear()
                .type("anotheruser@example.net");

            firstEmailTextField.input().click();
            firstEmailTextField.label.errorIcon().should("not.exist");
            secondEmailTextField.label.errorIcon().should("be.visible");
        });

        it("[KNOWN BUG]: should have two email fields with the second matching displaying error if first is updated", () => {
            firstEmailTextField
                .input()
                .focus()
                .clear()
                .type("user@example.net");

            secondEmailTextField
                .input()
                .focus()
                .clear()
                .type("user@example.net");

            firstEmailTextField.input().click();
            firstEmailTextField.label.errorIcon().should("not.exist");
            secondEmailTextField.label.errorIcon().should("not.exist");

            firstEmailTextField
                .input()
                .clear()
                .focus()
                .clear()
                .type("anotheruser@example.net");

            secondEmailTextField.input().click();
            firstEmailTextField.label.errorIcon().should("not.exist");

            /*
             * [KNOWN BUG]: SFKUI-1858 - "Matches validator är inte responsiv för bevakade fältet"
             *
             * Enable:a när buggen är fixad.
             */
            /*
            secondEmailTextField.label.errorIcon().should('be.visible');
            */
        });

        it("should have two email fields with the second matching displaying error if second is updated", () => {
            firstEmailTextField
                .input()
                .focus()
                .clear()
                .type("user@example.net");

            secondEmailTextField
                .input()
                .focus()
                .clear()
                .type("user@example.net");

            firstEmailTextField.input().click();
            firstEmailTextField.label.errorIcon().should("not.exist");
            secondEmailTextField.label.errorIcon().should("not.exist");

            secondEmailTextField
                .input()
                .clear()
                .focus()
                .clear()
                .type("anotheruser@example.net");

            firstEmailTextField.input().click();
            firstEmailTextField.label.errorIcon().should("not.exist");
            secondEmailTextField.label.errorIcon().should("be.visible");
        });
    });
});
