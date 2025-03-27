import { FDetailsPanelPageObject } from "@fkui/vue/cypress";
import Example from "./FDetailsPanelPageObject-header.vue";

it("header() should select correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const panel = FDetailsPanelPageObject.fromName("awesome-panel");
    panel
        .header()
        .should("exist")
        .and("match", "h2")
        .and("have.text", "Lorem ipsum");
    /* --- cut below --- */
});
