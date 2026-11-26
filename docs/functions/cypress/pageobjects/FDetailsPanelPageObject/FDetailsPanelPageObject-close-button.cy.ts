import { FDetailsPanelPageObject } from "@fkui/vue/cypress";
import Example from "./FDetailsPanelPageObject-close-button.vue";

it("closeButton() should select correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const panel = FDetailsPanelPageObject.fromName("awesome-panel");
    panel.closeButton().click();
    panel.el().should("not.exist");
    /* --- cut below --- */
});
