import { FTextFieldPageObject } from "../../../../cypress/FTextField.pageobject";
import FPhoneTextField from "./FPhoneTextField.vue";

function mount(): FTextFieldPageObject {
    cy.mount(FPhoneTextField, {
        attrs: { "extended-validation": true },
        slots: {
            extendedLabel: "",
        },
    });
    return new FTextFieldPageObject("body");
}

describe("FPhoneTextField", () => {
    const selector = "body";
    const firstPhoneNumberTextField = new FTextFieldPageObject(
        `${selector} .text-field:nth(0)`,
    );
    const secondPhoneNumberTextField = new FTextFieldPageObject(
        `${selector} .text-field:nth(1)`,
    );

    beforeEach(() => {
        mount();
    });

    describe("extended validation", () => {
        it("should be able to set custom label at default and extended slot", () => {
            cy.mount(FPhoneTextField, {
                attrs: { "extended-validation": true },
                slots: {
                    extendedLabel: "Skriv in ditt telefonnummer på nytt",
                },
            });
            cy.get(".text-field")
                .eq(0)
                .should("have.trimmedText", "Telefonnummer");
            cy.get(".text-field")
                .eq(1)
                .should(
                    "have.trimmedText",
                    "Skriv in ditt telefonnummer på nytt",
                );
        });

        it("should have two phone number fields with the second matching the input of the first", () => {
            firstPhoneNumberTextField.label.errorIcon().should("not.exist");
            secondPhoneNumberTextField.label.errorIcon().should("not.exist");
            firstPhoneNumberTextField.input().focus().clear().type("123456789");
            secondPhoneNumberTextField.input().click();
            firstPhoneNumberTextField.label.errorIcon().should("not.exist");
            secondPhoneNumberTextField.label.errorIcon().should("not.exist");

            secondPhoneNumberTextField
                .input()
                .focus()
                .clear()
                .type("123456789");

            firstPhoneNumberTextField.input().click();
            firstPhoneNumberTextField.label.errorIcon().should("not.exist");
            secondPhoneNumberTextField.label.errorIcon().should("not.exist");
        });

        it("should have two phone number fields with the second matching displaying error if it doesnt match input of the first", () => {
            firstPhoneNumberTextField.input().focus().clear().type("123456789");

            secondPhoneNumberTextField
                .input()
                .focus()
                .clear()
                .type("987654321");

            firstPhoneNumberTextField.input().click();
            firstPhoneNumberTextField.label.errorIcon().should("not.exist");
            secondPhoneNumberTextField.label.errorIcon().should("be.visible");
        });

        it("[KNOWN BUG]: should have two phone number fields with the second matching displaying error if first is updated", () => {
            firstPhoneNumberTextField.input().focus().clear().type("123456789");

            secondPhoneNumberTextField
                .input()
                .focus()
                .clear()
                .type("123456789");

            firstPhoneNumberTextField.input().click();
            firstPhoneNumberTextField.label.errorIcon().should("not.exist");
            secondPhoneNumberTextField.label.errorIcon().should("not.exist");

            firstPhoneNumberTextField
                .input()
                .clear()
                .focus()
                .clear()
                .type("987654321");

            secondPhoneNumberTextField.input().click();
            firstPhoneNumberTextField.label.errorIcon().should("not.exist");

            /*
             * [KNOWN BUG]: SFKUI-1858 - "Matches validator är inte responsiv för bevakade fältet"
             *
             * Enable:a när buggen är fixad.
             */
            /*
            secondPhoneNumberTextField.label.errorIcon().should('be.visible');
            */
        });

        it("should have two phone number fields with the second matching displaying error if second is updated", () => {
            firstPhoneNumberTextField.input().focus().clear().type("123456789");

            secondPhoneNumberTextField
                .input()
                .focus()
                .clear()
                .type("123456789");

            firstPhoneNumberTextField.input().click();
            firstPhoneNumberTextField.label.errorIcon().should("not.exist");
            secondPhoneNumberTextField.label.errorIcon().should("not.exist");

            secondPhoneNumberTextField
                .input()
                .clear()
                .focus()
                .clear()
                .type("987654321");

            firstPhoneNumberTextField.input().click();
            firstPhoneNumberTextField.label.errorIcon().should("not.exist");
            secondPhoneNumberTextField.label.errorIcon().should("be.visible");
        });
    });
});
