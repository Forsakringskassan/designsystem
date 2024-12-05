import { FTextFieldPageObject } from "@fkui/vue/pageobject";

beforeEach(() => {
    cy.visit("/components/label.html");
});

it("should have correct label", () => {
    const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

    awesomeInput.label.el().should("contain.text", "My Awesome Input");
});
