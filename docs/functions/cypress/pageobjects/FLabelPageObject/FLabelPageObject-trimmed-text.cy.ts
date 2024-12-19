import { FLabelPageObject } from "@fkui/vue/pageobject";
import Example from "./FLabelPageObject-trimmed-text.vue";

it("trimmedText() should select correct text", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const awesomeLabel = new FLabelPageObject("[data-test=awesome-label]");
    awesomeLabel.trimmedText().should("be.equal", "Etikett");
    /* --- cut below --- */
});
