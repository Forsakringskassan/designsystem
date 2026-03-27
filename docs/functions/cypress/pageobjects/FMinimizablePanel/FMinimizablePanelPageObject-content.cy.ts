import { FMinimizablePanelPageObject } from "@fkui/vue/cypress";
import Example from "./FMinimizablePanelPageObject-content.vue";

it("content() should select correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const panel = new FMinimizablePanelPageObject("ce-minimizable-panel");
    panel
        .content()
        .should("exist")
        .and("match", "div")
        .and("have.text", "Lorem ipsum");
    /* --- cut below --- */
});
