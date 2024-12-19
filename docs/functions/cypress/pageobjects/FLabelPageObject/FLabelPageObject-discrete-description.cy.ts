import { FLabelPageObject } from "@fkui/vue/pageobject";
import Example from "./FLabelPageObject-discrete-description.vue";

it("discreteDescription() should select correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const awesomeLabel = new FLabelPageObject("[data-test=awesome-label]");
    awesomeLabel
        .discreteDescription()
        .should("contain.text", "Formatbeskrivning");
    /* --- cut below --- */
});
