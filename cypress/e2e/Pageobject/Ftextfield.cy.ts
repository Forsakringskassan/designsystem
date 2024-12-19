import { FTextFieldPageObject } from "@fkui/vue/pageobject";

it("labelexample", () => {
    cy.visit("api/vue/pageobjects/FTextFieldPageObject/label.html");

    const awesomeInput = new FTextFieldPageObject("[data-test=awesome-input]");

    awesomeInput.label.el().should("contain.text", "My Awesome Input");
});
