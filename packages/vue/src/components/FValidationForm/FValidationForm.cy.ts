import { ExamplePageobject } from "./docs/Example.pageobject";
import NoErrorListExample from "./docs/NoErrorList.vue";
import WithErrorListExample from "./docs/WithErrorList.vue";
import WithErrorListAndCbFunctionExample from "./docs/WithErrorListAndCbFunction.vue";

const po = new ExamplePageobject("form");

describe("FValidationForm", () => {
    it("should validate a text field mounted in a shadow dom", () => {
        cy.document().then((document) => {
            const shadowHost = document.createElement("div");
            shadowHost.className = "shadow-host";
            document.body.append(shadowHost);

            cy.mount(NoErrorListExample, {
                attachTo: shadowHost.attachShadow({
                    mode: "open",
                }) as unknown as HTMLElement,
            });
        });

        cy.get(".shadow-host")
            .shadow()
            .find(po.textField1.selector)
            .should("be.visible");

        cy.get(".shadow-host")
            .shadow()
            .find(po.textField2.selector)
            .should("be.visible");

        cy.get(".shadow-host")
            .shadow()
            .find(po.submitSelectors.selector)
            .should("be.visible")
            .click();

        cy.get(".shadow-host")
            .shadow()
            .find(po.firstTextFieldLabelSelectors().errorMessage())
            .should("be.visible")
            .should("contain.text", "Fyll i text");

        cy.get(".shadow-host")
            .shadow()
            .find(po.secondTextFieldLabelSelectors().errorMessage())
            .should("be.visible")
            .should("contain.text", "Fyll i text");
    });

    it("should display error if one field is invalid on submit", () => {
        cy.mount(WithErrorListExample);

        po.textField1.input().type("foo");

        cy.get(po.submitSelectors.selector).click();

        po.errorlist.getLinkByName("Field1").should("not.exist");
        po.errorlist.getLinkByName("Field2").should("exist");
        po.errorlist.el().should("exist");
    });

    it("should not display errorlist after filling both fields", () => {
        cy.mount(WithErrorListExample);

        po.textField1.input().type("foo");
        po.textField2.input().type("foo");

        cy.get(po.submitSelectors.selector).click();

        po.errorlist.el().should("not.exist");
    });

    it("should display errorlist with 2 errors", () => {
        cy.mount(WithErrorListExample);

        cy.get(po.submitSelectors.selector).click();

        po.errorlist.getLinkByName("Field1").should("exist");
        po.errorlist.getLinkByName("Field2").should("exist");
    });

    it("should move focus to field when clicking errorlink", () => {
        cy.mount(WithErrorListExample);

        cy.get(po.submitSelectors.selector).click();

        po.errorlist.getLinkByName("Field1").click();
        cy.focused().should("have.attr", "id").and("eq", "field1");

        po.errorlist.getLinkByName("Field2").click();
        cy.focused().should("have.attr", "id").and("eq", "field2");
    });

    it("should not show errorlist on submit when fields are valid", () => {
        cy.mount(WithErrorListExample);
        po.textField1.input().type("foo");
        po.textField2.input().type("foo");

        cy.get("form").submit();

        po.errorlist.el().should("not.exist");
    });

    it("should not display errorlist when leaving input field", () => {
        cy.mount(WithErrorListExample);

        po.textField1.input().focus().blur();

        po.errorlist.el().should("not.exist");
    });

    it("should update errorlist when updating errors in fields", () => {
        cy.mount(WithErrorListExample);

        po.textField1.input().type("foo");

        cy.get(po.submitSelectors.selector).click();

        po.errorlist.getLinkByName("Field1").should("not.exist");
        po.errorlist.getLinkByName("Field2").should("exist");

        po.textField2.input().type("foo").blur();
        po.errorlist.el().should("not.exist");
    });

    it("should display errors after submitted valid fields and making fields invalid", () => {
        cy.mount(WithErrorListExample);

        po.textField1.input().type("foo");
        po.textField2.input().type("foo");

        cy.get(po.submitSelectors.selector).click();

        po.errorlist.el().should("not.exist");

        po.textField2.input().clear().blur();

        po.errorlist.getLinkByName("Field2");
    });

    it("should display errors in same order as input fields", () => {
        cy.mount(WithErrorListExample);

        cy.get(po.submitSelectors.selector).click();

        po.errorlist.listItems().first().contains("Field1").should("exist");
        po.errorlist
            .listItems()
            .first()
            .next()
            .contains("Field2")
            .should("exist");
    });

    it("should not display error list when adding prop 'useErrorList=False'", () => {
        cy.mount(NoErrorListExample);

        cy.get(po.submitSelectors.selector).click();

        po.errorlist.el().should("not.exist");
    });

    it("should display custom error message via slot", () => {
        cy.mount(WithErrorListExample);

        cy.get(po.submitSelectors.selector).click();

        po.errorlist.el().get("span").contains("Custom message");
    });

    it("should execute FErrorList callback function when clicking errorLink", () => {
        cy.mount(WithErrorListAndCbFunctionExample);
        cy.get(po.submitSelectors.selector).click();

        po.errorlist.getLinkByName("Field1").click();
        cy.focused().should("have.attr", "id").and("eq", "field1");

        po.errorlist.getLinkByName("Field2").click();
        cy.focused().should("have.attr", "id").and("eq", "field2");
    });
});
