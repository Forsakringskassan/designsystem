import { FMinimizablePanelPageObject } from "@fkui/vue/cypress";
import Example from "./FMinimizablePanelPageObject-toggle-button.vue";

it("toggleButton() should select correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const panel = new FMinimizablePanelPageObject("ce-minimizable-panel");
    panel.toggleButton().click();
    panel.header().should("not.exist");
    /* --- cut below --- */
});
