import { FLabelPageObject } from "@fkui/vue/cypress";
import Example from "./FLabelPageObject-error-message.vue";

it("errorMessage() should select correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const awesomeLabel = new FLabelPageObject("[data-test=awesome-label]");

    /* error message is not visible before validation */
    awesomeLabel.errorMessage().should("not.exist");

    /* trigger validation */
    cy.get("button").click();

    /* error message should now be present */
    awesomeLabel
        .errorMessage()
        .should("exist")
        .and("contain.text", "Fyll i text");
    /* --- cut below --- */
});
