import { ExamplePageobject } from "./examples/Example.pageobject";
import WithErrorListExample from "./examples/WithErrorList.vue";
import NoErrorListExample from "./examples/NoErrorList.vue";

const validationForm = new ExamplePageobject("form");

describe("FValidationForm", () => {
    it("should display error if one field is invalid on submit", () => {
        cy.mount(WithErrorListExample);

        validationForm.getFirstTextFieldInput().type("foo");

        validationForm.getSubmitButton().click();

        validationForm.errorlist.getLinkByName("Field1").should("not.exist");
        validationForm.errorlist.getLinkByName("Field2").should("exist");
        validationForm.errorlist.el().should("exist");
    });
    it("should not display errorlist after filling both fields", () => {
        cy.mount(WithErrorListExample);

        validationForm.getFirstTextFieldInput().type("foo");
        validationForm.getSecondTextFieldInput().type("foo");

        validationForm.getSubmitButton().click();

        validationForm.errorlist.el().should("not.exist");
    });

    it("should display errorlist with 2 errors", () => {
        cy.mount(WithErrorListExample);

        validationForm.getSubmitButton().click();

        validationForm.errorlist.getLinkByName("Field1").should("exist");
        validationForm.errorlist.getLinkByName("Field2").should("exist");
    });

    it("should move focus to field when clicking errorlink", () => {
        cy.mount(WithErrorListExample);

        validationForm.getSubmitButton().click();

        validationForm.errorlist.getLinkByName("Field1").click();
        cy.focused().should("have.attr", "id").and("eq", "field1");

        validationForm.errorlist.getLinkByName("Field2").click();
        cy.focused().should("have.attr", "id").and("eq", "field2");
    });

    it("should not show errorlist on submit when fields are valid", () => {
        cy.mount(WithErrorListExample);
        validationForm.getFirstTextFieldInput().type("foo");
        validationForm.getSecondTextFieldInput().type("foo");

        cy.get("form").submit();

        validationForm.errorlist.el().should("not.exist");
    });

    it("should not display errorlist when leaving input field", () => {
        cy.mount(WithErrorListExample);

        validationForm.getFirstTextFieldInput().focus().blur();

        validationForm.errorlist.el().should("not.exist");
    });

    it("should update errorlist when updating errors in fields", () => {
        cy.mount(WithErrorListExample);

        validationForm.getFirstTextFieldInput().type("foo");

        validationForm.getSubmitButton().click();

        validationForm.errorlist.getLinkByName("Field1").should("not.exist");
        validationForm.errorlist.getLinkByName("Field2").should("exist");

        validationForm.getSecondTextFieldInput().type("foo").blur();
        validationForm.errorlist.el().should("not.exist");
    });

    it("should display errors after submitted valid fields and making fields invalid", () => {
        cy.mount(WithErrorListExample);

        validationForm.getFirstTextFieldInput().type("foo");
        validationForm.getSecondTextFieldInput().type("foo");

        validationForm.getSubmitButton().click();

        validationForm.errorlist.el().should("not.exist");

        validationForm.getSecondTextFieldInput().clear().blur();

        validationForm.errorlist.getLinkByName("Field2");
    });

    it("should display errors in same order as input fields", () => {
        cy.mount(WithErrorListExample);

        validationForm.getSubmitButton().click();

        validationForm.errorlist
            .listItems()
            .first()
            .contains("Field1")
            .should("exist");
        validationForm.errorlist
            .listItems()
            .first()
            .next()
            .contains("Field2")
            .should("exist");
    });

    it("should not display error list when adding prop 'useErrorList=False'", () => {
        cy.mount(NoErrorListExample);

        validationForm.getSubmitButton().click();

        validationForm.errorlist.el().should("not.exist");
    });

    it("should display custom error message via slot", () => {
        cy.mount(WithErrorListExample);

        validationForm.getSubmitButton().click();

        validationForm.errorlist.el().get("span").contains("Custom message");
    });
});
