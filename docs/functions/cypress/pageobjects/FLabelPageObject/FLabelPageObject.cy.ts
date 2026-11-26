import { FLabelPageObject } from "@fkui/vue/cypress";
import Example from "./FLabelPageObject.vue";

it("el() should select correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const awesomeLabel = new FLabelPageObject("[data-test=awesome-label]");
    awesomeLabel.el().should("contain.text", "Etikett");
    /* --- cut below --- */
});
