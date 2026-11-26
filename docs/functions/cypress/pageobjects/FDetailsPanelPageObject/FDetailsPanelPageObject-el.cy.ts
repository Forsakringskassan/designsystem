import { FDetailsPanelPageObject } from "@fkui/vue/cypress";
import Example from "./FDetailsPanelPageObject-el.vue";

it("el() should select correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const panel = FDetailsPanelPageObject.fromName("awesome-panel");
    panel.el().should("not.exist");
    cy.get("button").click();
    panel.el().should("exist");
    /* --- cut below --- */
});
