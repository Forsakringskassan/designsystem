import { FLabelPageObject } from "@fkui/vue/pageobject";
import Example from "./FLabelPageObject.vue";

it("should have correct label", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const awesomeInput = new FLabelPageObject("[data-test=awesome-label]");
    awesomeInput.el().should("contain.text", "Min etikett");
    /* --- cut below --- */
});
