import { FDetailsPanelPageObject } from "@fkui/vue/cypress";
import Example from "./FDetailsPanelPageObject.vue";

it("el() should select correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const panel = FDetailsPanelPageObject.fromName("awesome-panel");
    panel.el().should("exist");
    /* --- cut below --- */
});
