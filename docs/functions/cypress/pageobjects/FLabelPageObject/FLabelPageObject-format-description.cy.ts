import { FLabelPageObject } from "@fkui/vue/cypress";
import Example from "./FLabelPageObject-format-description.vue";

it("formatDescription() should select correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const awesomeLabel = new FLabelPageObject("[data-test=awesome-label]");
    awesomeLabel
        .formatDescription()
        .should("contain.text", "Formatbeskrivning");
    /* --- cut below --- */
});
