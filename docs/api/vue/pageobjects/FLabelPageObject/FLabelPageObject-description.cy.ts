import { FLabelPageObject } from "@fkui/vue/pageobject";
import Example from "./FLabelPageObject-description.vue";

it("description() should select correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const awesomeLabel = new FLabelPageObject("[data-test=awesome-label]");
    awesomeLabel.description().should("contain.text", "Hjälptext");
    /* --- cut below --- */
});
