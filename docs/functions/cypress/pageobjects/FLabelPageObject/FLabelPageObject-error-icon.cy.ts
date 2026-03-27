import { FLabelPageObject } from "@fkui/vue/cypress";
import Example from "./FLabelPageObject-error-icon.vue";

it("errorIcon() should select correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const awesomeLabel = new FLabelPageObject("[data-test=awesome-label]");

    /* error icon is not visible before validation */
    awesomeLabel.errorIcon().should("not.exist");

    /* trigger validation */
    cy.get("button").click();

    /* error icon should now be present */
    awesomeLabel.errorIcon().should("exist");
    /* --- cut below --- */
});
