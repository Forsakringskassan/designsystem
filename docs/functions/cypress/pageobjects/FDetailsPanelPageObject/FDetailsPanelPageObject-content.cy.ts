import { FDetailsPanelPageObject } from "@fkui/vue/cypress";
import Example from "./FDetailsPanelPageObject-content.vue";

it("content() should select correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const panel = FDetailsPanelPageObject.fromName("awesome-panel");
    panel
        .content()
        .should("exist")
        .and("match", "div")
        .and("have.text", "Lorem ipsum");
    /* --- cut below --- */
});
