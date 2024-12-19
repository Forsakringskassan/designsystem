import { FLabelPageObject } from "@fkui/vue/pageobject";

beforeEach(() => {
    cy.visit("/components/label.html");
});

it("should have correct label", () => {
    /* --- cut above --- */
    const awesomeInput = new FLabelPageObject("[data-test=awesome-label]");

    awesomeInput.el().should("contain.text", "Min etikett");
    /* --- cut below --- */
});
