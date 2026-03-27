import { FMinimizablePanelPageObject } from "@fkui/vue/cypress";
import Example from "./FMinimizablePanelPageObject.vue";

it("el() should select correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const panel = new FMinimizablePanelPageObject("ce-minimizable-panel");
    panel.el().should("exist");
    /* --- cut below --- */
});
